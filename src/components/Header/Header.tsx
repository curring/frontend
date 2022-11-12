import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
	return (
		<div className="nav-div">
			<Link to="/">
				<h3>
					<span className="span-header">&lt; </span>Curring
					<span className="span-header"> / &gt;</span>
				</h3>
			</Link>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/projects">Projects</Link>
			</nav>
		</div>
	);
}

export default Header;
