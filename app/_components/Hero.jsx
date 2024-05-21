import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { SubHero } from ".";

function Hero() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto  py-32 sm:py-48 lg:py-10 lg:px-16 flex items-center justify-between">
          <div className=" text-left">
            <h1 className=" text-4xl font-bold tracking-tight text-[#17688A] sm:text-7xl">
              Find the perfect mentorship services to enhance your skills and
              knowledge.
            </h1>

            <div>
              <div className="relative mt-10  ">
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block   w-72 rounded-md border-0 py-3 pl-7 pr-7 text-[#17688A] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#17688A] sm:text-sm sm:leading-6 focus-within:ring-red-500"
                  placeholder="What you are looking for?"
                />
                <div className="absolute inset-y-0  inset-x-72 right-0 ">
                  <Button className="bg-[#17688A] hover:bg-[#17678ad2] px-10 py-6 ml-2 text-lg">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/images/hero.png"
              width={1200}
              height={1200}
              alt="hero image"
            />
          </div>
        </div>
        {/* Grind list - How it works */}
        <SubHero />
      </div>
    </div>
  );
}

export default Hero;
