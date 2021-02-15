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
  </div>
</template>

<script>
import ProductRepository from "../repository/ProductRepository";
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
    loadProducts() {
        let item = {
          id: 4,
          title: "Product Test",
          description:
            "elit",
          price: 503,
          ratings: 3,
          reviews: 5,
          isAddedToCart: false,
          isAddedBtn: false,
          isFavourite: false,
          quantity: 1,
        };

        this.$store.commit("addToProducts", item);

        //let productList = ProductRepository.getProducts();
        //console.log(productList);
        //if (productList.length === 0) {
        //  console.log("Empty");
        //}
        //productList.forEach((product) => {
        //  //console.log(product.id);
        //  this.$store.commit("addToProducts", product);
        //});
    },
  },
  created() {
    this.loadProducts();
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin: 10px;
}
</style>
