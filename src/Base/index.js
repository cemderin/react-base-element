import React from 'react';
import styled from 'styled-components';

const StyledBase = styled.article` 
    display:flex;
    flex-direction: column;
`;

const Base = (props) => {
    return <StyledBase {...props}>
        {props.children}
    </StyledBase>;
}

export default Base;