import { TGqlType, TGetFilterArgs, TGetMethodResult, TGetMethodArgs, TCollection } from '@jms-1/mongodb-graphql'

import { BookCollection } from './database/book'
import { BookReview, Book } from './models/book'

export type IBookReview = TGqlType<typeof BookReview>
export type IBook = TGqlType<typeof Book>

type TBookCollection = TCollection<typeof BookCollection>

export type IBookFindArgs = TGetFilterArgs<TBookCollection, 'find'>
export type IBookFindResult = TGetMethodResult<TBookCollection, 'find'>

export type IBookFindOneArgs = TGetMethodArgs<TBookCollection, 'findOne'>
export type IBookFindOneResult = TGetMethodResult<TBookCollection, 'findOne'>

export type IBookAddArgs = TGetMethodArgs<TBookCollection, 'add'>
export type IBookAddResult = TGetMethodResult<TBookCollection, 'add'>

export type IBookUpdateArgs = TGetMethodArgs<TBookCollection, 'update'>
export type IBookUpdateResult = TGetMethodResult<TBookCollection, 'update'>

export type IBookRemoveArgs = TGetMethodArgs<TBookCollection, 'remove'>
export type IBookRemoveResult = TGetMethodResult<TBookCollection, 'remove'>
