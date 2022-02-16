import Alert from 'react-bootstrap/Alert';

export default function Error({ title, body }) {
  return (
    <Alert variant="danger">
        <Alert.Heading>{title}</Alert.Heading>
        <p>{body}</p>
      </Alert>
  );
}
