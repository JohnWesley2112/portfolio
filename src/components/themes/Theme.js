// theme.js
import { createTheme } from "@mui/material/styles";

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                // 🌞 Light Mode
                primary: {
                    light: "#8561c5",
                    main: "#673ab7",
                    dark: "#482880",
                    contrastText: "#fff",
                },
                secondary: {
                    light: "#4dabf5",
                    main: "#2196f3",
                    dark: "#1769aa",
                    contrastText: "#000",
                },
                background: {
                    default: "#f4f6f8",
                    paper: "#ffffff",
                },
                text: {
                    primary: "#222",
                    secondary: "#555",
                },
            }
            : {
                // 🌙 Dark Mode
                primary: {
                    light: "#b085f5",
                    main: "#9575cd",
                    dark: "#65499c",
                    contrastText: "#fff",
                },
                secondary: {
                    light: "#64b5f6",
                    main: "#42a5f5",
                    dark: "#1565c0",
                    contrastText: "#000",
                },
                background: {
                    default: "#121212",
                    paper: "#1e1e1e",
                },
                text: {
                    primary: "#fff",
                    secondary: "#aaa",
                },
            }),
    },
    typography: {
        fontFamily: `"Poppins", "Roboto", "Arial", sans-serif`,
        h6: { fontWeight: 700 },
        button: {
            textTransform: "none",
            fontWeight: 600,
        },
    },
    shape: { borderRadius: 12 },
    components: {
        MuiAppBar: {
            styleOverrides: {
                // root: {
                //     backgroundColor: mode === "light" ? "#fff" : "#1c1c1c",
                //     // backgroundColor: mode === "light" ? "primary.main" : "#1c1c1c",
                //     color: "#fff",
                //     boxShadow: "none",
                // },
                root: ({ theme }) => ({
                    backgroundColor: theme.palette.primary.main, // automatically uses light/dark mode
                    color: theme.palette.primary.contrastText,
                    boxShadow: "none",
                }),
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: mode === "light" ? "#ffffff" : "#1e1e1e",
                    color: mode === "light" ? "#222" : "#fff",
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    margin: "4px 8px",
                    "&.Mui-selected": {
                        backgroundColor: mode === "light" ? "#ede7f6" : "#311b92",
                        color: mode === "light" ? "#673ab7" : "#b39ddb",
                    },
                    "&:hover": {
                        backgroundColor: mode === "light" ? "#f3e5f5" : "#2c2c2c",
                    },
                },
            },
        },
    },
});

export default function getTheme(mode) {
    return createTheme(getDesignTokens(mode));
}
