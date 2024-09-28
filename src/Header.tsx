import './css/reset.css'
import './css/header.css'
import myLogo from './img/logo.svg';
import Theme from './Theme';

function Header() {

  return (
    <>
      <header>
        <div className='div-logo'>
          <a href="/">
            <img src={myLogo} alt="Minha logo" className='logo-img'/>
            <h2 className='font-special title-header'>Paulo R.</h2>
          </a>
        </div>
          <nav>
            <ul className='font-white ul'>
              <li>
                <a href="/">
                  Inicial
                </a>
              </li>
              <li>
                <a href="/orcamentos">
                  Orçamento
                </a>
              </li>
              <li>
                <a href="https://wa.me/5511940239903" target="_blank">
                  <button className='button-special'>
                    Entre em Contato
                  </button>
                </a>
              </li>
              <li>
                <Theme />
              </li>
            </ul>
          </nav>
      </header>
    </>
  )
}

export default Header
