  
import React from 'react'
import "./home.css"


function Home() {
    return (
        <div className="home">
            <div className="home__banner">
                <h1><strong>PERSONAL PORTFOLIO</strong></h1>
            </div>
            <div className="home__subBanner">
                <p>Junior Software Engineer</p>
            </div>
            <div className="home__content" id="proyectos">

                <div className="home__content__title">
                    <h2>DEVELOPED PROJECTS</h2>
                </div>

                <div className="home__content__clusters">
                    <div>
                        <a href="https://github.com/panyu1512/estimaElqueFas-with-PHP">
                            <h3>Estima el que fas with PHP</h3>
                        </a>
                    </div>

                    <div>
                        <a href="https://github.com/panyu1512/estimaelquefas-with-Django">
                            <h3>Estima el que fas with Django</h3>
                        </a>
                    </div>

                    <div>
                        <a href="https://github.com/panyu1512/Garbage-Detector">
                            <h3>Garbage detector AI</h3>
                        </a>
                    </div>

                    <div>
                        <a href="https://github.com/panyu1512/photo4filmyou">
                            <h3>Photo4filmyou using Java EE</h3>
                        </a>
                    </div>

                    <div>
                        <a href="https://github.com/panyu1512/firstSmartContract">
                            <h3>Testing smart contracts</h3>
                        </a>
                    </div>

                    <div>
                        <a href="https://github.com/panyu1512/GalletosAdventures-Platform2DGame">
                            <h3>Platform 2D Game</h3>
                        </a>
                    </div>

                </div>

            </div>
            <hr/>
        </div>
    )
}

export default Home