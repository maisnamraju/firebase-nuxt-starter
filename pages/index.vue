<template>
  <div>
    <header class>
      <div class="jumbotron no-bg-clr">
        <div class="container">
          <div class="row">
            <div class="col-sm-7">
              <div class="main-content-section">
                <nuxt-link to="/login">
                  <button type="submit" class="btn btn-primary">Sign Up</button>
                </nuxt-link>
              </div>
            </div>
            <!-- <div class="col-sm-5">
              <img
                style="margin-top:-60px;z-index:-1;"
                height="500"
                src="/media/bg/landingpage.svg"
                alt
              />
            </div>-->
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
};
</script>

<style>
header .nav .nav-link {
  color: white !important;
}
header .nav .nav-link:hover {
  opacity: 0.5;
  text-decoration: underline !important;
}
</style>
<style scoped>
.header-menu-content {
  max-width: 1280px;
  padding: 20px;
  margin: 0 auto;
}
.main-content-section {
  max-width: 1170px;
  padding: 20px;
  margin: 0 auto;
}
header {
  padding-top: 45px;
  /* background: #ceeaff; */
  position: relative;
  color: white;
}
header.nav-item {
  color: white !important;
}
.no-bg-clr {
  background: transparent;
}
</style>