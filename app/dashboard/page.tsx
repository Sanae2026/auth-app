import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Navbar } from "@/components/navbar";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-medium">
          Bienvenido, {session.user?.name ?? session.user?.email}
        </h1>
        <p className="mt-2 text-gray-500">
          Sesión activa como <strong>{session.user?.email}</strong>
        </p>
        <div className="mt-6 rounded-xl border p-6 max-w-md">
          <h2 className="font-medium mb-3">Datos de sesión</h2>
          <pre className="text-xs text-gray-600 overflow-auto">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>
      </main>
    </div>
  );
}