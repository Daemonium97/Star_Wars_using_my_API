import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Container } from "react-bootstrap";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const handleSumit = e => {
		e.preventDefault();
		console.log(email, pass);
		fetch("https://3000-chocolate-armadillo-5tmta7rj.ws-us03.gitpod.io/user", (methods = ["POST"]), (body = {}));
	};
	return (
		<Container className="d-flex justify-content-center mt-5">
			<div className="login justify-content-center">
				<img
					src="https://steamuserimages-a.akamaihd.net/ugc/778485568507998099/863B13FCB3DE280FC637EA25A48F24F142E79E9A/"
					width="800"
					height="600"
				/>
				<form onSubmit={handleSumit} className="card card-body">
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
					<Link to="/home">
						<button className="btn btn-primary btn-block">Go</button>
					</Link>
				</form>
			</div>
		</Container>
	);
};
