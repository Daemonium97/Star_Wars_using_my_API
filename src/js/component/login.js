import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom/cjs/react-router-dom.min";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [redirect, setRedirect] = useState(false);
	let history = useHistory();
	const handleSubmit = e => {
		e.preventDefault();
		if (email == "" || pass == "") {
			alert("Correo o Contraseña inválidos");
		}
		console.log(email, pass);

		//Fetch
		const data = { email: email, password: pass };
		fetch("https://3000-olive-porcupine-0p25cx86.ws-us03.gitpod.io/register", {
			method: "POST",
			mode: "no-cors",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Success:", data);
				sessionStorage.setItem("u_token", data.token);
				setRedirect(true);
			})
			.catch(error => {
				console.log(error);
			});
	};

	return (
		<div className="text-center mt-5 d-flex justify-content-center align-items-center">
			<div className="login justify-content-center">
				<img
					src="https://steamuserimages-a.akamaihd.net/ugc/778485568507998099/863B13FCB3DE280FC637EA25A48F24F142E79E9A/"
					width="800"
					height="600"
				/>
				<form onSubmit={handleSubmit} className="card card-body">
					<div className="form-group">
						<input
							type="email"
							onChange={e => setEmail(e.target.value)}
							value={email}
							className="form-control"
							placeholder="Email"
							autoFocus
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							onChange={e => setPass(e.target.value)}
							value={pass}
							className="form-control"
							placeholder="Password"
						/>
					</div>

					<button className="btn btn-primary btn-block">New? Create User</button>
				</form>
				{redirect ? <Redirect to="/home" /> : ""}
			</div>
		</div>
	);
};
