"use server";

import { requiredAdmin } from "@/app/data/admin/required-admin";
import { prisma } from "@/lib/db";
import { ApiResponse } from "@/lib/types";
import { lessonSchema, lessonSchemaType } from "@/lib/zodSchema";

export async function updateLesson(
  values: lessonSchemaType,
  lessonId: string
): Promise<ApiResponse> {
  await requiredAdmin();

  try {
    const result = lessonSchema.safeParse(values);

    if (!result) {
      return {
        status: "error",
        message: "Invalid Data",
      };
    }

    await prisma.lesson.update({
      where: {
        id: lessonId,
      },
      data: {
        title: result.data?.name,
        description: result.data?.description,
        thumbnailKey: result.data?.thumbnailKey,
        videoKey: result.data?.videoKey,
      },
    });

    return {
      status: "success",
      message: "Course Updated Successfully",
    };
  } catch {
    return {
      status: "error",
      message: "Failed to update course",
    };
  }
}
