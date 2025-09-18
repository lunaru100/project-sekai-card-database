import { Link } from "react-router-dom";

interface Props {
  to: string;
  children: React.ReactNode;
}

export function MenuLink({ to, children }: Props) {
  return (
    <Link
      to={to}
      className="text-white no-underline visited:text-white visited:no-underline"
    >
      {children}
    </Link>
  );
}
