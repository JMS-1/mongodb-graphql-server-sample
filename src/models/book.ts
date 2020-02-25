import * as types from '@jms-1/mongodb-graphql/lib/types'

export enum TBookType {
    Adult = 2,
    Children = 1,
    Regular = 0,
}

export const BookType = types.GqlEnum('BookType', TBookType, {
    description: 'Die möglichen Arten von Büchern.',
    sortable: true,
})

export const BookReview = types.GqlObject(
    'BookReview',
    { from: types.GqlString({ description: 'Quelle der Besprechung.', sortable: true, validation: { type: 'url' } }) },
    { description: 'Alle Medien, in denen das Buch besprochen wurde.' }
)

export const Book = types.GqlObject(
    'Book',
    {
        _id: types.GqlId({ computed: true, description: 'Automatisch vergebene eindeutige Kennung des Buches.' }),
        author: types.GqlString({ description: 'Autor des Buches.', sortable: true, validation: { empty: false } }),
        index: types.GqlNullable(
            types.GqlBoolean({ description: 'Optional gesetzt, wenn das Buch auf dem Index steht.' })
        ),
        reviews: types.GqlNullable(types.GqlArray(BookReview, { description: 'Alle Besprechungen des Buches.' })),
        title: types.GqlString({ description: 'Der Titel des Buches.', sortable: true, validation: { empty: false } }),
        type: BookType,
        year: types.GqlInt({ description: 'Erscheinungsjahr der ersten Auflage des Buches.', sortable: true }),
    },
    { description: 'Beschreibt ein Buch.' }
)
