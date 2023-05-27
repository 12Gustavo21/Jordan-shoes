import styled from "styled-components";
import Background from './img/wallpaper.webp';

export const Header = styled.header`
    width: 100%;
    height: 70vh;
`;

export const Discount = styled.section`
    width: 100%;
    height: 8vh;
    display: grid;
    place-items: center;
    background-color: #181818;
    word-break: break-word;
    text-align: center;
    padding: 0 1rem;

    p {
        color: #fff;
        font: 500 1em 'Montserrat', sans-serif;
    }
`;

export const LogoBox = styled.section`
    width: 100%;
    height: 8vh;
    display: grid;
    place-items: center;
    word-break: break-word;

    h1 {
        font: 600 2em 'Montserrat', sans-serif;
        color: #181818;
    }
`;

export const Banner = styled.section`
    width: 100%;
    height: 54vh;
    background: url(${Background}) no-repeat center/cover;
    position: relative;

    &:after {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(1, 1, 1, 0.5);
        z-index: 1;
    }
`;

export const Announcement = styled.section`
    width: 100%;
    height: 100%;
    word-break: break-word;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    color: #f9f9f9;
    padding-left: 7rem;

    h2 {
        font: 600 2.2em 'Montserrat', sans-serif;
        z-index: 2;
    }

    p {
        font: 500 1.1rem/2rem 'Montserrat', sans-serif;
        display: flex;
        flex-direction: column;
        z-index: 2;
    }

    @media only screen and (width <= 768px) {
        padding-left: 1rem;

        h2 {
            font-size: 1.5em;
        }

        p {
            font-size: 1em;
            padding-right: 1rem;
        }
    }
`;