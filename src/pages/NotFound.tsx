
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="glass-card p-12 text-center max-w-md w-full">
        <div className="text-6xl font-bold text-brand-blue mb-4">404</div>
        <h1 className="text-3xl font-semibold mb-4">Page Not Found</h1>
        <p className="text-brand-gray mb-8">
          We couldn't find the page you're looking for. The page may have been moved, deleted, or never existed.
        </p>
        <Button className="btn-primary" onClick={() => window.location.href = "/"}>
          Return Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
