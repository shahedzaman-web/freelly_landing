import "./App.css";
import Home from "./layouts/Home";
import About from "./layouts/About";
import Query from "./layouts/Query";
import Blog from "./layouts/Blog";
import NavBar from "./layouts/Navbar";
import Feature from "./layouts/appfeature";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./layouts/Footer";

// import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Feature />
     <Query />
     <Blog />
      <Footer />
      
    </div>
  );
}

export default App;
