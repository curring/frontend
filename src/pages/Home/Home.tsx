import { listadoProyectos } from "../../mocks/listadoProyectos";

const Home = () => {
	return (
		<>
			<div className="flex flex-col justify-center items-center h-96  p-6 ">
				<div className="max-w-5xl text-center mb-8">
					<h1 className="text-5xl font-mono">
						Construimos sitios modernos que se adaptan a tus necesidades
					</h1>
				</div>

				<a
					className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white  w-fit px-8 py-2 rounded-full hover:from-pink-500 hover:to-yellow-500"
					href="https://tailwindcss.com/docs/installation"
					target="_blank"
				>
					ver la documentacion de Tailwind
				</a>
			</div>
			<div
				id="proyectos destacados"
				className="flex justify-around items-center p-10"
			>
				{listadoProyectos.projects.map(
					({ id, title, shortDescription, status }) => (
						<div
							key={id}
							className="flex flex-col max-w-5xl max-h-5xl text-center justify-center items-center "
						>
							<h1 className="text-3xl p-5">{title}</h1>
							<h2
								className={
									status === "Finalizado"
										? "bg-blue-500 rounded-full w-fit px-4 text-white"
										: "bg-orange-500 rounded-full w-fit px-4 text-white"
								}
							>
								{status}
							</h2>
							<p className="p-5">{shortDescription}</p>
						</div>
					)
				)}
			</div>
		</>
	);
};

export default Home;
