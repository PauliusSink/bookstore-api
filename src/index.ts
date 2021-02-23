import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import mongoose from 'mongoose'
import { buildSchema } from 'type-graphql'
import { BooksResolver } from './resolvers/BooksResolver'
import { ReviewsResolver } from './resolvers/ReviewsResolver'

const startServer = async () => {
    const app = express()

    await mongoose.connect('mongodb://localhost:27017/Bookstore', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [BooksResolver, ReviewsResolver]
        })
    })

    apolloServer.applyMiddleware({ app })
    app.listen(3000, () => {
        console.log('Server is listening on port 3000')
    })
}

startServer()
