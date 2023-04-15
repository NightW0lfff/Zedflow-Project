import "./Sidebar.css";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarData } from "./SidebarData";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Sidebar(props) {
  // Get the current path
  const path = useLocation();

  const [arrowRotation, setArrowRotation] = useState(false);

  const [openList, setOpenList] = useState(() => {
    return SidebarData.filter((value) => value.hasSubList).map((value, key) => {
      return { id: value.id, open: false };
    });
  });

  function isOpen(index) {
    // Use the find function to get the object with the specified id
    const item = openList.find((item) => item.id === index);
    if (item) {
      return item.open;
    }
    return false;
  }

  function toggleOpen(index) {
    // Use the map function to create a new array with the updated state
    setOpenList((prevState) =>
      prevState.map((item) =>
        item.id === index ? { ...item, open: !item.open } : item
      )
    );
  }

  return (
    // Sidebar Container
    <div className="sidebar">
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <a href="/home" className="sidebar-logo">
          <img
            src="/zedflow-logo.png"
            alt="Zedflow Logo"
            className="sidebar-logo"
          />
        </a>
      </div>
      {/* Sidebar List */}
      <ul className="sidebar-list">
        {SidebarData.map((value, key) => {
          // Check if the current path is the same as the path in the sidebar data
          const isActive = path.pathname.includes(value.path);
          return (
            <li
              key={key}
              // If the sidebar item has a sublist, add the class "no-arrow" to the list item
              className={value.hasSubList ? "" : "no-arrow"}
            >
              {!value.hasSubList ? (
                // If the sidebar item has no sublist, add the class "no-arrow" to the list item
                <Link
                  to={value.path}
                  className="sidebar-list-container"
                  id={isActive && "active"}
                >
                  <i id="icon">{value.icon}</i>
                  <span id="title">{value.title}</span>
                </Link>
              ) : (
                <div
                  className="sidebar-list-container"
                  onClick={() => toggleOpen(key)}
                  id={isActive && "active"}
                >
                  <i id="icon">{value.icon}</i>
                  <span id="title">{value.title}</span>
                  {value.hasSubList && (
                    <KeyboardArrowRightIcon
                      id="arrow"
                      onClick={() => {
                        setArrowRotation(!arrowRotation);
                      }}
                      className={isOpen(key) ? "rotate" : ""}
                    />
                  )}
                </div>
              )}

              {/* Sidebar Sublist */}
              {value.hasSubList && (
                <ul
                  className={`sidebar-sublist ${isOpen(key) ? "" : "hidden"}`}
                >
                  {/* Create a sublist for each list item that has Sublist */}
                  {value.subList.map((subValue, subKey) => {
                    // Check if the current path is the same as the path in the sidebar data
                    const isActive = path.pathname.includes(subValue.path);
                    return (
                      <li key={subKey} className="sidebar-sublist">
                        <Link to={subValue.path}>
                          <div
                            className="sidebar-sublist-container"
                            id={isActive && "active"}
                          >
                            <div></div>
                            <div id="title">{subValue.title}</div>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
