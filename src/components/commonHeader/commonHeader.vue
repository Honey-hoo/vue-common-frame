<template>
    <div class="common-header-wrapper">
        <img class="logo" src="/static/image/logo-html5.svg" alt="">
        <span class="title">HTML5-VUE</span>
        <div class="right logout" @click="Logout">
            <i class="h-icon logout-icon"></i>
            <span>退出</span>
        </div>
    </div>
</template>

<script src="./commonHeader.js"></script>

<style lang="less">
    @import url('./commonHeader.css');
</style>