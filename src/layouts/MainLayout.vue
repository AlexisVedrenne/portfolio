<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal elevated>
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
            :active="active"
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
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
  data: function () {
    return {
      linksList: [
        {
          title: "Qui suis-je ?",
          icon: "home",
          link: "/",
        },
        {
          title: "Passion",
          caption: "@QuasarFramework",
          icon: "favorite",
          link: "hobies",
        },
        {
          title: "Mon parcours scolaire",
          icon: "hiking",
          link: "school",
        },
        {
          title: "Mes compétences",
          icon: "workspace_premium",
          link: "skills",
        },
        {
          title: "Mes projets",
          icon: "folder",
          link: "project",
        },
        {
          title: "Expériences professionnelles",
          icon: "stacked_line_chart",
          link: "experience-professional",
        },
      ],
    };
  },
});
</script>
