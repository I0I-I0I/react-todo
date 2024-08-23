import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";

import { EditModeProvider } from "./components/context/editMode.jsx";
import { TodoProvider } from "./components/context/todoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<EditModeProvider>
			<TodoProvider>
				<App />
			</TodoProvider>
		</EditModeProvider>
	</React.StrictMode>,
);
