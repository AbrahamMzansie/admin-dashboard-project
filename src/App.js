import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";

import "./app.css";

const App = () => {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
        <Home/>
        
      </div>
    </div>
  );
};
export default App;
