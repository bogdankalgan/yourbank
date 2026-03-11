const API_URL = import.meta.env.VITE_API_URL || "https://open.er-api.com/v6/latest"

export async function fetchRates(baseCurrency) {
    try {
        const res = await fetch(`${API_URL}/${baseCurrency}`)
        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`)
        }
        const data = await res.json()
        return data.rates
    } catch (error) {
        console.error("Failed to fetch exchange rates:", error)
        return null
    }
}
