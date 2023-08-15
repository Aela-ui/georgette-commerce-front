import * as React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image'

export default function HeroComponent() {
    return (
        <StyledContainer>
            <StyledBox>
                <Image 
                    src="/costura.svg" 
                    layout="fill"     
                    objectFit="cover"
                    objectPosition="center" priority/>
            </StyledBox>

            <StyledContent>
                <h1>
                    Somos uma Loja de Tecidos
                </h1>
                <p>
                    Vista a Elegância: Tecidos de Seda para o Seu Estilo Único.
                </p>
            </StyledContent>
        </StyledContainer>
    );
}

const StyledBox = styled.div`
    z-index: -1;
`;

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
