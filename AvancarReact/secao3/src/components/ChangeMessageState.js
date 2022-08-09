

const ChangeMessageState = ({ hMessage }) => {
    const messages = ["oi", "olá", "oi, tudo bem?"]
    return (
        <div>
            <button onClick={() => hMessage(messages[0])}>1</button>
            <button onClick={() => hMessage(messages[1])}>2</button>
            <button onClick={() => hMessage(messages[2])}>3</button>
        </div>
    )
}

export default ChangeMessageState