<template>
  <div class="column items-center">
    <q-btn
      :to="{ name: 'addExeperience' }"
      class="q-mb-md q-mt-md"
      color="secondary"
      flat
      label="Ajouter une experience pro"
    />
    <q-list
      bordered
      class="rounded-borders"
      :style="
        utils.screen.lt.sm
          ? 'width: 350px'
          : utils.screen.lt.md
          ? 'width: 600px'
          : 'width: 1000px'
      "
    >
      <q-item-label header>Listes des experiences pro existantes</q-item-label>
      <q-intersection
        :hidden="hidden"
        transition="scale"
        v-for="(experience, index) in experiences"
        :key="index"
      >
        <q-item>
          <q-item-section top class="col">
            <q-item-label class="q-mt-sm">{{ experience.titre }}</q-item-label>
          </q-item-section>

          <q-item-section class="gt-sm" top>
            <q-item-label lines="1">
              <span class="text-weight-medium">Ville </span>
              <span class="text-grey-8 text-bold"> - {{ experience.ville }}</span>
            </q-item-label>
          </q-item-section>

          <q-item-section top side>
            <div class="text-grey-8 q-gutter-xs">
              <q-btn
                color="negative"
                size="12px"
                flat
                dense
                round
                icon="delete"
                @click="confirm(experience.titre)"
              />
              <q-btn
                :href="'/#/admin/experience/edit/' + experience.titre"
                size="12px"
                flat
                dense
                round
                icon="edit"
              />
            </div>
          </q-item-section>
        </q-item>
        <q-separator spaced />
      </q-intersection>
    </q-list>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
export default {
  data() {
    return {
      experiences: [],
      utils: useQuasar(),
      hidden: false,
    };
  },
  async mounted() {
    await this.refresh();
  },
  methods: {
    async refresh() {
      this.hidden = true;
      this.experiences = await this.$store.dispatch("fetchAllExperiences");
      this.hidden = false;
    },
    async confirm(experience) {
      this.utils
        .dialog({
          title: "Attention !",
          message: "Vous etes sur de vouloir supprimer l'experience " + experience + " ?",
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
          await this.$store.dispatch("deleteExperience", { titre: experience });
          await this.refresh();
        })
        .onOk(async () => {})
        .onCancel(() => {
          // console.log('>>>> Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    },
  },
};
</script>
