import { useCryptoStore } from "../store"
import { currencies } from "../data"
import { useState } from "react"
import { Pair } from "../types"
import { ChangeEvent } from "react"

const CriptoSearchForm = () => {
    const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies)
    const [pair, setPair] = useState<Pair>({
        currency: '',
        criptocurrency: ''
    })

    const handleChange = (e: ChangeEvent<HTMLSelectElement>)=>{
        setPair({
            ...pair,
            [e.target.name] : e.target.value
        })
    }

    return (
        <form
            action=""
            className="form"
        >
            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select
                    name="currency"
                    id="currency"
                    onChange={handleChange}
                >
                    <option value="">--Seleccione--</option>
                    {currencies.map(currency => 
                        <option key={currency.code} value={currency.code}>{currency.name}</option>
                    )}
                </select>
            </div>

            <div className="field">
                <label htmlFor="criptocurrency">Criptomoneda:</label>
                <select
                    name="criptocurrency"
                    id="criptocurrency"
                    onChange={handleChange}
                >
                    <option value="">--Seleccione--</option>
                    {cryptocurrencies.map(crypto => (
                        <option 
                            value={crypto.CoinInfo.FullName}
                            key={crypto.CoinInfo.Name}
                        >{crypto.CoinInfo.FullName}</option>
                    ))}
                </select>
            </div>

            <input type="submit" value='cotizar'/>
        </form>
    )
}

export default CriptoSearchForm