/** @format */

import Login from "views/pages/Login";
import Register from "views/pages/Register";

var Authroute = [
	{
		path: "/login",
		name: "Login",
		icon: "ni ni-key-25 text-info",
		component: <Login />,
		layout: "/auth",
	},
	{
		path: "/register",
		name: "Register",
		icon: "ni ni-key-25 text-info",
		component: <Register />,
		layout: "/auth",
	},
];
export default Authroute;
