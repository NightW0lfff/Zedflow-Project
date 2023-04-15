import "../style.css";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarData } from "./SidebarData";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Sidebar(props) {
  // Get the current path
  const path = useLocation();
  // Put the array inside to be able to keep all the select list open
  const [sublistVisible, setSublistVisible] = useState({
    id: null,
    open: false,
  });
  const [arrowRotation, setArrowRotation] = useState(false);

  function setId(id) {
    setSublistVisible(
      sublistVisible.id !== id && { ...sublistVisible, id: id }
    );
  }

  function toggleSublist(id) {
    setId(id);
    setSublistVisible(
      sublistVisible.id === id
        ? { ...sublistVisible, open: !sublistVisible.open }
        : { ...sublistVisible, open: false }
    );
  }

  function isOpen(id) {
    return sublistVisible.id === id && sublistVisible.open;
  }

  return (
    // Sidebar Container
    <div className="sidebar">
      {/* Sidebar Header */}
      <div className="header">
        <a href="/Home" className="logo">
          <img src="/zedflow-logo.png" alt="Zedflow Logo" className="logo" />
        </a>
      </div>
      {/* Sidebar List */}
      <ul className="list">
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
                  className="list-container"
                  id={isActive && "active"}
                >
                  <i id="icon">{value.icon}</i>
                  <span id="title">{value.title}</span>
                </Link>
              ) : (
                <div
                  className="list-container"
                  onClick={() => toggleSublist(key)}
                  id={isActive && "active"}
                >
                  <i id="icon">{value.icon}</i>
                  <span id="title">{value.title}</span>
                  {value.hasSubList && (
                    <KeyboardArrowRightIcon
                      id="arrow"
                      onClick={() => {
                        toggleSublist(key);
                        setArrowRotation(!arrowRotation);
                      }}
                      className={isOpen(key) ? "rotate" : ""}
                    />
                  )}
                </div>
              )}

              {/* Sidebar Sublist */}
              {value.hasSubList && (
                <ul className={`sublist ${isOpen(key) ? "hidden" : ""}`}>
                  {/* Create a sublist for each list item that has Sublist */}
                  {value.subList.map((subValue, subKey) => {
                    // Check if the current path is the same as the path in the sidebar data
                    const isActive = path.pathname.includes(subValue.path);
                    return (
                      <li key={subKey} className="sublist">
                        <Link to={subValue.path}>
                          <div
                            className="sublist-container"
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
