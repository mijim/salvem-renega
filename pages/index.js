import Head from 'next/head'
import { useEffect, useState } from 'react'
import { translateEs } from '../translations/es';
import { translateCat } from '../translations/cat';
export default function Home() {
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    setLanguage(navigator.language.indexOf('es') > -1 ? 'es' : 'cat');
  }, []);

  const getCopy = (copy) => {
    return language === 'es' ? translateEs[copy] : translateCat[copy];
  }

  return (
    <>
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
          <title>¡Salvemos la renegá! 🌿</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className="title">
            {getCopy('main-title')}
          </h1>
          <h2 className="subtitle">
            {getCopy('main-subtitle')}
          </h2>
        </main>

        <div className="background-image">
          <img src='/background-image.svg' />
        </div>

        <footer>
          Contacta con nosotros
      </footer>


      </div>
      <div style={{ height: '1000px' }}>
        <div className="arrow-down">
          <img src="/arrow-down.svg" />
        </div>
      </div>

      <style jsx>{`
         @font-face {
          font-family: 'Anton';
          src: url('/fonts/Anton-Regular.ttf'); 
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        .container {
          height: 80vh;
          display: flex;
          flex-direction: column;
          background: #FF1B1C;
          justify-content: center;
          align-items: center;
        }
        .background-image {
          position: absolute;
          width: 100%;
          left: 0;
          opacity: 0.6;
          z-index: 0;
          bottom: 15vh;
        }
        .header {
          width: 100%;
          height: 60px;
          background: transparent;
          display: flex;
          justify-content: flex-end;
        }

        .header-language {
          z-index: 30;
          transition: all .2s;
          cursor: pointer;
          width: 60px;
          color: rgba(255,255,255, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          border-left: 1px solid rgba(255,255,255, 0.4);
          border-bottom: 1px solid rgba(255,255,255, 0.4);
        }

        .selected {
          color: rgba(255,255,255, 1);
        }

        .subtitle {
          z-index: 30;
          color: #FFFFFC;
          opacity: 0.7;
          font-size: 24px;
          margin: 0 24px;
          margin-bottom: 60px;
          text-align: center;
        }

        main {
          padding: 0rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          position: fixed; bottom:0;
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
          50% {transform: scale(1.05);}
          100% {transform: scale(1);}
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          font-family: 'Anton';
          letter-spacing: 0.2rem;
          z-index: 30;
          font-weight: 00;
          margin: 0;
          line-height: 1.15;
          font-size: 60px;
          color: white;
          animation: title-movement 0.8s infinite;
          animation-timing-function: ease-in-out;
          margin-bottom: 20px;
        }

        .title,
        .description {
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

        .arrow-down {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .arrow-down img{
          width: 30px;
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
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}
