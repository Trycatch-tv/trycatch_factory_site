import { createClient } from '@supabase/supabase-js'
const supabaseUrl = import.meta.env.PUBLIC_API_URL
const supabaseKey = import.meta.env.PUBLIC_API_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


export { supabase }


