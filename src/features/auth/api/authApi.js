import {supabase} from "@/shared/config/supabase.js";

export async function signUp({email, password, firstName, lastName}) {
    const {data, error} = await supabase.auth.signUp({email, password, options:{data: {first_name: firstName, last_name: lastName}}})
    return {data, error}
}

export async function login({email, password}) {
    const {data, error} =  await supabase.auth.signInWithPassword({email, password})
    return {data, error}
}

export async function signInWithOAuth({provider}) {
    const {data, error} = await supabase.auth.signInWithOAuth({provider})

    return {data, error}
}
