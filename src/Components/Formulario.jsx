import React,{useState} from 'react'
import styled from '@emotion/styled'
import {DiferenciaYear,calcularMarca,obtenerPlan} from "../Helper";
import PropTypes from 'prop-types'


const Campo = styled.div`
    display: flex;
    margin-bottom:1rem;
    align-items: center;
`;
const Label = styled.label`
    flex:0 0 100px;
`;
const Select = styled.select`

    display: block;
    width: 100%;
    padding: 1rem;
    border:1px solid #e1e1e1;
    -webkit-appearance: none;
`;
const InputRadio = styled.input`
    margin:0 1rem;
`;

const Boton = styled.button`
    background-color:#00838f;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border:none;

    transition: background-color 1s ease ;
    margin-top:2rem;

    &:hover{
        background-color:#26c6da;
        cursor:pointer;
    }

`;

const Error = styled.div`
    background-color:red;
    color:white;
    padding:1rem;
    width:100%;
    text-align:center;
    margin-bottom: 20px;
    margin-left: -20px;
    
`;



export default function Formulario(props) {


    const { setResumen,setcargando} = props;
    const [error, setError] = useState(false)

    const [datos, setDatos] = useState({
        marca:'',
        year:'',
        plan:'',
    })

    //estraer valores
    const {marca, year ,plan} = datos;



    //leer los datos del formulario y guardarlos en el estado
    const obtenerInformacion = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const cotizarSeguro = e => {
        e.preventDefault();
        

        if(!marca || !year || !plan)
        {
            setError(true);
            return;
        }
        setError(false);

        let resultado = 2000;

        const diferencia = DiferenciaYear(year)
        resultado -= ((diferencia * 3) * resultado) / 100 
       

        resultado = calcularMarca(marca) * resultado;
        const incrementoPlan = obtenerPlan(plan);
        resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
        
        setcargando(true)
        setTimeout(() => {
            
            setcargando(false)
            setResumen({
                cotizacion: Number(resultado),
                datos
            })

        }, 2000);
    }


    return (
        <form onSubmit={cotizarSeguro}>
        {error ? <Error>Todos los campos son hobligatorios</Error> : null}
            <Campo>
                <Label>Marca</Label>
                <Select name="marca" value={marca} onChange={obtenerInformacion}>
                    <option value=""> --- Seleccione ---</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Año</Label>
                <Select name="year" value={year} onChange={obtenerInformacion}>
                    <option value=""> --- Seleccione ---</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option> 
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>

                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2017">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan==="basico"}
                    onChange={obtenerInformacion}
                />Basico
                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan==="completo"}
                    onChange={obtenerInformacion}
                />Completo
            </Campo>
            <Boton type="submit">
                    Cotizar
                </Boton>
        </form>
    )
}



Formulario.propTypes = {
    setResumen: PropTypes.func.isRequired,
    setcargando: PropTypes.func.isRequired
}