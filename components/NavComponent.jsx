import * as React from 'react';
import styled from '@emotion/styled';
import {
    AppBar, Toolbar, Typography
}from '@mui/material'

export default function NavComponent() {
    return (
        <StyledAppBar>
            <StyledToolbar>
                <TypoNav>
                    Georgette Tissus
                </TypoNav>
            </StyledToolbar>
        </StyledAppBar>
    );
}

const StyledAppBar = styled(AppBar)`
    background: #7b8055;
    color:#ffff;
`;

const StyledToolbar = styled(Toolbar)`
    justify-content: center ;
`;

const TypoNav = styled(Typography)`
    font-size: 27px ;
    font-family: 'Dancing Script', cursive;
    font-weight: bold ;
`
