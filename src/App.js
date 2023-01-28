import { BrowserRouter, Route, Routes } from "react-router-dom";
import Flight from "./Component/Flight/Flight";
import Header from "./Component/header/Header";
import Home from "./Component/Home/Home";
import Checkout from "./Component/Hotel/checkout/Checkout";
import Hotel from "./Component/Hotel/Hotel";
import Login from "./Component/Navbar/login/Login";
import Navbar from "./Component/Navbar/Navbar";
import Register from "./Component/Navbar/register/Register";
import Payment from "./Component/payment/Payment";
import Search from "./Component/search/Search";
import Users from "./Data/UserData";

function App() {
    console.log(Users);
    return (
        <BrowserRouter>
            <Navbar />
            <Header />
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="/hotel" element={<Hotel />}></Route>
                <Route path="/flight" element={<Flight />}></Route>
                <Route path="/checkout" element={<Checkout />}></Route>
                <Route path="/checkout/payment" element={<Payment />}></Route>
                <Route path="/search" element={<Search />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
