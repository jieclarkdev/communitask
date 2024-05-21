"use client";

import { TaskList } from "@/app/_components";
import GlobalApi from "@/app/_services/GlobalApi";
import React, { useEffect, useState } from "react";

function TaskListsCategory({ params }) {
  const [taskDetails, setTaskDetails] = useState([]);

  useEffect(() => {
    console.log(params.category);
    params && getTaskList();
  }, [params]);

  const getTaskList = () => {
    GlobalApi.getTaskByCategory(params.category)
      .then((response) => {
        setTaskDetails(response.taskLists);
      })
      .catch((error) => {
        console.log(`Get Task By Category Error ===> ${error}`);
      });
  };
  return (
    <div>
      <TaskList title={"Task List By Category"} tasklists={taskDetails} />
    </div>
  );
}

export default TaskListsCategory;
