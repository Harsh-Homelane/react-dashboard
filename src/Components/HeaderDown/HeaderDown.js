import React, { Component } from "react";
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
    render() {
        return (
            <div className="d-flex mt-5 pd-0 pt-4 pl-3 pr-3">
                {this.state.options.map((option) => (
                    <HeaderDownOptions option={option} />
                ))}
            </div>
        );
    }
}
