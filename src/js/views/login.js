import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [redirect, setRedirect] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		if (email === "" || pass === "") {
			alert("Correo y Contraseña requeridos");
		}
		console.log(email, pass);

		//Fetch
		const data = { email: email, password: pass };

		fetch("https://3000-tomato-panda-b8wf0ukp.ws-us03.gitpod.io/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(data => {
				console.log("Success:", data);
				sessionStorage.setItem("u_token", data.token);
				setRedirect(true);
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};
	const CheckFields = () => {
		if (email === "" || pass === "") {
			alert("Faltan espacios por rellenar");
		} else if (email === email && pass === pass) {
			redirect ? <Redirect to="/home" /> : "";
		}
	};

	return (
		<div className="text-center mt-5 d-flex justify-content-center align-items-center">
			<div className="login justify-content-center">
				<img
					src="https://steamuserimages-a.akamaihd.net/ugc/778485568507998099/863B13FCB3DE280FC637EA25A48F24F142E79E9A/"
					width="800"
					height="600"
				/>
				<form onSubmit={e => handleSubmit(e)} className="card card-body">
					<div className="form-group">
						<input
							type="email"
							onChange={e => setEmail(e.target.value)}
							className="form-control"
							placeholder="Email"
							autoFocus
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							onChange={e => setPass(e.target.value)}
							className="form-control"
							placeholder="Password"
						/>
					</div>

					<button className="btn btn-primary btn-block">Log in</button>
				</form>
				{CheckFields()}
			</div>
		</div>
	);
};
