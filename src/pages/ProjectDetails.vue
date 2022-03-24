<template>
  <div>
    <q-parallax :height="200">
      <template v-slot:media>
        <img src="https://cdn.quasar.dev/img/parallax1.jpg" />
      </template>

      <h1 class="text-dark text-bold">Nom du projet</h1>
    </q-parallax>

    <main class="container">
      <section class="row justify-center bg-grey-3 q-pa-md">
        <article class="col q-mr-md">
          <q-img
            class="items-center"
            :ratio="16 / 9"
            src="https://pbs.twimg.com/profile_images/1398273035740844040/N143Hm1m_400x400.jpg"
          />
        </article>
        <article class="col-7">
          <h2 class="text-bold text-left">Context du projet</h2>
          <p style="font-size: 18px">
            Au départ ce projet avait été proposé lors du premier confinement par mon
            professeur. Au début nous étions en équipe mais comme personne ne
            s'investissait dedans j'ai fini par le réaliser seul. Au début le logiciel
            devait seulement faire une analyse d'image ou d'une photo prise en direct qui
            nous permettait de voir les attributs physiques et émotionnels de la photo.
          </p>
        </article>
      </section>
      <section class="row justify-center items-center q-ml-md q-mt-lg">
        <article class="col-8">
          <h2 class="text-bold text-left">Titre de la section</h2>
          <p style="font-size: 18px">
            Au départ ce projet avait été proposé lors du premier confinement par mon
            professeur. Au début nous étions en équipe mais comme personne ne
            s'investissait dedans j'ai fini par le réaliser seul. Au début le logiciel
            devait seulement faire une analyse d'image ou d'une photo prise en direct qui
            nous permettait de voir les attributs physiques et émotionnels de la photo.
          </p>
        </article>
        <article class="col q-mr-md">
          <q-img
            class="items-center"
            :ratio="16 / 9"
            src="https://pbs.twimg.com/profile_images/1398273035740844040/N143Hm1m_400x400.jpg"
          />
        </article>
      </section>
      <section class="row justify-center items-center q-ml-md q-mt-lg">
        <article class="col q-mr-md">
          <q-video
            class="items-center"
            :ratio="16 / 9"
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-3f7a4.appspot.com/o/videos%2Fmooman.mp4?alt=media&token=99a7cf9d-645d-46c8-9c43-dd13c7ab6dec"
          />
        </article>
        <article class="col-8">
          <h2 class="text-bold text-left">Titre de la section</h2>
          <p style="font-size: 18px">
            Au départ ce projet avait été proposé lors du premier confinement par mon
            professeur. Au début nous étions en équipe mais comme personne ne
            s'investissait dedans j'ai fini par le réaliser seul. Au début le logiciel
            devait seulement faire une analyse d'image ou d'une photo prise en direct qui
            nous permettait de voir les attributs physiques et émotionnels de la photo.
          </p>
        </article>
      </section>
    </main>
  </div>
</template>
<script>
export default {};
</script>
