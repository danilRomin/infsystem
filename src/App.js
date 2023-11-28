import "./reset.css"
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Warehouse from "./components/Warehouse/Warehouse";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Services from "./components/Services/Services";
import Loyalty from "./components/Loyalty/Loyalty";
import Stats from "./components/Stats/Stats";
import Hello from "./components/Hello/Hello";

function App(props) {

    return (
        <Router>
            <div className="App">
                <Header/>
                <div className="container">
                    <div className="appWrapper">
                        <Navbar/>
                        <div className="content">
                            <Routes>
                                <Route path="/" element={<Hello/>}/>
                                <Route path="/warehouse" element={<Warehouse/>}/>
                                <Route path="/services" element={<Services/>}/>
                                <Route path="/loyalty" element={<Loyalty/>}/>
                                <Route path="/stats" element={<Stats/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    )
        ;
}

export default App;
