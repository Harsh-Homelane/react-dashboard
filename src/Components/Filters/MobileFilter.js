import React, { Component } from "react";

export default class MobileFilter extends Component {
    constructor(props) {
        super(props);
    }
    clickHandler = () => {
        this.props.filterSelect("close");
    };
    render() {
        return (
            <div className="mobile-filter-page">
                <div className="d-flex justify-content-between p-2">
                    <div className="text-left">Filters</div>
                    <div onClick={this.clickHandler}>
                        <i class="fa fa-times"></i>
                    </div>
                </div>
                <div className="mobile-filters pt-2 pb-2 d-flex w-100">
                    <div className="d-flex justify-content-start flex-wrap text-left">
                        <div className="p-2 d-flex flex-column w-50">
                            <div className="input-up-text">Customer</div>
                            <input
                                className="input-text"
                                type="text"
                                placeholder="Search by Name, Email Id"
                            ></input>
                        </div>
                        <div className="p-2 d-flex flex-column w-50">
                            <div className="input-up-text">Factory</div>
                            <input
                                className="input-text"
                                type="text"
                                placeholder="Search by Name"
                            ></input>
                        </div>
                        <div className="p-2 d-flex flex-column w-50">
                            <div className="input-up-text">Status</div>
                            <div className="input-text">
                                <div className="dropdown d-flex justify-content-between">
                                    <button
                                        className="dropdown-toggle custom-dropdown w-100 d-flex justify-content-between align-items-center"
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
                    </div>
                    <div className="d-flex justify-content-center w-100">
                        <button className="btn-apply">Apply</button>
                        <button className="btn-reset">Reset</button>
                    </div>
                </div>
            </div>
        );
    }
}
