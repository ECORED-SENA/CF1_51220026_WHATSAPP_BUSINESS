<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p(data-aos="fade-up") Las características de una de las aplicaciones más populares de mensajería directa en Latinoamérica, como lo es WhatsApp para las empresas, son muy ganadoras, como lo puede ver a continuación:
    
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/23e8TubtaIs" title="Publicación de contenidos a través de WhatsApp Business" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
