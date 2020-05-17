
import Head from 'next/head'
import Link from 'next/link'

import { translateEs } from '../../translations/es';
import { translateCat } from '../../translations/cat';
import { useEffect, useState } from 'react';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { getLinkPreview } from 'link-preview-js';
let called = false;

export default function Multimedia() {
    const [language, setLanguage] = useState('es');
    const { t } = useTranslation();

    useEffect(() => {
        setLanguage(navigator.language.indexOf('es') > -1 ? 'es' : 'cat');
        getLinkP('https://castellonplaza.com/GrupospolticossocialesyeconmicosunenfuerzasparasacaradelanteelpactoTotsperOnda');
    }, []);

    const getLinkP = async (link) => {
        const linkData = await getLinkPreview(link);
        console.log('linkData --> ', linkData);
    }



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
            </Head>

            <div className="background-image-container">
                <img src="/arbol.svg" />
            </div>
            <div className="sections-container">
                <div style={{ marginRight: '64px' }}>
                    <div className="section-title-container"> T'expliquem que passa:</div>
                    <video
                        controls>
                        <source src="/video_1.mp4" />
                    </video>
                </div>

                <div style={{ marginRight: '64px' }}>
                    <div className="section-title-container"> Sortim a la Cope:</div>
                    <audio
                        controls
                        src="/audio/audio_cope.mp3">
                        Your browser does not support the
                            <code>audio</code> element.
                    </audio>
                    <div className="section-title-container"> Onda Cero:</div>
                    <audio
                        controls
                        src="/audio/onde_cero.mp3">
                        Your browser does not support the
                            <code>audio</code> element.
                    </audio>
                </div>
                <div className="section-title-container">Noticies:</div>

                <div>
                </div>


            </div>
            <script async
                src="http://guteurls.de/guteurls.js"
                selector=".aCssClass">
            </script>
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
            width: 100vw;
            background: #423E28;
            padding: 0 16px;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }

          .header {
            width: 100%;
            height: 60px;
            background: transparent;
            display: flex;
            justify-content: space-between;
            margin-bottom: 60px;
          }
  
          .header-logo-container {
            cursor: pointer;
          }

          .section-title-container {
              font-family: 'Belta';
              color: white;
              margin-bottom: 24px;
              font-size: 32px;
          }

          .sections-container audio{
            margin-bottom: 64px;
            borer-radius: 4px;
          }

          .sections-container video{
            max-width: 500px;
            z-index: 50;
            margin-bottom: 64px;
            max-height: 68vh;
            border-radius: 12px;
          }

          .sections-container {
              margin-left: 10%;
              z-index: 30;
              display: flex;
          }

          @media (max-width: 824px) {
            .sections-container {
                display: block;
            }
          } 

          .background-image-container {
              top: 76px;
              position: fixed;
              width: 30%;
              min-width: 500px;
              opacity: 0.1;
              right: -100px;
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