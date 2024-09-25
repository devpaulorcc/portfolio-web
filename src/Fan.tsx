import "./css/fan.css";

function Fan({ works = 0 , experience = 0, certificate = 0}) {
    return (
        <section className="section-fan">
            <div className="div-works">
                <p>{works}</p>
                <h4>TRABALHOS <br /> COMPLETOS</h4>
            </div>
            <div>
                <p>{experience}</p>
                <h4>ANOS DE  <br />EXPERIÊNCIA</h4>
            </div>

            <div>
                <p>{certificate}</p>
                <h4>CERTIFICADOS</h4>
            </div>
        </section>
    );
}

export default Fan;
