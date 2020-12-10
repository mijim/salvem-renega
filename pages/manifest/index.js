
import Head from 'next/head'
import Link from 'next/link'

import { translateEs } from '../../translations/es';
import { translateCat } from '../../translations/cat';
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

export default function Manifest() {
  const [pageNumber, setPageNumber] = useState(1);
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
          <div className={`header-language ${language === 'es' ? 'selected' : ''}`}
            onClick={() => setLanguage('es')}
          >
            ES
                    </div>
          <div className={`header-language ${language === 'cat' ? 'selected' : ''}`}
            onClick={() => setLanguage('cat')}
          >
            CAT
                    </div>
        </div>
        <Head>
          <title>Salvem la renegà! 🌿</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      {/* <div className="background-image-container">
                <img src="/tortuga.svg" />
            </div> */}
      <div className="new-section-container">
        <div className="manifest-container">
          <div className="manifest-title">
            {language === 'es' ? 'SALVEMOS PLAYA BELLVER, LA RENEGÀ, LITORAL DE OROPESA DEL MAR' : 'SALVEM PLATJA BELLVER, LA RENEGÀ, LITORAL D’ORPESA'}
          </div>
          <div className="manifest-paragraf">
            {language === 'es' ? 'Las organizaciones abajo firmantes rechazamos la reactivación del urbanismo salvaje en el municipio de Oropesa del Mar (Castelló) y nos oponemos a los nuevos proyectos urbanísticos del Plan Parcial Torre de Bellver y a la construcción de un centro de interpretación marino dedicado a las tortugas marinas. El anuncio del proyecto este mes de mayo y el inicio de las obras han coincidido. No ha habido ningún margen de maniobra para la ciudadanía. Exigimos transparencia y acceso a la información pública para conocer el proceso que se ha llevado a cabo. Hoy contamos con el apoyo de más de 22.000 firmas.' : `Les organitzacions sotasignants rebutgem la reactivació de l’urbanisme salvatge al municipi d’Orpesa (Castelló) i ens oposem als nous projectes urbanístics del Pla Parcial Torre de Bellver i a la construcció d’un centre d'interpretació marí dedicat a les tortugues marines. L'anunci del projecte aquest mes de maig i l'inici de les obres han coincidit. No n'hi ha hagut cap marge de maniobra per la ciutadania. Exigim transparència i accés a la informació pública per conéixer el procés que s'ha dut a terme. Avui més de 22.000 signatures ens recolzen.`}
          </div>
          <div className="manifest-paragraf">
            {language === 'es' ? 'Reactivar el Plan Parcial Torre de Bellver supone más y más hormigón en hoteles y segundas residencias y continuar también con un modelo urbanístico caduco y desfasado, totalmente contrario a las medidas que requiere la situación de emergencia climática en que nos encontramos. Supone, además, la puesta en marcha de planes urbanísticos en su segunda fase diez años después de su aprobación. En ese tiempo la realidad física del entorno ha cambiado, cosa que ha dejado obsoletos los estudios ambientales. Ni siquiera le afecta ahora el “Plan de Acción Territorial de la Infraestructura Verde del Litoral de la Comunitat Valenciana” (PATIVEL) de mayo de 2018, que es una herramienta inútil para la protección de este tipo de terrenos litorales urbanos.' : `Reactivar el Pla Parcial Torre de Bellver suposa més i més formigó en hotels i segones residències i continuar també amb un model urbanístic caduc i desfasat, totalment contrari a les mesures que requereix la situació d’emergència climàtica en què ens trobem. Suposa a més la posada en marxa de plans urbanístics en la seua segona fase i deu anys després de la seua aprovació. En eixe temps la realitat física de l’entorn ha canviat, cosa que ha deixat obsolets els estudis ambientals. Ni tan sols li afecta ara el Pla d’Acció Territorial de la Infraestructura Verda del Litoral de la Comunitat Valenciana (PATIVEL) de maig de 2018, que és una eina inútil per la protecció d’esta mena de terrenys litorals urbans.`}
          </div>
          <div className="manifest-paragraf">
            {language === 'es' ? 'Llama la atención que se haya avalado la futura construcción de un centro de interpretación dedicado, parece ser, a la recuperación de tortugas marinas utilizando como reclamo la educación ambiental mal entendida y el Lugar de Importancia Comunitaria (LIC) "Litoral de Benicàssim”. Recordemos que las parcelas sobre las que se está actuando limitan con la vía verde Oropesa-Benicàssim. Las zonas protegidas por el LIC tanto de dominio público como privado, se encuentran así en grave peligro al no haberse realizado el plan de gestión, por parte de la administración, que exige la Unión Europea para proteger este territorio de la presión y actividad humana.' : `Crida l’atenció que s’haja avalat la futura construcció d’un centre interpretatiu dedicat, sembla, a la recuperació de tortugues marines utilitzant com a reclam l'educació ambiental mal entesa i el Lloc d’Importància Comunitària (LIC) “Litoral de Benicàssim”. Recordem que les parcel·les sobre les quals s’està actuant són limítrofes amb la via verda Orpesa-Benicàssim, que és zona de domini públic. Les zones protegides i públiques es troben així en greu perill en deixar-se en mans del promotor urbanístic del Pla Parcial el desenvolupament d’un programa de restauració paisatgística en sòl públic. Les zones protegides pel LIC tant de domini públic com privat, es troben així en greu perill al no haver-se realitzat el pla de gestió, per part de l'administració, que exigeix la Unió Europea per a protegir aquest territori de la pressió i activitat humana.`}
          </div>
          <div className="manifest-paragraf">
            {language === 'es' ? 'La Conselleria de Agricultura, Desarrollo Rural, Emergencia Climática i Transición Ecológica debe velar por la conservación de este espacio natural de gran valor ecológico y paisajístico que es el LIC “Litoral de Benicàssim”, que además se complementa con el LIC y ZEPA "Espacio marino de Oropesa i Benicàssim", que son de competencia estatal. En sus manos está no caer en la dejadez y la permisividad. Es una irresponsabilidad consentir que se utilice como reclamo urbanístico un proyecto de restauración paisajística en un espacio protegido (LIC). Además denota a las claras la afinidad entre los promotores y la administración. Por otra parte consideramos que el lugar y su entorno presentan más valores que los que protege el LIC por lo que requieren de una protección más adecuada a través de otras figuras previstas en la Ley de Espacios Naturales Protegidos, como la de Paisaje Protegido.' : `La Conselleria d’Agricultura, Desenvolupament Rural, Emergència Climàtica i Transició Ecològica ha de vetllar per la conservació d’este espai natural de gran valor ecològic i paisatgístic que es el LIC “Litoral de Benicàssim”, que a més es complementa amb el LIC i ZEPA "Espai marí d'Orpesa i Benicàssim", que són de competència estatal. A les seues mans està no caure en la deixadesa i la permissivitat. És una irresponsabilitat consentir utilitzar com a reclam urbanístic un projecte de restauració paisatgística en un espai protegit (LIC). I a més a més denota a les clares l’afinitat entre els promotors i l’administració. D'altra banda, considerem que el lloc i els seus voltants presenten més valors que els que protegeix el LIC pel que necessiten d'una protecció més adequada a través d'altres figures previstes en la Llei d'Espais Naturals Protegits, com la de Paisatge Protegit.`}
          </div>
          <div className="manifest-paragraf">
            {language === 'es' ? 'Por lo que se refiere al Ayuntamiento de Oropesa venimos denunciando la falta de transparencia y la aplicación de un PGOU de 1982 que no incluye toda la normativa medioambiental hasta la actualidad.' : `Pel que fa a l'Ajuntament d'Orpesa hem denunciat la falta de transparència i l'aplicació d'un PGOU de 1982 que no inclou tota la normativa mediambiental fins a l'actualitat.`}
          </div>
          <div className="manifest-paragraf">
            {language === 'es' ? 'También solicitamos la paralización de cualquier obra que se esté ejecutando actualmente en la zona. De acuerdo a la Ley 42/2007, de 13 de diciembre, del Patrimonio Natural y la Biodiversidad, se deberían prohibir todas las obras que alteren el hábitat en los períodos de cría de las especies protegidas, circunstancia que se da en estos momentos.' : `
                        També sol·licitem la paralització de qualsevol obra que s’estiga executant actualment en la zona. D’acord amb la Llei 42/2007, de 13 de desembre, del patrimoni Natural i la Biodiversitat, s’haurien de prohibir totes les obres que alteren l’hàbitat en els períodes de cria de les espècies protegides, circumstància que es dóna en estos moments.`}
          </div>
          <div className="manifest-paragraf">
            {language === 'es' ? 'Pendientes de que se resuelvan nuestras solicitudes de información, aunque el proyecto pudiera contar con cobertura legal, estamos convencidos de que en ningún caso resultaría ético. No queremos que se escatime en la protección ambiental con la excusa de reactivar la economía después de esta pandemia. Iniciar el camino hacia la transición ecológica, en cuanto a la ordenación del territorio, es una asignatura pendiente en el litoral de Oropesa. La protección paisajística, medioambiental y del patrimonio histórico de esta joya del litoral es un objetivo prioritario e irrenunciable, por ello nuestro principal objetivo es la ampliación de la figura legal de protección pasando a ser la de paisaje protegido.' : `
                        Pendents que les nostres sol·licituds d’informació siguen resoltes, encara que el projecte poguera comptar amb una cobertura legal, estem convençudes que en cap cas resultaria ètic. No volem que s’escatime en la protecció ambiental amb l’excusa de reactivar l’economia després d’esta pandèmia. Encetar el camí cap a la transició ecològica, en quant a l'ordenació del territori, és una assignatura pendent en el litoral d'Orpesa. La protecció paisatgística, mediambiental i del patrimoni històric d'aquesta joia litoral és un objectiu prioritari i irrenunciable, per això el nostre principal objectiu és l'ampliació de la figura legal de protecció passant a ser la de paisatge protegit.`}
          </div>
          <div className="manifest-paragraf">
            {language === 'es' ? 'En última instancia, el Ayuntamiento es quien autoriza o no la obra. Apelamos a su compromiso con el conjunto de la ciudadanía y muy especialmente con las generaciones futuras y le solicitamos que utilice todas las herramientas legales existentes y válidas para evitar que este paraje litoral acabe perdiéndose cubierto de pasarelas.' : `
                        En última instància l’Ajuntament és qui autoritza o no l’obra. Apel·lem ara al seu compromís amb el conjunt de la ciutadania i molt especialment amb les generacions futures i li sol·licitem que utilitze totes les ferramentes legals existents i vàlides per evitar que este paratge litoral acabe perdent-se cobert de passarel·les.
                        `}
          </div>
          <div className="manifest-paragraf">
            {language === 'es' ? '16 de mayo de 2020' : '16 de maig de 2020'}
          </div>
        </div>

        <div className="signing-org">
          <div className="signing-org-title">

          </div>
          <a target='_blank' href={'https://salvemrenega.org/'}> {'Plataforma Salvem la Renegà'} </a>
          <a target='_blank' href={'https://www.ecologistasenaccion.org/federaciones/paisvalencia/castello/vila-real/'}> {'GER-Ecologistes en Acció de Vila-real'} </a>
          <a target='_blank' href={'https://www.ecologistasenaccion.org/federaciones/paisvalencia/castello/vinaros/'}> {'APNAL-Ecologistes en Acció de Vinaròs'} </a>
          <a target='_blank' href={'https://www.ecologistasenaccion.org/federaciones/pais-valencia/castello/la-vall-duixo/'}> {'L’ARQUET-Ecologistes en Acció de la Vall d’Uixó'} </a>
          <a target='_blank' href={'https://www.gecen.net'}> {'GECEN-Grup d’Estudis i Conservació dels Espais Naturals'} </a>
          <a target='_blank' href={'https://prodesert.org/'}> {'Asociación Ecologista Pro Desert​'} </a>
          <a target='_blank' href={'https://www.intersindical.org/'}> {'Intersindical Valenciana​'} </a>
          <a target='_blank' href={'https://www.facebook.com/Xarxa-dAgroecol%C3%B2gia-de-Castell%C3%B3-XAC-117076068318097/'}> {'Xarxa d´Agroecologia de Castelló (XAC)'} </a>
          <a target='_blank' href={'https://www.facebook.com/casalpopularonda/'}> {'Casal Popular d´Onda​'} </a>
          <a target='_blank' href={'https://fridaysforfuturecastello.wordpress.com/vinaros/'}> {'Fridays for Future - Joventut pel Clima Vinaròs'} </a>
          <a target='_blank' href={'http://www.mascotasenadopcion.es/'}> {'Mascotes en Adopció Castelló'} </a>
          <a target='_blank' href={''}> {'Asociación para la defensa de la Naturaleza de Sierra de Gata Vettonia​'} </a>
          <a target='_blank' href={''}> {'Maleïdes. Col•lectiu feminista de VIla-real'} </a>
          <a target='_blank' href={'https://www.endavant.org/'}> {'Endavant (OSAN)​'} </a>
          <a target='_blank' href={''}> {'Punt Roig'} </a>
          <a target='_blank' href={''}> {'UGT-PV Comarques del Nord'} </a>
          <a target='_blank' href={'http://www.periferies.org/'}> {'Perifèries del Món'} </a>
          <a target='_blank' href={'https://www.pv.ccoo.es/Comarques_del_Nord'}> {'CCOO PV Comarques del Nord​'} </a>
          <a target='_blank' href={'https://comunitatujixplaneta.uji.es/'}> {'Comunitat UJIxPlaneta'} </a>
          <a target='_blank' href={'http://www.carrasca-ecologistesenaccio.org/'}> {'Colla Ecologista La Carrasca - Ecologistes en Acció'} </a>
          <a target='_blank' href={'http://www.serra-espada.org/'}> {'SASE (Societat d´Amics de la Serra Espadà)'} </a>
          <p>Nuevas adhesiones:</p>
          <a target='_blank' href={'https://sites.google.com/site/castelloenbici/'}> {'Castelló en Bici'} </a>
          <a target='_blank' href={'https://twitter.com/adp_asoc'}> {'Associació Amics de Palanques'} </a>
          <a target='_blank' href={'https://www.facebook.com/cuidembeni/'}> {'Cuidem Benimaclet'} </a>
          <a target='_blank' href={'http://www.facebook.com/cgtkastello'}> {'CGT Castelló'} </a>
          <a target='_blank' href={'https://www.lamaranya.org'}> {'Centre de Cultura i Joventut La Maranya'} </a>
          <a target='_blank' href={'https://www.sepc.cat/'}> {`Sindicat d'Estudiants dels Països Catalans UJI`} </a>
          <a target='_blank' href={'https://www.sepc.cat/'}> {`Sindicat d'Estudiants dels Països Catalans`} </a>
          <a target='_blank' href={'https://www.facebook.com/muixerangadelaplana/'}> {'Muixeranga de la Plana'} </a>
          <a target='_blank' href={'http://www.eupv.org/'}> {'Esquerra Unida del País Valencià'} </a>
          <a target='_blank' href={'https://twitter.com/Decidim_CN'}> {'Decidim-País Valencià'} </a>
          <a target='_blank' href={'https://www.facebook.com/DefensaPaisajePedralba/'}> {'En Defensa del Paisaje de Pedralba'} </a>
          <a target='_blank' href={'http://www.ecobetera.es/'}> {'Ecobétera'} </a>
          <a target='_blank' href={'https://www.facebook.com/asoc.SURC/'}> {'Associació Cultural SURC'} </a>

          <p> Número de adhesiones físicas individuales: 103</p>
        </div>

      </div>
      <div className="contact-container">
        {/* <div className="contact-title">{language === 'es' ? `Ayúdanos a conseguir nuestro objetivo` : `Ajuda'ns a aconseguir el nostre objectiu:`}</div> */}
        <div className="contact-title" style={{ display: 'flex' }}>
          <div style={{ marginRight: 24 }}>{language === 'es' ? 'Escríbenos a: ' : 'Escriu-nos a:'}</div>
          <a style={{ color: '#63B995' }} href={'mailto:renegarenega9@gmail.com'}>{'renegarenega9@gmail.com'}</a>
        </div>
        <div className="contact-title">
          {'o'}
        </div>
        <div className="typeform-widget" data-url="https://comunicacion489067.typeform.com/to/WU4fBx" style={{ width: '100%', height: '300px', borderRadius: '10px', maxWidth: '800px' }}></div> <script> {(function () { var qs, js, q, s, d = document, gi = d.getElementById, ce = d.createElement, gt = d.getElementsByTagName, id = "typef_orm", b = "https://embed.typeform.com/"; if (!gi.call(d, id)) { js = ce.call(d, "script"); js.id = id; js.src = b + "embed.js"; q = gt.call(d, "script")[0]; q.parentNode.insertBefore(js, q) } })()} </script> <div style={{ fontFamily: 'Sans-Serif', fontSize: '12px', color: '#999', opacity: 0.5, paddingTop: '5px' }}>  </div>
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

          .typeform-widget {
              border-radius: 10px;
              opacity: 0.9;
          }
          
          .contact-container {
              display: flex; 
              align-items: center;
              flex-direction: column;
              margin-bottom: 50px;
          }
          
          
          .contact-title {
            font-size: 32px;
            margin-bottom: 16px;
            font-family: 'Belta';
            color: white;
          }

          .contact-button {
            z-index: 30;
            transition: all .2s;
            cursor: pointer;
            min-width: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            line-height: 18px;
            border-radius: 4px;
            padding: 10px;
            margin-left: 8px;
            margin-top: 16px;
            background: #63B995;
            margin-bottom: 100px;
          }

          .contact-button a{
            color: white;
            text-decoration: none;
            font-size: 16px;
          }

          .new-section-container {
            margin-bottom: 100px;
            z-index: 30;
            display: flex;
            justify-content: center;
            flex-direction: column;
            padding-right: 20%;
            padding-left: 20%;
          }

          @media (max-width: 1100px) {
            .new-section-container {
                padding-right: 8%;
                padding-left: 8%;
              }
    
          }

          @media (max-width: 764px) {
            .new-section-container {
                padding-right: 4%;
                padding-left: 4%;
              }
    
          }

          .signing-org {
              display: flex;
              flex-direction: column;
          }

          .signing-org a {
            color: #63B995;
            margin-bottom: 8px;
          }

          .manifest-title {
            font-family: 'Belta';
            font-size: 32px;
            text-align: center;
            margin-bottom: 42px;
            color: white;
          }

          .manifest-container {
              color: rgba(255,255,255,0.7);
          }

          .manifest-paragraf {
              margin-bottom: 24px;
              text-align: justify;
              line-height: 26px;
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
          p {
            color: rgba(255,255,255, 1);
            font-size: 18px;
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