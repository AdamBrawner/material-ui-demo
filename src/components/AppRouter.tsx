import * as React from "react";
import { createHashRouter, RouterProvider } from "react-router";

const DashboardLayout = React.lazy(() => import("./DashboardLayout"));
const EmployeeCreate = React.lazy(() => import("./EmployeeCreate"));
const EmployeeEdit = React.lazy(() => import("./EmployeeEdit"));
const EmployeeList = React.lazy(() => import("./EmployeeList"));
const EmployeeShow = React.lazy(() => import("./EmployeeShow"));
const NotAuthorized = React.lazy(() => import("./NotAuthorized"));

const router = createHashRouter([
	{
		Component: DashboardLayout,
		children: [
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
				Component: NotAuthorized,
			},
		],
	},
]);

export const AppRouter = () => <RouterProvider router={router} />;
export default AppRouter;
