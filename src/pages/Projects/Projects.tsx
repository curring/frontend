import "./projects.css";
import { Link } from "react-router-dom";

function Projects() {
	const navItems = ["Project1", "Project2", "Project3"];
	return (
		<>
			<div className=" bg-sky-600 relative flex h-10 items-center justify-around text-white ">
				{navItems.map((item: string): any => (
					<Link
						to={`/projects/${item}`}
						key={item}
						className="hover:text-sky-900"
					>
						{item}
					</Link>
				))}
			</div>
			<div className="flex justify-center items-center h-96">
				<h1 className="text-5xl">Nuestros Proyectos</h1>
			</div>
		</>
	);
}

export default Projects;
