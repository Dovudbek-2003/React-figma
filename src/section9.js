import Person1 from "./img/001_img_person_1.png"
import Person2 from "./img/001_img_person_1 (1).png"

function Section9() {
    return (
        <>
            <section className="main-section9">
                <div className="section9 container">
                    <div className="section9-header">
                        <div>
                            <h1 id="main-title" className="section6-title section9-title">What our customers say </h1>
                            <div className="line"></div>
                        </div>
                        <div className="section8-btns">
                            <button className="left" id="left9"><i className="fa-solid fa-arrow-left"></i></button>
                            <button className="right active" id="right9"><i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="section9-body">
                        <div className="section9-card">
                            <div className="card-header">
                                <div className="card-img">
                                    <img src={Person1} alt="" />
                                </div>
                                <div className="card-title">
                                    <h4>Alex Bern</h4>
                                    <h6>CEO by PixelPerfect</h6>
                                </div>
                            </div>
                            <div className="card-body">
                                <p>“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” </p>
                            </div>
                        </div>
                        <div className="section9-card">
                            <div className="card-header">
                                <div className="card-img">
                                    <img src={Person2} alt="" />
                                </div>
                                <div className="card-title">
                                    <h4>Alex Bern</h4>
                                    <h6>CEO by PixelPerfect</h6>
                                </div>
                            </div>
                            <div className="card-body">
                                <p>“Ut enim ad minima veniam, quis nostrum exercitationem ullam corpor suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis utem vel eum iure reprehender qui in ea voluptate velit esse quam nihil molesti consequatur, vel illum.” </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section9;