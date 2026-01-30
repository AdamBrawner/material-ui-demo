import * as React from "react";
import type { CloseDialog, OpenDialog } from "./useDialogs";

const DialogsContext = React.createContext<{
	open: OpenDialog;
	close: CloseDialog<boolean>;
} | null>(null);

export default DialogsContext;
