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
                        <button id="facebook">
                            <a href="https://www.facebook.com/pini859">
                                <img src={Face} width="25em" />
                            </a>
                        </button>
                    </div>
                    <div className="whatsapp">
                        <button id="whatsapp">
                            <ReactWhatsapp id="react-whatsapp" number="+972544936366">
                                <img src={Whats} width="25em" />
                            </ReactWhatsapp>
                        </button>
                    </div>
                    <div className="phone">
                        <button id="phone">
                            <a id="link-phone" href="tel:0544936366">
                                <img src={Phone} width="25em" />
                            </a>
                        </button>
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
