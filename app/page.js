"use client";

import { useEffect, useState } from "react";
import { CategoryList, Hero, TaskList } from "./_components";
import GlobalApi from "./_services/GlobalApi";

export default function Home() {
  const [categoryList, setCategoryList] = useState([]);
  const [taskLists, setTaskLists] = useState([]);
  useEffect(() => {
    fetchCategoryList();
    fetchAllTaskList();
  }, []);

  /**
   * All Category list
   */

  const fetchCategoryList = () => {
    GlobalApi.getCategory()
      .then((response) => {
        // console.log(response.categories);
        setCategoryList(response.categories);
      })
      .catch((error) => {
        console.log(`Category Error !! ${error}`);
      });
  };

  /**
   * All task list
   */

  const fetchAllTaskList = () => {
    GlobalApi.getAllTasksList()
      .then((response) => {
        // console.log(response.taskLists);
        setTaskLists(response.taskLists);
      })
      .catch((error) => {
        console.log(`TaskList Error !! ${error}`);
      });
  };

  return (
    <div>
      <Hero />
      <CategoryList categoryList={categoryList} />
      <TaskList tasklists={taskLists} title={"Trending Services"} />
    </div>
  );
}
