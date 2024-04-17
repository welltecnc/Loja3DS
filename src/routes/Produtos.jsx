import { useNavigate} from "react-router-dom"
import {ListaProdutos} from '../components/ListaProdutos'

function Produtos (){
  //useNavigate tem a função de fazer redirecionamento de componentes
  const navigate =useNavigate();
  //criando a função handleLogout
  const handleLogout =()=>{
    sessionStorage.removeItem("usuario");
    sessionStorage.removeItem("senha");
    alert("saindo da sessão...")
    navigate("/");
  }

  return(
    <>
    <h1>ACESSO RESTRITO</h1>
    <p><button onClick={handleLogout}>Logout</button></p>
  
    
    <h1>Lista Produtos</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descricao</th>
            <th>Valor</th>  
            <th></th> 
          </tr>
        </thead>
        <tbody>
          {ListaProdutos.map((item,index) => (
            <tr key={index}>         
              <td>{item.nome}</td>
              <td>{item.descricao}</td>
              <td>{item.valor}</td>    
              <td></td>
              <td>
              </td>
            </tr>
          ))}
           
        </tbody>
      </table>
    </>
  )
}
export default Produtos