// imports
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const { database } = require('./../db/db');

const validations = require('./../validações/validações');

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

async function fazerLogin(req, res) {
  console.log("[fazerLogin]");
  try {
    const {
      cpf,
      senha
    } = req.body;

    console.log(`cpf = ${cpf}`);
    console.log(`senha = ${senha}`);

    // Sanitizar as entradas  
    const cpfLimpo = DOMPurify.sanitize(cpf);
    const senhaLimpo = DOMPurify.sanitize(senha);
    
    console.log(`[fazerLogin] cpf limpo ${cpfLimpo}`);
    console.log(`[fazerLogin] senha limpo ${senhaLimpo}`);

    // Validar as entradas
    if(!validations.cpfValidator(cpfLimpo)) {
      res.status(401).send({
        code: "CPF_INVALIDO",
        message: "cpf inválido",
        result: null
      });
      return;
    }
    
    if(!validations.pwValidator(senhaLimpo)) {
      res.status(401).send({
        code: "SENHA_INVALIDO",
        message: "senha inválido",
        result: null
      });
      return;
    }
    
    console.log(`[fazerLogin] tudo válido`);

    // verificar se existe usuário com o cpf no bd
    const userRef = database.collection('users').doc(cpfLimpo);
    const doc = await userRef.get();
   
    if(!doc.exists) {
      res.status(404).send({   
        code: "NOT_FOUND",
        message: "Não há usuário cadastrado com este cpf",
        result: null
      });
      return;
    };

    console.log(`[fazerLogin] usuário existe - ${JSON.stringify(doc.data())}`);

    const bdUser = doc.data();

    // verificar se a senha está correta
    if (bdUser.pass !== senhaLimpo ) {
      res.status(401).send({
        code: "WRONG_PASSWORD",
        message: "Senha digitada está incorreta",
        result: null
      });
      return;
    };

    res.status(200).send({
      code: "OK",
      message: "login bem sucedido",
      result: bdUser
    });

  } catch (error) {
    console.log(`ERROR: ${error}`);
		res.status(500).send({
			code: "INTERNAL_ERROR",
      message: "erro inesperado",
			result: error,
		});
  }
}

module.exports = {
  fazerLogin,
}