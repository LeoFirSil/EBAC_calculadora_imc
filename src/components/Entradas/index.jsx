import React from "react";

import styles from "./Entradas.module.css";

const Entradas = ({ altura, setAltura, peso, setPeso }) => {

    return (
        <form className={styles.container} >
            <div className={styles.item} >
                <label className={styles.text} >Altura (ex.: 1,70)</label>
                <input className={styles.inp} type="number" placeholder='Metros' value={altura} onChange={(e) => setAltura(e.target.value)} />
            </div>
            <div className={styles.item}  >
                <label className={styles.text} >Peso (ex.: 69,2)</label>
                <input className={styles.inp} type="number" placeholder='Quilos' value={peso} onChange={(e) => setPeso(e.target.value)} />
            </div>
        </form>
    );
}

export default Entradas;