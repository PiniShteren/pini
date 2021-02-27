import React, { useEffect } from "react";
import "./about.css";

export default function About() {
    useEffect(() => {
        window.scroll(0, 0)
    })
    return (
        <div className="about">
            <h1>אודות - פיני</h1>
            <div className="about-body">
                <div className="about-img" />
                <div className="about-text1">
                    מזה 25 שנים שמאחורי פיני מאות הלקוחות מרוצים. פיני מלווה את
                    לקוחותיו כבר מההתחלה, עוד בבחירת הדגם. עם ידע רב הוא יודע להתאים
                    את צרכיו של הלקוח לדגם דלת המתאים ביותר.
				</div>
                <div className="about-text2">
                    מזה 25 שנים שמאחורי פיני מאות הלקוחות מרוצים. פיני מלווה את
                    לקוחותיו כבר מההתחלה, עוד בבחירת הדגם. עם ידע רב הוא יודע להתאים
                    את צרכיו של הלקוח לדגם דלת המתאים ביותר. מזה 25 שנים שמאחורי פיני
                    מאות הלקוחות מרוצים. פיני מלווה את לקוחותיו כבר מההתחלה, עוד
                    בבחירת הדגם. עם ידע רב הוא יודע להתאים את צרכיו של הלקוח לדגם דלת
                    המתאים ביותר.
                </div>

            </div>
        </div>
    );
}
