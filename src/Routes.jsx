import { Routes, Route } from "react-router-dom";
import Leaderboard from "./Pages/Leaderboard/Leaderboard.jsx";
import PageWrapper from "./PageWraper.jsx";
import TraderProfile from "./Pages/TokenProfile/TraderProfile.jsx";
import UserDashBoard from "./Pages/UserDashboard/UserDashBoard.jsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={
                <PageWrapper>
                    <Leaderboard />
                </PageWrapper>
                } />
            <Route path="/trader" element={<PageWrapper>
                <TraderProfile />
            </PageWrapper>} />
            <Route path="/dashboard" element={<PageWrapper>
                <UserDashBoard />
            </PageWrapper>} />
        </Routes>
    );
};

export default AppRoutes;
