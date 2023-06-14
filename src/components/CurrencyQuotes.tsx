export function CurrencyQuotes({ code, name, high, low, pctChange }: ICurrencyQuotes) {
    const porcentageToNumber = +pctChange;
    const result = porcentageToNumber > 0 ? "green" : porcentageToNumber < 0 ? "red" : "gray";
    const colorScheme = `bg-${result}-700 hover:bg-${result}-800 focus:ring-${result}-300 dark:bg-${result}-600 dark:hover:bg-${result}-700 dark:focus:ring-${result}-800`;

    return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {code}
        </th>
        <td className="px-6 py-4">{name}</td>
        <td className="px-6 py-4">{high}</td>
        <td className="px-6 py-4">{low}</td>
        <td className="px-6 py-4">
            <button className={`text-white focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 ${colorScheme}`}>
                {pctChange}%
            </button>
        </td>
    </tr>
}