import React from "react"
import styled from 'styled-components';

const ConfigOption = ({ text }) => {
  return (
    <Wrapper>
      { text }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 1px solid green;
`;

export default ConfigOption