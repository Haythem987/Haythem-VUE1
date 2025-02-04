<script setup lang="ts">
import type {CollectionItems} from "~/pages/collections.vue";

defineProps<CollectionItems>()
const handleClick = (name: string, likes: number, imgSrc: string) => {
  console.log(`
   你点击了卡片~
  卡片标题为: ${name}
  卡片点赞数为: ${likes}
  卡片图片Pixiv地址为: ${convertLocalImgSrcToPixivSrc(imgSrc) || '无图片'} `)
}
const convertLocalImgSrcToPixivSrc = (imgSrc: string) => {
  if (imgSrc === undefined) return
  const pixivUrlPrefix = "https://pixiv,net/artworks/"
  const searchImgIdRegex = new RegExp("/images/([0-9]*)_.*")
  const imgId = imgSrc.match(searchImgIdRegex)
  return pixivUrlPrefix + imgId
}
</script>

<template>
  <div class="w-380px h-380px bg-white m-5 rounded-xl" @click="handleClick(name,likes,imgSrc)">
    <div class="grip gap-3 p-4">
      <div class="overflow-hidden rounded-xl">
        <el-image class="w-350px h-200px" :src="imgSrc" alt="bg"></el-image>
      </div>
      <div class="grid grid-cols-3 gap-3 mt-4">
        <div class="bg-gray-3 rounded-xl h-80px"></div>
        <div class="bg-gray-2 rounded-xl h-80px"></div>
        <div class="bg-gray-1 rounded-xl h-80px"></div>
      </div>
      <div class="flex justify-between">
        <div>{{ name }}</div>
        <div>
          <span>{{ likes }}</span>
          <span>❤️</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>