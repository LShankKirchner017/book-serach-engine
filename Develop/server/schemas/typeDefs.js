const typeDefs = `
    type Book {
        authors: [String]
        description: String!
        bookId: String!
        image: String
        link: String
        title: String!
    }

    input Book {
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type User {
        username: String!
        email: String!
        savedBooks: [Book]
    }

    input UserInput {
        username: String
        email: String
        savedBooks: [BookInput]
    }

    type Auth {
        token: String
        user: User
    }

    type Query {
        getSingleUser(id: ID, username: String): User
        c
    }

    type Mutation {
        createUser(user: UserInput): User
        login(username: String, email: String, password: String!): Auth
        saveBook(_id: ID!, book: BookInput!): User
        deleteBook(_id: ID!, bookId: ID!): User
    }
`;

module.exports = typeDefs