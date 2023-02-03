import FooterLogo from "./img/Group 41.png"
import FooterImg from "./img/footerImg.png"

function Footer() {
    return (
        <>
            <footer className="main-footer">
                <div className="footer container">
                    <div className="footer-logo">
                        <div className="footer-img">
                            <img src={FooterLogo} alt="" />
                        </div>
                        <p className="footer-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore </p>
                        <div className="footer-icon">
                            <img src={FooterImg} alt="" />
                            <img src={FooterImg} alt="" />
                            <img src={FooterImg} alt="" />
                            <img src={FooterImg} alt="" />
                            <img src={FooterImg} alt="" />
                            <img src={FooterImg} alt="" />
                        </div>
                    </div>
                    <div className="service">
                        <h1 className="footer-title">Service</h1>
                        <a href="#">Home</a>
                        <a href="#">Pricing</a>
                        <a href="#">Templates</a>
                        <a href="#">Templates</a>
                    </div>
                    <div className="about-us">
                    <h1 className="footer-title">About us</h1>
                    <a href="#">Team</a>
                    <a href="#">Blog</a>
                    <a href="#">FAQ</a>
                    </div>
                    <div className="cantact">
                    <h1 className="footer-title">Cantact</h1>
                    <a href="#">Estimatesguru@info.co.us</a>
                    <a href="#">+7 903-118-1515</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;