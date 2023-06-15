interface ICurrencyQuotes {
    code: CountriesFlagProps
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

enum CountriesFlagEnum {
    "USD" = "us",
    "USDT" = "us",
    "CAD" = "ca",
    "GBP" = "gb",
    "ARS" = "ar",
    "BTC" = "coin",
    "LTC" = "ltc",
    "EUR" = "eur",
    "JPY" = "jp",
    "CHF" = "ch",
    "AUD" = "au",
    "CNY" = "cn",
    "BRA" = "br",
    "ILS" = "il",
    "ETH" = "eth",
    "XRP" = "coin",
    "DOGE" = "coin"
}

type CountriesFlagProps = keyof typeof CountriesFlagEnum;

interface ICountryFlag {
    flag: CountriesFlagProps
}
