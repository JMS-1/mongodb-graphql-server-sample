import { TGqlLayoutType } from '@jms-1/mongodb-graphql'
import { Collection } from '@jms-1/mongodb-graphql/lib/collection'

import { MongoConnection } from './connection'

import { IBook } from '../client'
import { Book } from '../models/book'

export const BookCollection = MongoConnection.createCollection(
    Book,
    class BookCollection extends Collection<IBook, TGqlLayoutType<typeof Book>> {
        readonly collectionName = 'books'
    }
)
