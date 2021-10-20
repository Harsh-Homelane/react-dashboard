import React, { Component } from "react";

export default class TableColumns extends Component {
    constructor(props) {
        super(props);

        this.state = {
            display: "none",
        };
    }

    hover = () => {
        this.setState({ display: "block" });
    };

    unHover = () => {
        this.setState({ display: "none" });
    };

    render() {
        return (
            <div
                onMouseEnter={this.hover}
                onMouseLeave={this.unHover}
                className="table-column d-flex justify-content-between align-items-center"
            >
                <div className="first-column table-column-block d-flex align-items-center justify-content-center">
                    {this.props.customerId || "-"}
                </div>
                <div className="table-column-block">
                    {this.props.customerName || "-"}
                </div>
                <div className="table-column-block">
                    {this.props.showroomName || "-"}
                </div>
                <div className="table-column-block">
                    {this.props.orderValue || "-"}
                </div>
                <div className="table-column-block">
                    {this.props.woodworkArmadio || "-"}
                </div>
                <div className="table-column-block">
                    {this.props.status || "-"}
                </div>
                <div className="table-column-block">
                    {this.props.factory || "-"}
                </div>
                <div className="table-column-block">
                    {this.props.daysInProduction
                        ? this.props.daysInProduction + " Days"
                        : "-"}
                </div>
                <div className="d-flex flex-row align-items-center">
                    <button
                        className="btn-hover-2"
                        style={{ display: this.state.display }}
                    >
                        Request quote
                    </button>
                    {this.props.factory !== "" || (
                        <div className="d-flex align-items-center justify-content-center">
                            <button
                                className="btn-hover"
                                style={{ display: this.state.display }}
                            >
                                Assign factory
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
