import { cn } from "@/lib/utils";
import "@/app/globals.css";
import { Inter as FontSans } from "next/font/google";
import { getServerSession } from "next-auth";

import NavMenu from "./components/NavMenu";
import SessionProvider from "./components/SessionProvider";
import { Toaster } from "@/components/ui/sonner";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased"
          // fontSans.variable
        )}
      >
        <SessionProvider session={session}>{children}</SessionProvider>
        <Toaster />
      </body>
    </html>
  );
}
