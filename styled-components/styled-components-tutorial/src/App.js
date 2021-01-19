import styled from "styled-components";

function App() {

  const Wrapper = styled.section`
     display:flex;
     justify-content:center;
     align-items:center;

      height:500px;
      width:500px;

      background-color:red;
  `;

  const Title = styled.h1`
      font-size:1em;
      color:blue;
  `;

  return (
    <Wrapper>
      <Title>
        Hello, Welcome Back!!
      </Title>
    </Wrapper>
  );
}

export default App;
