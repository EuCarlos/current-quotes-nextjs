export function CountryFlag({ flag }: ICountryFlag) {
    const countriesFlagEnum = {
        "USD": "us",
        "USDT": "us",
        "CAD": "ca",
        "GBP": "gb",
        "ARS": "ar",
        "BTC": "coin",
        "LTC": "ltc",
        "EUR": "eur",
        "JPY": "jp",
        "CHF": "ch",
        "AUD": "au",
        "CNY": "cn",
        "BRA": "br",
        "ILS": "il",
        "ETH": "eth",
        "XRP": "coin",
        "DOGE": "coin"
    }

    return <i 
        className={`fi fi-${countriesFlagEnum[flag]}`} 
        title={flag} 
    />
}