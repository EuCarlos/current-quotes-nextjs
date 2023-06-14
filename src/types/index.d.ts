interface ICurrencyQuotes {
    code: string
    name: string
    high: string
    low: string
    pctChange: string
    timestamp: string
}

interface ICurrency {
    code: string;
    codein: string;
    name: string;
    high: string;
    low: string;
    varBid: string;
    pctChange: string;
    bid: string;
    ask: string;
    timestamp: string;
    create_date: string;
}

enum CountriesFlag {
    "USD" = "🇺🇸",
    "USDT" = "🇺🇸",
    "CAD" = "",
    "GBP" = "",
    "ARS" = "",
    "BTC" = "",
    "LTC" = "",
    "EUR" = "",
    "JPY" = "",
    "CHF" = "",
    "AUD" = "",
    "CNY" = "",
    "ILS" = "",
    "ETH" = "",
    "XRP" = "",
    "DOGE" = "",
    "BRA" = ""
}

type CountriesFlagProps = keyof typeof CountriesFlag;

interface ICountryFlag {
    flag: CountriesFlagProps
}
