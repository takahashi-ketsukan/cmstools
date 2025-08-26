<template>
    <div>
        <img :src="response.details.ext_1.url" width="800">
        <div>{{ response.details.ext_2 }}</div>
        <div>{{ response.details.ext_3 }}</div>

    </div>
    <hr>
    <h1>test</h1>
</template>

<script setup>
const config = useRuntimeConfig();

const { data: response } = await useFetch(
    `${config.public.apiBase}/rcms-api/3/service/7`,
    {
        credentials: 'include',
    }
);
console.log("API Response:", response.value)
</script>