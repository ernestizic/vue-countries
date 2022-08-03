<script>
import Loader from './Loader.vue'

export default {
    name: 'CountryList',
    props: {
        allCountries: Array,
        loadingState: Boolean,
    },
    components: {
        Loader,
    },
}
</script>


<template>
    <div class="row">
        <div v-for='country in allCountries' v-bind:key="country.cca2">
            <router-link :to="{name: 'country', params: {id: country.cca2}}">
                <div class="card">
                    <img :src='country.flags.svg' :alt='country.name.common' />
                    <div class="details">
                        <h3>{{country.name.common}}</h3>
                        <p><span class="title">Population:</span> {{country.population}} </p>
                        <p><span class="title">Region:</span> {{country.region}} </p>
                        <p><span class="title">Sub Region:</span> {{country.subregion}} </p>
                        <!-- <p><span class="title">Capital:</span> {{country.capital}} </p> -->
                    </div>
                </div>
            </router-link>
        </div>
    </div>

    <div v-if='loadingState'>
        <Loader />
    </div>
</template>

<style scoped>

    a {
        text-decoration: none;
        color: hsl(200, 15%, 8%);
    }
    .row{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 3rem 3rem;
    }
    .card{
        background-color: #fff;
        box-shadow: 0 0 3px rgb(208, 205, 205);
        padding-bottom: 50px;
    }
    .card h3{
        font-weight: bold;
        padding: 15px 0;
    }
    .details {
        padding: 0 20px;
    }
    .title{
        font-weight: bold;
    }
    img{
        width: 100%;
        height: 200px;
    }

    @media screen and (max-width: 375px) {
        .row{
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>