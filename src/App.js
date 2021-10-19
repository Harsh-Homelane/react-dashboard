import "./App.css";
import Table from "./Components/DataBody/Table";
import Filters from "./Components/Filters/Filters";
import Header from "./Components/Header";
import HeaderDown from "./Components/HeaderDown/HeaderDown";
import React, { Component } from "react";
import MobileFilter from "./Components/Filters/MobileFilter";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
        };
    }
    displayMobileFilter = (condition) => {
        if (condition === "filter") {
            this.setState({ display: true });
        } else {
            this.setState({ display: false });
        }
    };
    render() {
        return (
            <div className="App">
                {!this.state.display ? (
                    <div>
                        <Header />
                        <HeaderDown filterSelect={this.displayMobileFilter} />
                        <div className="filter-tag">
                            <Filters />
                        </div>
                        <Table />
                    </div>
                ) : (
                    <MobileFilter filterSelect={this.displayMobileFilter} />
                )}
            </div>
        );
    }
}

export default App;
