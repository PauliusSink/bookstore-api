import mongoose, { Schema } from 'mongoose'
import BookInterface from '../interfaces/booksInterface'
import moment from 'moment'
import formatDates from '../utils/formatDate'

const BookSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        createdAt: {
            type: String
        },
        updatedAt: {
            type: String
        }
    },
    {
        timestamps: { currentTime: (): number => moment().valueOf() }
    }
)

BookSchema.pre('save', function (this: BookInterface, next: Function): void {
    const {
        formatedCreatedAt,
        formatedUpdatedAt
    }: {
        formatedCreatedAt: string | null
        formatedUpdatedAt: string
    } = formatDates(this)

    this.createdAt = formatedCreatedAt ? formatedCreatedAt : this.createdAt
    this.updatedAt = formatedUpdatedAt
    next()
})

export default mongoose.model<BookInterface>('books', BookSchema)
