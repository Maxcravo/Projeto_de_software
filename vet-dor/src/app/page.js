import Image from 'next/image'
import styles from './page.module.css'
import * as root_styles from './globals.css'
import Header from './components/Header/header.js'
import Footer from './components/Footer/Footer'
import Cadastro_Form from './components/CadastroForm/Cadastro_Form'
import AniProfile from './components/AniProfile/AniProfile'
import Login_Form from './components/LoginForm/Login_Form'
import Visualizar_Ficha from './components/VisualizarFicha/Visualizar_Ficha'
import Homepage from './components/Home/Homepage'
import UserHome from './components/UserHome/UserHome'
import PerfilUsuario from './components/PerfilUsuario/PerfilUsuario'

export default function Home() {
  return (
    <span>
      {<Header/>}

      {/* {<Homepage/>}  */}
      {/* tem que ser fora da main a home */}
      <main>
        {/* {<Cadastro_Form/>} */}

        {/* <Login_Form /> */}

        {/* {<AniProfile/>} */}

        {/* {<Visualizar_Ficha/>} */}

        {<PerfilUsuario/>}

        {/* {<UserHome/>} */}
      </main>
      
      {<Footer/>}
    </span>
  )
}