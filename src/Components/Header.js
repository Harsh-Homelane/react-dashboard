import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <div className="w-100 pl-4 d-flex  justify-content-between fixed-top">
                <div>
                    <i className="fa fa-bars pr-3"></i>
                    <img
                        src="https://roster-dev-3.homelane.com/assets/img/Bitmap.png"
                        height="100%"
                        width="173px"
                        alt="logo"
                    />
                </div>
                <div className="d-flex align-self-center header-center">
                    {" "}
                    <strong> Order Management </strong>
                </div>
                <div className="d-flex align-self-center">
                    <div className="dropdown">
                        <button
                            className="dropdown-toggle custom-dropdown"
                            // type="button"
                            // id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Hi, Harsh
                        </button>
                        <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                        >
                            <a className="dropdown-item" href="#">
                                My Account
                            </a>
                            <a className="dropdown-item" href="#">
                                Log Out
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
