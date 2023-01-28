<template>
    <component :is="layout" />
</template>

<script setup>
import MainLayout from './layouts/MainLayout.vue'
import GuestLayout from './layouts/GuestLayout.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const layout = computed(() => {
    if (route.meta.layout === 'main') {
        return MainLayout
    } else if (route.meta.layout === 'guest') {
        return GuestLayout
    }
})
</script>

<style scoped></style>
