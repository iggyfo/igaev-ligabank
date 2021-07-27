import React from "react";
import {useSelector} from "react-redux";
import ConversionOperation from "./conversion-operation";

const History = () => {
    const {conversationDate} = useSelector((state) => state.DATA);

    return (
        <section className="history">
            <h3 className="history__title">История конвертация</h3>
            <ul className="history__list">
                {conversationDate.map((conversationDate) =>
                    <ConversionOperation
                        key={conversationDate.id}
                        conversationDate={conversationDate}
                    />)}
            </ul>
            <button className="history__clear button-prm">Очистить историю</button>
        </section>
    )
}

export default History
