import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import { navbarConfig } from "./navbar-config.js";
import React from "react";
import { FaHome } from "react-icons/fa";

export default function Navbar({ drawerOpen, theme }) {
  const [currSubUrl, setCurrSubUrl] = React.useState("");

  React.useEffect(() => {
    // Get Window Location
    setCurrSubUrl(window.location.pathname);
  }, []);

  return (
    <Sidebar
      collapsed={drawerOpen}
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          // backgroundColor: "yellow",
          color: "black",
          fontFamily: "Roboto",
          minHeight: "100vh",
        },
      }}
    >
      <Menu
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            // only apply styles on first level elements of the tree
            return {
              color: !disabled
                ? theme.palette.primary.main
                : theme.palette.secondary.main,
              backgroundColor: active
                ? theme.palette.custom.backgroundColorActive
                : theme.palette.custom.backgroundColorNotActive,
            };
            // if (level === 0)
          },
        }}
      >
        <MenuItem
          icon={<FaHome />}
          active={"/" === currSubUrl}
          onClick={() => {
            window.location = "/";
          }}
        >
          Home
        </MenuItem>
        {navbarConfig.config.map((obj, idx) => {
          if (obj.type === "MenuItem") {
            return (
              <MenuItem
                key={obj.title + idx}
                icon={obj.icon}
                active={obj.url === currSubUrl}
                onClick={() => {
                  window.location = obj.url;
                }}
              >
                {obj.title}
              </MenuItem>
            );
          }
          return (
            <SubMenu label={obj.title} key={obj.title + idx} icon={obj.icon}>
              {obj.data.map((innerObj, innerIdx) => {
                return (
                  <MenuItem
                    key={innerObj.title + innerIdx}
                    icon={innerObj.icon}
                    active={
                      "/" +
                        obj.title.toLowerCase().replace(" ", "-") +
                        innerObj.url ===
                      currSubUrl
                    }
                    onClick={() => {
                      window.location =
                        "/" +
                        obj.title.toLowerCase().replace(" ", "-") +
                        innerObj.url;
                    }}
                  >
                    {innerObj.title}
                  </MenuItem>
                );
              })}
            </SubMenu>
          );
        })}
      </Menu>
    </Sidebar>
  );
}
