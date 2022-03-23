<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal height-hint elevated>
      <q-toolbar inset>
        <q-toolbar-title><strong>Alexis Vedrenne</strong> Portfolio</q-toolbar-title>
        <p>Etudiant en cyle ingéniérie | Chef de projet SI</p>
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

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="bg-secondary" reveal elevated>
      <p class="text-center q-mt-sm">
        Copyright ©Alexis Vedrenne - {{ date.getFullYear() }}
      </p>
    </q-footer>
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
          link: { name: "home" },
        },
        {
          title: "Qui suis-je ?",
          icon: "face",
          link: { name: "aboutMe" },
        },
        {
          title: "Mes compétences",
          icon: "workspace_premium",
          link: { name: "skills" },
        },
        {
          title: "Mes projets",
          icon: "folder",
          link: { name: "projects" },
        },
        {
          title: "Expériences professionnelles",
          icon: "stacked_line_chart",
          link: { name: "experience" },
        },
      ],
    };
  },
  mounted() {},
});
</script>
