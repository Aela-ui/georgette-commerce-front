import * as React from 'react';
import styled from '@emotion/styled';

export default function BottomBarComponent() {
    return (
        <StyledContainer>
            <StyledContent>
                <h1>
                    Obrigada e volte sempre!
                </h1>
                <p>
                    Vista a Elegância: Tecidos de Seda para o Seu Estilo Único.
                </p>
            </StyledContent>
        </StyledContainer>
    );
}


const StyledContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 60vh;
`;

const StyledContent = styled.div`
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: 'Dancing Script', cursive;
    font-size:21px ;
    background-color: rgba(0, 0, 0, 0.5); 
    flex-direction: column;
`;