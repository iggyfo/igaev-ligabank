import React from "react";
import {useDispatch, useSelector} from "react-redux";
import ConversionOperation from "./conversion-operation";
import {clearConversationDate} from "../store/action";

const History = () => {
    const {conversationDate} = useSelector((state) => state.DATA);
    const dispatch = useDispatch();

    const handleClearHistory = () => {
        dispatch(clearConversationDate({}));
    }

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
            <button className="history__clear button-prm" onClick={handleClearHistory}>Очистить историю</button>
        </section>
    )
}

export default History
