import "./App.css";
import Table from "./Components/DataBody/Table";
import Filters from "./Components/Filters/Filters";
import Header from "./Components/Header";
import HeaderDown from "./Components/HeaderDown/HeaderDown";

function App() {
    return (
        <div className="App">
            <Header />
            <HeaderDown />
            <Filters />
            <Table />
            <div></div>
        </div>
    );
}

export default App;
