"use client";

import GlobalApi from "@/app/_services/GlobalApi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function CategorySidebar() {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const params = usePathname();

  useEffect(() => {
    // console.log(params);
    fetchCategoryList();
  }, []);

  useEffect(() => {
    setSelectedCategory(params.split("/")[2]);
  }, [params]);

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

  return (
    <div className="mx-4">
      <h2 className=" font-bold text-lg text-[#18698A] mb-5">Categories</h2>
      <div>
        {categoryList.map((item, index) => (
          <Link
            href={`/search/${item.categoryName}`}
            key={index}
            className={`flex items-center gap-5 p-3 border rounded-md mb-2 cursor-pointer hover:scale-95 transition-all hover:shadow-md hover:shadow-[#18698A] ${
              selectedCategory === item.categoryName &&
              "border-[#18698A] border-2"
            }`}
          >
            <Image
              src={item.icon.url}
              style={{ width: "auto", height: "auto" }}
              width={20}
              height={20}
              alt={item.categoryName}
            />
            <h2 className="text-md text-bold text-gray-800">
              {item.categoryName
                .split("_")
                .join(" ")
                .replace("*", " ")
                .toUpperCase()}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategorySidebar;
