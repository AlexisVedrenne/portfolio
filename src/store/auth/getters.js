export function getCurrentUser(state) {
  if (state.isConnected) {
    return currentUser;
  }
}

export function getConnect(state) {
  return state.isConnected;
}
