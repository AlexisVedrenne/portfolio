<template>
  <div style="margin-right: 400px; margin-left: 400px">
    <q-intersection transition="scale">
      <h6 class="text-center q-mt-lg q-mb-lg">Visualisation de mon CV</h6>
    </q-intersection>
    <div class="row justify-center">
      <q-intersection transition="scale">
        <q-btn
          class="q-mb-md"
          flat
          icon="download"
          color="accent"
          :loading="loading"
          @click="toPdf"
          label="Télécharger le CV"
        />
      </q-intersection>
    </div>
    <q-intersection transition="scale">
      <q-card class="q-mb-l" id="pdf">
        <div class="bg-grey column justify-end q-mr-md q-ml-md" style="height: 80px">
          <h6 class="text-right text-bold q-mt-sm q-mr-sm col text-uppercase">
            Poste recherché : Une alternance
          </h6>
        </div>
        <q-card-section class="row">
          <div class="col q-ml-lg">
            <h3 class="text-bold q-ma-none q-mt-lg">Alexis Vedrenne</h3>
            <q-separator class="bg-dark" style="height: 5px" spaced />
            <h5 class="text-bold q-ma-none q-mb-sm q-mt-md">FORMATIONS</h5>
            <q-list
              class="bg-grey-2"
              v-for="(formation, index) in formations"
              :key="index"
            >
              <q-item :to="{ name: 'aboutMe' }">
                <q-item-section style="font-size: 17px">
                  <q-item-label>{{ formation.ligne }}</q-item-label>
                  <q-item-label lines="2"
                    ><strong>{{ formation.lieux }} - </strong
                    >{{ formation.ligne2 }}</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-separator spaced inset />
            </q-list>
            <q-separator class="bg-dark" style="height: 5px" spaced />
            <h5 class="text-bold q-ma-none q-mt-md q-mb-md">PARCOURS PROFESSIONNEL</h5>
            <q-list class="bg-grey-2" v-for="(parcour, index) in parcours" :key="index">
              <q-item :to="{ name: 'experience' }">
                <q-item-section style="font-size: 17px">
                  <q-item-label
                    ><strong>{{ parcour.poste }},</strong>
                    {{ parcour.ligne }}</q-item-label
                  >
                  <q-item-label lines="2"
                    ><strong>{{ parcour.lieux }} - </strong
                    >{{ parcour.ligne2 }}</q-item-label
                  >
                  <p
                    class="q-ml-lg q-mb-none"
                    v-for="(tache, index) in parcour.taches"
                    :key="index"
                  >
                    {{ index + 1 }} : {{ tache }}
                  </p>
                </q-item-section>
              </q-item>

              <q-separator spaced inset />
            </q-list>
          </div>
          <div class="col-5 q-ml-lg">
            <div class="column items-center">
              <q-img
                class="col"
                style="height: 250px; width: 250px"
                src="~assets/moi.jpg"
              />
              <h5 class="text-bold q-ma-none q-mt-md q-mb-sm">COORDONNÉES</h5>
              <div class="column">
                <q-btn
                  href="https://alexis-vedrenne.fr"
                  target="_blank"
                  align="left"
                  v-for="(coordonne, index) in coordonnes"
                  :key="index"
                  :icon="coordonne.icon"
                  :label="coordonne.label"
                  flat
                />
              </div>
            </div>
            <q-separator class="bg-dark" style="height: 5px" spaced />
            <h5 class="text-bold q-ma-none q-mt-md q-mb-sm">COMPÉTENCES</h5>
            <div class="row text-center">
              <div class="col">
                <p class="text-bold">Programmation</p>
                <p
                  :style="'color:' + skill.color"
                  v-for="(skill, index) in skills"
                  :key="index"
                  class="q-ma-none"
                >
                  <strong style="font-size: 20px">- </strong>{{ skill.label }}
                </p>
                <p :style="'color:#080ba8'" class="q-ma-none">
                  <strong style="font-size: 20px">- </strong>SQL
                </p>
              </div>
              <div class="col">
                <p class="text-bold">Humaine</p>
                <p v-for="(humaine, index) in humaines" :key="index" class="q-ma-none">
                  <strong style="font-size: 20px">- </strong>{{ humaine.label }}
                </p>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-intersection>
    <div id="pdfFin" />
  </div>
</template>
<script>
import html2pdf from "html2pdf.js";
export default {
  data() {
    return {
      loading: false,
      skills: null,
      formations: [
        {
          ligne:
            "Chef de Projet SI - Niv I (Bac +5), Informatique, 09/2021 -07/2023 (En cours)",
          lieux: "Institut G4",
          ligne2: "Paris, 75 - Début septembre 2021.",
        },
        {
          ligne: "BTS SIO, SLAM , Informatique, 09/2019 - 06/2021",
          lieux: "Lycée Bonaparte",
          ligne2: "Toulon, 83",
        },
        {
          ligne: "Baccalauréat Professionnel SN option C, Informatique, 09/2016 -06/2019",
          lieux: "Lycée George Cisson",
          ligne2: "Toulon, 83 - Mention : Bien",
        },
        {
          ligne: "BEP Système numérique, Informatique",
          lieux: "Lycée George Cisson",
          ligne2: "Toulon, 83",
        },
      ],
      parcours: [
        {
          poste: "Assistant Chef de projet / Développeur",
          ligne: "08/2021 - 08/2022",
          lieux: "Diese Télécom",
          ligne2: "Clamart - Alternance en entreprise",
          taches: [
            "Management d'une équipe",
            "Paramétrage de serveur",
            "Gestion de projet",
            "Amélioration de programme existant",
          ],
        },
        {
          poste: "Développeur",
          ligne: "01/2021 - 02/2021",
          lieux: "Vishay",
          ligne2: "Hyere - Stage en entreprise",
          taches: [
            "Programmation d'un robot pour industrialisation",
            "Réalisation de documentation technique",
          ],
        },
        {
          poste: "Assistant au service infrastructure",
          ligne: "12/2018 - 01/2019",
          lieux: "Circert",
          ligne2: "Sollies-Pont - Stage en entreprise",
          taches: [
            "Montage de serveurs",
            "Configuration de serveurs",
            "Configuration de switch",
            "Configuration d'un NAS",
          ],
        },
      ],
      coordonnes: [
        {
          label: "1 Allée des Sorbiers, Champs sur Marne",
          icon: "place",
        },
        {
          label: "0601739480",
          icon: "phone",
        },
        {
          label: "alexisvedrenne482@gmail.com",
          icon: "mail",
        },
        {
          label: "27/12/2001",
          icon: "cake",
        },
        {
          label: "Français",
          icon: "flag",
        },
        {
          label: " https://alexis-vedrenne.fr",
          icon: "link",
        },
      ],
      humaines: [
        {
          label: "Qualité",
        },
        {
          label: "Sérieux",
        },
        {
          label: "Motivé",
        },
        {
          label: "A l'écoute",
        },
        {
          label: "Travail d'équipe",
        },
        {
          label: "Management",
        },
      ],
    };
  },
  async mounted() {
    let skills = await this.$store.dispatch("fetchAllSkills");
    this.skills = skills.filter((s) => s.level > 70);
  },
  methods: {
    async toPdf() {
      this.loading = true;
      var opt = {
        margin: 1,
        filename: "Alexis_Vedrenne_cv.pdf",
        image: { type: "png", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "pt", format: "legal", orientation: "portrait" },
        pagebreak: {
          before: ".beforeClass",
          after: ["#pdf", "#pdfFin"],
          avoid: "img",
        },
      };
      await html2pdf().set(opt).from(document.getElementById("pdf")).save();
      this.loading = false;
    },
  },
};
</script>
