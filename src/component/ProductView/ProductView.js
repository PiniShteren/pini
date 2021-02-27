import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import "./productView.css";
import Right from "../images/right.svg";

function ProductView(props) {
    const history = useHistory();
    const pName = props.dataArr.NAME;
    const pImg = props.dataArr.IMAGE;
    const pDecription = props.dataArr.DESCRIPTION;
    const pStructure = props.dataArr['SRTUCTURE-DOOR'];


    var img = require(`../images/rav-barich/${pImg}.png`).default;



    return (
        <div className="product-view">
            <div className="product-view-body">
                <button id="back" onClick={() => {
                    history.push("/");
                }}> <img src={Right} width="15vh" />חזרה</button>
                <h3 id="product-view-name">{pName}</h3>
                <div className="img-product-view" style={{ backgroundImage: `url(${img})` }}></div>
                <div className="details">
                    <p id="descrip">{pDecription}</p>
                    <ul className="product-details">
                        <h3 style={{ textAlign: "center" }}>מפרט</h3>
                        <li ><span id="head-des">מבנה הדלת:</span> {pStructure}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default ProductView;