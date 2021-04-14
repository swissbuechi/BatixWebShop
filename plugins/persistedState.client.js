import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'batixwebshop',
    paths: ['products', 'productsLoaded', 'userInfo',],
  })(store)
}