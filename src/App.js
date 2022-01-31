import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./api/components/Header";
import Footer from "./api/components/Footer";
import Home from "./api/components/Home/Home";
import Login from "./api/components/Login";
import { UserStorage } from "./UserContext";
import User from "./api/components/User/User";
import ProtectedRoute from "./api/components/Helpers/ProtectedRoute";

function App() {
    return (
        <div>
            <BrowserRouter>
                <UserStorage>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="login/*" element={<Login />} />
                        <Route
                            path="account/*"
                            element={
                                <ProtectedRoute>
                                    <User />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                    <Footer />
                </UserStorage>
            </BrowserRouter>
        </div>
    );
}

export default App;
