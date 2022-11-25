'use client'
import { clear } from 'console';
import Image from 'next/image'
import { disconnect } from 'process'
import { useState } from 'react';
import styles from './page.module.css'

export default function Calculator() {
  const [screen, setScreen] = useState("");

  //computation of values;
  const compute = () => {
    try {
      setScreen(eval(screen));
    } catch (error) {
      setScreen("Undefined");
    }
    
  };

  const setNumber = (number: number ) => {
    let current = screen + number;

    const regex = new RegExp("^0+(?!$)",'g');
    setScreen(current.replaceAll(regex, ""));
  }

  const setOperationValue = (operator : string) => {
    let currentScreen = screen;
    
    if (currentScreen.charAt(currentScreen.length - 1) == "+" 
        || currentScreen.charAt(currentScreen.length - 1) == "-"
        || currentScreen.charAt(currentScreen.length - 1) == "*"
        || currentScreen.charAt(currentScreen.length - 1) == "/")
    {
      currentScreen = currentScreen.substring(0, currentScreen.length - 1);
    }
    setScreen(currentScreen + operator)
  }

  const clear = () => {
    setScreen("")
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.calculator}>
          <input type="text" className={styles.value} value={screen}/>
          <span className={`${styles.num} ${styles.clear}`} onClick={() => clear()}><i>C</i></span>
          <span className={styles.num} data-value="/" onClick={() => setOperationValue("/")}><i>/</i></span>
          <span className={styles.num} onClick={() => setOperationValue("*")} ><i>*</i></span>
          <span className={styles.num} onClick={() => setNumber(7)}><i>7</i></span>
          <span className={styles.num} onClick={() => setNumber(8)}><i>8</i></span>
          <span className={styles.num} onClick={() => setNumber(9)}><i>9</i></span>
          <span className={styles.num} onClick={() => setOperationValue("-")}><i>-</i></span>
          <span className={styles.num} onClick={() => setNumber(4)}><i>4</i></span>
          <span className={styles.num} onClick={() => setNumber(5)}><i>5</i></span>
          <span className={styles.num} onClick={() => setNumber(6)}><i>6</i></span>
          <span className={`${styles.num} ${styles.plus}`} onClick={() => setOperationValue("+")}><i>+</i></span>
          <span className={styles.num} onClick={() => setNumber(1)}><i>1</i></span>
          <span className={styles.num} onClick={() => setNumber(2)}><i>2</i></span>
          <span className={styles.num} onClick={() => setNumber(3)}><i>3</i></span>
          <span className={styles.num} onClick={() => setNumber(0)}><i>0</i></span>
          <span className={styles.num} onClick={() => setScreen(screen + "00")}><i>00</i></span>
          <span className={styles.num} onClick={() => setScreen(screen + ".")}><i>.</i></span>
          <span className={`${styles.num} ${styles.equal}`} onClick={compute}><i>=</i></span>
        </div>
    </div>
  </div>
  )

 
}
