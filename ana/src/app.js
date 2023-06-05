import Texto from './componentes/texto';
import Paragrafo from  './componentes/paragrafo';
import Comentario from './componentes/comentario';
import Ctexto from './componentes/ctexto';
import Autor from './componentes/autor';
import Autorn from './componentes/autor';
import Componente1 from './componentes/componente1';
import Componente2 from './componentes/componente2';
import Componente3 from './componentes/componente3';
import Componente4 from './componentes/componente4';
function App(){
    return(
        <div>
            <h1>Hello World</h1>
            <Componente1 />
            <Componente2 />
            <Componente3 />
            <Componente4 texto="lorem ipsum"/>
        </div>
    )
}
export default App