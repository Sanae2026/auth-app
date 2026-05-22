"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex items-center justify-between border-b px-8 py-4">
      <span className="font-medium">Mi App</span>
      <div className="flex items-center gap-4">
        {session?.user?.image && (
          <Image
            src={session.user.image}
            alt="Avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
        )}
        <span className="text-sm text-gray-500">{session?.user?.email}</span>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-50"
        >
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
}