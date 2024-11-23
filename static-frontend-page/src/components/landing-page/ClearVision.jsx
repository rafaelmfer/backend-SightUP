import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import mobileDesktopImg from "../../assets/icons/desktopmobile.png";
import CustomButton from "../buttons/CustomButton";

export default function ClearVision({ id, matches, sx }) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("desktop"));
    return (
        <Box
            sx={{
                background: theme.palette.primary[300],
                width: "100%",
                display: "flex",
                justifyContent: "center",
                paddingLeft: "20px",
                paddingRight: "20px",
            }}
        >
            <Box
                sx={{
                    background: theme.palette.primary.main,
                    borderRadius: "1rem",
                    width: "100%",
                    maxWidth: "1280px",
                    display: "flex",
                    flexDirection: matches ? "column" : "row",
                    gap: isDesktop ? "48px" : "0px",
                    alignItems: "center",
                    fontWeight: "bold",
                    padding: "0px 8px",
                    marginTop: matches ? "40px" : "0px",
                    marginBottom: matches ? "40px" : "0px",
                    ...sx,
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        gap: "40px",
                        paddingLeft: matches ? "0px" : "80px",
                        paddingTop: matches ? "56px" : "0px",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-Start",
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            ...theme.typography.larken_h2,
                            lineHeight: "120%",
                            color: theme.palette.secondary[970],
                            width: "100%",
                            textAlign: matches ? "center" : "",
                            fontSize:
                                "clamp(2rem, 1.2944rem + 3.2258vw, 3.875rem)",
                        }}
                    >
                        Signing You Up
                        <br />
                        for Clearer Vision
                    </Typography>
                    <CustomButton
                        buttontype="secondary"
                        buttonVariant="text"
                        isOutlined
                        sx={{
                            width: isDesktop ? "fit-content" : "100%",
                            fontWeight: "700",
                        }}
                        onClick={() => {
                        }}
                    >
                        View Proposal
                    </CustomButton>
                </Box>

                <Box
                    sx={{
                        flex: 1, 
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center", 
                        paddingTop: isDesktop ? "50px" : "32px",
                    }}
                >
                    <img
                        src={mobileDesktopImg}
                        style={{
                            width: matches ? "100%" : "80%",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}
