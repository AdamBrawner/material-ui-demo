import CssBaseline from "@mui/material/CssBaseline";
import AppTheme from "../shared-theme/AppTheme";
import { AuthorizedApp } from "./components/AuthorizedApp";
import { UserContextProvider } from "./context/UserContext";
import DialogsProvider from "./hooks/useDialogs/DialogsProvider";
import NotificationsProvider from "./hooks/useNotifications/NotificationsProvider";
import {
	dataGridCustomizations,
	datePickersCustomizations,
	formInputCustomizations,
	sidebarCustomizations,
} from "./theme/unify-customizations";

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
			<UserContextProvider>
				<NotificationsProvider>
					<DialogsProvider>
						<AuthorizedApp />
					</DialogsProvider>
				</NotificationsProvider>
			</UserContextProvider>
		</AppTheme>
	);
}
