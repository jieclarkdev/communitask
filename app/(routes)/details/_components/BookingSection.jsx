import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import GlobalApi from "@/app/_services/GlobalApi";
import { useSession } from "@clerk/nextjs";
import { toast } from "sonner";
import moment from "moment";

function BookingSection({ children, task }) {
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState([]);
  const [selectedTime, setSelectedTime] = useState();
  const [bookedSlot, setBookedSlot] = useState([]);

  /**
   * Fetch Clerk User Data diri animas
   */
  const { session } = useSession();
  const { firstName: first_name, lastName: last_name } = session.user;
  const { emailAddress: email } = session.user.primaryEmailAddress;

  useEffect(() => {
    getTime();
    setDate();
    setSelectedTime("");
  }, []);

  useEffect(() => {
    date && taskBookedSlot();
  }, [date]);

  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }

    setTimeSlot(timeList);
  };

  const saveBooking = () => {
    GlobalApi.bookTasker(
      task.id,
      moment(date).format("DD-MMM-yyyy"),
      selectedTime,
      first_name,
      last_name,
      email
    )
      .then((response) => {
        if (response) {
          // toast message

          toast("Successfully Booked Tasker");
        }
      })
      .catch((error) => {
        // toast error
        toast("Failed to Book");
        console.log(error);
      });
  };

  /**
   * Get Selected Date Booked Slot
   */

  const taskBookedSlot = () => {
    GlobalApi.bookedTask(task.id, moment(date).format("DD-MMM-yyyy")).then(
      (response) => {
        console.log(response.bookings);
        setBookedSlot(response.bookings);
      }
    );
  };

  const isSlotBook = (time) => {
    return bookedSlot.find((item) => item.time === time);
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent className="overflow-auto">
          <SheetHeader>
            <SheetTitle>Book to Hire Tasker</SheetTitle>
            <SheetDescription>
              Select Date and Time Slot to book tasker service
            </SheetDescription>
            <h2 className="mt-5">Select Available Date</h2>
            <div className="flex flex-col gap-5 items-center my-5">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border "
              />
            </div>
            {/* Time slots */}
            <h2 className="mb-5">Select time slots</h2>
            <div className="grid grid-cols-3 gap-2">
              {timeSlot.map((item, index) => (
                <Button
                  key={index}
                  disabled={isSlotBook(item.time)}
                  variant="outline"
                  className={`border rounded-lg p-2 px-3 hover:bg-[#18698A] hover:text-white ${
                    selectedTime === item.time && "bg-[#18698A] text-white"
                  }`}
                  onClick={() => {
                    setSelectedTime(item.time);
                  }}
                >
                  {item.time}
                </Button>
              ))}
            </div>
          </SheetHeader>
          <SheetFooter>
            <SheetClose asChild>
              <div>
                <Button
                  variant="outline"
                  className="px-12 py-5 mt-5 bg-[#D24D57] me-3 text-white"
                >
                  Close
                </Button>
                <Button
                  className="px-12 py-5 mt-5 bg-[#18698A]"
                  disabled={!(selectedTime && date)}
                  onClick={() => saveBooking()}
                >
                  Hire
                </Button>
              </div>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default BookingSection;
