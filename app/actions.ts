"use server";

import { prisma } from "@/lib/db";

export async function updateUser(nodes: any, formData: FormData) {
  console.log(nodes, formData);

  try {
    await prisma.flow.updateMany({
      data: {
        reactFlow: JSON.stringify(nodes),
      },
    });
  } catch (e) {
    console.log(e);
  }
  return;
}
