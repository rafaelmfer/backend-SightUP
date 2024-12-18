import React, { useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import theme from "../../theme/theme";
import homeIcon from "../../assets/icons/DailyEyeIcon.svg";
import exerciseIcon from "../../assets/icons/ExerciseIcon.svg";
import visionIcon from "../../assets/icons/VisionIcon.svg";
import prescriptionIcon from "../../assets/icons/PrescriptionIcon.svg";

const CustomTypography = ({ text, variant, sx, ...props }) => {
    const words = text.split(" ");
    const lastTwoWords = words.slice(-2).join(" ");
    const restOfText = words.slice(0, -2).join(" ");

    return (
        <Typography
            variant={variant}
            sx={{
                ...theme.typography[variant],
                ...sx,
            }}
            {...props}
        >
            {restOfText}{" "}
            <span style={{ whiteSpace: "nowrap" }}>{lastTwoWords}</span>
        </Typography>
    );
};

export default function OurFeatures({ id, matches, sx }) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("desktop"));

    return (
        <Box
            id={id}
            sx={{
                background: theme.palette.primary[300],
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: isDesktop ? "48px" : "40px",
                alignItems: "center",
                fontWeight: "bold",
                paddingTop: isDesktop ? "129px" : "109px",
                ...sx,
            }}
        >
            <Typography
                align="center"
                sx={{
                    ...theme.typography.larken_title_medium,
                }}
            >
                Explore Our Features
            </Typography>

            <Box
                sx={{
                    maxWidth: "1280px",
                    width: "100%",
                    display: "flex",
                    flexFlow: "column",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "grid",
                        gridTemplateColumns: matches
                            ? "1fr"
                            : "1fr 1fr 1fr 1fr",
                        gridTemplateRows: "repeat(3, minmax(auto, auto))",
                        columnGap: "20px",
                        rowGap: matches ? "24px" : "0px",
                    }}
                >
                    <Box
                        sx={{
                            display: isDesktop ? "grid" : "",
                            gridTemplateRows: "subGrid",
                            borderRadius: "0.5rem",
                            ...(!matches && {
                                gridColumn: "1/2",
                                gridRow: "1/3",
                            }),
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                gridColumn: "1/2",
                                gridRow: "1/2",
                            }}
                        >
                            <img
                                src={homeIcon}
                                style={{
                                    width: "35px",
                                    height: "35px",
                                }}
                            />
                            <Typography
                                align="left"
                                sx={{
                                    ...theme.typography.lato_p_twenty_regular,
                                    fontWeight: 600,
                                    lineHeight: "120%",
                                    color: theme.palette.neutrals.black,
                                }}
                            >
                                Daily Eye Health Hub
                            </Typography>
                        </Box>

                        <CustomTypography
                            text="A go-to space for daily eye health tracking. Users check in their eye condition, receive personalized exercise recommendations, and explore wellness tips designed to support their vision journey."
                            align="left"
                            sx={{
                                ...theme.typography.p,
                                lineHeight: "140%",
                                margin: "auto",
                                gridColumn: "1/2",
                                marginTop: "1rem",

                            }}
                        />
                    </Box>

                    <Box
                        sx={{
                            display: isDesktop ? "grid" : "",
                            gridTemplateRows: "subGrid",

                            borderRadius: "0.5rem",
                            ...(!matches && {
                                gridColumn: "2/3",
                                gridRow: "1/3",
                            }),
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                gridColumn: "1/2",
                                gridRow: "1/2",
                            }}
                        >
                            <img
                                src={exerciseIcon}
                                style={{
                                    width: "35px",
                                    height: "35px",
                                }}
                            />
                            <Typography
                                align="left"
                                sx={{
                                    ...theme.typography.lato_p_twenty_regular,
                                    fontWeight: 600,
                                    lineHeight: "120%",
                                    color: theme.palette.neutrals.black,
                                }}
                            >
                                Eye Exercises
                            </Typography>
                        </Box>

                        <CustomTypography
                            text="Access guided exercises and relaxation techniques designed to relieve eye strain, promoting immediate comfort and long-term eye health."
                            align="left"
                            sx={{
                                ...theme.typography.p,
                                lineHeight: "140%",
                                margin: "auto",
                                gridColumn: "1/2",
                                marginTop: "1rem",
                            }}
                        />
                    </Box>

                    <Box
                        sx={{
                            display: isDesktop ? "grid" : "",
                            gridTemplateRows: "subGrid",
                            borderRadius: "0.5rem",
                            ...(!matches && {
                                gridColumn: "3/4",
                                gridRow: "1/3",
                            }),
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                gridColumn: "1/2",
                                gridRow: "1/2",
                            }}
                        >
                            <img
                                src={visionIcon}
                                style={{
                                    width: "35px",
                                    height: "35px",
                                }}
                            />

                            <Typography
                                align="left"
                                sx={{
                                    ...theme.typography.lato_p_twenty_regular,
                                    fontWeight: 600,
                                    lineHeight: "120%",
                                    color: theme.palette.neutrals.black,
                                }}
                            >
                                Vision Tests
                            </Typography>
                        </Box>

                        <CustomTypography
                            text="Efficiently perform interactive, at-home vision tests designed for regular checkups. SightUP identifies potential issues early and guides users on when a clinical visit may be recommended."
                            align="left"
                            sx={{
                                ...theme.typography.p,
                                lineHeight: "140%",
                                margin: "auto",
                                gridColumn: "1/2",
                                marginTop: "1rem",
                            }}
                        />
                    </Box>

                    <Box
                        sx={{
                            display: isDesktop ? "grid" : "",
                            gridTemplateRows: isDesktop ? "subGrid" : "",
                            borderRadius: "0.5rem",
                            ...(!matches && {
                                gridColumn: "4/5",
                                gridRow: "1/3",
                            }),
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                gridColumn: "1/2",
                                gridRow: "1/2",
                            }}
                        >
                            <img
                                src={prescriptionIcon}
                                style={{
                                    width: "35px",
                                    height: "35px",
                                }}
                            />

                            <Typography
                                align="left"
                                sx={{
                                    ...theme.typography.lato_p_twenty_regular,
                                    fontWeight: 600,
                                    lineHeight: "120%",
                                    color: theme.palette.neutrals.black,
                                }}
                            >
                                Prescriptions Tracker
                            </Typography>
                        </Box>

                        <CustomTypography
                            text="Keep a detailed log of vision changes over time, tracking both verified and unverified results to make better-informed eye care decisions."
                            align="left"
                            sx={{
                                ...theme.typography.p,
                                lineHeight: "140%",
                                margin: "auto",
                                gridColumn: "1/2",
                                marginTop: "1rem",
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
