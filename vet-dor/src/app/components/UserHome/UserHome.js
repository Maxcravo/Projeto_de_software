import React from "react";
const banner = "/assets/home-banner.png";
const img_consultas = "/assets/img-consultas.png";
const img_vacinas = "/assets/img-vacinas.png";
const img_tabela_precos = "/assets/tabela-precos.png";

const user = "Fulano";
const mes_prox_consulta = "Setembro";
const dia_prox_consulta = "25";
const nome_pet = "Caramelinho"
const foto_pet = "";

import "./userhome.css";

import { Activity } from "react-feather";
import { Droplet } from "react-feather";

export default function UserHome() {
  return(
    <div class="all">
      <div class="esquerda">
        <div class="welcome">
          <h1>Bem-vindo(a), {user}!</h1>
        </div>

        <div class="prox-consulta">
          <div class="data">
            <span class="info nao-destacada negrito">Próxima consulta</span>

            <div class="calendario">
              <div class="mes">
                <span class="p-mes">{mes_prox_consulta}</span>
              </div>
              <span class="p-dia">{dia_prox_consulta}</span>
            </div>
          </div>

          <div class="botoes">
          <a class="botao pequeno verde" href="">Desmarcar</a>
            <a class="botao normal laranja" href="">Marcar outra consulta</a>
          </div>
        </div>
      </div>

      <div class="direita">
        <div class="area-pets">
          <div class="fileira-pets">
            <div class="pet">
              <span class="nome-pet">{nome_pet}</span>
              <img class="foto-pet" src={img_consultas}></img>
              <a class="botao pequeno verde" href="">FIchas do pet</a>
            </div>
            <div class="pet">
              <span class="nome-pet">{nome_pet}</span>
              <img class="foto-pet" src={img_consultas}></img>
              <a class="botao pequeno verde" href="">FIchas do pet</a>
            </div>
            <div class="pet">
              <span class="nome-pet">{nome_pet}</span>
              <img class="foto-pet" src={img_consultas}></img>
              <a class="botao pequeno verde" href="">FIchas do pet</a>
            </div>
            <div class="pet">
              <span class="nome-pet">{nome_pet}</span>
              <img class="foto-pet" src={img_consultas}></img>
              <a class="botao pequeno verde" href="">FIchas do pet</a>
            </div>
          </div> 
        </div>
      </div>
    </div>
);
}