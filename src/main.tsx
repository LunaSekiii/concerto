import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

import "./index.less";

const root = document.getElementById("root");

if (root) {
	const browserRouter = createBrowserRouter(routes);

	ReactDOM.createRoot(root).render(
		<React.StrictMode>
			<RouterProvider router={browserRouter} />
		</React.StrictMode>
	);
} else {
	console.error("root element not found");
}
