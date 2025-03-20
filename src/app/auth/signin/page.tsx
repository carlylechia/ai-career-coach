"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignInPage() {
  const router = useRouter();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (isSignup) {
      // Handle signup (email/password)
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        alert("Account created! You can now sign in.");
        setIsSignup(false);
      } else {
        setError("Signup failed. Try again.");
      }
    } else {
      // Handle sign-in
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid credentials.");
      } else {
        router.push("/dashboard");
      }
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#121212] text-[#B8C1EC] p-6">
      <h1 className="text-3xl font-semibold mb-6">{isSignup ? "Create an Account" : "Sign In"}</h1>

      <div className="w-full max-w-md p-6 bg-[#1A1A2E] border border-[#3F3D56] rounded-lg shadow-lg">
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded bg-[#1A1A2E] border border-[#3F3D56] text-[#B8C1EC] focus:ring-2 focus:ring-[#6C63FF]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-[#1A1A2E] border border-[#3F3D56] text-[#B8C1EC] focus:ring-2 focus:ring-[#6C63FF]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="p-3 bg-[#6C63FF] text-white rounded-lg hover:bg-[#5548E0] transition">
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <div className="my-4 text-center">or</div>

        <button
          onClick={() => signIn("google")}
          className="p-3 w-full bg-[#DB4437] text-white rounded-lg hover:bg-[#C1351E] transition"
        >
          Sign in with Google
        </button>

        <button
          onClick={() => signIn("facebook")}
          className="p-3 w-full bg-[#4267B2] text-white rounded-lg hover:bg-[#385898] transition mt-2"
        >
          Sign in with Facebook
        </button>

        <p className="text-center mt-4">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button onClick={() => setIsSignup(!isSignup)} className="text-[#6C63FF] hover:underline">
            {isSignup ? "Sign in" : "Sign up"}
          </button>
        </p>

        <p className="text-center mt-4">
          <Link href="/" className="text-[#FF6584] hover:underline">Back to Home</Link>
        </p>
      </div>
    </main>
  );
}
;
