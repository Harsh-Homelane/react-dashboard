import React, { Component } from "react";

export default class Filters extends Component {
    render() {
        return (
            <div className="filters">
                <div className="text-left">Filters</div>
                <div>
                    <div className="pt-2 pb-2 d-flex w-75">
                        <div className="p-1 d-flex flex-column w-25">
                            <div className="input-up-text">Customer</div>
                            <input
                                className="input-text"
                                type="text"
                                placeholder="Search by Name, Email Id"
                            ></input>
                        </div>
                        <div className="p-1 d-flex flex-column w-25">
                            <div className="input-up-text">Factory</div>
                            <input
                                className="input-text"
                                type="text"
                                placeholder="Search by Name"
                            ></input>
                        </div>
                        <div className="p-1 d-flex flex-column w-25">
                            <div className="input-up-text">Status</div>
                            <div className="input-text">
                                <div className="dropdown">
                                    <button
                                        className="dropdown-toggle custom-dropdown  w-100 d-flex justify-content-between align-items-center"
                                        // type="button"
                                        // id="dropdownMenuButton"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Select
                                    </button>
                                    <div
                                        className="dropdown-menu"
                                        aria-labelledby="dropdownMenuButton"
                                    >
                                        <a className="dropdown-item" href="#">
                                            Option 1
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Option 2
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex w-25">
                            <button className="btn-apply">Apply</button>
                            <button className="btn-reset">Reset</button>
                        </div>
                    </div>
                </div>
                <div className="filter-down-space"></div>
                <div className="filter-down-space"></div>
            </div>
        );
    }
}
