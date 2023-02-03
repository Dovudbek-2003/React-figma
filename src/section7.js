function Section7(){
    return(
        <>
        <section className="main-section7">
            <div className="section7 container">
                <div className="section7-info">
                    <h1 id="main-title">Left questions? Contacts us <br /> now for a free consultation and <br /> free trial!</h1>
                    <p id="main-text">Если у вас остались вопросы или вы хотите получить консультацию <br /> напишите нам и мы поможем вам найти решение. </p>
                    <h5 className="sub-title">Email address</h5>
                    <h3 className="section7-title">Estimatesguru@info.co.us</h3>

                    <h5 className="sub-title">Email address</h5>
                    <h3 className="section7-title">Estimatesguru@info.co.us</h3>
                </div>
                <div className="section7-form">
                    <form action="">
                        <h1 className="form-title">Contact Us</h1>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Andrea" />
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="andrea@gmaol.com" />
                        <label htmlFor="">Theme</label>
                        <input type="text" placeholder="Job" />
                        <label htmlFor="">Message</label>
                        <input type="text" placeholder="Your message" />
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default Section7;