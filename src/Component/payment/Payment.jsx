import React from "react";
import "./payment.css";

const Payment = () => {
    return (
        <div>
            <div className="s-second">
                <div className="input">
                    <input type="text" placeholder="Name On Card" />
                    <input type="text" placeholder="Card Number" />
                    <input type="text" placeholder="Expiry Date" />
                    <input type="text" placeholder="CVV" />
                </div>
            </div>
            <div>
                <button className="confirmPay">Confirm</button>
            </div>
        </div>
    );
};

export default Payment;
