import React from 'react';
import hakupicture from '../img/hakudetector.png';
import ReactPlayer from "react-player"

class HakuDetector extends React.Component{
    render(){
        return(
            <div>
            <div className="hakucontainerwebdonw">
                <div className="hakudetectorchild">
                    <h1>HAKUDETECTOR PROJECT v1.0.6.71-DEV - RELEASE FROM 22/11/2020</h1>
                </div>
                <div className="hakudetectorchild">
                    <img src={hakupicture} title="Icon" alt="HAKUICON" />
                </div>
                <div className="hakudetectorchild">
                    <h1>See the hakudetector in action:</h1>
                </div>
            </div>
                        <div className="hakucontainerwebdonwpromo">
                        <div className="hakudetectorchild_promo">
                            <ReactPlayer
                    url="https://youtu.be/lzOD7iSs0Ug?list=PLZYkWmyj9iTQq2j_1BKAdj0rXcTF5E6D0"
                    />
                            </div>
                            <div className="hakudetectorchild_promo">
                            <ReactPlayer
                    url="https://youtu.be/_gsmgV0drPY?list=PLZYkWmyj9iTQq2j_1BKAdj0rXcTF5E6D0"
                    />
                            </div>
                            <div className="hakudetectorchild_promo">
                            <ReactPlayer
                    url="https://youtu.be/tx6DXMa5S-4?list=PLZYkWmyj9iTQq2j_1BKAdj0rXcTF5E6D0"
                    />
                            </div>
                            <div className="hakudetectorchild_promo">
                            <ReactPlayer
                    url="https://youtu.be/1LDc82hoVPs?list=PLZYkWmyj9iTQq2j_1BKAdj0rXcTF5E6D0"
                    />
                            </div>
            </div>
            <div className="hakucontainerwebdonw">
                <div className="hakudetectorchild">
                    <h1>Did you like the project?</h1>
                </div>
                <div className="list">
                    <ul>
                            <li><a href="https://github.com/keowu/hakudetector/releases/download/v1.0.6.71-DEV/HakuDetectorRelease.zip">Download</a></li>
                            <li><a href="https://github.com/keowu/hakudetector">Github</a></li>
                    </ul>
                </div>
                <div className="hakudetectorchild">
                    <h1>© 2020 Keowu Dev</h1>
                </div>
            </div>
            </div>
        )
    }

}

export default HakuDetector;
