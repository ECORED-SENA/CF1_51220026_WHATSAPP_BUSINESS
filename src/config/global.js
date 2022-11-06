export default {
  global: {
    componenteFormativo:
      'Publicación de contenidos a través de <em>WhatsApp Business</em>',
    descripcionCurso:
      'WhatsApp Business es una aplicación que está enfocada en prestar el servicio de comunicación entre empresas de diferentes tamaños y sus clientes. Las estrategias de venta de productos en línea pueden potenciarse enormemente con el uso de las herramientas gratuitas que ofrece y que se pueden integrar a estrategias de narrativas transmedia en diferentes medios digitales.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '<em>WhatsApp Business</em>',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Técnicas narrativas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Cultura de masas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Narrativa transmedia',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Optimización en motores de búsqueda',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Propuesta gramatical',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              '<em>Big data</em> y clasificación de datos de <em>WhatsApp</em>',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'El <em>feed</em> de noticias',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Los contenidos digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Plantillas gratuitas para el diseño de piezas gráficas',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo:
              'Herramientas de apoyo (sitio web, redes sociales, correo electrónico y blog)',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Envío de mensajes masivos',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Catálogos y otras publicaciones',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Engagement',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: '40defiebre. (s. f.). ¿Qué es un copy?',
      link: 'https://www.40defiebre.com/que-es/copy',
    },
    {
      referencia:
        'Aichner, T. y Jacob, F. (2015). Measuring the Degree of Corporate Social Media Use. International Journal of Market Research, 57(2), p. 134–153.',
      link: '',
    },
    {
      referencia:
        'Artear. (2022). Por qué WhatsApp es tan popular en América Latina. Tecno.',
      link:
        'https://tn.com.ar/tecno/aplicaciones/2022/01/04/por-que-WhatsApp-es-tan-popular-en-america-latina/',
    },
    {
      referencia:
        'Cherre, I. (2021). ¿Cuáles son las diferencias entre WhatsApp y WhatsApp Business? Computer Hoy.',
      link:
        'https://computerhoy.com/noticias/tecnologia/cuales-son-diferencias-whatsapp-whatsapp-business-897663 ',
    },
    {
      referencia:
        'Chevalier, S. (2019). ¿Qué tan popular es WhatsApp en Latinoamérica? Statista. ',
      link:
        'https://es.statista.com/grafico/17500/uso-de-WhatsApp-en-america-latina/',
    },
    {
      referencia:
        'Fanego, I. (2021). Cuántos usuarios tiene WhatsApp en 2021 y otros datos interesantes. AppCritic.',
      link: 'https://appcritic.es/usuarios-WhatsApp/',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones [MinTIC]. (2021). WhatsApp, la aplicación que más creció durante la pandemia y visitó Colombia 4.0. ',
      link:
        'https://mintic.gov.co/portal/inicio/Sala-de-prensa/184137:WhatsApp-la-aplicacion-que-mas-crecio-durante-la-pandemia-y-visito-Colombia-4-0',
    },
    {
      referencia:
        'Pastrana, C. (2019). Narrativas transmedia y Storytelling: El arte de contar. IEBS. ',
      link:
        'https://www.iebschool.com/blog/que-es-narrativa-transmedia-social-media-social-media/',
    },
    {
      referencia:
        'Snitcofsky, A. (2022). Qué es la API de WhatsApp Business y cómo conseguirla. Cliengo.',
      link: 'https://blog.cliengo.com/WhatsApp-business-api/',
    },
    {
      referencia:
        'Yepes, M. (2022). Mensajes automáticos en WhatsApp Business: qué son, para qué sirven y cómo usarlos. Cliengo.',
      link: 'https://blog.cliengo.com/mensajes-automaticos-WhatsApp-business/ ',
    },
  ],
  glosario: [
    {
      termino: 'Campañas digitales',
      significado:
        'campaña de mercadeo que se desarrolla dentro de entornos digitales.',
    },
    {
      termino: '<em>Engagement</em>',
      significado:
        'capacidad que tiene una compañía o marca para involucrar a su público objetivo y crear en él un compromiso a largo plazo que termine en un proceso de fidelización.',
    },
    {
      termino: '<em>Landing Pages</em>',
      significado:
        'página web donde el usuario aterriza para conocer un producto, servicios, novedad o promoción.',
    },
    {
      termino: '<em>Mass Media</em>',
      significado:
        'es un anglicismo que significa “comunicación de masas”. Es decir, la transmisión de un mensaje de un emisor único, de manera simultánea, para un perfil de audiencia que generalmente es de gran tamaño, heterogéneo y anónimo.',
    },
    {
      termino: 'Mensajería instantánea',
      significado:
        'es un servicio de software que propicia conversaciones en línea entre dos o más personas, y que, a la vez, ofrece diversas opciones de comunicación.',
    },
    {
      termino: 'Público objetivo',
      significado:
        'segmento de la población a la que va encaminada una estrategia de <em>marketing</em>.',
    },
    {
      termino: 'Redes sociales',
      significado:
        'plataformas virtuales creadas en línea para que personas u organizaciones que comparten intereses en común se unan.',
    },
    {
      termino: '<em>Social Media</em>',
      significado:
        'se refiere a todas las redes y medios que han surgido en los últimos años con el Internet, tales como Instagram, Facebook y WhatsApp.',
    },
    {
      termino: '<em>Spam</em>',
      significado:
        'es cualquier forma de comunicación no solicitada que se envía de forma masiva (enviar spam es ilegal en la mayoría de jurisdicciones online de países alrededor del mundo).',
    },
    {
      termino: '<em>Standalone</em>',
      significado:
        'contenido de realidad virtual, aplicación adicional de una misma compañía. ',
    },
  ],
  complementario: [
    {
      tema: '<em>WhatsApp Business</em>',
      referencia:
        'Cherre, I. (2021). ¿Cuáles son las diferencias entre WhatsApp y WhatsApp Business? Computer Hoy.',
      tipo: 'Artículo',
      link:
        'https://computerhoy.com/noticias/tecnologia/cuales-son-diferencias-whatsapp-whatsapp-business-897663',
    },
    {
      tema: '<em>WhatsApp Business</em>',
      referencia:
        'Snitcofsky, A. (2022). Qué es la API de WhatsApp Business y cómo conseguirla. Cliengo.',
      tipo: 'Artículo',
      link: 'https://blog.cliengo.com/WhatsApp-business-api/',
    },
    {
      tema: '<em>WhatsApp Business</em>',
      referencia:
        'Yepes, M. (2022). Mensajes automáticos en WhatsApp Business: qué son, para qué sirven y cómo usarlos. Cliengo.',
      tipo: 'Artículo',
      link: 'https://blog.cliengo.com/mensajes-automaticos-WhatsApp-business/',
    },
    {
      tema: 'Narrativa transmedia',
      referencia:
        'Pastrana, C. (2019). Narrativas transmedia y Storytelling: El arte de contar. IEBS. ',
      tipo: 'Artículo',
      link:
        'https://www.iebschool.com/blog/que-es-narrativa-transmedia-social-media-social-media/',
    },
    {
      tema: 'Narrativa transmedia',
      referencia:
        'Fernández, A. (2019). Las Narrativas Transmedia - Concepto, Características y Ejemplos - LEGMA EXPRESS (Práctica Final) [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7n7G9HL7sC8',
    },
    {
      tema: 'Plantillas gratuitas para el diseño de piezas gráficas',
      referencia:
        'Pensamiento de Color. (2022a). Como hacer estados de WhatsApp o historias de Instagram con Canva gratis y rápido [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/CER6X8yPExs',
    },
    {
      tema: 'Plantillas gratuitas para el diseño de piezas gráficas',
      referencia:
        'Pensamiento de Color. (2022b). Cómo hacer POST e HISTORIAS para redes sociales en celular gratis y rápido VistaCreate de Crello [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/EfI_sv5O4kM',
    },
    {
      tema: 'Plantillas gratuitas para el diseño de piezas gráficas',
      referencia:
        'Cerebrote. (2022). Cómo editar videos desde el celular gratis, sin internet y sin marca de agua [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ZkJ85EAIyMw',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Stephanie Ascanio',
        cargo: 'Experta Temática',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Luis Fernando Botero Mendoza',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de Estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Maria Natalia Maldonado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
