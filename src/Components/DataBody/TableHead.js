import React, { Component } from "react";

export default class TableHead extends Component {
    render() {
        return (
            <div className="d-flex justify-content-between table-head">
                <div className="table-head-boxes">
                    <div className="table-head-text">Customer Id</div>
                </div>
                <div className="table-head-boxes">
                    <div className="table-head-text">Customer Name</div>
                </div>
                <div className="table-head-boxes">
                    <div className="table-head-text">Showroom Name</div>
                </div>
                <div className="table-head-boxes">
                    <div className="table-head-text">Order Value</div>
                </div>
                <div className="table-head-boxes">
                    <div className="table-head-text">Woodwork-Armadio</div>
                </div>
                <div className="table-head-boxes">
                    <div className="table-head-text">Status</div>
                </div>
                <div className="table-head-boxes">
                    <div className="table-head-text">Factory</div>
                </div>
                <div className="table-head-boxes">
                    <div className="table-head-text">Days In Production</div>
                </div>
            </div>
        );
    }
}
