import React from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import BookIcon from "@mui/icons-material/Book";
import InboxIcon from "@mui/icons-material/Inbox";
import SchoolIcon from "@mui/icons-material/School";
import CategoryIcon from "@mui/icons-material/Category";
import SettingsIcon from "@mui/icons-material/Settings";

const SidebarData = [
  {
    title: "Products",
    icon: <StorefrontIcon />,
    path: "/products",
    hasSubList: true,
    subList: [
      {
        title: "Product List",
        path: "/products/list",
      },
      {
        title: "Product Create",
        path: "/products/create",
      },
      {
        title: "Product Image Set",
        path: "/products/images",
      },
      {
        title: "Product Status",
        path: "/products/status",
      },
    ],
  },
  {
    title: "Stock",
    icon: <InventoryIcon />,
    path: "/Stock",
    // hasSubList: true,
    hasSubList: false,
  },
  {
    title: "Sales",
    icon: <ShoppingCartIcon />,
    path: "/Sales",
    hasSubList: false,
    // hasSubList: true,
  },
  {
    title: "Variants",
    icon: <LibraryBooksIcon />,
    path: "/Variants",
    // hasSubList: true,
    hasSubList: false,
  },
  {
    title: "TradeMarks",
    icon: <BookIcon />,
    path: "/TradeMarks",
    hasSubList: false,
  },
  {
    title: "Keywords",
    icon: <InboxIcon />,
    path: "/Keywords",
    hasSubList: false,
  },
  {
    title: "Artist",
    icon: <SchoolIcon />,
    path: "/Artist",
    hasSubList: false,
  },
  {
    title: "Category",
    icon: <CategoryIcon />,
    path: "/Category",
    hasSubList: false,
  },
  {
    title: "Performance",
    icon: <CategoryIcon />,
    path: "/Performance",
    hasSubList: false,
  },
  {
    title: "Setting",
    icon: <SettingsIcon />,
    path: "/Setting",
    hasSubList: false,
    // hasSubList: true,
  },
];

export { SidebarData };
