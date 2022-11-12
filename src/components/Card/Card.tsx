import "./card.css";
import foto from "../../assets/bk1.jpg";
import { Link } from "react-router-dom";
function Card(project: any) {
	return (
		<div className="card">
			<img className="img-card" src={foto} alt="img demo" />
			<div className="card-body">
				<h1>{project.project.title}</h1>
				<p>{project.project.shortDescription}</p>
				<Link className="button-link" to={`/projects/${project.project.title}`}>
					ver proyecto
				</Link>
			</div>
		</div>
	);
}

export default Card;
