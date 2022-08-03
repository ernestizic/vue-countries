// import { SET_COUNTRY } from "../constants/countryMutationTypes";


const state = {
    isLoading: false,
    countries: [],
    country: null,
};

const getters = {
    allCountries: (state)=> {return state.countries},
    loadingState: (state)=> {return state.isLoading},
    countryDetail: (state) => state.country

    // Get country detail buy using find - I'm curently not using this
    // countryDetail: (state)=> (id)=> {
    //     console.log(id)
    //     return state.countries.find((country)=> country.cca2 === id)
    // },
};

const actions = {
    // Fetch countries
    async fetchCountries({commit}) {
        try {
            commit('setIsLoading', true)
            const res = await fetch('https://restcountries.com/v3.1/all')
            const data = await res.json()
            console.log(data)
            commit('setIsLoading', false)
            commit('setCountries', data)
        } catch (err) {
            console.log(err)
        }
    },
    // Fetch one country
    async fetchSingleCountry({commit}, code) {
        console.log(code)
        commit('setIsLoading', true)  
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        const data = await res.json()
        console.log(data)
        commit('setIsLoading', false)
        commit('setSingleCountry', data)
    },

    // Search country
    countrySearch: async({commit}, query) => {
        console.log(query)
        try {
            if (!query) {
                commit('setCountries', state.countries)
            } else {
                const res = await fetch(`https://restcountries.com/v3.1/name/${query}`)
                const data = await res.json()
                commit('setCountries', data)
            }
        } catch (err) {
            console.log(data.message)
        }
    },
};

const mutations = {
    // a function that takes in the state and payload (countries) and we want it to take the state.countries and set it to 
    // the countries that are passed in.
    setIsLoading: (state, payload) => (state.isLoading = payload),
    setCountries: (state, payload)=> (state.countries = payload),
    setSingleCountry: (state, payload)=> (state.country = payload),
};

export default {
	state: state,
	actions,
	getters,
	mutations,
};
