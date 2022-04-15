<template>
  <div>
    <div v-html="$xss('&lt;script&gt;alert(1)&lt;/script&gt;')"></div>
    <div v-html="_.escape('&lt;script&gt;alert(1)&lt;/script&gt;')"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aaa: '',
    };
  },
  mounted() {
    console.log(this.$xss);
    // this.aaa = this.$xss('&lt;script&gt;alert(1)&lt;/script&gt')
  },
};
</script>

<style></style>
