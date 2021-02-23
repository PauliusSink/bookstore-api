import { Resolver, Query, Arg, Mutation } from 'type-graphql'
import BookModel from '../models/booksModel'
import Book from '../entities/Book'
import BookInterface from '../interfaces/booksInterface'

@Resolver()
export class BooksResolver {
    @Query(() => [Book])
    async books() {
        const books = await BookModel.find({})
        return books
    }

    @Query(() => Book)
    async book(@Arg('id', () => String, { nullable: true }) id: string) {
        const book = await BookModel.findById(id)
        if (!book) {
            throw new Error('Book not found')
        }
        return book
    }

    @Mutation(() => Book)
    async addBook(@Arg('name') name: string) {
        const book = await new BookModel({
            name
        }).save()
        return book
    }

    @Mutation(() => Book)
    async updateBook(
        @Arg('name') name: string,
        @Arg('newName') newName: string
    ) {
        let book: BookInterface | null = await BookModel.findOne({ name })
        if (!book) {
            throw new Error('Book not found')
        }
        book.name = newName
        await book.save()
        return book
    }
}
