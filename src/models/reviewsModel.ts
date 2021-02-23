import mongoose, { Schema } from 'mongoose'
import moment from 'moment'
import ReviewInterface from '../interfaces/reviewsInterface'
import formatDates from '../utils/formatDate'

const ReviewSchema: Schema = new Schema(
    {
        bookId: {
            type: String,
            required: true
        },
        review: {
            type: String,
            required: true
        },
        author: {
            type: String,
            default: 'Anonymous'
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

ReviewSchema.pre(
    'save',
    function (this: ReviewInterface, next: Function): void {
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
    }
)

export default mongoose.model<ReviewInterface>('reviews', ReviewSchema)
