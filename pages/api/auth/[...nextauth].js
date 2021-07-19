import NextAuth from "next-auth"
import Providers from "next-auth/providers"

import User from "../../../models/userModel"
import connectDB from "../../../connectDB"

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        connectDB()

        const { email, password } = credentials

        // Check if email and password is entered
        if (!email || !password) {
          throw new Error("Please enter email or password")
        }

        // Find user in the database
        const user = await User.findOne({ email }).select("+password")

        if (!user) {
          throw new Error("Invalid Email or Password")
        }

        // Check if password is correct or not
        const match = await bcrypt.compare(password, user.password)
        if (!match) {
          throw new Error("Invalid Email or Password")
        }

        return Promise.resolve(user)
      },
    }),
  ],
  callbacks: {
    jwt: async (token, user) => {
      user && (token.user = user)
      return Promise.resolve(token)
    },
    session: async (session, user) => {
      session.user = user.user
      return Promise.resolve(session)
    },
  },
})