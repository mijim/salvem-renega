
import Head from 'next/head'
import Link from 'next/link'

import { translateEs } from '../../translations/es';
import { translateCat } from '../../translations/cat';
import { useEffect, useState } from 'react';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

export default function Multimedia() {
    const [language, setLanguage] = useState('es');
    const { t } = useTranslation();

    useEffect(() => {
        setLanguage(navigator.language.indexOf('es') > -1 ? 'es' : 'cat');
    }, []);


    return (
        <div className="container">
            <div className="header">
                <Link href="/">
                    <div className="header-logo-container">
                        <div className="header-title">
                            {'Salvem la renegà!'}
                        </div>
                        <div className="header-subtitle">
                            {"No a les obres d'un espai natural"}
                        </div>
                    </div>
                </Link>
                <div className="header-language-container">
                    <Link href="/">

                        <div className={`header-language`}>
                            INICI
                 </div>
                    </Link>
                    <div className={`header-language ${language === 'es' ? 'selected' : ''}`} onClick={() => setLanguage('es')}>
                        ES
        </div>
                    <div className={`header-language ${language === 'cat' ? 'selected' : ''}`} onClick={() => setLanguage('cat')}>
                        CAT
        </div>
                </div>
            </div>
            <Head>
                <title>Salvem la renegà! 🌿</title>
                <link rel="icon" href="/favicon.ico" />
                {/* <div className="social-media-container">
        <a target="_blank" href={'https://www.instagram.com/salvemlarenega/'}>
          <img className="social-icon" src={'/instagram.svg'} />
        </a>
        <a target="_blank" href={'https://www.facebook.com/Salvem-la-Reneg%C3%A0-112553147114111'}>
          <img className="social-icon" src={'/facebook.svg'} />
        </a>
        <a target="_blank" href={'https://www.twitter.com/salvemlarenega'}>
          <img className="social-icon" src={'/twitter.svg'} />
        </a>
      </div> */}

            </Head>
            <div className="background-image-container">
                <img src="/arbol.svg" />
            </div>
            <div >
                <div className="section-title-container"> Sortim a la cope:</div>
                <audio
                    controls
                    src="/audio/audio_cope.mp3">
                    Your browser does not support the
                        <code>audio</code> element.
                </audio>
            </div>
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
            height: 100vh;
            width: 100vw;
            background: #423E28;
            padding: 0 16px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .header {
            width: 100%;
            height: 60px;
            background: transparent;
            display: flex;
            justify-content: space-between;
            margin-bottom: 90px;
          }
  
          .header-logo-container {
            cursor: pointer;
          }

          .section-title-container {
              font-family: 'Belta';
              color: white;
              margin-bottom: 12px;
              font-size: 32px;
          }

          .background-image-container {
              top: 76px;
              position: fixed;
              width: 30%;
              min-width: 500px;
              opacity: 0.1;
          }
  
          .header-title {
            font-family: 'Belta';
            font-size: 24px;
            color: white;
            margin-top: 12px;
          }
  
          .header-subtitle {
            font-size: 10px;
            color: white;
          }

          .header-language-container {
            display: flex;
          }
          .header-language {
            z-index: 30;
            transition: all .2s;
            cursor: pointer;
            min-width: 40px;
            height: 40px;
            color: rgba(255,255,255, 0.4);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            line-height: 18px;
            border: 1px solid rgba(255,255,255, 0.2);
            border-radius: 4px;
            padding: 10px;
            margin-left: 8px;
            margin-top: 16px;
          }
  
          .header-language:hover {
            filter: brightness(1.6);
          }
  
          .selected {
            color: rgba(255,255,255, 1);
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
          animation: body-load 0.4s;
        }
        @keyframes body-load {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
        </div>);
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