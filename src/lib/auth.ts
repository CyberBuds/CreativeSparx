'use client'

import { auth } from '../lib/firebase/client';
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword } from 'firebase/auth';

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        const idToken = await result.user.getIdToken();

        await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ idToken }),
        });

    } catch (error) {
        console.error("Error signing in with Google: ", error);
    }
};

export const signInWithEmailAndPassword = async (email:string, password:string) => {
    try {
        const result = await firebaseSignInWithEmailAndPassword(auth, email, password);
        const idToken = await result.user.getIdToken();

        await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ idToken }),
        });

    } catch (error) {
        console.error("Error signing in with email and password: ", error);
        throw error
    }
};