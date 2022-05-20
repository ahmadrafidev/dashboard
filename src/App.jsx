import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import MainNavigation from "./components/layout/main-navigation/MainNavigation";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
        <MainNavigation/>
        <div className="flex">
            <Sidebar/>
            <Routes>
                <Route path="/" element={<Home/>}>
                </Route>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
