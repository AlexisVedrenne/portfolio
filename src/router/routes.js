const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        name: "home",
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        name: "aboutMe",
        path: "about-me",
        component: () => import("pages/AboutMe.vue"),
      },
      {
        name: "skills",
        path: "my-skills",
        component: () => import("pages/OwnSkills.vue"),
      },
      {
        name: "projects",
        path: "my-projects",
        component: () => import("pages/OwnProjects.vue"),
      },
      {
        name: "projectDetail",
        path: "my-project/details/:id",
        component: () => import("pages/ProjectDetails.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    name: "login",
    path: "/login",
    component: () => import("pages/admin/LoginAdmin.vue"),
  },
  {
    path: "/admin/",
    meta: { mustBeLogged: true },
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      {
        name: "addSkill",
        path: "add-skill",
        component: () => import("pages/admin/skill/AddSkill.vue"),
      },
      {
        name: "addProject",
        path: "add-project",
        component: () => import("pages/admin/project/AddProject.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/ErrorNotFound.vue") },
    ],
  },
];

export default routes;
