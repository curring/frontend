import "./Navbar.css";

import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="nav-div">
			<Link to="/">
				<h3>
					<span className="span-header">&lt; </span>Curring
					<span className="span-header"> / &gt;</span>
				</h3>
			</Link>

			<div>
				<Link to="/">Home</Link>
				<Link to="/projects">Projects</Link>
			
			</div>
		</nav>
	);
}

export default Navbar;
