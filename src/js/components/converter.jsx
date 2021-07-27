import React, {useRef, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {conversationDate, loadQuotes} from "../store/action";
// import {fetchQuotes} from "../store/api-actions";
import {RESPONSE} from "../mock/mock";
import LoadingScreen from "./loading-screen";
import dayjs from "dayjs";
import {nanoid} from "@reduxjs/toolkit";


const Converter = () => {
    const AMOUNT_HAVE_NAME = "amount-have";
    const CURRENCY_HAVE_NAME = "currency-have";

    const {quotes} = useSelector((state) => state.DATA);
    const [amountHave, setAmountHave] = useState(null);
    const [amountWant, setAmountWant] = useState(null);
    const [currencyHave, setCurrencyHave] = useState(`RUB`);
    const [currencyWant, setCurrencyWant] = useState(`USD`);

    const dispatch = useDispatch();
    const formRef = useRef();
    const amountHaveRef = useRef();
    const amountWantRef = useRef();

    useEffect(() => {
        if (!quotes) {
            // dispatch(fetchQuotes());
            dispatch(loadQuotes(RESPONSE))
        }
    }); //при запросе с сервера - [quotes]

    if (quotes === null) {
        return (
            <LoadingScreen />
        );
    }

    const handleAmountInput = (evt) => {
        if (evt.target.name === AMOUNT_HAVE_NAME) {
            currencyHave === currencyWant
                ? amountWantRef.current.value = evt.target.value
                : amountWantRef.current.value = (evt.target.value * RESPONSE[currencyHave + currencyWant]).toFixed(3);
            setAmountHave(evt.target.value);
            setAmountWant(amountWantRef.current.value);
        } else {
            currencyHave === currencyWant
                ? amountHaveRef.current.value = evt.target.value
                : amountHaveRef.current.value = (evt.target.value * RESPONSE[currencyWant + currencyHave]).toFixed(3);
            setAmountWant(evt.target.value);
            setAmountHave(amountHaveRef.current.value);
        }
    };

    const handleCurrencyInput = (evt) => {
        if (evt.target.name === CURRENCY_HAVE_NAME) {
            setCurrencyHave(evt.target.value);
            currencyWant === evt.target.value
                ? amountHaveRef.current.value = amountWant
                : amountHaveRef.current.value = (Number(amountWant) * RESPONSE[currencyWant + evt.target.value]).toFixed(3)
            setAmountHave(amountHaveRef.current.value);
        } else {
            setCurrencyWant(evt.target.value);
            currencyHave === evt.target.value
                ? amountWantRef.current.value = amountHave
                : amountWantRef.current.value = (Number(amountHave) * RESPONSE[currencyHave + evt.target.value]).toFixed(3)
            console.log(Number(amountHave))
            console.log(RESPONSE[evt.target.value + currencyHave])
            setAmountWant(amountWantRef.current.value);
        }
    }

    const handleConversionSubmit = (evt) => {
        evt.preventDefault();
        const date = dayjs().format('YYYY-MM-DDTHH:mm:ss');
        const id = nanoid();
        dispatch(conversationDate({
            id,
            date,
            amountHave,
            currencyHave,
            amountWant,
            currencyWant
        }));
        formRef.current.reset();
    };

    return (
        <section className="converter">
            <h2 className="converter__title">Конвертер валют</h2>
            <form className="form" action="#" method="get" onSubmit={handleConversionSubmit} ref={formRef}>
                <div className="form__input-container">
                    <label htmlFor="amount-have" aria-label="Средства которые есть">У меня есть</label>
                    <div className="form__input">
                        <input
                            className="form__amount"
                            id="amount-have"
                            type="text"
                            name="amount-have"
                            onInput={handleAmountInput}
                            ref={amountHaveRef}
                        />
                        <select className="form__select" name="currency-have" onChange={handleCurrencyInput}>
                            <option value="RUB">RUB</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="CNY">CNY</option>
                        </select>
                    </div>
                </div>
                <div className="form__arrows">
                    <svg width={56} height={36} viewBox="0 0 56 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 1L3 9L19 17" stroke="#1F1E25" strokeWidth={2}/>
                        <path d="M3 9C9.66667 9 33.3241 9 44.6667 9L53 9" stroke="#1F1E25" strokeWidth={2}/>
                        <path d="M37 35L53 27L37 19" stroke="#1F1E25" strokeWidth={2}/>
                        <path d="M53 27C46.3333 27 22.6759 27 11.3333 27H3" stroke="#1F1E25" strokeWidth={2}/>
                    </svg>
                </div>
                <div className="form__input-container">
                    <label htmlFor="amount-want" aria-label="Средства которые хочу приобрести">Хочу
                        приобрести</label>
                    <div className="form__input">
                        <input
                            className="form__amount"
                            id="amount-want"
                            type="text"
                            name="amount-want"
                            onInput={handleAmountInput}
                            ref={amountWantRef}
                        />
                        <select className="form__select" name="currency-want" defaultValue={"USD"} onChange={handleCurrencyInput}>
                            <option value="RUB">RUB</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="CNY">CNY</option>
                        </select>
                    </div>
                </div>
                <div className="form__input-container">
                    <div className="form__input">
                        <input className="form__amount" id="calendar" type="text" name="calendar"/>
                        <span className="form__amount--calendar"/>
                    </div>
                </div>
                <button className="form__submit button-prm" type="submit">Сохранить результат</button>
            </form>
        </section>
    )
}

export default Converter
