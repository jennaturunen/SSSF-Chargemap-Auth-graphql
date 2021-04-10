import { AuthenticationError } from 'apollo-server-errors';
import User from '../models/user.js';
import { login } from '../passport/authenticate.js';
import bcrypt from 'bcrypt';

export default {
  Query: {
    login: async (parent, args, { req, res }) => {
      try {
        // Inject args to request body for passport
        req.body = args;

        const authResponse = await login(req, res);
        console.log('authresp', authResponse);
        return {
          id: authResponse.user._id,
          username: authResponse.user.username,
          token: authResponse.token,
        };
      } catch (e) {
        throw new AuthenticationError('Invalid credentials');
      }
    },
    user: async (parent, args, { user }) => {
      console.log('user resolver', args, user);
      if (!user) {
        throw new AuthenticationError('You are not authenticated');
      }
      return await User.findById({ _id: args.id }).exec();
    },
  },
  Mutation: {
    registerUser: async (parent, args) => {
      try {
        const hash = await bcrypt.hash(args.password, 12);
        const userWithHash = {
          ...args,
          password: hash,
        };
        const newUser = new User(userWithHash);
        const result = await newUser.save();
        return result;
      } catch (e) {
        console.log(`Error occured while registering new user ${e.message}`);
      }
    },
  },
};
