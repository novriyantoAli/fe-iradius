<script>
</script>

<template>
    <!-- Main Content -->
    <div>
        <!-- Header -->
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-3xl font-semibold text-gray-800">Dashboard Admin</h1>
            <div class="flex items-center space-x-4">
                <span class="text-gray-700">Hello, Admin</span>
                <img src="https://via.placeholder.com/40" alt="User Avatar" class="rounded-full">
            </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-800">Total Pengguna</h3>
                <p class="text-3xl font-bold text-blue-600">1,245</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-800">Pesanan Baru</h3>
                <p class="text-3xl font-bold text-blue-600">32</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-xl font-semibold text-gray-800">Produk Terjual</h3>
                <p class="text-3xl font-bold text-blue-600">1,523</p>
            </div>
        </div>

        <!-- Recent Activity -->
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">Aktivitas Terbaru</h2>
            <ul>
                <li class="flex justify-between py-2 border-b border-gray-200">
                    <span class="text-gray-700">User A membuat pesanan baru</span>
                    <span class="text-sm text-gray-500">1 jam yang lalu</span>
                </li>
                <li class="flex justify-between py-2 border-b border-gray-200">
                    <span class="text-gray-700">User B menambahkan produk</span>
                    <span class="text-sm text-gray-500">2 jam yang lalu</span>
                </li>
                <li class="flex justify-between py-2 border-b border-gray-200">
                    <span class="text-gray-700">User C memperbarui profil</span>
                    <span class="text-sm text-gray-500">4 jam yang lalu</span>
                </li>
                <li class="flex justify-between py-2">
                    <span class="text-gray-700">User D menghapus produk</span>
                    <span class="text-sm text-gray-500">6 jam yang lalu</span>
                </li>
            </ul>
        </div>
    </div>
</template>