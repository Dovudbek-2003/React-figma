import Logo1 from "./img/logo_1.png"

function Section10() {

    return (
        <>
            <section className="main-section10">
                <div className="section10 container">
                    <div className="section10-box1">
                        <h1 id="main-title">Our customers</h1>
                        <div className="section10-main__text">
                        <p id="main-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan, totam rem aperiam.</p>
                        </div>
                        <div className="section9-img__container">
                            <img src={Logo1} alt="" />
                            <img src={Logo1} alt="" />
                            <img src={Logo1} alt="" />
                            <img src={Logo1} alt="" />
                            <img src={Logo1} alt="" />
                            <img src={Logo1} alt="" />
                        </div>
                        <div className="section9-title">
                            <h1 id="main-title"></h1>
                        </div>
                    
                    </div>
                    <div className="section10-box2">
                        <h1 id="main-title">Frequently asked questions</h1>
                        <div className="section10-container">
                            <h4 className="h4 active">How to change the status of an estimate?</h4>
                            <h4 className="h4"></h4>
                            <h4 className="h4"></h4>
                            <h4 className="h4"></h4>
                            <h4 className="h4"></h4>
                            <h4 className="h4"></h4>
                            <h4 className="h4"></h4>
                        </div>
                        <div className="section10-card">
                            <h2 className="h2">Lists of goods and services</h2>
                            <span>+</span>
                        </div>
                        <div className="section10-card">
                            <h2 className="h2">Lists of goods and services</h2>
                            <span>+</span>
                        </div>
                        <div className="section10-card">
                            <h2 className="h2">Lists of goods and services</h2>
                            <span>+</span>
                        </div>
                        <div className="section10-card">
                            <h2 className="h2">Lists of goods and services</h2>
                            <span>+</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section10;