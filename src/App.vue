<template>
    <div id="app">
        <pp-navigation></pp-navigation>
        <pp-home></pp-home>
<!--        <pp-admin></pp-admin>-->
        <pp-footer-info></pp-footer-info>
    </div>
</template>

<script>
import './firebaseConfig'
import Navigation from "@/components/Navigation";
import Home from "@/components/Home";
import FooterInfo from "@/components/FooterInfo";
// import Admin from "@/components/Admin";

export default {
    name: 'App',
    components: {
        ppNavigation: Navigation,
        ppHome: Home,
        // ppAdmin: Admin,
        ppFooterInfo: FooterInfo
    }
}
</script>

<style>
#app {
    width: 100%;
    background-color: rgba(130, 111, 94, 0.9);
}
</style>
