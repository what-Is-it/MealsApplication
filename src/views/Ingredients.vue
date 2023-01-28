<template>
    <div v-if="meals" class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div v-else class="text-xl font-bold mb-5 text-center mt-10 text-gray-400">There are no meals!</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref, computed } from 'vue'
import store from '../store'
import MealItem from '../components/MealItem.vue'
const route = useRoute()

const meals = computed(() => store.state.mealsByIngredient)
console.log(meals)

onMounted(() => {
    store.dispatch('searchMealsByIngredient', route.params.ingredient)
})
</script>

<style lang="scss" scoped></style>
