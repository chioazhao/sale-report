<template>
  <div class="container-title">
    <icon :name="icon"
          scale="1.5"
          class="text-icon"></icon>
    <span class="text">{{ title }}</span>
  </div>
</template>
<script>
export default {
  name: 'ContainerTitle',
  props: {
    title: String,
    icon: String,
  },
}
</script>
<style lang="scss" scoped>
.container-title {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-left: 20px;
  border-radius: 10px;
  background-color: rgba(19, 25, 47, 0.5);
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  transition: background-color 0.3s ease-in-out;
  .text {
    margin-left: 5px;
    font-size: 20px;
  }
}
</style>