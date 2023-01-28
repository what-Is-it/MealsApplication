<template>
    <div class="bg-white shadow rounded-xl hover:scale-105 transition-all relative">
        <router-link :to="{name: 'mealDetails', params:{id: meal.idMeal}}">
            <img
                :src="meal.strMealThumb"
                :alt="meal.strMeal"
                class="rounded-t-xl h-64 w-full object-cover"
            />
        </router-link>
        <h3 class="p-3 font-semibold">{{meal.strMeal}}</h3>
        <p class="mb-[50px] px-3">{{cutWords(meal.strInstructions, 20)}}...</p>
        <div class="p-3 absolute bottom-0">
            <a
                :href="meal.strYoutube"
                target="_blank"
                class="mr-2 px-3 py-2 rounded border-2 text-red-500 hover:bg-red-600 hover:text-white transition-colors"
            >YouTube</a>
            <router-link
                :to="{name: 'mealDetails', params:{id: meal.idMeal}}"
                class="px-3 py-2 rounded border-2 text-green-500 hover:bg-green-600 hover:text-white transition-colors"
            >View more</router-link>
        </div>
    </div>
</template>

<script setup>
import cutWords from '../filters/index'
const props = defineProps({
    meal: {
        required: true,
        type: Object
    }
})
</script>

<style lang="scss" scoped>
</style>