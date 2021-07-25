import React from 'react';
import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'     

const Mensaje = styled.p`
    background-color: rgb(127,224,237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`

const ResultadoCotizacion = styled.div`
    text-align:center;
    padding:.5rem;
    border:1px solid #00838f;
    background-color:rgb(127,224,237);
    margin-top: 1rem;
    position:relative;
`

export default function Resultado  ({cotizacion})  {

   
    if(cotizacion === 0) return null;

    return ( 
        <ResultadoCotizacion>
            <TransitionGroup
                component="span"
                className="resultado"
            >
                <CSSTransition
                    classNames="resultado"
                    key={cotizacion}
                    timeout={{enter:500,exit:500}}
                >
                    <Mensaje>Total a pagar : <span>$ {cotizacion}</span></Mensaje>
                </CSSTransition>
            </TransitionGroup>
        </ResultadoCotizacion>
     );
}
 
Resultado.propTypes = {
    cotizacion:PropTypes.number.isRequired
}