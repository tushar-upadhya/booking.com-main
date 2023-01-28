import React from "react";
import { useNavigate } from "react-router-dom";
import "./checkout.css";

const Checkout = () => {
    const navigate = useNavigate();

    const payment = () => {
        navigate("/checkout/payment");
    };

    return (
        <div>
            <div className="Main-div">
                <div className="first-check">
                    <h1>Fare Summary</h1>
                    <div className="f-inside">
                        <h4>Base Fare</h4>
                        <h4>Fee & Surcharges</h4>
                        <h4>Total amount</h4>
                    </div>
                    <div>
                        <button className="paymentBtn" onClick={payment}>
                            Payment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Checkout;
