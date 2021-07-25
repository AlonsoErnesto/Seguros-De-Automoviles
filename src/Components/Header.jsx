import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
// es necesario esta instalacion para EMOTION npm install @emotion/react

const ContenedorHeader = styled.header`
    background-color:#26c6da;
    padding: 10px;
    font-weight: bold;
    color:"#ffffff";
`;

const TextoHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align:center;
`;


 const Header = (props) => {

    const {title} = props;

    return (
        <ContenedorHeader>
            <TextoHeader>{title}</TextoHeader>
        </ContenedorHeader>
    )
}

Header.propTypes = {
    title:PropTypes.string.isRequired,
}


export default Header


