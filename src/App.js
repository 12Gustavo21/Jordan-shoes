import React, { useEffect } from "react";

//Styles
import { GlobalStyle } from "./global/style";
import * as S from "./style";

// Images
import JordanOne from "./img/air-jordan-green.svg";
import JordanTwo from "./img/air-jordan-tropical.svg";
import JordanThree from "./img/air-jordan-retro-purple.svg";
import JordanFour from "./img/air-jordan-smoke-grey.svg";
import JordanFive from "./img/air-jordan-citrus.svg";
import JordanSix from "./img/air-jordan-grey.svg";
import JordanLogo from "./img/logo-jordan.svg";

//Components
import ScrollToTopButton from "./components/ScrollToTopButton";

//Aos library
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const itens = [
    {
      img: JordanOne,
      alt: "Jordan One",
      title: "Air Jordan 1 Mid Dutch Green",
      type: "Tênis Air Jordan",
      price: "R$ 1.199,99",
    },
    {
      img: JordanTwo,
      alt: "Jordan Two",
      title: "Air Jordan 1 High Zoom CMFT Tropical Twist",
      type: "Tênis Air Jordan",
      price: "R$ 1.049,00",
    },
    {
      img: JordanThree,
      alt: "Jordan Three",
      title: "Air Jordan 1 Retro High OG Court Purple",
      type: "Tênis Air Jordan",
      price: "R$ 1.350,00",
    },
    {
      img: JordanFour,
      alt: "Jordan Four",
      title: "Air Jordan 1 Mid GS Light Smoke Grey",
      type: "Tênis Air Jordan",
      price: "R$ 1.585,00",
    },
    {
      img: JordanFive,
      alt: "Jordan Five",
      title: "Air Jordan 1 Mid SE Bright Citrus",
      type: "Tênis Air Jordan",
      price: "R$ 949,99",
    },
    {
      img: JordanSix,
      alt: "Jordan Six",
      title: "Air Jordan 1 Mid Grey Camo",
      type: "Tênis Air Jordan",
      price: "R$ 999,99",
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
          <h3>Frete grátis para todo o Brasil</h3>
        </S.Discount>
        <S.Banner>
          <S.Announcement>
            <S.LogoBox>
              <img src={JordanLogo} alt="Jordan logo" />
              <h1>JordanShoes</h1>
            </S.LogoBox>
            <h2>A melhor loja de Jordan</h2>
            <p>
              O tênis Jordan é fruto de uma velha e forte parceria entre a Nike
              e o jogador Michael Jordan.
            </p>
          </S.Announcement>
        </S.Banner>
      </S.Header>
      <S.Main>
        <ScrollToTopButton />
        <S.TextBox>
          <h4>Os melhores em só lugar</h4>
          <p>
            A marca Jordan na JordanShoes é a escolha certa para os amantes de
            sneakers que buscam estilo e conforto.
          </p>
        </S.TextBox>
        <section>
          <S.Gallery>
            <S.GalleryItem>
              {itens.slice(0, 3).map((item, index) => (
                <S.Item
                  key={index}
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="1500"
                >
                  <S.ShoeBox>
                    <S.Shoe src={item.img} alt={item.alt} title={item.alt} />
                  </S.ShoeBox>
                  <S.ItemInfo>
                    <S.ItemTitle>{item.title}</S.ItemTitle>
                    <S.ItemType>{item.type}</S.ItemType>
                    <S.ItemPrice>{item.price}</S.ItemPrice>
                  </S.ItemInfo>
                </S.Item>
              ))}
            </S.GalleryItem>
            <S.GalleryItem>
              {itens.slice(3, 6).map((item, index) => (
                <S.Item
                  key={index}
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="1500"
                >
                  <S.ShoeBox>
                    <S.Shoe src={item.img} alt={item.alt} title={item.alt} />
                  </S.ShoeBox>
                  <S.ItemInfo>
                    <S.ItemTitle>{item.title}</S.ItemTitle>
                    <S.ItemType>{item.type}</S.ItemType>
                    <S.ItemPrice>{item.price}</S.ItemPrice>
                  </S.ItemInfo>
                </S.Item>
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
