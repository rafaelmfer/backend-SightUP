import { Box, colors, Typography, useMediaQuery } from "@mui/material";
import sighupLogo from "../../assets/icons/sighupLogo.svg";
import theme from "../../theme/theme";
import CustomButton from "../buttons/CustomButton";

export default function Footer({ matches }) {
    const isDesktop = useMediaQuery(theme.breakpoints.up("desktop"));

    const handleClick = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box
            sx={{
                paddingTop: matches ? "48px" : "48px",
                paddingBottom: matches ? "16px" : "48px",
                paddingLeft: "20px",
                paddingRight: "20px",
                background: "White",
                [theme.breakpoints.up("desktop")]: {
                    paddingLeft: "40px",
                    paddingRight: "40px",
                },
            }}
        >
            <Box
                className={`flex justify-between ${matches && "flex-col"}`}
                sx={{
                    gap: "48px",
                }}
            >
                <Box
                    sx={{
                        margin: matches ? "0px auto" : undefined,
                    }}
                >
                    <img src={sighupLogo} alt="Logo" height={"12px"} />
                </Box>
                <ul
                    className={`flex  ${matches ? "gap-[16px]" : "gap-[25px]"} items-center ${matches && "flex-col"}`}
                >
                    <div className="flex gap-[25px]">
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
                                sx={{ ...theme.typography.p, fontWeight: 600 }}
                            >
                                Contact
                            </Typography>
                        </li>
                    </div>
                    <li
                        style={{
                            textAlign: "center",
                            width: isDesktop ? "fit-content" : "100%",
                        }}
                    >
                        <Typography 
                            sx={{ ...theme.typography.p, fontWeight: 600 }}
                        >
                            <CustomButton
                                buttontype="secondary"
                                buttonVariant="text"
                                isOutlined
                                sx={{
                                    width: isDesktop ? "fit-content" : "100%",
                                    marginTop: isDesktop ? "0px" : "32px",
                                    fontWeight: "bold",
                                }}
                                onClick={() => {
                                }}
                            >
                                Get Proposal
                            </CustomButton>
                        </Typography>
                    </li>
                </ul>
            </Box>

            <Box
                className={`flex justify-between`}
                sx={{
                    padding: matches ? "48px 0 16px 0" : "12px 0 0 0",
                }}
            >
                <Typography
                    variant="small1"
                    sx={{
                        textAlign: "center",
                        width: "100%",
                    }}
                >
                    SightUP @ 2024. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
}
