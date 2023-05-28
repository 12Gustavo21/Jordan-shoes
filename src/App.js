import React, { useEffect } from "react";

//Styles
import { GlobalStyle } from "./global/style";
import * as S from "./style";

// Images
import JordanOne from "./assets/img/air-jordan-green.svg";
import JordanTwo from "./assets/img/air-jordan-tropical.svg";
import JordanThree from "./assets/img/air-jordan-retro-purple.svg";
import JordanFour from "./assets/img/air-jordan-smoke-grey.svg";
import JordanFive from "./assets/img/air-jordan-black-red.svg";
import JordanSix from "./assets/img/air-jordan-citrus.svg";
import JordanSeven from "./assets/img/air-jordan-grey.svg";
import JordanEight from "./assets/img/air-jordan-carbon-fiber.svg";

//Components
import ScrollToTopButton from "./components/ScrollToTopButton";

//Aos library
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const gallery = [
    {
      img: JordanOne,
      alt: "Jordan green",
    },
    {
      img: JordanTwo,
      alt: "Jordan purple",
    },
    {
      img: JordanThree,
      alt: "Jordan white and purple",
    },
    {
      img: JordanFour,
      alt: "Jordan gray",
    },
    {
      img: JordanFive,
      alt: "Jordan black and red",
    },
    {
      img: JordanSix,
      alt: "Jordan orange",
    },
    {
      img: JordanSeven,
      alt: "Jordan white",
    },
    {
      img: JordanEight,
      alt: "Jordan tradicional",
    },
  ];

  function getCurrentYear() {
    const year = new Date().getFullYear();
    return year;
  }

  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <GlobalStyle />
      <S.Header>
        <S.Discount>
          <p>Ganhe R$ 10,00 de desconto no frete</p>
        </S.Discount>
        <S.LogoBox>
          <h1>JordanShoes</h1>
        </S.LogoBox>
        <S.Banner>
          <S.Announcement>
            <h2>A melhor loja de Jordan</h2>
            <p>
              <span>O tênis Jordan é fruto de uma velha e forte parceria </span>{" "}
              entre a Nike e o jogador Michael Jordan.
            </p>
          </S.Announcement>
        </S.Banner>
      </S.Header>
      <S.Main>
        <ScrollToTopButton />
        <S.TextBox>
          <h3>Destques</h3>
          <p>
            Frete grátis e chinelo de brinde é aqui, aproveite por tempo
            limitado.
          </p>
        </S.TextBox>
        <section>
          <S.Gallery>
            <S.GalleryItem>
              {gallery.slice(0, 4).map((item, index) => (
                <S.ShoeBox
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="1500"
                >
                  <S.Shoe
                    src={item.img}
                    alt={item.alt}
                    key={index}
                    title={item.alt}
                  />
                </S.ShoeBox>
              ))}
            </S.GalleryItem>
            <S.GalleryItem>
              {gallery.slice(4, 8).map((item, index) => (
                <S.ShoeBox
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="1700"
                >
                  <S.Shoe
                    src={item.img}
                    alt={item.alt}
                    key={index}
                    title={item.alt}
                  />
                </S.ShoeBox>
              ))}
            </S.GalleryItem>
          </S.Gallery>
        </section>
      </S.Main>
      <S.Footer>
        <p
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
        >
          Copyright © {getCurrentYear()}
          <a
            href="https://www.instagram.com/iuricode/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram of Author"
          >
            @iuricode
          </a>
        </p>
      </S.Footer>
    </>
  );
}
