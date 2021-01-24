<template>

  <div>
    <!-- <client-only> -->
    <div v-if="this.modal" class="modalShadow"></div>
    <div class="header" id="top" v-else-if="!this.modal">
      <nav class="navbar wrap" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="#" v-scroll-to="'#top'">
            <div style="display: flex">
              <div
                style="
                  height: 35px;
                  width: 12px;
                  background: #00d1b2;
                  margin-right: 15px;
                "/>
              <div style="height: 35px; width: 12px; background: #00d1b2" />

            </div>
            <vue-typed-js
              class="is-hidden-mobile"
              :backDelay="1000"
              :startDelay="1000"
              :loop="true"
              :strings="['Polyakov', 'Поляковъ']">
              <h1 class="typing" :class="$style.logoText"></h1></vue-typed-js>

          </a>

          <div class="navbar-item is-hidden-tablet">
            <div class="buttons">
              <a class="button is-primary" href="#" v-scroll-to="'#contacts'"><strong>Свяжитесь с нами</strong>
              </a>
            </div>
          </div>
        </div>

        <div id="navbarBasicExample" class="navbar-menu is-active">
          <div class="navbar-end">
            <a class="navbar-item" href="#" v-scroll-to="'#advantages'">О нас</a>
            <a class="navbar-item" href="#" v-scroll-to="'#catalog'">Каталог услуг</a>

            <div class="navbar-item is-hidden-mobile">
              <div class="buttons">
                <a class="button is-primary" href="#" v-scroll-to="'#contacts'"><strong>Свяжитесь с нами</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <!-- </client-only> -->
  </div>

</template>

<script>
import { mapState } from "vuex";
import Logo from "@/assets/svg/logo.svg";
import Vue from "vue";
import { VueTypedJs } from "vue-typed-js";

const Vuer = require("vue");
const VueScrollTo = require("vue-scrollto");
Vue.use(VueScrollTo);
Vue.use(VueTypedJs);

export default {
  components: {
    Logo,
    VueTypedJs
  },
  computed: {
    ...mapState({
      modal: "modal",
    }),
  },
};
</script>

<style lang="sass" module>
@import "assets/style/mixins.sass"

.logoText
  color: #000
  margin-left: 10px
  font-size: 25px
  font-weight: bold
</style>
