import flag from '../images/russian.jpeg';


export function Country({ items, isLoading }) {
    return (
        <div className="country__box">
            <img className="country__flag" src={flag} alt="country flag" />
            <div className="country__data">
                <h3 className="country__name">Russia Federation</h3>
                <h4 className="country__region">Krasnodar region</h4>
                <p className="country__row"><span>👫</span>1000000</p>
                <p className="country__row"><span>🗣</span>Russian</p>
                <p className="country__row"><span>💰</span>Ruble</p>
            </div>
        </div>
    )
}

export default Country
