<template>
    <div class="flex p-8 flex-col text-orange-500 pb-0">
        <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
    </div>
    <div v-if="meals" class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8 pt-0">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div
        v-else
        class="text-xl font-bold mb-5 text-center mt-10 text-gray-400"
    >Sorry, there are no meals!</div>
</template>

<script setup>
import axiosClient from '../axiosClient'
import { computed, onMounted, ref } from 'vue'
import store from '../store'
import MealItem from '../components/MealItem.vue'

const meals = ref([])

onMounted(async () => {
    for (let i = 0; i < 10; i++) {
        axiosClient
            .get(`random.php`)
            .then(({ data }) => meals.value.push(data.meals[0]))
    }
})
</script>

<style lang="scss" scoped></style>
