import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// ⬇️ Supabase init (GLOBAL)
import { createClient } from '@supabase/supabase-js'

window.supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

// ⬆️ Now all components can just use: window.supabase

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
