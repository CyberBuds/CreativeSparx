
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { db } from '@/lib/firebase-admin';
import bcrypt from 'bcrypt';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const usersRef = db.collection('users');
        const snapshot = await usersRef.where('email', '==', credentials.email).get();

        if (snapshot.empty) {
          return null;
        }

        const userDoc = snapshot.docs[0];
        const user = userDoc.data();

        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return { id: userDoc.id, email: user.email };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
