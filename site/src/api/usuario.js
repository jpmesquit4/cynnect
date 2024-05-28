import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:9090'
})

export async function loginUsuario(email, senha) {
    const resposta = await api.post('/usuario/login', {
        email: email,
        senha: senha,
    })

    return resposta.data;
}

export async function cadastroUsuario(usuario, email, senha, cpf) {
  const resposta = await api.post('/usuario/cadastro', {
      usuario: usuario,
      email: email,
      senha: senha,
      cpf: cpf,
  })

  return resposta.data;
}