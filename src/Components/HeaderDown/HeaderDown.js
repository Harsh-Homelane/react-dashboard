import React, { Component } from "react";
import MobileFilter from "../Filters/MobileFilter";
import HeaderDownOptions from "./HeaderDownOptions";

export default class HeaderDown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: [
                "All Orders",
                "Pending 2D",
                "Design",
                "Production",
                "Dispatch",
                "Installation",
                "Hold and Cancel",
            ],
        };
    }

    clickHandler = () => {
        this.props.filterSelect("filter");
    };

    render() {
        return (
            <div className="d-flex mt-5 flex-column header-down-block">
                <div className="responsive-header-down">
                    {" "}
                    <div> Order Management </div>{" "}
                    <div onClick={this.clickHandler}>
                        <i class="fa fa-bars"></i>
                    </div>{" "}
                </div>
                <div className="d-flex pt-3 pl-3 pr-3 header-down">
                    {this.state.options.map((option) => (
                        <HeaderDownOptions option={option} />
                    ))}
                </div>
            </div>
        );
    }
}
