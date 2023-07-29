"use client"
import "./Login_Form.css"
import register from "../../controles/Register.js"
import { useState } from "react";



// function Login_form ==> verificar onde está criada e onde será utilizada
export default function Login_Form(){
  const {useState} = require("react");



  
// usuario precisa começar com letras e ser seguidos por letras, podendo conter, hifen ou underline.
  const user_regex = /^[a-zA-Z][a-zA-Z0-9-_ ]{0,16}$/;
// Usuário precisa ter senha com letra minuscula, letra maiuscula e de tamanho entre 4 a 10.
  const user_PW = /^[a-zA-Z][a-zA-Z0-9-_]{0,16}$/;
// criando agora os estados da função de validação

  // states do nome do usuário
  const [ userName, setUserName] = useState(null);
  const [ pw, setPw] = useState(null);


    // Agora vamos criar uma forma de atualizar os states dos nossos inputs

    const handleInputChange = (e) => {
      const {id, value} = e.target;
      if (id === "name") {
        if(user_regex.test(value)==true){
          setUserName(value);
        }
          
      }
      
      if (id === "password") {
        if (user_PW.test(value)== true) {
          setPw(value);  
        }
        
      }    
    }

    console.log(userName,pw,);

  return(
      <div className="form_All"> 

      <div className="form_Flex login">
        <form class="form-login">
          <h2>Faça login para gerenciar seus pets</h2>
          <div className="first_div" >
            <label for="name" >Nome de usuário</label>
            <input id="name" value={userName} onChange={(e)=> handleInputChange(e)}  required  name="name" placeholder="Seu nome" type="text"/>

            <label for="password" >Senha</label>
            <input  id="password" name="password" value={pw} onChange={(e)=> handleInputChange(e)} required type="password"/>
            <a class="link texto submit_forgot_password" href="">Esqueceu a senha?</a>
          </div>

          <div className="second_div">
          
            <div className="form_button" >
              <button className="submit_password botao verde normal" type="submit">ENVIAR </button>
              <a class="link texto button-sign-u" href="">Ainda não é cadastrado?</a>
              {/* <button className="submit_forgot_password botao normal" type="submit">ESQUECI A SENHA </button> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  
  )
}