<template>
  <input v-model="aaa" type="text" />
</template>

<script>
export default {
  components: {},
  data() {
    return {
      aaa: '',
    };
  },
  watch: {
    aaa() {
      this.a();
    },
  },
  methods: {
    a() {
      console.log('我被执行了');
    },
  },
};
</script>

<style></style>
