import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Para endpoints server-side, usa service role key si necesitas privilegios.
// Pero NO expongas service role en frontend.

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
