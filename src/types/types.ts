export interface INavElement {
  title: string;
  link: string;
}

export interface IGalleryImg {
  id: string;
  title: string;
  path: string;
  type: string;
}

export interface ISelectOpt {
  value: string;
  name: string;
}

export interface IFilter {
  selectedOpt: string;
  searchVal: string;
}
