import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom"
import Menu from "./components/Menu";
import MapDisplay from "./components/MapDisplay";
import AboutPage from "./components/AboutPage";
import TruckLogin from "./components/TruckLogin";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route
                    path="/mapdisplay"
                    element={
                        <ProtectedRoute isPrivate={false}>
                            <MapDisplay />
                        </ProtectedRoute>
                    }
                />   
                <Route
                    path="/about"
                    element={
                        <ProtectedRoute isPrivate={false}>
                            <AboutPage />
                        </ProtectedRoute>
                    }
                />  
                <Route
                    path="/login"
                    element={
                        <ProtectedRoute isPrivate={true}>
                            <TruckLogin />
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<Navigate to="/mapdisplay" />} />   
            </Routes>
        </Router>
    );
} 

export default App;