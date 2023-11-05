import { gql } from '@apollo/client'

export const CREATE_USER = gql `
mutation CreateUser($user: userInput) {
    createUser(user: $user) {
        token
        user {
            _id
            email
            username 
            savedBooks {
                _id
                authors 
                description 
                bookId 
                image 
                link 
                title 
            }
        }
    }
}
`

export const LOGIN = gql `
mutation Login($password: String!, $username: String, $email: String) {
    login(password: $password, username: $username, email: $email) {
        token,
        user {
            _id
            email 
            username 
            savedBooks {
                _id 
                authors 
                description 
                bookId 
                image 
                link 
                title 
            }
        }
    }
}
`
export const SAVE_BOOK = gql `
mutation saveBook($_id: ID!, $book: BookInput!) {
    saveBook(_id: $_id, book: $book) {
        _id
        email 
        username 
        savedBooks {
            _id 
            authors 
            bookId 
            description 
            image 
            link 
            title 
        }
    }
}
`

export const DELETE_BOOK = gql `
mutation deleteBook($_id: ID!, $bookId: ID!) {
    deleteBook(_id: $_id, bookId: $bookId) {
        _id 
        email 
        savedBooks {
            _id 
            authors 
            bookId 
            description 
            image 
            link 
            title 
        }
    }
}
`