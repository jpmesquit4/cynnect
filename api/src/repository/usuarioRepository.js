import { con } from './connection.js';

export async function inserirCliente(usuario) {
     const comando = `insert into tb_usuario(nm_usuario, ds_email, ds_senha, ds_cpf)
                                       value(?,?,?,?);`


     const [resposta] = await con.query(comando, [usuario.usuario, usuario.email, usuario.senha, usuario.cpf])
     usuario.id = resposta.insertId;

     return usuario;
}

export async function loginCliente(email, senha) {
  const comando = 
  `
  SELECT id_usuario AS id, nm_usuario AS nome, ds_email AS email
  FROM tb_usuario  
  WHERE DS_Email = ?  
  AND DS_Senha = ?   
  `;

  const [linhas] = await con.query(comando, [email, senha])
  return linhas[0];

}