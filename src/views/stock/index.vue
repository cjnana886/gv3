<template lang="pug">
.layout
  h2 牧老闆 - 股市分析
  el-tabs.common-tabs(v-model="activeName")
    el-tab-pane(
      v-for="(item, idx) in tabs"
      :key="idx"
      :label="item.label"
      :name="item.name"
    )
      //- 排行
      top(v-if="item.name === 'top'")
      div(v-else) 尚未製作 => {{ item.label }}
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, ref } from 'vue';
import { ElTabs, ElTabPane } from 'element-plus';
import type { TabsPaneContext } from 'element-plus';

export default defineComponent({
  name: 'StockMarketAnalysis',
  components: {
    ElTabs,
    ElTabPane,
    // 排行榜
    Top: defineAsyncComponent(() => import('./top/index.vue')),
  },
  setup() {
    const activeName = ref('top');

    const tabs = ref([
      {
        name: 'top',
        label: 'Top100',
      },
      {
        name: 'basic',
        label: '基本面',
      },
      {
        name: 'technical',
        label: '技術面',
      },
      {
        name: 'chip',
        label: '籌碼面',
      },
    ]);

    return {
      activeName,
      tabs,
    };
  },
});
</script>

<style lang="scss" scoped>
.layout {
  .common-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
}
</style>
