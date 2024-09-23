import "./css/introduce.css"

function Introduce(){
    return (
        <section className="section-introduce">
            <div className="container-introduce">
                <h3 className="font-special">
                    Quer me conhecer?
                </h3>
                <p>
                Sou um jovem apaixonado por tecnologia e inovação. 
                Gosto de criar soluções práticas e eficientes para os desafios 
                do dia a dia, sempre buscando melhorar minhas habilidades e acompanhar as 
                tendências do mercado. A tecnologia me fascina porque permite transformar ideias em 
                realidade, facilitando a vida das pessoas e conectando o mundo de maneiras inimagináveis. 
                Adoro explorar novas ferramentas e metodologias para aprimorar meu trabalho e 
                entregar projetos que fazem a diferença.
                </p>
            </div>
            <div>
                <iframe width="560" height="315" className="iframe-youtube" src="https://www.youtube.com/embed/gcNfQ5KEpCA?si=3E4qequnc4JCg_9i" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </div>
        </section>
    )
}

export default Introduce