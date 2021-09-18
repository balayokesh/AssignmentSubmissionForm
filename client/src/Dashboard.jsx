import { Link } from 'react-router-dom';

// Import MUI components
import { Container, Typography } from '@material-ui/core';

export default function Dashboard () {
    return (
        <Container>
            <Typography>This is dashboard page</Typography>
            <Link to='/'>Home</Link>
        </Container>
    )
}