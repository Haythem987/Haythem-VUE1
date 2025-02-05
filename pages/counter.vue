<script setup lang="ts">
const num = ref(0)
const increment = () => num.value++
</script>

<template>

  <div class="flex w-full h-full items-center justify-center">
    <el-image class="w-full h-full object-cover -z-10" src="/images/7f3904c34dfe5414896b74934a7d5b2c.jpg"
              alt="counter"></el-image>
    <div class="p-8 bg-gray-1 bg-op-70 rounded-lg w-400px h-300px fixed flex flex-col items-center">
      <div class="font-bold text-2xl mt-4">Counter</div>
      <div class="font-bold text-1xl mt-4">Count:{{ num }}</div>
      <button
          class="hover:text-red w-full mt-4 hover:bg-op-70 bg-gray-2 hover:bg-gray-3 rounded-lg transition-colors border shadow-md shadow-gray-1 p-1"
          @click="increment">+1
      </button>
    </div>


  </div>
</template>

<style scoped>

</style>
