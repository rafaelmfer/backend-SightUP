import { createTheme } from "@mui/material/styles";

// To add more styles refer to mui documentation: https://mui.com/material-ui/customization/palette/

// palette: Defines the colors used in your application.
// typography: Sets the typography options.
// spacing: Configures the spacing scale.
// breakpoints: Defines the breakpoints for responsive design.
// shadows: Sets the shadow styles.
// transitions: Configures the transitions for your components.
// zIndex: Sets the z-index values for different layers.
// shape: Defines the border radius values.
// components: Customizes the styles of individual components.
// mixins: Provides reusable style snippets.

const theme = createTheme({
    palette: {
        primary: {
            main: "#2C76A8", 
            50: "#FFFFFF",
            100: "#FEF5F5", 
            200: "#FDE9E9",
            300: "#F5FCFF",
            400: "#F9C2C1",
            500: "#F6A8A6",
            600: "#4190DA",
            800: "#E83532",
            900: "#05213C",
            light: "#FBFBFB", 
            contrastText: "#0B0A0A",
        },
        secondary: {
            main: "#2774BC",
            100: "#ECF5FD",
            200: "#D6DDE4",
            300: "#B1D6F9",
            400: "#85BFF5",
            500: "#50A3F1",
            600: "#4190DA",
            800: "#0B4A86",
            900: "#05213C",
            950: "#041A2F",
            960: "#D5D9DE",
            970: "#FEFEFE",
            980: "#235E86",
            990: "#AAB4BD",
            contrastText: "#FFFEFE",
        },
        error: {
            main: "#D23A3A",
            100: "#FFF4F1",
            300: "#CC0C0C",
        },
        warning: {
            300: "#EB8D1E",
            main: "#F6B569",
            100: "#FCF4D5",
        },
        success: {
            main: "#76BF7D",
            100: "#DEF6E0",
            300: "#227F2C",
        },
        info: {
            100: "#DCECF6",
            main: "#3997D1",
            300: "#11689E",
        },
        neutrals: {
            white: "#FFFEFE",
            black: "#0B0A0A",
            background: "#FBFBFB",
            silver: "#77818A",
            divider: "#DFDFDF",
            gray50: "#F8F8F8",
            gray100: "#EEEEEE",
            gray200: "#B5B5B5",
            gray300: "#727272",
        },
        support: {
            purple: "#793BB7",
            light_purple: "#EEDDFF",
            tabs: "#464646",
        },
    },
    typography: {
        fontFamily: "Lato, sans-serif, ui-sans-serif, system-ui",
        larken_h1: {
            fontFamily: "'Larken', sans-serif",
            fontSize: "2.027rem",
            fontWeight: 600,
            lineHeight: "120%",
        },
        larken_h2: {
            fontFamily: "'Larken', sans-serif",
            fontSize: "2rem",
            fontWeight: 600,
            lineHeight: "150%",
        },
        larken_h3: {
            fontFamily: "Larken, sans-serif",
            fontSize: "1.602rem",
            fontWeight: 600,
            lineHeight: "120%",
        },
        larken_h4: {
            fontFamily: "Larken, sans-serif",
            fontSize: "1.424rem",
            fontWeight: 500,
            lineHeight: "120%",
        },
        larken_h5: {
            fontFamily: "Larken, sans-serif",
            fontSize: "1.5rem",
            fontWeight: 700,
            lineHeight: "150%",
        },
        larken_h6: {
            fontFamily: "Larken, sans-serif",
            fontSize: "1.125rem",
            fontWeight: 400,
            lineHeight: "120%",
        },
        larken_p: {
            fontFamily: "Larken, sans-serif",
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: "150%",
        },
        larken_small1: {
            fontFamily: "Larken, sans-serif",
            fontSize: "0.889rem",
            fontWeight: 400,
            lineHeight: "150%",
        },
        larken_small2: {
            fontFamily: "Larken, sans-serif",
            fontSize: "0.79rem",
            fontWeight: 400,
            lineHeight: "120%",
        },
        larken_title_medium: {
            fontFamily: "Larken, sans-serif",
            fontSize: "2.25rem",
            lineHeight: "150%",
            fontWeight: 600
        },

        h1: { fontSize: "2.027rem", fontWeight: 600, lineHeight: "120%" },
        h2: { fontSize: "1.802rem", fontWeight: 600, lineHeight: "120%" },
        h3: { fontSize: "1.602rem", fontWeight: 600, lineHeight: "120%" },
        h4: { fontSize: "1.424rem", fontWeight: 500, lineHeight: "120%" },
        h5: { fontSize: "1.266rem", fontWeight: 400, lineHeight: "120%" },
        h6: { fontSize: "1.125rem", fontWeight: 400, lineHeight: "120%" },
        p: { fontSize: "1rem", fontWeight: 400, lineHeight: "150%" },
        small1: {
            fontSize: "0.889rem",
            fontWeight: 400,
            lineHeight: "150%",
        },
        small2: {
            fontSize: "0.79rem",
            fontWeight: 400,
            lineHeight: "120%",
        },
        lato_p_twenty_regular: {
            fontSize: "1.25rem",
            fontWeight: 400,
            lineHeight: "150%",
        },
        lato_fourteen: {
            fontSize: "0.875rem",
            fontWeight: "bold",
            lineHeight: "auto",
        },
    },
    breakpoints: {
        values: {
            mobile: 0,
            desktop: 500,
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: "h1",
                    h2: "h2",
                    h3: "h3",
                    h4: "h4",
                    h5: "h5",
                    h6: "h6",
                    p: "p",
                    small1: "p",
                    small2: "p",
                },
            },
        },
    },
});

export default theme;
