import Section1Img from "./img/men.png"


function Section1() {
    return (
        <>
          <div className="section1 container">
          <div className="left">
                <h1 id="main-title">We help sales managers <br /> with no experience sell <br /> more and faster</h1>
                <p id="main-text">Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptatem accusantium doloremque laudantium, totam <br />
                    rem aperiam, eaque ipsa quae ab illo inventore veritatis et <br /> quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div className="main-btn">
                    <button>Get Started</button>
                </div>
            </div>
            <div className="right">
                <img src={Section1Img} alt="" />
            </div>
          </div>
        </>
    );
}

export default Section1;