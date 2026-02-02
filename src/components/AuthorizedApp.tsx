import { createHashRouter, RouterProvider } from "react-router";
import { useUser } from "../context/UserContext";
import DashboardLayout from "./DashboardLayout";
import EmployeeCreate from "./EmployeeCreate";
import EmployeeEdit from "./EmployeeEdit";
import EmployeeList from "./EmployeeList";
import EmployeeShow from "./EmployeeShow";
import { NotAuthorized } from "./NotAuthorized";
import SignIn from "./SignIn";

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
	if (!username) return <SignIn />;
	const signedIn = username === "adam";
	return signedIn ? <RouterProvider router={router} /> : <NotAuthorized />;
};
