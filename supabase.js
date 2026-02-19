import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

export const SUPABASE_URL = "https://aigfvgyoxaxbrwudjaza.supabase.co";
export const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpZ2Z2Z3lveGF4YnJ3dWRqYXphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1MTQyNjcsImV4cCI6MjA4NzA5MDI2N30.8rDD9AXPeIKj3n7NePqxMvzZGZ-BwMPviJbREzmvV5s";

export const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
