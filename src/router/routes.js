const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "about-me", component: () => import("pages/AboutMe.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/admin",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "login", component: () => import("pages/admin/LoginAdmin.vue") },
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
