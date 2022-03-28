<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal height-hint elevated>
      <q-toolbar inset>
        <q-toolbar-title
          ><strong><q-btn flat :to="{ name: 'login' }" label="Alexis Vedrenne" /></strong
          ><span class="gt-sm">Portfolio</span></q-toolbar-title
        >
        <p class="gt-sm q-mt-md">Etudiant en cyle ingéniérie | Chef de projet SI</p>
        <q-btn @click="drawer = !drawer" class="lt-lg" flat round dense icon="menu" />
      </q-toolbar>
      <q-toolbar class="gt-md row justify-center">
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
    <q-drawer bordered class="lt-lg" v-model="drawer" :width="200">
      <q-scroll-area class="fit">
        <q-list class="row justify-center">
          <q-item
            v-for="(link, index) in linksList"
            :key="index"
            :to="link.link"
            :icon="link.icon"
            :name="link.title"
            :label="link.title"
            class="hn-link text-center"
            color="primary"
            active-class="secondary"
          >
            <q-item-section avatar class="items-center">
              <q-icon :name="link.icon" />
              <p>{{ link.title }}</p>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

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
      drawer: false,
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
          title: "Mes expériences professionnelles",
          icon: "stacked_line_chart",
          link: { name: "experience" },
        },
        {
          title: "Mon CV",
          icon: "description",
          link: { name: "CV" },
        },
        {
          title: "Me Contacter",
          icon: "send",
          link: { name: "contact" },
        },
      ],
    };
  },
  mounted() {},
});
</script>
