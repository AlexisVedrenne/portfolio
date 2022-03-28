export function setUser(state, { user }) {
  state.currentUser = user;
}

export function out(state) {
  state.currentUser = null;
}
