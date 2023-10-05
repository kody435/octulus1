// "use client";


// import React, { useState } from 'react';
// import { Home, Settings, HelpOutline } from '@material-tailwind/react';

// const Sidebar = () => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleSidebar = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className={`bg-gray-800 h-screen text-white w-16 ${isExpanded ? 'w-48' : ''}`}>
//       <div className="flex flex-col items-center mt-8">
//         <button onClick={toggleSidebar} className="text-white focus:outline-none">
//           {isExpanded ? 'Collapse' : 'Expand'}
//         </button>
//         <div className={`mt-4 ${isExpanded ? 'block' : 'hidden'}`}>
//           <button className="text-white p-4 focus:outline-none">
//             <Home size="20" />
//             {isExpanded && <span className="ml-2">Home</span>}
//           </button>
//           <button className="text-white p-4 focus:outline-none">
//             <Settings size="20" />
//             {isExpanded && <span className="ml-2">Settings</span>}
//           </button>
//           <button className="text-white p-4 focus:outline-none">
//             <HelpOutline size="20" />
//             {isExpanded && <span className="ml-2">Help</span>}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
