import * as React from "react";
import "./globals.css";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="grid  place-items-center h-screen">
        <div>
          <h1 className="text-2xl">Welcome! To tasky</h1>
          <Link href="/Add-Task" className="text-blue-500 hover:underline">
            Go to your space to add tasks
          </Link>
        </div>
      </div>
    </>
  );
}
