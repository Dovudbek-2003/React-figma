import Section5Img from "./img/section.png"


function Section5(){
    return(
        <>
        <section className="main-section5">
            <div className="section5 container">
                <h1 id="main-title">See what's inside</h1>
                <p id="main-text" className="txt-center">Удобный и понятный интерфейс который будет помогать вам с самого первого шага. <br /> Нужный шаблон для увелечения продаж без СМС и регистрации</p>
                <div className="section5-img">
                    <img src={Section5Img} alt="" />
                </div>
                <div className="circle">
                    <div className="active"></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Section5;