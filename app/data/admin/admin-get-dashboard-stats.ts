import "server-only";

import { prisma } from "@/lib/db";
import { requiredAdmin } from "./required-admin";

export async function adminGetDashboardStats() {
  await requiredAdmin();

  const [totalSignups, totalCustomers, totalCourses, totalLessons] =
    await Promise.all([
      // Total Signups Query
      prisma.user.count(),

      // Total Customers Query
      prisma.user.count({
        where: {
          enrollment: {
            some: {},
          },
        },
      }),

      // Total Course Query
      prisma.course.count(),

      // Total Lesson Query
      prisma.lesson.count(),
    ]);

  return {
    totalSignups,
    totalCustomers,
    totalCourses,
    totalLessons,
  };
}
