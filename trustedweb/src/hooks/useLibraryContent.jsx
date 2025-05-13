import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client (replace with your actual keys)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export function useLibraryContent() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchContent = async () => {
    setLoading(true)
    setError(null)
    try {
      const { data, error } = await supabase
        .from('library_content')
        .select('*')
        .order('published_at', { ascending: false })

      if (error) throw error
      return data
    } catch (err) {
      console.error('Error fetching content:', err.message)
      setError(err.message)
      return []
    } finally {
      setLoading(false)
    }
  }

  return {
    fetchContent,
    loading,
    error,
  }
}
