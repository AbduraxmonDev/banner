import Logo from "./logo.svg";
import "./App.css";

function App() {
  function showMenu() {
    let header = document.querySelector(".header");
    header.classList.toggle("open");
  }
  window.addEventListener('resize', function () {
    let element = document.querySelector('.header');
    if (window.innerWidth > 845) {
      element.classList.remove('open');
    }
  });

  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') {
        document.querySelector(".header").classList.remove("open")
    }
}) ;

  return (
    <div className="wrapper">
      <header className="header">
        <div className="container">
          <div className="header__container">
            <div className="header__left">
              <a href="dhdhd">
                <img src={Logo} alt="logo" className="header__logo" />
              </a>
            </div>
            <div className="header__center">
              <nav className="navbar">
                <a className="navbar__link" href="asdf">
                  Home
                </a>
                <a className="navbar__link" href="asdf">
                  Programmes
                </a>
                <a className="navbar__link" href="asdf">
                  Faculty
                </a>
                <a className="navbar__link" href="asdf">
                  Infrastructure
                </a>
                <a className="navbar__link" href="asdf">
                  Events
                </a>
                <a className="navbar__link" href="asdf">
                  Placement
                </a>
                <a className="navbar__link" href="asdf">
                  Contact
                </a>
              </nav>
            </div>
            <div className="header__right">
              <button className="hamburger" onClick={showMenu}>
                <span className="hamburger__item"></span>
                <span className="hamburger__item"></span>
                <span className="hamburger__item"></span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <section className="banner">
          <div className="container">
            <div className="banner__container">
              <h1 className="banner__title">
                Your Law College name Building a Centre of excellence in Legal
                Education
              </h1>
              <p className="banner__text">
                Programmes Approved by Bar Council of Your Country
              </p>
              <button className="banner__button">Enroll Now</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
