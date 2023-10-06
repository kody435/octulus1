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