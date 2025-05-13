import { supabase } from '../supabaseClient'

export function useLibraryContent() {
  const fetchContent = async () => {
    const { data, error } = await supabase
      .from('library_content')
      .select('*')
      .order('published_at', { ascending: false })
    if (error) throw error
    return data
  }

  const createContent = async (contentData) => {
    const { error } = await supabase.from('library_content').insert([contentData])
    if (error) throw error
  }

  const updateContent = async (id, contentData) => {
    const { error } = await supabase
      .from('library_content')
      .update(contentData)
      .eq('id', id)
    if (error) throw error
  }

  const deleteContent = async (id) => {
    const { error } = await supabase.from('library_content').delete().eq('id', id)
    if (error) throw error
  }

  return {
    fetchContent,
    createContent,
    updateContent,
    deleteContent,
  }
}
