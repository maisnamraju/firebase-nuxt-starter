export default function ({ store, redirect, route }) {
  if (store.state.user) {
    if (route.name == 'login' || route.name == 'index') {
      redirect('/home')
    }
  }
  if (store.state.user == null) {
    const authNotReqiredRoutes = ['index', 'login', 'how-it-works']
    if (!authNotReqiredRoutes.includes(route.name)) {
      redirect('/login')
    }
  }
}