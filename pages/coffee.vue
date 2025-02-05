<script setup lang="ts">
import {ElNotification} from "element-plus";
import {includes} from "lodash-es";

const dialogVisible = ref(false);
import {useCoffeeData, useCoffeeDataLabel} from "~/composables/useCoffeeData"

const coffeeData = useCoffeeData()
const coffeeDataLabel = useCoffeeDataLabel()
const addFormData = reactive<CoffeeData>({
  id: 0,
  brand: "",
  name: "",
  maxCaffeine: 0,
  minCaffeine: 0
})

const selectionData = ref<CoffeeData[]>([])
const handleSelectionChange = (data: CoffeeData[]) => {
  selectionData.value = data
}

const handleDeleteData = () => {
  ElMessageBox.confirm("确定删除?", "删除确认", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  }).then(() => {
    if (selectionData.value.length === 0) {
      ElMessage.error("请先选择数据")
      return
    }
    const ids = selectionData.value.map(item => item.id)
    coffeeData.value = coffeeData.value.filter(item => !includes(ids, item.id))
    ElNotification.success(`删除成功~ 已成功删除${ids.length}条数据`)
  }).catch(() => {
    ElMessage.info("操作已取消")
  })
}


const resetAddFromData = () => {
  addFormData.brand = ""
  addFormData.name = ""
  addFormData.minCaffeine = 0
  addFormData.maxCaffeine = 0
}

const handleAddData = () => {
  const endId = coffeeData.value[coffeeData.value.length - 1].id
  const newItem = {...addFormData, id: endId + 1}
  coffeeData.value.push(newItem)
  resetAddFromData()
  dialogVisible.value = false
  ElNotification.success('数据添加成功')
}


</script>

<template>
  <div>
    <el-image src="images/126854741_p0.png" class="w-full h-full fixed -z-10" fit="cover"></el-image>
    <el-dialog v-model="dialogVisible" title="添加数据">
      <el-form :model="addFormData" label-width="auto" class="px-4">
        <el-form-item label="品牌" prop="band"
                      :rules="[{ required: true, message: '请输入品牌', trigger: 'blur' },]">
          <el-input v-model="addFormData.brand"/>
        </el-form-item>
        <el-form-item label="名称" prop="name"
                      :rules="[{ required: true, message: '请输入名称', trigger: 'blur' },]">
          <el-input v-model="addFormData.name"/>
        </el-form-item>
        <el-form-item label="最小咖啡因" prop="minCaffeine"
                      :rules="[{ required: true, message: '请输入最小咖啡因', trigger: 'blur' },]">
          <el-input v-model="addFormData.minCaffeine"/>
        </el-form-item>
        <el-form-item label="最大咖啡因" prop="maxCaffeine"
                      :rules="[{ required: true, message: '请输入最大咖啡因', trigger: 'blur' },]">
          <el-input v-model="addFormData.maxCaffeine"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleAddData">
            确认添加
          </el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <div class="flex justify-center items-center w-full h-full">
      <el-card>
        <div>
          <el-button @click="dialogVisible = true">添加数据</el-button>
          <el-button @click="handleDeleteData">删除数据</el-button>
        </div>
        <el-table :data="coffeeData" stripe border @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="50"/>
          <el-table-column type="index" width="50"/>
          <el-table-column v-for="item in coffeeDataLabel" :key="item.key" :prop="item.key" :label="item.name"
                           :width="item.width || ''"/>
          >
        </el-table>
      </el-card>
    </div>

  </div>
</template>

<style scoped>

</style>
