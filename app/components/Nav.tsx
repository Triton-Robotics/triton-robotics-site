"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Events", href: "/events" },
];

export default function Nav() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <nav className="hidden items-center gap-6 text-sm font-semibold tracking-wide md:flex">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`rounded-md px-3 py-2 transition-all duration-200 ${
              isActive ? "bg-white/10 text-[#FFCD00]" : "text-white hover:text-[#FFCD00]"
            }`}
          >
            {link.name}
          </Link>
        );
      })}

      <div className="ml-4 flex gap-2">
        {session ? (
          <Link href="/member-home" className="rounded bg-white px-5 py-1.5 font-bold text-[#1B2B44] transition-colors hover:bg-gray-100">
            Member Home
          </Link>
        ) : (
          <Link href="/member-login" className="rounded bg-white px-5 py-1.5 font-bold text-[#1B2B44] transition-colors hover:bg-gray-100">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}