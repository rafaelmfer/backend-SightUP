import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import homeIcon from "../../assets/icons/mobiles.png";
import facesLeft from "../../assets/icons/faces_left.svg";
import facesRight from "../../assets/icons/faces_right.svg";

export default function MobileImages({ id, matches, sx }) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("desktop"));
    return (
        <Box
            id={id}
            sx={{
                background: "#F5FCFF",
                position: "relative",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontWeight: "bold",
                paddingTop: isDesktop ? "111px" : "136px",
                ...sx,
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "5%",
                    width: "100%",
                    maxWidth: "1100px",
                    height: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    ...sx,
                }}
            >
                <img
                    src={facesLeft}
                    style={{
                        position: "sticky",
                        left: "0px",
                        width: "18%",
                        top: matches ? "100px" : "70px",
                        height: "fit-content",
                    }}
                />
                <img
                    src={facesRight}
                    style={{
                        position: "sticky",
                        left: "0px",
                        width: "14%",
                        paddingTop: "50px",
                        top: matches ? "100px" : "70px",
                        height: "fit-content",
                    }}
                />
            </Box>
            <Typography
                variant="h3"
                align="center"
                zIndex="2"
                sx={{
                    ...theme.typography.larken_h2,
                    fontSize: "clamp(2rem, 1.2944rem + 3.2258vw, 3.875rem)",
                }}
            >
                Signing You Up
                <br />
                for Clearer Vision
            </Typography>

            <Typography
                variant="h3"
                align="center"
                zIndex="2"
                sx={{
                    ...theme.typography.p,
                    fontSize: isDesktop ? "20px" : "16px",
                    paddingTop: "20px",
                    paddingBottom: isDesktop ? "89px" : "127px",
                }}
            >
                An-all-in-one vision care mobile app offering
                <br />
                easy-to-follow vision tests that recommend interval of checks
                <br />
                personalized eye exercises, detailed vision result tracking.
            </Typography>
            <Box
                sx={{
                    maxWidth: "1200px",
                    width: "100%",
                    display: "flex",
                    flexFlow: "column",
                    flexDirection: "row",
                    justifyContent: "center",
                    zIndex: "2",
                }}
            >
                <img
                    src={homeIcon}
                    style={{
                        width: matches ? "100%" : "90%",
                        maxWidth: "675px",
                    }}
                />
            </Box>
        </Box>
    );
}
