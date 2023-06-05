import React, { useState } from "react";
import '../assets/style.css'

export default function Portfolio() {
    return (
        <section className="hero is-black is-fullheight bg-photo">
        <div className="tile is-ancestor portfolio-block">
            <div className="tile is-parent">
                <article className="tile is-child is-dark portfolio-item">
                    <p className="title">My First Profile Page</p>
                    <p className="subtitle">HTML/CSS</p>
                    <figure className="image project-photo">
                        <a href="https://bsidemyself.github.io/sshackleton-week2-challenge-resubmit/">
                        <img src="../../public/img/1.PNG" alt='project-screenshot'></img>
                        </a>
                        
                      </figure>
                </article>
            </div>
            <div className="tile is-parent">
                <article className="tile is-child is-dark">
                    <p className="title project-title">Password Generator</p>
                    <p className="subtitle">JavaScript</p>
                    <figure className="image project-photo">
                        <a href="https://bsidemyself.github.io/sshackleton_week3_challenge/">
                        <img src="../../public/img/2.PNG" alt='project-screenshot'></img>
                        </a>
                    </figure>
                </article>
            </div>
            <div className="tile is-parent">
                <article className="tile is-child is-dark">
                    <p className="title">Villainous Lair</p>
                    <p className="subtitle">3rd Party API/MVC</p>
                    <p>A D&D Fan Site</p>
                    <figure className="image project-photo">
                        <a href="https://bsidemyself.github.io/Villainous-Lair/">
                        <img src="../../public/img/3.PNG" alt='project-screenshot'></img>
                        </a>
                    </figure>
                </article>
            </div>
            <div className="tile is-parent">
                <article className="tile is-child is-dark">
                    <p className="title">Villainous Quest</p>
                    <p className="subtitle">API/Handlebars</p>
                    <p>A D&D Quest Blog</p>
                    <figure className="image project-photo">
                        <a href="https://villainous-quest.herokuapp.com/">
                        <img src="../../public/img/4.PNG" alt='project-screenshot'></img>
                        </a>
                    </figure>
                </article>
            </div>
            <div className="tile is-parent">
                <article className="tile is-child is-dark">
                    <p className="title">Employee Tracker</p>
                    <p className="subtitle">SQL</p>
                    <figure className="image project-photo">
                        <a href="https://github.com/bsidemyself/sshackleton-week12-challenge">
                        <img src="../../public/img/5.PNG" alt='project-screenshot'></img>
                        </a>
                      </figure>
                </article>
            </div>
            <div className="tile is-parent">
                <article className="tile is-child is-dark">
                    <p className="title">Work Day Scheduler</p>
                    <p className="subtitle">JavaScript/dayJS</p>
                    <figure className="image project-photo">
                        <a href="https://bsidemyself.github.io/sshackleton-week5-challenge/">
                        <img src="../../public/img/6.PNG" alt='project-screenshot'></img>
                        </a>
                      </figure>
                </article>
            </div>
          
        </div>
      </section>
    );
}