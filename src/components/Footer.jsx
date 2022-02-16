export default function Footer({ projectName }) {
  return (
    <footer className="footer mt-auto py-3 border-top">
      <div className="container">
        <span className="text-muted">© 2022 {projectName}</span>
      </div>
    </footer>
  );
}
