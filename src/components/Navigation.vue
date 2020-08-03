<template>
    <!-- NAVIGATION -->
    <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top" id="navigation-bar">
        <div class="container-fluid">
            <a href="#" class="navbar-brand">
                <img src="../../src/assets/pistrinaLogo.png" alt="logo" style="height: 70px; width: auto">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active"><a href="#" class="nav-link" style="text-align: left">Home</a></li>
                    <li class="nav-item"><a href="#" class="nav-link" style="text-align: left">Menu</a></li>
                    <li class="nav-item"><a href="#" class="nav-link" style="text-align: left">Founders</a></li>
                    <li class="nav-item"><a href="#" class="nav-link" style="text-align: left">Connect</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navigation"
}
</script>

<style scoped>
#navigation-bar {
    /*background-color: rgb(71, 32, 32);*/
    /*background-blend-mode: overlay;*/
    /*height: 20px;*/
}

.nav-item {
    font-size: large;
    padding: 0;
}
</style>