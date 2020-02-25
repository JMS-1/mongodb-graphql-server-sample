import { Connection } from '@jms-1/mongodb-graphql/lib/connection'
import { MongoClient } from 'mongodb'

export const MongoConnection = new Connection(
    MongoClient.connect('mongodb://localhost:27017/apollo1', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
)
