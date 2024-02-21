"use client";

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/DVPSO8ULoZ1
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BarChartIcon,
  BellIcon,
  ChevronLeftIcon,
  HomeIcon,
  PackageIcon,
  SearchIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function SideBar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="h-screen grid min-h-screen w-full lg:grid-cols-[250px_1fr]">
      <div className="hidden lg:flex flex-col border-r bg-gray-100/40 dark:bg-gray-800/40">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <PackageIcon className="h-6 w-6" />
            <span>Acme Inc</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-4">
          <nav className="grid gap-1 px-6">
            <Link
              className={cn(
                "flex items-center h-10 px-4 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50",
                {
                  "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50":
                    pathname.endsWith("/main"),
                }
              )}
              href="/main"
            >
              <HomeIcon className="mr-2 h-4 w-4" />
              Home
            </Link>
            <Link
              className={cn(
                "flex items-center h-10 px-4 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50",
                {
                  "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50":
                    pathname.startsWith("/main/flows"),
                }
              )}
              href="/main/flows"
            >
              <PackageIcon className="mr-2 h-4 w-4" />
              Flows
            </Link>
            {/* <Link
              className="flex items-center h-10 px-4 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href="#"
            >
              <ShoppingCartIcon className="mr-2 h-4 w-4" />
              Orders
            </Link>
            <Link
              className="flex items-center h-10 px-4 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href="#"
            >
              <UsersIcon className="mr-2 h-4 w-4" />
              Customers
            </Link>
            <Link
              className="flex items-center h-10 px-4 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href="#"
            >
              <BarChartIcon className="mr-2 h-4 w-4" />
              Analytics
            </Link> */}
          </nav>
        </div>
      </div>
      <div className="flex flex-col min-h-screen">
        <div className="flex h-[60px] items-center border-b px-4 lg:hidden">
          <Button className="mr-4" size="icon" variant="outline">
            <ChevronLeftIcon className="" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
          <Link className="font-semibold" href="#">
            Acme Inc
          </Link>
          <div className="ml-auto">
            <Button size="icon" variant="outline">
              <SearchIcon className="" />
              <span className="sr-only">Search</span>
            </Button>
            <Button className="ml-2" size="icon" variant="outline">
              <BellIcon className="" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button className="ml-2" size="icon" variant="outline">
              <img
                alt="Avatar"
                className="rounded-full"
                height="32"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width="32"
              />
              <span className="sr-only">Avatar</span>
            </Button>
          </div>
        </div>
        <main className="flex-1  overflow-auto">{children}</main>
      </div>
    </div>
  );
}