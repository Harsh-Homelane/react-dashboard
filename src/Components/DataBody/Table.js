import React, { Component } from "react";
import TableColumns from "./TableColumns";
import TableHead from "./TableHead";
const columnData = require("../../data/table.json");

export default class Table extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customerId: [],
            customerName: [],
            showroomName: [],
            orderValue: [],
            woodworkArmadio: [],
            status: [],
            factory: [],
            daysInProduction: [],
        };
    }
    componentDidMount() {
        for (let key in columnData) {
            this.setState((prevState) => ({
                customerId: [
                    ...prevState.customerId,
                    columnData[key]["customerId"],
                ],
                customerName: [
                    ...prevState.customerName,
                    columnData[key]["customerName"],
                ],
                showroomName: [
                    ...prevState.showroomName,
                    columnData[key]["showroomName"],
                ],
                orderValue: [
                    ...prevState.orderValue,
                    columnData[key]["orderValue"],
                ],
                woodworkArmadio: [
                    ...prevState.woodworkArmadio,
                    columnData[key]["WoodworkArmadio"],
                ],
                status: [...prevState.status, columnData[key]["status"]],
                factory: [...prevState.factory, columnData[key]["factory"]],
                daysInProduction: [
                    ...prevState.daysInProduction,
                    columnData[key]["daysInProduction"],
                ],
            }));
        }
    }
    render() {
        return (
            <div className="table">
                <TableHead />
                {this.state.customerId.map((element, index) => (
                    <TableColumns
                        customerId={element}
                        customerName={this.state.customerName[index]}
                        showroomName={this.state.showroomName[index]}
                        orderValue={this.state.orderValue[index]}
                        woodworkArmadio={this.state.woodworkArmadio[index]}
                        status={this.state.status[index]}
                        factory={this.state.factory[index]}
                        daysInProduction={this.state.daysInProduction[index]}
                    />
                ))}
                {/* <TableColumns /> */}
            </div>
        );
    }
}
