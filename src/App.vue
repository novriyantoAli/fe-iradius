<script setup>
import { RouterView } from 'vue-router';

import { useAuthStore } from '../src/stores';
const authStore = useAuthStore();
</script>

<template>
  <div>
    <!-- Navbar -->
    <nav v-show="authStore.user" class="bg-blue-600 p-4 shadow-md">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" class="text-white text-2xl font-semibold">IRadius Dashboard</a>
        <ul class="flex space-x-6">
            <!-- <li><a href="#" class="text-white hover:text-gray-300">Dashboard</a></li> -->
            <li><router-link to="/" class="text-white hover:text-gray-300">Dashboard</router-link></li>
            <li><router-link to="/products" class="text-white hover:text-gray-300">Products</router-link></li>
            <li><router-link to="/orders" class="text-white hover:text-gray-300">Orders</router-link></li>
            <li><a href="#" class="text-white hover:text-gray-300">Laporan</a></li>
            <li><a @click="authStore.logout()" class="text-white hover:text-gray-300">Logout</a></li>
        </ul>
      </div>
    </nav>
    <div class="max-w-7xl mx-auto p-6 mt-8">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
