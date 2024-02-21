"use client";
import Link from "next/link";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn, useSession, signOut } from "next-auth/react";

export function LandingPage() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span>{session?.user?.name}</span>
          <span className="sr-only">Flow-box</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Introducing
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
                Flow: Beautiful Flowcharts
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Effortlessly create stunning flowcharts with our intuitive and
                powerful app. Perfect for teams, educators, and anyone who needs
                to visualize processes.
              </p>
            </div>
            <div className="space-x-4">
              {session ? (
                <>
                  <Button
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    onClick={() => signOut()}
                  >
                    Sign out
                  </Button>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="/main"
                  >
                    Explore more
                  </Link>
                </>
              ) : (
                <Button
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  onClick={() => signIn()}
                >
                  Sign in
                </Button>
              )}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Features
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The Flow app is packed with features to make creating and
                customizing your flowcharts a breeze.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-4">
              <div className="grid gap-2">
                <div className="border-t border-gray-200 dark:border-gray-800" />
                <div className="flex items-center justify-between">
                  <div className="text-left">Intuitive drag-and-drop</div>
                  <CheckCircleIcon className="w-5 h-5 text-gray-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-left">Customizable templates</div>
                  <CheckCircleIcon className="w-5 h-5 text-gray-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-left">Collaboration tools</div>
                  <CheckCircleIcon className="w-5 h-5 text-gray-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-left">Export to multiple formats</div>
                  <CheckCircleIcon className="w-5 h-5 text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Example Flowcharts
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                See the beautiful flowcharts that you can create with the Flow
                app.
              </p>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-4 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <Card>
                <CardContent className="p-4">
                  <img
                    alt="Chart"
                    className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                    height="225"
                    src="/placeholder.svg"
                    width="400"
                  />
                </CardContent>
                <CardFooter className="border-t">
                  <div className="text-sm font-medium">Team Meeting</div>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <img
                    alt="Chart"
                    className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                    height="225"
                    src="/placeholder.svg"
                    width="400"
                  />
                </CardContent>
                <CardFooter className="border-t">
                  <div className="text-sm font-medium">Project Plan</div>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <img
                    alt="Chart"
                    className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                    height="225"
                    src="/placeholder.svg"
                    width="400"
                  />
                </CardContent>
                <CardFooter className="border-t">
                  <div className="text-sm font-medium">Workflow</div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Experience the workflow the best frontend teams love.
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let your team focus on shipping features instead of managing
                infrastructure with automated CI/CD.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Omer Somech. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function CheckCircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
