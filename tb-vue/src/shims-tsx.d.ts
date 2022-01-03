import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }

  interface DataType {
    code: number;
    data: any;
    message: string;
    success: boolean;
  }

  type FormRuleType = {
    validator: Function;
    [index: string]: any;
  }
  

  type fileDataItemType = {
    username: string,
    fileName:  string,
    fileAbstract: string,
    fileId: number,
    star: boolean,
    inRecycleBin: boolean
  };

  
  type fileDataType = Array<fileDataItemType>;

}
