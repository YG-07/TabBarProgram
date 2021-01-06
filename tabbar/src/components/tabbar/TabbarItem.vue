<template>
  <div class="tab-bar-item">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{active: isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabbarItem",
    data() {
      return {
        isActive: true
      }
    }
  }
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 5px;
  vertical-align: middle;
}
.tab-bar-item div{
  font-size: 13px;
}
.active {
  color: green;
}
</style>