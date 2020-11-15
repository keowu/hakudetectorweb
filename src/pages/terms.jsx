import React from 'react';
import { Link } from 'react-router-dom';

class Terms extends React.Component{
    render(){
        return(
            <div>
                <div className="container_user">
                    <div className="return_home">
                        <Link to="/" className="homehome">Return to home</Link>
                    </div>
                    <div className="user_head">
                        <h1>User service</h1>
                    </div>
                </div>
                <div className="terms">
                    <div className="terms_terms">
                    HakuDetector software uses a copyright waiver Under Section 107 of the 1976 Copyright Act, "fair use" is made for purposes such as criticism, commentary, reporting, teaching, scholarship and research.
                    The HakuDetector Software in no way affects software or services other than its developer, refrain from any and all expert-criminal accusations that they may suffer due to its misuse. <br />
                    The Software is governed by the GNU license, where modification and distribution as well as modification of the original source code is permitted, both for commercial and private media, with the exception of the original credits. <br/>
                    The developers come from a communication channel directly on Github or E-mail, where only doubts about usage problems are answered, our software can provide technical "Unpack" tips that remove protections from PE, ELF binaries and others.<br />                  
                    In accordance with the Brazilian Information Law and the General Data Protection Law, we post the relevant codes at the disposal of the Brazilian information technology expert, with the proviso that no data is stored on our servers so that none of our users can be identified , given this term of use our objective is precisely for research and development.
                    The Referent e-mail: <strong>fluxuss-company@tuta.io</strong>, is available for any questions.
                    </div>
                </div>
            </div>
        )
    }
}

export default Terms;