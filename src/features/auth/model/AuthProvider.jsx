import {useState, useEffect} from "react";
import {supabase} from "@/shared/config/supabase.js";
import {AuthContext} from "./AuthContext.js";

export function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const logout = async () => {
        await supabase.auth.signOut()
    }

    useEffect(  () => {
        supabase.auth.getSession().then(({data: {session}}) => {
            setUser(session?.user ?? null)
            setLoading(false)
        })

        const {data: {subscription}} = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null)
        })

        return () => subscription.unsubscribe()
    }, [])



    return (
        <AuthContext.Provider value={{user, loading, logout}}>
            {children}
        </AuthContext.Provider>
    )
}