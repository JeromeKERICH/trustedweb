import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('invalid');
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('http://localhost:1337/api/subscriber', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: { email },
        }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
        // After short delay (for success message), redirect to Articles page
        setTimeout(() => {
          navigate('/library');
        }, 1500);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg border border-gray-200 space-y-5 mt-8 mb-8"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center">Join Our Clarity List</h2>
      <p className="text-gray-500 text-sm text-center">Get tips, scam alerts & website planning tools directly.</p>

      <input
        type="email"
        placeholder="you@example.com"
        className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-teal-600 text-white py-3 rounded-xl hover:bg-teal-600 transition disabled:opacity-50"
      >
        {loading ? 'Subscribing...' : 'Subscribe'}
      </button>

      {status === 'success' && (
        <p className="text-green-600 text-center text-sm animate-pulse">🎉 Subscribed! Redirecting to articles...</p>
      )}
      {status === 'error' && <p className="text-red-600 text-center text-sm">Something went wrong. Try again.</p>}
      {status === 'invalid' && <p className="text-orange-600 text-center text-sm">Please enter a valid email.</p>}
    </form>
  );
}
