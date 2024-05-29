import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://oslqivvwictwppnqclxe.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zbHFpdnZ3aWN0d3BwbnFjbHhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY4NjA3OTcsImV4cCI6MjAzMjQzNjc5N30.1aNVTwLbLTztzG-pcrloaekMi2ccK5sb9p77oIscV4s'
const supabase = createClient(supabaseUrl, supabaseKey)


export { supabase }


