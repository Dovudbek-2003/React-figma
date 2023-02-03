import "./index.css"
import "./media.css"
import Logo from "./img/logo.png"
function MyFigma() {

    let exit = document.querySelector('.exit'),
    menu = document.querySelector('.menu'),
    ul = document.querySelector('.main-nav-items');
    const section = document.querySelectorAll('section');

  function menuFun(){
    ul.classList.toggle('active')
    section.map((item)=>{
        console.log(item);
    })     
  }

  function exitFun(){
    ul.classList.toggle('active')
  }

    return (
        <>
            <nav className="main-nav container">
                <div className="log">
                    <img src={Logo} alt="" />
                </div>
                <ul className="main-nav-items active">
                    <div>
                    <i className="fa-sharp fa-solid fa-xmark menu" onClick={menuFun}></i>
                    </div>
                    <li className="nav-itam active"><a href="#">Home</a></li>
                    <li className="nav-itam"><a href="#">Pricing</a></li>
                    <li className="nav-itam"><a href="#">Templates</a></li>
                    <li className="nav-itam"><a href="#">Blog</a></li>
                    <li className="nav-itam"><a href="#">Cases</a></li>
                </ul>
                <div className="btns-box">
                    <button className="btn1">Sing Up</button>
                    <button className="btn2">Log in</button>
                </div>
                <i className="fa-solid fa-bars exit" onClick={exitFun}></i>
            </nav>
        </>
    )
}

export default MyFigma;