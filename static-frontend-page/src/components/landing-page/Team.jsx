import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Ripples from "react-ripples";
import LinkedInIcon from "../../assets/icons/linkedinIconSquare.svg";
import Globe from "../../assets/icons/globe.svg";
import Git from "../../assets/icons/gitIcon.png";

const teamMembers = [
    {
        name: "Yuriko Kikuchi",
        role: "Co-PM and Lead Designer",
        image: "https://firebasestorage.googleapis.com/v0/b/bondwork-dda21.appspot.com/o/pictures_onboarding%2Fyuriko.png?alt=media&token=bcad735f-868f-4f15-93ef-1f357d4bb02b",
        linkedIn: "https://www.linkedIn.com/in/ykjp",
        link: "https://yurikodesign.framer.website",
        icon: Globe,
    },
    {
        name: "MoonYoung Lee",
        role: "UI / UX Designer",
        image: "https://firebasestorage.googleapis.com/v0/b/bondwork-dda21.appspot.com/o/pictures_onboarding%2Fmoonyoung.png?alt=media&token=5d66983b-60ef-4d8a-bcc4-b017c5d7f281",
        linkedIn: "https://www.linkedIn.com/in/moonyoungl",
        link: "https://www.moonyounglee.com",
        icon: Globe,
    },
    {
        name: "TzeXuan Yap",
        role: "UI / UX Designer",
        image: "https://firebasestorage.googleapis.com/v0/b/bondwork-dda21.appspot.com/o/pictures_onboarding%2Fshane.png?alt=media&token=44e4c03d-7ba4-4bd3-a332-a5041f05d85f",
        linkedIn: "https://www.linkedIn.com/in/tzexuanyap-shane",
        link: "",
        icon: Globe,
    },
    {
        name: "Izabela Nadu",
        role: "UI / UX Designer",
        image: "https://firebasestorage.googleapis.com/v0/b/bondwork-dda21.appspot.com/o/pictures_onboarding%2Fizabela.png?alt=media&token=c604cb35-e12c-4e45-8123-91d0ae5ba69c",
        linkedIn: "https://www.linkedIn.com/in/izabelanadu",
        link: "https://www.izabelanadu.com",
        icon: Globe,
    },
    {
        name: "Rafael Ferreira",
        role: "PM and Lead Developer",
        image: "https://firebasestorage.googleapis.com/v0/b/bondwork-dda21.appspot.com/o/pictures_onboarding%2Frafael.png?alt=media&token=a2e7f57f-2d82-43dd-ad6c-956056309074",
        linkedIn: "https://www.linkedIn.com/in/rafaelm-ferreira",
        link: "https://github.com/rafaelmfer",
        icon: Git,
    },
    {
        name: "Cecilia Lopez",
        role: "Full-stack Developer",
        image: "https://firebasestorage.googleapis.com/v0/b/bondwork-dda21.appspot.com/o/pictures_onboarding%2Fcecilia.png?alt=media&token=90f0b0d9-a31e-4631-ab05-6cad2ed9a76e",
        linkedIn: "https://www.linkedIn.com/in/cecilia-ls",
        link: "https://github.com/cecilia314",
        icon: Git,
    },
    {
        name: "Sidney Kai",
        role: "Full-stack Developer",
        image: "https://firebasestorage.googleapis.com/v0/b/bondwork-dda21.appspot.com/o/pictures_onboarding%2Fsidney.png?alt=media&token=1b4b9c89-c6bc-4b3b-9fab-1570bf7e4711",
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
                alignItems: "center",
                textAlign: "center",
            }}
        >
            <img src={image} alt={name} width={160} />
            <Typography
                variant="p"
                sx={{
                    ...theme.typography.larken_h2,
                    fontWeight: 600,
                    fontSize: "24",
                    marginTop: "8px",
                }}
            >
                {name}
            </Typography>
            <Typography
                variant="p"
                sx={{ ...theme.typography.p, marginTop: "4px" }}
            >
                {role}
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyItems: "center",
                    alignItems: "center",
                    textAlign: "center",
                    marginTop: "20px",
                }}
            >
                <Ripples className="relative inline-block rounded-full unbounded">
                    <a
                        aria-label="linkedin"
                        href={linkedIn ?? "#"}
                        target="_blank"
                        className="flex items-center justify-center w-12 h-12 p-3 rounded-full hover:bg-main-100 transition duration-300 ease-in-out"
                    >
                        <img src={LinkedInIcon} alt="Linkedin" />
                    </a>
                </Ripples>
                <Ripples className="relative inline-block rounded-full unbounded">
                    <a
                        aria-label="linkedin"
                        href={link ?? "#"}
                        target="_blank"
                        className="flex items-center justify-center w-12 h-12 p-3 rounded-full hover:bg-main-100 transition duration-300 ease-in-out"
                    >
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
                backgroundColor: "#F5FCFF",
                width: "100%",
                ...sx,
            }}
        >
            <Typography
                variant="h3"
                align="center"
                sx={{
                    ...theme.typography.larken_h2,
                    [theme.breakpoints.up("desktop")]: {
                        fontSize: "36px",
                    },
                }}
            >
                Meet Our Team
            </Typography>
            <Box
                sx={{
                    maxWidth: "960px",
                    margin: "64px auto 0 auto",
                    display: "grid",
                    gridTemplateColumns: isDesktop
                        ? "repeat(8, 1fr)"
                        : "repeat(1, 1fr)",
                    gridTemplateRows: isDesktop
                        ? "auto auto auto auto 64px auto"
                        : "auto auto auto auto 37px auto auto auto auto 37px auto auto auto auto 37px auto auto auto auto 37px auto auto auto auto 37px auto auto auto auto 37px auto auto auto",
                    gap: "0 12px",
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
