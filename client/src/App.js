// Import modules
import React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
	return (
		<div>
			Hi
			<Link to='dashboard'>View submissions</Link>
		</div>
	);
}