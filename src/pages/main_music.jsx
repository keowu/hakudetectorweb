import React from 'react';
import paimon_icon from '../img/img.gif';
import musica from '../mp3/music.mp3';
import musica2 from '../mp3/music2.mp3';
import { Link } from 'react-router-dom';

class Music_Download extends React.Component{

    constructor(props){
        super(props);

        this.playmusic = this.playmusic.bind(this);
    }


    playmusic(){
       let rand = (Math.floor(Math.random() * 10) )%2;
       let music = (rand===0)?new Audio(musica):new Audio(musica2);
       music.addEventListener('ended', ()=> {
        music.currentTime = 0;
        music.play();
        }, false);
       music.play();
    }


    render(){
        return(
            <div>
                <div className="container_main">
                    <div className="child_container_main">
                        <img src={paimon_icon} alt="Haku detector mascot" title="Paimon"></img>
                        <h1>HakuDetector</h1>
                        <p>Before proceeding, you must agree to our non-liability policies for any misuse of our tool.</p>
                        <div className="child_container_main_btn">
                            <Link className="accept" to="/HakuDetector" onClick={this.playmusic}>I agree</Link>
                        </div>
                    </div>

                    <div className="list">
                        <ul>
                            <li><Link to="Terms">Terms of use</Link></li>
                            <li><a href="https://github.com/keowu/hakudetector">Github</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Music_Download;