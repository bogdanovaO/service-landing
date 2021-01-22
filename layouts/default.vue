<template>
<!-- <client-only>  -->
  <div>
    <Header />
    <Title id="title"/>
    <Advantages id="advantages" class="container" /> 
    <Nuxt id="catalog" class="container" />
    <Contacts id="contacts" class="container" />
    <Footer />
  </div>
<!-- </client-only>  -->
</template>

<script>
import Header from "~~/components/Header.vue";
import Title from "~~/components/Title.vue";
import Advantages from "~~/components/Advantages.vue";
import Contacts from "~~/components/Contacts.vue";
import Footer from "~~/components/Footer.vue";
import { mapState } from "vuex";
import Logo from "@/assets/svg/logo.svg";

export default {
  components: {
    Header,
    Title,
    Footer,
    Advantages,
    Contacts,
    Logo,
  },

  // computed: {
  //   ...mapState({
  //     modal: "modal",
  //   }),
  // },
  
  // methods: {
  //   closeM() {
  //     console.log(this.modal);
  //   },
  // },
};

</script>
<style>
@font-face { 
    font-family: "rouble";
    src: url("/full_path/fonts/rouble.otf") format("opentype");
}
.rub { font-family: "rouble"; }
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap");
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.modalShadow {
  background-color: #000 !important;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1;
  opacity: 0.8;
  height: 100vh;
  width: 100%;
}
.ps {
 height: 100%
}

.wrap {
  background-color: #f9f9f9 !important;
}
.logoText {
  font-size: 24px;
  margin-left: 10px;
  font-weight: bold;
}
.navbar {
  width: 100%;
}
.navbar-end {
  display: flex;
}
.title {
  font-size: calc(25px + 0.5vw);
  text-align: left;
  margin: 0 0 70px 0;
  color: #402b2b;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
}
@media screen and (max-width: 540px) {
    .title {
        font-size: calc(14px + 1vw);;
        margin: 0 0 50px 0!important;
        font-weight: bold;
    }
}

</style>

