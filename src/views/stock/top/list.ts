import { ref, reactive } from 'vue';
import type { ListData, BatchModule, ListCondition } from './type';

// 取得列表資料
export const useList = () => {
  // 批次模組資料
  const batchModuleData: BatchModule = reactive({
    selected: false,
    selectedRow: [],
  });

  // 列表資料
  const listData = ref<ListData[]>([]);

  // 列表條件
  const listCondition: ListCondition = reactive({
    page: 1,
    size: 1000,
    total: 0,
    sort: 'id',
    order: 'asc',
  });

  // 取得列表資料
  const getList = () => {
    listData.value = [
      {
        selected: false,
        id: 1,
        stockID: 6147,
        stockName: '頎邦',
        upDown: 0.2,
        upDownPercent: 0.3,
        highestPrice: 67.8,
        lowestPrice: 66.9,
        volume: 3858,
        closingPrice: 67.1,
        openingPrice: 67.5,
      },
      {
        selected: false,
        disabled: false,
        id: 100,
        stockID: 8942,
        stockName: '森鉅',
        upDown: 2.0,
        upDownPercent: 3.03,
        highestPrice: 68.0,
        lowestPrice: 65.8,
        volume: 332,
        closingPrice: 66.0,
        openingPrice: 65.8,
      },
    ];
  };

  return {
    batchModuleData,
    listData,
    listCondition,
    getList,
  };
};
