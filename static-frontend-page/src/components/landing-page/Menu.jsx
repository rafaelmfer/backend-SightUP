import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Drawer, List, ListItem } from "@mui/material";
import CustomButton from "../buttons/CustomButton";
import sightUpLogo from "../../assets/icons/sighupLogo.svg";
import logoOnly from "../../assets/icons/logoOnly.svg";
import theme from "../../theme/theme";
import { Player } from "@lottiefiles/react-lottie-player";
import menuAnimation from "../../assets/animations/menu-default.json";

export default function _Menu({ matches, linkProposal }) {
    const navigate = useNavigate();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const playerRef = useRef(null);

    const handleClick = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setIsDrawerOpen(open);
        if (open) {
            playerRef.current.setPlayerSpeed(1);
            playerRef.current.play();
        } else {
            playerRef.current.setPlayerSpeed(-1);
            playerRef.current.play();
        }
    };

    const drawerContent = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List sx={{ paddingTop: "16px" }}>
                {[
                    { text: "Solutions", id: "solutions" },
                    { text: "Team", id: "team" },
                    { text: "Contact", id: "contact" },
                ].map(({ text, id }) => (
                    <ListItem
                        button
                        key={text}
                        onClick={(e) => handleClick(e, id)}
                        sx={{
                            width: "unset",
                            borderRadius: "10px",
                            paddingLeft: "8px",
                            paddingTop: "12px",
                            paddingBottom: "12px",
                            marginLeft: "80px",
                            marginRight: "80px",
                            "&:hover": {
                                backgroundColor: theme.palette.primary[200],
                            },
                        }}
                    >
                        <Typography variant="p" sx={{ fontWeight: 600 }}>
                            {text}
                        </Typography>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const drawerHeight = `calc(100vh - 66px)`;

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                position: "sticky",
                background: theme.palette.neutrals.background,
                top: "0px",
                left: "0px",
                zIndex: 10,
                padding: matches ? "12px 24px 12px 24px" : "12px 40px",
            }}
        >
            {matches ? (
                <img src={logoOnly} alt="Logo" height={"42px"} />
            ) : (
                <img src={sightUpLogo} alt="Logo" height={"42px"} />
            )}

            {matches ? (
                <Box className="flex items-center mr-1">
                    <Box
                        onClick={toggleDrawer(true)}
                        sx={{ cursor: "pointer" }}
                    >
                        <Player
                            ref={playerRef}
                            src={menuAnimation}
                            style={{
                                height: "48px",
                                width: "48px",
                                padding: "0px 10px",
                            }}
                            keepLastFrame
                        />
                    </Box>
                </Box>
            ) : (
                <ul className="flex gap-[25px] items-center text-center">
                    <li>
                        <Typography
                            component="a"
                            href="#solutions"
                            onClick={(e) => handleClick(e, "solutions")}
                            sx={{ ...theme.typography.p, fontWeight: 600 }}
                        >
                            Solutions
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            component="a"
                            href="#team"
                            onClick={(e) => handleClick(e, "team")}
                            sx={{ ...theme.typography.p, fontWeight: 600 }}
                        >
                            Team
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            component="a"
                            href="#contact"
                            onClick={(e) => handleClick(e, "contact")}
                            sx={{
                                ...theme.typography.p,
                                fontWeight: 600,
                                textAlign: "center",
                            }}
                        >
                            Contact
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="p" sx={{ fontWeight: 600 }}>
                            <CustomButton
                                buttontype="secondary"
                                buttonVariant="text"
                                isOutlined
                                sx={{ float: "left", width: "fit-Content" }}
                                onClick={() => {
                                    window.open(linkProposal);
                                }}
                            >
                                Get Proposal
                            </CustomButton>
                        </Typography>
                    </li>
                </ul>
            )}

            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
                transitionDuration={{ enter: 1000, exit: 1000 }}
                PaperProps={{
                    sx: {
                        height: drawerHeight,
                        top: "66px",
                    },
                }}
                ModalProps={{
                    BackdropProps: {
                        sx: {
                            backgroundColor: "transparent",
                        },
                    },
                }}
            >
                {drawerContent}
            </Drawer>
        </Box>
    );
}
