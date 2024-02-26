"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import React from "react";
import { signOut } from "next-auth/react";

const SignOut = () => {
  return (
    <div>
      <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
    </div>
  );
};

export default SignOut;
