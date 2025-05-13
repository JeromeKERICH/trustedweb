// src/hooks/useAuth.js
import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'

export const useAuth = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null)
    })

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  const login = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    return error
  }

  const logout = async () => {
    await supabase.auth.signOut()
  }

  return { user, login, logout }
}
