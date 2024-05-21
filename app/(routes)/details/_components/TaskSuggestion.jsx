import GlobalApi from "@/app/_services/GlobalApi";
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { BookingSection } from ".";

function TaskSuggestion({ suggestion }) {
  const [tasksLists, setTasksLists] = useState([]);

  useEffect(() => {
    suggestion && getTaskList();
  }, [suggestion]);

  const getTaskList = () => {
    GlobalApi.getTaskByCategory(suggestion?.category?.categoryName)
      .then((response) => {
        // console.log(response.taskLists);
        setTasksLists(response?.taskLists);
      })
      .catch((error) => {
        console.log(`Suggestion task Error ===> ${error}`);
      });
  };
  return (
    <div className="md:pl-10 mt-5">
      <BookingSection task={suggestion}>
        <Button className="bg-[#18698A] flex items-center gap-2 text-xl px-14 py-8 ">
          <Book size={20} />
          Hire Tasker
        </Button>
      </BookingSection>
      <div className="hidden md:block">
        <h2 className="text-lg font-bold my-3 ">Similar Tasks</h2>
        <div>
          {tasksLists.map((task, index) => (
            <Link
              href={"/details/" + task.id}
              className="flex items-center gap-2 cursor-pointer hover:nav-link transition-all ease-in-out"
              key={index}
            >
              <Image
                src={task?.images[0]?.url}
                alt={task.name}
                width={100}
                height={100}
                style={{
                  width: "auto",
                  height: "auto",
                }}
                className="rounded-lg m-2 "
              />
              <div>
                <h2 className="text-[#18698A]">{task.name}</h2>
                <h3 className="text-pretty text-sm text-gray-800">
                  {task.contactPerson}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskSuggestion;
