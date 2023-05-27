import React from 'react';

//Styles
import { GlobalStyle } from './global/style';
import * as S from './style';

// Images
import JordanOne from './img/air-jordan-green.svg';
import JordanTwo from './img/air-jordan-tropical.svg';
import JordanThree from './img/air-jordan-retro-purple.svg';
import JordanFour from './img/air-jordan-smoke-grey.svg';
import JordanFive from './img/air-jordan-black-red.svg';
import JordanSix from './img/air-jordan-citrus.svg';
import JordanSeven from './img/air-jordan-grey.svg';
import JordanEight from './img/air-jordan-carbon-fiber.svg';

const gallery = [
  {
    img: JordanOne,
    alt: "Jordan green"
  },
  {
    img: JordanTwo,
    alt: "Jordan purple"
  },
  {
    img: JordanThree,
    alt: "Jordan white and purple"
  },
  {
    img: JordanFour,
    alt: "Jordan gray"
  },
  {
    img: JordanFive,
    alt: "Jordan black and red"
  },
  {
    img: JordanSix,
    alt: "Jordan orange"
  },
  {
    img: JordanSeven,
    alt: "Jordan white"
  },
  {
    img: JordanEight,
    alt: "Jordan tradicional"
  }
]

export default function App() {

  function getCurrentYear() {
    const year = new Date().getFullYear();
    return year;
  }

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
            <p><span>O tênis Jordan é fruto de uma velha e forte parceria </span> entre a Nike e o jogador Michael Jordan.</p>
          </S.Announcement>
        </S.Banner>
      </S.Header>
      <main>
        <section>
          <h3>Destques</h3>
          <p>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.</p>
        </section>
        <section>
          <figure>
            <section>
              {
                gallery.slice(0, 4).map((item, index) => (
                  (
                    <section>
                      <img src={item.img} alt={item.alt} key={index} />
                    </section>
                  )
                ))
              }
            </section>
            <section>
              {
                gallery.slice(4, 8).map((item, index) => (
                  (
                    <section> 
                      <img src={item.img} alt={item.alt} key={index} />
                    </section>
                  )
                ))
              }
            </section>
          </figure>
        </section>
      </main>
      <footer>
        <section>
          <p>Copyright © {getCurrentYear()}<a href="https://www.instagram.com/iuricode/" target="_blank"
            rel="noopener noreferrer">@iuricode</a></p>
        </section>
      </footer>
    </>
  )
}
