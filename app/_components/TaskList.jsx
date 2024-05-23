import Image from "next/image";
import Link from "next/link";
import React from "react";

function TaskList({ tasklists, title }) {
  return (
    <div className="mt-5" id="services">
      <h2 className="mx-4 lg:mx-16 text-2xl text-gray-800 font-bold">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 mx-5 lg:mx-16">
        {tasklists.length > 0
          ? tasklists.map((task, index) => (
              <Link
                href={`/details/${task.id}`}
                key={index}
                className=" shadow-md p-4 rounded-lg hover:shadow-lg hover:shadow-[#18698A] cursor-pointer hover:scale-95 transition-all"
              >
                <Image
                  src={task.images[0].url}
                  alt={task.name}
                  width={500}
                  height={200}
                  className="h-[150px] md:h-[200px] object-cover rounded-lg"
                />
                <div className="flex items-center">
                  <div className="p-1 rounded-xl bg-[#26C281] w-2 animate-pulse"></div>
                  <h2 className=" p-2 text-gray-600">
                    {task.category.categoryName
                      .split("_")
                      .join(" ")
                      .replace("*", " ")
                      .toUpperCase()}
                  </h2>
                </div>
                <h2 className=" font-semibold text-md text-[#18698A]">
                  {task.name}
                </h2>
                <div className="py-[1px] rounded-xl bg-gray-200 my-3"></div>
                <div className="flex items-center justify-between">
                  <h2 className=" text-[#27657e]">{task.contactPerson}</h2>
                  <p>{task.address}</p>
                </div>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <div
                key={index}
                className="h-[380px] w-full bg-slate-200 animate-pulse rounded-lg"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default TaskList;
