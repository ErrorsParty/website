import type { Database } from "./gen/types.gen";
import { createClient } from "@supabase/supabase-js";

export default (window as any).supabase = createClient<Database>(
	import.meta.env.VITE_SUPABASE_API_URL,
	import.meta.env.VITE_SUPABASE_ANON_KEY,
);
