<template>
    <h4 class="card-title">{{ title }}</h4>
</template>

<script>
export default {
    name: "TextOutput",
    props: {
        title: [String],
    }
}
</script>

<style scoped>

.card-title {
    font-family: 'Times New Roman', Times, serif;
}
</style>