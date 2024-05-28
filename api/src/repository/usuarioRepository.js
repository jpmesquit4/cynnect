import { con } from './connection.js';

export async function inserirCliente(usuario) {

  // Verificar se o email já existe
  const [existeEmail] = await con.query('SELECT COUNT(*) as count FROM tb_usuario WHERE ds_email = ?', [usuario.email]);
  const [existeCpf] = await con.query('SELECT COUNT(*) as count FROM tb_usuario WHERE ds_cpf = ?', [usuario.cpf]);

  if (existeEmail[0].count > 0) {
      throw new Error('O email já está cadastrado.');
  }

  if (existeCpf[0].count > 0) {
      throw new Error('O cpf já está cadastrado.');
  }

  // Inserir novo usuário
  const comando = `INSERT INTO tb_usuario (nm_usuario, ds_email, ds_senha, ds_cpf) VALUES (?, ?, ?, ?);`;
  const [resposta] = await con.query(comando, [usuario.usuario, usuario.email, usuario.senha, usuario.cpf]);

  usuario.id = resposta.insertId;

  return usuario;
}

export async function loginCliente(email, senha) {
  
  const comando = 
  `
  SELECT id_usuario AS id, ds_email AS email, nm_usuario AS nome, ds_senha AS senha
  FROM tb_usuario  
  WHERE DS_Email = ?  
  AND DS_Senha = ?   
  `;

  const [linhas] = await con.query(comando, [email, senha])
  return linhas[0];

}