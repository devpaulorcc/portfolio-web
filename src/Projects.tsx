import "./css/projects.css"

import pythonLogo from "./img/python-logo.svg"
import phpLogo from "./img/php-logo.svg"
import reactLogo from "./img/react-logo.svg"

function Projects(){
    return (
        <div className="section-card">
        <h2 className="title-card-language font-special">Projetos e tecnologias que utilizo</h2>
            <section className="section-card-language">
                <a href="https://github.com/devpaulo2077/api_sending_emails" target="_blank">
                    <div className="card-language">
                        <img src={pythonLogo} alt="Logo python" className="icon-logo"/>
                        <div className="card-language-text">
                            <p><span className="card-language-span">Projeto em destaque Python</span></p>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/devpaulo2077/Projeto-CCB" target="_blank">
                    <div className="card-language">
                        <img src={phpLogo} alt="Logo php" className="icon-logo"/>
                        <div className="card-language-text">
                            <p><span className="card-language-span">Projeto em destaque PHP</span></p>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/devpaulo2077/portfolio-web" target="_blank">
                    <div className="card-language">
                        <img src={reactLogo} alt="Logo react" className="icon-logo"/>
                        <div className="card-language-text">
                            <p><span className="card-language-span">Projeto em destaque React.js</span></p>
                        </div>
                    </div>
                </a>
            </section>
        </div>
    )
}

export default Projects;