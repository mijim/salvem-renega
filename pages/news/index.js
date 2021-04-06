import Head from "next/head";
import Link from "next/link";

import { translateEs } from "../../translations/es";
import { translateCat } from "../../translations/cat";
import { useEffect, useState } from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const urlNews = [
  { //06-04-2021
    title:
      "Orpesa pedirá que el entorno de la vía verde sea paraje natural municipal",
    link:
      "https://estaticos-cdn.prensaiberica.es/clip/a045810e-1219-4fe8-8b26-47be7904b3f2_16-9-discover-aspect-ratio_default_1036254.jpg",
    image:
      "https://estaticos-cdn.prensaiberica.es/clip/a045810e-1219-4fe8-8b26-47be7904b3f2_16-9-discover-aspect-ratio_default_1036254.jpg",
    description: `El área de Medio Ambiente del Ayuntamiento de Orpesa va a iniciar los trámites para poder solicitar la declaración del entorno de la vía verde como paraje natural municipal, que es una de las siete figuras legales para proteger un espacio ambiental que incluye la legislación en la Comunitat.`,
    source: "El Periódico Mediterráneo",
  },
  { //26-03-2021
    title:
      "La Generalitat presenta un recurso contra la anulación del Pativel",
    link:
      "https://valenciaplaza.com/la-generalitat-presenta-un-recurso-contra-la-anulacion-del-pativel",
    image:
      "https://valenciaplaza.com/public/Image/2021/3/16130641342_NoticiaAmpliada_NoticiaAmpliada.jpg",
    description: `La Abogacía de la Generalitat Valenciana ha presentado un recurso ante la Sección Primera de la Sala de lo Contencioso-Administrativo del Tribunal Superior de Justicia de la Comunitat Valenciana (TSJCV) contra la anulación del Plan de Acción Territorial de la Infraestructura Verde del Litoral (Pativel), según confirman a este diario fuentes del Consell. `,
    source: "Valencia Plaza",
  },
  { //25-03-2021
    title:
      "Una anàlisi social, jurídica i política de la sentència que anul·la el pla de protecció del litoral valencià",
    link:
      "https://directa.cat/una-analisi-social-juridica-i-politica-de-la-sentencia-que-anulla-el-pla-de-proteccio-del-litoral-valencia/",
    image:
      "https://directa.cat/app/uploads/2021/03/CostaValencianaWeb-1.jpg",
    description: `La sentència que declara nul el Pla d’Acció Territorial de la Infraestructura Verd del Litoral (PATIVEL) no és ferma. Serà recorreguda davant instància superior, en principi, en el Tribunal Suprem. Per tant, els seus efectes segueixen en peu i els seus terminis no s’interrompen. La sentència s’ha dictat per una sala contenciosa administrativa composta per tres magistrats.`,
    source: "La Directa",
  },
  { //22-03-2021
    title:
      "Denúncia per possibles delictes ambientals en resposta a la represa de les obres a la serra de la Renegà",
    link:
      "https://directa.cat/denuncia-per-delictes-ambientals-en-resposta-a-la-represa-de-les-obres-a-la-serra-de-la-renega/",
    image:
      "https://directa.cat/app/uploads/2021/03/DSC_6575.jpg",
    description: `Segons la denúncia, presentada per la Plataforma Salvem la Renegà i l'entitat ecologista GECEN davant la Fiscalia de Medi Ambient de Castelló, la constructora Costa Bellver SA, de l’empresari Eugenio Calabuig, estaria efectuant moviments de terra sense autorització municipal ni cap classe d’avaluació ambiental sobre el barranc del Diable en el marc del projecte urbanístic que pretén construir a la serra de la Renegà, un fet que segons les expertes en medi ambient podria provocar inundacions i posar en risc la seguretat de les persones`,
    source: "La Directa",
  },
  { //11-03-2021
    title:
      "Oropesa incorpora casi 11 millones de los remanentes para inversiones",
    link:
      "http://todooropesa.com/sociedad/oropesa-incorpora-casi-11-millones-de-los-remanentes-para-inversiones",
    image:
      "http://todooropesa.com/wp-content/uploads/2021/03/Pleno-telematico-2-Medium.jpg",
    description: `La otra moción aprobada, en este caso con los votos a favor de PSOE, Compromís y las abstenciones de PP y Ciudadanos, corresponde a la protección de La Renegà. En esta, se establece regular la circulación de vehículos a motor dentro del mencionado espacio e iniciar los trámites para que La Renegà sea catalogada como paraje natural municipal.`,
    source: "Todo Oropesa",
  },
  { //11-03-2021
    title:
      "Reanudan las obras para la construcción del Centro del Mediterráneo",
    link:
      "http://todooropesa.com/urbanismo/reanudan-las-obras-para-la-construccion-del-centro-del-mediterraneo",
    image:
      "http://todooropesa.com/wp-content/uploads/2021/03/obras_centro_interpretacion_mediterraneo_tortugas_via_verde_torre_bellver_oropesa.jpeg",
    description: `Las obras para la construcción del Centro de Interpretación del Mediterráneo se han retomado en las últimas semanas, tras haber obtenido la correspondiente licencia por parte del Ayuntamiento, después de meses de espera.
    «Les dimos la licencia porque cumplían todos los requisitos de la ley», según indicó Jiménez. El espacio se encuentra ubicado en la franja oeste de la vía verde, que está considerada como urbana en el PGOU, en la urbanización Torre Bellver.`,
    source: "Todo Oropesa",
  },
  { //08-03-2021
    title:
      "Proteger el paisaje",
    link:
      "https://www.elmundo.es/comunidad-valenciana/castellon/2021/03/08/604681e4fdddffd7638b457b.html",
    image:
      "https://phantom-elmundo.unidadeditorial.es/ca644b37c28b2c1d846abc3a77091587/resize/550/f/webp/assets/multimedia/imagenes/2021/03/08/16152285326313.jpg",
    description: `Y NO llueve a gusto de todos en los confines de Benicàssim. Belén Robledo, portavoz de Salvem la Renegà, rechaza la saturación urbanística de la zona anexa a la vía verde entre les Platgetes de Bellver y Orpesa. La ejecución debe hacerse con lupa en un lugar tan sensible como este. Un paseo marítimo, un centro de interpretación, un hotel y muchas viviendas en una zona declarada urbanizable.`,
    source: "El Mundo",
  },
  { //26-02-2021
    title:
      "'Salvem La Renegà' emprén noves protestes en defensa del territori i exigeix la seua protecció",
    link:
      "https://castellonplaza.com/SalvemLaRenegemprnnovesprotestesendefensadelterritoriiexigeixlaseuaprotecci",
    image:
      "https://castellonplaza.com/public/Image/2021/2/WhatsAppImage2021-02-26at12.38.034_NoticiaAmpliada.jpg",
    description: `CASTELLÓ. Al crit de "la Renegà no es toca" o "més protecció, menys excavació" i amb el soroll de les casserolades de fons, la plataforma Salvem la Renegà ha emprés noves protestes per la represa de les obres en la zona de Torre Bellver i s'ha reunit aquest divendres enfront de les dependències de Medi Ambient de la Diputació de Castelló. I és que el grup ecologista no cessa en la seua lluita per protegir el paratge de la Renegà, pròxim a la Via Verda que uneix Orpesa i Benicàssim, i que és considerat Lloc d'Importància Comunitària (LIC).`,
    source: "Castellón Plaza",
  },

  { //23-02-2021
    title:
      "Serna Lorente, els promoters del sol i la platja que han tombat la protecció del litoral Valencià",
    link:
      "https://directa.cat/serna-lorente-els-promotors-del-sol-i-platja-que-han-tombat-la-proteccio-del-litoral-valencia/",
    image:
      "https://directa.cat/app/uploads/2021/02/COB427760-1024x576.jpg",
    description: `Els Serna Lorente, una de les nissagues amb més sòl urbanitzable al País Valencià, han aconseguit anul·lar el Pla d’Acció Territorial de la Infraestructura Verda del Litoral (PATIVEL), que protegia de la rajola 7.500 hectàrees, a través d'un recurs en què al·legaven la manca d'informes del pla, el qual posava fre a un dels projectes més ambiciosos de l'empresa familiar, TM Grupo Immobiliario`,
    source: "La Directa",
  },
  { //13-02-21
    title:
      "La nulidad del Pativel abre la puerta a construir más de 20.000 viviendas",
    link:
      "https://www.lasprovincias.es/comunitat/nulidad-pativel-abre-20210212190115-nt.html",
    image:
      "https://static.lasprovincias.es/www/multimedia/202102/12/media/cortadas/ba%c3%b1ista-REbz5GE7A90uQnqb8LyZKjM-624x385@Las%20Provincias.jpg",
    description: `A estas actuaciones se suman otras que tuvieron que aparcarse como el sector MR-10 de la Marina de Elche (1.200 viviendas), Benicàssim Golf (3.000) o La Renegà en Oropesa (1.000).`,
    source: "Las Provincias",
  },

  { //12-02-21
    title:
      "Orpesa creará 2 grandes parkings entre la Vía Verde y la Concha, y en la Renegà",
    link:
      "https://www.elperiodicomediterraneo.com/comarcas/2021/02/12/orpesa-creara-2-grandes-parkings-40545285.html",
    image:
      "https://estaticos-cdn.prensaiberica.es/clip/55d23ce0-cc9c-442f-9757-09bb9f9c79cc_16-9-aspect-ratio_default_0.jpg",
    description: `El Ayuntamiento de Orpesa adecuará dos grandes parkings que beneficiarán al sector turístico: uno de ellos se emplazará entre la Vía Verde y la playa de La Concha y el otro, a la entrada de la Renegà.`,
    source: "El Periodico Mediterraneo",
  },
  { //11-02-2021
    title:
      "'El TSJCV declara nulo el Pativel y la Generalitat anuncia que presentará un recurso de casación a la sentencia",
    link:
      "https://www.castelloninformacion.com/tsjcv-declara-nulo-pativel-y-la-gva-recurrira/",
    image:
      "https://www.castelloninformacion.com/wp-content/uploads/2017/02/Almassora-PATIVEL-710x333.jpg",
    description: `A primera hora de esta tarde se conoció que la Sección Primera de la Sala de lo Contencioso-Administrativo del Tribunal Superior de Justicia de la Comunidad Valenciana (TSJCV) ha declarado nulo, por ser contrario a derecho, el Plan de Acción Territorial de la Infraestructura Verde del Litoral, Pativel, de la Comunitat Valenciana, aprobado por decreto del Consell el 4 de mayo de 2018.`,
    source: "Castellón Información",
  },
  {
    title:
      "Salvem la Renegà' denuncia que Costa Bellver sigue deteriorando la zona LIC con la complicidad de las instituciones",
    link:
      "https://castellon.elperiodicodeaqui.com/epda-noticias/-salvem-la-reneg-denuncia-que-costa-bellver-sigue-deteriorando-la-zona-lic-con-la-complicidad-de-las-instituciones/237857",
    image:
      "https://castellon.elperiodicodeaqui.com/netpublisher/minfo/imagenes/5721_WhatsApp_Image_2021-01-28_at_11.52",
    description:
      'El movimiento acusa a Costa Bellver de ser "una empresa que se mueve por la búsqueda del beneficio económico" y piden a las instituciones que actúen ya',
    source: "Castellón, El periodico de aquí",
  },
  {
    title: "Incendio en la Renegà",
    link:
      "https://castellondiario.com/un-fuego-quema-60-metros-cuadrados-de-matorral-y-arboles-en-la-renega/amp/?__twitter_impression=true",
    image:
      "https://castellondiario.com/wp-content/uploads/2021/01/Incendio-la-Reneg%C3%A0.jpg",
    source: "Castellón Diario",
    description:
      "Un fuego quema 60 metros cuadrados de matorral y árboles en la Renegà",
  },
  {
    title:
      "Plataformas ecologistas reclaman en Castellón más concienciación social",
    link:
      "https://castellonplaza.com/plataformas-ecologistas-reclaman-en-castello-mas-concienciacion-social-hacia-el-medio-ambiente",
    image:
      "https://castellonplaza.com/public/Image/2020/11/97FDA95C-7B2A-417A-9E16-D19CB8DCD2B9_forCrop.jpg",
    source: "Castellón Plaza",
    description:
      "CASTELLÓ. Representantes de los colectivos Salvem la Renegà, Iai@flautas, La Cosa Nostra, Castelló en Bici, CGT, Castelló LGTBI, Intersindical, Plataforma Frenem la Contaminació, AAVV Vecinos Playa Almassora, CCOO País Valencià, Comunitat UJIxPlaneta, Xarxa Agroecològica Castelló y Plataforma per un Nou Model Energètic se han manifestado este martes junto al Auditori y Palau de Congressos de Castelló para reivindicar una mayor protección medioambiental por parte de las grandes compañías, coincidiendo con la celebración del II Ecoforum.",
  },
  {
    title:
      "La Plataforma Salvem la Renegà expone su lucha junto a otros colectivos en defensa del territorio",
    link:
      "https://castellonplaza.com/LaPlataformaSalvemlaRenegexponesuluchajuntoaotroscolectivosendefensadelterritorio",
    image:
      "https://castellonplaza.com/public/Image/2020/7/WhatsAppImage2020-07-04at15.37.19_NoticiaAmpliada.jpg",
    source: "Castellón Plaza",
    description: `
    CASTELLÓ. La Plataforma Salvem la Renegà participó el pasado viernes en una mesa redonda, junto a diferentes asociaciones en defensa del territorio, para compartir las distintas experiencias de cada organización en la lucha por la defensa de la tierra. Plataformas como No a la MAT,Petroli no, Columbretes Netes, Plataforma Antifracking o Frenem la Contaminació participaron en la charla celebrada en la Plaza de L'Ereta de Castelló.`,
  },
  {
    title:
      "El grupo Calabuig continúa con su operación de greenwashing para poder construir en la zona de la Colomera",
    link:
      "http://el7set.es/art/36065/el-grupo-calabuig-continua-con-su-operacion-de-greenwashing-para-poder-construir-en-la-zona-de-la-colomera",
    image:
      "http://el7set.es/upload/images/06_2020/7357_whatsapp-image-2020-06-29-at-114715.jpg",
    source: "El7set",
    description:
      "Esta vez utilizando una tortuga y la limpieza de la playa nudista como reclamo",
  },
  {
    title:
      "Exitosa concentración en las calles de Benicàssim organizada por la plataforma Salvem la Renegà",
    link:
      "https://www.elperiodicodeaqui.com/epda-noticias/exitosa-concentraci-n-en-las-calles-de-benic-ssim-organizada-por-la-plataforma-salvem-la-reneg-/217244",
    description:
      "Salvem la Renegà canaliza la demanda social que exige la protección del patrimonio natural, paisajístico e histórico que alberga el litoral de Oropesa y pide su declaración como espacio natural protegido",
    image:
      "https://www.elperiodicodeaqui.com/netpublisher/minfo/imagenes/8432_IMG_7508.jpg",
    source: "El periodico de aquí",
  },
  {
    title:
      "Esquerra Unida se suma a la movilización contra el proyecto urbanístico de la Renegà",
    link:
      "https://www.elperiodicodeaqui.com/epda-noticias/esquerra-unida-se-suma-a-la-movilizaci-n-contra-el-proyecto-urban-stico-de-la-reneg-/216956",
    description:
      'Silvia Peris: "Si la empresa está actuando en los terrenos sin licencia, la Generalitat debe actuar ya para detener las obras"',
    source: "El periodico de aquí",
  },
  {
    title:
      "Las protestas por el proyecto urbanístico de Costa Bellver se trasladan a Benicàsssim",
    description:
      "ASTELLÓ. La llamada a la movilización por parte de la plataforma ciudadana Salvem la Renegà, contraria al proyecto urbanístico en el plan parcial de Torre Bellver, que promueven la empresa Costa Bellver y la Fundación Azul Marino en el término municipal de Oropesa del Mar, contó este viernes con amplio eco social y una masiva asistencia de personas en una manifestación que tuvo un largo recorrido por las calles de Benicàssim.",
    source: "Castellón Plaza",
    link:
      "https://castellonplaza.com/las-protestas-por-el-proyecto-urbanistico-de-costa-bellver-se-trasladan-a-benicasssim",
    image:
      "https://castellonplaza.com/public/Image/2020/6/SalvemlaReneg%C3%A1CarlosPascual27_Multimedia-ampliada.jpg",
  },
  {
    title:
      "L'empresa Costa Bellver SA perfora la serra de la Renegà sense llicència d'obra major per construir un macroprojecte turístic",
    description:
      "La societat de l’empresari Eugenio Calabuig Gimeno va començar les obres amb maquinària pesant sense disposar de les llicències corresponents, segons ha pogut comprovar la 'Directa'. Calabuig es troba a l’espera de conèixer la data de judici oral per un delicte d’estafa, apropiació indeguda i administració deslleial per la compravenda dels terrenys ubicats a la zona sud de la serra de la Renegà, on pretén construir un centre d’interpretació del Mediterrani, 56 apartaments de luxe i un hotel de tres plantes amb 77 habitacions",
    source: "Directa",
    link:
      "https://directa.cat/lempresa-costa-bellver-sa-perfora-la-serra-de-la-renega-sense-llicencia-dobra-major-per-construir-un-macroprojecte-turistic/",
    image: "https://directa.cat/app/uploads/2020/06/web_DSCF3051.jpg",
  },
  {
    title:
      "La población reacciona ante las controvertidas obras en la costa de Oropesa con foto-denuncias y vídeo-denuncias",
    description:
      "Durante el confinamiento empezaron unas obras que la constructora Costa Bellver sabía que iban a despertar el rechazo entre la ciudadanía. Desde la plataforma Salvem la Renegà manifiestan que ese es el motivo por el cual han puesto en marcha esta gran campaña de marketing que es el centro de interpretación. Una manera de dar aspecto verde a un proyecto que en definitiva no supondrá más que cubrir de hormigón nuestro litoral.",
    source: "El7set",
    link:
      "http://el7set.es/art/35983/la-poblacion-reacciona-ante-las-controvertidas-obras-en-la-costa-de-oropesa-con-foto-denuncias-y-video-denuncias",
    image: "http://el7set.es/upload/images/06_2020/2617_20200524_111957.jpg",
  },
  {
    title:
      "Arrecian las protestas ciudadanas contra el proyecto de Costa Bellver en Oropesa del Mar",
    description:
      "Con el final del estado de alarma, las movilizaciones ciudadanas contra las obras para crear un centro de interpretación y el desarrollo urbanístico a cargo de la promotora Costa Bellver en Oropesa del Mar arreciarán, tal como anuncia este viernes la plataforma Salvem la Renegà, que volverá a promover una nueva marcha prevista para el próximo 26 de junio que, desde Benicàssim, transcurrirá por la Vía Verde, itinerario que une las dos localidades vecinas y que está colindante a las obras iniciadas durante el pasado confinamiento general de la población.",
    source: "Castellón Plaza",
    link:
      "https://castellonplaza.com/arrecian-las-protestas-ciudadanas-contra-el-proyecto-de-costa-bellver-en-oropesa-del-mar",
    image:
      "https://castellonplaza.com/public/Image/2020/6/IMG-20200525-WA0015_forCrop.jpg",
  },
  {
    title:
      "Miembros de la plataforma Salvem la Renegà se reúnen con la constructora Costa Bellver",
    description:
      "El pasado martes 9 de junio integrantes de la plataforma Salvem la Renegà se reunieron con la constructora Costa Bellver. En esta reunión la constructora les explicó en qué consistían sus proyectos y en qué punto estaban. Concretamente, les explicaron los proyectos del centro de interpretación y el hotel, así como lo que querían hacer en la zona LIC. Por lo que explicaron, el proyecto de la empresa para este Lugar de Importancia Comunitaria de la Red Natura 2000 incluiría, en el caso de que se les permitiera, una zona de restauración.",
    source: "El7set",
    link:
      "http://el7set.es/art/35955/miembros-de-la-plataforma-salvem-la-renega-se-reunen-con-la-constructora-costa-bellver",
    image:
      "http://el7set.es/upload/images/06_2020/8520_whatsapp-image-2020-06-03-at-184640.jpg",
  },
  {
    title:
      "Salvem la Renegà duda de la legalidad del proyecto de Costa Bellver tras reunirse con la constructora",
    description: `La Plataforma Salvem la Renegà ha asegurado que la constructora Costa Bellver, responsable de la ejecución del Centro de Interpretación Marino del Mediterráneo (Cimed) en Oropesa del Mar, "no cuenta con licencia de obras" sino con una "declaración responsable" y han puesto en duda que ésta sirva para los trabajos que se están realizando.`,
    source: "Castellón Plaza",
    link:
      "https://castellonplaza.com/SalvemlaRenegdudadelalegalidaddelproyectodeCostaBellvertrasreunirseconlaconstructora",
    image:
      "https://castellonplaza.com/public/Image/2020/6/IMG_5416a_forCrop.jpg",
  },
  {
    title:
      "Salvem la Renegà dice que las obras del centro marino no tienen licencia",
    description: `La Plataforma Salvem la Renegà ha asegurado que la constructora Costa Bellver, responsable de la ejecución del Centro de Interpretación Marino del Mediterráneo (CIMED) en Oropesa del Mar,"no cuenta con licencia de obras" sino con una "declaración responsable" y han puesto en duda que ésta sirva para los trabajos que se están realizando.`,
    source: "La Vanguardia",
    link:
      "https://www.lavanguardia.com/vida/20200616/481814478128/salvem-la-renega-dice-que-las-obras-del-centro-marino-no-tienen-licencia.html",
  },
  {
    title:
      "Salvem la Renegà es manifesta per a impedir l'especulació urbanística al litoral d’Orpesa",
    description: `Membres de la Plataforma Salvem la Renegà s’han manifestat aquest divendres al paratge litoral de la Torre de Bellver, on han començat les obres del futur Centre d'Interpretació Marí del Mediterrani (Cimed) a Orpesa, amb la intenció d'impedir "l'especulació urbanística" i de promoure el respecte pel "paisatge litoral".`,
    link:
      "https://apuntmedia.es/va/noticies/societat/salvem-la-renega-es-manifesta-per-a-impedir-l-especulacio-urbanistica-al-litoral-d-orpesa",
    source: "À punt",
    image: "https://statics.apuntmedia.es/news/IMG0000078210_1591979186.jpeg",
  },
  {
    title: `'Salvem la Renegà' condena los insultos aparecidos contra los promotores del proyecto Costa Bellver`,
    description:
      "La Plataforma Salvem La Renegà ha mostrado este viernes, a través de un comunicado dirigido a los medios, su rechazo frontal y condena por los insultos ocasionados por personas ajenas a la misma y que no representan a este colectivo ciudadano.",
    link:
      "https://castellonplaza.com/salvem-la-renega-condena-los-insultos-aparecidos-contra-los-promotores-del-proyecto-costa-bellver",
    source: "Castellón Plaza",
    image:
      "https://castellonplaza.com/public/Image/2020/6/WhatsAppImage2020-06-12at12.28.25_NoticiaAmpliada.jpg",
  },
  {
    title: `Salvem la Renegà despliega pancartas para impedir la especulación urbanística`,
    description: `Miembros de la Plataforma Salvem la Renegà han desplegado hoy pancartas en el paraje litoral Torre-Bellver, donde han comenzado las obras del futuro Centro de Interpretación Marino del Mediterráneo (CIMED) en Oropesa del Mar, con la intención de impedir "la especulación urbanística" y de promover el respeto por el "paisaje litoral".`,
    link:
      "https://www.lavanguardia.com/vida/20200612/481723381009/salvem-la-renega-despliega-pancartas-para-impedir-la-especulacion-urbanistica.html",
    source: "La Vanguardia",
  },
  {
    title:
      "Oropesa pide a Medio Ambiente un informe sobre las podas en zona LIC",
    description:
      "El Ayuntamiento de Oropesa del Mar ha remitido un nuevo escrito a la Conselleria de Medio Ambiente para que informe sobre las obras de poda que se han llevado a cabo en el Lugar de Interés Comunitario (LIC) ubicado en el sector sur de Torre Bellver, con el fin de garantizar que se han realizado adecuadamente.",
    link:
      "https://www.lavanguardia.com/vida/20200611/481715164983/oropesa-pide-a-medio-ambiente-un-informe-sobre-las-podas-en-zona-lic.html",
    source: "La Vanguardia",
  },
  {
    title: "Crece la oposición al centro marino en el litoral de Orpesa",
    description:
      "Orpesa acogerá este fin de semana varias acciones reivindicativas contra las obras que se llevan a cabo en el entorno de la Renegà. El movimiento ecologista denuncia a los promotores ante el Seprona por presuntos delitos contra el medio ambiente.",
    link:
      "https://www.publico.es/ciencias/renega-crece-oposicion-centro-marino-litoral-orpesa.html",
    source: "Público",
    image:
      "https://www.publico.es/files/article_main//files/crop/uploads/2020/06/10/5ee1285d21c34.r_1591853118052.0-493-1200-1293.jpeg",
  },
  {
    title:
      "Salvem La Renegà convoca tres acciones reivindicativas contra el centro marino",
    description: `La Plataforma Salvem La Renegà ha convocado tres acciones reivindicativas para "conseguir detener la explotación urbanística" que supondrá, según la organización, el futuro Centro de Interpretación Marino del Mediterráneo (CIMED), cuyas obras ya han comenzado en la localidad de Oropesa del Mar. Desde la plataforma han convocado tres jornadas reivindicativas, el viernes 12 de junio, el domingo 14 y el lunes 15 junto a las obras en la urbanización Torre Bellver de Oropesa para que se acuda con pancartas, en actitud "pacífica y sin insultos" y para informar "a los que quieran saber qué pasa" con el futuro centro de interpretación marino y sus consecuencias para el Medio Ambiente.`,
    link:
      "https://castellonplaza.com/salvem-la-renega-convoca-tres-acciones-reivindicativas-contra-el-centro-marino",
    source: "Castellón Plaza",
    image:
      "https://castellonplaza.com/public/Image/2020/6/1589993335foto1_NoticiaAmpliada_NoticiaAmpliada.jpg",
  },
  {
    title:
      "'Salvem la Renegà' y el Gecen denuncian ante el Seprona las obras del proyecto Costa Bellver",
    description:
      "La plataforma ciudadana Salvem la Renegà y el grupo ecologista Gecen han presentado formalmente denuncia ante el Seprona contra el proyecto Costa Bellver, que se viene construyendo junto al entorno de la Renegà, en el término municipal de Oropesa del Mar, según han informado  fuentes de estos colectivos a través de un comunicado.",
    link:
      "https://castellonplaza.com/salvem-la-renega-y-el-gecen-denuncian-ante-el-seprona-las-obras-del-proyectocosta-bellver",
    image:
      "https://castellonplaza.com/public/Image/2020/6/IMG_3218_NoticiaAmpliada.jpg",
    source: "Castellón Plaza",
  },
  {
    title: `Saavedra (Podemos) insta a parar las obras junto a la Renegà antes de lamentar "hechos consumados"`,
    description:
      "Marisa Saavedra, diputada de Unidas Podemos en el Congreso por Castellón, ha visitado este sábado La Renegá, donde se ha reunido con colectivos vecinales y de protección de la naturaleza que están movilizándose para salvaguardar este espacio de los proyectos de urbanización que, tal como denuncian, amenazan con la destrucción de un entorno de gran valor medioambiental.",
    link:
      "https://castellonplaza.com/saavedra-podemos-insta-a-parar-las-obras-junto-a-la-renega-antes-de-lamentar-hechos-consumados?fbclid=IwAR24rV8Gs7EeqXX9vaHXFztn6rklUytJPZancoJAXqptPfPNls2d1TzbWhk",
    image:
      "https://castellonplaza.com/public/Image/2020/6/WhatsAppImage2020-06-06at21.01.22_NoticiaAmpliada.jpg",
    source: "Castellón Plaza",
  },
  {
    title: `El paraigua legislatiu que dóna aixopluc a la destrossa del litoral verge a la via verda de Benicàssim-Orpesa és el PGOU de 1982`,
    description:
      "Recentment han començat les obres per a la construcció d’un Centre d’Interpretació Mari, un aquari, nucli zoològic, en zona annexa a la via verda de Benicàssim-Orpesa. Es tracta d’una zona litoral no urbanitzada. Aquest Centre forma part d’una actuació urbanística, Costa Bellver, que comptarà amb un hotel i centenars de segons habitatges destruint una zona litoral de gran valor paisatgístic, mediambiental i cultural.",
    link:
      "https://paisdelmar.com/el-paraigua-legislatiu-que-dona-aixopluc-a-la-destrossa-del-litoral-verge-a-la-via-verda-de-benicassim-orpesa-es-el-pgou-de-1982-2/",
    image: "https://paisdelmar.com/wp-content/uploads/2020/06/via-verda.jpeg",
    source: "País del mar",
  },
  {
    title: "Aguas revueltas en la playa de la Renegà",
    description: `La constructora Costa Bellver, de la familia Calabuig, prepara la obra de un Centro de Interpretación Marina en la Costa de Oropesa bajo la lupa de ecologistas y vecinos
    Esta zona costera es un Lugar de Interés Comunitario (LIC) y, por tanto, protegido por su valor medioambiental`,
    image:
      "https://www.cuartopoder.es/wp-content/uploads/2020/06/1_Ma0N-mWrxExeamr97ag87Q-750x430.jpeg",
    source: "CuartoPoder",
    link:
      "https://www.cuartopoder.es/sociedad/medio-ambiente/2020/06/17/aguas-revueltas-en-la-playa-de-la-renega/",
  },
  {
    title:
      "Salvem la Renegà denuncia actuaciones ilegales en la zona protegida del litoral de Oropesa",
    link:
      "https://castellonplaza.com/SalvemlaRenegdenunciaactuacionesilegalesenlazonaprotegidadellitoraldeOropesa",
    image:
      "https://castellonplaza.com/public/Image/2020/6/2143d58f-f2a7-4f64-b532-3c53c0fcf6a4_forCrop.jpg",
    description:
      "La febre urbanística de principis dels 2000 a les costes valencianes no va perdonar aquests territoris verges, que tot i el seu valor natural consten com a urbanitzables des de l’aprovació del Pla General d’Ordenació Urbanística (PGOU).",
    source: "Castellón Plaza",
  },
  {
    title:
      "Els germans Calabuig Gimeno investigats per corrupció, impulsen un projecte urbanístic a la Serra de la Renegà",
    link:
      "https://directa.cat/els-germans-calabuig-gimeno-investigats-per-corrupcio-impulsen-un-projecte-urbanistic-a-la-serra-de-la-renega/",
    image:
      "https://directa.cat/app/uploads/2020/05/WEB_RENEGA%CC%80-011-1024x683.jpg",
    description:
      "La febre urbanística de principis dels 2000 a les costes valencianes no va perdonar aquests territoris verges, que tot i el seu valor natural consten com a urbanitzables des de l’aprovació del Pla General d’Ordenació Urbanística (PGOU).",
    source: "La Directa",
  },
  {
    title:
      "Crece el descontento ecologista y vecinal por el avance de las obras en el entorno de la Renegà ",
    link:
      "https://castellonplaza.com/crece-el-descontento-ecologista-y-vecinal-por-el-avance-de-las-obras-en-el-entorno-de-la-renega",
    image:
      "https://castellonplaza.com/public/Image/2020/5/1589993335foto1_NoticiaAmpliada.jpg",
    description:
      "La plataforma Salvem la Renegá ha lamentado este miércoles la falta de información en detalle de los proyectos, permisos, licencias, evaluaciones y controles ambientales.",
    source: "Castellón Plaza",
  },
  {
    title: "En plena emergencia climática, Oropesa quiere romper el mar",
    link:
      "https://www.elperiodic.com/opinion/yo-animal/plena-emergencia-climatica-oropesa-quiere-romper_7372",
    image:
      "https://turismodecastellon.com/uploads/ficherosAntiguos/imagenes/playa_la_renega_1.jpg",
    description:
      "La Renegá es una zona protegida del litoral marino del pueblo de Oropesa, Castellón. Casi 20.000 firmas se han recogido ya en la plataforma Change.org",
    source: "El Periòdic",
  },
  {
    title:
      "La Renegà: Un observatorio marítimo en pleno litoral de Orpesa: ¿el nuevo Marina d’Or?",
    link:
      "https://www.publico.es/sociedad/renega-centro-interpretacion-mediterraneo-orpesa-nuevo-marina-d-or.html",
    image: "https://www.publico.es/uploads/2020/05/16/5ebff43ec3e60.jpeg",
    description:
      'Movimientos ecologistas denuncian que la construcción de un "observatorio marino" en una parcela urbana del litoral de Orpesa esconde como verdadera finalidad la resurrección de antiguos proyectos urbanísticos paralizados por la crisis.',
    source: "Público",
  },
  {
    title:
      'Compromís pide "total transparencia" sobre el proyecto del entorno de la Renegà',
    link:
      "https://castellonplaza.com/compromis-pide-total-transparencia-sobre-el-proyecto-del-entorno-de-la-renega",
    image:
      "https://castellonplaza.com/public/Image/2020/5/WhatsAppImage2020-05-13at12.09.11_NoticiaAmpliada.jpg",
    description: "",
    source: "Castellón Plaza",
  },

  {
    title:
      "Polèmica per l’inici de les obres d’un centre interpretatiu prop de la Renegada, a Orpesa",
    link:
      "https://www.lavanguardia.com/vida/20200514/481144776760/compromis-exige-transparencia-absoluta-a-oropesa-sobre-el-centro-marino.html",
    image: "",
    description:
      'Compromís exige "transparencia absoluta" al Ayuntamiento de Orpesa sobre el proyecto del entorno de la Renegà que prevé la construcción del Centro de Interpretación del Mediterráneo (CIMED)',
    source: "La Vanguardia",
  },
  {
    title:
      "Denuncian a Costa Bellver por utilizar la naturaleza como reclamo inmobiliario",
    link:
      "https://www.ecologistasenaccion.org/143483/denuncian-a-costa-bellver-por-utilizar-la-naturaleza-como-reclamo-inmobiliario/",
    image: "",
    description:
      "Ecologistas en Acción rechaza la reactivación del urbanismo salvaje en el municipio de Oropesa del Mar (Castellón) y se opone a los nuevos proyectos urbanísticos del Plan Parcial Torre de Bellver y a la construcción del núcleo zoológico dedicado a las tortugas marinas.",
    source: "Ecologistas en Acción",
  },
  {
    title:
      "Más de 7.400 firmas recogidas para paralizar un proyecto en Bellver, junto a la Renegà",
    link:
      "https://cadenaser.com/emisora/2020/05/10/radio_castellon/1589114336_703730.html",
    image:
      "https://cadenaser00.epimg.net/ser/imagenes/2020/05/10/radio_castellon/1589114336_703730_1589114525_noticia_normal_recorte1.jpg",
    description:
      "Un proyecto defendido como medio ambiental y divulgativo, que modificará más de un kilómetro de paraje natural de calas y bosque mediterráneo",
    source: "Cadena SER",
  },
  {
    title:
      "Gecén denuncia que el Centro de Interpretación de Oropesa esconde un macroproyecto con viviendas y hotel",
    link:
      "https://cadenaser.com/emisora/2020/05/11/radio_castellon/1589211377_279006.html",
    image:
      "https://cadenaser00.epimg.net/ser/imagenes/2020/05/11/radio_castellon/1589211377_279006_1589211460_noticia_normal_recorte1.jpg",
    description:
      "La organización ecologista pide al Ayuntamiento de Oropesa que revise el Plan General de Ordenación Urbana, que fue aprobado en 1982",
    source: "Cadena SER",
  },
  {
    title: "Intersindical exigeix la protecció de la platja de la Renegà",
    link:
      "https://intersindical.org/salut_laboral/article/intersindical_exigeix_la_proteccio_de_la_platja_de_la_renega",
    image:
      "https://intersindical.org/images/imatges/generiques/Unknown-21.jpeg",
    description:
      "El Sindicat rebutja la reactivació dels projectes urbanístics d’aquesta zona d’Orpesa (la Plana Alta) i demana la seua immediata paralització en considerar que atempten contra la biodiversitat i el paisatge.",
    source: "Intersindical Valenciana",
  },
  {
    title:
      "Arrancan con polémica las obras de un centro interpretativo junto a la Renegà, en Oropesa",
    link:
      "https://castellonplaza.com/ArrancanconpolmicalasobrasdeuncentrointerpretativojuntoalaRenegenOropesa",
    image:
      "https://castellonplaza.com/public/Image/2020/5/slide1_NoticiaAmpliada.jpg",
    description: "",
    source: "Castellón Plaza",
  },
  {
    title:
      "AE-Agró mostra el seu suport a esta campanya per a evitar unes obres que destruiran un dels paratges més importants d’Orpesa",
    link: "https://accioecologista-agro.org/salvem-la-renega/",
    image:
      "https://accioecologista-agro.org/wp-content/uploads/2020/05/1.SalvemLaReneg%C3%A0.jpg",
    description:
      "El Grup Bellver, propietat de la família Calabuig, i la fundació Azul Marino han començat les obres per a construir un centre interpretatiu marí en el paratge de La Renegà d’Orpesa (La Plana Alta, Castelló).",
    source: "Acció Ecologista",
  },
];
export default function News() {
  const [language, setLanguage] = useState("es");
  const { t } = useTranslation();

  useEffect(() => {
    setLanguage(navigator.language.indexOf("es") > -1 ? "es" : "cat");
  }, []);

  return (
    <div className="container">
      <div className="header">
        <Link href="/">
          <div className="header-logo-container">
            <div className="header-title">{"Salvem la renegà!"}</div>
            <div className="header-subtitle">
              {"No a les obres d'un espai natural"}
            </div>
          </div>
        </Link>
        <div className="header-language-container">
          <Link href="/">
            <div className={`header-language`}>INICI</div>
          </Link>
          <Link href="/multimedia">
            <div className={`header-language`}>MEDIA</div>
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
        {/* <div className="news-container"> */}
        <ResponsiveMasonry
          columnsCountBreakPoints={{
            350: 1,
            740: 2,
            1000: 3,
            1370: 4,
            1600: 5,
          }}
        >
          <Masonry>
            {urlNews.map((newItem) => (
              <div
                className="new-container"
                onClick={() => window.open(newItem.link)}
              >
                <div className="new-image">
                  <img src={newItem.image} />
                </div>
                <div className="new-title">{newItem.title}</div>
                <div className="new-desc">{newItem.description}</div>
                <div className="new-source">{newItem.source}</div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
        {/* </div> */}
      </div>
      <script
        async
        src="http://guteurls.de/guteurls.js"
        selector=".aCssClass"
      ></script>
      <style jsx>{`
        @font-face {
          font-family: "Belta";
          src: url("/fonts/belta-bold.ttf");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 100;
          font-display: swap;
          src: url("/fonts/Inter-Thin.woff2?v=3.13") format("woff2"),
            url("/fonts/Inter-Thin.woff?v=3.13") format("woff");
        }
        @font-face {
          font-family: "Inter";
          font-style: italic;
          font-weight: 100;
          font-display: swap;
          src: url("/fonts/Inter-ThinItalic.woff2?v=3.13") format("woff2"),
            url("/fonts/Inter-ThinItalic.woff?v=3.13") format("woff");
        }

        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 200;
          font-display: swap;
          src: url("/fonts/Inter-ExtraLight.woff2?v=3.13") format("woff2"),
            url("/fonts/Inter-ExtraLight.woff?v=3.13") format("woff");
        }
        @font-face {
          font-family: "Inter";
          font-style: italic;
          font-weight: 200;
          font-display: swap;
          src: url("/fonts/Inter-ExtraLightItalic.woff2?v=3.13") format("woff2"),
            url("/fonts/Inter-ExtraLightItalic.woff?v=3.13") format("woff");
        }

        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url("/fonts/Inter-Light.woff2?v=3.13") format("woff2"),
            url("/fonts/Inter-Light.woff?v=3.13") format("woff");
        }
        @font-face {
          font-family: "Inter";
          font-style: italic;
          font-weight: 300;
          font-display: swap;
          src: url("/fonts/Inter-LightItalic.woff2?v=3.13") format("woff2"),
            url("/fonts/Inter-LightItalic.woff?v=3.13") format("woff");
        }

        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url("/fonts/Inter-Regular.woff2?v=3.13") format("woff2"),
            url("/fonts/Inter-Regular.woff?v=3.13") format("woff");
        }
        @font-face {
          font-family: "Inter";
          font-style: italic;
          font-weight: 400;
          font-display: swap;
          src: url("/fonts/Inter-Italic.woff2?v=3.13") format("woff2"),
            url("/fonts/Inter-Italic.woff?v=3.13") format("woff");
        }

        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url("/fonts/Inter-Medium.woff2?v=3.13") format("woff2"),
            url("/fonts/Inter-Medium.woff?v=3.13") format("woff");
        }
        @font-face {
          font-family: "Inter";
          font-style: italic;
          font-weight: 500;
          font-display: swap;
          src: url("/fonts/Inter-MediumItalic.woff2?v=3.13") format("woff2"),
            url("/fonts/Inter-MediumItalic.woff?v=3.13") format("woff");
        }

        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url("/fonts/Inter-SemiBold.woff2?v=3.13") format("woff2"),
            url("/fonts/Inter-SemiBold.woff?v=3.13") format("woff");
        }
        @font-face {
          font-family: "Inter";
          font-style: italic;
          font-weight: 600;
          font-display: swap;
          src: url("/fonts/Inter-SemiBoldItalic.woff2?v=3.13") format("woff2"),
            url("/fonts/Inter-SemiBoldItalic.woff?v=3.13") format("woff");
        }

        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url("/fonts/Inter-Bold.woff2?v=3.13") format("woff2"),
            url("/fonts/Inter-Bold.woff?v=3.13") format("woff");
        }
        @font-face {
          font-family: "Inter";
          font-style: italic;
          font-weight: 700;
          font-display: swap;
          src: url("/fonts/Inter-BoldItalic.woff2?v=3.13") format("woff2"),
            url("/fonts/Inter-BoldItalic.woff?v=3.13") format("woff");
        }

        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 800;
          font-display: swap;
          src: url("/fonts/Inter-ExtraBold.woff2?v=3.13") format("woff2"),
            url("/fonts/Inter-ExtraBold.woff?v=3.13") format("woff");
        }
        @font-face {
          font-family: "Inter";
          font-style: italic;
          font-weight: 800;
          font-display: swap;
          src: url("/fonts/Inter-ExtraBoldItalic.woff2?v=3.13") format("woff2"),
            url("/fonts/Inter-ExtraBoldItalic.woff?v=3.13") format("woff");
        }

        @font-face {
          font-family: "Inter";
          font-style: normal;
          font-weight: 900;
          font-display: swap;
          src: url("/fonts/Inter-Black.woff2?v=3.13") format("woff2"),
            url("/fonts/Inter-Black.woff?v=3.13") format("woff");
        }
        @font-face {
          font-family: "Inter";
          font-style: italic;
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
          font-family: "Inter var";
          font-weight: 100 900;
          font-display: swap;
          font-style: normal;
          font-named-instance: "Regular";
          src: url("/fonts/Inter-roman.var.woff2?v=3.13") format("woff2");
        }
        @font-face {
          font-family: "Inter var";
          font-weight: 100 900;
          font-display: swap;
          font-style: italic;
          font-named-instance: "Italic";
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
          font-family: "Inter var experimental";
          font-weight: 100 900;
          font-display: swap;
          font-style: oblique 0deg 10deg;
          src: url("Inter.var.woff2?v=3.13") format("woff2");
        }

        .container {
          width: 100vw;
          background: #423e28;
          padding: 0 16px;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .new-section-container {
          margin-left: 40px;
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
          .new-section-container {
            margin-left: 12px;
          }
        }

        .new-container {
          cursor: pointer;
          margin-bottom: 32px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          max-width: 300px;
          width: 80vw;
          height: fit-content;
        }

        .new-source {
          border-top: 0.5px solid rgba(255, 255, 255, 0.3);
          text-align: right;
          padding: 4px;
          padding-right: 10px;
          font-size: 10px;
          color: rgba(255, 255, 255, 0.6);
        }

        .new-image img {
          max-width: 300px;
          width: 80vw;
          margin-bottom: 8px;
          border-top-right-radius: 10px;
          border-top-left-radius: 10px;
        }

        .new-title {
          max-width: 300px;
          color: white;
          margin-bottom: 8px;
          margin-right: 12px;
          margin-left: 12px;
        }

        .new-desc {
          max-width: 300px;
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
          font-family: "Belta";
          color: white;
          margin-bottom: 24px;
          font-size: 32px;
        }

        .sections-container audio {
          margin-bottom: 64px;
          borer-radius: 4px;
        }

        .sections-container video {
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
          font-family: "Belta";
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
          transition: all 0.2s;
          cursor: pointer;
          min-width: 40px;
          height: 40px;
          color: rgba(255, 255, 255, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          line-height: 18px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          padding: 10px;
          margin-left: 8px;
          margin-top: 16px;
        }

        .header-language:hover {
          filter: brightness(1.6);
        }

        .selected {
          color: rgba(255, 255, 255, 1);
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
    </div>
  );
}
