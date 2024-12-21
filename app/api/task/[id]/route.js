import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma"

export async function DELETE(req , {params}){
    const id = params.id
    
    const task = await prisma.Task.delete({
        where: { id: parseInt(id, 10) }
    })
    return NextResponse.json(task)
    
}

export async function GET(req , {params}) {
   const id = params.id
    console.log("params" , params);
    
    const tasks = await prisma.Task.findMany({
      where : {userId : id}
    });
    return NextResponse.json({tasks});
  }
  