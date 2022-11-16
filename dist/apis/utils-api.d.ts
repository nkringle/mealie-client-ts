import { Configuration } from "../common/configuration";
import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";
import { BaseAPI, RequestArgs } from "../common/base";
/**
 * UtilsApi - axios parameter creator
 * @export
 */
export declare const UtilsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Uses a file token obtained by an active user to retrieve a file from the operating system.
     * @summary Download File
     * @param {string} [token]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    downloadFileApiUtilsDownloadGet: (token?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * UtilsApi - functional programming interface
 * @export
 */
export declare const UtilsApiFp: (configuration?: Configuration) => {
    /**
     * Uses a file token obtained by an active user to retrieve a file from the operating system.
     * @summary Download File
     * @param {string} [token]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    downloadFileApiUtilsDownloadGet(token?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
};
/**
 * UtilsApi - factory interface
 * @export
 */
export declare const UtilsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Uses a file token obtained by an active user to retrieve a file from the operating system.
     * @summary Download File
     * @param {string} [token]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    downloadFileApiUtilsDownloadGet(token?: string, options?: any): AxiosPromise<any>;
};
/**
 * UtilsApi - object-oriented interface
 * @export
 * @class UtilsApi
 * @extends {BaseAPI}
 */
export declare class UtilsApi extends BaseAPI {
    /**
     * Uses a file token obtained by an active user to retrieve a file from the operating system.
     * @summary Download File
     * @param {string} [token]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UtilsApi
     */
    downloadFileApiUtilsDownloadGet(token?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
}
//# sourceMappingURL=utils-api.d.ts.map