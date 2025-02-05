<script setup lang="ts">
import {useRouteDefine, useNowRouteTitle, useNowRouteIcon} from "~/composables/useRouteParams";

const routePathList = useRouteDefine()
const routeTitle = useNowRouteTitle()
const menuTitle = ref("NUXT练习项目")
const routeIcon = useNowRouteIcon()
const route = useRoute()
</script>

<template>
  <el-container class="h-screen w-screen">
    <el-aside class="border-r bg-white">
      <div class="text-center mt-5 font-bold text-2xl">{{ menuTitle }}</div>
      <el-menu class="border-none w-full" :router="true" :default-active="route.path">
        <el-menu-item class="border rounded-lg justify-center m-5" v-for="item in routePathList" :key="item.name"
                      :index="item.path">
           <span v-if="routeIcon !== undefined && routeIcon !== ''">
             <el-icon>
               <component :is="item.icon"></component>
             </el-icon>
           </span>
          {{ item.name }}
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="border-b font-bold text-4.5 bg-white">
        <div class="flex items-center h-full">
          <div v-if="routeIcon !==undefined&&routeIcon !==''">
            <el-icon class="pt-4 mr-2">
              <component :is="routeIcon"></component>
            </el-icon>
          </div>
          <div>{{ routeTitle }}</div>
        </div>
      </el-header>
      <el-main class="p-0">
        <NuxtPage/>
      </el-main>
    </el-container>
  </el-container>

</template>

<style scoped>

</style>

