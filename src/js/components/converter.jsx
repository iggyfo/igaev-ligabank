import React, {useRef, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {saveAmountHave, saveCurrencyHave} from "../store/action";
import {fetchQuotes} from "../store/api-actions";
import LoadingScreen from "./loading-screen";
import dayjs from "dayjs";


const Converter = () => {
    const {quotes} = useSelector((state) => state.DATA);

    const dispatch = useDispatch();
    const formRef = useRef();

    console.log(dayjs().format('YYYY-MM-DDTHH:mm:ss'))

    useEffect(() => {
        if (!quotes) {
            dispatch(fetchQuotes());
        }
    }, [quotes]);

    if (quotes === null) {
        return (
            <LoadingScreen />
        );
    }

    const handleAmountHaveInput = (evt) => {
        dispatch(saveAmountHave(evt.target.value));
    };

    const handleCurrencyHaveInput = (evt) => {
        dispatch(saveCurrencyHave(evt.target.value))
    }

    const handleConversionSubmit = (evt) => {
        evt.preventDefault();
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
                            onChange={handleAmountHaveInput}
                        />
                        <select className="form__select" name="currency" onChange={handleCurrencyHaveInput}>
                            <option value="RUB">RUB</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBR">GBR</option>
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
                        <input className="form__amount" id="amount-want" type="text" name="amount-want"/>
                        <select className="form__select" name="currency">
                            <option value="RUB">RUB</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBR">GBR</option>
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
