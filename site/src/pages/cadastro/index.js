import './index.scss'

import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function Cadastro() {

  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [validacao, setValicadao] = useState('');


  const navigate = useNavigate();

  async function entrarClick() {

    try {
      const r = await axios.post('http://localhost:9090/usuario/cadastro', {
        usuario: usuario,
        email: email,
        senha: senha,
        cpf: cpf
      });

      toast.dark('Cadastrado com sucesso, agora faça o login!')

      setTimeout(() => {
        navigate('/');
      }, 2000)

    } catch (err) {

      if (err.response)

        toast.dark(err.response.data.erro);
      else
        toast.dark(err.message);
    }
  }

  function mascara(v) {
    v = v.replace(/\D/g, "")                    //Remove tudo o que não é dígito
    v = v.replace(/(\d{3})(\d)/, "$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
    v = v.replace(/(\d{3})(\d)/, "$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
    //de novo (para o segundo bloco de números)
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
    return v
  }

  let x = mascara(cpf);


  return (
    <div className="pagina-Cadastro" >



      <div className='img-bike'>

        <img className="cadeado" src="/assets/images/cadeado.png" alt="" />
        <img className="bike" src="/assets/images/bike.png" alt="" />

        <div className='login'>

          <div className='signup'>
            <p>Já possui uma conta?</p>
            <Link to='/'>
              <button>Log in</button>
            </Link>
          </div>

          <div className='info'>
            <h1>Registre-se</h1>

            <p>Nome:</p>
            <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)} />

            <p>Email:</p>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

            <p>Senha:</p>
              <div className='senhaSeparacao'>
                <input type="text" value={senha} onChange={e => setSenha(e.target.value)} />
              <div className='point'>
                <div> <strong> Sua senha deve conter: </strong> <br/> • Letra maiúscula <br/> • Letra minúscula <br/> • Número <br/> • Caractere especial (@!#$)</div> 
              </div>  
              
              </div>

            <p>CPF:</p>
            <input type='text' maxLength={14} value={x} onChange={e => setCpf(e.target.value)} />


            <button onClick={entrarClick}>Sign in</button>

          </div>

        </div>

      </div>

    </div>
  )

}

export default Cadastro;