import Link from "next/link";
import React from "react";

const NavItem = ({ mobile }: { mobile?: boolean }) => {
  return (
    <ul
      className={`text-md justify-center flex w-full gap-4 ${
        mobile && "flex-col h-full"
      } items-center`}
    >
      <li className={`py-2 text-center border-b-4 cursor-pointer `}>
        <Link href={"/admin"}>Admin</Link>
      </li>
      <li className={`py-2 text-center border-b-4 cursor-pointer `}>
        <Link href={"/user"}>User</Link>
      </li>
      <li className={`py-2 text-center border-b-4 cursor-pointer `}>
        <button>Signout</button>
      </li>
      <li className={`py-2 text-center border-b-4 cursor-pointer `}>
        <button>Signin</button>
      </li>
    </ul>
  );
};

export default NavItem;
