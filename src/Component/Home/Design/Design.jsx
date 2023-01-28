import React from "react";
import "./design.css";

const Design = () => {
    return (
        <div>
            <div className="featured">
                <div className="featuredItem">
                    <img
                        src="https://images.unsplash.com/photo-1674126857818-81554b0140d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        alt=""
                        className="featuredImg"
                    />
                    <div className="featuredTitles">
                        <h1>Spiti Valley</h1>
                        <h2>123 properties</h2>
                    </div>
                </div>

                <div className="featuredItem">
                    <img
                        src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt=""
                        className="featuredImg"
                    />
                    <div className="featuredTitles">
                        <h1>Kasol</h1>
                        <h2>533 properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img
                        src="https://images.unsplash.com/photo-1673468810611-2b501e4e2489?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1545&q=80"
                        alt=""
                        className="featuredImg"
                    />
                    <div className="featuredTitles">
                        <h1>Gulmarg</h1>
                        <h2>532 properties</h2>
                    </div>
                </div>
            </div>

            {/*  */}

            <div className="featured">
                <div className="featuredItem">
                    <img
                        src="https://images.unsplash.com/photo-1635346537940-9d51faeb6e32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                        alt=""
                        className="featuredImg"
                    />
                    <div className="featuredTitles">
                        <h1>Sikkim</h1>
                        <h2>123 properties</h2>
                    </div>
                </div>

                <div className="featuredItem">
                    <img
                        src="https://images.unsplash.com/photo-1548177545-45d7e5316979?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt=""
                        className="featuredImg"
                    />
                    <div className="featuredTitles">
                        <h1>Chandrashila</h1>
                        <h2>533 properties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img
                        src="https://images.unsplash.com/photo-1589136777351-fdc9c9cab193?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt=""
                        className="featuredImg"
                    />
                    <div className="featuredTitles">
                        <h1>Ooty</h1>
                        <h2>532 properties</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Design;
