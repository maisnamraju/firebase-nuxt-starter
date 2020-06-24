import { showSwal } from "@/utils/swal"
import firebase from 'firebase/app';
export const state = () => ({
  user: null
})

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  }
}

export const actions = {
  autoSignIn({ commit }, payload) {
    commit('setUser', payload)
  },

  signInWithGoogle({ commit }) {
    return new Promise((resolve, reject) => {
      this.$store.$fireAuth.signInWithRedirect(GoogleProvider)
      resolve()
    })
  },
  async signIn({ commit }, data) {
    try {
      await this.$fireAuth.signInWithEmailAndPassword(
        data.email,
        data.password
      );
      this.$router.push('/home');
    } catch (error) {
      showSwal(error, "error");
    }
  },
  async signUp({ commit }, data) {
    try {
      await this.$fireAuth.createUserWithEmailAndPassword(
        data.email,
        data.password
      );
      await this.$fireAuth.currentUser.updateProfile({ displayName: data.displayName });
      showSwal("Success", "success");
      this.$router.push('/home');
    } catch (error) {
      showSwal(error, "error");
    }
  },
  async signOut({ commit }) {
    try {
      await this.$fireAuth.signOut();
      this.$router.push('/');
      commit('setUser', null)
    } catch (error) {
      commit('setUser', null)
    }
  },
  signInWithGoogle({ commit }) {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    return new Promise((resolve, reject) => {
      this.$fireAuth.signInWithRedirect(provider)
      resolve()
    })
  },
  signInWithTwitter({ commit }) {
    var provider = new firebase.auth.TwitterAuthProvider();
    return new Promise((resolve, reject) => {
      this.$fireAuth.signInWithRedirect(provider)
      resolve()
    })
  },
  signInWithGithub({ commit }) {
    var provider = new firebase.auth.GithubAuthProvider();
    return new Promise((resolve, reject) => {
      this.$fireAuth.signInWithRedirect(provider)
      resolve()
    })
  },
}