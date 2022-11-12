import "./presentation.css";
import { Link } from "react-router-dom";
function Presentation() {
	return (
		<div className="div-home-intro">
			<div className="div-home-intro-module">
				<h1>Hi! we create a custom experience four you </h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
					pretium tincidunt consectetur. Pellentesque faucibus ut ex non
					lacinia. Cras cursus laoreet ex pulvinar pretium. Pellentesque laoreet
					orci quis nulla mollis viverra. Pellentesque vehicula nisi at
					tristique vestibulum.
				</p>
				<Link className="button-link" to="/">
					Ver mas prodcutos
				</Link>
			</div>
		</div>
	);
}

export default Presentation;
