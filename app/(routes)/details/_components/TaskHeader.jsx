import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function TaskHeader({ header }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (header && header.images && header.images.length > 0) {
      // Fetch the image only if it's available
      const imageUrl = header.images[0].url;
      setImage(imageUrl);
    }
  }, [header]);

  return (
    <div className="flex">
      <div className="flex flex-col md:flex-row items-center w-auto md:w-2/3 justify-between p-5 shadow-md space-y-4 md:space-y-0 rounded-lg bg-[#186a8a0e]">
        <div className="flex flex-col w-full">
          <div>
            <h2 className="mb-4 font-bold text-2xl text-[#18698A]">
              {header ? header.name : "Loading..."}
            </h2>
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-xl bg-[#26C281] w-2 animate-pulse"></div>
              <h2 className="font-extrabold text-[#18698A] leading-6">
                {header?.category?.categoryName
                  ? header.category.categoryName.split("_").join(" ")
                  : "Loading..."}
              </h2>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-10 w-full pr-5">
            <div>
              <h2 className="font-bold text-lg text-center md:text-left">
                {header ? header.contactPerson : "Loading..."}
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <Mail size={20} color="black" />
                <h2 className="text-pretty font-thin">
                  {header ? header.email : "Loading..."}
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <MapPin size={20} color="#D24D57" />
              </span>
              <h2 className="font-bold text-lg text-gray-400">
                {header ? header.address : "Loading..."}
              </h2>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-full md:w-auto md:max-w-xs">
          {image && (
            <Image
              src={image}
              alt={header ? header.name : "Image"}
              className="rounded-lg"
              priority
              width={150}
              height={200}
              style={{ width: "auto", height: "auto" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskHeader;
