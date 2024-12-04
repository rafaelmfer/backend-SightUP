import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Ripples from "react-ripples";
import LinkedInIcon from "../../assets/icons/linkedin.svg";
import Globe from "../../assets/icons/globe.svg";
import Git from "../../assets/icons/github.svg";
import Ceci from "../../assets/profile_pic/Ceci.jpg"
import Rafael from "../../assets/profile_pic/Rafael.jpg"
import Sidney from "../../assets/profile_pic/Sidney.jpg"
import Yuriko from "../../assets/profile_pic/Yuriko.jpg"
import Shane from "../../assets/profile_pic/Shane.jpg"
import Moon from "../../assets/profile_pic/Moon.jpg"
import Iza from "../../assets/profile_pic/Iza.jpg"


const teamMembers = [
    {
        name: "MoonYoung Lee",
        role: "Project Manager and<br>UI / UX Designer",
        image: Moon,
        linkedIn: "https://www.linkedIn.com/in/moonyoungl",
        link: "https://www.moonyounglee.com",
        icon: Globe,
    },
    {
        name: "Yuriko Kikuchi",
        role: "Lead UX / UI Designer",
        image: Yuriko,
        linkedIn: "https://www.linkedIn.com/in/ykjp",
        link: "https://yurikodesign.com",
        icon: Globe,
    },
    {
        name: "TzeXuan Yap",
        role: "Lead Video Producer and<br>UX / UI Designer",
        image: Shane,
        linkedIn: "https://www.linkedIn.com/in/tzexuanyap-shane",
        link: "https://tzexuanyap-shane.com",
        icon: Globe,
    },
    {
        name: "Izabela Nadu",
        role: "Product Designer",
        image: Iza,
        linkedIn: "https://www.linkedIn.com/in/izabelanadu",
        link: "https://www.izabelanadu.com",
        icon: Globe,
    },
    {
        name: "Rafael Ferreira",
        role: "Project Manager and<br>Lead Developer",
        image: Rafael,
        linkedIn: "https://www.linkedIn.com/in/rafaelm-ferreira",
        link: "https://github.com/rafaelmfer",
        icon: Git,
    },
    {
        name: "Cecilia Lopez",
        role: "Full-stack Developer",
        image: Ceci,
        linkedIn: "https://www.linkedIn.com/in/cecilia-ls",
        link: "https://github.com/cecilia314",
        icon: Git,
    },
    {
        name: "Sidney Kai",
        role: "Full-stack Developer",
        image: Sidney,
        linkedIn: "https://www.linkedIn.com/in/sidney-kai",
        link: "https://github.com/shogo12000",
        icon: Git,
    },
];

const TeamMember = ({
    name,
    role,
    image,
    linkedIn,
    link,
    icon,
    gridRow,
    gridColumn,
    sx,
}) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateRows: "subgrid",
                gridRow,
                gridColumn,
                justifyItems: "center",
                alignItems: "start",
                textAlign: "center",                
                background: theme.palette.secondary[970],
                borderRadius: "16px 16px 16px 16px",
                border: "1px solid " + theme.palette.secondary[990],
            }}
        >
            
            <Box
                sx={{
                    Width: "100%",
                    maxHeight: "auto",
                    overflow: "hidden",
                    borderRadius: "16px 16px 0 0",
                }}
            >
                <img src={image} alt={name} Width={"100%"}/>
            </Box>

            <Typography
                variant="p"
                sx={{
                    ...theme.typography.larken_h5,
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    marginTop: "16px",
                }}
            >
                {name}
            </Typography>
            <Typography 
                sx={{ ...theme.typography.p,
                    lineHeight: "140%",
                    marginTop: "4px" 
                }}
                dangerouslySetInnerHTML={{ __html: role }}
            ></Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyItems: "center",
                    alignItems: "center",
                    textAlign: "center",
                    marginBottom: ".5rem",
                }}
            >
                <Ripples className="relative inline-block rounded-full unbounded">
                    <a
                        aria-label="linkedin"
                        href={linkedIn ?? "#"}
                        target="_blank"
                        className="flex items-center justify-center w-12 h-12 p-3 rounded-full hover:bg-secondary-100 transition duration-300 ease-in-out"
                    >
                        <img src={LinkedInIcon} alt="Linkedin" />
                    </a>
                </Ripples>
                <Ripples className="relative inline-block rounded-full unbounded">
                    <a
                        aria-label="linkedin"
                        href={link ?? "#"}
                        target="_blank"
                        className="flex items-center justify-center w-12 h-12 p-3 rounded-full hover:bg-secondary-100 transition duration-300 ease-in-out"                    >
                        <img src={icon} alt="Website" />
                    </a>
                </Ripples>
            </Box>
        </Box>
    );
};

const Team = ({ id, sx }) => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("desktop"));

    return (
        <Box
            id={id}
            sx={{
                background: theme.palette.primary[300],
                width: "100%",
                ...sx,
            }}
        >
            <Typography
                align="center"
                sx={{
                    ...theme.typography.larken_title_medium,
                }}
            >
                Meet Our Team
            </Typography>
            <Box
                sx={{
                    maxWidth: "1280px",
                    margin: "64px auto 0 auto",
                    display: "grid",
                    gridTemplateColumns: isDesktop
                        ? "repeat(8, 1fr)"
                        : "repeat(1, 1fr)",
                    gridTemplateRows: isDesktop
                        ? "auto auto auto auto 64px auto"
                        : "auto auto auto auto 37px auto auto auto auto 37px auto auto auto auto 37px auto auto auto auto 37px auto auto auto auto 37px auto auto auto auto 37px auto auto auto",
                    gap: "0 32px",
                    alignItems: "center",
                }}
            >
                <TeamMember
                    name={teamMembers[0].name}
                    role={teamMembers[0].role}
                    image={teamMembers[0].image}
                    linkedIn={teamMembers[0].linkedIn}
                    link={teamMembers[0].link}
                    icon={teamMembers[0].icon}
                    gridRow={isDesktop ? "1 / span 4" : "1 / span 4"}
                    gridColumn={isDesktop ? "1 / 3" : "1 / 2"}
                />
                <TeamMember
                    name={teamMembers[1].name}
                    role={teamMembers[1].role}
                    image={teamMembers[1].image}
                    linkedIn={teamMembers[1].linkedIn}
                    link={teamMembers[1].link}
                    icon={teamMembers[1].icon}
                    gridRow={isDesktop ? "1 / span 4" : "6 / span 4"}
                    gridColumn={isDesktop ? "3 / 5" : "1 / 2"}
                />
                <TeamMember
                    name={teamMembers[2].name}
                    role={teamMembers[2].role}
                    image={teamMembers[2].image}
                    linkedIn={teamMembers[2].linkedIn}
                    link={teamMembers[2].link}
                    icon={teamMembers[2].icon}
                    gridRow={isDesktop ? "1 / span 4" : "11 / span 4"}
                    gridColumn={isDesktop ? "5 / 7" : "1 / 2"}
                />
                <TeamMember
                    name={teamMembers[3].name}
                    role={teamMembers[3].role}
                    image={teamMembers[3].image}
                    linkedIn={teamMembers[3].linkedIn}
                    link={teamMembers[3].link}
                    icon={teamMembers[3].icon}
                    gridRow={isDesktop ? "1 / span 4" : "16 / span 4"}
                    gridColumn={isDesktop ? "7 / 9" : "1 / 2"}
                />
                <TeamMember
                    name={teamMembers[4].name}
                    role={teamMembers[4].role}
                    image={teamMembers[4].image}
                    linkedIn={teamMembers[4].linkedIn}
                    link={teamMembers[4].link}
                    icon={teamMembers[4].icon}
                    gridRow={isDesktop ? "6 / span 4" : "21 / span 4"}
                    gridColumn={isDesktop ? "2 / 4" : "1 / 2"}
                />
                <TeamMember
                    name={teamMembers[5].name}
                    role={teamMembers[5].role}
                    image={teamMembers[5].image}
                    linkedIn={teamMembers[5].linkedIn}
                    link={teamMembers[5].link}
                    icon={teamMembers[5].icon}
                    gridRow={isDesktop ? "6 / span 4" : "26 / span 4"}
                    gridColumn={isDesktop ? "4 / 6" : "1 / 2"}
                />
                <TeamMember
                    name={teamMembers[6].name}
                    role={teamMembers[6].role}
                    image={teamMembers[6].image}
                    linkedIn={teamMembers[6].linkedIn}
                    link={teamMembers[6].link}
                    icon={teamMembers[6].icon}
                    gridRow={isDesktop ? "6 / span 4" : "31 / span 4"}
                    gridColumn={isDesktop ? "6 / 8" : "1 / 2"}
                />
            </Box>
        </Box>
    );
};

export default Team;
