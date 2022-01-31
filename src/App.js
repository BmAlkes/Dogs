import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./api/components/Header";
import Footer from "./api/components/Footer";
import Home from "./api/components/Home/Home";
import Login from "./api/components/Login";
import { UserStorage } from "./UserContext";

function App() {
    return (
        <div>
            <BrowserRouter>
                <UserStorage>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login/*" element={<Login />} />
                    </Routes>
                    <Footer />
                </UserStorage>
            </BrowserRouter>
        </div>
    );
}

export default App;
