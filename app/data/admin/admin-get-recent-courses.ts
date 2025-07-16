import "server-only";

import { prisma } from "@/lib/db";
import { requiredAdmin } from "./required-admin";

export async function adminGetRecentCourses() {
  await requiredAdmin();

  const data = prisma.course.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 2,
    select: {
      id: true,
      title: true,
      smallDescription: true,
      duration: true,
      level: true,
      status: true,
      price: true,
      fileKey: true,
      slug: true,
    },
  });

  return data;
}
