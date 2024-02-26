"use client";

import React from "react";
import { Category, categories } from "./categories";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";

const SideBarCategory = ({ categories }: { categories: Category[] }) => {
  const pathname = usePathname();
  return (
    <nav className="grid items-start px-4 text-sm font-medium">
      {categories.map((item) => {
        return (
          <Link
            key={item.id}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
              {
                "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50":
                  pathname.startsWith(item.href),
              }
            )}
            href={item.href}
          >
            {item.icon}
            {item.name}
            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
              {item.count ?? 0}
            </Badge>
          </Link>
        );
      })}
    </nav>
  );
};

export default SideBarCategory;
