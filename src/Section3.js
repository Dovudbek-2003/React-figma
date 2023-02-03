import Section3Img1 from "./img/clock.png"
import Section3Img2 from "./img/woman.png"

function Section3(){
    return(
        <>
        <section className="main-section3">
            <div className="section3 container">
                <div className="box1">
                    <div className="info">
                        <h1 id="main-title">Easy to use, advanced <br /> Estimates editor</h1>
                        <p id="main-text">Our easy to use, advenced editor will help you create <br /> estimates faster, confident and without any errors.</p>
                    </div>
                    <div className="img">
                        <img src={Section3Img1} alt="" />
                    </div>
                </div>
                <div className="box2">
                    <div className="img">
                        <img src={Section3Img2} alt="" />
                    </div>
                    <div className="info right">
                        <h1 id="main-title">Hourly rates, item <br /> and services lists</h1>
                        <p id="main-text">Our easy to use, advenced editor will help you create <br /> estimates faster, confident and without any errors.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
};
export default Section3;