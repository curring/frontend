import "./Admin.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
/* LIBRERIA USADA PARA EL FORM ======>>>>>>> https://react-hook-form.com */
function Admin() {
	const { register, handleSubmit } = useForm();

	const onSubmit = (d: any) => alert(JSON.stringify(d));

	return (
		<div className="div-admin">
			<h1>Ingresa un proyecto</h1>
			<form action="" className="div-form" onSubmit={handleSubmit(onSubmit)}>
				<input
					type="text"
					placeholder="TITLE"
					className="inputs-form"
					{...register("title", { required: true, maxLength: 30 })}
				/>
				<input
					type="text"
					placeholder="CATEGORY"
					className="inputs-form"
					{...register("category")}
				/>
				<input
					type="text"
					placeholder="TAGS"
					className="inputs-form"
					{...register("tags")}
				/>
				<textarea
					{...register("short description")}
					placeholder="SHORT DESCRIPTION"
					id=""
					className="inputs-form"
				></textarea>
				<textarea
					{...register("long description")}
					placeholder="LONG DESCRIPTION"
					id=""
					className="inputs-form"
				></textarea>
				<input type="file" className="inputs-form" {...register("file")} />
				<input
					type="date"
					placeholder="DATE"
					className="inputs-form"
					{...register("date")}
				/>
				<select className="inputs-form" {...register("select")}>
					<option>En desarrollo</option>
					<option>Finalizado</option>
				</select>

				<button className="button-link">Enviar mensaje</button>
			</form>
		</div>
	);
}

export default Admin;
