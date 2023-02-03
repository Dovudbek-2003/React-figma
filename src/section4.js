import Section4img1 from "./img/diagram.png"
import Section4img2 from "./img/kalendar.png"

function Section4() {
    return (
        <>
            <section className="main-section4">
                <div className="section4 container">
                    <div className="section4-box1">
                        <div className="section4-info">
                            <h1 id="main-title">Get Business <br /> Performance Insights</h1>
                            <p id="main-text">Keep track of how many estimates you have created, and <br /> how much have been approved by client.</p>
                            <p id="main-text"> You can also compare your performances from month to <br /> month, quarter to quarter, or annual to annual.</p>
                        </div>
                        <div className="section4-img">
                            <img src={Section4img1} alt="" />
                        </div>
                    </div>
                    <div className="section4-box2">
                        <div className="section4-img">
                            <img src={Section4img2} alt="" />
                        </div>
                        <div className="section4-info">
                            <h1 id="main-title">Estimate Templates</h1>
                            <p id="main-text">Selection of professionally designed templates.br <br />
                                Upload your logo, select matching color, and you are ready <br /> to go.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Section4;