import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req) {
  const respons = await req.json();
  const { firstName, lastName, emailAddress, clerkId } = respons;
  
    const result = await prisma.User.upsert({
      where: { clerkId: clerkId },
      update: {
        email: emailAddress,
        firstName:firstName,
        lastName: lastName,
      },
      create: {
        clerkId: clerkId,
        email: emailAddress,
        firstName:firstName,
        lastName: lastName,
      },
    });
    return NextResponse.json({ result });
}

export async function GET(req) {
  const Users = await prisma.User.findMany();
  return NextResponse.json({ Users });
}


