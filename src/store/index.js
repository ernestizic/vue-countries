import { createStore } from 'vuex';
import countries from './modules/countries';

// create store
export const store = createStore({
    modules: {
        countries,
    }
})

// store.state.countries    -> `countryModule`'s state