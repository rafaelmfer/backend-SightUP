import React, { useState, useRef } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import AudioOn from "../../assets/icons/audio_on.svg";
import AudioOff from "../../assets/icons/audio_off.svg";

export default function SignupVideo({ id, isMobile, sx }) {
    const theme = useTheme();

    const [isMuted, setIsMuted] = useState(true); 
    const videoRef = useRef(null);

    const handleMuteToggle = () => {
        setIsMuted((prev) => {
            const newMutedState = !prev;
            if (videoRef.current) {
                videoRef.current.muted = newMutedState; 
            }
            return newMutedState;
        });
    };

    return (
        <Box
            id={id}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: theme.palette.primary[300],
                padding: isMobile ? "40px" : "80px",
                ...sx,
            }}
        >
            <Box
                sx={{
                    width: isMobile ? "100%" : "80%",
                    maxWidth: "900px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: theme.palette.neutrals.white,
                        height: "30px",
                        paddingX: "16px",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            gap: "8px",
                        }}
                    >
                        <Box
                            sx={{
                                width: "12px",
                                height: "12px",
                                backgroundColor: "#FF5F57",
                                borderRadius: "50%",
                            }}
                        />
                        <Box
                            sx={{
                                width: "12px",
                                height: "12px",
                                backgroundColor: "#FFBD2E",
                                borderRadius: "50%",
                            }}
                        />
                        <Box
                            sx={{
                                width: "12px",
                                height: "12px",
                                backgroundColor: "#28C840",
                                borderRadius: "50%",
                            }}
                        />
                    </Box>
                </Box>

                <Box
                    className="video-container"
                    sx={{
                        position: "relative",
                        backgroundColor: "black",
                        paddingTop: "56.25%", // Aspect Ratio 16:9
                        overflow: "hidden",
                    }}
                >
                    <Box
                        component="video"
                        ref={videoRef}
                        autoPlay
                        loop
                        muted={isMuted}
                        src={require("../../assets/videos/sightup_video_introduction.mp4")}
                        poster={require("../../assets/images/wallpaper.png")}
                        aria-label="Promotional video showing sightup app"
                        role="img"
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    >
                        <source
                            src={require("../../assets/videos/sightup_video_introduction.mp4")}
                            type="video/mp4"
                        />
                        <img
                            src={require("../../assets/images/wallpaper.png")}
                            alt="SightUP app"
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </Box>

                    <IconButton
                        aria-label={isMuted ? "unmute button" : "mute button"}
                        onClick={handleMuteToggle}
                        sx={{
                            position: "absolute",
                            bottom: "8px",
                            right: "8px",
                            color: "white",
                            backgroundColor: "rgba(236,245,253, 0.4)",
                            "&:hover": {
                                backgroundColor: "rgba(177,214,249, 0.5)",
                            },
                        }}
                    >
                        <img
                            src={isMuted ? AudioOff : AudioOn}
                            alt={isMuted ? "Unmute video" : "Mute video"}
                            style={{ width: "24px", height: "24px" }}
                        />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
}
