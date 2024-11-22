import React, { useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import TextFieldArea from "../textfields/TextFieldArea";
import TextFieldRegular from "../textfields/TextFieldRegular";
import CustomButton from "../buttons/CustomButton";

export default function ContactUs({ id, sx }) {
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
                gap: "48px",
                alignItems: "center",
                fontWeight: "bold",
                paddingTop: isDesktop ? "80px" : "80px",
                paddingBottom: isDesktop ? "80px" : "80px",
                ...sx,
            }}
        >
            <Typography
                variant="h3"
                align="center"
                sx={{
                    ...theme.typography.larken_h2,
                    fontWeight: 600,
                    [theme.breakpoints.up("desktop")]: {
                        fontSize: "36px",
                    },
                }}
            >
                Contact us
            </Typography>

            <Box
                sx={{
                    width: "100%",
                    maxWidth: "700px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                }}
            >
                <TextFieldRegular
                    label="Name"
                    id="Name"
                    placeholder="Full name"
                    star={false}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ width: "100%", fontWeight: "bold" }}
                /> 

                <TextFieldRegular
                    label="Email"
                    id="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    star={false}
                    sx={{ width: "100%", fontWeight: "bold" }}
                />

                <TextFieldArea
                    label="Message"
                    id="message"
                    placeholder="Type your message here..."
                    hint={200}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ width: "100%", fontWeight: "bold" }}
                    disabled={false}
                />

                <CustomButton
                    buttontype="primary"
                    buttonVariant="text"
                    isOutlined
                    sx={{ width: isDesktop ? "fit-content" : "100%",
                        margin: "auto",
                        marginTop: "32px",
                        padding: "0px 100px"
                     }}
                >
                    Send 
                </CustomButton>
            </Box>
        </Box>
    );
}
