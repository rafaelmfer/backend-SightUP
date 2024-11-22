import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import homeIcon from "../../assets/icons/mobiles.png";
import facesLeft from "../../assets/icons/faces_left.svg";
import facesRight from "../../assets/icons/faces_right.svg";

export default function MobileImages({ id, sx }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("desktop"));
    
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
                paddingTop: isMobile ? "136px" : "111px",
                ...sx,
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "10%",
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
                        top: isMobile ? "100px" : "70px",
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
                        top: isMobile ? "100px" : "70px",
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
                    fontSize: isMobile ? "16px" : "20px",
                    paddingTop: "20px",
                    paddingBottom: isMobile ? "127px" : "89px",
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
                        width: isMobile ? "100%" : "90%",
                        maxWidth: "675px",
                    }}
                />
            </Box>
        </Box>
    );
}
