import {Link} from 'react-router-dom'
function Nav(){

  return(
    <>
   <header className="menu">
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Sobre">Sobre</Link>
      <Link to="/Contato">Contato</Link>
    </nav>
    </header>
    </>
  )
}
export default Nav