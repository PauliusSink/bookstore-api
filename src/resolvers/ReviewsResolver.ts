import { Resolver, Query, Arg, Mutation } from 'type-graphql'
import ReviewsModel from '../models/reviewsModel'
import Review from '../entities/Review'

@Resolver()
export class ReviewsResolver {
    @Query(() => [Review])
    async reviews(@Arg('bookId') bookId: string) {
        const reviews = await ReviewsModel.find({ bookId })
        return reviews
    }

    @Query(() => Review)
    async review(
        @Arg('reviwId', () => String, { nullable: true }) reviewId: string
    ) {
        const review = await ReviewsModel.findById(reviewId)
        if (!review) {
            throw new Error('Review not found')
        }
        return review
    }

    @Query(() => [String])
    async authors() {
        const reviews = await ReviewsModel.find({})
        const authors = reviews.map((review) => review.author)
        return authors
    }

    @Mutation(() => Review)
    async addReview(
        @Arg('bookId') bookId: string,
        @Arg('review') review: string,
        @Arg('author', () => String, { nullable: true }) author: string | null
    ) {
        const bookReview = await new ReviewsModel({
            bookId,
            review,
            author
        }).save()
        return bookReview
    }

    @Mutation(() => Review)
    async updateReview(
        @Arg('bookId') bookId: string,
        @Arg('review') review: string,
        @Arg('newReview') newReview: string
    ) {
        const updatedReview = await ReviewsModel.findOne({ bookId, review })
        if (!updatedReview) {
            throw new Error('Review not found')
        }
        updatedReview.review = newReview
        await updatedReview.save()
        return updatedReview
    }
}
