import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://oslqivvwictwppnqclxe.supabase.co'
const supabaseKey = import.meta.env.PUBLIC_API_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


export { supabase }


