<template>
  <div>
    <h2 class="subheader-title text-dark font-weight-bold my-2 mr-3">
      Welcome {{ this.$fireAuth.currentUser.displayName }}!
    </h2>

    <div v-if="userDetails" class="d-flex align-items-center">
      {{ userDetails }}
    </div>
    <div v-if="!loaded" class="d-flex align-center flex-column-fluid">
      loading...
    </div>
    <div v-if="loaded" class="d-flex flex-column-fluid">
      <img
        :src="`${$fireAuth.currentUser.photoURL || `/media/users/blank.png`}`"
        alt="image"
      />

      <a
        href="#"
        class="text-dark-75 text-hover-primary font-size-h5 font-weight-bold mr-3"
        >{{ this.$fireAuth.currentUser.displayName }}</a
      >
      <a
        href="#"
        class="text-dark-50 text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2"
      >
        <i class="flaticon2-new-email mr-2 font-size-lg"></i>
        {{ this.$fireAuth.currentUser.email }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  layout: "authenticated",
  components: {},
  data() {
    return {
      userDetails: null,
    };
  },
  mounted() {
    this.getUserDetails();
  },
  methods: {
    async getUserDetails() {
      try {
        const uid = this.$fireAuth.currentUser.uid;
        const token = await this.$fireAuth.currentUser.getIdToken();
        await this.$axios.setHeader("Authorization", "Bearer " + token);
        this.loaded = true;
      } catch (error) {
        this.loaded = true;
        console.log(error);
      }
    },
  },
};
</script>
