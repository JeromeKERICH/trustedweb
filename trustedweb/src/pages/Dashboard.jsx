import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    supabase.auth.getUser()
      .then(({ data: { user }, error }) => {
        if (error) {
          setError(error.message);
        } else {
          setUser(user);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const getFirstName = () => {
    if (user?.user_metadata?.full_name) {
      return user.user_metadata.full_name.split(' ')[0];
    } else if (user?.email) {
      const username = user.email.split('@')[0];
      const firstName = username.split('.')[0];
      return firstName.charAt(0).toUpperCase() + firstName.slice(1);
    }
    return '';
  };

  const avatarUrl = user?.user_metadata?.avatar_url;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-5">Dashboard Home</h1>

        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : user ? (
          <div>
            {avatarUrl && (
              <img
                src={avatarUrl}
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto mb-4 shadow-md"
              />
            )}
            <p className="text-xl text-gray-700 mb-1">
              Welcome back, <span className="font-semibold">{getFirstName()}</span>!
            </p>
            <p className="text-gray-500 mb-4">You are logged in as <span className="font-medium">{user.email}</span></p>

            <button
              onClick={handleLogout}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-xl transition duration-200 shadow-sm"
            >
              Log Out
            </button>
          </div>
        ) : (
          <p className="text-gray-500">No user logged in.</p>
        )}
      </div>
    </div>
  );
}
