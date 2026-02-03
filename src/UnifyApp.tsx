import CssBaseline from "@mui/material/CssBaseline";
import AppTheme from "../shared-theme/AppTheme";
import { AuthorizedRoutes } from "./components/AuthorizedRoutes";
import { UnifyRouter } from "./components/UnifyRouter";
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

export default function UnifyApp(props: { disableCustomTheme?: boolean }) {
	return (
		<AppTheme {...props} themeComponents={themeComponents}>
			<CssBaseline enableColorScheme />
			<UserContextProvider>
				<NotificationsProvider>
					<DialogsProvider>
						<AuthorizedRoutes AppRouter={UnifyRouter} />
					</DialogsProvider>
				</NotificationsProvider>
			</UserContextProvider>
		</AppTheme>
	);
}
