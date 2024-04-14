import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/styles/mui_theme";

export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}
