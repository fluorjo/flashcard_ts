import React from "react";
import { User } from "@prisma/client";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";

interface NavItemProps {
  mobile?: boolean;
  currentUser?: User | null;
}

const NavItem = ({ mobile, currentUser }: NavItemProps) => {
  return (
    <ul
      className={`text-md justify-center flex w-full gap-4 ${
        mobile && "flex-col h-full"
      } items-center`}
    >
      {currentUser ? (
        <>
          <li className={`py-2 text-center border-b-4 cursor-pointer`}>
            <Link href={"/admin"}>Admin</Link>
          </li>
          <li className={`py-2 text-center border-b-4 cursor-pointer`}>
            <Link href={"/user"}>User</Link>
          </li>
          <li className={`py-2 text-center border-b-4 cursor-pointer`}>
            <button onClick={() => signOut()}>Signout</button>
          </li>
        </>
      ) : (
        <li className={`py-2 text-center border-b-4 cursor-pointer`}>
          <button onClick={() => signIn()}>Signin</button>
        </li>
      )}
    </ul>
  );
};

export default NavItem;
