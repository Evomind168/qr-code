import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation.jsx";
import { QrCodeGenerator } from "./components/QrGenerator/QrGen.jsx";
import { QrCodeScanner } from "./components/QrScanner/QrCodeScanner.jsx";
import { GenHistory } from "./components/GenHistory/GenHistory.jsx";
// import { ScanHistory } from "./components/ScanHistory/ScanHistory.jsx";

export const Layout = () => {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path="/generator" element={<QrCodeGenerator />} />
                <Route path="/scan" element={<QrCodeScanner />} />
                <Route path="/genHistory" element={<GenHistory />} />
                {/*<Route path="/scanHistory" element={<ScanHistory />} />*/}
            </Routes>
        </div>
    );
};
