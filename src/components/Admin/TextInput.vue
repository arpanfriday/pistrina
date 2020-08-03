<template>
    <div class="row">
        <div class="col-sm-12">
            <div class="form-group">
                <label>
                    <h4>Edit Description:</h4>
                    <textarea cols="50" rows="4"
                              class="form-control"
                              placeholder="Add text here!"
                              v-model="textBoxInput"
                              @keyup="textChanged">
                    </textarea>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: "TextInput"
}
</script>

<style scoped>

</style>