import React from "react";
const banner = "/assets/home-banner.png";
const img_consultas = "/assets/img-consultas.png";
const img_vacinas = "/assets/img-vacinas.png";
const img_tabela_precos = "/assets/tabela-precos.png";

import "./perfil_usuario.css";

export default function PerfilUsuario() {
  return(
    <div class="form dados-perfil">
            <form class="form-dados" action="">
                <h1>Meu perfil</h1>

                <div class="dados">
                    <div class="esquerda">
                        <div class="input nome">
                            <label for="nome">Seu nome</label>
                            <input type="text" name="nome" id="nome" value="Manoel Gomes"/>
                        </div>
                        
                        <div class="input cpf">
                            <label for="cpf">Seu CPF</label>
                            <input type="number" name="cpf" id="cpf" value="12345678900"/>
                        </div>
                        
                    </div>
                        
                    <div class="direita">
                        <div class="input celular">
                            <label for="celular">Seu celular</label>
                            <input type="number" name="celular" id="cpf" value="21999999999"/>
                        </div>
                        
                        <div class="input email">
                            <label for="email">Seu e-mail</label>
                            <input type="email" name="email" id="email" value="email@exemplo.com"/>
                        </div>
                    </div>
                    <span></span>
                    <a href="" class="botao normal amarelo">Editar perfil</a>
                </div>
                    
                    
            </form>
        </div>
);
}