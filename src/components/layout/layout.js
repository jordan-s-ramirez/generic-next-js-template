import React from "react";
import Navbar from "./sub-components/navbar";

export default function Layout({ children }) {
  const [drawerOpen, setDrawerOpen] = React.useState(true);
  return (
    <>
      <div className="App">
        {/* <div className="header"> </div> */}
        <div className="container">
          <aside>
            <div
              className="sidebar"
              onMouseEnter={() => {
                setDrawerOpen((e) => !e);
              }}
              onMouseLeave={() => {
                setDrawerOpen((e) => !e);
              }}
            >
              <Navbar drawerOpen={drawerOpen} />
            </div>
          </aside>
          <main className="main">{children}</main>
        </div>
        {/* <div className="footer"></div> */}
      </div>
    </>
  );
}
