import "./Admin.css";
import { useState } from "react";

function Admin() {
	const [formValues, setFormValues] = useState([""]);

	const handleInput = (e: any) => {
		const data = e.target.value;
		setFormValues(data);
	};

	const handleForm = (e: any) => {
		e.preventDefault();
		console.log(formValues);
	};

	return (
		<div className="div-admin">
			<h1>Ingresa un proyecto</h1>
			<form action="" className="div-form" onSubmit={handleForm}>
				<input
					type="text"
					placeholder="TITLE"
					className="inputs-form"
					value={formValues}
					onChange={handleInput}
				/>
				<input type="text" placeholder="CATEGORY" className="inputs-form" />
				<input type="text" placeholder="TAGS" className="inputs-form" />
				<textarea
					name="text area"
					placeholder="SHORT DESCRIPTION"
					id=""
					className="inputs-form"
				></textarea>
				<textarea
					name="text area"
					placeholder="LONG DESCRIPTION"
					id=""
					className="inputs-form"
				></textarea>
				<input type="file" className="inputs-form" />
				<input type="date" placeholder="DATE" className="inputs-form" />
				<select className="inputs-form">
					<option>En desarrollo</option>
					<option>Finalizado</option>
				</select>

				<button className="button-link">Enviar mensaje</button>
			</form>
		</div>
	);
}

export default Admin;
