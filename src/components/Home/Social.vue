<template>
    <div class="container-fluid">
        <div class="row text-center padding">
            <div style="font-family: 'Rye' , cursive;
                         font-size: 20px;
                         padding-top: 10px;
                         color: rgb(22, 18, 16);
                         width: 100%;">
                <h1 style="text-align: center;">
                    Social
                </h1>
                <hr>
            </div>
            <div class="col-12 social padding">
                <a href="#"><i class=" fab fa-facebook"></i></a>
                <a href="#"><i class=" fab fa-twitter"></i></a>
                <a href="#"><i class=" fab fa-google-plus-g"></i></a>
                <a href="#"><i class=" fab fa-instagram"></i></a>
                <a href="#"><i class=" fab fa-youtube"></i></a>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Social"
}
</script>

<style scoped>
.social a {
    font-size: 4.5em;
    padding: 3rem;
}

.fa-facebook:hover {
    color: #3b5998;
}

.fa-twitter:hover {
    color: #00aced;
}

.fa-google-plus-g:hover {
    color: #dd4b39;
}

.fa-instagram:hover {
    color: #517fa4;
}

.fa-youtube:hover {
    color: #bb0000;
}

.fa-facebook,
.fa-twitter,
.fa-google-plus-g,
.fa-instagram,
.fa-youtube {
    color: #553a2a;
}
</style>