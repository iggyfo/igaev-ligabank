import {Link} from "react-router-dom";
import Converter from "./converter";
import History from "./history";

const Main = () => {
    return (
        <main>
            <section className="promo container">
                <div className="promo__info">
                    <h1 className="promo__title">Лига Банк</h1>
                    <p className="promo__tagline">Кредиты на любой случай</p>
                    <Link className="promo__link" to="">Рассчитать кредит</Link>
                </div>
                <div className="promo__cards">
                    <img className="promo__cards--black" src="./img/black-card.png"
                         alt="Кредитная карта черного цвета"/>
                    <img className="promo__cards--white" src="./img/white-card.png" alt="Кредитная карта белого цвета"/>
                </div>
            </section>
            <Converter />
            <History />
        </main>
    )
}

export default Main;
