import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/schema';

export default createClient<Database>(
  process.env.PUBLIC_SUPABASE_URL!,
  process.env.PUBLIC_SUPABASE_ANON_KEY!
);
