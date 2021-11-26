import React from 'react';
import styles from "./timer.module.css";
import CountdownTimer from './CountdownTimer';
import logo from './Vector.png';

function Timer() {
    const DayshoursMinSecs = {days :1,hours:1, minutes: 20, seconds: 40}
    return (
        <div className={styles.hero}>
            <div className={styles.img}>
                <img src ={logo}></img>
            </div>
            <div className={styles.title}>
                <div className={styles.cyber}>CYBER</div>
                <div className={styles.hawk}>HAWK</div>
            </div>
            <div className={styles.tagline}>The Hawk Lands In</div>
            <CountdownTimer DayshoursMinSecs={DayshoursMinSecs}/>
            <div className={styles.units}>
                <div className={styles.day}>Days </div>
                <div className={styles.hour}>Hours </div>
                <div className={styles.min}>     Minutes </div>
                <div className={styles.second}>     Seconds</div>
            </div>
            <button>Rules</button>
        </div>
    )
}

export default Timer
