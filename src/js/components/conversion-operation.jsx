const ConversionOperation = ({date, amount, currency}) => {
    return (
        <li className="history__item">
            <time className="history__item-date" dateTime="2020-11-25">25.11.2020</time>
            <span className="history__item-amount">1000 RUB</span>
            <svg width={41} height={18} viewBox="0 0 41 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.2 17L40 9L27.2 1" stroke="#1F1E25"/>
                <path d="M40 9C34.6667 9 15.7407 9 6.66667 9H0" stroke="#1F1E25"/>
            </svg>
            <span className="history__item-currency">13,1234 USD</span>
        </li>
    )
}
export default ConversionOperation
