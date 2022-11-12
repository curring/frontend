import "./App.css";
import { Cards, Header, Presentation } from "./components";
import { Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home";
import Projects from "./Pages/Projects/Projects";
import Project from "./Pages/Project/Project";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="projects/:project" element={<Project />} />
			</Routes>
		</div>
	);
}

export default App;
