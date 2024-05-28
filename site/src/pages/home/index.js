

import './index.scss'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import storage from 'local-storage';

function Home() {



  const navigate = useNavigate();

  useEffect(() => {
    if(storage('cliente-logado')) {
        navigate('/home')
    } else {
        navigate('/')
    }
  }, [])


    function sairClick() {
        storage.remove('cliente-logado');
        navigate('/');
    }

  return (
    <div className="pagina-Home">
      <button onClick={sairClick}>Sair</button>
    </div>
  )

}

export default Home;