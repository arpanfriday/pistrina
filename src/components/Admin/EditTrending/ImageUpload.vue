<template>
    <div class="row">
        <div class="col-sm-12">
            <h4>Edit Image:</h4>
            <div class="form-group">
                <input @change="uploadFile" class="form-control-file" id="fileUpload" type="file">
            </div>
            <img src="" alt="preview" :id=imageID>
            <button id="setImageButton"
                    style="display: none; width: inherit; color: white"
                    type="button"
                    class="btn btn-secondary"
                    @click="setImage">Set Image
            </button>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
let self = window.this;
export default {

    name: "ImageUpload",
    props: {
        imageID: String
    },
    data() {
        return {
            file: '',
        }
    },
    methods: {
        uploadFile(event) {
            console.log(event)
            this.file = event.target.files[0]
            let storageRef = firebase.storage().ref('trendingAdmin/' + this.file.name)
            let upload = storageRef.put(this.file)

            let reader = new FileReader()
            reader.readAsDataURL(this.file)
            console.log(reader)

            reader.onload = function (e) {
                console.log("Hello ... " + this.imageID)
                document.getElementById(self.imageID).src = e.target.result
                console.log(e.target.result)
            }

            upload.on('state_changed', function (snapshot){
                if(snapshot.bytesTransferred === snapshot.totalBytes) {
                    document.getElementById('setImageButton').style.display = 'initial'
                }
            })
        },
        setImage(){
            this.$emit('imageNameChanged', this.file.name)
        }
    }
}
</script>

<style scoped>
#image {
    width: inherit;
}
</style>