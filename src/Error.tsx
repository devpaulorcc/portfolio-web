import "./css/error.css";

function Error() {
    return (
        <section className="section-center ">
            <h1 className="font-large font-special">Página não encontrada 404</h1>
            <a href="/" >
                <button className="button-special">
                    Ir para início
                </button>
            </a>
        </section>
    );
}

export default Error;