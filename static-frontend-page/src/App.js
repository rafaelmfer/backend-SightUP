import "./App.css";
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
    Outlet,
} from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import Onboarding from "./pages/OnBoarding";
import FourOhFour from "./pages/FourOhFour";

const Layout = () => {
    const location = useLocation();
    const noSidebarRoutes = ["/login", "/signup", "/"];
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up(650));

    return (
        <div className="App">
            <Outlet />
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Onboarding />} />
                </Route>
                <Route path="*" element={<FourOhFour />} />
            </Routes>
        </Router>
    );
};

export default App;
