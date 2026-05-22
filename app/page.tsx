import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-medium">Bienvenido</h1>
      <p className="text-gray-500">Esta es la página pública.</p>
      <div className="flex gap-4">
        <Link
          href="/login"
          className="rounded-lg border px-5 py-2.5 text-sm hover:bg-gray-50"
        >
          Iniciar sesión
        </Link>
        <Link
          href="/register"
          className="rounded-lg bg-black px-5 py-2.5 text-sm text-white hover:bg-gray-800"
        >
          Registrarse
        </Link>
      </div>
    </main>
  );
}