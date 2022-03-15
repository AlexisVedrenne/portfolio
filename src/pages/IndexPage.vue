<template>
  <q-parallax>
    <template v-slot:media>
      <img src="https://cdn.quasar.dev/img/parallax2.jpg" />
    </template>

    <template v-slot:content="scope">
      <div
        class="absolute column items-center"
        :style="{
          opacity: 0.7 + (1 - scope.percentScrolled) * 0.55,
          top: scope.percentScrolled * 60 + '%',
          left: 0,
          right: 0,
        }"
      >
        <img
          src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
          style="width: 150px; height: 150px"
        />
        <div class="text-h3 text-white text-center">Bienvenue sur mon PortFolio</div>
        <div class="text-h6 text-grey-3 text-center">Dévéloppeur, chef de projet SI</div>
      </div>
    </template>
  </q-parallax>
  <div class="container">
    <div class="q-pa-md row justify-center items-center q-gutter-md">
      <q-card class="my-card">
        <q-card-section>
          <p class="text-h2">Information sur le portfolio en lui même</p>
        </q-card-section>
        <q-separator inset />

        <q-card-section>
          <p class="text-h4">L'objectif</p>
          <p style="width: 1000px">
            L'objectif de mon portfolio est de monter et d'expliquer mon parcours scolaire
            et professionel tout au long de ma vie. Dessus on peut y retrouver également
            tous les projets que j'aurais réaliser tout au long de ma scolairité mais
            aussi de ma carrière professionelle. Il me permetra d'illustrer de façon
            simple et précise mes compténces et passions.
          </p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
