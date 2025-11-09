import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="notfound-card">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Oops! Page not found</h2>
        <p className="notfound-desc">
          The page you are trying to access doesn't exist or may have been moved.
        </p>

        <div className="notfound-actions">
          <Link to="/" className="notfound-btn primary">Go Home</Link>
          <a href="mailto:sadat.fullstack@gmail.com" className="notfound-btn outline">
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
