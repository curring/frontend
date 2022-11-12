import Card from "../Card/Card";
import "./cards.css";
import { listadoProyectos } from "../../mocks/listadoDeProyectos";
function Cards() {
	return (
		<>
			<div className="cards">
				{listadoProyectos.map((project): any => (
					<Card key={project.id} project={project} />
				))}
			</div>
		</>
	);
}

export default Cards;
