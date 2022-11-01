import "./header.css";

import { Link } from "react-router-dom";
function Header() {
	return (
		<div className="bg-slate-900 font-mono backdrop-blur-sm drop-shadow-md">
			<nav className="relative flex h-20 items-center justify-between text-white px-8 ">
				<h1> CURRING DEVELOPERS </h1>
				<div>
					<Link className="px-1.5 hover:text-sky-400" to="/">
						Home
					</Link>
					<Link className="px-1.5 hover:text-sky-400" to="/projects">
						Projects
					</Link>
				</div>
			</nav>
		</div>
	);
}

export default Header;
