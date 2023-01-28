<template>
    <div class="p-8 pb-0">
        <h2 class="text-4xl font-bold mb-5 text-orange-400">{{route.meta.title}}</h2>
        <input
            type="text"
            v-model="keyword"
            class="rounded border-2 border-gray-200 w-full mb-3 focus:ring-orange-500 focus:border-orange-500"
            placeholder="Search for Ingredients"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <router-link
                :to="{name: 'Ingredients', params: {ingredient: ingredient.strIngredient }}"
                v-for="ingredient of computedIngredients"
                :key="ingredient.idIngredient"
                class="bg-white rounded p-3 mb-3 shadow block"
            >
                <h3 class="text-xl font-bold mb-2">{{ingredient.strIngredient}}</h3>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref, computed } from 'vue'
import axiosClient from '../axiosClient'
const route = useRoute()

const ingredients = ref([])
const keyword = ref('')

const computedIngredients = computed(() => {
    if (!computedIngredients) return ingredients
    return ingredients.value.filter(i => {
        return i.strIngredient
            .toLowerCase()
            .includes(keyword.value.toLowerCase())
    })
})

onMounted(() => {
    axiosClient.get(`list.php?i=list`).then(({ data }) => {
        ingredients.value = data.meals
    })
})
</script>

<style lang="scss" scoped></style>
