import Image from "next/image";
import React from "react";

function BookingHistory({ bookingHistory }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {bookingHistory.map((booking, index) => (
        <div key={index} className=" my-5 shadow-md p-3 rounded-lg ">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div>
                <Image
                  src={booking.taskList.images[0].url}
                  width={120}
                  height={120}
                  style={{ width: "auto", height: "auto" }}
                  alt={booking.taskList.name}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h2 className="font-bold text-sm md:text-lg text-gray-800">
                  {booking.taskList.name}
                </h2>
                <h2>{booking.taskList.contactPerson}</h2>
              </div>
            </div>

            <div>
              <h2>{booking.date}</h2>
              <h2>{booking.time}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookingHistory;
