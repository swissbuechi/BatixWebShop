<template>
  <div class="columns is-centered is-multiline">
    <div
      class="card column is-one-quarter"
      v-for="product in products"
      :key="product.id"
    >
      <VmProducts :product="product"></VmProducts>
    </div>
    <div class="section" v-if="products.length === 0">
      <p>{{ noProductLabel }}</p>
    </div>
    <div class="row">
      <div class="artikel-liste">
        <label>Artikel:</label>
        <select v-model="bestellung_artikel">
          <option v-for="a in artikel" :key="a.ID" :value="a.ID">
            Beschreibung: {{ a.Beschreibung }}, zum Preis pro Stück:
            {{ a.Preis }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api";

import VmProducts from "../Products";
import { getByTitle } from "@/assets/filters";

export default {
  name: "productsList",

  components: { VmProducts },

  data() {
    return {
      id: "",
      noProductLabel: "No product found",
      productsFiltered: [],
      artikel: [],
    };
  },

  computed: {
    products() {
      if (this.$store.state.userInfo.hasSearched) {
        return this.getProductByTitle();
      } else {
        return this.$store.state.products;
      }
    },
  },

  methods: {
    getProductByTitle() {
      let listOfProducts = this.$store.state.products,
        titleSearched = this.$store.state.userInfo.productTitleSearched;

      return (this.productsFiltered = getByTitle(
        listOfProducts,
        titleSearched
      ));
    },
    ladeArtikel() {
      api
        .get("artikel/", {
          params: { count: 50 },
        })
        .then((response) => {
          this.artikel = response.data;
        });
    },
  },
  created() {
    this.ladeArtikel();
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin: 10px;
}

.columns {
  margin-top: 12px;
  margin-bottom: 12px;
}

</style>
