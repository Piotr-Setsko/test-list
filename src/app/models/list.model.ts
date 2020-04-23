interface ListResponse {
  basepath: string;
  data: DataListItems[];
}

interface DataListItems {
  id: number;
  name: string;
  shortInfo: string;
  more: string;
}

export { ListResponse, DataListItems };
