import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryList({ categoryList }) {
  return (
    <div className="my-4 lg:my-32 ">
      <h2 className="mx-4 lg:mx-16 text-2xl text-gray-800 font-bold">
        Popular Job Category
      </h2>
      <div className="mx-4 md:mx-22 lg:mx-36 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2  gap-6 mt-16">
        {categoryList.length > 0
          ? categoryList.map((category, index) => (
              <Link
                href={`/search/${category.categoryName}`}
                key={index}
                className="bg-[#FAFAFD] flex flex-col items-center justify-center py-4 rounded-md shadow-md  cursor-pointer nav-link"
              >
                <div>{console.log(category)}</div>
                <Image
                  src={category.icon.url}
                  width={50}
                  height={50}
                  alt="category icon"
                  style={{ width: "auto", height: "auto" }}
                />
                <h2>
                  {category.categoryName
                    .split("_")
                    .join(" ")
                    .replace("*", " ")
                    .toUpperCase()}
                </h2>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <div
                key={index}
                className=" h-[120px] w-full bg-slate-200 animate-pulse rounded-lg"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default CategoryList;
