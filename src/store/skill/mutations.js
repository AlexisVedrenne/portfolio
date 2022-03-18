export function setSkills(state, { skills }) {
  state.skills = skills;
}

export function addSkill(state, { skill }) {
  state.skills.push(skill);
}
