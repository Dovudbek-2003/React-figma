function Section6() {
    const section6Card = [
        {subTitle: 'Starter', title: 'Free',},
        {subTitle: 'Standard', title: '$20',},
        {subTitle: 'Professional', title: '$50',}
    ]
    return (
        <>
            <section className="main-section6">
                <div className="section6 container">
                    <div className="section6-header">
                        <div>
                            <h1 id="main-title" className="section6-title">Our pricing</h1>
                            <div className="line"></div>
                        </div>
                        <div className="day">
                            <button>Monthly</button>
                            Yearly
                        </div>
                    </div>
                    <div className="section6-cards">
                       {section6Card.map((item, index)=>{
                        return(
                            <div className="card" key={index}>
                            <h3 className="card-sub-title">{item.subTitle}</h3>
                            <h1 className="card-title">{item.title}</h1>
                            <div className="card-btn">
                                <button>Get started</button>
                            </div>
                            <h5 className="card-sup-title">1 Team users</h5>
                            <h5 className="card-sup-title">3 Estimates</h5>
                            <h5 className="card-sup-title">Estimatesguru watermark</h5>
                        </div>
                        )
                       })}
                    </div>
                    <div className="main-btn section6-btn">
                        <button>Compare options</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section6;