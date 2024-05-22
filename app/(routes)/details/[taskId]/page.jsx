"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "@/app/_services/GlobalApi";
import { useSession } from "@clerk/nextjs";
import { TaskContent, TaskHeader, TaskSuggestion } from "../_components";
import { redirect } from "next/navigation";

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
    /**
     * /details endpoint protection
     */
    if (process.env.DEBUG === "true") {
      redirect("https://flying-kangaroo-4.accounts.dev");
    } else {
      return redirect("https://accounts.communitask.tech");
    }
  }
}

export default TaskDetail;
