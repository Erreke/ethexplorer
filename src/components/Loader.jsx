import Spinner from 'react-bootstrap/Spinner';

export default function Loader() {
  return (
    <div className="loader">
      <div className="loader__container">
        <Spinner animation="border" variant="primary" />
      </div>
    </div>
  );
}