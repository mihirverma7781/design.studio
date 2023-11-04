import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constants";
import AuthProviders from "../AuthProviders";

const Navbar = () => {
  const session = null;
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
        {session ? (
          <>
            UserPhoto
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
