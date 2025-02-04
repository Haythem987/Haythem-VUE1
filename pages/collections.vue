<script setup lang="ts">
export interface CollectionItems {
  id: number
  name: string
  likes: number
  imgSrc: string
}

const tags = reactive<string[]>([
      "Profile",
      "Home",
      "About",
      "Contact",
      "Blog",
      "Gallery",
    ]
)
const itemImgPathPrefix = "/images/"
const collections = reactive<CollectionItems[]>([
  {id: 1, name: "卡片1", likes: 4444, imgSrc: "39930673_p0.jpg"},
  {id: 2, name: "卡片2", likes: 32323, imgSrc: "64337772_p0.jpg"},
  {id: 3, name: "卡片3", likes: 121210, imgSrc: "68124087_p0.jpg"},
  {id: 4, name: "卡片4", likes: 220, imgSrc: "69227626_p0.jpg"},
  {id: 5, name: "卡片5", likes: 22220, imgSrc: "69580290_p0.jpg"},
  {id: 6, name: "卡片6", likes: 2222220, imgSrc: "70022444_p0.jpg"},
])
const handleTagsClick = (text: string) => {
  console.log(`你点击了标签，标签名为：${text}`)
}

</script>

<template>
  <el-image class="w-full h-full -z-10 fixed" src="/images/39930673_p0.jpg" alt="bg"></el-image>
  <div class="flex w-full h-screen justify-center items-center">
    <div class="bg-white bg-op-50 rounded-xl w-70% h-70% shadow-xl shadow-gray-6 shadow-op-20 fixed">
      <div class="text-center font-bold text-2xl mb-4">Popular collections</div>
      <div class="flex">
        <div class="p-4">
          <div @click="handleTagsClick(item)" v-for="item in tags" :key="item"
               class="bg-op-80 inline-block px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer transition-colors duration-200 mr-2">
            {{ item }}
          </div>
          <div class="flex flex-wrap overflow-y-auto max-h-400px justify-center">
            <CollectionsCard v-for="item in collections" :key="item.id" :id="item.id" :name="item.name"
                             :likes="item.likes" :imgSrc="itemImgPathPrefix+item.imgSrc">

            </CollectionsCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>