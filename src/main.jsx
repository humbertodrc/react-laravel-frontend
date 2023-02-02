import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {QuioscoProvider} from "./Context/QuioscoProvider";
import "./index.css";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<QuioscoProvider>
			<RouterProvider router={router} />
		</QuioscoProvider>
	</React.StrictMode>
);
