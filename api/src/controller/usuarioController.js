import { inserirCliente, loginCliente } from '../repository/usuarioRepository.js'
import { Router } from "express";

const server = Router();

server.post('/usuario/login', async (req, resp) => {
    
  try {
      const {email, senha} = req.body;
      const x = await loginCliente(email, senha)

      if (!x) {
          throw new Error('Credenciais Invalidas')
      }

      resp.send(x)

  } catch (err) {
      resp.status(401).send({
          erro: err.message
      });
  }
})

server.post('/usuario/cadastro', async (req, resp) => {
  try {
    const novoUsuario = req.body;
    let format = /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/;

      if(!novoUsuario.usuario)
      throw new Error('Nome do usuario é obrigatório!')

      if(!novoUsuario.email)
        throw new Error('Email é obrigatório!')
      else if(novoUsuario.email.includes("@gmail.com") == false && novoUsuario.email.includes("@outlook.com") == false)
        throw new Error('Email inválido!')
    
      if(!novoUsuario.senha)
      throw new Error('Senha é obrigatória!')
      else if (format.test(novoUsuario.senha) == false)
        throw new Error('A senha é fraca!')
    
      if(!novoUsuario.cpf)
      throw new Error('CPF é obrigatório!')

      else if (novoUsuario.cpf.length != 14)
        throw new Error('CPF incompleto!')
        

      const resposta = await inserirCliente(novoUsuario);

      resp.send(resposta);

  } catch (err) {
      resp.status(400).send({
          erro: err.message
      });
  }
})


export default server;