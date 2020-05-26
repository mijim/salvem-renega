
import Head from 'next/head'
import Link from 'next/link'

import { translateEs } from '../../translations/es';
import { translateCat } from '../../translations/cat';
import { useEffect, useState } from 'react';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const urlNews = [
  {
    title: 'Els germans Calabuig Gimeno investigats per corrupció, impulsen un projecte urbanístic a la Serra de la Renegà',
    link: 'https://directa.cat/els-germans-calabuig-gimeno-investigats-per-corrupcio-impulsen-un-projecte-urbanistic-a-la-serra-de-la-renega/',
    image: 'https://directa.cat/app/uploads/2020/05/WEB_RENEGA%CC%80-011-1024x683.jpg',
    description: 'La febre urbanística de principis dels 2000 a les costes valencianes no va perdonar aquests territoris verges, que tot i el seu valor natural consten com a urbanitzables des de l’aprovació del Pla General d’Ordenació Urbanística (PGOU).',
    source: 'La Directa'
  },
  {
    title: 'Crece el descontento ecologista y vecinal por el avance de las obras en el entorno de la Renegà ',
    link: 'https://castellonplaza.com/crece-el-descontento-ecologista-y-vecinal-por-el-avance-de-las-obras-en-el-entorno-de-la-renega',
    image: 'https://castellonplaza.com/public/Image/2020/5/1589993335foto1_NoticiaAmpliada.jpg',
    description: 'La plataforma Salvem la Renegá ha lamentado este miércoles la falta de información en detalle de los proyectos, permisos, licencias, evaluaciones y controles ambientales.',
    source: 'Castellón Plaza'
  },
  {
    title: 'En plena emergencia climática, Oropesa quiere romper el mar',
    link: 'https://www.elperiodic.com/opinion/yo-animal/plena-emergencia-climatica-oropesa-quiere-romper_7372',
    image: 'https://turismodecastellon.com/uploads/ficherosAntiguos/imagenes/playa_la_renega_1.jpg',
    description: 'La Renegá es una zona protegida del litoral marino del pueblo de Oropesa, Castellón. Casi 20.000 firmas se han recogido ya en la plataforma Change.org',
    source: 'El Periòdic'
  },
   {
    title: 'La Renegà: Un observatorio marítimo en pleno litoral de Orpesa: ¿el nuevo Marina d’Or?',
    link: 'https://www.publico.es/sociedad/renega-centro-interpretacion-mediterraneo-orpesa-nuevo-marina-d-or.html',
    image: 'https://www.publico.es/uploads/2020/05/16/5ebff43ec3e60.jpeg',
    description: 'Movimientos ecologistas denuncian que la construcción de un "observatorio marino" en una parcela urbana del litoral de Orpesa esconde como verdadera finalidad la resurrección de antiguos proyectos urbanísticos paralizados por la crisis.',
    source: 'Público'
  },
  {
    title: 'Compromís pide "total transparencia" sobre el proyecto del entorno de la Renegà',
    link: 'https://castellonplaza.com/compromis-pide-total-transparencia-sobre-el-proyecto-del-entorno-de-la-renega',
    image: 'https://castellonplaza.com/public/Image/2020/5/WhatsAppImage2020-05-13at12.09.11_NoticiaAmpliada.jpg',
    description: '',
    source: 'Castellón Plaza'
  },
 
  {
    title: 'Polèmica per l’inici de les obres d’un centre interpretatiu prop de la Renegada, a Orpesa',
    link: 'https://www.lavanguardia.com/vida/20200514/481144776760/compromis-exige-transparencia-absoluta-a-oropesa-sobre-el-centro-marino.html',
    image: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.elperiodicomediterraneo.com%2Fnoticias%2Ftemadia%2Fcastellon-alega-plan-costa-frenar-desarrollo-urbanistico_1042389.html&psig=AOvVaw3sGnabxb-FHnWk_UFgarBP&ust=1590574962972000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOidodin0ekCFQAAAAAdAAAAABAD',
    description: 'Compromís exige "transparencia absoluta" al Ayuntamiento de Orpesa sobre el proyecto del entorno de la Renegà que prevé la construcción del Centro de Interpretación del Mediterráneo (CIMED)',
    source: 'La Vanguardia'
  },
  {
    title: 'Denuncian a Costa Bellver por utilizar la naturaleza como reclamo inmobiliario',
    link: 'https://www.ecologistasenaccion.org/143483/denuncian-a-costa-bellver-por-utilizar-la-naturaleza-como-reclamo-inmobiliario/',
    image: '',
    description: 'Ecologistas en Acción rechaza la reactivación del urbanismo salvaje en el municipio de Oropesa del Mar (Castellón) y se opone a los nuevos proyectos urbanísticos del Plan Parcial Torre de Bellver y a la construcción del núcleo zoológico dedicado a las tortugas marinas.',
    source: 'Ecologistas en Acción'
  },
  {
    title: 'Más de 7.400 firmas recogidas para paralizar un proyecto en Bellver, junto a la Renegà',
    link: 'https://cadenaser.com/emisora/2020/05/10/radio_castellon/1589114336_703730.html',
    image: 'https://cadenaser00.epimg.net/ser/imagenes/2020/05/10/radio_castellon/1589114336_703730_1589114525_noticia_normal_recorte1.jpg',
    description: 'Un proyecto defendido como medio ambiental y divulgativo, que modificará más de un kilómetro de paraje natural de calas y bosque mediterráneo',
    source: 'Cadena SER'
  },
  {
    title: 'Gecén denuncia que el Centro de Interpretación de Oropesa esconde un macroproyecto con viviendas y hotel',
    link: 'https://cadenaser.com/emisora/2020/05/11/radio_castellon/1589211377_279006.html',
    image: 'https://cadenaser00.epimg.net/ser/imagenes/2020/05/11/radio_castellon/1589211377_279006_1589211460_noticia_normal_recorte1.jpg',
    description: 'La organización ecologista pide al Ayuntamiento de Oropesa que revise el Plan General de Ordenación Urbana, que fue aprobado en 1982',
    source: 'Cadena SER'
  },
  {
    title: 'Intersindical exigeix la protecció de la platja de la Renegà',
    link: 'https://intersindical.org/salut_laboral/article/intersindical_exigeix_la_proteccio_de_la_platja_de_la_renega',
    image: 'https://intersindical.org/images/imatges/generiques/Unknown-21.jpeg',
    description: 'El Sindicat rebutja la reactivació dels projectes urbanístics d’aquesta zona d’Orpesa (la Plana Alta) i demana la seua immediata paralització en considerar que atempten contra la biodiversitat i el paisatge.',
    source: 'Intersindical Valenciana'
  },
  {
    title: 'Arrancan con polémica las obras de un centro interpretativo junto a la Renegà, en Oropesa',
    link: 'https://castellonplaza.com/ArrancanconpolmicalasobrasdeuncentrointerpretativojuntoalaRenegenOropesa',
    image: 'https://castellonplaza.com/public/Image/2020/5/slide1_NoticiaAmpliada.jpg',
    description: '',
    source: 'Castellón Plaza'
  },
  {
    title: 'AE-Agró mostra el seu suport a esta campanya per a evitar unes obres que destruiran un dels paratges més importants d’Orpesa',
    link: 'https://accioecologista-agro.org/salvem-la-renega/',
    image: 'https://accioecologista-agro.org/wp-content/uploads/2020/05/1.SalvemLaReneg%C3%A0.jpg',
    description: 'El Grup Bellver, propietat de la família Calabuig, i la fundació Azul Marino han començat les obres per a construir un centre interpretatiu marí en el paratge de La Renegà d’Orpesa (La Plana Alta, Castelló).',
    source: 'Acció Ecologista'
  }
]
export default function News() {
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
          <Link href="/multimedia">
            <div className={`header-language`}>
              MEDIA
                    </div>
          </Link>
        </div>
        <Head>
          <title>Salvem la renegà! 🌿</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <div className="background-image-container">
        <img src="/tortuga.svg" />
      </div>
      <div className="new-section-container">
        <div className="section-title-container">Noticies i Articles:</div>
        <div className="news-container">
          {urlNews.map((newItem) => (
            <div className="new-container" onClick={() => window.open(newItem.link)}>
              <div className="new-image">
                <img src={newItem.image} />
              </div>
              <div className="new-title">
                {newItem.title}
              </div>
              <div className="new-desc">
                {newItem.description}
              </div>
              <div className="new-source">
                {newItem.source}
              </div>
            </div>
          ))}
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
          .new-section-container {
            margin-left: 8%;
            z-index: 30;
          }

          .news-container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 32px;
            margin-bottom: 32px;
          }

          @media (max-width: 1200px) {
            .news-container {
                grid-template-columns: 1fr 1fr;
            }
          } 

          @media (max-width: 800px) {
            .news-container {
                grid-template-columns: 1fr;
            }
          } 
          

          .new-container {
              cursor: pointer;
              margin-bottom: 32px;
              background: rgba(255,255,255,0.1);
              border-radius: 10px;
              max-width: 340px;
              width: 80vw;
              height: fit-content;
          }

          .new-source {
              border-top: 0.5px solid rgba(255,255,255,0.3);
              text-align: right;
              padding: 4px;
              padding-right: 10px;
              font-size: 10px;
              color: rgba(255,255,255,0.6);
          }

          .new-image img{
            max-width: 340px;
            width: 80vw;
            margin-bottom: 8px;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
          }

          .new-title {
            max-width: 340px;
            color: white;
            margin-bottom: 8px;
            margin-right: 12px;
            margin-left: 12px;
          }

          .new-desc {
            max-width: 340px;
            font-weight: 200;
            font-size: 12px;
            color: white;
            margin-right: 12px;
            margin-left: 12px;
            opacity: 0.8;
            padding-bottom: 16px;
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
            max-height: 54vh;
            border-radius: 12px;
          }

          .sections-container {
              margin-left: 8%;
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
              width: 60%;
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