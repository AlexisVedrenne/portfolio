<template>
  <div class="column items-center">
    <h6 class="text-center">Liste des images dans le stockage</h6>
    <q-list class="col-8" v-if="fichiersImages.images.length > 0">
      <q-item
        v-for="(image, index) in fichiersImages.images"
        :key="index"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-avatar>
            <q-img style="height: 50px; width: 50px" :src="fichiersImages.urls[index]" />
          </q-avatar>
        </q-item-section>
        <q-item-section>{{ image.name }}</q-item-section>
        <q-item-section class="row"
          ><q-btn class="col" label="Vérifier l'utilisation" flat />
          <q-btn
            @click="deleteImage(image.name)"
            class="col"
            color="negative"
            label="Supprimer"
            flat
          />
        </q-item-section>
      </q-item>
    </q-list>
    <div v-else>
      <div class="row justify-center">
        <q-spinner-cube color="primary" size="5.5em" />
      </div>
    </div>
  </div>
  <h6 class="text-center">Liste des vidéos dans le stockage</h6>
  <div
    v-if="fichiersVideo.videos.length > 0"
    class="row justify-center q-col-gutter-sm q-mr-sm q-ml-sm q-mt-sm q-mb-sm"
  >
    <div
      v-for="(video, index) in fichiersVideo.videos"
      :key="index"
      class="col-md-4 col-sm-5 col-xs-10"
    >
      <q-card>
        <q-card-section>{{ video.name }}</q-card-section>
        <q-card-section
          ><q-video :ratio="16 / 9" :src="fichiersVideo.urls[index]"
        /></q-card-section>
        <q-card-section>
          <q-btn
            @click="deleteVideo(video.name)"
            class="col"
            color="negative"
            label="Supprimer"
            flat
          />
        </q-card-section>
      </q-card>
    </div>
  </div>
  <div v-else>
    <div class="row justify-center">
      <q-spinner-cube color="primary" size="5.5em" />
    </div>
  </div>
</template>
<script>
import { useQuasar } from "quasar";
export default {
  data() {
    return {
      utils: useQuasar(),
      fichiersImages: {
        images: [],
        urls: [],
      },
      fichiersVideo: {
        videos: [],
        urls: [],
      },
    };
  },
  async mounted() {
    await this.refresh();
  },
  methods: {
    async refresh() {
      let fichiersImages = await this.$store.dispatch("fetchAllImages");
      this.fichiersImages.images = fichiersImages.images;
      this.fichiersImages.urls = fichiersImages.urls;
      let fichiersVideo = await this.$store.dispatch("fetchAllVideo");
      this.fichiersVideo.videos = fichiersVideo.videos;
      this.fichiersVideo.urls = fichiersVideo.urls;
    },
    async deleteImage(image) {
      this.utils
        .dialog({
          title: "Attention !",
          message: "Vous etes sur de vouloir supprimer l'image " + image + " ?",
          cancel: true,
          persistent: true,
          ok: {
            label: "Supprimer",
            color: "negative",
            flat: true,
          },
          cancel: {
            label: "fermer",
            flat: true,
            color: "secondary",
          },
        })
        .onOk(async () => {
          await this.$store.dispatch("deleteImage", { image: image });
          await this.refresh();
        });
    },
    async deleteVideo(video) {
      this.utils
        .dialog({
          title: "Attention !",
          message: "Vous etes sur de vouloir supprimer la vidéo " + video + " ?",
          cancel: true,
          persistent: true,
          ok: {
            label: "Supprimer",
            color: "negative",
            flat: true,
          },
          cancel: {
            label: "fermer",
            flat: true,
            color: "secondary",
          },
        })
        .onOk(async () => {
          await this.$store.dispatch("deleteVideo", { video: video });
          await this.refresh();
        });
    },
  },
};
</script>
