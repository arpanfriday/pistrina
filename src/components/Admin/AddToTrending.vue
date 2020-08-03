<template>
    <div class="col-sm-12">
        <div class="row">
            <div class="col-sm-6 card">
                <h2 class="text-center">Edit Trending items:</h2>

<!--                TODO: add selector for which trending item to edit-->

                <pp-image-upload></pp-image-upload>
                <label>
                    <h4>Enter the title:</h4>
                    <input type="text"
                           placeholder="Title"
                           class="form-control" style="width: 25em">
                </label>
                <pp-text-input></pp-text-input>
            </div>
        </div>
    </div>
</template>

<script>
import ImageUpload from "@/components/Admin/ImageUpload";
import TextInput from "@/components/Admin/TextInput";

export default {
    name: "AddToTrending",
    components: {
        ppImageUpload: ImageUpload,
        ppTextInput: TextInput
    }
}
</script>

<style scoped>
#addToTrending {
    border: 5px solid black;
}
</style>