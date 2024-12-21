import { NextResponse } from "next/server"; // Import NextResponse
import prisma from "@/lib/prisma"; // Update the import path based on your project's structure

export async function POST(req) {
  try {
    const body = await req.json(); 
    const { task, clerkId } = body;
    console.log(body);

   
    // Ensure both `task` and `userId` are provided
    if (!task || !clerkId) {
      return NextResponse.json(
        { error: "Task and userId are required" },
        { status: 400 }
      );
    }

    const result = await prisma.Task.create({
      data: {
        task: task,
        userId: clerkId,
      },
    });

    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create task", details: error.message },
      { status: 500 }
    );
  }
}

export async function GET(req) {

  const tasks = await prisma.Task.findMany();
  return NextResponse.json({ tasks });
}
