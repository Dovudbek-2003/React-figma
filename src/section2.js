import card1 from "./img/Vector.png"
import card2 from "./img/Vector (1).png"
import card3 from "./img/Vector (2).png"
function Section2() {
    const card = [
        { img: card1, title: 'Эффект видно сразу', text: 'Сервис не нужно долго изучать — отдел продаж сможет тут же в нём работать.' },
        { img: card2, title: 'Клиенты вас запомнят', text: 'Те, кто с вами работает, будут впечатлены скоростью и качеством  подготовленных смет именно под запрос клиента..' },
        { img: card3, title: 'Продают даже без опыта', text: 'В сервисе есть шаблоны, с помо-щью которых смету подготовит лю-бой новый сотрудник. Без вмеша-тельства руковадителя.' },
        { img: card1, title: 'Вы видите план продаж', text: 'У каждой сметы есть статусы — вы понимаете, как идёт работа у каждого менеджера.' },
        { img: card2, title: 'Рентабельность', text: 'Зарабатываете на каждой сделке. Это просто: ведь рентабельность у вас подсчитывается автоматически' },
        { img: card3, title: 'Подходит всем ', text: 'Вы продаете сами или у вас в подчинении десять продажников? Estimates.guru подойдёт всем.' }
    ]
    return (
        <>
            <section className="main-section2">
                <div className="section2 container">
                    <div className="section2-text">
                        <h1 id="main-title" className="txt-center">For Your Business</h1>
                        <p id="main-text" className="txt-center">Вы сможете с легкостью подготовить коммерческое предложение или сделать смету онлайн <br /> учитывающие потребности клинета</p>
                    </div>
                    <div className="section2-cards">
                        {
                            card.map((item, index) => {
                            return(
                        <>
                            <div className="card" key={index}>
                                <div className="card-img">
                                    <img src={item.img} alt="" />
                                </div>
                                <h3 className="card-title">{item.title}</h3>
                                <p className="card-text">{item.text}</p>
                            </div>
                        </>
                        )
                            })
                       }
                    </div>
                </div>
            </section>
        </>
    )
};

export default Section2;