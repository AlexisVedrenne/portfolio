<template>
  <q-parallax style="height: 350px">
    <template v-slot:media>
      <img src="~assets/baniereHome.png" />
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
        <transition
          appear
          enter-active-class="animated bounceIn"
          leave-active-class="animated bounceOut"
        >
          <div class="absolute column items-center">
            <img
              class="gt-xs"
              src="~assets/logome.png"
              style="width: 150px; height: 150px"
            />
            <div class="text-h3 text-accent text-center">Bienvenue sur mon PortFolio</div>
            <div class="text-h6 text-accent text-center">
              Dévéloppeur, chef de projet SI
            </div>
          </div>
        </transition>
      </div>
    </template>
  </q-parallax>

  <div class="container">
    <div class="q-pa-md row justify-center items-center q-gutter-md">
      <transition
        appear
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOutUp"
      >
        <q-card style="width: 800px" class="my-card">
          <q-card-section>
            <p class="gt-sm text-h3 text-center">
              Informations sur le portfolio en lui même
            </p>
            <p class="lt-sm text-h6 text-center">Information sur le portfolio</p>
          </q-card-section>
          <q-separator inset />

          <q-card-section>
            <p class="gt-sm text-h4">L'objectif</p>
            <p class="lt-sm text-h6">L'objectif</p>
            <p style="font-size: 17px" class="text-justify">
              L'objectif de mon portfolio est de monter et d'expliquer mon parcour
              scolaire et professionnel tout au long de ma vie. On peut y retrouver
              également tous les projets que j'aurais réalisé tout au long de ma
              scolairité mais aussi de ma carrière professionnelle. Il me permetra
              d'illustrer de façon simple et précise mes compténces et mes passions. Un
              autre objectif est en vigueur. Il me permettra aussi d'ajouter de nouvelles
              compétences, projets, expérience professionnelle de façon automatisé via un
              espace administrateur dédié.
            </p>
            <p class="gt-sm text-h4">PortFolio en Quasar et vue.js</p>
            <p class="lt-sm text-h6">PortFolio en Quasar et vue.js</p>
            <div class="row justify-around q-mb-md">
              <q-btn
                class="lt-sm"
                round
                href="https://vuejs.org/"
                target="_blank"
                color="green"
                icon="V"
              />
              <q-btn
                class="lt-sm"
                round
                href="https://quasar.dev/"
                target="_blank"
                color="blue"
                icon="Q"
              />
              <q-btn
                class="gt-sm"
                flat
                href="https://vuejs.org/"
                target="_blank"
                color="green"
                label="En savoir plus sur Vue.js"
                icon="code"
              />
              <q-btn
                class="gt-sm"
                flat
                href="https://quasar.dev/"
                target="_blank"
                color="blue"
                label="En savoir plus sur Quasar"
                icon="code"
              />
            </div>
            <p style="font-size: 17px" class="text-justify">
              Pourquoi ces technologies et pas d'autres ? Au départ je voulai dévéloper
              mon portfolio en php natif sans utiliser de framework. Malgré le fait que je
              connais très bien le framework Symfony (qui est un framework php), j'avais
              envie de changer et donc de faire un site en php natif. Mais finalement je
              me suis souvenue d'un projet qui avait été mené lors de ma premère année
              d'ingénièrie à l'Institut G4, qui lui avait utilisé ces technologies. Et je
              me suis dis que pourquoi pas utiliser les même pour mon portfolio, ce qui me
              permettrai également de monter en compténces.
            </p>
            <p class="gt-sm text-h4">Base de donnée en FireBase</p>
            <p class="lt-sm text-h6">Base de donnée en FireBase</p>
            <div class="row justify-center q-mb-md">
              <q-btn
                flat
                href="https://firebase.google.com/"
                target="_blank"
                color="orange"
                icon="local_fire_department"
                label="En savoir plus sur Firebase"
              />
            </div>
            <p style="font-size: 17px" class="text-justify">
              Pourquoi FireBase ? FireBase est une plateforme de développement
              d’applications mobiles de Google dotée de puissantes fonctionnalités pour le
              développement, la manipulation et l’amélioration des applications. Cependant
              je vais seulement utiliser un outil que propose FireBase , qui est le
              FireBase Database. J'aurais effecivement pu faire une base de donnée en
              MySql classique, comme tous dévéloppeurs à déjà utilisés, mais je me suis
              dit que c'était l'occasion de tester cette outils et de m'y mettre.
            </p>
          </q-card-section>
        </q-card>
      </transition>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "IndexPage",
});
</script>
