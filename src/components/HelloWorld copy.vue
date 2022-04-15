<template>
  <v-chart
    ref="chart"
    style="width: 800px; height: 600px"
    :option="option"
    @click="handleClick"
  ></v-chart>
</template>

<script>
export default {
  data() {
    return {
      option: {
        title: {
          text: 'Referer of a Website',
          subtext: 'Fake Data',
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '30%',
            // center: ['20%', '10'],
            startAngle: 0,
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      },
    };
  },
  mounted() {},
  methods: {
    handleClick(params) {
      console.log(params);
      this.option.series[0].center = ['20%', '50%'];
      this.option.series[1] = {
        name: 'Access From',
        type: 'pie',
        radius: '30%',
        center: ['60%', '50%'],
        
        data: [
          { value: Math.random() * 1000, name: 'Search Engine' },
          { value: Math.random() * 1000, name: 'Direct' },
          { value: Math.random() * 1000, name: 'Email' },
          { value: Math.random() * 1000, name: 'Union Ads' },
          { value: Math.random() * 1000, name: 'Video Ads' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      };

      this.$refs['chart'].setOption(this.option);
    },
  },
};
</script>

<style></style>
