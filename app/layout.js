import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "./_components";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { BookDashed, GalleryHorizontalEnd } from "lucide-react";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

export const metadata = {
  title: "Communitask",
  description: "Learning and Earning",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/icon.ico" type="image/x-icon" sizes="any" />
        </head>
        <body className={poppins.className}>
          <SignedOut>
            <Header
              signinButton={
                <SignInButton className="font-semibold leading-6 text-[#18698A] text-lg hover:text-gray-800" />
              }
            />
          </SignedOut>
          <SignedIn>
            <Header
              userAccount={
                <div className="block items-center gap-3 md:flex">
                  <UserButton showName={false} />
                  <div>
                    <Link
                      href={"/mybooking"}
                      className="bg-white border-none shadow-none  hover:bg-white px-0 mt-5 text-lg font-bold text-[#18698A] md:hover:text-[#18698A] md:text-[#1f2937] md:mt-0  md:text-[13px] md:font-bold md:leading-6  "
                    >
                      Bookings
                    </Link>
                  </div>
                </div>
              }
            />
          </SignedIn>

          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
