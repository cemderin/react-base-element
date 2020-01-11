import React from 'react';
import styled from 'styled-components';

const StyledBaseBody = styled.section`
    flex-grow: 1;
    flex-shrink: 0;
    display:flex;
    flex-direction: column;
`;

const BaseBody = (props) => {
    return <StyledBaseBody {...props}>
        {props.children}
    </StyledBaseBody>;
}

export default BaseBody