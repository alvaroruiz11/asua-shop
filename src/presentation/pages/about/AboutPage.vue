<script setup lang="ts">
import CustomSection from '@/presentation/components/shared/CustomSection.vue';
import CustomSeparator from '@/presentation/components/shared/CustomSeparator.vue';
</script>
<template>
  <CustomSection>
    <h1 class="text-center">DESCRIPCIÓN ASUA</h1>
    <CustomSeparator class="mx-auto bg-tussock-400" width="25%" />
    <p class="text-center">
      ASUA® se erige como la pionera en la producción de aceite de semilla de uva de altura en
      Bolivia. Aspiramos a consolidarnos a nivel nacional como la marca líder de este exclusivo
      aceite, reconocido por su eficacia tanto en el ámbito cosmético como en el consumo saludable.
      Rico en Omega 6, Vitamina E y resveratrol, ASUA® ofrece una potente fuente de antioxidantes.
      Siguiendo dicho lineamiento, ASUA® tomo la decisión en la producción de productos naturales
      con el enfoque cosmetológico y así desde el presente año produjo aceite de almendra amazónica,
      aceite esencial de romero y jabón saponificado natural con nuestro aceite de semilla de uva
      con efecto rejuvenecedor y proyecta producir en el corto y mediano plazo más líneas de
      cosméticos naturales. ASUA® “Caminó natural hacia la belleza” Además, nos enorgullece
      producir una variedad de cosméticos naturales cómo ser aceite de almendra amazónico, aceite
      esencial de romero y jabones naturales saponificados✨
    </p>
  </CustomSection>

  <CustomSection class="grid grid-cols-1 md:grid-cols-2 gap-10" background="#fdfcf8">
    <div
      class="relative shadow-inner shadow-black/10 rounded-lg overflow-hidden group h-[450px] md:h-[560px] mt-5 md:mt-0"
    >
      <div
        style="background-image: url('/assets/about-2.webp')"
        class="bg-center bg-cover absolute bottom-0 left-0 top-0 w-full h-full duration-1000 ease-in-out group-hover:scale-110"
      />
    </div>
    <div>
      <h1 class="">Visión</h1>
      <CustomSeparator width="25%" class="bg-tussock-400" />
      <p>
        Ser reconocidos como líderes indiscutibles en la industria boliviana de productos naturales.
        Buscamos trascender las expectativas de nuestros clientes al ser la marca referente en la
        elección de productos de cuidado personal y bienestar en todo el país. Con un enfoque
        sostenible y centrado en la innovación, visualizamos una expansión continua de nuestra
        oferta de productos naturales, manteniendo estándares de calidad excepcionales. Aspiramos a
        convertirnos en un referente regional en la producción de aceites vegetales prensados en
        frio y aceites esenciales de usos cosméticos, contribuyendo así al bienestar de nuestros
        consumidores y al desarrollo sostenible de la industria.
      </p>
    </div>
  </CustomSection>

  <CustomSection class="grid grid-cols-1 md:grid-cols-2 gap-10">
    <div>
      <h1>Misión</h1>
      <CustomSeparator width="25%" class="bg-tussock-400" />
      <p>
        Liderar la industria de productos naturales en Bolivia, especializándonos en la producción
        de aceites vegetales prensados en frio y aceites esenciales de usos cosméticos de alta
        calidad. Nos esforzamos por destacar como la marca de preferencia a nivel nacional,
        ofreciendo productos que fusionan eficacia y naturalidad. Con un compromiso inquebrantable
        con la salud y el bienestar, aspiramos a proporcionar a nuestros clientes opciones
        cosméticas naturales, comenzando con nuestra exclusiva línea de aceites y expandiéndonos
        hacia nuevos productos innovadores en el futuro cercano.
      </p>
    </div>
    <div
      class="relative shadow-inner shadow-black/10 rounded-lg overflow-hidden group h-[450px] md:h-[500px] mt-5 md:mt-0"
    >
      <div
        style="background-image: url('/assets/about-1.webp')"
        class="bg-center bg-cover absolute bottom-0 left-0 top-0 w-full h-full duration-1000 ease-in-out group-hover:scale-110"
      />
    </div>
  </CustomSection>
</template>

<style scoped></style>
