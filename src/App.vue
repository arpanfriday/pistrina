<template>
    <div id="app">
        <pp-navigation></pp-navigation>
        <pp-home></pp-home>
        <pp-footer-info></pp-footer-info>
    </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Home from "@/components/Home";
import FooterInfo from "@/components/FooterInfo";

export default {
    name: 'App',
    components: {
        ppHome: Home,
        ppNavigation: Navigation,
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
