// src/hooks/useLibraryAdmin.js
import { supabase } from '../utils/supabaseClient'

export const useLibraryAdmin = () => {
  const fetchAllContent = async () => {
    const { data, error } = await supabase
      .from('library_content')
      .select('*')
      .order('created_at', { ascending: false })
    return { data, error }
  }

  const createContent = async (newContent) => {
    const { error } = await supabase.from('library_content').insert([newContent])
    return error
  }

  const updateContent = async (id, updatedFields) => {
    const { error } = await supabase.from('library_content').update(updatedFields).eq('id', id)
    return error
  }

  const deleteContent = async (id) => {
    const { error } = await supabase.from('library_content').delete().eq('id', id)
    return error
  }

  return { fetchAllContent, createContent, updateContent, deleteContent }
}
