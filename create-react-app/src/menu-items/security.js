// import { useState } from 'react';
// import { IconKey, IconShoppingCart, IconWallet } from '@tabler/icons';

// // constant
// const icons = {
//   IconKey,
//   IconWallet,
//   IconShoppingCart
// };

// // ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

// const Security = () => {
//   // State to manage the open/closed status of sections
//   const [isOpenSecurity, setIsOpenSecurity] = useState(false);
//   const [isOpenSale, setIsOpenSale] = useState(false);
//   const [isOpenPurchase, setIsOpenPurchase] = useState(false);

//   // Function to toggle the 'Security' section
//   const toggleSecurity = () => {
//     setIsOpenSecurity(!isOpenSecurity);
//     setIsOpenSale(false); // Close 'Sale' section
//     setIsOpenPurchase(false); // Close 'Purchase' section
//   };

//   // Function to toggle the 'Sale' section
//   const toggleSale = () => {
//     setIsOpenSale(!isOpenSale);
//     setIsOpenSecurity(true); // Open 'Security' section
//     setIsOpenPurchase(false); // Close 'Purchase' section
//   };

//   // Function to toggle the 'Purchase' section
//   const togglePurchase = () => {
//     setIsOpenPurchase(!isOpenPurchase);
//     setIsOpenSecurity(true); // Open 'Security' section
//     setIsOpenSale(false); // Close 'Sale' section
//   };

//   return {
//     id: 'Security',
//     type: 'group',
//     isOpen: isOpenSecurity,
//     onClick: toggleSecurity, // Toggle 'Security' section
//     children: [
//       {
//         id: 'security',
//         title: 'Security',
//         type: 'collapse',
//         icon: icons.IconKey,
//         isOpen: isOpenSecurity,
//         onClick: toggleSecurity, // Toggle 'Security' section
//         children: [
//           {
//             id: 'sale',
//             title: 'Sale',
//             type: 'collapse',
//             icon: icons.IconShoppingCart,
//             isOpen: isOpenSale,
//             onClick: toggleSale, // Toggle 'Sale' section
//             children: [
//               {
//                 id: 'pib',
//                 title: 'PIB',
//                 type: 'item',
//                 url: '/dashboard/NewInvestment/',
//                 target: true
//               },
//               {
//                 id: 'ijara',
//                 title: 'Ijara Skook',
//                 type: 'item',
//                 url: '/dashboard/NewInvestment/',
//                 target: true
//               },
//               {
//                 id: 'bill',
//                 title: 'T-Bills',
//                 type: 'item',
//                 url: '/dashboard/NewInvestment/',
//                 target: true
//               }
//             ]
//           },
//           {
//             id: 'purchase',
//             title: 'Purchase',
//             type: 'collapse',
//             icon: icons.IconWallet,
//             isOpen: isOpenPurchase,
//             onClick: togglePurchase, // Toggle 'Purchase' section
//             children: [
//               {
//                 id: 'SBP',
//                 title: 'SBP Auction Participation',
//                 type: 'collapse',
//                 icon: icons.IconKey,
//                 isOpen: isOpenPurchase, // Fix isOpen value
//                 children: [
//                   {
//                     id: 'competitive',
//                     title: 'Competitive',
//                     type: 'item',
//                     url: '/dashboard/NewInvestment/',
//                     target: true
//                   },
//                   {
//                     id: 'noncompetitive',
//                     title: 'Non Competitive',
//                     type: 'item',
//                     url: '/dashboard/NewInvestment/',
//                     target: true
//                   }
//                 ]
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   };
// };

// export default Security;

// Import React and useState

// Security.js

// import { useState } from 'react';
// import { toggleSubsection } from '../layout/menuUtils'; // Adjust the import path accordingly

// const Security = () => {
//   const [menuData, setMenuData] = useState({
//     id: 'Security',
//     type: 'group',
//     isOpen: false,
//     openSubsection: null,
//     children: [
//       {
//         id: 'security',
//         title: 'Security',
//         type: 'collapse',
//         isOpen: false,
//         children: [
//           {
//             id: 'sale',
//             title: 'Sale',
//             type: 'collapse',
//             isOpen: false,
//             children: [
//               { id: 'pib', title: 'PIB', type: 'item', url: '/dashboard/NewInvestment/', target: true },
//               { id: 'ijara', title: 'Ijara Skook', type: 'item', url: '/dashboard/NewInvestment/', target: true },
//               { id: 'bill', title: 'T-Bills', type: 'item', url: '/dashboard/NewInvestment/', target: true }
//             ]
//           },
//           {
//             id: 'purchase',
//             title: 'Purchase',
//             type: 'collapse',
//             isOpen: false,
//             children: [
//               {
//                 id: 'SBP',
//                 title: 'SBP Auction Participation',
//                 type: 'collapse',
//                 isOpen: false,
//                 children: [
//                   { id: 'competitive', title: 'Competitive', type: 'item', url: '/dashboard/NewInvestment/', target: true },
//                   { id: 'noncompetitive', title: 'Non Competitive', type: 'item', url: '/dashboard/NewInvestment/', target: true }
//                 ]
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   });
// }

// //   const handleToggleSubsection = (subsectionId, parentId) => {
// //     const updatedMenuData = toggleSubsection(menuData, subsectionId, parentId);
// //     setMenuData(updatedMenuData);
// //   };

// //   return { menuData, handleToggleSubsection };
// // };

// export default Security;











// import React from 'react';

// const Security = ({ isOpen, toggleSubsection }) => {
//   const initialSecurityState = {
//     id: 'Security',
//     type: 'group',
//     isOpen: isOpen,
//     openSubsection: null,
//     children: [
//       {
//         id: 'security',
//         title: 'Security',
//         type: 'collapse',
//         isOpen: isOpen,
//         children: [
//           {
//             id: 'sale',
//             title: 'Sale',
//             type: 'collapse',
//             isOpen: isOpen,
//             children: [
//               { id: 'pib', title: 'PIB', type: 'item', url: '/dashboard/NewInvestment/', target: true },
//               { id: 'ijara', title: 'Ijara Skook', type: 'item', url: '/dashboard/NewInvestment/', target: true },
//               { id: 'bill', title: 'T-Bills', type: 'item', url: '/dashboard/NewInvestment/', target: true }
//             ]
//           },
//           {
//             id: 'purchase',
//             title: 'Purchase',
//             type: 'collapse',
//             isOpen: isOpen,
//             children: [
//               {
//                 id: 'SBP',
//                 title: 'SBP Auction Participation',
//                 type: 'collapse',
//                 isOpen: isOpen,
//                 children: [
//                   { id: 'competitive', title: 'Competitive', type: 'item', url: '/dashboard/NewInvestment/', target: true },
//                   { id: 'noncompetitive', title: 'Non Competitive', type: 'item', url: '/dashboard/NewInvestment/', target: true }
//                 ]
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   };

//   return (
//     <div>
//       {initialSecurityState.children.map((subsection) => (
//         <div
//           key={subsection.id}
//           onClick={() => toggleSubsection(subsection.id)}
//           onKeyDown={(e) => {
//             if (e.key === 'Enter' || e.key === ' ') {
//               toggleSubsection(subsection.id);
//             }
//           }}
//           role="button"
//           tabIndex={0}
//           onMouseDown={(e) => {
//             if (e.button === 0) {
//               e.preventDefault();
//             }
//           }}
//         >
//           {subsection.title}
//           {subsection.isOpen && (
//             <ul>
//               {subsection.children.map((item) => (
//                 <li key={item.id}>{item.title}</li>
//               ))}
//             </ul>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Security;

import { IconKey, IconShoppingCart, IconWallet } from '@tabler/icons';

const icons = {
  IconKey,
  IconWallet,
  IconShoppingCart
};

const initialSecurityState = {
  id: 'Security',
  type: 'group',
  isOpen: false,
  openSubsection: null,
  children: [
    {
      id: 'Security',
      title: 'Security',
      type: 'collapse',
      icon: icons.IconKey,
      isOpen: false,
      children: [
        {
          id: 'sale',
          title: 'Sale',
          type: 'collapse',
          icon: icons.IconShoppingCart,
          isOpen: false,
          children: [
            { id: 'pib', title: 'PIB', type: 'item', url: '/dashboard/NewInvestment/', target: true },
            { id: 'ijara', title: 'Ijara Skook', type: 'item', url: '/dashboard/NewInvestment/', target: true },
            { id: 'bill', title: 'T-Bills', type: 'item', url: '/dashboard/NewInvestment/', target: true }
          ]
        },
        {
          id: 'purchase',
          title: 'Purchase',
          type: 'collapse',
          icon: icons.IconWallet,
          isOpen: false,
          children: [
            {
              id: 'SBP',
              title: 'SBP Auction Participation',
              type: 'collapse',
              icon: icons.IconKey,
              isOpen: false,
              children: [
                { id: 'competitive', title: 'Competitive', type: 'item', url: '/dashboard/NewInvestment/', target: true },
                { id: 'noncompetitive', title: 'Non Competitive', type: 'item', url: '/dashboard/NewInvestment/', target: true }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const toggleOpen = (data, id) => {
  let updatedData = data.map(item => {
    if (item.children) {
      if (item.id === id) {
        return { ...item, isOpen: !item.isOpen }; // Toggle isOpen for the clicked item
      } else if ((id === 'sale' || id === 'purchase') && (item.id === 'sale' || item.id === 'purchase')) {
        // Close the other subsection if one of them is opened
        return { ...item, isOpen: false };
      } else if (item.id === 'SBP' && id !== 'SBP') {
        // Open SBP subsection when SBP Auction Participation is clicked
        return { ...item, isOpen: id === 'SBP' ? !item.isOpen : false };
      } else {
        // Close other items
        return { ...item, isOpen: false };
      }
    }
    return item;
  });

  return updatedData;
};

export { initialSecurityState, toggleOpen };




