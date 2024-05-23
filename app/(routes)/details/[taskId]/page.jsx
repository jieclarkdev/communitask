"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "@/app/_services/GlobalApi";
import { SignInButton, useSession } from "@clerk/nextjs";
import { TaskContent, TaskHeader, TaskSuggestion } from "../_components";
import { redirect } from "next/navigation";
import Image from "next/image";

function TaskDetail({ params }) {
  const { isLoaded, isSignedIn, session } = useSession();
  const [taskDetail, setTaskDetail] = useState([]);

  /**
   * Get details when params kay available
   *
   */

  useEffect(() => {
    params && getTaskDetail();
  }, [params]);

  const getTaskDetail = () => {
    GlobalApi.getTaskDetail(params.taskId)
      .then((response) => {
        setTaskDetail(response.taskList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /**
   * For TaskHeader, TaskContent, TaskSuggestion Components
   */

  if (isSignedIn && taskDetail) {
    return (
      <div className="py-8 md:py-20 px-10 md:px-36">
        {/* <h2>Task Detail</h2> */}
        <TaskHeader header={taskDetail} />
        <div className="grid grid-cols-4">
          <div className=" col-span-4 md:col-span-3 order-last md:order-first">
            <TaskContent content={taskDetail} />
          </div>
          <div>
            <TaskSuggestion suggestion={taskDetail} />
          </div>
        </div>
      </div>
    );
  } else if (isLoaded && !isSignedIn) {
    return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            src="/communitask.png"
            width={200}
            height={200}
            alt="CommunITask logo"
            style={{ height: "auto", width: "auto" }}
            priority
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            You are not sign in ,{" "}
            <SignInButton className="text-[22px] text-[#18698A]" />
          </h2>
        </div>
      </div>
    );
  }
}

export default TaskDetail;
