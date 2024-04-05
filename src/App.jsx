import './main.css'
import './App.css';
import { Header } from './header/header'
import { Footer } from './footer/footer'
import { Weber } from './components/web-sites';
import back1 from './images/BackGround-Banner1.png'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <section className="banner">
          <ul className="multiple-banner">
            <li className="left-side">
              <h1>
                Alavanque suas vendas com um site de qualidade.
              </h1>
              <p>
                Gere mais tráfego, lead, e clientes com potencial para o seu negócio se transformar.
              </p>
              <a href='#'>Transformar Meu Negócio 🚀</a>
            </li>
            <li className="right-side">
              <figure>
                <img src={back1} alt="" />
              </figure>
            </li>
          </ul>
        </section>

        <section className='dowarrow'>
        <span class="material-symbols-outlined">
arrow_downward
</span>
        </section>

        <section className="sites">
          <nav className='sites-naver'>
            <h2>
              Conheça <span>alguns </span> de nossos cases.
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam facere nesciunt ullam vel, obcaecati natus illo modi error sint consequatur?</p>
          </nav>

          <ul className='webers-ultimate'>
            <Weber></Weber>
            <Weber></Weber>
            <Weber></Weber>
          </ul>

        </section>
      </main>
    </div>
  );
}

export default App;
