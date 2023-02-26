<template lang="pug">
//- 列表資料
og-table.top(
  :columns="tableColumns"
  :selection="batchModuleData.selected"
  :default-sort="defaultSort"
  :filter-column="isDisplayedColumns"
  :data-source="listData"
)
  //- 序號
  template(#id="{ row }")
    span {{ row.id }}
  //- 代碼
  template(#stockID="{ row }")
    span {{ row.stockID }}
  //- 股票
  template(#stockName="{ row }")
    span {{ row.stockName }}
  //- 漲跌
  template(#upDown="{ row }")
    span {{ row.upDown }}
  //- 漲跌幅
  template(#upDownPercent="{ row }")
    span {{ row.upDownPercent }}
  //- 最高價
  template(#highestPrice="{ row }")
    span {{ row.highestPrice }}
  //- 最低價
  template(#lowestPrice="{ row }")
    span {{ row.lowestPrice }}
  //- 成交量
  template(#volume="{ row }")
    span {{ row.volume }}
  //- 收盤價
  template(#closingPrice="{ row }")
    span {{ row.closingPrice }}
  //- 開盤價
  template(#openingPrice="{ row }")
    span {{ row.openingPrice }}
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed } from 'vue';
import OgTable from '@/components/custom/table/index.vue';
import { useList } from './list';
// import type { ListData, BatchModule, ListCondition } from './type';

export default defineComponent({
  name: 'StockTop',
  components: {
    OgTable,
  },
  setup() {
    // 列表資料
    const listRef = ref();

    // 列表資料
    const { batchModuleData, listData, listCondition, getList } = useList();
    // 取得列表資料
    getList();

    // Table欄位設置
    const tableColumns = [
      {
        dataIndex: 'id',
        title: '序號',
        width: 55,
        align: 'center',
      },
      {
        dataIndex: 'stockID',
        title: '代碼',
        width: 100,
        align: 'center',
        sortable: true,
      },
      { dataIndex: 'stockName', title: '股票', minWidth: 140 },
      { dataIndex: 'upDown', title: '漲跌', width: 80, align: 'right' },
      {
        dataIndex: 'upDownPercent',
        title: '漲跌幅(%)',
        width: 90,
        align: 'right',
      },
      { dataIndex: 'highestPrice', title: '最高價', width: 80, align: 'right' },
      { dataIndex: 'lowestPrice', title: '最低價', width: 80, align: 'right' },
      { dataIndex: 'volume', title: '成交量', width: 80, align: 'right' },
      { dataIndex: 'closingPrice', title: '收盤價', width: 80, align: 'right' },
      { dataIndex: 'openingPrice', title: '開盤價', width: 80, align: 'right' },
    ] as {
      dataIndex: string;
      title?: string; // 標題
      align?: 'left' | 'right' | 'center';
      titleAlign?: 'left' | 'right' | 'center';
      width?: number;
      minWidth?: number;
    }[];
    // 預設排序
    const defaultSort = computed(() => {
      const order = { asc: 'ascending', desc: 'descending' } as const;
      return (
        {
          prop: listCondition.sort,
          order: order[listCondition.order],
        } || {}
      );
    });

    // 判斷是否顯示欄位
    const isDisplayedColumns = () => {
      // return customOptions.value.includes(column);
      // return typeof column !== 'undefined';
      return true;
    };

    return {
      batchModuleData,
      isDisplayedColumns,
      // table
      listRef,
      listData,
      tableColumns,
      defaultSort,
    };
  },
});
</script>

<style lang="scss" scoped>
.top {
  color: red;
}
</style>
