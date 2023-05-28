import styled from "styled-components";

export const ButtonBox = styled.section`
    .scroll-to-top-button {
        display: none;
        position: fixed;
        bottom: 1.25rem;
        right: 1.25rem;
        width: 3.5rem;
        height: 3.5rem;
        border: none;
        background-color: #181818;
        color: #f9f9f9;
        border: 0.125rem solid #f9f9f9;
        font-size: 2em;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        z-index: 1;
    }

    .scroll-to-top-button.visible {
        display: block;
        opacity: 1;
    }
`;
