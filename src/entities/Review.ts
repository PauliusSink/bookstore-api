import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
class Review {
    @Field()
    id: string

    @Field()
    bookId: string

    @Field()
    review: string

    @Field()
    author: string

    @Field()
    createdAt: string

    @Field()
    updatedAt: string
}

export default Review
