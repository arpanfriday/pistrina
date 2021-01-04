<template>
    <div class="col-sm-12">
        <div class="row">
            <h2>Edit Trending items:</h2>
        </div>
        <div class="row">
            <div class="col-sm-3 card">
                <img id="trendingImage1"  alt="card1" style="height: 600px" >
                <div class="card-body">
                    <pp-title-output :title="title1"></pp-title-output>
                    <hr class="card-line-divider">
                    <pp-description-output :description="description1"></pp-description-output>
                </div>
                <hr>
                <pp-image-upload @imageNameChanged="displayImage1=$event" image-i-d="image1"></pp-image-upload>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <pp-title-input @displayTextChanged="title1=$event"></pp-title-input>
                            <pp-description-input @displayTextChanged="description1=$event"></pp-description-input>
                        </div>
                    </div>
                </div>
                <button class="btn btn-secondary">Save</button>
            </div>
<!--            <div class="col-sm-3 card">-->
<!--                <img id="trendingImage2"  alt="card1" style="height: 600px" >-->
<!--                <div class="card-body">-->
<!--                    <pp-title-output :title="title2"></pp-title-output>-->
<!--                    <hr class="card-line-divider">-->
<!--                    <pp-description-output :description="description2"></pp-description-output>-->
<!--                </div>-->
<!--                <hr>-->
<!--                <pp-image-upload @imageNameChanged="displayImage2=$event"></pp-image-upload>-->
<!--                <div class="row">-->
<!--                    <div class="col-sm-12">-->
<!--                        <div class="form-group">-->
<!--                            <pp-title-input @displayTextChanged="title2=$event"></pp-title-input>-->
<!--                            <pp-description-input @displayTextChanged="description2=$event"></pp-description-input>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <button class="btn btn-secondary">Save</button>-->
<!--            </div>-->
<!--            <div class="col-sm-3 card">-->
<!--                <img id="trendingImage3"  alt="card1" style="height: 600px" >-->
<!--                <div class="card-body">-->
<!--                    <pp-title-output :title="title3"></pp-title-output>-->
<!--                    <hr class="card-line-divider">-->
<!--                    <pp-description-output :description="description3"></pp-description-output>-->
<!--                </div>-->
<!--                <hr>-->
<!--                <pp-image-upload @imageNameChanged="displayImage3=$event"></pp-image-upload>-->
<!--                <div class="row">-->
<!--                    <div class="col-sm-12">-->
<!--                        <div class="form-group">-->
<!--                            <pp-title-input @displayTextChanged="title3=$event"></pp-title-input>-->
<!--                            <pp-description-input @displayTextChanged="description3=$event"></pp-description-input>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <button class="btn btn-secondary">Save</button>-->
<!--            </div>-->
<!--            <div class="col-sm-3 card">-->
<!--                <img id="trendingImage4"  alt="card1" style="height: 600px" >-->
<!--                <div class="card-body">-->
<!--                    <pp-title-output :title="title4"></pp-title-output>-->
<!--                    <hr class="card-line-divider">-->
<!--                    <pp-description-output :description="description4"></pp-description-output>-->
<!--                </div>-->
<!--                <hr>-->
<!--                <pp-image-upload @imageNameChanged="displayImage4=$event"></pp-image-upload>-->
<!--                <div class="row">-->
<!--                    <div class="col-sm-12">-->
<!--                        <div class="form-group">-->
<!--                            <pp-title-input @displayTextChanged="title4=$event"></pp-title-input>-->
<!--                            <pp-description-input @displayTextChanged="description4=$event"></pp-description-input>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <button class="btn btn-secondary">Save</button>-->
<!--            </div>>-->
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import ImageUpload from "@/components/Admin/EditTrending/ImageUpload";
import TitleInput from "@/components/Admin/EditTrending/TitleInput";
import TitleOutput from "@/components/Admin/EditTrending/TitleOutput";
import DescriptionInput from "@/components/Admin/EditTrending/DescriptionInput";
import DescriptionOutput from "@/components/Admin/EditTrending/DescriptionOutput";

export default {
    name: "AddToTrending",
    data() {
        return {
            title1: '',
            description1: '',
            displayImage1: '',
            title2: '',
            description2: '',
            displayImage2: '',
            title3: '',
            description3: '',
            displayImage3: '',
            title4: '',
            description4: '',
            displayImage4: '',
        }
    },
    components: {
        ppImageUpload: ImageUpload,
        ppTitleInput: TitleInput,
        ppTitleOutput: TitleOutput,
        ppDescriptionInput: DescriptionInput,
        ppDescriptionOutput: DescriptionOutput
    },
    watch: {
        displayImage1() {
            let storageRef = firebase.storage().ref('trendingAdmin/' + this.displayImage1)
            storageRef.getDownloadURL().then(function (url){
                let img = document.getElementById('trendingImage1')
                img.src = url
            })
        },
        // displayImage2() {
        //     let storageRef = firebase.storage().ref('trendingAdmin/' + this.displayImage2)
        //     storageRef.getDownloadURL().then(function (url){
        //         let img = document.getElementById('trendingImage2')
        //         img.src = url
        //     })
        // },
        // displayImage3() {
        //     let storageRef = firebase.storage().ref('trendingAdmin/' + this.displayImage3)
        //     storageRef.getDownloadURL().then(function (url){
        //         let img = document.getElementById('trendingImage3')
        //         img.src = url
        //     })
        // },
        // displayImage4() {
        //     let storageRef = firebase.storage().ref('trendingAdmin/' + this.displayImage4)
        //     storageRef.getDownloadURL().then(function (url){
        //         let img = document.getElementById('trendingImage4')
        //         img.src = url
        //     })
        // }
    }
}
</script>

<style scoped>

#trendingImage1,
#trendingImage2,
#trendingImage3,
#trendingImage4 {
    height: fit-content;
}

.background img {
    height: 30rem;
}

.card-body {
    background-color: rgba(63, 39, 26, 0.904);
    color: white;
}

.card {
    border: none;
}

.card img {
    /* width: 100%;  */
    transition: 0.3s all ease-in-out;
}

.card:hover img {
    transform: scale(1.025);
    box-shadow: 1px 1px 10px black;
}

.card-line-divider {
    background-color: rgb(97, 82, 62);
}
</style>