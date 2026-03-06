'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import { auth } from '../../lib/firebase/client';
import { useAuth } from '../../context/AuthContext';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { FaGoogle, FaGithub } from 'react-icons/fa';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { user } = useAuth();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (password.length < 6) {
      setError('Password should be at least 6 characters');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // You might want to update the user's profile with the name here
      router.push('/dashboard');
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleSocialLogin = async (provider: GoogleAuthProvider | GithubAuthProvider) => {
    setError(null);
    try {
      await signInWithPopup(auth, provider);
      router.push('/dashboard');
    } catch (error: any) {
      setError(error.message);
    }
  };

  if (user) {
    router.push('/dashboard');
    return null; // or a loading spinner
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row bg-card rounded-2xl shadow-soft overflow-hidden">
          {/* Left Side - Branding */}
          <div className="md:w-1/2 p-12 flex flex-col justify-center items-center bg-primary-gradient text-white text-center">
            <h1 className="text-h1 mb-4">Welcome to CreativeSparx</h1>
            <p className="text-body text-white/80">
              The all-in-one platform for modern freelancers. Let&apos;s get you started.
            </p>
          </div>

          {/* Right Side - Signup Form */}
          <div className="md:w-1/2 p-8 md:p-12">
            <h2 className="text-h2 text-center mb-6">Create Your Account</h2>

            {error && (
              <p className="mb-4 text-center text-red-500 bg-red-100 p-3 rounded-lg">
                {error}
              </p>
            )}

            <form onSubmit={handleSignup} className="space-y-6">
              <div className="relative">
                <FiUser className="absolute top-1/2 -translate-y-1/2 left-4 text-text-muted" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary-from"
                />
              </div>
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
              <div className="relative">
                <FiLock className="absolute top-1/2 -translate-y-1/2 left-4 text-text-muted" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary-from"
                />
              </div>
              <button type="submit" className="w-full btn-primary">
                Sign Up with Email
              </button>
            </form>

            <div className="mt-6 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <p className="text-xs text-center text-text-muted uppercase">
                or sign up with
              </p>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            
            <div className="mt-6 flex flex-col md:flex-row gap-4">
              <button
                onClick={() => handleSocialLogin(new GoogleAuthProvider())}
                className="flex-1 flex items-center justify-center gap-2 btn-secondary"
              >
                <FaGoogle/>
                Google
              </button>
              <button
                onClick={() => handleSocialLogin(new GithubAuthProvider())}
                className="flex-1 flex items-center justify-center gap-2 btn-secondary"
              >
                <FaGithub/>
                GitHub
              </button>
            </div>

            <p className="mt-8 text-center text-sm text-text-muted">
              Already have an account?{' '}
              <Link href="/login" className="font-semibold text-brand-primary-from hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
