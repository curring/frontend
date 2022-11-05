import { useParams } from "react-router-dom";
import "./project.css";

const Project = () => {
	const { project } = useParams();
	return (
		<div className="flex flex-col justify-center items-center h-96">
			<h2>Demo de contenido dinamico pasando info por url</h2>
			<h1 className="text-5xl">{project}</h1>
		</div>
	);
};

export default Project;
