import { Box, Typography } from "@mui/material";

export default function SignupVideo({ id, matches, sx }) {
    return (
        <Box
            id={id}
            sx={{
                backgroundColor: "#F5FCFF",
                width: "100%",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
                border: "1px solid Red",
                paddingTop: matches ? "40px" : "80px",
                paddingBottom: matches ? "40px" : "80px",
                ...sx,
            }}
        >
            <Typography component="a" href="#solutions" sx={{}}>
                Video
            </Typography>
        </Box>
    );
}
