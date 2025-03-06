import React from "react";

import styles from "./Botoes.module.css"

const Botoes = ({calcularIMC, limparCampos}) => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <button className={`${styles.btn} ${styles['btn--pri']}`} type="button" onClick={calcularIMC}>Calcular <span className={`${styles.icon} ${styles['icon--pri']}`}></span></button>
            </div>
            <div >
                <button className={`${styles.btn} ${styles['btn--sec']}`} type="button" onClick={limparCampos} >Limpar <span className={`${styles.icon} ${styles['icon--sec']}`}></span></button>
            </div>
        </div>
    );
}

export default Botoes;