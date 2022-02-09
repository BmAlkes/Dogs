import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./api/components/Header";
import Footer from "./api/components/Footer";
import Home from "./api/components/Home/Home";
import Login from "./api/components/Login";
import { UserStorage } from "./UserContext";
import User from "./api/components/User/User";
import ProtectedRoute from "./api/components/Helpers/ProtectedRoute";
import Photo from "./api/components/Photo/Photo";
import UserProfile from "./api/components/User/UserProfile";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <UserStorage>
                    <Header />
                    <main className="AppBody">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="login/*" element={<Login />} />
                            <Route path="foto/:id" element={<Photo />} />
                            <Route
                                path="perfil/:user"
                                element={<UserProfile />}
                            />
                            <Route
                                path="account/*"
                                element={
                                    <ProtectedRoute>
                                        <User />
                                    </ProtectedRoute>
                                }
                            />
                        </Routes>
                    </main>
                    <Footer />
                </UserStorage>
            </BrowserRouter>
        </div>
    );
}

export default App;
