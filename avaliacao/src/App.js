import H1 from './componentes/h1';
import Codigo from './componentes/componente1';
import Nome from './componentes/componente2';
import Telefone from './componentes/componente3';
import Footer from './componentes/footer';
import Aviso from './componentes/aviso';
function App() {
  return (
    <div>
        <header>
          <H1 />
        </header>
        <h3>Ficha dos Alunos</h3>
        <div class="bloco">
          <Codigo text="001"/>
          <Nome text="Ana"/>
          <Telefone text="11998767679"/>
        </div>
        
        <div class="bloco">
          <Codigo text="002"/>
          <Nome text="Arthur"/>
          <Telefone text="11996662562"/>
        </div>
        <div class= "aviso">
          <Aviso />
        </div>
        <footer>
          <Footer />
        </footer>
        
    </div>
  )
}

export default App;
