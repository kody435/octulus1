"use client";

import { Drawer, IconButton } from "@material-tailwind/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavbarClient() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div className="flex flex-row justify-between items-center py-2 px-5 border-b-2 z-50 sticky top-0 w-screen bg-transparent">
      <div className="flex flex-row gap-3">
        <div className="flex flex-row justify-center items-center">
          {pathname !== "/login" && pathname !== "/signup" && (
            <div className="flex flex-row justify-center items-center">
              <button onClick={openDrawer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
              <Drawer
                open={open}
                onClose={closeDrawer}
                className="pt-2 pl-2 w-full"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="text-2xl flex justify-between items-center cursor-none ">
                    The OCTULUS
                  </div>
                  <IconButton
                    variant="text"
                    color="blue-gray"
                    onClick={() => {
                      closeDrawer();
                      setAddName(false);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </IconButton>
                </div>
                <div className="flex flex-col gap-7">
                  <Link href="/">
                    <h3 className="text-black hover:bg-gray-200 flex flex-row items-center gap-3 px-4 py-3 w-full justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>

                      <span className="text-lg font-medium">Home</span>
                    </h3>
                  </Link>
                </div>

                <div className="flex flex-col inset-0 sticky z-20 bg-white justify-center items-center">
                  <div className="flex flex-col p-2 justify-center items-center w-full">
                    <form
                      action="/auth/sign-out"
                      method="post"
                      className="p-0 m-0"
                    >
                      <button className="text-black rounded-lg hover:bg-red-500 flex flex-row items-center gap-3 px-4 py-2 w-full justify-center z-20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                          />
                        </svg>
                        Log out
                      </button>
                    </form>
                  </div>
                </div>
              </Drawer>
            </div>
          )}
        </div>
        <div className="text-2xl flex justify-between items-center cursor-none ">
          The OCTULUS
        </div>
      </div>
    </div>
  );
}
