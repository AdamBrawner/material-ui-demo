import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

// removed logic to accept and spread (props: any)
export default function Copyright() {
	return (
		<Typography
			variant="body2"
			align="center"
			sx={[
				{
					color: "text.secondary",
				},
				//	...(Array.isArray(props.sx) ? props.sx : [props.sx]),
			]}
		>
			{"Copyright © "}
			<Link color="inherit" href="https://ars.com/">
				ARS Inc
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}
