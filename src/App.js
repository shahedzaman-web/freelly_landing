import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./layouts/About";
import Blog from "./layouts/Blog";
import Footer from "./layouts/Footer";
import Home from "./layouts/Home";
import NavBar from "./layouts/Navbar";
import Query from "./layouts/Query";
import Feature from "./layouts/appfeature";

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
