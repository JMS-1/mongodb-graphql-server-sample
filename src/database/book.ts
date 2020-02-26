import { Collection } from '@jms-1/mongodb-graphql/lib/collection'

import { MongoConnection } from './connection'

import { Book } from '../models/book'

export const BookCollection = MongoConnection.createCollection(
    Book,
    class extends Collection<typeof Book> {
        readonly collectionName = 'books'
    }
)
