<template>
  <div
    id="kt_body"
    class="quick-panel-right demo-panel-right offcanvas-right header-fixed header-mobile-fixed subheader-enabled aside-enabled aside-static page-loading"
  >
    <!--begin::Main-->
    <div class="d-flex flex-column flex-full-height flex-root">
      <!--begin::Login-->
      <div
        class="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-row-fluid bg-white"
        id="kt_login"
      >
        <!--begin::Aside-->
        <div
          class="login-aside d-flex flex-row-auto px-lg-0 px-5 pb-sm-40 pb-lg-40 flex-grow-1"
          style="background-repeat:no-repeat;background-position: bottom;background-image: url(/media/login.jpeg)"
        >
          <!--begin::Aside Container-->
          <div
            class="d-flex flex-row-fluid flex-column mt-lg-30 mb-lg-0 pb-lg-0 mb-20 pb-40 mt-0 pt-15"
          >
            <!--begin::Aside header-->
            <a href="#" class="text-center mb-10">
              <img src="/media/logos/dv_logo_2.png" class="max-h-70px" alt />
            </a>
            <!--end::Aside header-->
            <!--begin::Aside title-->
            <h3 style="color:white" class="font-weight-bolder text-center display5 pb-lg-0 pb-40">
              Early stage entrepreneurial
              <br />funding re-invented
            </h3>
            <!--end::Aside title-->
          </div>
          <!--end::Aside Container-->
        </div>
        <!--begin::Aside-->
        <!--begin::Content-->
        <div
          class="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 ml-auto mr-auto"
        >
          <!--begin::Content body-->
          <div class="d-flex flex-column-fluid flex-center mt-6 mt-lg-0">
            <div class="login-form" v-show="active=='login'">
              <!--begin::Form-->
              <div class="pt-lg-20 mt-lg-2 pb-15">
                <h3 class="font-weight-bolder text-dark display5">Welcome to Nuxt</h3>
                <span class="text-muted font-weight-bold font-size-h4">
                  New Here?
                  <a
                    @click="showForm('signup')"
                    href="javascript:;"
                    id="kt_login_signup"
                    class="text-primary font-weight-bolder"
                  >Create an Account</a>
                </span>
                <div class="login-form text-center">
                  <br />
                  <br />
                  <button @click="googleSignUp" class="btn btn-icon btn-circle btn-google">
                    Google
                  </button>
                  <button @click="twitterSignup" class="btn btn-icon btn-circle btn-twitter">
                    Twitter
                  </button>
                  <button @click="githubSignup" class="btn btn-icon btn-github git-btn">
                    Github
                  </button>
                </div>
                <div class="text-center">
                  <br />
                  <h2>Or</h2>
                </div>
              </div>
              <form class="form" novalidate="novalidate" ref="loginForm" id="kt_login_signin_form">
                <!--begin::Title-->

                <!--begin::Title-->
                <!--begin::Form group-->
                <div class="form-group">
                  <label class="font-size-h6 font-weight-bolder text-dark">Email</label>
                  <input
                    class="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
                    type="text"
                    required
                    v-model="email"
                    name="username"
                    autocomplete="off"
                  />
                </div>
                <!--end::Form group-->
                <!--begin::Form group-->
                <div class="form-group">
                  <div class="d-flex justify-content-between mt-n5">
                    <label class="font-size-h6 font-weight-bolder text-dark pt-5">Password</label>
                    <a
                      href="javascript:;"
                      class="text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5"
                      id="kt_login_forgot"
                    >Forgot Password ?</a>
                  </div>
                  <input
                    class="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
                    type="password"
                    name="password"
                    required
                    v-model="password"
                    autocomplete="off"
                  />
                </div>
                <!--end::Form group-->
                <!--begin::Action-->
                <div class="text-center pb-lg-0 pb-10">
                  <button
                    @click="onLogin"
                    type="button"
                    id="kt_login_signin_submit"
                    class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3"
                  >Sign In</button>
                </div>
                <!--end::Action-->
              </form>
              <!--end::Form-->
            </div>

            <div class="login-form" v-show="active=='signup'">
              <div class="text-center pt-lg-30 pb-15">
                <h3 class="font-weight-bolder text-dark display5">Sign Up</h3>
                <br />
                <div class="login-form text-center">
                  <button @click="googleSignUp" class="btn btn-icon btn-circle btn-google">
                    Google 
                  </button>
                  <button @click="twitterSignup" class="btn btn-icon btn-circle btn-twitter">
                    Twitter
                  </button>
                  <button @click="githubSignup" class="btn btn-icon btn-github git-btn">
                    Github
                  </button>
                </div>
                <div class="text-center">
                  <br />
                  <h2>Or</h2>
                </div>
                <p
                  class="text-muted font-weight-bold font-size-h4"
                >Enter your details to create your account</p>
              </div>
              <form class="form" novalidate="novalidate" ref="signUpForm" id="kt_login_signup_form">
                <div class="form-group">
                  <input
                    v-model="displayName"
                    class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                    type="text"
                    placeholder="Fullname"
                    name="fullname"
                    autocomplete="off"
                  />
                </div>

                <div class="form-group">
                  <input
                    v-model="email"
                    class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                    type="email"
                    placeholder="Email"
                    name="email"
                    autocomplete="off"
                  />
                </div>

                <div class="form-group">
                  <input
                    v-model="password"
                    class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                    type="password"
                    placeholder="Password"
                    name="password"
                    autocomplete="off"
                  />
                </div>

                <div class="form-group">
                  <input
                    v-model="password2"
                    class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                    type="password"
                    placeholder="Confirm password"
                    name="cpassword"
                    autocomplete="off"
                  />
                </div>

                <div class="form-group">
                  <label class="checkbox mb-0">
                    <input type="checkbox" name="agree" />I Agree the
                    <a href="#">terms and conditions</a>.
                    <span></span>
                  </label>
                </div>

                <div class="form-group d-flex flex-wrap flex-center pb-lg-0 pb-3">
                  <button
                    type="button"
                    @click="createUser"
                    id="kt_login_signup_submit"
                    class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mx-4"
                  >Submit</button>
                  <button
                    @click="showForm('login')"
                    type="button"
                    id="kt_login_signup_cancel"
                    class="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mx-4"
                  >Cancel</button>
                </div>
              </form>
            </div>

            <div class="login-form login-forgot">
              <form class="form" novalidate="novalidate" id="kt_login_forgot_form">
                <div class="text-center pt-lg-40 mt-lg-20 pb-15">
                  <h3 class="font-weight-bolder text-dark display5">Forgotten Password ?</h3>
                  <p
                    class="text-muted font-weight-bold font-size-h4"
                  >Enter your email to reset your password</p>
                </div>
                <div class="form-group">
                  <input
                    class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                    type="email"
                    placeholder="Email"
                    name="email"
                    autocomplete="off"
                    required
                  />
                </div>
                <div class="form-group d-flex flex-wrap flex-center pb-lg-0">
                  <button
                    type="button"
                    id="kt_login_forgot_submit"
                    class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mx-4"
                  >Submit</button>
                  <button
                    type="button"
                    id="kt_login_forgot_cancel"
                    class="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mx-4"
                  >Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      displayName: "",
      password2: "",
      email: "",
      password: "",
      active: "login" //signup,forgot
    };
  },
  
  methods: {
    async createUser() {
      try {
          this.$store.dispatch("signUp", {
            email: this.email,
            password: this.password,
            displayName: this.displayName
          });
        
      } catch (e) {
        alert(e);
      }
    },
    async onLogin() {
      try {
          this.$store.dispatch("signIn", {
            email: this.email,
            password: this.password
          });
        
      } catch (error) {
        console.log(error);
      }
    },
    googleSignUp() {
      this.$store
        .dispatch("signInWithGoogle")
        .then(() => {
          console.log("inside then statement on login");
        })
        .catch(e => {
          console.log(e.message);
        });
    },
    twitterSignup() {
      this.$store
        .dispatch("signInWithTwitter")
        .then(() => {
          console.log("inside then statement on login");
        })
        .catch(e => {
          console.log(e.message);
        });
    },
    githubSignup() {
      this.$store
        .dispatch("signInWithGithub")
        .then(() => {
          console.log("inside then statement on login");
        })
        .catch(e => {
          console.log(e.message);
        });
    },
    showForm(form) {
      this.active = form;
    }
  }
};
</script>
 
<style scoped>
.flex-full-height {
  height: 100vh;
}
</style>