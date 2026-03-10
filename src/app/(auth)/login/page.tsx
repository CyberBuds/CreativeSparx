
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import { auth } from '@/lib/firebase/client';
import { useAuth } from '@/context/AuthContext';
import { FiMail, FiLock, FiLoader } from 'react-icons/fi';
import { FaGoogle, FaGithub } from 'react-icons/fa';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
        setError('Invalid email or password. Please try again.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider: GoogleAuthProvider | GithubAuthProvider) => {
    setError(null);
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      if (error.code === 'auth/popup-blocked') {
        setError('Popup blocked. Please disable your popup blocker and try again.');
      } else {
        setError('An unexpected error occurred during social login. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  if (user) {
    return <div className="min-h-screen flex items-center justify-center"><FiLoader className="animate-spin text-4xl" /></div>; // Show a full-page loader while redirecting
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row bg-card rounded-2xl shadow-soft overflow-hidden">
          {/* Left Side - Branding */}
          <div className="md:w-1/2 p-12 flex flex-col justify-center items-center bg-primary-gradient text-white text-center">
            <h1 className="text-h1 mb-4">Welcome Back!</h1>
            <p className="text-body text-white/80">
              Log in to continue your journey with CreativeSparx.
            </p>
          </div>

          {/* Right Side - Login Form */}
          <div className="md:w-1/2 p-8 md:p-12">
            <h2 className="text-h2 text-center mb-6">Log In to Your Account</h2>

            {error && (
              <p className="mb-4 text-center text-red-500 bg-red-100 p-3 rounded-lg">
                {error}
              </p>
            )}

            <form onSubmit={handleLogin} className="space-y-6">
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
              <button
                type="submit"
                className="w-full btn-primary disabled:opacity-50"
                disabled={loading}
              >
                {loading ? (
                  <FiLoader className="animate-spin mx-auto" />
                ) : (
                  'Login with Email'
                )}
              </button>
            </form>

            <div className="mt-6 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <p className="text-xs text-center text-text-muted uppercase">
                or log in with
              </p>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>

            <div className="mt-6 flex flex-col md:flex-row gap-4">
               <button
                onClick={() => handleSocialLogin(new GoogleAuthProvider())}
                className="flex-1 flex items-center justify-center gap-2 btn-secondary disabled:opacity-50"
                disabled={loading}
              >
                {loading ? (
                  <FiLoader className="animate-spin" />
                ) : (
                  <FaGoogle />
                )}
                Google
              </button>
              <button
                onClick={() => handleSocialLogin(new GithubAuthProvider())}
                className="flex-1 flex items-center justify-center gap-2 btn-secondary disabled:opacity-50"
                disabled={loading}
              >
                {loading ? (
                  <FiLoader className="animate-spin" />
                ) : (
                  <FaGithub />
                )}
                GitHub
              </button>
            </div>

            <p className="mt-8 text-center text-sm text-text-muted">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="font-semibold text-brand-primary-from hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
