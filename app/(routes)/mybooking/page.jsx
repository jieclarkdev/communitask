"use client";

import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookingHistory } from "./_components";
import GlobalApi from "@/app/_services/GlobalApi";
import { SignInButton, useSession } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Image from "next/image";

function MyBooking() {
  const [bookingHistory, setBookingHistory] = useState([]);
  const { session, isSignedIn } = useSession();
  const emailAddress = session?.user?.primaryEmailAddress;

  const completedColor = "bg-[#186a8a0e]";

  useEffect(() => {
    if (emailAddress) {
      UserBookingHistory();
    }
  }, [emailAddress]);

  /**
   * get user booking history
   */
  const UserBookingHistory = async () => {
    try {
      const response = await GlobalApi.GetUserBookingHistory(emailAddress);
      console.log(response.bookings);
      setBookingHistory(response.bookings);
    } catch (error) {
      console.error("Failed to fetch booking history:", error);
    }
  };

  const filterData = (type) => {
    return bookingHistory.filter((item) =>
      type === "booked"
        ? new Date(item.date) >= new Date()
        : new Date(item.date) < new Date()
    );
  };

  if (!isSignedIn) {
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

  return (
    <div className="my-10 mx-5 md:mx-36">
      <h2 className="my-3 font-bold text-gray-800">Booking History</h2>
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="w-full justify-start py-5">
          <TabsTrigger value="booked">Booked Taskers</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="booked">
          <BookingHistory bookingHistory={filterData("booked")} />
        </TabsContent>
        <TabsContent value="completed">
          <BookingHistory
            bookingHistory={filterData("completed")}
            completed={completedColor}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default MyBooking;
