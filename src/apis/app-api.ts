import {Configuration} from "../common/configuration";
import globalAxios, {AxiosInstance, AxiosPromise, AxiosRequestConfig} from "axios";
import {BASE_PATH, BaseAPI, RequestArgs} from "../common/base";
import {createRequestFunction, DUMMY_BASE_URL, setSearchParams, toPathString} from "../common/common";
import {AppInfo} from "../models";


/**
 * AppAboutApi - axios parameter creator
 * @export
 */
export const AppAboutApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get general application information
         * @summary Get App Info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAppInfoApiAppAboutGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/app/about`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AppAboutApi - functional programming interface
 * @export
 */
export const AppAboutApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AppAboutApiAxiosParamCreator(configuration)
    return {
        /**
         * Get general application information
         * @summary Get App Info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAppInfoApiAppAboutGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AppInfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAppInfoApiAppAboutGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AppAboutApi - factory interface
 * @export
 */
export const AppAboutApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AppAboutApiFp(configuration)
    return {
        /**
         * Get general application information
         * @summary Get App Info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAppInfoApiAppAboutGet(options?: any): AxiosPromise<AppInfo> {
            return localVarFp.getAppInfoApiAppAboutGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AppAboutApi - object-oriented interface
 * @export
 * @class AppAboutApi
 * @extends {BaseAPI}
 */
export class AppAboutApi extends BaseAPI {
    /**
     * Get general application information
     * @summary Get App Info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppAboutApi
     */
    public getAppInfoApiAppAboutGet(options?: AxiosRequestConfig) {
        return AppAboutApiFp(this.configuration).getAppInfoApiAppAboutGet(options).then((request) => request(this.axios, this.basePath));
    }
}
