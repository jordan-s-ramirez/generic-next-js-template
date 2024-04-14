import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import { navbarConfig } from "./navbar-config.js";
import React from "react";

const navbarColors = {
  color: "green",
  colorDisabled: "green",
  backgroundColorActive: "eecef9",
  backgroundColorNotActive: undefined,
};

export default function Navbar({ drawerOpen }) {
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
              color: disabled ? navbarColors.colorDisabled : navbarColors.color,
              backgroundColor: active
                ? navbarColors.backgroundColorActive
                : navbarColors.backgroundColorNotActive,
            };
            // if (level === 0)
          },
        }}
      >
        {navbarConfig.config.map((obj, idx) => {
          if (obj.type === "MenuItem") {
            return (
              <MenuItem
                key={obj.title + idx}
                icon={obj.icon}
                active={
                  "/" + obj.title.toLowerCase().replace(" ", "-") === currSubUrl
                }
                onClick={() => {
                  window.location =
                    "/" + obj.title.toLowerCase().replace(" ", "-");
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
                        "/" +
                        innerObj.title.toLowerCase().replace(" ", "-") ===
                      currSubUrl
                    }
                    onClick={() => {
                      window.location =
                        "/" +
                        obj.title.toLowerCase().replace(" ", "-") +
                        "/" +
                        innerObj.title.toLowerCase().replace(" ", "-");
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
