

const Challenge = () => {
    const valorNumerico1 = 10
    const valorNumerico2 = 5
    return(
        <div>
            <p>O primeiro valor numérico é: {valorNumerico1}</p>
            <p>O segundo valor numérico é: {valorNumerico2}</p>
            <div>
                <button
                color = "pink" 
                onClick= {() => {
                    if (true){
                        console.log(valorNumerico1 + valorNumerico2)
                    }
                }} 
                > Resultado
                 </button>
            </div>
        </div>
    )
}
export default Challenge