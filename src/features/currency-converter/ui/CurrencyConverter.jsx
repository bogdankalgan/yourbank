import {useEffect, useState} from "react";

import {currencies} from "@/shared/config/currencies.js";
import {fetchRates} from "../api/fetchRates.js";

function CurrencySelect({value, onChange, currencies}) {
    const selected = currencies.find(c => c.code === value)

    return (
        <div className="p-4 border-b border-r border-grey-15">
            <select value={value} onChange={(e) => onChange(e.target.value)} aria-label="Select currency" className="text-white text-base font-normal leading-6 appearance-none focus-visible:outline-0">
                {currencies.map(c => (
                    <option key={c.code} value={c.code} className="flex gap-2">
                        {c.flag} {c.code}
                    </option>
                ))}
            </select>
            <p>{selected?.name}</p>
        </div>
    )
}

function CurrencyInput({placeholder, value, onChange, readOnly, label}) {
    return (
        <div className="px-6 py-4 border-r border-grey-15">
            <input type="number" placeholder={placeholder} value={value} onChange={(e) => onChange?.(e.target.value)} aria-label={label} className="text-white focus-visible:outline-0" readOnly={readOnly}/>
        </div>
    )
}

export default function CurrencyConverter() {
    const [fromCode, setFromCode] = useState("INR")
    const [toCode, setToCode] = useState("USD")
    const [amount, setAmount] = useState("")
    const [result, setResult] = useState("")
    const [rates, setRates] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let cancelled = false
        fetchRates("USD")
            .then(data => {
                if (cancelled) return
                if (data) {
                    setRates(data)
                } else {
                    setError("Failed to load exchange rates")
                }
            })
            .finally(() => {
                if (!cancelled) setLoading(false)
            })
        return () => { cancelled = true }
    }, [])

    function handleExchange(){
        if(!amount || !rates[fromCode] || !rates[toCode])
            return

        setResult(((amount * rates[toCode]) / rates[fromCode]).toFixed(2))
    }

    return (
        <div className="flex flex-col gap-7">
            <div className="grid grid-cols-2 bg-grey-11 rounded-xl border border-grey-15">
                <CurrencySelect value={fromCode} onChange={setFromCode} currencies={currencies}/>
                <CurrencySelect value={toCode} onChange={setToCode} currencies={currencies}/>
                <CurrencyInput placeholder="5.000" value={amount} onChange={setAmount} label="Amount to convert"/>
                <CurrencyInput placeholder="12.00" value={result} onChange={setResult} readOnly label="Converted amount"/>
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button onClick={handleExchange} disabled={loading} className="w-full text-green-65 bg-green-btn rounded-full px-6 py-3 transition duration-300 hover:bg-green-60 hover:text-green-btn active:bg-green-btn active:text-green-60 disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? "Loading rates..." : "Exchange"}
            </button>
        </div>
    )
}
