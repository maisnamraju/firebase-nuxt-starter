
export default (context) => {
  const { store } = context
  const fireAuth = context.app.$fireAuth
  return new Promise((resolve, reject) => {
    fireAuth.onAuthStateChanged(user => {
      if (user) {
        store.commit('setUser', { displayName: user.displayName, email: user.email })
      } else {
        store.commit('setUser', null)
      }
      resolve()
    })
  })
}