<template>
  <div id="app">
    <component :is="name"></component>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      name: 'HelloWorld',
    };
  },
};
</script>

<style></style>
