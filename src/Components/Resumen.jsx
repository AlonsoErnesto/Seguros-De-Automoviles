import React from 'react'
import styled from '@emotion/styled'
import {primerMayuscula} from '../Helper'
import PropTypes from 'prop-types'




const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align:center;
    background-color: #00838f;;
    color:#fff;
    margin-top: 20px;
`


export default function Resumen({datos}) {

    const {marca,year,plan} = datos;

    if(marca ==='' || year === '' || plan === '') return null

   const Marca =  primerMayuscula(marca)
    const Plan = primerMayuscula(plan)
    return (
        <ContenedorResumen>
            <h2>Resultado de la cotizacion</h2>
            <ul>
                <li>Marca : {Marca}</li>
                <li>Plan: {Plan}</li>
                <li>Año : {year}</li>
            </ul>
        </ContenedorResumen>
    )
}

Resumen.propTypes = {
    datos:PropTypes.object.isRequired
}