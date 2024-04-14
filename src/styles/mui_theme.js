import { createTheme } from "@mui/material/styles";

const staticColors = {
  primaryMain: "#4caf50",
  secondaryMain: "#edf2ff",
  backgroundColorActive: "eecef9",
  backgroundColorNotActive: undefined,
};

export const theme = createTheme({
  palette: {
    custom: {
      backgroundColorActive: staticColors.backgroundColorActive,
      backgroundColorNotActive: staticColors.backgroundColorNotActive,
    },
    primary: {
      main: staticColors.primaryMain,
    },
    secondary: {
      main: staticColors.secondaryMain,
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
            backgroundColor: staticColors.primaryMain,
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
            color: staticColors.primaryMain,
          }),
        }),
      },
    },
  },
});
