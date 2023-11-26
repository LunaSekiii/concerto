import { RouteObject } from "react-router-dom";
import React from "react";

import Home from "../pages/Home";

const routes: RouteObject[] = [
	{
		path: "/:name?",
		element: <Home />,
		// children: [
		// 	{
		// 		path: "/:id",
		// 		element: <Home />,
		// 	},
		// ],
	},
];

export default routes;
