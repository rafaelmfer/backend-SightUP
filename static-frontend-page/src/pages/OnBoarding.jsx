import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Team from "../components/landing-page/Team";
import ContactUs from "../components/landing-page/ContactUs";
import OurFeatures from "../components/landing-page/OurFeatures";
import Menu from "../components/landing-page/Menu";
import Footer from "../components/landing-page/Footer";
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
            <Menu matches={isMobile} linkProposal={proposalLink} />

            <MobileImages
                id="solutions"
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
                isMobile={isMobile}
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
