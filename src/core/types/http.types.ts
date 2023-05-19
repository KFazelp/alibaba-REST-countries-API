export declare type HttpResponse<T = any> = {
  status?: number;
  statusText?: string;
  errorCode?: string;
  context?: any;
  data?: T;
  headers?: HttpHeaders;
};

export declare type HttpHeaders = {
  [key: string]: string;
};

export declare type HttpRequest = {
  baseUrl?: string;
  url: string;
  method?: HttpMethod;
  data?: any;
  headers?: HttpHeaders;
};

export declare type HttpProgressType = "download" | "upload" | "any";
export declare type HttpMethod = "POST" | "GET" | "PUT" | "DELETE";
