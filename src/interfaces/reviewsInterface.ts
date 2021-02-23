import { Document } from 'mongoose'

export default interface ReviewInterface extends Document {
    bookId: string
    review: string
    author: string
    createdAt: string
    updatedAt: string
}
