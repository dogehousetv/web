import React from "react";
import styled from "styled-components";

const Flex = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    *::-moz-selection {background: ${({ theme }) => theme.palette.primary[500]};; color: white;}
    *::selection {background: ${({ theme }) => theme.palette.primary[500]};; color: white;}
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 235px 640px 325px;
    column-gap: 60px;

    @media(max-width: ${({ theme }) => theme.breakpoints.three}px) {
        grid-template-columns: 60px 640px 325px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.two}px) {
        grid-template-columns: 60px 640px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.one}px) {
        grid-template-columns: 100%;
        width: 100%;
        padding: 0 1rem;
    }
`;

type GridProperties = {
    children: React.ReactNode;
};

export function Grid({ children }: GridProperties): JSX.Element {
    return (
        <Flex>
            <Wrapper>
                {children}
            </Wrapper>
        </Flex>
    );
}