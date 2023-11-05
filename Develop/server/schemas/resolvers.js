const { User } = require('../models')
const { GraphQLError } = require('graphql')

module.exports = {
  Query: {
    getSingleUser: async (parent, {_id, username }, context, info) => {
       const foundUser = await User.findOne({
      $or: [{ _id }, { username}],
    });

    if (!foundUser) {
      throw new GraphQLError('Cannot find a user with this id!', {
        extensions: {
          code: "NO_USER_FOUND"
        }

      })
      
    }

   return foundUser

    },
  },
  Mutation: {
    createUser: async (parent, args, context, info) => { 

    },
   login: async (parent, args, context, info) => {

    },
    saveBook: async (parent, args, context, info) => {

    },
    deleteBook: async (parent, args, context, info) => {

    },
  
  },
};