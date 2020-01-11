import React from 'react';
import styled from 'styled-components';

const StyledBaseFooter = styled.footer`
    flex-grow: 0;
    flex-shrink: 0;
    display:flex;
    flex-direction: row;
`;

const BaseFooter = (props) => {
    return <StyledBaseFooter {...props}>
        {props.children}
    </StyledBaseFooter>;
}

export default BaseFooter