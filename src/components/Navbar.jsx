import { Link } from "react-router-dom";

const Navbar = ({children}) => (
  <>
  <nav className="flex justify-between bg-zinc-800 p-3 mb-6 rounded shadow">
    <Link to="/" className="text-gray-100 font-semibold hover:underline hover:text-gray-300">New Decision</Link>
    <Link to="/history" className="text-gray-100 font-semibold hover:underline hover:text-gray-300">History</Link>
  </nav>
  {children}
  </>
);

export default Navbar;
