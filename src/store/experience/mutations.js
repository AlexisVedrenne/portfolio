export function addExperience(state, { experience }) {
  state.experiences.push(experience);
}

export function setExperiences(state, { experience }) {
  state.experiences = experience;
}
