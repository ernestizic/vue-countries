<script>
import { mapActions } from 'vuex';

    export default {
        name: 'Search',
        data() {
            return{
                keywords: ''
            }
        },
        methods: {
            ...mapActions(['countrySearch']),
            // onSubmit() {
            //     let query = this.keywords
            //     console.log(query)
            //     this.countrySearch(query)
            //     // this.$emit('search-for-country', query)
            //     // this.$store.dispatch('countrySearch', {})
            // }
        },
    }
</script>

<template>
<!-- The form is submit is not needed. I just left it -->
    <form  @submit.prevent='onSubmit'>
        <i class="fas fa-search"></i>
        <input 
            type="search" 
            placeholder="Search for a country..." 
            v-model="keywords"
            @input="countrySearch(this.keywords)"
        />
    </form>
</template>

<style scoped>
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

    @media screen and (max-width: 375px) {
        form {
            width: 100%;
        }
        input {
            width: 100%;
        }
    }
</style>