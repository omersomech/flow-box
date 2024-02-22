import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className="flex">
      <main className="flex-1 p-4 overflow-auto">
        <div className="bg-[#e0e7ff] py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold leading-tight text-gray-900">
              build <span className="text-[#514f7c]">better</span> workflows
              with <span className="text-[#4f46e5]"> flow-box</span>
            </h1>
            <p className="mt-4 text-base text-gray-600">
              {`Flow-box is a tool that helps you create and manage workflows for
              your business. It's simple, easy to use, and powerful.`}
            </p>
            <Button className="mt-8" variant="secondary">
              Create new flow <ArrowRightIcon className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
