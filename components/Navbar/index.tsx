import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constants";
import AuthProviders from "../AuthProviders";
import { getCurrentUser } from "@/lib/session";

const Navbar = async () => {
  const session = await getCurrentUser();
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="developer.studio"
            width={115}
            height={45}
          />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link, index) => {
            return (
              <li key={link.key}>
                <Link href={link.href}>{link.text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session?.user ? (
          <>
            {session.user.avatarUrl ? (
              <Image
                src={session.user.avatarUrl}
                alt={session.user.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : null}
            <Link href="/create-project">Share Your Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
