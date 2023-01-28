<template>
    <div v-if="meal" class="max-w-[700px] mx-auto p-8">
        <h1 class="text-5xl font-bold mb-5">{{meal.strMeal}}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="m-auto" />
        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div>
                <strong class="font-bold">Category:</strong>
                {{meal.strCategory}}
            </div>
            <div>
                <strong class="font-bold">Area:</strong>
                {{meal.strArea}}
            </div>
            <div>
                <strong class="font-bold">Tags:</strong>
                <div class="break-words inline">&nbsp;{{meal.strTags}}</div>
            </div>
        </div>
        <div class="my-3">{{meal.strInstructions}}</div>
        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div>
                <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
                <ul>
                    <div v-for="(el,idx) of new Array(20)" :key="idx">
                        <li
                            v-if="meal[`strIngredient${idx+1}`]"
                        >{{idx+1}}.&nbsp;{{ meal[`strIngredient${idx+1}`] }}</li>
                    </div>
                </ul>
            </div>
            <div>
                <h2 class="text-2xl font-semibold mb-2">Measures</h2>
                <ul>
                    <div v-for="(el,idx) of new Array(20)" :key="idx">
                        <li
                            v-if="meal[`strMeasure${idx+1}`]"
                        >{{idx+1}}.&nbsp;{{ meal[`strMeasure${idx+1}`] }}</li>
                    </div>
                </ul>
            </div>
        </div>
        <button
            class="mt-5 px-3 py-2 rounded border-2 border-transparent text-green-500 hover:bg-green-600 hover:text-white transition-colors"
        >
            <a :href="meal.strSource" target="_blank">View Original Source</a>
        </button>
    </div>
    <div v-else>Sorry, that meal is not define</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axiosClient from '../axiosClient'
const route = useRoute()

const meal = ref({})

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
        meal.value = data.meals[0] || null
    })
})
</script>

<style lang="scss" scoped>
</style>