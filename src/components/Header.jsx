import { ShoppingBasket } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  // Hide the header on login, signup, and dashboard routes
  if (['/login', '/signup', '/dashboard'].includes(location.pathname)) {
    return null;
  }

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="flex items-center gap-2 cursor-pointer">
        <ShoppingBasket className="h-6 w-6 text-emerald-600" />
        <span className="font-semibold text-xl">GrocerySave</span>
      </div>
      <div className="flex gap-4 items-center">
        <Link
          to="/login"
          className="text-sm font-medium hover:text-emerald-600 transition-colors relative group"
        >
          Sign in
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </Link>
        <Link
          to="/signup"
          className="text-sm font-medium bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
}
