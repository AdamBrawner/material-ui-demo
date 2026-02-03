import LinearProgress from "@mui/material/LinearProgress";
import * as React from "react";
import { useUser } from "../context/UserContext";

const AppRouter = React.lazy(() => import("./AppRouter"));

const NotAuthorized = React.lazy(() => import("./NotAuthorized"));
const SignIn = React.lazy(() => import("./SignIn"));

export const AuthorizedApp = () => {
	const { username } = useUser();
	if (!username)
		return (
			<React.Suspense fallback={<LinearProgress />}>
				<SignIn />
			</React.Suspense>
		);
	const signedIn = username === "adam" || username.endsWith("@ars.com");
	return (
		<React.Suspense fallback={<LinearProgress />}>
			{signedIn ? <AppRouter /> : <NotAuthorized />}
		</React.Suspense>
	);
};
