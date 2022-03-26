<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal elevated>
      <q-toolbar inset>
        <q-toolbar-title><strong>Administration</strong> Portfolio</q-toolbar-title>
      </q-toolbar>
      <q-toolbar class="row justify-center secon">
        <q-list class="secondary row justify-center">
          <q-item
            v-for="(link, index) in linksList"
            :key="index"
            :to="link.link"
            :icon="link.icon"
            :name="link.title"
            :label="link.title"
            class="hn-link"
            active-class="secondary"
          >
            <q-item-section avatar class="items-center">
              <q-icon :name="link.icon" />
              <p>{{ link.title }}</p>
            </q-item-section>
          </q-item>
        </q-list>
      </q-toolbar>
    </q-header>

    <q-page-container> <router-view /> </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
  data: function () {
    return {
      date: new Date(),
      linksList: [
        {
          title: "Accueil",
          icon: "home",
          link: { name: "adminHome" },
        },
        {
          title: "Comptétence",
          icon: "workspace_premium",
          link: { name: "addSkill" },
        },
        {
          title: "Exeperience",
          icon: "stacked_line_chart",
          link: { name: "addExeperience" },
        },
        {
          title: "Projets",
          icon: "folder",
          link: { name: "addProject" },
        },
      ],
    };
  },
  mounted() {},
});
</script>
