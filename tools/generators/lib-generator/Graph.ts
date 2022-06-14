export interface Graph {
  libraries: Array<GraphItem>;
}

export interface GraphItem {
  name: string;
  directory: string;
  imports: Array<string>;
}
