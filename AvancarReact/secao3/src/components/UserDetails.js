const UserDetails = ({nome, idade, profissao, carteira}) => {
  return (
    <div>
        <h2>Os dados pessoais são:</h2>
        <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>Profissão: {profissao}</li>
            
        </ul>
        <p>{carteira}</p>
    </div>
  )
}

export default UserDetails