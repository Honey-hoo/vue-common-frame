<template>
  <div class="home-wrapper">首页
    <hr>
    <custom-table
      ref="customTable"
      :settingOpt="settingOpt"
      @updateTable="updateTable"
      @setTable="setTable"
      @select="select"
      @selectAll="selectAll"
      @selectionChange="selectionChange"
      @cellMouseEnter="cellMouseEnter"
      @cellMouseLeave="cellMouseLeave"
      @cellClick="cellClick"
      @cellDbclick="cellDbclick"
      @rowClick="rowClick"
      @rowContextmenu="rowContextmenu"
      @rowDblclick="rowDblclick"
      @headerClick="headerClick"
      @headerContextMenu="headerContextMenu"
      @sortChange="sortChange"
      @currentChange="currentChange"
      @headerDragend="headerDragend"
      @hiddenPanel="hiddenPanel"
    ></custom-table>
  </div>
</template>

<script src="./home.js"></script>

<style lang="less">
@import url("./home.css");
</style>