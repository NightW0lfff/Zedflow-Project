import "../style.css";
import React, { useState } from "react";
import { SidebarData } from "./SidebarData";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Sidebar(props) {
  // const [state, setState] = useState(false);
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <a href="/Home" className="sidebar-logo">
          <img src="zedflow-logo.png" alt="Zedflow Logo" className="logo" />
        </a>
      </div>
      <ul className="sidebar-list">
        {SidebarData.map((value, key) => {
          return (
            <li
              key={key}
              className={`row ${value.hasSubList ? "" : "no-arrow"}`}
              onClick={() => {
                window.location.pathname = value.path;
              }}
            >
              <div
                className="row list-container"
                id={
                  window.location.pathname.includes(value.path) ? "active" : ""
                }
              >
                <div id="icon">{value.icon}</div>
                <div id="title">{value.title}</div>
                {value.hasSubList && <KeyboardArrowRightIcon id="arrow" />}
              </div>
              {value.hasSubList && (
                <ul>
                  {value.subList.map((subValue, subKey) => {
                    return (
                      <li
                        key={subKey}
                        className="sublist"
                        onClick={() => {
                          window.location.pathname = subValue.path;
                        }}
                      >
                        <div
                          className="row sublist-container"
                          id={
                            window.location.pathname.includes(subValue.path)
                              ? "active"
                              : ""
                          }
                        >
                          <div id="title">{subValue.title}</div>
                        </div>
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
