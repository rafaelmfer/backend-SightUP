import React, { useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import TextFieldArea from "../textfields/TextFieldArea";
import TextFieldRegular from "../textfields/TextFieldRegular";
import CustomButton from "../buttons/CustomButton";
import _theme from "../../theme/theme";
import visionTest from "../../assets/icons/vision_test.png";

const CustomTypography = ({ text, variant, sx, ...props }) => {
    const words = text.split(" ");
    const lastTwoWords = words.slice(-2).join(" ");
    const restOfText = words.slice(0, -2).join(" ");

    return (
        <Typography
            variant={variant}
            sx={{
                ..._theme.typography[variant],
                ...sx,
            }}
            {...props}
        >
            {restOfText}{" "}
            <span style={{ whiteSpace: "nowrap" }}>{lastTwoWords}</span>
        </Typography>
    );
};

export default function OurTeam({ id, matches, sx }) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("desktop"));

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    return (
        <Box
            id={id}
            sx={{
                background: "white",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: isDesktop ? "48px" : "40px",
                alignItems: "center",
                fontWeight: "bold",
                paddingTop: isDesktop ? "80px" : "32px",
                ...sx,
            }}
        >
            <Typography
                variant="h3"
                align="center"
                sx={{
                    ...theme.typography.h3,
                    fontWeight: 400,
                    [theme.breakpoints.up("desktop")]: {
                        fontSize: "36px",
                    },
                }}
            >
                Explore Our Features
            </Typography>

            <Box
                sx={{
                    maxWidth: "1200px",
                    width: "100%",
                    display: "flex",
                    flexFlow: "column",
                    marginLeft: "auto",
                    marginRight: "auto",
                    ...sx,
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "grid",
                        gridTemplateColumns: matches
                            ? "1fr"
                            : "1fr 1fr 1fr 1fr",
                        gridTemplateRows: "repeat(3, minmax(50px, auto))",
                        columnGap: "20px",
                        rowGap: matches ? "24px" : "0px",
                    }}
                >
                    <Box
                        sx={{
                            background: "white",
                            borderRadius: "8px",
                            ...(!matches && {
                                gridColumn: "1/2",
                                gridRow: "1/4",
                            }),
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                gridColumn: "1/2",
                                gridRow: "1/2",
                            }}
                        >
                            <img
                                src={visionTest}
                                style={{
                                    width: "35px",
                                    height: "35px",
                                }}
                            />

                            <Typography
                                variant="p"
                                align="left"
                                sx={{
                                    fontSize: 20,
                                    fontWeight: 600,
                                    color: _theme.palette.neutrals.black,
                                }}
                            >
                                Vision Tests
                            </Typography>
                        </Box>

                        <CustomTypography
                            text="Easily perform interactive, at-home vision tests designed for regular checkups. SightUP identifies potential issues early and guides users on when a clinical visit may be recommended."
                            variant="small1"
                            align="left"
                            sx={{
                                fontSize: 16,
                                margin: "auto",
                                gridColumn: "1/2",
                                marginTop: isDesktop ? "24px" : "16px",
                                fontFamily: "'Lato', sans-serif",
                            }}
                        />
                    </Box>

                    <Box
                        sx={{
                            background: "white",
                            borderRadius: "8px",
                            ...(!matches && {
                                gridColumn: "2/3",
                                gridRow: "1/4",
                            }),
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                gridColumn: "1/2",
                                gridRow: "1/2",
                            }}
                        >
                            <img
                                src={visionTest}
                                style={{
                                    width: "35px",
                                    height: "35px",
                                }}
                            />

                            <Typography
                                variant="p"
                                align="left"
                                sx={{
                                    fontSize: 20,
                                    fontWeight: 600,
                                    color: _theme.palette.neutrals.black,
                                }}
                            >
                                Prescriptions
                            </Typography>
                        </Box>

                        <CustomTypography
                            text="Keep a detailed log of vision changes over time, tracking both verified and unverified results to make better-informed eye care decisions."
                            variant="small1"
                            align="left"
                            sx={{
                                fontSize: 16,
                                margin: "auto",
                                gridColumn: "1/2",
                                marginTop: isDesktop ? "24px" : "16px",
                                fontFamily: "'Lato', sans-serif",
                            }}
                        />
                    </Box>

                    <Box
                        sx={{
                            background: "white",
                            borderRadius: "8px",
                            ...(!matches && {
                                gridColumn: "3/4",
                                gridRow: "1/4",
                            }),
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                gridColumn: "1/2",
                                gridRow: "1/2",
                            }}
                        >
                            <img
                                src={visionTest}
                                style={{
                                    width: "35px",
                                    height: "35px",
                                }}
                            />

                            <Typography
                                variant="p"
                                align="left"
                                sx={{
                                    fontSize: 20,
                                    fontWeight: 600,
                                    color: _theme.palette.neutrals.black,
                                }}
                            >
                                Eye Exercises
                            </Typography>
                        </Box>

                        <CustomTypography
                            text="Access guided exercises and relaxation techniques designed to relieve screen-induced eye strain, promoting both immediate comfort and long-term eye health."
                            variant="small1"
                            align="left"
                            sx={{
                                fontSize: 16,
                                margin: "auto",
                                gridColumn: "1/2",
                                marginTop: isDesktop ? "24px" : "16px",
                                fontFamily: "'Lato', sans-serif",
                            }}
                        />
                    </Box>

                    <Box
                        sx={{
                            background: "white",
                            borderRadius: "8px",
                            ...(!matches && {
                                gridColumn: "4/5",
                                gridRow: "1/4",
                            }),
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                gridColumn: "1/2",
                                gridRow: "1/2",
                            }}
                        >
                            <img
                                src={visionTest}
                                style={{
                                    width: "35px",
                                    height: "35px",
                                }}
                            />

                            <Typography
                                variant="p"
                                align="left"
                                sx={{
                                    fontSize: 20,
                                    fontWeight: 600,
                                    color: _theme.palette.neutrals.black,
                                }}
                            >
                                Daily Eye Health Hub
                            </Typography>
                        </Box>

                        <CustomTypography
                            text="A go-to space for daily eye health tracking. Users check in their eye condition, receive personalized exercise recommendations, and explore wellness tips designed to support their vision journey."
                            variant="small1"
                            align="left"
                            sx={{
                                fontSize: 16,
                                margin: "auto",
                                gridColumn: "1/2",
                                marginTop: isDesktop ? "24px" : "16px",
                                fontFamily: "'Lato', sans-serif",
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
