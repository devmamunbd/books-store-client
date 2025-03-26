import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
