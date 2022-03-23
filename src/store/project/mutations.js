export function addProject(state, { project }) {
  state.projects.push(project.data());
}

export function setProjects(state, { projects }) {
  state.projects = projects;
}
