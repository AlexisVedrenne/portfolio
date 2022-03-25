<template>
  <div>
    <main class="container">
      <q-parallax :height="150">
        <template v-slot:media>
          <img src="" />
        </template>
        <h1 class="text-dark text-bold">Qui suis-je ?</h1>
      </q-parallax>

      <section class="row justify-center">
        <transition
          appear
          enter-active-class="animated zoomIn"
          leave-active-class="animated zoomOut"
        >
          <q-img class="col-md" style="height: 500px" src="~assets/moi.jpg" />
        </transition>
        <article class="col-6 q-ma-sm q-mr-md q-ml-md">
          <transition
            appear
            enter-active-class="animated fadeInRight"
            leave-active-class="animated fadeOutRight"
          >
            <h4 class="text-bold">Bonjour !</h4>
          </transition>
          <transition
            appear
            enter-active-class="animated slideInUp"
            leave-active-class="animated slideOutUp"
          >
            <p style="font-size: 18px" class="text-justify">
              Je me présente, je m'appelle Alexis Vedrenne et j'ai acutellement 20 ans (je
              suis née le 27 décembre). Je suis acutellement étudiant en école
              d'ingénièrie à l'institue G4 de Paris. Cela fait maintenant plusieurs années
              que je fais de l'informatique et c'est vraiment quelque chose qui me plait
              beaucoup, bien que j'aime plein d'autre chose dans la vie. Grâce à mes
              nombreux stage et projet professionnelles ainsi que scolaire ou encore
              professionnelles, j'ai pu accequirie énormement de connaissances.
            </p>
          </transition>
          <transition
            appear
            enter-active-class="animated fadeInRight"
            leave-active-class="animated fadeOutRight"
          >
            <p class="text-h6">Mes passions</p>
          </transition>
          <transition
            appear
            enter-active-class="animated slideInUp"
            leave-active-class="animated slideOutUp"
          >
            <p style="font-size: 18px" class="text-justify">
              Ma plus grannde passion dans la vie c'est la musique. Effectivement cela
              fait 7 ans que je pratique du
              <span class="text-bold">piano</span> en autodidacte. Evedemant j'aime
              beaucoup le dévéloppement aussi. J'ai déjà pu réaliser quelque projets
              personelles.Je suis également un grand fan de dessin et je dessine à mes
              heure perdu. Je trouve que c'est tout de même important de garder le contact
              avec ses amis et j'apprecie beaucoup de sortir et de profiter en leur
              companie.
            </p>
          </transition>
          <div class="row justify-center">
            <q-btn
              color="secondary"
              outline
              @click="passion = true"
              label="Voir mes réalisation"
            ></q-btn>
          </div>

          <q-dialog v-model="passion">
            <q-layout view="Lhh lpR fff" container class="bg-white">
              <q-page-container>
                <q-page padding>
                  <p class="text-h6">Quelques vidéos de piano</p>
                  <q-carousel
                    style="height: 250px"
                    animated
                    v-model="vidModel"
                    navigation
                    infinite
                    :autoplay="autoplay"
                    arrows
                    transition-prev="slide-right"
                    transition-next="slide-left"
                    @mouseenter="autoplay = false"
                    @mouseleave="autoplay = true"
                  >
                    <q-carousel-slide
                      v-for="(url, index) in videoUrls"
                      :key="index"
                      :name="index"
                    >
                      <q-video :src="url" :ratio="16 / 9" class="absolute-full" />
                    </q-carousel-slide>
                  </q-carousel>
                  <p class="text-h6">Quelques dessins que j'ai réaliser</p>
                  <div class="q-pa-md">
                    <q-carousel
                      style="height: 500px"
                      swipeable
                      animated
                      v-model="model"
                      thumbnails
                      infinite
                    >
                      <q-carousel-slide
                        v-for="(url, index) in urls"
                        :key="index"
                        :name="index"
                        :img-src="url"
                      />
                    </q-carousel>
                  </div>
                </q-page>
              </q-page-container>
            </q-layout>
          </q-dialog>
        </article>
      </section>

      <section class="row justify-center">
        <div class="q-px-lg q-pb-md">
          <q-timeline layout="loose" color="secondary">
            <q-intersection transition="scale">
              <q-timeline-entry heading>
                Mon future
                <br />
              </q-timeline-entry>
              <q-timeline-entry
                title="Après mes études"
                subtitle="Voyage ? Travail ? Entreprenaria"
                side="left"
              >
                <div>
                  <p style="font-size: 17px" class="text-left">
                    Pour mon future il y a plusieurs qui me tienne à coeur. Je ne sais pas
                    trop vers quoi me diriger encore. Je tiens beaucoup d'importance au
                    faut de bouger, me déplacer. Il y a aussi autre chose qui me tiens à
                    coeur. J'aimerai beaucoup fonder ma propre société et innover. dans le
                    domaine de la
                    <span class="text-bold">robotique et le développement</span>.
                    Cependant j'ai concience qu'avant de me lancer danq cette grande
                    aventure je dois d'abord apprendre des entreprises en travaillant un
                    temps.
                  </p>
                </div>
              </q-timeline-entry>
            </q-intersection>
            <q-intersection transition="scale">
              <q-timeline-entry heading>
                Mon parcours scolaire
                <br />
              </q-timeline-entry>
              <q-timeline-entry
                title="Titre 7, Institut G4 - Paris, 75"
                subtitle="Titre 7 (En cours)"
                side="left"
                color="green"
              >
                <div>
                  <p style="font-size: 17px" class="text-left">
                    Passage de mon titre 7 :
                  </p>
                </div>
              </q-timeline-entry>

              <q-timeline-entry
                title="Titre 6, Institut G4 - Paris, 75"
                subtitle="Titre 6 (En cours)"
                side="left"
                color="green"
              >
                <div>
                  <p style="font-size: 17px" class="text-left">
                    Passage de mon titre 6 :
                    <span class="text-bold">Concepteur et dévéloppeur d'application</span
                    >.
                  </p>
                </div>
              </q-timeline-entry>

              <q-timeline-entry
                title="Chef de Projet SI - Niv I (Bac +5), Institut G4 - Paris, 75"
                subtitle="09/2021 - 07/2023 (En cours)"
                side="left"
                icon="done"
                color="green"
              >
                <div>
                  <p style="font-size: 17px" class="text-left">
                    J'ai intégrer l'institue G4 en septembre 2021. C'est une école en
                    informatique et en management qui vise la double compétences :
                    <span class="text-bold">INFORMATIQUE ET MANAGEMENT</span>. Au long du
                    cursus je vais passer deux titre le
                    <span class="text-bold">titre 6 et 7</span>.
                  </p>
                  <div class="row justify-left">
                    <q-btn
                      to="https://www.institut-g4.fr/"
                      icon-right="send"
                      label="Voir l'école"
                      color="green"
                      href="https://www.institut-g4.fr/"
                      target="_blank"
                      flat
                    ></q-btn>
                  </div>
                </div>
              </q-timeline-entry>
            </q-intersection>
            <q-intersection transition="scale">
              <q-timeline-entry
                title="BTS SIO option SLAM, Lycée Bonaparte - Toulon, 83"
                subtitle="09/2019 - 06/2021"
                side="right"
                icon="done"
              >
                <div>
                  <p style="font-size: 17px" class="text-left">
                    Je me suis lancé dans un BTS SIO qui pour moi est la suite logique de
                    mon BAC, mais j'ai préféré choisir l'options SLAM (développement). Ce
                    qui me permet de posséder plusieurs cordes à mon arc.
                  </p>
                  <q-btn
                    href="https://bts-sio.lyc-bonaparte.fr/"
                    icon-right="send"
                    label="Voir l'école"
                    color="secondary"
                    target="_blank"
                    flat
                  ></q-btn>
                </div>
              </q-timeline-entry>
            </q-intersection>
            <q-intersection transition="scale">
              <q-timeline-entry
                title="BAC professionnelle SN option RISC, Lycée George Cisson - Toulon, 83 - Mention : Bien"
                subtitle="09/2016 - 06/2019"
                side="right"
                icon="done"
                color="primary"
              >
                <div>
                  <p style="font-size: 17px">
                    Pour commencer avant de me diriger vers le BTS SIO, j'ai effectué un
                    BAC Professionnel SN en options RISC (système numérique en options
                    Réseau informatique et système communiquant) que j'ai obtenu en
                    2018-2019 avec mention bien au Lycée Professionnel George Cisson.
                  </p>
                  <q-btn
                    flat
                    href="http://www.lycee-cisson.fr/"
                    icon-right="send"
                    label="Voir l'école"
                    color="primary"
                    target="_blank"
                  ></q-btn>
                </div>
              </q-timeline-entry>
              <q-timeline-entry
                title="BEP Système numérique Informatique, Lycée George Cisson - Toulon, 8²3"
                side="right"
                color="primary"
              >
                <div>
                  <p style="font-size: 17px">
                    Lors de ma formation pour le bac professionnelle système numérique le
                    BEP compris dedans lors de la deuxième année
                  </p>
                </div>
              </q-timeline-entry>
            </q-intersection>
          </q-timeline>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "aboutMe",
  data() {
    return {
      passion: false,
      urls: [],
      videoUrls: [],
      model: ref(0),
      vidModel: ref(0),
      autoplay: true,
    };
  },
  async mounted() {
    this.videoUrls.push(await this.$store.dispatch("fetchVieo", { video: "mooman.mp4" }));
    this.videoUrls.push(await this.$store.dispatch("fetchVieo", { video: "lol.mp4" }));
    this.urls.push(await this.$store.dispatch("fetchImg", { img: "dessin1.jpg" }));
    this.urls.push(await this.$store.dispatch("fetchImg", { img: "dessin2.jpg" }));
    this.urls.push(await this.$store.dispatch("fetchImg", { img: "dessin3.jpg" }));
  },
};
</script>
,
