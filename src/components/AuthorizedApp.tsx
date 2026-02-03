import LinearProgress from "@mui/material/LinearProgress";
import * as React from "react";
import { createHashRouter, RouterProvider } from "react-router";
import { useUser } from "../context/UserContext";

const DashboardLayout = React.lazy(() => import("./DashboardLayout"));
const EmployeeCreate = React.lazy(() => import("./EmployeeCreate"));
const EmployeeEdit = React.lazy(() => import("./EmployeeEdit"));
const EmployeeList = React.lazy(() => import("./EmployeeList"));
const EmployeeShow = React.lazy(() => import("./EmployeeShow"));
const NotAuthorized = React.lazy(() => import("./NotAuthorized"));
const SignIn = React.lazy(() => import("./SignIn"));

const router = createHashRouter([
	{
		Component: DashboardLayout,
		children: [
			{
				path: "/login",
				Component: SignIn,
			},
			{
				path: "/employees",
				Component: EmployeeList,
			},
			{
				path: "/employees/:employeeId",
				Component: EmployeeShow,
			},
			{
				path: "/employees/new",
				Component: EmployeeCreate,
			},
			{
				path: "/employees/:employeeId/edit",
				Component: EmployeeEdit,
			},
			// Fallback route for the example routes in dashboard sidebar items
			{
				path: "*",
				Component: EmployeeList,
			},
		],
	},
]);

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
			{signedIn ? <RouterProvider router={router} /> : <NotAuthorized />}
		</React.Suspense>
	);
};
