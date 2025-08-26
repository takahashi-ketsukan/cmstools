<template>
  <div v-if="response?.details">
    <h2>{{ response.details.subject }}</h2>

    <img :src="response.details.ext_1?.url" width="800">

    <div>{{ response.details.ext_2 }}</div>

    <!-- ext_3 はファイルなのでリンクにする -->
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

<script setup>
const config = useRuntimeConfig()

const { data: response, error } = await useFetch(
  `${config.public.apiBase}/rcms-api/3/service/7`,
  {
    
  }
)

console.log("API Response:", response.value)
</script>