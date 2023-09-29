import React from "react"
import styled from 'styled-components';

const CodeOutput = ({ text }) => {
  return (
    <Wrapper>
      { text }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 1px solid red;
`;

export default CodeOutput