<template>
    <Navbar />
    <div class="max-w-[1200px] mx-auto">
        <main>
            <router-view />
        </main>
    </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
</script>

<style lang="scss" scoped></style>
