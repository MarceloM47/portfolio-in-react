export default function AboutPage() {
    return (
        <section className="section" id="about">
        <div className="about">
            <div className="about-img-holder">
                <img src="/marcelo.jpg" className="about-img" alt="Fotografía de Marcelo"/>
            </div>
            <div className="about-caption">
                <p>¿Quién soy?</p>
                <h3>Sobre mí</h3>
                <p>
                    Mi nombre es Marcelo Morinigo, Soy Programador web y estoy en el último año del Bachillerato técnico en informática; me apasiona la programación y el mundo de la informática en general.           
                </p>
                <a href="/Curriculum Marcelo Morinigo.pdf" download="Curriculum Marcelo Morinigo.pdf"><button className="download-btn">Download CV</button></a>
            </div>     
        </div>
    </section>  
    )
}