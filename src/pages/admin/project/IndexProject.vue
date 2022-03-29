<template>
  <div class="column items-center">
    <q-btn
      :to="{ name: 'addProject' }"
      class="q-mb-md q-mt-md"
      color="secondary"
      flat
      label="Ajouter un projet"
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
      <q-item-label header>Listes des projets existants</q-item-label>
      <q-intersection
        :hidden="hidden"
        transition="scale"
        v-for="(project, index) in projects"
        :key="index"
      >
        <q-item>
          <q-item-section avatar top>
            <q-img rounded :src="project.image" style="height: 34px; width: 34px" />
          </q-item-section>

          <q-item-section top class="col-2 gt-sm">
            <q-item-label class="q-mt-sm">{{ project.label }}</q-item-label>
          </q-item-section>

          <q-item-section top>
            <q-item-label lines="1">
              <span :style="'color:' + project.color" class="text-weight-medium">{{
                project.name
              }}</span>
              <span class="text-grey-8 text-bold"> - {{ project.type }}</span>
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
                @click="confirm(project.name)"
              />
              <q-btn
                :href="'/#/admin/project/edit/' + project.name"
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
      projects: [],
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
      this.projects = await this.$store.dispatch("fetchAllProjects");
      this.hidden = false;
    },
    async confirm(project) {
      this.utils
        .dialog({
          title: "Attention !",
          message: "Vous etes sur de vouloir supprimer le projet " + project + " ?",
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
          await this.$store.dispatch("deleteProject", { name: project });
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
