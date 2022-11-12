import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { listadoProyectos } from "../../mocks/listadoDeProyectos";
import "./project.css";
function Project() {
	const { project } = useParams();
	const thisProject = listadoProyectos.filter((item) => item.title === project);
	console.log(thisProject);
	return (
		<div className="project-card">
			<div className="project-header">
				<h1>{thisProject[0].title}</h1>
				<p>{thisProject[0].shortDescription}</p>
				<Link className="button-link" to="/projects">
					volver a proyectos
				</Link>
			</div>
		</div>
	);
}

export default Project;
