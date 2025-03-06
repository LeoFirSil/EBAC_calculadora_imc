import React from "react";

import styles from "./Resultados.module.css"

const Resultados = ({ imc }) => {
    return (
        <>
            <h2 className={styles.textPri}>VEJA A INTERPRETAÇÃO DO IMC</h2>
            <table>
                <tr className={styles.modificador}>
                    <th className={styles.itemPri}>IMC</th>
                    <th className={styles.itemPri}>CLASSIFICAÇÃO</th>
                    <th className={styles.itemPriResult}>OBESIDADE (GRAU)</th>
                </tr>
                <tr className={styles.modificador}>
                    <td className={styles.item}>MENOR QUE 18,5</td>
                    <td className={styles.item}>MAGREZA</td>
                    <td className={styles.itemResult}>0</td>
                </tr>
                <tr className={styles.modificador}>
                    <td className={styles.item}>ENTRE 18,5 E 24,9</td>
                    <td className={styles.item}>NORMAL</td>
                    <td className={styles.itemResult}>0</td>
                </tr>
                <tr className={styles.modificador}>
                    <td className={styles.item}>ENTRE 25,0 E 29,9</td>
                    <td className={styles.item}>SOBREPESO</td>
                    <td className={styles.itemResult}>I</td>
                </tr>
                <tr className={styles.modificador}>
                    <td className={styles.item}>ENTRE 30,0 E 39,9</td>
                    <td className={styles.item}>OBESIDADE</td>
                    <td className={styles.itemResult}>II</td>
                </tr>
                <tr className={styles.modificador}>
                    <td className={styles.item}>MAIOR QUE 40,0</td>
                    <td className={styles.item}>OBESIDADE GRAVE</td>
                    <td className={styles.itemResult}>III</td>
                </tr>
            </table>
            <h2 className={styles.textSec}>SEU IMC:{imc}</h2>
        </>
    );
}

export default Resultados;