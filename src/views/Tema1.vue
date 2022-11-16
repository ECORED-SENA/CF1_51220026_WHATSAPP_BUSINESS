<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 #[em WhatsApp Business]

    .row
      .col-lg-4.mb-5.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/1.png" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-up") #[em WhatsApp] se define como una plataforma de mensajería gratuita, que permite enviar y recibir mensajes de texto, mensajes multimedia, realizar llamadas de voz y de video, videoconferencias, compartir documentos, habilitar la opción de localización, entre otros usos. Tiene más de dos mil millones de usuarios activos en todo el mundo y, actualmente, es soportada por los sistemas operativos iOS y #[em Android] para dispositivos móviles, teléfonos celulares y computadoras personales. Este servicio, aunque gratuito, exige tener un número móvil activo para su suscripción y utilización.
        p.mt-4(data-aos="fade-up") Esta plataforma de mensajería tiene el potencial de albergar a millones de clientes potenciales alrededor del mundo, sin embargo, los territorios donde es más popular son Latinoamérica, India y algunas partes de Europa y Asia. #[em WhatsApp Business], por su parte, es una app #[em standalone] de la misma compañía, pero enfocada en prestar el servicio de comunicación entre empresas de diferentes tamaños y sus clientes. Existen dos versiones: la app y la API. Estas dos aplicaciones funcionan sobre la misma base y, por eso, se pueden enviar mensajes entre #[em WhatsApp] y #[em WhatsApp Business] de manera imperceptible. A continuación, se ven los detalles de las dos versiones de #[em WhatsApp Business]:

    .row.mt-5.col-xl-8.m-auto
      .col-xl-6.mb-5.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.pt-4(:style="{'background-image': `url(${require('@/assets/curso/tema1/2.png')})`}")
              .m-auto.text-center(style="width:fit-content;")
                .pt-2.pb-2.bg-white.ps-4.pe-4(style="border-radius:50px;")
                  p.mb-0 #[strong #[em(style="color:initial;") WhatsApp Business App]]
            .tarjeta-flip__contenido.p-4.p-xl-5
              .m-auto.text-center.mt-5(style="width:fit-content;")
                .pt-2.pb-2.bg-white.ps-4.pe-4(style="border-radius:50px;")
                  p.mb-0 #[strong #[em(style="color:initial") WhatsApp Business App]]
              ul.lista-ul.mt-5
                li(style="color:initial;")
                  i.fas.fa-atom(style="color:#FFD76A;")
                  | Para empresas grandes, con base de datos.
                li(style="color:initial;")
                  i.fas.fa-atom(style="color:#FFD76A;")
                  | Se subcontrata una empresa para que la administre.
                li(style="color:initial;")
                  i.fas.fa-atom(style="color:#FFD76A;")
                  | Es paga y altamente personalizable.
                li(style="color:initial;")
                  i.fas.fa-atom(style="color:#FFD76A;")
                  | Recomendada para cientos o miles de clientes.
      .col-xl-6.mb-5.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.pt-4(:style="{'background-image': `url(${require('@/assets/curso/tema1/3.png')})`}")
              .m-auto.text-center(style="width:fit-content;")
                .pt-2.pb-2.bg-white.ps-4.pe-4(style="border-radius:50px;")
                  p.mb-0 #[strong #[em(style="color:initial;") WhatsApp Business API]]
            .tarjeta-flip__contenido.p-4.p-xl-5
              .m-auto.text-center.mt-5(style="width:fit-content;")
                .pt-2.pb-2.bg-white.ps-4.pe-4(style="border-radius:50px;")
                  p.mb-0 #[strong #[em(style="color:initial") WhatsApp Business API]]
              ul.lista-ul.mt-5
                li(style="color:initial;")
                  i.fas.fa-atom(style="color:#FFD76A;")
                  | Para empresas pequeñas y emprendimiento.
                li(style="color:initial;")
                  i.fas.fa-atom(style="color:#FFD76A;")
                  | Lo controla cada empresario.
                li(style="color:initial;")
                  i.fas.fa-atom(style="color:#FFD76A;")
                  | Es gratuito casi en su totalidad.
                li(style="color:initial;")
                  i.fas.fa-atom(style="color:#FFD76A;")
                  | Recomendado para 50 clientes simultáneos promedio.

    p.mt-5(data-aos="fade-up") #[strong Algunas diferencias entre estas dos versiones de la aplicación se presentan a continuación:]

    .titulo-sexto.color-acento-contenido.mt-5
      h5 Figura 1.
      span Diferencias entre #[em WhatsApp web] y la API de #[em WhatsApp]

    .row.mt-5.col-xl-10.m-auto
      .col-xl-6.mb-5.mb-xl-0
        .h-100(style="background-color:#FFF1CB;")
          .pb-4(style="background: rgb(255,215,106);background: linear-gradient(360deg, rgba(255,215,106,1) 73%, rgba(255,255,255,1) 73%);")
            figure.col-6.m-auto
              img(src="@/assets/curso/tema1/4.svg" data-aos="zoom-in-up")
            h5.mb-0.text-center.mt-4(data-aos="fade-up") #[em WhatsApp Business App]
          .p-4.pt-4
            ol.lista-ol
              li(data-aos="fade-up")
                span.text-bold a. 
                | Se especializa en emprendimientos, micro y pequeñas empresas, y dentro de sus funciones principales, se encuentran el alojamiento de catálogos digitales de productos y servicios, el alojamiento y envío de mensajes y respuestas automatizadas para contactar al cliente rápidamente, así no haya personal disponible para ello inmediatamente.
              li(data-aos="fade-up")
                span.text-bold b. 
                | Para conseguirla, se debe instalar desde la tienda de aplicaciones de su dispositivo, y es gratuita siempre que cuente con un número de teléfono al hacerlo.
              li(data-aos="fade-up")
                span.text-bold c. 
                | La administra el empresario respondiendo a todos los mensajes y generando sus propias estrategias de trabajo. Se puede tener hasta en 4 dispositivos al tiempo para ayudar a su trabajo.
              li(data-aos="fade-up")
                span.text-bold d. 
                |  Los datos métricos del uso de la herramienta los hace el empresario, como se revisará más adelante dentro de este contenido.
      .col-xl-6.mb-5.mb-xl-0
        .h-100(style="background-color:#A6E9E2;")
          .pb-4(style="background: rgb(0,193,171);background: linear-gradient(360deg, rgba(0,193,171,1) 73%, rgba(255,255,255,1) 73%);")
            figure.col-6.m-auto
              img(src="@/assets/curso/tema1/5.svg" data-aos="zoom-in-up")
            h5.mb-0.text-center.mt-4(data-aos="fade-up") #[em WhatsApp Business API]
          .p-4.pt-4
            ol.lista-ol
              li(data-aos="fade-up")
                span.text-bold a. 
                | #[em WhatsApp API] o #[em Business Platform] se enfoca en medianas y grandes empresas, que requieren mayor robustez en la operación de sus comunicaciones con los clientes, porque manejan cientos o miles de conversaciones simultáneas con sus clientes. API traduce #[em Application Program Interface] o, en español, Interfaz de Programación de Aplicaciones.
              li(data-aos="fade-up")
                span.text-bold b. 
                | Se debe contratar por medio de las empresas #[em Partners Oficiales de WhatsApp]. La empresa aliada de #[em WhatsApp] se encarga de la propuesta comercial.
              li(data-aos="fade-up")
                span.text-bold c. 
                |  Las respuestas las hace la empresa aliada y tiene un plazo máximo de 24 horas para ello, pero, en realidad, la respuesta es casi inmediata.
              li(data-aos="fade-up")
                span.text-bold d. 
                |  Gran cantidad de las respuestas son automatizadas.
              li(data-aos="fade-up")
                span.text-bold e. 
                |  La empresa subcontratada se encarga de las mediciones y lectura de métricas, entregando un informe por periodo.

    .mt-5.mb-4(style="width:fit-content;")
      .p-2(style="background-color:#FFD76A;")
        h5.mb-0(data-aos="fade-up") Creación de perfil empresarial

    p(data-aos="fade-up") Para crear un perfil empresarial en #[em WhatsApp Business], es necesario seguir los siguientes pasos:

    .tarjeta.p-5.mt-5(style="background-color:#FFF9E9;")
      SlyderA(tipo="b")
        .row
          .col-lg-4.mb-4.mb-lg-0
            h5 Descargar la aplicación
            p Se dirige a la tienda de aplicaciones de su dispositivo, la busca como #[em WhatsApp Business] y descarga la aplicación. Es importante no olvidar abrir la aplicación apenas esta se descargue para asegurar el registro exitoso.
          .col-lg-8
            figure
              img(src='@/assets/curso/tema1/6.svg')
        .row
          .col-lg-4.mb-4.mb-lg-0
            h5 Aceptar los términos y condiciones
            p Luego de leer los términos y condiciones, se deberá aceptar mediante el botón indicado y, posteriormente, presionar “continuar”. Dichos términos y condiciones pueden consultarse en el siguiente enlace: 
            p.mt-4 #[a(style="color:#0876FF;" href="https://www.whatsapp.com/legal/business-policy/?lang=es" target="_blank") https://www.whatsapp.com/legal/business-policy/?lang=es]
          .col-lg-8
            figure
              img(src='@/assets/curso/tema1/7.svg')
        .row
          .col-lg-4.mb-4.mb-lg-0
            h5 Configurar una nueva cuenta de #[em WhatsApp Business]
            p Configure la cuenta por medio de un número telefónico. Se recomienda que este número sea solo para la empresa.
          .col-lg-8
            figure
              img(src='@/assets/curso/tema1/8.svg')
        .row
          .col-lg-4.mb-4.mb-lg-0
            h5 Verificar el número de teléfono en #[em WhatsApp Business]
            p Por medio de un mensaje de texto, se acepta y verifica el número del teléfono que está registrando. Se puede usar un teléfono de otro país a pesar de no estar allá.
          .col-lg-8
            figure
              img(src='@/assets/curso/tema1/9.svg')
        .row
          .col-lg-4.mb-4.mb-lg-0
            h5 #[em WhatsApp] personal a #[em WhatsApp Business] (opcional)
            p Usted puede convertir su cuenta personal en empresarial; para ello, se deberá dar autorización mediante la cuenta de #[em WhatsApp] personal; luego de este paso, toda la información de la cuenta personal se habrá migrado a la cuenta #[em Business]. 
          .col-lg-8
            figure
              img(src='@/assets/curso/tema1/10.svg')
        .row
          .col-lg-4.mb-4.mb-lg-0
            h5 Configurar perfil empresarial de #[em WhatsApp Business]
            p Cuando se han completado los pasos anteriores, es tiempo de configurar el perfil empresarial. En esta ventana, se podrán rellenar los detalles que describirán a qué se dedica o qué vende la compañía. 
          .col-lg-8
            figure
              img(src='@/assets/curso/tema1/11.svg')

    .mt-5.mb-5(style="width:fit-content;")
      .p-2(style="background-color:#FFD76A;")
        h5.mb-0(data-aos="fade-up") Comunicación de mensajes #[em social media]

    .row
      .col-lg-4(style="place-self:center")
        figure
          img(src="@/assets/curso/tema1/13.png" data-aos="fade-right")
      .col-lg-8(style="place-self:center")
        p(data-aos="fade-up") Cuando se habla de #[em social media], se hace referencia a actividades de comunicación, expresión y publicación que integran la tecnología, la interacción de personas en forma de mensajes multimedia, tales como chat, conversaciones, textos, fotografías, imágenes, gifs, videos, memes y audios.
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color:#FFF5D9;")
          p.mb-0(data-aos="fade-up") La comunicación que se da a partir de dichas actividades dentro del #[em social media] cumple diferentes propósitos y funciones, dependiendo de la plataforma virtual en la que se dé. La comunicación, en este caso, se da de manera espontánea y natural, sin embargo, hoy en día son más las plataformas que integran otras herramientas de promoción y ventas disponibles para las empresas.

    p.mt-5(data-aos="fade-up") Los medios sociales de comunicación tienen diferencias comparados con los medios de comunicación industrial, como la prensa impresa, la TV, la radio, periódicos, canales de televisión y emisoras de radio. Los #[em social media], o medios sociales, utilizan herramientas que permiten a cualquier persona que accede a ellos publicar y tener acceso al contenido o, incluso, utilizar servicios complementarios de mensajería. Tal es el caso de #[em WhatsApp], que, a 2021, tiene cerca de dos mil millones de usuarios a nivel mundial, como lo grafica Fanego (2021): 

    .pt-4.pb-5.mt-5(style="background-color:#D9F6F3;")
      .col-xl-8.m-auto
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span  Usuarios diferentes plataformas 2021
        figure
          img(src="@/assets/curso/tema1/14.svg" data-aos="zoom-in-up")

    .mt-5.mb-4(style="width:fit-content;")
      .p-2(style="background-color:#FFD76A;")
        h5.mb-0(data-aos="fade-up") Interacción con la audiencia

    p(data-aos="fade-up") En cuanto a la audiencia, algunas de las características principales de los medios sociales que permiten la interacción dentro de ellos son:

    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Amabilidad de uso con el usuario")
        .col-lg-7.mb-4.mb-lg-0
          p Gran parte de los medios sociales están diseñados para que cualquier persona pueda utilizarlos. Tal es el caso de #[em WhatsApp] y #[em WhatsApp Web]. Asimismo, las actualizaciones están destinadas a mejorar la experiencia y facilidad de uso. 
        .col-lg-5
          figure
            img(src='@/assets/curso/tema1/15.png')
      .row(titulo="Audiencia")
        .col-lg-7.mb-4.mb-lg-0
          p Los medios sociales proporcionan una cobertura, en muchos casos global, por lo que el mercado potencial es de cientos de millones de usuarios. Sin embargo, el porcentaje de uso en el mercado, en comparación con otras aplicaciones de mensajería, debe consultarse para acotar el público objetivo al cual se quiere llegar a través de la aplicación. 
        .col-lg-5
          figure
            img(src='@/assets/curso/tema1/16.png')
      .row(titulo="Gratuidad")
        .col-lg-7.mb-4.mb-lg-0
          p La gran mayoría de los medios sociales son gratuitos y no tienen ningún costo por el uso de sus características básicas. Esto permite que más personas puedan acceder a ellos. En el caso de #[em WhatsApp], tanto su versión personal como su aplicación de #[em WhatsApp Business] son gratuitas.
        .col-lg-5
          figure
            img(src='@/assets/curso/tema1/17.png')
      .row(titulo="Tiempo real")
        .col-lg-7.mb-4.mb-lg-0
          p Los medios sociales pueden proveer respuestas o interacciones inmediatas, sin necesidad de esperar mucho tiempo por respuestas comerciales, dudas, preguntas, casos de servicio al cliente, etc. En el caso de #[em WhatsApp] y #[em WhatsApp Business], su finalidad es la mensajería instantánea, por cuanto la aplicación provee herramientas y opciones de notificaciones para no perder la conectividad con el cliente cuando se le está atendiendo. 
        .col-lg-5
          figure
            img(src='@/assets/curso/tema1/18.png')

    .row.mt-5.ps-4.pe-4.pt-4.cont_1_1(style="position:relative;")
      .col-xl-8.mb-xl-0.mb-5(style="place-self:center;position:relative")
        p.mb-0.mt-4(data-aos="fade-up") Lo novedoso de las nuevas formas de interacción en línea es que las aplicaciones traen nuevas herramientas para responder al cliente inmediatamente, #[strong aumentando la rentabilidad en términos de impacto en su comunidad digital.] Para esto, existen protocolos, metas y tácticas que explotan la posibilidad con la que ahora cuentan los consumidores de compartir sus experiencias con el producto o servicio adquirido, por medio de las redes sociales. 
      .col-xl-4(style="position:relative")
        figure
          img(src="@/assets/curso/tema1/19.svg" data-aos="fade-left")

    p.mt-5(data-aos="fade-up") Asimismo, es de gran importancia conocer cuál es la finalidad de apertura de un canal de interacción con el cliente. Algunos ejemplos de ellas son: presentar los productos y servicios, abrir un canal de atención al cliente, brindar soporte técnico, entre otras. Es importante resaltar la importancia de #[em WhatsApp] en Latinoamérica, con números realmente asombrosos, como lo dice Artear (2022): #[strong “con 12 años de existencia, el servicio de mensajería instantánea #[em WhatsApp] logró modificar y revolucionar la industria de la comunicación, porque se convirtió en la aplicación que más descargas tiene a nivel mundial desde 2018”.]

    .row.mt-5.p-3(style="background: rgb(166,233,226);background: linear-gradient(90deg, rgba(166,233,226,1) 29%, rgba(255,255,255,1) 29%);")
      .col-auto(style="place-self:center")
        figure
          img(src="@/assets/curso/tema1/20.svg" data-aos="fade-right")
      .col(style="place-self:center")
        p.mb-0(data-aos="fade-up") Según una encuesta que la Corporación Latinobarómetro realizó en 18 países de América Latina, el 64 % de la población del continente utiliza la app. Este porcentaje varía dependiendo del país en el que se ponga la lupa”. En Colombia, según el MinTIC (2021), #[em WhatsApp] es la aplicación con mayor crecimiento durante la pandemia.

    .mt-5.mb-4(style="width:fit-content;")
      .p-2(style="background-color:#FFD76A;")
        h5.mb-0(data-aos="fade-up") Creación de respuestas automatizadas

    p(data-aos="fade-up") Para lograr estar en comunicación con los clientes, ya sea para finalizar una venta, atender un caso de servicio al cliente o proporcionar asesoría técnica, #[em WhatsApp Business] ofrece al usuario la posibilidad de enviar mensajes automáticos. Estos mensajes permiten responder al cliente así no haya personal disponible, manteniendo al cliente conectado, lo cual es beneficioso para la sensación de satisfacción durante el proceso de atención al cliente. Estos mensajes, a manera inicial, se componen de mensaje de bienvenida y mensaje de ausencia, como se puede observar en el siguiente video:

    p.mt-5 #[strong Respuestas Bienvenida Ausencia]

    figure.mt-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/WkNWgKTuvGY" title="Mensaje de bienvenida y mensaje de ausencia" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .mt-5.mb-4(style="width:fit-content;")
      .p-2(style="background-color:#FFD76A;")
        h5.mb-0(data-aos="fade-up") Crear un mensaje de respuesta rápida

    .row
      .col-lg-8(style="place-self:center")
        p(data-aos="fade-up") Los mensajes de respuesta rápida tienen la finalidad de permitir al usuario responder rápidamente al cliente utilizando un ‘código’ alfanumérico. Estas opciones son también llamadas atajos y permiten disminuir el tiempo de respuesta al cliente.
        p.mt-4(data-aos) Para ello, se debe primero abrir la aplicación; luego, tocar el ícono de ‘más opciones’, elegir herramientas, y posteriormente, ‘Respuestas rápidas’’. Luego de completar estos pasos, proceder a editar el mensaje. Finalmente, presionar “atajo” para definir qué atajo de teclado se quiere asociar a una respuesta determinada. Esto se hace utilizando el comando ‘/’ durante una conversación y eligiendo en la lista desplegable una respuesta automática que se haya predeterminado. Para facilitar el entendimiento de esa opción, observe el siguiente video:
      .col-lg-4(style="place-self:center")
        figure
          img(src="@/assets/curso/tema1/21.png" data-aos="fade-left")

    p.mt-5 #[strong Respuestas Rapidas]

    figure.mt-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/H4TGPzHRslI" title="Respuestas rápidas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .tarjeta.color-primario.p-4.mt-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/22.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Enlace #[em web]
              p.text-small Con la opción anteriormente vista y la claridad de cuáles cosas se pueden resolver de manera rápida, se le invita a revisar el siguiente vínculo, que le explica, de manera puntual, según #[em WhatsApp], cómo se configura de la mejor manera esta opción
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://faq.whatsapp.com/2740839775981177/?locale=es_LA" target="_blank")
                span(style="color:#12263F !important") Enlace web





</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #00C1AB
  background-image: url(../assets/curso/tema1/12.svg) !important
.slyder-a__bullets__item
  background-color: #F2E3C2
.slyder-a__bullets__item--active
  background-color: #00C1AB !important
  border: 0 !important
.tarjeta.tarjeta--gris.acordion__activo
  background-color: #D8F5F2
.cont_1_1:before
  position: absolute
  content: ''
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: rgb(250,235,205)
  background: linear-gradient(360deg, rgba(250,235,205,1) 80%, rgba(255,255,255,1) 80%)
</style>
