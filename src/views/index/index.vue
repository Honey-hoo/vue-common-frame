<template>
    <el-container class="index-wrapper">
        <el-header>
            <!-- 公共头部 -->
            <common-header></common-header>
        </el-header>
        <el-container class="main-container">
            <!-- 公共侧边栏 -->
            <side-bar></side-bar>
            <!-- 内容区域 -->
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script src="./index.js"></script>

<style lang="less">
    @import url('./index.css');
</style>