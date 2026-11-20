import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="flex min-h-screen items-center justify-center bg-background px-6">
    <div className="text-center">
      <p className="font-display text-7xl gradient-text-red mb-4">404</p>
      <h1 className="mb-6 text-2xl md:text-3xl">Страница не найдена</h1>
      <Link
        to="/"
        className="inline-flex h-12 items-center rounded-2xl bg-primary px-6 font-heading uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        На главную
      </Link>
    </div>
  </main>
);

export default NotFound;
