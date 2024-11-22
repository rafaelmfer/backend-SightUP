import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Team from "../components/landing-page/Team";
import BusinessModel from "../components/landing-page/BusinessModel";
import Proposal from "../components/landing-page/Proposal";
import ContactUs from "../components/landing-page/_ContactUs";
import Cards from "../components/landing-page/Cards";
import OurFeatures from "../components/landing-page/OurFeatures";
import OurTeam from "../components/landing-page/OurTeam";
import _Menu from "../components/landing-page/_Menu";
import Footer from "../components/landing-page/Footer";
import HeroCard from "../components/landing-page/HeroCard";
import Carousel from "../components/landing-page/Carousel";
import MobileImages from "../components/landing-page/MobileImages";
import ClearVision from "../components/landing-page/ClearVision";
import SignupVideo from "../components/landing-page/SignupVideo";

export default function Onboarding() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("desktop"));

    const proposalLink =
        "https://firebasestorage.googleapis.com/v0/b/bondwork-dda21.appspot.com/o/Files%2FBondwork_Project_Proposal.pdf?alt=media&token=a8052f02-8ed9-47be-8426-2add0cdf0db1";

    return (
        <main className="landing-page bg-neutrals-background items-center">
            <_Menu matches={isMobile} linkProposal={proposalLink} />

            <MobileImages
                id="solutions"
                matches={isMobile}
                sx={{
                    paddingLeft: "20px",
                    paddingRight: "20px",
                }}
            />

            <OurFeatures
                id="features"
                matches={isMobile}
                sx={{
                    paddingLeft: "20px",
                    paddingRight: "20px",
                }}
            />

            <SignupVideo
                id="signupVideo"
                matches={isMobile}
                sx={{
                    paddingLeft: "20px",
                    paddingRight: "20px",
                }}
            />

            <ClearVision
                id="clearVision"
                matches={isMobile}
                sx={{
                    paddingLeft: "8px",
                    paddingRight: "8px",
                }}
            />

            <Team
                id="team"
                sx={{
                    paddingTop: isMobile ? "80px" : "112px",
                    paddingBottom: isMobile ? "80px" : "112px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                }}
            />

            <ContactUs
                id="contact"
                sx={{
                    marginTop: isMobile ? "32px" : "0px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                }}
            />
            <Footer matches={isMobile} />
        </main>
    );
}
