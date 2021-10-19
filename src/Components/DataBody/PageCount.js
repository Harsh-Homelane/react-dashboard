import React, { Component } from "react";

export default class PageCount extends Component {
    constructor(props) {
        super(props);
    }

    clickHandler = () => {
        this.props.pageClick(this.props.countDisplay);
    };

    render() {
        const active = { backgroundColor: "#dfdcdc", color: "black" };
        const notActive = { backgroundColor: "white", color: "#e71c24" };
        return this.props.style === "active" ? (
            <div
                className="d-flex justify-content-center align-items-center page-count-box"
                onClick={this.clickHandler}
                key={this.props.countDisplay}
                style={active}
            >
                {" "}
                {this.props.countDisplay}
            </div>
        ) : (
            <div
                className="d-flex justify-content-center align-items-center page-count-box"
                onClick={this.clickHandler}
                key={this.props.countDisplay}
                style={notActive}
            >
                {" "}
                {this.props.countDisplay}
            </div>
        );
    }
}
