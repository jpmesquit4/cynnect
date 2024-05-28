import './index.scss';

import { loginUsuario } from '../../api/usuario';
import storage from 'local-storage';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  

  const navigate = useNavigate();

  async function entrarClick() {
    
    try {
      const r = await loginUsuario(email, senha)
      storage('cliente-logado', r)

      toast.dark("Logado com sucesso!")

      setTimeout(() => {
        navigate('/home');
      }, 1000)

    } catch (err) {

      if (err.response.status === 401) {
        setErro(err.response.data.erro)
      }
    }
}



  return (
    <div className="pagina-login" >

      
      
      <div className='img-bike'>

        <img className="cadeado" src="/assets/images/cadeado.png" alt="" />
        <img className="bike" src="/assets/images/bike.png" alt="" />

        <div className='login'>

          <div className='signup'>
            <p>Ainda não possui uma conta?</p>
            <Link to='/cadastro'>
              <button>Sign up</button>
              </Link>
          </div>
          
          <div className='info'>
            <h1>Login</h1>

            <p>Email:</p>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

            <p>Senha:</p>
            <input type="text" value={senha} onChange={e => setSenha(e.target.value)}/>

            <h5>{erro}</h5>

            <button onClick={entrarClick}>Sign in</button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;
