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
