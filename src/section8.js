import Section8Img1 from "./img/section8.png"
import Section8Img2 from "./img/section8 (2).png"
import Section8Img3 from "./img/section8 (3).png"

function Section8() {
    const section8Card = [
        { img: Section8Img1, title: 'Как настроить виджет «Сметы с Estimates.guru» для интеграции с amoCRM?', suptitle: 'Интеграция с Estimates.guru позволяет создавать сметы прямо на странице сделки amoCRM...' },
        { img: Section8Img2, title: 'Как составить смету на разра-ботку сайта для клиента с сер-висом быстрых смет', suptitle: 'Благодаря нашему сервису, вы сможете значительно сократить затраты времени на эту работу.' },
        { img: Section8Img3, title: 'Быстрый онлайн расчет строительной сметы c сервисом Estimates.guru', suptitle: 'Сервис Estimates.guru поможет вам быстро выполнить расчет строительной сметы, добавить все необходимые услуги и цены.' }
    ]

    return (
        <>
            <section className="main-section8">
                <div className="section8 container">
                    <div className="section8-header">
                        <h1 id="main-title">Our blog</h1>
                        <div className="section8-btns">
                            <button className="left"><i className="fa-solid fa-arrow-left"></i></button>
                            <button className="right active"><i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="section8-cards">
                        {section8Card.map((item, index) => {
                            return (
                                <div className="section8-card" key={index}>
                                    <div className="section8-card__img">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <h4 className="card-dey">22 June 2022</h4>
                                    <h1 className="section8-card-title">{item.title}</h1>
                                    <p className="section8-card-suptitle">{item.suptitle}</p>
                                    <a href="#" className="card-link">Read more</a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Section8;