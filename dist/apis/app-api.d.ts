import { Configuration } from "../common/configuration";
import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";
import { BaseAPI, RequestArgs } from "../common/base";
import { AppInfo } from "../models";
/**
 * AppAboutApi - axios parameter creator
 * @export
 */
export declare const AppAboutApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Get general application information
     * @summary Get App Info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAppInfoApiAppAboutGet: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * AppAboutApi - functional programming interface
 * @export
 */
export declare const AppAboutApiFp: (configuration?: Configuration) => {
    /**
     * Get general application information
     * @summary Get App Info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAppInfoApiAppAboutGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AppInfo>>;
};
/**
 * AppAboutApi - factory interface
 * @export
 */
export declare const AppAboutApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Get general application information
     * @summary Get App Info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAppInfoApiAppAboutGet(options?: any): AxiosPromise<AppInfo>;
};
/**
 * AppAboutApi - object-oriented interface
 * @export
 * @class AppAboutApi
 * @extends {BaseAPI}
 */
export declare class AppAboutApi extends BaseAPI {
    /**
     * Get general application information
     * @summary Get App Info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppAboutApi
     */
    getAppInfoApiAppAboutGet(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<AppInfo, any>>;
}
//# sourceMappingURL=app-api.d.ts.map