import "./App.css";
import { Home, Projects, Project } from "./pages";
import { Header, Footer } from "./components";
import { Route, Routes } from "react-router-dom";
function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="projects/:project" element={<Project />} />
			</Routes>
		</>
	);
}

export default App;
