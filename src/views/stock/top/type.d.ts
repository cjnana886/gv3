export type ListCondition = {
  page: number;
  size: number;
  total: number;
  sort: 'id';
  order: AbbOrders;
};

export type AbbOrders = 'asc' | 'desc';

// 列表資料
export type ListData = {
  selected?: boolean;
  disabled?: boolean;
  id: number;
  stockID: number;
  stockName: string;
  upDown: number;
  upDownPercent: number;
  highestPrice: number;
  lowestPrice: number;
  volume: number;
  closingPrice: number;
  openingPrice: number;
};

export type BatchModule = {
  selected: boolean;
  selectedRow: ListData[];
};
