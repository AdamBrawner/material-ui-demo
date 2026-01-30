import CssBaseline from "@mui/material/CssBaseline";
import { createHashRouter, RouterProvider } from "react-router";
import AppTheme from "../shared-theme/AppTheme";
import DashboardLayout from "./components/DashboardLayout";
import EmployeeCreate from "./components/EmployeeCreate";
import EmployeeEdit from "./components/EmployeeEdit";
import EmployeeList from "./components/EmployeeList";
import EmployeeShow from "./components/EmployeeShow";
import SignIn from "./components/SignIn";
import DialogsProvider from "./hooks/useDialogs/DialogsProvider";
import NotificationsProvider from "./hooks/useNotifications/NotificationsProvider";
import {
	dataGridCustomizations,
	datePickersCustomizations,
	formInputCustomizations,
	sidebarCustomizations,
} from "./theme/unify-customizations";

const router = createHashRouter([
	{
		Component: DashboardLayout,
		children: [
			{
				path: "/",
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

const themeComponents = {
	...dataGridCustomizations,
	...datePickersCustomizations,
	...sidebarCustomizations,
	...formInputCustomizations,
};

export default function CrudDashboard(props: { disableCustomTheme?: boolean }) {
	return (
		<AppTheme {...props} themeComponents={themeComponents}>
			<CssBaseline enableColorScheme />
			<NotificationsProvider>
				<DialogsProvider>
					<RouterProvider router={router} />
				</DialogsProvider>
			</NotificationsProvider>
		</AppTheme>
	);
}
