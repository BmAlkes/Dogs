import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./api/components/Header";
import Footer from "./api/components/Footer";
import Home from "./api/components/Home/Home";
import Login from "./api/components/Login";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login/*" element={<Login />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
