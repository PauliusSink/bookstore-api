import { Document } from 'mongoose'

export default interface BookInterface extends Document {
    name: string
    createdAt: string
    updatedAt: string
}
