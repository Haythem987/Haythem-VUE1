<script setup lang="ts">
import {useRouteDefine, useNowRouteTitle} from "~/composables/useRouteParams";

const route = useRouteDefine()
const routeTitle = useNowRouteTitle()
const menuTitle = ref("NUXT练习项目")
</script>

<template>
  <div class="flex h-screen w-screen">
    <div class="bg-white border-r border-gray-200 w-300px">
      <div class="flex flex-col p-4">
        <div class="font-bold text-xl text-center">{{ menuTitle }}</div>
        <!--suppress HtmlUnknownTarget -->
        <NuxtLink v-for="item in route" :key="item.path" :to="item.path">
          <button class="hover:bg-blue-2 rounded-md transition-colors border shadow-md shadow-gray-1 p-1 mb-2 w-full">
            {{ item.name }}
          </button>

        </NuxtLink>

      </div>
    </div>
    <div class="flex flex-col p-4 w-full">
      <div class="border-b border-gray-2 p-4 font-bold text-lg">
        {{routeTitle}}
      </div>
      <div class="m-4">
        <NuxtPage/>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>