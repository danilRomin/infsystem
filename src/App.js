import "./reset.css"
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Warehouse from "./components/Warehouse/Warehouse";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Services from "./components/Services/Services";

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
                                <Route path="/warehouse" element={<Warehouse
                                    data={props.data}/>}
                                />
                                <Route path="/serviсes" element={<Services
                                    services={props.services}/>}
                                />


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
