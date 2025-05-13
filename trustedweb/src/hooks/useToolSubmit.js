// src/hooks/useToolSubmit.js
import { supabase } from '../utils/supabaseClient'

export const useToolSubmit = () => {
  const submitResult = async (tool_type, user_input, estimated_budget = null) => {
    const { error } = await supabase.from('tools_results').insert([
      {
        tool_type,
        user_input,
        estimated_budget,
      },
    ])
    return error
  }

  return { submitResult }
}
