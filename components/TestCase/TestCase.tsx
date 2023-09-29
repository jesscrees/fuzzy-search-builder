import React from "react"
import styled from 'styled-components';

const TestCase = ({ text }) => {
  return (
    <Wrapper>
      { text }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 1px solid blue;
`;

export default TestCase