<template>
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
        <router-link
            :to="{ name: 'Home' }"
            class="inline-flex items-center h-full p-5 text-orange-400 font-bold"
        >Home</router-link>
        <div class="flex items-center gap-1">
            <router-link
                :to="{ name: 'byName' }"
                class="inline-flex items-center px-2 h-full hover:bg-orange-400 hover:text-white transition-colors"
            >Search Meals</router-link>
            <router-link
                :to="{ name: 'byLetter' }"
                class="inline-flex items-center px-2 h-full hover:bg-orange-400 hover:text-white transition-colors"
            >Meals By Letter</router-link>
            <router-link
                :to="{ name: 'byIngredients' }"
                class="inline-flex items-center px-2 h-full hover:bg-orange-400 hover:text-white transition-colors"
            >Meals By Ingredients</router-link>
        </div>
    </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
