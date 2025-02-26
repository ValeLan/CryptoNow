import { useMemo } from "react"
import { useCryptoStore } from "../store"
import Spinner from './spinner/Spinner'


const CryptoPriceDisplay = () => {

    const result = useCryptoStore((state) => state.result)
    const loading = useCryptoStore((state) => state.loading)
    const hasValue = useMemo(() => !Object.values(result).includes(''), [result])

    return (
        <div className="result-wrapper">
            {loading ? <Spinner/> : hasValue && (
                <>
                    <h2>Cotización</h2>
                    <div className="result">
                        <img
                            src={`https://cryptocompare.com/${result.IMAGEURL}`}
                            alt="Imagen Cryptomoneda"
                        />
                        <div>
                            <p>El precio es de: <span>{result.PRICE}</span></p>
                            <p>Precio más alto del día: <span>{result.HIGHDAY}</span></p>
                            <p>Precio más bajo del día: <span>{result.LOWDAY}</span></p>
                            <p>Variación últimas 24hs: <span>{result.CHANGEPCT24HOUR}</span></p>
                            <p>Última actualización: <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>
            )}

        </div>
    )
}

export default CryptoPriceDisplay