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


  <div className="form_All" > 

  <h2>Login </h2>

  <div className="form_Flex">
  <form>
    <div className="first_div" >
      <label for="name" >Nome de Usuário</label>
      <input id="name" value={userName} onChange={(e)=> handleInputChange(e)}  required  name="name" placeholder="Seu nome" type="text"/>

      <label for="password" >Senha</label>
      <input  id="password" name="password" value={pw} onChange={(e)=> handleInputChange(e)} required type="password"/>

      
    </div>

    <div className="second_div">
      
      <div className="form_button" >
        <button className="submit_password" type="submit">ENVIAR </button>
        <button className="submit_forgot_password" type="submit">ESQUECI A SENHA </button>
      </div>

    </div>
  </form>
   
    </div>
  </div>
  )
}