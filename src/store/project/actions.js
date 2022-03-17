export async function createProject({ commit }, { project }) {
  commit("addProject", { project: project });
}

export async function fetchAllProjects({ commit }) {
  commit("setProjects", { projects });
}
