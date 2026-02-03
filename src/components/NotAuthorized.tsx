import { Box, Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import { useUser } from "../context/UserContext";

export const NotAuthorized = () => {
	const { setUsername } = useUser();
	return (
		<Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
			<Alert severity="error">
				You are not authorized to view this application.
				<Button
					variant="outlined"
					onClick={() => setUsername("")}
					sx={{ ml: 2 }}
				>
					Log In
				</Button>
			</Alert>
		</Box>
	);
};

export default NotAuthorized;
