import { createContext, useState } from "react";

export const EditModeContext = createContext(null);

export const EditModeProvider = ({ children }) => {
	const [editMode, setEditMode] = useState(false);

	return (
		<EditModeContext.Provider value={[editMode, setEditMode]}>
			{children}
		</EditModeContext.Provider>
	);
};
