import React, { useState } from "react";
import Entradas from "./components/Entradas";
import Botoes from "./components/Botoes";
import Resultados from "./components/Resultados";

const CalculadoraIMC = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setImc] = useState(null);

    const calcularIMC = () => {
        if (altura && peso) {
            const alturaEmMetros = parseFloat(altura);
            const pesoEmQuilos = parseFloat(peso);
            const imcCalculado = (pesoEmQuilos / (alturaEmMetros * alturaEmMetros)).toFixed(2);
            setImc(imcCalculado);
        }
    };

    const limparCampos = () => {
        setAltura('');
        setPeso('');
        setImc(null);
    };

    return (
        <div className="container">
            <h1>Cálculo IMC</h1>
            <p>
                IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
            </p>
            <p>
                O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.
            </p>
            <p>
                Quer descobrir seu IMC? Insira seu peso e sua altura nos campos abaixo e compare com os índices da tabela. Importante: siga os exemplos e use pontos como separadores.
            </p>
            <Entradas altura={altura} setAltura={setAltura} peso={peso} setPeso={setPeso} />
            <Botoes calcularIMC={calcularIMC} limparCampos={limparCampos} />
            <Resultados imc={imc} />
        </div>
    );
}

const App = () => {
    return <CalculadoraIMC />;
}

export default App;
