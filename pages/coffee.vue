<script setup lang="ts">
const dialogVisible = ref(false);
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
      .then(() => {
        done()
      })
      .catch(() => {
      })
}
</script>

<template>
  <el-container class="justify-center items-center w-screen h-screen">
    <el-image src="images/126854741_p0.png" class="w-full h-full fixed -z-10" fit="cover"></el-image>
    <el-dialog v-model="dialogVisible"
               title="Tips"
               width="500"
               :before-close="handleClose" class="fixed bg-black">
      1212
    </el-dialog>

  </el-container>
</template>

<style scoped>

</style>
