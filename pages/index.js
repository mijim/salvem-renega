import Head from 'next/head'
import { useEffect, useState } from 'react'
import { translateEs } from '../translations/es';
import { translateCat } from '../translations/cat';
import Fade from 'react-reveal/Fade';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

export default function Home() {
  const [language, setLanguage] = useState('es');
  const [showDownArrow, setShowDownArrow] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    setLanguage(navigator.language.indexOf('es') > -1 ? 'es' : 'cat');

  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [showDownArrow]);

  const handleScroll = (ev) => {
    if (window.scrollY > 100 && showDownArrow) {
      setShowDownArrow(false);
    } else if (window.scrollY <= 100 && !showDownArrow) {
      setShowDownArrow(true);
    }
  }


  // const t = (copy) => {
  //   return language === 'es' ? translateEs[copy] : translateCat[copy];
  // }



  return (
    <ParallaxProvider>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"></link>
      <div className="container">
        <div className="header">
          <div className={`header-language ${language === 'es' ? 'selected' : ''}`} onClick={() => setLanguage('es')}>
            ES
        </div>
          <div className={`header-language ${language === 'cat' ? 'selected' : ''}`} onClick={() => setLanguage('cat')}>
            CAT
        </div>
        </div>
        <Head>
          <title>Salvem la renegà! 🌿</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className="title">
            {t('main-title')}
          </h1>
          <h2 className="subtitle">
            {t('main-subtitle')}
          </h2>
          <div className="title-button" onClick={() => window.scrollTo(0, 700)}>
            {'SABER MAS'}
          </div>

        </main>
        <Parallax y={[-10, 24]}  >
          <div className="background-image">
            <img src='/background-image.svg' />
          </div>
        </Parallax >
      </div>
      <div className="body-container">
        <div className="background-gradient-1"></div>
        <div className="background-gradient-2"></div>

        <div className={`arrow-down ${showDownArrow ? '' : 'hide'}`}>
          <img src="/arrow-down.svg" />
        </div>
        <Fade right>
          <div className="manifest-section">
            <div className="manifest-section-title">
              {t('m-title-1')}
            </div>
            <div className="manifest-section-text">
              {t('m-text-1')}
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className="manifest-section ">
            <div className="manifest-section-title">
              {t('m-title-2')}
            </div>
            <div className="manifest-section-text">
              {t('m-text-2')}
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="manifest-section ">
            <div className="manifest-section-title">
              {t('m-title-3')}
            </div>
            <div className="manifest-section-text">
              {t('m-text-3')}
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className="manifest-section ">
            <div className="manifest-section-title">
              {t('m-title-4')}
            </div>
            <div className="manifest-section-text">
              {t('m-text-4')}
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="manifest-section ">
            <div className="manifest-section-title">
              {t('m-title-5')}
            </div>
            <div className="manifest-section-text">
              {t('m-text-5')}
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className="manifest-section ">
            <div className="manifest-section-title">
              {t('m-title-6')}
            </div>
            <div className="manifest-section-text">
              {t('m-text-6')}
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="manifest-section ">
            <div className="manifest-section-title">
              {t('m-title-7')}
            </div>
            <div className="manifest-section-text">
              {t('m-text-7')}
            </div>
          </div>
          {/* <Fade bottom>
            <video className="start-video" controls={true} autoPlay={true}>
              <source src={'/Salvem_Renega_v2.mp4'} type="video/mp4" />
            </video>
          </Fade> */}
        </Fade>

        {/* <div className="images-container">
          <img src="/arbol.svg" />
          <img src="/excavadora.svg" />
          <img src="/tortuga.svg" />
        </div> */}

      </div>
      {/* <footer>
        Contacta con nosotros
      </footer> */}

      <style jsx>{`
         @font-face {
          font-family: 'Belta';
          src: url('/fonts/belta-bold.ttf'); 
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: 'Inter';
          font-style:  normal;
          font-weight: 100;
          font-display: swap;
          src: url("/fonts/Inter-Thin.woff2?v=3.13") format("woff2"),
               url("/fonts/Inter-Thin.woff?v=3.13") format("woff");
        }
        @font-face {
          font-family: 'Inter';
          font-style:  italic;
          font-weight: 100;
          font-display: swap;
          src: url("/fonts/Inter-ThinItalic.woff2?v=3.13") format("woff2"),
               url("/fonts/Inter-ThinItalic.woff?v=3.13") format("woff");
        }
        
        @font-face {
          font-family: 'Inter';
          font-style:  normal;
          font-weight: 200;
          font-display: swap;
          src: url("/fonts/Inter-ExtraLight.woff2?v=3.13") format("woff2"),
               url("/fonts/Inter-ExtraLight.woff?v=3.13") format("woff");
        }
        @font-face {
          font-family: 'Inter';
          font-style:  italic;
          font-weight: 200;
          font-display: swap;
          src: url("/fonts/Inter-ExtraLightItalic.woff2?v=3.13") format("woff2"),
               url("/fonts/Inter-ExtraLightItalic.woff?v=3.13") format("woff");
        }
        
        @font-face {
          font-family: 'Inter';
          font-style:  normal;
          font-weight: 300;
          font-display: swap;
          src: url("/fonts/Inter-Light.woff2?v=3.13") format("woff2"),
               url("/fonts/Inter-Light.woff?v=3.13") format("woff");
        }
        @font-face {
          font-family: 'Inter';
          font-style:  italic;
          font-weight: 300;
          font-display: swap;
          src: url("/fonts/Inter-LightItalic.woff2?v=3.13") format("woff2"),
               url("/fonts/Inter-LightItalic.woff?v=3.13") format("woff");
        }
        
        @font-face {
          font-family: 'Inter';
          font-style:  normal;
          font-weight: 400;
          font-display: swap;
          src: url("/fonts/Inter-Regular.woff2?v=3.13") format("woff2"),
               url("/fonts/Inter-Regular.woff?v=3.13") format("woff");
        }
        @font-face {
          font-family: 'Inter';
          font-style:  italic;
          font-weight: 400;
          font-display: swap;
          src: url("/fonts/Inter-Italic.woff2?v=3.13") format("woff2"),
               url("/fonts/Inter-Italic.woff?v=3.13") format("woff");
        }
        
        @font-face {
          font-family: 'Inter';
          font-style:  normal;
          font-weight: 500;
          font-display: swap;
          src: url("/fonts/Inter-Medium.woff2?v=3.13") format("woff2"),
               url("/fonts/Inter-Medium.woff?v=3.13") format("woff");
        }
        @font-face {
          font-family: 'Inter';
          font-style:  italic;
          font-weight: 500;
          font-display: swap;
          src: url("/fonts/Inter-MediumItalic.woff2?v=3.13") format("woff2"),
               url("/fonts/Inter-MediumItalic.woff?v=3.13") format("woff");
        }
        
        @font-face {
          font-family: 'Inter';
          font-style:  normal;
          font-weight: 600;
          font-display: swap;
          src: url("/fonts/Inter-SemiBold.woff2?v=3.13") format("woff2"),
               url("/fonts/Inter-SemiBold.woff?v=3.13") format("woff");
        }
        @font-face {
          font-family: 'Inter';
          font-style:  italic;
          font-weight: 600;
          font-display: swap;
          src: url("/fonts/Inter-SemiBoldItalic.woff2?v=3.13") format("woff2"),
               url("/fonts/Inter-SemiBoldItalic.woff?v=3.13") format("woff");
        }
        
        @font-face {
          font-family: 'Inter';
          font-style:  normal;
          font-weight: 700;
          font-display: swap;
          src: url("/fonts/Inter-Bold.woff2?v=3.13") format("woff2"),
               url("/fonts/Inter-Bold.woff?v=3.13") format("woff");
        }
        @font-face {
          font-family: 'Inter';
          font-style:  italic;
          font-weight: 700;
          font-display: swap;
          src: url("/fonts/Inter-BoldItalic.woff2?v=3.13") format("woff2"),
               url("/fonts/Inter-BoldItalic.woff?v=3.13") format("woff");
        }
        
        @font-face {
          font-family: 'Inter';
          font-style:  normal;
          font-weight: 800;
          font-display: swap;
          src: url("/fonts/Inter-ExtraBold.woff2?v=3.13") format("woff2"),
               url("/fonts/Inter-ExtraBold.woff?v=3.13") format("woff");
        }
        @font-face {
          font-family: 'Inter';
          font-style:  italic;
          font-weight: 800;
          font-display: swap;
          src: url("/fonts/Inter-ExtraBoldItalic.woff2?v=3.13") format("woff2"),
               url("/fonts/Inter-ExtraBoldItalic.woff?v=3.13") format("woff");
        }
        
        @font-face {
          font-family: 'Inter';
          font-style:  normal;
          font-weight: 900;
          font-display: swap;
          src: url("/fonts/Inter-Black.woff2?v=3.13") format("woff2"),
               url("/fonts/Inter-Black.woff?v=3.13") format("woff");
        }
        @font-face {
          font-family: 'Inter';
          font-style:  italic;
          font-weight: 900;
          font-display: swap;
          src: url("/fonts/Inter-BlackItalic.woff2?v=3.13") format("woff2"),
               url("/fonts/Inter-BlackItalic.woff?v=3.13") format("woff");
        }
        
        /* -------------------------------------------------------
        Variable font.
        Usage:
        
          html { font-family: 'Inter', sans-serif; }
          @supports (font-variation-settings: normal) {
            html { font-family: 'Inter var', sans-serif; }
          }
        */
        @font-face {
          font-family: 'Inter var';
          font-weight: 100 900;
          font-display: swap;
          font-style: normal;
          font-named-instance: 'Regular';
          src: url("/fonts/Inter-roman.var.woff2?v=3.13") format("woff2");
        }
        @font-face {
          font-family: 'Inter var';
          font-weight: 100 900;
          font-display: swap;
          font-style: italic;
          font-named-instance: 'Italic';
          src: url("/fonts/Inter-italic.var.woff2?v=3.13") format("woff2");
        }
        
        
        /* --------------------------------------------------------------------------
        [EXPERIMENTAL] Multi-axis, single variable font.
        
        Slant axis is not yet widely supported (as of February 2019) and thus this
        multi-axis single variable font is opt-in rather than the default.
        
        When using this, you will probably need to set font-variation-settings
        explicitly, e.g.
        
          * { font-variation-settings: "slnt" 0deg }
          .italic { font-variation-settings: "slnt" 10deg }
        
        */
        @font-face {
          font-family: 'Inter var experimental';
          font-weight: 100 900;
          font-display: swap;
          font-style: oblique 0deg 10deg;
          src: url("Inter.var.woff2?v=3.13") format("woff2");
        }
        

        .container {
          height: 700px;
          width: 100vw;
          background: #63B995;
          padding: 0 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .images-container {
          width: 100%;
          position: absolute;
          z-index: 0;
          top: 700px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .images-container img {
          width: 33%;
          margin-bottom: 100px;
        }

        .body-container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 0 10%;
          width: 100vw;
        }

        .manifest-section img{
          width: 10%;
          left: -50px;
          opacity: 0.4;
        }

        .manifest-section {
          margin-bottom: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .manifest-section-title {
          font-size: calc(4vw + 24px);
          font-weight: 200;
          margin-bottom: 20px;
          font-family: Belta;
          color: #50723C;
          font-style: normal;
          text-align: center;
          z-index: 5;
        }

        .manifest-section-text {
          text-align: center;
          color: #423E28;
          max-width: 800px;
          margin-bottom: 70px;
          z-index: 5;
        }

        .background-gradient-1 {
          background: linear-gradient(179.96deg, #82C095 20.82%, #F9D9B5 36.08%, #EDA944 48.96%, #EDA944 64.81%, #528FEA 77.35%, rgba(82, 143, 234, 0) 99.95%);
          opacity: 0.2;
          height: 1122px;
          width: 100%;
          position: absolute;
          z-index: -1;
          overflow: hidden;
          top: 0;
        }
        .background-gradient-2{
          background: linear-gradient(179.97deg, rgba(130, 192, 149, 0) 0.05%, #82C095 33.51%, #EDA944 62.97%, #F09E25 78.32%, rgba(240, 158, 37, 0) 99.95%);
          opacity: 0.2;
          height: 1122px;
          width: 100%;
          position: absolute;
          z-index: -1;
          overflow: hidden;
          top: 1122px;
        }

        .background-image {
          width: 500%;
          z-index: 0;
          max-width: 2800px;
          margin-left: -200px;
        }

        .background-image img{
          width: 100%;
        }

        .header {
          width: 100%;
          height: 60px;
          background: transparent;
          display: flex;
          justify-content: flex-end;
          margin-bottom: 90px;
        }

        .title-button {
          padding: 12px;
          font-weight: bold;
          font-size: 14px;
          line-height: 24px;
          text-transform: uppercase;
          color: #63B995;
          background: white;
          width: 168px;
          border-radius: 2px;
          text-align: center;
          cursor: pointer;
        }
        

        .header-language {
          z-index: 30;
          transition: all .2s;
          cursor: pointer;
          width: 40px;
          height: 40px;
          color: rgba(255,255,255, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          line-height: 18px;
          border: 1px solid rgba(255,255,255, 0.2);
          border-radius: 4px;
          margin-left: 8px;
          margin-top: 16px;
        }

        .selected {
          color: rgba(255,255,255, 1);
        }

        .hide {
          opacity: 0;
        }

        .subtitle {
          z-index: 30;
          color: #FFFFFC;
          opacity: 0.8;
          font-weight: 200;
          font-size: 16px;
          line-height: 28px;
          text-align: center;
          margin-bottom: 32px;
        }

        main {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        footer {
          background: #FFFFFC;
          width: 100%;
          height: 60px;
          border-top: 1px solid #eaeaea;
          display: flex;
          align-items: center;
          padding-left: 40px;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        @keyframes title-movement {
          0% {transform: scale(1);}
          10% {transform: scale(1.05);}
          20% {transform: scale(1);}
          30% {transform: scale(1.05);}
          40% {transform: scale(1);}
          100% {transform: scale(1);}
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          font-family: 'Belta';
          letter-spacing: 0.2rem;
          z-index: 30;
          font-weight: 100;
          margin: 0;
          font-size: calc(6vw + 42px);

          color: white;
          animation: title-movement 2s infinite;
          animation-timing-function: ease-in-out; 
          margin-bottom: 20px;
          width: fit-content;
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }
        
        .start-video {
          z-index: 999;
          height: 80vh;
          background: black;
          margin-bottom: 100px;
          border-radius: 10px;
        }

        .arrow-down {
          display: flex;
          justify-content: center;
          width: 100%;
          transition: opacity 0.4s;
          margin-bottom: 50px;
          z-index: 2;
        }

        .arrow-down img{
          width: 30px;
          z-index: -1;
          animation: title-movement 2s infinite;
          animation-timing-function: ease-in-out;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Inter;
        }
        html, body {
          overflow-x: hidden;
          scroll-behavior: smooth;
        }
        body {
          position: relative
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </ParallaxProvider>
  )
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      cat: { translation: translateCat },
      es: { translation: translateEs }
    },
    react: {
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: true,
    },
    lng: "cat",
    fallbackLng: "cat",
    transEmptyNodeValue: '',
    interpolation: {
      escapeValue: false
    }
  });