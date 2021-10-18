import React, { Component } from "react";

export default class TableColumns extends Component {
    render() {
        return (
            <div className="table-column d-flex justify-content-between align-items-center">
                <div className="table-column-block">
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
            </div>
        );
    }
}
