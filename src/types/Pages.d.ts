export interface MetaDatePage {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  firstPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface Page<Data> {
  meta: MetaDatePage;
  data: Data[];
}
