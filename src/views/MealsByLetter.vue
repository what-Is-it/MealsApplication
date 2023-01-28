<template>
    <div class="p-8 pb-0">
        <h2 class="text-4xl font-bold mb-5 text-orange-400">{{route.meta.title}}</h2>
        <div class="flex gap-2 justify-center mt-2 flex-wrap">
            <router-link
                class="hover:scale-150 transition-all hover:text-orange-400"
                :to="{ name: 'byLetter', params: { letter } }"
                v-for="letter of letters"
                :key="letter"
            >{{ letter }}</router-link>
        </div>
        <div v-if="meals" class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
            <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
        </div>
        <div
            v-else
            class="text-xl font-bold mb-5 text-center mt-10 text-gray-400"
        >There are no meals!</div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, onMounted, watch } from 'vue'
import MealItem from '../components/MealItem.vue'
import store from '../store'
const route = useRoute()

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const meals = computed(() => store.state.mealsByLetter)

onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})
</script>

<style lang="scss" scoped></style>
