import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header({ projectName }) {
  return (
    <Navbar className="border-bottom mb-4" expand="lg">
      <Container>
        <Link to="/" className='navbar-brand'>
          { projectName }
        </Link>
      </Container>
    </Navbar>
  );
}
