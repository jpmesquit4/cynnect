import './index.scss';



function Home() {
  return (
    <div className="pagina-home" >

      
      
      <div className='img-bike'>

        <img className="cadeado" src="/assets/images/cadeado.png" alt="" />
        <img className="bike" src="/assets/images/bike.png" alt="" />

        <div className='login'>

          <div className='signup'>
            <p>Ainda não possui uma conta?</p>
            <button>Sign up</button>
          </div>
          
          <div className='info'>
            <h1>Login</h1>

            <p>Email:</p>
            <input type="text" />

            <p>Senha:</p>
            <input type="password" />

            <button>Sign in</button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;
