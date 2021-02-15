<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link :to="{ name: 'index' }" class="navbar-item">
          <h1 class="title is-3 is-flex-mobile"></h1>
        </nuxt-link>

        <a
          role="button"
          class="navbar-burger burger"
          @click="isMenuOpen = !isMenuOpen"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu is-active">
        <div class="navbar-start">
          <div class="navbar-item field"></div>
        </div>
        <h1 class="header-title">BBH AG Webshop</h1>
        <div class="navbar-end">
          <div class="navbar-item social">
            <a href="#" class="icon" :title="facebookTooltip">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#" class="icon" :title="twitterTooltip">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#" class="icon" :title="instagramTooltip">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="#" class="icon" :title="linkedinTooltip">
              <i class="fa fa-linkedin"></i>
            </a>
          </div>
          <div class="navbar-item shopping-cart" @click="showCheckoutModal">
            <span class="icon">
              <i class="fa fa-shopping-cart"></i>
            </span>
            <span :class="[numProductsAdded > 0 ? 'tag is-info' : '']">{{
              numProductsAdded
            }}</span>
          </div>
        </div>
      </div>

      <!-- For mobile and tablet -->
      <div v-show="isMenuOpen" class="navbar-end">
        <VmMenu></VmMenu>
      </div>

      <!-- For desktop -->
      <div class="navbar-end is-hidden-mobile">
        <VmMenu></VmMenu>
      </div>
    </nav>
  </div>
</template>

<script>
import VmMenu from "../menu/Menu";

export default {
  name: "VmHeader",

  data() {
    return {
      isCheckoutActive: false,
      isMenuOpen: false,
    };
  },

  components: {
    VmMenu,
  },

  computed: {
    numProductsAdded() {
      return this.$store.getters.productsAdded.length;
    },
  },

  methods: {
    showCheckoutModal() {
      this.$store.commit("showCheckoutModal", true);
    },
  },
};
</script>

<style lang="scss" scoped>

div.navbar-end:nth-child(4){
  display: none;
}

.header-title {
  margin-top: 20px;
}

.title {
  background: url("../../static/logo-small.png") no-repeat;
  background-position: 50% 50%;
  width: 48px;
  height: 48px;
}
.shopping-cart {
  cursor: pointer;
}
a {
  color: grey;
}
</style>
