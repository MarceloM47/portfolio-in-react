import { Link } from "react-router-dom"

export default function HomePage() {

    return (
        
        <section id="title">
        <div className="title-c">
            <p>Hola!</p>
            <h1>
                Marcelo Morinigo
            </h1>
            <h2>Desarrollador <span>Frontend</span></h2>
        </div>
        <div className="btn">
            <Link to="/about"><button className="about-btn">Conóceme</button></Link>
        </div>

        <div className="redes">
            <a className="red" target={"_blank"} rel="noreferrer" href="https://github.com/marcelom47"><img src="/svg/github.svg" alt="github"/></a>
            <a className="red" target={"_blank"} rel="noreferrer" href="https://www.linkedin.com/in/marcelo-morinigo-74808b213/"><img src="/svg/linkedin.svg" alt="linkedin"/></a>
            <a className="red" target={"_blank"} rel="noreferrer" href="mailto:morinigomarcelo40@gmail.com"><img src="/svg/mail.svg" alt="mail"/></a>
        </div>
        </section>
    )
}