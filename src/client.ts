import { TGqlType, TGetFilterArgs, TGetMethodResult, TGetMethodArgs } from '@jms-1/mongodb-graphql'

import { BookCollection } from './database/book'
import { BookReview, Book } from './models/book'

export type IBookReview = TGqlType<typeof BookReview>
export type IBook = TGqlType<typeof Book>

export type IBookFindArgs = TGetFilterArgs<typeof BookCollection, 'find'>
export type IBookFindResult = TGetMethodResult<typeof BookCollection, 'find'>

export type IBookFindOneArgs = TGetMethodArgs<typeof BookCollection, 'findOne'>
export type IBookFindOneResult = TGetMethodResult<typeof BookCollection, 'findOne'>

export type IBookAddArgs = TGetMethodArgs<typeof BookCollection, 'add'>
export type IBookAddResult = TGetMethodResult<typeof BookCollection, 'add'>

export type IBookUpdateArgs = TGetMethodArgs<typeof BookCollection, 'update'>
export type IBookUpdateResult = TGetMethodResult<typeof BookCollection, 'update'>

export type IBookRemoveArgs = TGetMethodArgs<typeof BookCollection, 'remove'>
export type IBookRemoveResult = TGetMethodResult<typeof BookCollection, 'remove'>
