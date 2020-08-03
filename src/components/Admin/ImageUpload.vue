<template>
        <div class="row">
            <div class="col-sm-12">
                <h4>Upload Image:</h4>
                <div class="form-group">
                    <input type="file" class="form-control-file" id="fileUpload" @change="uploadFile">
                </div>
                <progress value="0" max="100" id="progressBar"></progress>
                <br>
                <img src="" alt="" id="image">
                <button type="button" id="setImageButton" style="display: none" @click="setImage">Set Image</button>
            </div>
        </div>
</template>

<script>
export default {
name: "ImageUpload"
}
</script>

<style scoped>

</style>