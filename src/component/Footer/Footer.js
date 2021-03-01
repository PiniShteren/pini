import React from 'react';
import "./footer.css";
import { Link, useHistory } from 'react-router-dom';
import Face from "../images/facebook.svg";
import Whats from "../images/whatsapp.svg";
import ReactWhatsapp from 'react-whatsapp';
import Phone from "../images/phone.svg"


export default function Footer() {
    const history = useHistory();
    return (
        <div className="footer">
            <div className="options-footer">
                <div className="nav-footer">
                    <ul>
                        <li>
                            <Link exact to="/" id="link-footer" onClick={() => { window.scroll(0, 0) }}>דף הבית</Link>
                        </li>
                        <li>
                            <Link to="/content" id="link-footer">יצירת קשר</Link>
                        </li>
                        <li>
                            <Link to="about" id="link-footer">אודות</Link>
                        </li>
                    </ul>
                </div>
                <div className="icons-footer">
                    <div className="facebook">
                        <a href="https://www.facebook.com/pini859">
                            <img src={Face} width="25em" />
                        </a>
                    </div>
                    <div className="whatsapp">
                        <ReactWhatsapp id="react-whatsapp" number="+972544936366">
                            <img src={Whats} width="25em" />
                        </ReactWhatsapp>
                    </div>
                    <div className="phone">
                        <a id="link-phone" href="tel:0544936366">
                            <img src={Phone} width="25em" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="design" onClick={() => {
                history.push("/")
            }}>
                <p className="footer-p"> design by Pini Shteren &copy;</p>
            </div>
        </div>
    )
}
