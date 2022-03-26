export function setUser(state, { user }) {
  state.currentUser = user;
  state.isConnected = true;
}
