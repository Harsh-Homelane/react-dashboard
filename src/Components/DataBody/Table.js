import React, { Component } from "react";
import PageCount from "./PageCount";
import TableColumns from "./TableColumns";
import TableHead from "./TableHead";
const columnData = require("../../data/table.json");

export default class Table extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayColumn: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            customerId: [],
            customerName: [],
            showroomName: [],
            orderValue: [],
            woodworkArmadio: [],
            status: [],
            factory: [],
            daysInProduction: [],
            page: [],
            count: 0,
            pageCount: 0,
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
                count: prevState.count + 1,
            }));
        }
    }

    componentDidUpdate() {
        if (!this.state.page.length) {
            for (let index = 1; index <= this.state.count / 10 + 1; index++) {
                this.setState((prevState) => ({
                    page: [...prevState.page, index],
                }));
            }
        }
    }
    pageClick = (pageNumber) => {
        if (this.state.pageCount !== pageNumber) {
            this.setState({ pageCount: pageNumber - 1 });
        }
    };
    render() {
        return (
            <div className="table">
                <TableHead />
                {this.state.displayColumn.map(
                    (index) =>
                        this.state.count >
                            this.state.pageCount * 10 + index && (
                            <TableColumns
                                customerId={
                                    this.state.customerId[
                                        this.state.pageCount * 10 + index
                                    ]
                                }
                                customerName={
                                    this.state.customerName[
                                        this.state.pageCount * 10 + index
                                    ]
                                }
                                showroomName={
                                    this.state.showroomName[
                                        this.state.pageCount * 10 + index
                                    ]
                                }
                                orderValue={
                                    this.state.orderValue[
                                        this.state.pageCount * 10 + index
                                    ]
                                }
                                woodworkArmadio={
                                    this.state.woodworkArmadio[
                                        this.state.pageCount * 10 + index
                                    ]
                                }
                                status={
                                    this.state.status[
                                        this.state.pageCount * 10 + index
                                    ]
                                }
                                factory={
                                    this.state.factory[
                                        this.state.pageCount * 10 + index
                                    ]
                                }
                                daysInProduction={
                                    this.state.daysInProduction[
                                        this.state.pageCount * 10 + index
                                    ]
                                }
                            />
                        )
                )}
                <div className="d-flex justify-content-center w-100 fixed-bottom footer-pages">
                    {this.state.page.length !== 1 &&
                        this.state.page.map((element) =>
                            element === this.state.pageCount + 1 ? (
                                <PageCount
                                    countDisplay={element}
                                    pageClick={this.pageClick}
                                    style={"active"}
                                />
                            ) : (
                                <PageCount
                                    countDisplay={element}
                                    pageClick={this.pageClick}
                                    style={"notActive"}
                                />
                            )
                        )}
                </div>
                {/* <TableColumns /> */}
            </div>
        );
    }
}
