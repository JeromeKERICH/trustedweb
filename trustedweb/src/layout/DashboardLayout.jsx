import { Link, Outlet, useLocation } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";
import { useNavigate } from "react-router-dom";

const links = [
  { to: "", label: "Home" },
  { to: "articles", label: "Articles" },
  { to: "categories", label: "Categories" },
  { to: "downloads", label: "Downloads" },
  { to: "quiz", label: "Quiz Builder" },
   { to: "quiz-manager", label: "Quiz Manager" },
  { to: "estimator", label: "Estimator Builder" },
  { to: "services", label: "Services" },
  { to: "bookings", label: "Bookings" },
  { to: "settings", label: "Settings" },
];

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  return (
    <div className="flex min-h-screen">
      <nav className="w-64 bg-gray-100 p-6 flex flex-col justify-between">
        <div>
          <h2 className="font-bold text-2xl mb-6">Web Clarity</h2>
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={`/dashboard/${link.to}`}
                  className={`block p-2 rounded hover:bg-gray-200 ${
                    location.pathname.includes(link.to) ? "bg-blue-100" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="text-red-600 hover:underline mt-6"
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}
