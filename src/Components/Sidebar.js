import "../style.css";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarData } from "./SidebarData";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Sidebar(props) {
  const path = useLocation();
  const [sublistVisible, setSublistVisible] = useState(false);
  const [arrowRotation, setArrowRotation] = useState(false);

  function toggleSublist(index) {
    setSublistVisible(sublistVisible === index ? false : index);
  }

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <a href="/Home" className="sidebar-logo">
          <img src="/zedflow-logo.png" alt="Zedflow Logo" className="logo" />
        </a>
      </div>
      <ul className="sidebar-list">
        {SidebarData.map((value, key) => {
          const isActive = path.pathname.includes(value.path);
          return (
            <li
              key={key}
              className={`row ${value.hasSubList ? "" : "no-arrow"}`}
            >
              {!value.hasSubList ? (
                <Link
                  to={value.path}
                  className="row no-arrow list-container"
                  id={isActive && "active"}
                >
                  <div className="row no-arrow list-container">
                    <div id="icon">{value.icon}</div>
                    <div id="title">{value.title}</div>
                  </div>
                </Link>
              ) : (
                <Link
                  to={value.path}
                  className="row list-container"
                  id={isActive && "active"}
                >
                  <div
                    className="row list-container"
                    onClick={() => toggleSublist(key)}
                    id={isActive && "active"}
                  >
                    <div id="icon">{value.icon}</div>
                    <div id="title">{value.title}</div>
                    {value.hasSubList && (
                      <KeyboardArrowRightIcon
                        id="arrow"
                        onClick={() => {
                          toggleSublist(key);
                          setArrowRotation(!arrowRotation);
                        }}
                        className={sublistVisible === key ? "rotate" : ""}
                      />
                    )}
                  </div>
                </Link>
              )}

              {value.hasSubList && (
                <ul
                  className={`sublist ${
                    sublistVisible === key ? false : "hidden"
                  }`}
                >
                  {value.subList.map((subValue, subKey) => {
                    const isActive = path.pathname.includes(subValue.path);
                    return (
                      <li
                        key={subKey}
                        className="row sublist"
                        // id={isActive && "active"}
                      >
                        <Link to={subValue.path}>
                          <div
                            className="row sublist-container"
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
