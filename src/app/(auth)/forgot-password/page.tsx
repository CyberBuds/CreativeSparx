'use client';

import { useState } from 'react';
import Link from 'next/link';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/lib/firebase/client';
import { FiMail } from 'react-icons/fi';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setError(null);
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent. Please check your inbox.');
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-md mx-auto bg-card rounded-2xl shadow-soft overflow-hidden p-8 md:p-12">
            <div className="text-center mb-6">
                <h1 className="text-h2">Forgot Your Password?</h1>
                <p className="text-text-muted mt-2">No problem. Enter your email below to receive a reset link.</p>
            </div>

            {message && (
              <p className="mb-4 text-center text-green-500 bg-green-100 p-3 rounded-lg">
                {message}
              </p>
            )}
            {error && (
              <p className="mb-4 text-center text-red-500 bg-red-100 p-3 rounded-lg">
                {error}
              </p>
            )}

            <form onSubmit={handleResetPassword} className="space-y-6">
              <div className="relative">
                <FiMail className="absolute top-1/2 -translate-y-1/2 left-4 text-text-muted" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary-from"
                />
              </div>
              <button type="submit" className="w-full btn-primary">
                Send Reset Link
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-text-muted">
              Remembered your password?{' '}
              <Link href="/login" className="font-semibold text-brand-primary-from hover:underline">
                Log in
              </Link>
            </p>
        </div>
      </div>
    </div>
  );
}
