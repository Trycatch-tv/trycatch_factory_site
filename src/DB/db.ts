import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_API_URL;
const supabaseKey = import.meta.env.PUBLIC_API_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL and Key are required');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };


