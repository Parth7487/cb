import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center px-3 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center max-w-md">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-4 font-display">
            404
          </h1>
          <p className="text-xl sm:text-2xl text-foreground mb-3 font-semibold">
            Oops! Page not found
          </p>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors duration-200 text-sm sm:text-base"
          >
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
