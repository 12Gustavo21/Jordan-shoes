import styled from "styled-components";
import Background from "./img/wallpaper.png";

export const Header = styled.header`
  width: 100%;
  height: 70vh;
`;

export const Discount = styled.section`
  width: 100%;
  height: 8vh;
  display: grid;
  place-items: center;
  word-break: break-word;

  h3 {
    font: 600 1.3em "Archivo", sans-serif;
    color: #121214;
  }
`;

export const Banner = styled.section`
  width: 100%;
  height: 54vh;
  background: url(${Background}) no-repeat top/cover;
  background-attachment: fixed;
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
  gap: 1rem;
  color: #f9f9f9;
  padding-left: 7rem;
  position: absolute;
  z-index: 2;

  h2 {
    font: 600 2.2em "Montserrat", sans-serif;
  }

  p {
    font: 500 1.1rem "Montserrat", sans-serif;
    display: flex;
    flex-direction: column;
  }

  img {
    width: 3rem;
    height: 3rem;
    fill: #fff;
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

export const LogoBox = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    font: 500 1.3rem "Montserrat", sans-serif;
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

  h4 {
    font: 600 1.7em "Montserrat", sans-serif;
    color: #181818;
  }

  p {
    font: 500 1rem "Montserrat", sans-serif;
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

export const Item = styled.section`
  width: 24rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
`;

export const ShoeBox = styled.section`
  width: 100%;
  height: 12.5rem;
  background: #ebe9ea;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover img {
    transform: rotate(15deg);
    filter: saturate(2);
  }
`;

export const Shoe = styled.img`
  width: 14.0625rem;
  height: 8.4375rem;
  transition: 0.5s all ease;
`;

export const ItemInfo = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const ItemTitle = styled.h4`
  font: 500 1.125em/130% "Archivo", sans-serif;
  color: #121214;
  word-break: break-word;
`;

export const ItemType = styled.p`
  font: 500 1em "Archivo", sans-serif;
  color: #7ca2f4;
  word-break: break-word;
`;

export const ItemPrice = styled.p`
  font: 500 1.25em "Space Grotesk", sans-serif;
  color: #121214;
  padding: 1rem 0 3rem 0;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 10vh;
  background-color: #181818;
  display: grid;
  place-items: center;
  padding-right: 8rem;
  font: 400 1.5em "Montserrat", sans-serif;
  text-align: center;
  color: #f3f5f7;

  a {
    color: #f3f5f7;
    text-decoration: none;
    position: absolute;
    padding-left: 0.5rem;
  }

  a::after {
    position: relative;
    display: block;
    content: "";
    border-bottom: #f3f5f7 0.125rem solid;
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
