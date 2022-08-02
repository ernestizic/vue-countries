<script>
import Search from '../components/Search.vue';
import CountryList from '../components/CountryList.vue';
import { mapGetters, mapActions, mapState } from 'vuex'

  export default {
    name: 'HomeView',
    data() {
      return {
        // keyword: '',
        selected: ''
      }
    },
    components: {
      Search,
      CountryList,
    },
    computed: {
      // countries () {
      //   const data = [...this.allCountries].filter(country => country.name.common.toLowerCase().includes(this.keyword.toLowerCase()))
      //   return data
      // },
      regionFilter () {
        if (!this.selected) {
          return this.allCountries
        } else {
          const data = [...this.allCountries].filter(country => country.region === this.selected)
          return data
        }
      },
      // ...mapState(['countries']),
      ...mapGetters(['allCountries', 'loadingState']),
    },
    methods: {
    ...mapActions(['fetchCountries'])
    },
    mounted() {
      this.fetchCountries();
    },
  }
</script>

<template>
  <div class="body-of-home-view">
    <section>
      <Search />
      <!-- <form  @submit.prevent='onSubmit'>
        <i class="fas fa-search"></i>
        <input 
            type="search" 
            placeholder="Search for a country..." 
            v-model="keyword"
        />
      </form> -->
      
      <select v-model="selected">
        <option disabled value="">Filter by Region</option>
        <option>Africa</option>
        <option>Americas</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </section>
    <main>
      <!-- allCountries is the name given so we can call it in the CountryList component -->
      <CountryList :allCountries="regionFilter" :loadingState="loadingState" />
    </main>
  </div>
</template>

<style scoped>
  .body-of-home-view{
    padding: 30px 50px;
  }

  section{
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;
  }
/* form */
    form {
        width: 50%;
    }
    .fas {
        position: absolute;
        margin: 15px 25px;
        color: hsl(0, 0%, 52%);
    }
    input {
        width: 90%;
        box-shadow: 0 0 3px rgb(208, 205, 205);
        padding: 15px 55px;
        border-radius: 5px;
        border: none;
        color: hsl(0, 0%, 52%);
    }
    input:focus{
        outline: none;
    }
    /* form end */
    select {
      width: 15%;
      padding: 10px;
      border: none;
      box-shadow: 0 0 3px rgb(208, 205, 205);
      border-radius: 5px;
    }


  @media screen and (max-width: 375px) {
    .body-of-home-view{
      padding: 20px 30px;
    }
    section{
      flex-direction: column;
      justify-content: space-between;
      gap: 20px;
    }


            form {
            width: 100%;
        }
        input {
            width: 100%;
        }
  }
</style>

