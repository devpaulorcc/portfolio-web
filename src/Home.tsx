import './css/home.css';
import myImage from './img/profile.png';

function Home() {
  return (
    <>
      <section className="section-main">
        <div className="title-page section-ocupation">
          <h2 className="font-special">Meu nome é Paulo!</h2>
          <p className="font-black">
            <span className="font-special">Impulsionando o futuro com inovação e tecnologia</span>
          </p>
        </div>
        <div className='section-ocupation'>
          <img src={myImage} alt="Profile" id='photo-profile'/>
        </div>
      </section>
    </>
  );
}

export default Home;
