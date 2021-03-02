import React, { useState, useEffect } from 'react';
import "./home.css";
import { useHistory } from 'react-router-dom';
import { IDS, PANORAMY, YEVANI } from "../data/doors.json";

export default function Home(props) {
    const [flag, setFlag] = useState(true)
    const history = useHistory();

    const openProductView = (type, i) => {
        let scroll = Math.floor(window.scrollY);
        window.scroll(0, 0);
        props.openProduct(type, i);
        props.sendScroll(scroll, true);
        history.push("/productView");
    }
    useEffect(() => {

        window.scroll(0, props.scroll)

    })
    return (
        <div className="home">
            <div className="home-body">
                <div className="ids">
                    <h2 id="model-name">דגמי IDS </h2>
                    <div className="ids-child">
                        {IDS.map((e, i) => {
                            let img = require(`../images/doors/${e.IMAGE}.png`).default;
                            if (i < 3) {
                                return <div key={i} className="product" onClick={(key) => {
                                    openProductView(i)
                                }}>
                                    <h3>דגם - {e.NAME}</h3>
                                    <div id="product-img" style={{ backgroundImage: `url(${img})` }} />
                                </div>
                            }
                        })}
                    </div>
                    <div className="more-models">לעוד דגמים</div>
                </div>
                <div className="panoramy">
                    <h2 id="model-name"> דגמי פנורמי </h2>
                    <div className="panoramy-child">
                        {PANORAMY.map((e, i) => {
                            let img = require(`../images/doors/${e.IMAGE}.png`).default;
                            if (i < 3) {
                                return <div key={i} className="product" onClick={(key) => {
                                    openProductView(i)
                                }}>
                                    <h3>דגם - {e.NAME}</h3>
                                    <div id="product-img" style={{ backgroundImage: `url(${img})` }} />
                                </div>
                            }
                        })}
                    </div>
                    <div className="more-models">לעוד דגמים</div>
                </div>
                <div className="yevani">
                    <h2 id="model-name">דגמי יווני</h2>
                    <div className="yevani-child">
                        {YEVANI.map((e, i) => {
                            let img = require(`../images/doors/${e.IMAGE}.png`).default;
                            if (i < 3) {
                                return <div key={i} className="product" onClick={(key) => {
                                    openProductView(i)
                                }}>
                                    <h3>דגם - {e.NAME}</h3>
                                    <div id="product-img" style={{ backgroundImage: `url(${img})` }} />
                                </div>
                            }
                        })}
                    </div>
                    <div className="more-models">לעוד דגמים</div>
                </div>
            </div >
        </div>
    )
}
