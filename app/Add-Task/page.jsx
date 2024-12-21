import React from "react";
import HandleTasks from "@/app/component/HandleTasks";
import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";


async function page() {
  const user = await currentUser();
  const firstName = user?.firstName;
  const lastName = user?.lastName;
  const emailAddress = user?.emailAddresses[0].emailAddress;
  const clerkId = user?.id;
  
  await prisma.User.upsert({
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

  return (
    <HandleTasks
      firstName={firstName}
      lastName={lastName}
      emailAddress={emailAddress}
      clerkId={clerkId}
    />
  );
}

export default page;
