<template>
  <div v-if="response">
    <h2>{{ response.details.subject }}</h2>
    <img :src="response.details.ext_1?.url" width="800" />
    <div>{{ response.details.ext_2 }}</div>
    <div>
      <a :href="response.details.ext_3?.url" target="_blank">
        ファイルをダウンロード
      </a>
    </div>
  </div>
  <div v-else>
    読み込み中...
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"

const config = useRuntimeConfig()
const response = ref<any>(null)

onMounted(async () => {
  const { data, error } = await useFetch(
    `${config.public.apiBase}/rcms-api/3/service/7`
  )
  response.value = data.value
  console.log("API Response:", data.value)
  console.log("Error:", error.value)
})
</script>