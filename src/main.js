import Vue from 'vue';
import App from './App.vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

const _ = require('lodash');
Vue.prototype._ = _;

import VueXss from 'vue-xss';
Vue.use(VueXss);
Vue.use(ElementUI);
Vue.config.productionTip = false;

import ECharts from 'vue-echarts';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart, BarChart } from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
} from 'echarts/components';
use([
  CanvasRenderer,
  PieChart,
  BarChart,
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
]);

Vue.component('v-chart', ECharts);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
