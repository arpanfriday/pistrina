<template>
<div class="row" id="admin-page">
    <div class="col-sm-12">
        <h1 style="font-family: 'Rye', cursive, cursive; text-align: center">
            ADMIN
        </h1>
        <pp-add-to-trending></pp-add-to-trending>
    </div>
</div>
</template>

<script>
import AddToTrending from "@/components/Admin/AddToTrending";

export default {
name: "Admin",
    components: {
    ppAddToTrending: AddToTrending
    }
}
</script>

<style scoped>
#admin-page {
    border: 1px solid black;
}
</style>