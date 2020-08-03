<template>
    <div class="container-fluid">
        <div style="font-family: 'Rye', cursive;
                    font-size: 20px;
                    padding-top: 10px;
                    color: rgb(22, 18, 16);">
            <h1>
                Trending items . . .
            </h1>
        </div>
        <div class="row background">
            <div class="col-md-3">
                <ab-trending-cards image-location="@/assets/cards/cake-roasted-berry.jpg"></ab-trending-cards>
                <div class="card">
                    <img src="../../assets/trendingItems/cake-roasted-berry.jpg" alt="card1">
                    <div class="card-body">
                        <h4 class="card-title">Roasted Cherry Choco Truffle</h4>
                        <hr class="card-line-divider">
                        <p class="card-text">
                            Topped with Sweeden roasted cherry on the delicious
                            Belgian chocolate
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <img src="../../assets/trendingItems/cake-strawberry.jpg" alt="card2">
                    <div class="card-body">
                        <h4 class="card-title">Fluffy ChocoCaramel Cake</h4>
                        <hr class="card-line-divider">
                        <p class="card-text">
                            Essenced with soft taste of caramel and the blast of chocolate,
                            and topped with strawberry
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <img src="../../assets/trendingItems/chocolate-brownei.jpg" alt="card3">
                    <div class="card-body">
                        <h4 class="card-title">Caramel Chocolate Brownie</h4>
                        <hr class="card-line-divider">
                        <p class="card-text">
                            Chocolate Brownie with Belgian caramel that melts inside
                            the mouth instantly
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <img src="../../assets/trendingItems/cupcakes.jpg" alt="card4">
                    <div class="card-body">
                        <h4 class="card-title">Cupcake Queen</h4>
                        <hr class="card-line-divider">
                        <p class="card-text">
                            French chocolate cake with saunf toppings and Belgian
                            chocolate filling inside.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TrendingItems"
}
</script>

<style scoped>
.background {
    background-color: rgb(22, 18, 16);
    padding: 20px 0px;
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

.card-title {
    font-family: 'Times New Roman', Times, serif;
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