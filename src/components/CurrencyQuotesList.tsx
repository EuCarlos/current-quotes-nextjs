import { useEffect, useState } from "react";
import { CurrencyQuotes } from "./CurrencyQuotes";
import axios from "axios";

export function CurrencyQuotesList() {
    const URL_COTACAO = "https://economia.awesomeapi.com.br/json/all"

    const [currencyQuotes, setCurrencyQuotes] = useState<ICurrency[]>([])

    useEffect(() => {
        axios
            .get(URL_COTACAO)
            .then(({ data }) => setCurrencyQuotes(Object.values(data)))
            .catch(err => console.log(err));
    }, [])
    
    return <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Cód</th>
                <th scope="col" className="px-6 py-3">Nome</th>
                <th scope="col" className="px-6 py-3">Máx</th>
                <th scope="col" className="px-6 py-3">Min</th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
          </thead>
          <tbody>
            {currencyQuotes.map((item) => <CurrencyQuotes {...item} />)}
        </tbody>
      </table>
  </div>
  
  }