import React from 'react';
// eslint-disable-next-line import/no-named-default
import { default as MaterialDialog } from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Dialog: React.FC<Props> = (props) => {
	// do we want to even use materials ui for title here. We could just steal the dialog
	return (
		<MaterialDialog open={props.isOpen} onClose={props.handleClose}>
			<DialogTitle>{props.title}</DialogTitle>
			<DialogContent>{props.children}</DialogContent>
			{props.actions && <DialogActions>{props.actions}</DialogActions>}
		</MaterialDialog>
	);
};

interface Props {
	title: string;
	isOpen: boolean;
	handleClose: () => void;
	actions?: React.ReactNode;
}

export default Dialog;
