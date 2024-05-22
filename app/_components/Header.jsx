"use client";

import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  Popover,
  PopoverGroup,
  Transition,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ userAccount, signinButton }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href={"/"} className="-m-1.5 p-1.5">
            <Image
              src="/communitask.png"
              width={200}
              height={200}
              alt="CommunITask logo"
              style={{ height: "auto", width: "auto" }}
              priority
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link href={"/"} className="nav-link text-lg">
            Home
          </Link>
          <Link href={"#about"} className="nav-link text-lg">
            About
          </Link>
          <Link href={"#services"} className="nav-link text-lg">
            Services
          </Link>
          <Link
            href={"mailto:jieclarkdev.communitask.tech"}
            className="nav-link text-lg"
          >
            Contact
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-5 ">
          {/* <a
            href="#"
            className="font-semibold leading-6 text-[#18698A]  text-lg hover:text-gray-800"
          >
            Register
          </a>
          <a
            href="#"
            className="font-semibold leading-6 text-[#18698A] text-lg hover:text-gray-800"
          >
            Sign in
          </a> */}
          {!userAccount ? signinButton : userAccount}
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src="/communitask.png"
                width={170}
                height={170}
                alt="CommunITask logo"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6">
                {/* <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#18698A] hover:bg-gray-50"
                >
                  Sign in
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#18698A] hover:bg-gray-50"
                >
                  Register
                </a> */}
                {!userAccount ? signinButton : userAccount}
              </div>
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#18698A] hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#18698A] hover:bg-gray-50"
                >
                  About
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#18698A] hover:bg-gray-50"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#18698A] hover:bg-gray-50"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
