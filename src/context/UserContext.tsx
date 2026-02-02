import * as React from "react";

const UserContext = React.createContext<{
	username: string;
	setUsername: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

export const UserContextProvider = (props: { children: React.ReactNode }) => {
	const [username, setUsername] = React.useState<string>("");

	return (
		<UserContext.Provider value={{ username, setUsername }}>
			{props.children}
		</UserContext.Provider>
	);
};

export const useUser = () => {
	const context = React.useContext(UserContext);
	if (!context) {
		throw new Error("useUser must be used within a UserContextProvider");
	}
	return context;
};
