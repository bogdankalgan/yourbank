import {describe, it, expect, vi, beforeEach} from "vitest"
import {fetchRates} from "./fetchRates.js"

describe("fetchRates", () => {
    beforeEach(() => {
        vi.restoreAllMocks()
    })

    it("returns rates on successful fetch", async () => {
        const mockRates = {USD: 1, EUR: 0.85, INR: 83.12}
        vi.stubGlobal("fetch", vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve({rates: mockRates}),
            })
        ))

        const rates = await fetchRates("USD")
        expect(rates).toEqual(mockRates)
        expect(fetch).toHaveBeenCalledWith(expect.stringContaining("/USD"))
    })

    it("returns null on HTTP error", async () => {
        vi.stubGlobal("fetch", vi.fn(() =>
            Promise.resolve({ok: false, status: 500})
        ))

        const rates = await fetchRates("USD")
        expect(rates).toBeNull()
    })

    it("returns null on network error", async () => {
        vi.stubGlobal("fetch", vi.fn(() =>
            Promise.reject(new Error("Network error"))
        ))

        const rates = await fetchRates("USD")
        expect(rates).toBeNull()
    })
})
