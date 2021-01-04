<template>
    <label>
        <h4>Edit Description:</h4>
        <textarea class="form-control"
                  cols="50"
                  placeholder="Add text here!"
                  rows="4"
                  v-model="description"
                  @keyup="descriptionChanged">
        </textarea>
    </label>
</template>

<script>
export default {
    name: "DescriptionInput",
    data() {
        return{
            description: ''
        }
    },
    methods: {
        descriptionChanged: function () {
            this.$emit('displayTextChanged', this.description)
        }
    }
}
</script>

<style scoped>

</style>