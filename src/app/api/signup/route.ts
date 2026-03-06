
import { db } from '@/lib/firebase-admin';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = signupSchema.parse(body);

    const usersRef = db.collection('users');
    const snapshot = await usersRef.where('email', '==', email).get();

    if (!snapshot.empty) {
      return NextResponse.json({ error: 'User already exists' }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await usersRef.add({
      email,
      password: hashedPassword,
    });

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
