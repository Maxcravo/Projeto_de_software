import { MinusCircle } from "react-feather";
import "./AniProfile.css";
const Pic = "/assets/Pic.png"

export default function AniProfile() {
  return(
  <div className="page_flex">
    <div className="AniProfile_flex" >
      <form>
          <div className="Title_flex" >
            <h1>Perfil do meu PET</h1>
            {/* <MinusCircle/> */}
          </div>

          <div class="foto-botao">
            <div className="Profile_pic" >
              <img width="150px" src={Pic}/>
              <h2>Caramelinho</h2>
            </div>

            <a className="submit_trad botao verde normal" href=""> Dados de Consultas </a>
            </div>

        

        <div className="Profile_data">
          <div class="first_div">
            <label for="name" >Idade</label>
            <input id="name" value="5 anos" name="name" placeholder="Seu nome" type="text"/>

            <label for="name" >Data de Nascimento</label>
            <input id="name" value="20/03/2018" name="name" placeholder="Seu nome" type="text"/>

            <label for="name" >Raça</label>
            <input id="name" value="Vira-lata Caramelo" name="name" placeholder="Seu nome" type="text"/>
          </div>

          <div class="second_div">
            <label for="name" >Sexo</label>
            <input id="name" value="Macho" name="name" placeholder="Seu nome" type="text"/>

            <label for="name" >Nome do Responsável</label>
            <input id="name" value="Marcos Castro" name="name" placeholder="Seu nome" type="text"/>

            <label for="name" >Especie</label>
            <input id="name" value="Cachorro" name="name" placeholder="Seu nome" type="text"/>
          </div>
        </div>
      </form>
      
    </div>
  </div>
  );
}