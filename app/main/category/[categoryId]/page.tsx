import { Flows } from "@/components/component/flows";
import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontalIcon } from "lucide-react";
import { prisma } from "@/lib/db";
import { formatDateToLocal } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";

const Page = async ({
  params,
}: {
  params: {
    categoryId: string;
  };
}) => {
  const flows = await prisma.flow.findMany({
    include: {
      user: true,
    },
  });
  console.log(flows);

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <h1>{params.categoryId}</h1>

      <div className="border shadow-sm rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead className="min-w-[150px]">Name</TableHead>
              <TableHead className="hidden md:table-cell">Category</TableHead>
              <TableHead className="hidden md:table-cell">Label</TableHead>
              <TableHead className="hidden md:table-cell">
                Description
              </TableHead>
              <TableHead className="hidden md:table-cell">Creator</TableHead>
              <TableHead className="hidden sm:table-cell">Created at</TableHead>
              <TableHead className="hidden md:table-cell">Updated at</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {flows.map((flow) => {
              return (
                <TableRow>
                  <TableCell className="font-medium">#{flow.id}</TableCell>
                  <TableCell>{flow.name}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {flow.category}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant="outline"> {flow.label}</Badge>
                  </TableCell>
                  <TableCell className="table-cell">
                    {flow.description}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <div className="flex flex-row items-center gap-1">
                      <Avatar className="w-6 h-6">
                        <AvatarImage
                          src={flow?.user?.image ?? ""}
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <span>{flow.user.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {formatDateToLocal(flow.createdAt)}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {formatDateToLocal(flow.createdAt)}
                  </TableCell>

                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <MoreHorizontalIcon className="w-4 h-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Link
                            className="w-full h-full"
                            href={`${params.categoryId}/${flow.id}`}
                          >
                            View flow
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Customer details</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </main>
  );
};

export default Page;
