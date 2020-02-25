import { createSchemaConfiguration } from '@jms-1/mongodb-graphql/lib/schema'
import { ApolloServer } from 'apollo-server'
import { GraphQLSchema } from 'graphql'

import { BookCollection } from './database/book'

const server = new ApolloServer({
    schema: new GraphQLSchema(
        createSchemaConfiguration({
            books: BookCollection,
        })
    ),
})

server.listen().then(({ url }) => {
    console.log(`Playground on ${url}`)
})
