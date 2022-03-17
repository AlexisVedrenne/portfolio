export function addProject(state, { project }) {
  state.projects.push(project);
}

export function setProjects(state, { projects }) {
  state.projects = projects;
}
