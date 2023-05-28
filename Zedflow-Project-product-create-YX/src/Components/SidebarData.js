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
    id: 0,
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
    id: 1,
    title: "Stock",
    icon: <InventoryIcon />,
    path: "/stock",
    hasSubList: true,
    subList: [
      {
        title: "Stock On Hand",
        path: "/stock/stock-on-hand",
      },
      {
        title: "Stock Reorder",
        path: "/stock/stock-reorder",
      },
    ],
  },
  {
    id: 2,
    title: "Sales",
    icon: <ShoppingCartIcon />,
    path: "/Sales",
    hasSubList: true,
    subList: [
      {
        title: "Customer",
        path: "/sales/customer",
      },
      {
        title: "Sales Report",
        path: "/sales/sales-report",
      },
    ],
  },
  {
    id: 3,
    title: "Variants",
    icon: <LibraryBooksIcon />,
    path: "/variants",
    hasSubList: true,
    subList: [
      {
        title: "T-shirt",
        path: "/variants/t-shirt",
        hasSubList: false,
      },
      {
        title: "Mugs",
        path: "/variants/mugs",
        hasSubList: false,
      },
      {
        title: "Tote Bags",
        path: "/variants/totebags",
        hasSubList: false,
      },
      {
        title: "Cushion Cover",
        path: "/variants/cushion-cover",
        hasSubList: false,
      },
      {
        title: "Hoodies",
        path: "/variants/hoodies",
        hasSubList: false,
      },
      {
        title: "Kids",
        path: "/variants/kids",
        hasSubList: false,
      },
      {
        title: "Features",
        path: "/variants/features",
        hasSubList: true,
        subList: [
          {
            title: "Image",
            path: "/variants/features/image",
            hasSubList: false,
          },
          {
            title: "Price",
            path: "/variants/features/price",
            hasSubList: false,
          },
          {
            title: "Merchant Price",
            path: "/variants/features/merchant-price",
            hasSubList: false,
          },
          {
            title: "Description",
            path: "/variants/features/description",
            hasSubList: false,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "TradeMarks",
    icon: <BookIcon />,
    path: "/trademarks",
    hasSubList: true,
    subList: [
      {
        title: "Approved Keywords",
        path: "/trademarks/approved-key-words",
        hasSubList: false,
      },
      {
        title: "Banned Keywords",
        path: "/trademarks/banned-key-words",
        hasSubList: false,
      },
      {
        title: "Class Words",
        path: "/trademarks/class-words",
        hasSubList: false,
      },
    ],
  },
  {
    id: 5,
    title: "Keywords",
    icon: <InboxIcon />,
    path: "/keywords",
    hasSubList: false,
  },
  {
    id: 6,
    title: "Artist",
    icon: <SchoolIcon />,
    path: "/artist",
    hasSubList: false,
  },
  {
    id: 7,
    title: "Category",
    icon: <CategoryIcon />,
    path: "/category",
    hasSubList: false,
  },
  {
    id: 8,
    title: "Performance",
    icon: <CategoryIcon />,
    path: "/performance",
    hasSubList: false,
  },
  {
    id: 9,
    title: "Setting",
    icon: <SettingsIcon />,
    path: "/setting",
    hasSubList: true,
    subList: [
      {
        title: "General",
        path: "/setting/general",
        hasSubList: false,
      },
      {
        title: "Esty Setting",
        path: "/setting/esty-setting",
        hasSubList: false,
      },
    ],
  },
];

export { SidebarData };
