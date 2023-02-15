export default function SkillsPage() {
    return (
        <section className="section" id="skills">
            <h4>Skills...</h4>
            <div className="container-skills">
                <div className="skill-container">
                    <div className="skill-title">
                        <span className="material-symbols-outlined">
                            developer_mode
                        </span>
                        <p>Frontend</p>
                    </div>
                    <div className="skill-text">
                        <ul>
                            <li>Html</li>
                            <li>Css</li>
                            <li>JavaScript</li>
                            <li>Bootstrap</li>
                            <li>Sass</li>
                            <li>React</li>
                            <li>Typescript</li>
                        </ul>
                    </div>
                </div>
                <div className="skill-container">
                    <div className="skill-title">
                        <span className="material-symbols-outlined">
                            dns
                        </span>
                        <p>Backend</p>
                    </div>
                        <div className="skill-text">
                            <ul>
                                <li>Ruby</li>
                                <li>Ruby on Rails</li>
                                <li>Mysql</li>
                                <li>Git</li>
                                <li>Terminal</li>
                                <li>Linux</li>
                            </ul>
                        </div>
                    </div>
            </div>
        </section>
    )
}