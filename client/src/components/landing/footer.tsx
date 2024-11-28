import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 Brainly. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              to="#"
              className="text-sm text-muted-foreground hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-sm text-muted-foreground hover:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
