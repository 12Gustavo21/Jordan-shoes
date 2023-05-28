import styled from "styled-components";
import Background from './assets/img/wallpaper.webp';

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

export const Main = styled.main`
    width: 100%;
    min-height: 100vh;
    margin-bottom: 2rem;
`;

export const TextBox = styled.section`
    width: 100%;
    height: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    word-break: break-word;
    text-align: center;

    h3 {
        font: 600 1.7em 'Montserrat', sans-serif;
        color: #181818;
    }

    p {
        font: 500 1rem 'Montserrat', sans-serif;
        color: #474747;
        padding: 0 1rem;
    }
`;

export const Gallery = styled.figure`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;

    @media only screen and (width <= 1410px) {
        gap: 2rem;
    }
`;

export const GalleryItem = styled.section`
    width: 100%;
    min-height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
`;

export const ShoeBox = styled.section`
    width: 20rem;
    height: 17rem;
    background: #ebe9ea;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover img {
        transform: rotate(15deg);
        filter: saturate(2);
    }

    @media only screen and (width <= 1410px) {
        width: 30rem;
    }
`;

export const Shoe = styled.img`
    width: 75%;
    transition: .5s all ease;

    &:hover {
        transform: scale(1.1) !important;
    }
`;

export const Footer = styled.footer`
    width: 100%;
    height: 10vh;
    background-color: #181818;
    display: grid;
    place-items: center;
    padding-right: 8rem;
    font: 400 1.5em 'Montserrat', sans-serif;
    text-align: center;
    color: #F3F5F7;

    a {
        color: #F3F5F7;
        text-decoration: none;
        position: absolute;
        padding-left: .5rem;
    }

    a::after {
        position: relative;
        display: block;
        content: "";
        border-bottom: #F3F5F7 0.125rem solid;
        border-radius: 0.125rem;
        transform: scaleX(0.1);
        transform-origin: center;
        transition: transform 300ms ease-in-out;
    }

    a:hover::after {
        transform: scaleX(1);
    }

    @media only screen and (width <= 425px) {
        padding: 0 1rem;
        font-size: 1.2rem;
        justify-items: flex-start;
    }
`;