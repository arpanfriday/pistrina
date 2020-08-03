<template>
    <footer>
        <div class="container-fluid">
            <div class="row text-center"
                 style="font-size: x-large;
                                                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">
                <div class="col-md-4">
                    <img src="../../src/assets/pistrinaLogo.png" alt="logo">
                    <p>555-555-5555</p>
                    <p>emailaddress@email.com</p>
                    <p>100 Street Name</p>
                    <p>City, State, 00000</p>
                </div>
                <div class="col-md-4">
                    <hr class="light">
                    <h5 style="font-size: x-large;">Our Hours</h5>
                    <hr class="light">
                    <p>Monday: 9am - 5pm</p>
                    <p>Saturday: 10am - 4pm</p>
                    <p>Sunday: Closed</p>
                </div>
                <div class="col-md-4">
                    <hr class="light">
                    <h5 style="font-size: x-large;">Service areas</h5>
                    <hr class="light">
                    <p>City, State, PIN</p>
                    <p>City, State, PIN</p>
                    <p>City, State, PIN</p>
                    <p>City, State, PIN</p>
                </div>
                <div class="col-12">
                    <hr class="light-100">
                    <h5>&copy; PISTRINA.COM</h5>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
name: "FooterInfo"
}
</script>

<style scoped>
footer {
    background-color: #4b24248a;
    color: #d5d5d5;
    padding-top: 2rem;
}

footer img {
    height: 70px;
    width: auto;
    margin-bottom: 20px;
}

footer a {
    color: #d5d5d5;
}
</style>