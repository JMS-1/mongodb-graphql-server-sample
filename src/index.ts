import { createSchemaConfiguration } from '@jms-1/mongodb-graphql/lib/schema'
import { ApolloServer } from 'apollo-server'
import { GraphQLSchema } from 'graphql'

import { BookCollection } from './database/book'

async function startup(): Promise<void> {
    const server = new ApolloServer({
        schema: new GraphQLSchema(
            await createSchemaConfiguration({
                books: BookCollection,
            })
        ),
    })

    server.listen().then(({ url }) => {
        console.log(`Playground on ${url}`)
    })
}

startup()
