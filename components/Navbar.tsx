"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import portfolioData from "@/lib/config";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <header className="flex justify-between items-center py-6">
      <div className="text-2xl font-bold text-white">
        {portfolioData.name.split(" ").map((n) => n[0]).join("")}
      </div>

      <nav className="flex items-center space-x-6">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <Link
            key={link.href}
            href={link.href}
            className={`text-base font-medium transition-colors pb-1 border-b-2 ${
                isActive
                ? "text-white border-blue-500"
                : "text-gray-400 border-transparent hover:text-white hover:border-blue-500/50"
            }`}
            >
            {link.name}
            </Link>
          );
        })}
        <Link
          href={`mailto:${portfolioData.email}`}
          className="text-base bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          Contact Me
        </Link>
      </nav>
    </header>
  );
}
