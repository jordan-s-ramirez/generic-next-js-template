import React from "react";
import Navbar from "./sub-components/navbar";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/styles/mui_theme";

export default function Layout({ children }) {
  const [drawerOpen, setDrawerOpen] = React.useState(true);
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="custom-layout-app">
          {/* <div className="custom-layout-header"> </div> */}
          <div className="custom-layout-container">
            <aside>
              <div
                className="custom-layout-sidebar"
                onMouseEnter={() => {
                  setDrawerOpen((e) => !e);
                }}
                onMouseLeave={() => {
                  setDrawerOpen((e) => !e);
                }}
              >
                <Navbar drawerOpen={drawerOpen} theme={theme} />
              </div>
            </aside>
            <main className="custom-layout-main">{children}</main>
          </div>
          {/* <div className="custom-layout-footer"></div> */}
        </div>
      </ThemeProvider>
    </>
  );
}
