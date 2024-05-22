"use client";

import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookingHistory } from "./_components";
import GlobalApi from "@/app/_services/GlobalApi";
import { useSession } from "@clerk/nextjs";
import { redirect } from "next/navigation";

function MyBooking() {
  const [bookingHistory, setBookingHistory] = useState([]);
  const { session } = useSession();
  const emailAddress = session?.user?.primaryEmailAddress;
  const { isSignedIn } = useSession();

  const completedColor = "bg-[#186a8a0e]";

  useEffect(() => {
    emailAddress && UserBookingHistory();
  }, [emailAddress]);

  /**
   * get user booking history
   */

  const UserBookingHistory = () => {
    GlobalApi.GetUserBookingHistory(emailAddress).then((response) => {
      console.log(response.bookings);
      setBookingHistory(response.bookings);
    });
  };

  const filterData = (type) => {
    const result = bookingHistory.filter((item) =>
      type == "booked"
        ? new Date(item.date) >= new Date()
        : new Date(item.date) <= new Date()
    );

    return result;
  };
  return (
    <div>
      {isSignedIn ? (
        <div className="my-10 mx-5 md:mx-36">
          <h2 className="my-3 font-bold text-gray-800">Booking History</h2>
          <Tabs defaultValue="account" className="w-full ">
            <TabsList className="w-full justify-start  py-5">
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
      ) : (
        redirect("https://flying-kangaroo-4.accounts.dev")
      )}
    </div>
  );
}

export default MyBooking;
