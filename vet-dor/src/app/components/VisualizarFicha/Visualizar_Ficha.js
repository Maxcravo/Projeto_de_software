// "use client"
import "./visualizar_ficha.css"
const Sample_pdf = "./assets/sample-pdf.pdf" + "#page=1&zoom=100" //esse page e zoom é pra formatar como mostra o pdf

export default function Visualizar_Ficha(){

//--------------------------------------------------------

    const {useState} = require("react");
//   // usuario precisa começar com letras e ser seguidos por letras, podendo conter, hifen ou underline.
//     const user_regex = /^[a-zA-Z][a-zA-Z0-9-_ ]{0,35}$/;
//   // Usuário precisa ter senha com letra minuscula, letra maiuscula e de tamanho entre 4 a 10.
//     const user_PW_regex = /^[a-zA-Z][a-zA-Z0-9-_]{0,16}$/;
//   // Regex cpf
//     const user_cpf_regex = /^[0-9]{0,11}$/;
//   // Regex numero
//     const user_number = /^[0-9]{0,11}$/;
//   //  regex email
//     const user_mail = /^\S+@\S+\.\S+$/;

  // states do nome do usuário
//   const [ userName, setUserName] = useState(null);
//   const [ pw, setPw] = useState(null);
//   const [ cpf, setCpf] = useState(null);
//   const [number, setNumber] =useState(null)
//   const [birthDate, setBirthDate] =useState(null)
//   const [email, setEmail] =useState(null)
//   const [objUser, setObjUser] = useState();

    // // Agora vamos criar uma forma de atualizar os states dos nossos inputs
    // const handleInputChange = (e) => {
    //   const {id, value} = e.target;
    //   if (id === "name") {
    //     if(user_regex.test(value)==true){
    //       setUserName(value);
    //     }
    //   }
    //   if (id === "cpf") {
    //     if (user_cpf_regex.test(value)==true) {
    //       setCpf(value); 
    //     }
    //   }
    //   if (id === "dataNasc") {
    //     setBirthDate(value);
    //   }
    //   if (id === 'cell') {
    //     if (user_number.test(value)==true) {
    //       setNumber(value);  
    //     }
    //   }
    //   if (id === "mail") {
    //     if (user_mail.test(value)==true) {
    //       setEmail(value)
    //     }
    //   }
    //   if (id === "password") {
    //     if (user_PW_regex.test(value)==true) {
    //       setPw(value);  
    //     }
    //   }    
    //   let obj = {
    //     nome: userName,
    //     cpf: cpf,
    //     celular: number,
    //     email: email,
    //     senha: pw,
    //     }
    //     setObjUser(obj);
    // }
    //  console.log(userName,cpf,email,pw,number);
    //  console.log(objUser);

    // const handleSubmit = (e)=>{
    //   e.preventDefault();
      
    //   // 
    //   console.log(obj);
    //     // const newPostKey = push(child(ref(database), 'posts')).key;
    //     // const updates = {};
    //     // updates["/"+ newPostKey] = obj
    //     // return update(ref(database), updates);
    // }


    return(
        <div class="form">
            <h1>Ficha do Pet</h1>
            <div class="header-info">
                <div class="left">
                    <img class="perfil-cachorro" src="https://pegadanatural.com.br/wp-content/uploads/3-maneiras-de-cuidar-do-seu-filhote-de-cachorro-com-qualidade.jpg" alt=""/>
                    <h2>Caramelinho</h2>
                </div>
                

                <div class="right">
                    <div class="info-ficha">
                        <div class="item">
                            <label for="medico">Médico Veterinário</label>
                            <input type="text" name="medico" id="medico" value="Fulaninho Silva" readonly/>
                        </div>
                        
                        <div class="item">
                            <label for="crm">CRM</label>
                            <input type="text" name="crm" id="crm" value="123456789" readonly/>
                        </div>
                        
                        <div class="item">
                            <label for="data">Data</label>
                            <input type="text" name="data" id="data" value="12/01/2023" readonly/>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div class="area-pdfs">
                <div class="pdf">
                    <p class="etiqueta grande laranja">Diagnóstico</p>
                    <a class="link texto" href="">Baixar arquivo</a>
                    <object data = {Sample_pdf} type="application/pdf" class="pdf-diagnostico" name="pdf-diagnostico"> <p>Não foi possível carregar o PDF. Baixe o arquivo diretamente.</p></object>

                    {/* data="sample-pdf.pdf#page=1&zoom=50" pra colocar da pasta ao invés da constante*/}
                </div>

                <div class="pdf">
                    <p class="etiqueta grande laranja">Laudo</p>
                    <a class="link texto" href="">Baixar arquivo</a>
                    <object data = {Sample_pdf} type="application/pdf" class="pdf-laudo" name="pdf-laudo"> <p>Não foi possível carregar o PDF. Baixe o arquivo diretamente.</p> </object>
                </div>

                <div class="pdf">
                    <p class="etiqueta grande laranja">Receitas</p>
                    <a class="link texto" href="">Baixar arquivo</a>
                    <object data = {Sample_pdf} type="application/pdf" class="pdf-receitas" name="pdf-receitas"> <p>Não foi possível carregar o PDF. Baixe o arquivo diretamente.</p> </object>
                </div>
                
            </div>
        </div>
    )
}   