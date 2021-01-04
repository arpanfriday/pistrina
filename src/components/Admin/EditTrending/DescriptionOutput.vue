<template>
    <p class="card-text">
        {{ description }}
    </p>
</template>

<script>
export default {
    name: "DescriptionOutput",
    props: {
        description: [String]
    }
}
</script>

<style scoped>

</style>