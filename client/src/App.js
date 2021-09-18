// Import modules
import React from 'react';
import { Link } from 'react-router-dom';

// Import MUI packages
import { Container, Typography } from '@material-ui/core';

export default function App() {
	return (
		<Container>
			<Typography>Hi</Typography>
			<Link to='dashboard'>View submissions</Link>
		</Container>
	);
}