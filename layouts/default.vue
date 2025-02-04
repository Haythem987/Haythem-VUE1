<script setup lang="ts">
import {useRouteDefine, useNowRouteTitle} from "~/composables/useRouteParams";

const routePathList = useRouteDefine()
const routeTitle = useNowRouteTitle()
const menuTitle = ref("NUXT练习项目")
const route=useRoute()
</script>

<template>
  <el-container class="h-screen w-screen">
    <el-aside class="border-r">
      <el-container class="items-center">
        <el-header class="text-center mt-5 font-bold text-2xl ">{{ menuTitle }}</el-header>

        <el-menu class="border-none w-full" :router="true" :default-active="route.path">
          <!--suppress HtmlUnknownTarget -->
          <el-menu-item class="border rounded-lg justify-center m-5" v-for="item in routePathList" :key="item.name" :index="item.path">
           <span v-if="item.icon !==undefined&&item.icon !==''" >
             <el-icon><component :is="item.icon"></component></el-icon>
           </span>
            {{item.name}}
          </el-menu-item>
        </el-menu>

      </el-container>
    </el-aside>
    <el-container>
      <el-header class="mt-5 border-b font-bold text-4.5">
        {{ routeTitle }}
      </el-header>
      <el-main>
        <NuxtPage/>
      </el-main>
    </el-container>
  </el-container>

</template>

<style scoped>

</style>

