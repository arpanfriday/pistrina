<template>
    <div class="carousel slide" data-ride="carousel" style="height: 90vh;">
        <ul class="carousel-indicators">
            <li data-target="#slides" data-slide-to="0" class="active"></li>
            <li data-target="#slides" data-slide-to="1"></li>
            <li data-target="#slides" data-slide-to="2"></li>
        </ul>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../../assets/intro/chocolate-cupcakes.jpg" alt="slide1">
                <div class="carousel-caption">
                    <h1 class="display-2">WELCOME</h1>
                    <hr>
                    <h3>
                        Welcome to Pistrina Bakeshop, a French-inspired pastry shop located in Park Street,
                        at the Krog New Market, in Summerhill and at various farmers markets around Kolkata.
                    </h3>
                    <hr>
                    <button type="button" class="btn btn-outline-light btn-lg">Go to Menu</button>
                    <button type="button" class="btn btn-primary btn-lg">Contact Us</button>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../../assets/intro/cake.jpg" alt="slide2">
                <div class="carousel-caption">
                    <h1 class="display-2">TO</h1>
                    <hr>
                    <h3>
                        We bake ridiculously yummy cupcakes, cakes & sweet
                        treats using only 100% vegan and gluten free ingredients.
                    </h3>
                    <hr>
                    <!-- <button type="button" class="btn btn-outline-light btn-lg">Go to Menu</button>
                    <button type="button" class="btn btn-primary btn-lg">Contact Us</button> -->
                </div>
            </div>
            <div class="carousel-item">
                <img src="../../assets/intro/muffin.jpg" alt="slide3">
                <div class="carousel-caption">
                    <h1 class="display-2">PISTRINA</h1>
                    <hr>
                    <h3>
                        The one stop stop for all your delightful dishes and bakery items.
                        Order now and get it at your table at your preferred time.
                    </h3>
                    <hr>
                    <!-- <button type="button" class="btn btn-outline-light btn-lg">Go to Menu</button>
                    <button type="button" class="btn btn-primary btn-lg">Contact Us</button> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Slider"
}
</script>

<style scoped>

.carousel {
    height: 100%;
    width: 100%;
    overflow: hidden;
}

.carousel-inner img {
    width: 100%;
    height: 100%;
}

.carousel-caption {
    font-family: Arial, Helvetica, sans-serif;
    top: 50%;
    transform: translateY(-60%);
    text-shadow: 1px 1px 10px black;
    position: absolute;
}

.btn-primary{
    background-color: rgba(71, 32, 32, 0.849);
    border: 1px solid rgb(46, 20, 20);
}

.btn-primary:hover {
    background-color: rgb(63, 52, 52);
    border: 1px solid rgb(88, 88, 88);
    box-shadow: 2px 2px 10px gray;
}
</style>