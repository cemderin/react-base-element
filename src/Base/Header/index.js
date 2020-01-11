import React from 'react';
import styled from 'styled-components';

const StyledBaseHeader = styled.header`
    flex-grow: 0;
    flex-shrink: 0;
    display:flex;
    flex-direction: row;
`;

const BaseHeader = (props) => {
    return <StyledBaseHeader {...props}>
        {props.children}
    </StyledBaseHeader>;
}

export default BaseHeader