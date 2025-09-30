
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  
  providers: [Google,
      
    Credentials({

      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const user = { name: 'Admin', email: 'admin@gmail.com', password: 'admin' };
        if (credentials?.email === user.email && credentials?.password === user.password) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login"
  },
  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth
    },
  },
  session : {
    strategy : "jwt"
  },
  trustHost : true
})