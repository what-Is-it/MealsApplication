import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByIngredients from '../views/MealsByIngredients.vue'
import MealDetails from '../views/MealDetails.vue'
import Ingredients from '../views/Ingredients.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/by-name/:name?',
        name: 'byName',
        component: MealsByName,
        meta: {
            layout: 'main',
            title: 'Search meals by name'
        }
    },
    {
        path: '/by-letter/:letter?',
        name: 'byLetter',
        component: MealsByLetter,
        meta: {
            layout: 'main',
            title: 'Search meals by letter'
        }
    },
    {
        path: '/ingredients/:ingredient',
        name: 'Ingredients',
        component: Ingredients,
        meta: {
            layout: 'main',
            title: 'Ingredients'
        }
    },
    {
        path: '/by-ingredients/:ingredient?',
        name: 'byIngredients',
        component: MealsByIngredients,
        meta: {
            layout: 'main',
            title: 'Search meals by ingredients'
        }
    },
    {
        path: '/meal/:id',
        name: 'mealDetails',
        component: MealDetails,
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/guest',
        name: 'Guest',
        component: MealsByIngredients,
        meta: {
            layout: 'guest'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
