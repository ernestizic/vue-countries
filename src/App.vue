<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Search from './components/Search.vue'

export default {
  name: 'App',
  components: {
    Header,
    Search,
  },
  data() {
    return {
      // countries: [],
      // isLoading: false,
    }
  },
  methods: {
    // Fetch countries
    // async fetchCountries() {
    //   this.isLoading = true
    //   const res = await fetch('https://restcountries.com/v3.1/all')
    //   const data = await res.json()
    //   this.isLoading = false
    //   this.countries = data
    // },

    // Search countries
    // async searchCountry(keywords) {
    //   this.isLoading = true
    //   const res = await fetch(`https://restcountries.com/v3.1/name/${keywords}`)
    //   const data = await res.json()
    //   this.isLoading = false
    //   console.log(data)
    //   this.searchedCountries = data
    // },
  },
  // mounted() {
  //   this.fetchCountries()
  // },
  // computed: {
  //   countrySearch(q) {
  //     console.log(q)
  //     // return [...this.countries].filter(country => country.name.common.toLowerCase().includes(q.toLowerCase()))
  //   }
  // }

}

</script>

<template>
  <div class="App">
    <Header />
    <RouterView />
  </div>
</template>

<style scoped>
  .App{
    font-family: 'Nunito Sans', sans-serif;
    background: hsl(0, 0%, 98%);
  }


</style>
