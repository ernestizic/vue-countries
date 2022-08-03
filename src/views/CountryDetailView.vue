<script>
import Loader from '../components/Loader.vue'
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
    name: 'CountryDetailView',
    components: {
        Loader,
    },
    computed: {
        ...mapState(['countries']),
        ...mapGetters(['countryDetail', 'loadingState']),
        details() {
            return this.countryDetail && this.countryDetail[0]
        }
        // I can use this if i want to perform the computed inside this component instead of using a getter
        // countryDetail(){
        //     let country_id = this.$route.params.id
        //     let detail = this.countries.countries && this.countries.countries.find((count)=> count.cca2 === country_id)
        //     return detail
        // },
    },
    methods: {
        ...mapActions(['fetchSingleCountry'])
    },
    // This observes the route changes and calls fetchSingleCountry 
    watch: {
        $route (to, from) {
            this.fetchSingleCountry(this.$route.params.id)
        }
    },
    mounted() {
        this.fetchSingleCountry(this.$route.params.id)
    },
}
</script>

<template>
    <div class="country-detail-page">
        <button v-on:click="$router.back()"><i class="fa-solid fa-arrow-left-long"></i> Back</button>

        <div v-if='loadingState'>
            <Loader />
        </div>

        <div v-if='details' class="detail-flex">
            <div class="flag">
                <img :src='details.flags.svg' :alt='details.name.common' />
            </div>
            <div class="details">
                <header>{{details.name.common}}</header>

                <div class="detail-content-flex">
                    <div class="first-item">
                        <p><span class="title">Native Name:</span> {{details.name.nativeName[Object.keys(details.name.nativeName)[0]].common}} </p>
                        <p><span class="title">Population:</span> {{details.population}} </p>
                        <p><span class="title">Region:</span> {{details.region}} </p>
                        <p><span class="title">Sub Region:</span> {{details.subregion}} </p>
                        <p><span class="title">Capital:</span> {{details.capital[0]}} </p>
                    </div>
                    <div class="second-item">
                        <p><span class="title">Top Level Domain:</span> {{details.tld[0]}} </p>
                        <p><span class="title">Currencies:</span> {{details.currencies[Object.keys(details.currencies)[0]].name}} </p>
                        <p><span class="title">Languages:</span> {{details.languages[Object.keys(details.languages)[0]]}} </p>
                    </div>
                </div>

                <h4 v-if="details.borders">Border Countries:</h4>
                <div class="buttons-container">
                    <div class="border-countries" v-for='(border, idx) in details.borders' v-bind:key="idx" >
                        <router-link :to="{name: 'country', params: {id: border}}">
                            <button>{{border}}</button>
                            <!-- i removed this cause I added a watch route -->
                            <!-- <button @click="fetchSingleCountry(border)">{{border}}</button> -->
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
    .country-detail-page {
        padding: 30px 50px;
        font-size: 14px;
    }
    .detail-flex{
        margin-top: 30px;
        display: flex;
    }
    .flag{
        width: 50%;
    }
    .details{
        width: 50%;
    }
    .detail-content-flex{
        padding: 20px 30px 20px 0;
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }
    .detail-content-flex p{
        line-height: 25px;
    }
    .buttons-container{
        display: flex;
        gap: 12px;
    }
    .border-countries{
        /* border: 1px solid blue; */
        margin-top: 20px;
    }
    img{
        width: 70%;
        height: auto;
    }
    header{
        font-size: 20px;
        font-weight:800;
    }
    .title{
        font-weight: bold;
    }
    button {
        box-shadow: 0 0 5px rgb(143, 138, 138);
        padding: 5px 20px;
        border: none;
        background: #fff;
        border-radius: 4px;
    }
    button:hover{
        cursor: pointer;
    }

    @media screen and (max-width: 375px) {
    .country-detail-page {
        padding: 20px 30px;
    }
    .detail-flex{
        flex-direction: column;
    }
    .detail-content-flex{
        /* padding: 20px 30px 20px 0; */
        flex-direction: column;
        /* justify-content: space-between; */
        /* gap: 30px; */
    }
    .flag{
        width: 100%;
        margin-bottom: 20px;
    }
    img{
        width: 100%;
        height: auto;
    }
    .details{
        width: 100%;
    }
    .buttons-container{
        flex-wrap: wrap;
    }
    }
</style>