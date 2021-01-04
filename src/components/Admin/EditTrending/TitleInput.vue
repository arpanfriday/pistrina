<template>
    <div class="row">
        <div class="col-sm-12">
            <div class="form-group">
                <label>
                    <h4>Enter the title:</h4>
                    <input class="form-control input-lg"
                           placeholder="Title"
                           type="text"
                           v-model="title"
                           @keyup="titleChanged">
                </label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TextInput",
    data() {
        return {
            title: ""
        }
    },
    methods: {
        titleChanged: function () {
            this.$emit('displayTextChanged', this.title)
        }
    }
}
</script>

<style scoped>

</style>