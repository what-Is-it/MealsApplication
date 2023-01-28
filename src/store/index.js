import { createStore } from 'vuex'
import axiosClient from './../axiosClient'

const store = createStore({
    state: {
        searchedMeals: [],
        mealsByLetter: [],
        mealsByIngredient: []
    },
    actions: {
        async searchMeals({ commit }, keyword) {
            const response = await axiosClient.get(`search.php?s=${keyword}`)
            commit('setSearchedMeals', response.data.meals)
        },
        async searchMealsByLetter({ commit }, letter) {
            const response = await axiosClient.get(`search.php?f=${letter}`)
            commit('setMealsByLetter', response.data.meals)
        },
        async searchMealsByIngredient({ commit }, ingredient) {
            const response = await axiosClient.get(`filter.php?i=${ingredient}`)
            commit('setMealsByIngredient', response.data.meals)
        }
    },
    mutations: {
        setSearchedMeals(state, meals) {
            state.searchedMeals = meals
        },
        setMealsByLetter(state, meals) {
            state.mealsByLetter = meals
        },
        setMealsByIngredient(state, meals) {
            state.mealsByIngredient = meals
        }
    },
    getters: {}
})

export default store
