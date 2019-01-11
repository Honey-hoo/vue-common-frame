<template>
    <div class="side-bar-wrapper">
        <el-aside class="index-aside" width="150px">
            <el-menu class="aside-menu"
                     ref="sideBar"
                     :default-active="onRoutes"
                     text-color="#666666"
                     active-text-color="#2FC995"
                     background-color="#ffffff"
                     unique-opened
                     router
                     menu-trigger="click">
                <template v-for="(item,index) in menuList">
                    <template v-if="item.subs && item.subs.length">
                        <el-submenu :index="item.index"
                                    :key="item.index"
                                    :show-timeout="0"
                                    :hide-timeout="0">
                            <template slot="title">
                                <i class="nav-icon h-icon" :class="item.icon"></i>
                                <span> {{item.title}}</span>
                            </template>
                            <el-menu-item v-for="(sub,idx) in item.subs" :key="idx" :index="sub.index">{{sub.title}}</el-menu-item>
                        </el-submenu>
                    </template>
                    <template v-else>
                        <el-menu-item :index="item.route"
                                      :key="item.route">
                            <i class="nav-icon h-icon" :class="item.icon"></i>
                            <span class="title"> {{item.title}}</span>
                        </el-menu-item>
                    </template>
                </template>
            </el-menu>
        </el-aside>
    </div>
</template>

<script src="./sideBar.js"></script>

<style lang="less">
    @import url('./sideBar.css');
</style>