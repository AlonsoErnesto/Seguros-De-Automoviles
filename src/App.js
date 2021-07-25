import React,{useState} from 'react'
import styled from '@emotion/styled';
//componets
import Header from './Components/Header.jsx'
import Formulario from './Components/Formulario'
//response
import Resumen from './Components/Resumen'
import Resultado from './Components/Resultado'
//Spinner
import Spinner from './Components/Spinner'

function App() {
      // 

      const Contenedor = styled.div`
      max-width: 600px;
      margin:0 auto;
      `;

      const ContenedorFormulario = styled.div`
      background-color:#fff;
      padding:3rem;
      `;


      // 


  const [resumen, setResumen] = useState({
    cotizacion:0,
    datos:{
      marca:'',
      year:'',
      plan:''
    }
  })
  const {datos,cotizacion} = resumen;
  const [cargando, setcargando] = useState(false)
  
 
  const title = "Seguros"
  return (
    <Contenedor>
      <Header
        title={title}
      />
      <ContenedorFormulario>
        <Formulario setResumen={setResumen} setcargando={setcargando}/>
        {/* SPINER */}
        {cargando ? <Spinner/> : ''}
        {/* SPINER */}
        {!cargando ? <Resumen datos = {datos}/> : null}
        {!cargando ? <Resultado  cotizacion={cotizacion}/> : null}
        
      </ContenedorFormulario>
        
    </Contenedor>
  );
}

export default App;
