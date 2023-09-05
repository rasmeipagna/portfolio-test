import React from 'react';
import './intro.css';
// import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span><br />
            <span className="introText">I'm <span className="introName">Pagna Fouilleul</span> <br />Front-End Web Developer</span>
            <p className="introPara">I am a skilled front end web developer with experience in creating user friendly websites.</p>
            <Link><button className="btn"><img src={btnImg} className="btnImg" alt="Hire"/>Hire me</button></Link>
        </div>
        {/* <img src={bg} alt="Profile" className="bg" /> */}
    </section>
  )
}

export default Intro;