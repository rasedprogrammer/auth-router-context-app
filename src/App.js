import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRouter from "./routes/PrivateRouter";
import Orders from "./components/Orders";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Main></Main>,
			children: [
				{
					path: "/",
					element: (
						<PrivateRouter>
							<Home></Home>
						</PrivateRouter>
					),
				},
				{
					path: "/home",
					element: (
						<PrivateRouter>
							<Home></Home>
						</PrivateRouter>
					),
				},
				{
					path: "/login",
					element: <Login></Login>,
				},
				{
					path: "/register",
					element: <Register></Register>,
				},
				{
					path: "/orders",
					element: (
						<PrivateRouter>
							<Orders></Orders>
						</PrivateRouter>
					),
				},
			],
		},
	]);
	return (
		<div className="App">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
