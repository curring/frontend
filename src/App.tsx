import "./App.css";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Project from "./pages/project/Project";
import Admin from "./pages/admin/Admin";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/projects/:id" element={<Project />} />
				<Route path="/admin-curring" element={<Admin />} />
			</Routes>
		</div>
	);
}

export default App;
