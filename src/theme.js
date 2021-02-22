import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export default createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#0b6c7f",
      contrastText: "#ffffff",
      light: "rgba(11,108,127,0.66)",
    },
    secondary: {
      main: "#af0b63",
    },
    text: {
      primary: "rgba(7,131,164,0.87)",
      secondary: "rgba(94,6,6,0.54)",
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
});
