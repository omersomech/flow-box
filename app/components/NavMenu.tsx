"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

("use client ");
function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        {session.user?.name}
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return <button onClick={() => signIn()}>Sign in</button>;
}

const NavMenu = () => {
  return (
    <div>
      <AuthButton />
    </div>
  );
};

export default NavMenu;
