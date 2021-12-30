import { Notification } from 'element-ui';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000/';

interface ParamType {
    [index: string]: any;
}

type DataType = {
    code: number;
    data: any;
    message: string;
    success: boolean;
  };
  
  type HeadersType = {
    'content-length': string;
    'content-type': string;
  };
  
  type ResponseType = {
    config: any;
    data: DataType;
    headers: HeadersType;
    request: any;
    status: number;
    statusText: string;
  };

export const requestMethod = (url: string, params: ParamType, paramType?: string, method?: string | undefined) => {
    const requestParamType = paramType || 'body'; // body | query | params 暂时没搞懂params怎么传
    let requestData = {};
    if (requestParamType === 'body') { // Payload栏显示：Request Payload ；后端用body接收
        requestData = { data: params };
    } else if (requestParamType === 'query') { //  Payload栏显示：Query String Parameter；后端用query接收
        requestData = { params };
    }
    return new Promise((resolve, reject) => {
        axios({
            method: method || 'POST',
            url,
            ...requestData,
        }).then((res: ResponseType) => {
            const { data: { code, message, success } } = res;
            if (code === 200 && success) {
                resolve(res.data);
            } else {
                resolve(res.data);
                Notification.error({
                    title: '请求出错',
                    message,
                });
            }
        }).catch((error: any) => {
            reject(error)
        });
    });
};
