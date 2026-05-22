"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleCredentials(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (result?.error) {
      setError("Email o contraseña incorrectos.");
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-sm space-y-6 rounded-xl border p-8">
        <h1 className="text-2xl font-medium">Iniciar sesión</h1>

        <button
          onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
          className="flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm hover:bg-gray-50"
        >
          Continuar con GitHub
        </button>

        <div className="flex items-center gap-3">
          <hr className="flex-1" />
          <span className="text-xs text-gray-400">o con email</span>
          <hr className="flex-1" />
        </div>

        <form onSubmit={handleCredentials} className="space-y-4">
          <input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-black"
          />
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-black px-4 py-2.5 text-sm text-white hover:bg-gray-800 disabled:opacity-50"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          ¿Sin cuenta?{" "}
          <Link href="/register" className="underline">
            Regístrate
          </Link>
        </p>
      </div>
    </main>
  );
}