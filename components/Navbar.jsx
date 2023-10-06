"use client";

import Link from "next/link";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  Bars3Icon,
  XMarkIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
 
// const colors = {
//   blue: "bg-blue-50 text-blue-500",
//   orange: "bg-orange-50 text-orange-500",
//   green: "bg-green-50 text-green-500",
//   "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
//   purple: "bg-purple-50 text-purple-500",
//   teal: "bg-teal-50 text-teal-500",
//   cyan: "bg-cyan-50 text-cyan-500",
//   pink: "bg-pink-50 text-pink-500",
// };
 
// const navListMenuItems = [
//   {
//     color: "blue",
//     icon: FlagIcon,
//     title: "About us",
//     description: "Learn about our story and our mission statement.",
//   },
//   {
//     color: "orange",
//     icon: ChatBubbleOvalLeftIcon,
//     title: "Press",
//     description: "News and writings, press releases, and resources",
//   },
//   {
//     color: "green",
//     icon: UsersIcon,
//     title: (
//       <div className="flex items-center gap-1">
//         Careers{" "}
//         <Chip
//           size="sm"
//           color="green"
//           variant="ghost"
//           value="We're hiring!"
//           className="capitalize"
//         />
//       </div>
//     ),
//     description: "We are always looking for talented people. Join us!",
//   },
//   {
//     color: "blue-gray",
//     icon: FolderIcon,
//     title: "Legal",
//     description: "All the stuff that we dan from legal made us add.",
//   },
//   {
//     color: "purple",
//     icon: RocketLaunchIcon,
//     title: "Products",
//     description: "Checkout our products that helps a startup running.",
//   },
//   {
//     color: "teal",
//     icon: FaceSmileIcon,
//     title: "Icons",
//     description: "Set of beautiful icons that you can use in your project.",
//   },
//   {
//     color: "cyan",
//     icon: PuzzlePieceIcon,
//     title: "UI Kits",
//     description: "High quality UI Kits helps you to 2x faster.",
//   },
//   {
//     color: "pink",
//     icon: GiftIcon,
//     title: "Open Source",
//     description: "List of all our open-source projects, it's all free.",
//   },
// ];
 
// function NavListMenu() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
 
//   const renderItems = navListMenuItems.map(
//     ({ icon, title, description, color }, key) => (
//       <a href="#" key={key}>
//         <MenuItem className="flex items-center gap-3 rounded-lg">
//           <div className={`rounded-lg p-5 ${colors[color]}`}>
//             {React.createElement(icon, {
//               strokeWidth: 2,
//               className: "h-6 w-6",
//             })}
//           </div>
//           <div>
//             <Typography
//               variant="h6"
//               color="blue-gray"
//               className="flex items-center text-sm"
//             >
//               {title}
//             </Typography>
//             <Typography variant="small" color="gray" className="font-normal">
//               {description}
//             </Typography>
//           </div>
//         </MenuItem>
//       </a>
//     )
//   );
 
//   return (
//     <React.Fragment>
//       <Menu
//         open={isMenuOpen}
//         handler={setIsMenuOpen}
//         offset={{ mainAxis: 20 }}
//         placement="bottom"
//         allowHover={true}
//       >
//         <MenuHandler>
//           <Typography as="div" variant="small" className="font-normal">
//             <ListItem
//               className="flex items-center gap-2 py-2 pr-4"
//               selected={isMenuOpen || isMobileMenuOpen}
//               onClick={() => setIsMobileMenuOpen((cur) => !cur)}
//             >
//               <Square3Stack3DIcon className="h-[18px] w-[18px]" />
//               Resources
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`hidden h-3 w-3 transition-transform lg:block ${
//                   isMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//               <ChevronDownIcon
//                 strokeWidth={2.5}
//                 className={`block h-3 w-3 transition-transform lg:hidden ${
//                   isMobileMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </ListItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
//           <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
//         </MenuList>
//       </Menu>
//       <div className="block lg:hidden">
//         <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
//       </div>
//     </React.Fragment>
//   );
// }
 
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="/movies"
        variant="h5"
        color="white"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <CubeTransparentIcon className="h-[28px] w-[28px]" />
          Movies
        </ListItem>
      </Typography>
      {/* <NavListMenu /> */}
      <Typography
        as="a"
        href="tv-shows"
        variant="h5"
        color="white"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <Square3Stack3DIcon className="h-[28px] w-[28px]" />
          Tv-Shows
        </ListItem>
      </Typography>
    </List>
  );
}
 
export default function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-screen px-4 py-2 bg-transparent border-none text-white" fullWidth>
      <div className="flex items-center justify-between text-white-900">
        <Link href="/">
        <Typography
          variant="h3"
          className="mr-4 cursor-pointer py-1 lg:ml-2 border-b-2 border-blue-grey-500"
        >
          The OCTULUS
        </Typography>
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        {/* <div className="hidden gap-2 lg:flex">
          <Button variant="text" size="sm" color="blue-gray">
            Sign In
          </Button>
          <Button variant="gradient" size="sm">
            Sign Up
          </Button>
        </div> */}
        <IconButton
          variant="text"
          color="white"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

// import React from "react";
// import {
//   Navbar,
//   Collapse,
//   Typography,
//   IconButton,
//   List,
//   ListItem,
// } from "@material-tailwind/react";
// import {
//   UserCircleIcon,
//   CubeTransparentIcon,
//   Bars3Icon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";

// // const colors = {
// //   blue: "bg-blue-50 text-blue-500",
// //   orange: "bg-orange-50 text-orange-500",
// //   green: "bg-green-50 text-green-500",
// //   "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
// //   purple: "bg-purple-50 text-purple-500",
// //   teal: "bg-teal-50 text-teal-500",
// //   cyan: "bg-cyan-50 text-cyan-500",
// //   pink: "bg-pink-50 text-pink-500",
// // };

// // const navListMenuItems = [
// //   {
// //     color: "blue",
// //     icon: FlagIcon,
// //     title: "About us",
// //     description: "Learn about our story and our mission statement.",
// //   },
// //   {
// //     color: "orange",
// //     icon: ChatBubbleOvalLeftIcon,
// //     title: "Press",
// //     description: "News and writings, press releases, and resources",
// //   },
// //   {
// //     color: "green",
// //     icon: UsersIcon,
// //     title: (
// //       <div className="flex items-center gap-1">
// //         Careers{" "}
// //         <Chip
// //           size="sm"
// //           color="green"
// //           variant="ghost"
// //           value="We're hiring!"
// //           className="capitalize"
// //         />
// //       </div>
// //     ),
// //     description: "We are always looking for talented people. Join us!",
// //   },
// //   {
// //     color: "blue-gray",
// //     icon: FolderIcon,
// //     title: "Legal",
// //     description: "All the stuff that we dan from legal made us add.",
// //   },
// //   {
// //     color: "purple",
// //     icon: RocketLaunchIcon,
// //     title: "Products",
// //     description: "Checkout our products that helps a startup running.",
// //   },
// //   {
// //     color: "teal",
// //     icon: FaceSmileIcon,
// //     title: "Icons",
// //     description: "Set of beautiful icons that you can use in your project.",
// //   },
// //   {
// //     color: "cyan",
// //     icon: PuzzlePieceIcon,
// //     title: "UI Kits",
// //     description: "High quality UI Kits helps you to 2x faster.",
// //   },
// //   {
// //     color: "pink",
// //     icon: GiftIcon,
// //     title: "Open Source",
// //     description: "List of all our open-source projects, it's all free.",
// //   },
// // ];

// // function NavListMenu() {
// //   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

// // //   const renderItems = navListMenuItems.map(
// // //     ({ icon, title, description, color }, key) => (
// // //       <a href="#" key={key}>
// // //         <MenuItem className="flex items-center gap-3 rounded-lg">
// // //           <div className={`rounded-lg p-5 ${colors[color]}`}>
// // //             {React.createElement(icon, {
// // //               strokeWidth: 2,
// // //               className: "h-6 w-6",
// // //             })}
// // //           </div>
// // //           <div>
// // //             <Typography
// // //               variant="h6"
// // //               color="blue-gray"
// // //               className="flex items-center text-sm"
// // //             >
// // //               {title}
// // //             </Typography>
// // //             <Typography variant="small" color="gray" className="font-normal">
// // //               {description}
// // //             </Typography>
// // //           </div>
// // //         </MenuItem>
// // //       </a>
// // //     )
// // //   );

// //   return (
// //     <React.Fragment>
// //       <Menu
// //         open={isMenuOpen}
// //         handler={setIsMenuOpen}
// //         offset={{ mainAxis: 20 }}
// //         placement="bottom"
// //         allowHover={true}
// //       >
// //         <MenuHandler>
// //           <Typography as="div" variant="small" className="font-normal">
// //             <ListItem
// //               className="flex items-center gap-2 py-2 pr-4"
// //               selected={isMenuOpen || isMobileMenuOpen}
// //               onClick={() => setIsMobileMenuOpen((cur) => !cur)}
// //             >
// //               <Square3Stack3DIcon className="h-[18px] w-[18px]" />
// //               Categories
// //               <ChevronDownIcon
// //                 strokeWidth={2.5}
// //                 className={`hidden h-3 w-3 transition-transform lg:block ${
// //                   isMenuOpen ? "rotate-180" : ""
// //                 }`}
// //               />
// //               <ChevronDownIcon
// //                 strokeWidth={2.5}
// //                 className={`block h-3 w-3 transition-transform lg:hidden ${
// //                   isMobileMenuOpen ? "rotate-180" : ""
// //                 }`}
// //               />
// //             </ListItem>
// //           </Typography>
// //         </MenuHandler>
// //         <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
// //           <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
// //         </MenuList>
// //       </Menu>
// //       <div className="block lg:hidden">
// //         <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
// //       </div>
// //     </React.Fragment>
// //   );
// // }

// function NavList() {
//   return (
//     <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
//       <Link href="/movies">
//         <Typography
//           as="a"
//           href="#"
//           variant="small"
//           color="blue-gray"
//           className="font-normal"
//         >
//           <ListItem className="flex items-center gap-2 py-2 pr-4">
//             <CubeTransparentIcon className="h-[18px] w-[18px]" />
//             Movies
//           </ListItem>
//         </Typography>
//       </Link>
//       {/* <NavListMenu /> */}
//       <Link href="/tv-shows">
//         <Typography
//           as="a"
//           href="#"
//           variant="small"
//           color="blue-gray"
//           className="font-normal"
//         >
//           <ListItem className="flex items-center gap-2 py-2 pr-4">
//             <UserCircleIcon className="h-[18px] w-[18px]" />
//             TV Shows
//           </ListItem>
//         </Typography>
//       </Link>
//     </List>
//   );
// }

// export default function NavbarWithMegaMenu() {
//   const [openNav, setOpenNav] = React.useState(false);

//   React.useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setOpenNav(false)
//     );
//   }, []);

//   return (
//     <Navbar className="mx-auto max-w-screen px-4 py-2" fullWidth>
//       <div className="flex items-center justify-between text-blue-gray-900">
//         <Link href='/'>
//           <Typography
//             as="a"
//             href="#"
//             variant="h6"
//             className="mr-4 cursor-pointer py-1.5 lg:ml-2"
//           >
//             The OCTULUS
//           </Typography>
//         </Link>
//         <div className="hidden lg:block">
//           <NavList />
//         </div>
//         <IconButton
//           variant="text"
//           color="blue-gray"
//           className="lg:hidden"
//           onClick={() => setOpenNav(!openNav)}
//         >
//           {openNav ? (
//             <XMarkIcon className="h-6 w-6" strokeWidth={2} />
//           ) : (
//             <Bars3Icon className="h-6 w-6" strokeWidth={2} />
//           )}
//         </IconButton>
//       </div>
//       <Collapse open={openNav}>
//         <NavList />
//       </Collapse>
//     </Navbar>
//   );
// }

// // import { Drawer, IconButton } from "@material-tailwind/react";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // import { useState } from "react";

// // export default function NavbarClient() {
// //   const pathname = usePathname();
// //   const [open, setOpen] = useState(false);

// //   const openDrawer = () => setOpen(true);
// //   const closeDrawer = () => setOpen(false);

// //   return (
// //     <div className="flex flex-row justify-between items-center py-2 px-5 border-b-2 z-50 sticky top-0 w-screen bg-transparent">
// //       <div className="flex flex-row gap-3">
// //         <div className="flex flex-row justify-center items-center">
// //           {pathname !== "/login" && pathname !== "/signup" && (
// //             <div className="flex flex-row justify-center items-center">
// //               <button onClick={openDrawer}>
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   strokeWidth={1.5}
// //                   stroke="currentColor"
// //                   className="w-6 h-6"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
// //                   />
// //                 </svg>
// //               </button>
// //               <Drawer
// //                 open={open}
// //                 onClose={closeDrawer}
// //                 className="pt-2 pl-2 w-full"
// //               >
// //                 <div className="mb-6 flex items-center justify-between">
// //                   <div className="text-2xl flex justify-between items-center cursor-none ">
// //                     The OCTULUS
// //                   </div>
// //                   <IconButton
// //                     variant="text"
// //                     color="blue-gray"
// //                     onClick={() => {
// //                       closeDrawer();
// //                       setAddName(false);
// //                     }}
// //                   >
// //                     <svg
// //                       xmlns="http://www.w3.org/2000/svg"
// //                       fill="none"
// //                       viewBox="0 0 24 24"
// //                       strokeWidth={2}
// //                       stroke="currentColor"
// //                       className="h-5 w-5"
// //                     >
// //                       <path
// //                         strokeLinecap="round"
// //                         strokeLinejoin="round"
// //                         d="M6 18L18 6M6 6l12 12"
// //                       />
// //                     </svg>
// //                   </IconButton>
// //                 </div>
// //                 <div className="flex flex-col gap-7">
// //                   <Link href="/">
// //                     <h3 className="text-black hover:bg-gray-200 flex flex-row items-center gap-3 px-4 py-3 w-full justify-start">
// //                       <svg
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         fill="none"
// //                         viewBox="0 0 24 24"
// //                         strokeWidth={1.5}
// //                         stroke="currentColor"
// //                         className="w-6 h-6"
// //                       >
// //                         <path
// //                           strokeLinecap="round"
// //                           strokeLinejoin="round"
// //                           d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
// //                         />
// //                       </svg>

// //                       <span className="text-lg font-medium">Home</span>
// //                     </h3>
// //                   </Link>
// //                 </div>

// //                 <div className="flex flex-col inset-0 sticky z-20 bg-white justify-center items-center">
// //                   <div className="flex flex-col p-2 justify-center items-center w-full">
// //                     <form
// //                       action="/auth/sign-out"
// //                       method="post"
// //                       className="p-0 m-0"
// //                     >
// //                       <button className="text-black rounded-lg hover:bg-red-500 flex flex-row items-center gap-3 px-4 py-2 w-full justify-center z-20">
// //                         <svg
// //                           xmlns="http://www.w3.org/2000/svg"
// //                           fill="none"
// //                           viewBox="0 0 24 24"
// //                           strokeWidth={1.5}
// //                           stroke="currentColor"
// //                           className="w-6 h-6"
// //                         >
// //                           <path
// //                             strokeLinecap="round"
// //                             strokeLinejoin="round"
// //                             d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
// //                           />
// //                         </svg>
// //                         Log out
// //                       </button>
// //                     </form>
// //                   </div>
// //                 </div>
// //               </Drawer>
// //             </div>
// //           )}
// //         </div>
// //         <div className="text-2xl flex justify-between items-center cursor-none ">
// //           The OCTULUS
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
