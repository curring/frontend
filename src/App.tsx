import "./App.css";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Project from "./pages/project/Project";

function App() {
	return (
		<div className="App">
			<Navbar/>
			<Routes>
				<Route
					path="/"
					element={ <Home/> }
				/>
				<Route
					path="/projects"
					element={ <Projects/> }
				/>
				<Route
					path="/projects/:id"
					element={ <Project/> }
				/>
			</Routes>
		</div>
	);
}

export default App;
