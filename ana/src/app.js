import Texto from './componentes/texto';
import Paragrafo from  './componentes/paragrafo';
import Comentario from './componentes/comentario';
import Ctexto from './componentes/ctexto';
import Autor from './componentes/autor';
import Autorn from './componentes/autor';
function App(){
    return(
        <div>
            <h1>Comentários</h1>
            <Comentario number= "1"/>
            <Ctexto/>
            <Autorn autor="Nome"/>
            <Comentario number= "2"/>
            <Ctexto/>
            <Autorn autor="Nome"/>
            <Comentario number= "3"/>
            <Ctexto/>
            <Autorn autor="Nome"/>
        </div>
    )
}
export default App