<template>
    <div class="p-8 pb-0">
        <h2 class="text-4xl font-bold mb-5 text-orange-400">{{route.meta.title}}</h2>
        <input
            type="text"
            v-model="keyword"
            class="rounded border-2 border-gray-200 w-full focus:ring-orange-500 focus:border-orange-500"
            placeholder="Search for Meals"
            @change="searchMeals"
        />
        <div v-if="meals.length" class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
            <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
        </div>
        <div
            v-else
            class="text-xl font-bold mb-5 text-center mt-10 text-gray-400"
        >There are no meals!</div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import store from '../store'
import { useRoute } from 'vue-router'
import MealItem from '../components/MealItem.vue'
const route = useRoute()

const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)
async function searchMeals() {
    if (!!keyword.value) {
        await store.dispatch('searchMeals', keyword.value)
    } else {
        store.commit('setSearchedMeals', [])
    }
}

onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value) {
        searchMeals()
    }
})
</script>

<style lang="scss" scoped></style>
