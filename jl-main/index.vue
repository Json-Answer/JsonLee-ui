<template>
  <div class="content" :style="{'--padding': padding}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    padding: {
      type: String,
      default: '16px'
    }
  }
}
</script>

<style scoped>
  .content{
    padding: var(--padding);
  }
</style>