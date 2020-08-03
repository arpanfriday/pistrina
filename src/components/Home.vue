<template>
    <div class="container-lg" id="home-page">
        <pp-slider></pp-slider>
        <hr>
        <v-parallax
                height="300"
                src="https://arshi-bakery.s3.ap-south-1.amazonaws.com/muffin.jpg"
        >
            <v-layout align-start justify-center column>
                <div class="fixed-text">
                    <h1>Hello visitors . . .</h1>
                    <hr style="background-color: white;">
                    <P>
                        Founded by two cook-oholics <i>Andy</i> and <i>Lucy</i>, <strong><i>PISTRINA</i></strong>
                        is focused at providing the freshest and best quality bakery items rght at your table. We
                        came to observe that people after coming to restaurants have to wait for the bakery of the prefered
                        item
                        to be made fresh and then served. This takes up a lot of time of the customers and being in the 21st
                        century,
                        time has become most expensive of all.
                    </P>
                    <P>
                        So come to PISTRINA, prebooking your order, and enjoy the best ambiance and fulfill your apetite,
                        in no wastage of time.
                    </P>
                </div>
            </v-layout>
        </v-parallax>
        <hr>
        <pp-trending-items></pp-trending-items>
        <hr>
        <pp-founders></pp-founders>
        <hr>
        <pp-social></pp-social>
    </div>
</template>

<script>
import Slider from "@/components/Home/Slider";
import TrendingItems from "@/components/Home/TrendingItems";
import Founders from "@/components/Home/Founders";
import Social from "@/components/Home/Social";

export default {
    name: "Home",
    components: {
        ppSlider: Slider,
        ppTrendingItems: TrendingItems,
        ppFounders: Founders,
        ppSocial: Social
    }
}
</script>

<style scoped>
#home-page {
    width: 100%;
}
.fixed-text {
    padding: 10px 20px;
    font-family: 'Rye', cursive;
    color: rgba(255, 255, 255, 0.822);
    /*background-color: rgba(0, 0, 0, 0.6);*/
    font-weight: 500;
    position: relative;
    text-align: justify;
    text-shadow: 1px 1px 10px black;
}

.fixed-text p {
    font-family: 'Amita', cursive;
    font-size: 30px;
}
/*@media (max-width: 992px) {*/
/*    .social a {*/
/*        font-size: 4em;*/
/*        padding: 2rem;*/
/*    }*/
/*}*/

/*@media (max-width: 768px) {*/
/*    .carousel-caption {*/
/*        position: absolute;*/
/*        top: 45%;*/
/*    }*/

/*    .carousel-caption h1 {*/
/*        font-size: 350%*/
/*    }*/

/*    .carousel-caption h3 {*/
/*        font-size: 140%;*/
/*        font-weight: 400;*/
/*        padding-bottom: .2rem;*/
/*    }*/

/*    .carouse-caption .btn {*/
/*        font-size: 95%;*/
/*        padding: 8px 14px;*/
/*    }*/

/*    .display-4 {*/
/*        font-size: 200%;*/
/*    }*/

/*    .social a {*/
/*        font-size: 2.5em;*/
/*        padding: 1.2rem;*/
/*    }*/
/*}*/

/*@media (max-width: 576px) {*/
/*    .carousel-caption {*/
/*        position: absolute;*/
/*        top: 40%;*/
/*    }*/

/*    .carousel-caption h1 {*/
/*        font-size: 250%*/
/*    }*/

/*    .carousel-caption h3 {*/
/*        font-size: 110%;*/
/*    }*/

/*    .carouse-caption .btn {*/
/*        font-size: 90%;*/
/*        padding: 4px 8px;*/
/*    }*/

/*    .carousel-indicators {*/
/*        display: none;*/
/*    }*/

/*    .display-4 {*/
/*        font-size: 160%;*/
/*    }*/

/*    .social a {*/
/*        font-size: 2em;*/
/*        padding: 0.7rem;*/
/*    }*/
/*}*/


/*--- Fixed Background Image --*/

</style>