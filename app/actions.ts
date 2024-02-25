"use server";

import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export async function updateUser(nodes: any, edges: any, formData: FormData) {
  try {
    await prisma.flow.updateMany({
      data: {
        reactFlow: JSON.stringify(nodes),
        reactEdges: JSON.stringify(edges),
      },
    });
  } catch (e) {
    console.log(e);
  }
  return;
}

export async function createFlow(formData: FormData) {
  try {
    console.log(formData);

    const session = await getServerSession();
    const user = await prisma.user.findFirst({
      select: {
        id: true,
      },
      where: {
        email: session?.user?.email,
      },
    });
    console.log(user);

    if (user) {
      await prisma.flow.create({
        data: {
          name: (formData.get("name") as string) || "",
          category: (formData.get("category") as string) || "",
          label: (formData.get("label") as string) || "",
          type: (formData.get("type") as string) || "",
          description: (formData.get("description") as string) || "",
          user: {
            connect: {
              id: user.id,
            },
          },
        },
      });
    }
    revalidatePath("/main/category/business");
  } catch (e) {
    console.log(e);
  }
  return;
}
