<template>
  <div>
    <main class="container">
      <q-parallax :height="300">
        <template v-slot:media>
          <img
            src="https://i.f1g.fr/media/eidos/805x453_crop/2017/01/17/XVMb325fb04-96ad-11e6-9b52-8d6af026a828.jpg"
          />
        </template>
        <h1 class="text-white text-bold">Qui suis-je ?</h1>
      </q-parallax>
      <section class="row justify-center">
        <q-img class="col-md" style="height: 500px" src="~assets/moi.jpg" />

        <article class="col-6 q-ma-sm q-mr-md q-ml-md">
          <h4 class="text-bold">Bonjour !</h4>
          <p class="text-h6">Moi.</p>
          <p style="font-size: 18px" class="text-justify">
            Je me présente, je m'appelle Alexis Vedrenne et j'ai acutellement 20 ans (je
            suis née le 27 décembre). Je suis acutellement étudiant en école d'ingénièrie
            à l'institue G4 de Paris. Cela fait maintenant plusieurs années que je fais de
            l'informatique et c'est vraiment quelque chose qui me plait beaucoup, bien que
            j'aime plein d'autre chose dans la vie. Grâce à mes nombreux stage et projet
            professionnelles ainsi que scolaire ou encore professionnelles, j'ai pu
            accequirie énormement de connaissances.
          </p>
          <p class="text-h6">Mes passions</p>
          <p style="font-size: 18px" class="text-justify">
            Je me présente, je m'appelle Alexis Vedrenne et j'ai acutellement 20 ans (je
            suis née le 27 décembre). Je suis acutellement étudiant en école d'ingénièrie
            à l'institue G4 de Paris. Cela fait maintenant plusieurs années que je fais de
            l'informatique et c'est vraiment quelque chose qui me plait beaucoup, bien que
            j'aime plein d'autre chose dans la vie. Grâce à mes nombreux stage et projet
            professionnelles ainsi que scolaire ou encore professionnelles, j'ai pu
            accequirie énormement de connaissances.
          </p>
        </article>
        <div class="q-px-lg q-pb-md">
          <q-timeline layout="loose" color="secondary">
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
                  trop vers quoi me diriger encore. Je tiens beaucoup d'importance au faut
                  de bouger, me déplacer. Il y a aussi autre chose qui me tiens à coeur.
                  J'aimerai beaucoup fonder ma propre société et innover. dans le domaine
                  de la
                  <span class="text-bold">robotique et le développement</span>. Cependant
                  j'ai concience qu'avant de me lancer danq cette grande aventure je dois
                  d'abord apprendre des entreprises en travaillant un temps.
                </p>
              </div>
            </q-timeline-entry>
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
                <p style="font-size: 17px" class="text-left">Passage de mon titre 7 :</p>
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
                  <span class="text-bold">Concepteur et dévéloppeur d'application</span>.
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
                  ></q-btn>
                </div>
              </div>
            </q-timeline-entry>

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
                  to="https://www.institut-g4.fr/"
                  icon-right="send"
                  label="Voir l'école"
                  color="secondary"
                ></q-btn>
              </div>
            </q-timeline-entry>

            <q-timeline-entry
              title="BAC professionnelle SN option RISC, Lycée George Cisson - Toulon, 83 - Mention : Bien"
              subtitle="09/2016 - 06/2019"
              side="right"
              icon="done"
              color="primary"
            >
              <div>
                <p style="font-size: 17px">
                  Pour commencer avant de me diriger vers le BTS SIO, j'ai effectué un BAC
                  Professionnel SN en options RISC (système numérique en options Réseau
                  informatique et système communiquant) que j'ai obtenu en 2018-2019 avec
                  mention bien au Lycée Professionnel George Cisson.
                </p>
                <q-btn
                  to="https://www.institut-g4.fr/"
                  icon-right="send"
                  label="Voir l'école"
                  color="primary"
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
          </q-timeline>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "aboutMe",
  data() {
    return {};
  },
};
</script>
