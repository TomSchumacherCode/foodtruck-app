import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom"
import Menu from "./components/Menu";
import MapView from "./components/MapView";
import AboutPage from "./components/AboutPage";
import TruckLogin from "./components/TruckLogin";
import ProtectedRoute from "./components/ProtectedRoute";



function App() {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route
                    path="/map"
                    element={
                        <ProtectedRoute isPrivate={false}>
                            <MapView />
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
                        <ProtectedRoute isPrivate={false}>
                            <TruckLogin />
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<Navigate to="/map" />} />   
            </Routes>
        </Router>
    );
} 

export default App;