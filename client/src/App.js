// Import modules
import React from 'react';

// Import MUI packages
import { CssBaseline, AppBar, Container, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles ((theme) => ({
	header: {
		padding: '1%',
	},
	main: {
		
		display: 'flex',
		flexDirection: 'column',
		height: '100vh',
		justifyContent: 'center',	
		alignItems: 'center',
		textAlign: 'center',
	},
	button: {
		margin: '1%',
		minWidth: '50vw',
		padding: '2%',
	}
}));

export default function App() {
	const classes = useStyles ();
	return (
		<>
			<CssBaseline />
			<AppBar className={classes.header}>
				<Typography variant='h4' align='center'>Assignment submission portal</Typography>
			</AppBar>

			<Container className={classes.main}>
				<Button variant='outlined' color='primary' className={classes.button}>View submissions</Button>
				<Button variant='outlined' color='primary' className={classes.button}>Submit new response</Button>
			</Container>	
		</>
	);
}