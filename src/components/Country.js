

export function Country({ items, isLoading }) {
    return isLoading ? (<h1>Loading...</h1>) : (
        <section className="country__container">
            {items.map((item, i) => (
                <div className="country__box">
                    <img className="country__flag" src={item[0].flag} alt="country flag" />
                    <div key={i} className="country__data" >
                        <h3 className="country__name">{item[0].name}</h3>
                        <h4 className="country__region">{item[0].region}</h4>
                        <p className="country__row"><span>👫</span>{(+item[0].population / 1000000).toFixed(2)} people</p>
                        <p className="country__row"><span>🗣</span>{item[0].languages[0].name}</p>
                        <p className="country__row"><span>💰</span>{item[0].currencies[0].name}</p>
                    </div>
                </div >
            ))}
        </section>
    )
}


{/* <img className="country__flag" src={flag} alt="country flag" />
<div className="country__data">
    <h3 className="country__name">Russia Federation</h3>
    <h4 className="country__region">Krasnodar region</h4>
    <p className="country__row"><span>👫</span>1000000</p>
    <p className="country__row"><span>🗣</span>Russian</p>
    <p className="country__row"><span>💰</span>Ruble</p>
</div> */}

export default Country
