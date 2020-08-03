<template>
    <div class="container-fluid">
        <div style="font-family: 'Rye', cursive;
                    font-size: 20px;
                    padding-top: 10px;
                    color: rgb(22, 18, 16);">
            <h1 style="text-align: center;">
                The Founders
            </h1>
        </div>
        <div class="row row-founder">
            <div class="col-lg-6 col-founder-item">
                <img src="../../assets/founder/Lucy.jpg" alt="lucy">
            </div>
            <div class="col-lg-6 col-founder-item">
                <h1>Lucy</h1>
                <hr>
                <p>Lucy grew up in London but has also lived and studied in
                    Geneva, Paris and Madrid. After gaining a European Business
                    degree she decided to develop her interest in Indian cookery
                    and, in particular, making her native food fresher, lighter and
                    simpler to cook.
                </p>
                <p>
                    She has worked across the world in innovative restaurants such
                    as Café Spice in New York, the Mondrian Hotel in Los Angeles,
                    and the Park Royal Hotel’s Indian restaurant in New Delhi, but
                    her real love is delicious and stylish food that is simple
                    enough to cook at home. She challenges fiercely the assertion
                    that Indian food is a special occasion meal and is determined
                    to make ‘cooking an Indian’ as common as rustling up a stir-fry.
                </p>
            </div>
        </div>

        <div class="row row-founder">
            <div class="col-lg-6 col-founder-item">
                <h1 style="text-align: right;">Andy</h1>
                <hr>
                <p style="text-align: right;">
                    Born in Mumbai, India in 1967, Vineet Bhatia got early culinary
                    inspiration from his mother, whom he describes as ‘an excellent
                    cook with a fantastic imagination’. He says of his home city:
                    ‘The wonderful thing about growing up in Bombay [Mumbai] was
                    the eclectic influences all around you. It is a melting pot of
                    culinary delights from all over the many different regions of
                    India.’
                </p>
                <p style="text-align: right;">
                    As a teenager he was fascinated by flying and in hopes of
                    joining the Air Force, worked hard to pass the national defence
                    exam. Failing the physical assessment was substantial blow, and
                    in an attempt to recover he decided to throw himself into a
                    completely different pursuit – cooking.
                </p>
            </div>
            <div class="col-lg-6 col-founder-item">
                <img src="../../assets/founder/Andy.jpg" alt="andy">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Founders"
}
</script>

<style scoped>
.col-founder-item {
    background-color: rgb(73, 48, 35);
}

.col-founder-item img {
    width: 100%;
    margin: 10px 0px;
    transition: 0.3s all ease-in-out;
}

.col-founder-item:hover img {
    transform: scale(1.025);
    box-shadow: 1px 1px 10px black;
}

.col-founder-item h1 {
    font-family: 'Kaushan Script', cursive;
    font-size: 40px;
    margin: 10px 0;
    color: aliceblue;
}

.col-founder-item hr {
    background-color: rgba(255, 255, 255, 0.432);
}

.col-founder-item p {
    font-family: 'Satisfy', cursive;
    text-align: justify;
    color: rgba(255, 255, 255, 0.747);
    font-size: 28px;
}

.row-founder {
    border: 3px dashed rgb(77, 58, 36);
    padding: 10px;
}
</style>