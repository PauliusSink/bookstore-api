import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
class Book {
    @Field()
    id: string

    @Field()
    name: string

    @Field()
    createdAt: string

    @Field()
    updatedAt: string
}

export default Book
