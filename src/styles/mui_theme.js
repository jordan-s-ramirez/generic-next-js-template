import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  main: {
    palette: {
      primary: "green",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          // ...(ownerState.variant === "contained" &&
          //   ownerState.color === "primary" && {
          //     backgroundColor: "#202020",
          //     color: "#fff",
          //   }),
          ...(ownerState.color === "primary" && {
            backgroundColor: "green",
            color: "#fff",
          }),
        }),
      },
    },
    MuiInput: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color === "primary" && {
            // backgroundColor: "",
            color: "green",
          }),
        }),
      },
    },
  },
});
