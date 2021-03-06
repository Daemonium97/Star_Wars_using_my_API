import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom/cjs/react-router-dom.min";

export const Register = () => {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [redirect, setRedirect] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		if (email === "" && pass === "") {
			alert("Ingrese el correo y la contraseña");
		} else if (email === "") {
			alert("Por favor ingrese un correo");
		} else if (pass === "") {
			alert("Por favor ingrese una contraseña");
		}

		console.log(email, pass);

		//Fetch
		const data = { email: email, password: pass };
		fetch("https://3000-tomato-panda-b8wf0ukp.ws-us03.gitpod.io/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Success:", data);
				setRedirect(true);
			})
			.catch(error => {
				console.error("Error:", error);
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

					<button className="btn btn-primary btn-block">New? Create User</button>
					<Link to="/login">
						<button className="btn btn-primary btn-block mt-3">Already have an account? Log in</button>
					</Link>
				</form>

				{redirect ? <Redirect to="/login" /> : ""}
			</div>
		</div>
	);
};
