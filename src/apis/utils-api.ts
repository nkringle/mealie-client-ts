import {Configuration} from "../common/configuration";
import globalAxios, {AxiosInstance, AxiosPromise, AxiosRequestConfig} from "axios";
import {BASE_PATH, BaseAPI, RequestArgs} from "../common/base";
import {createRequestFunction, DUMMY_BASE_URL, setSearchParams, toPathString} from "../common/common";

/**
 * UtilsApi - axios parameter creator
 * @export
 */
export const UtilsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Uses a file token obtained by an active user to retrieve a file from the operating system.
         * @summary Download File
         * @param {string} [token]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downloadFileApiUtilsDownloadGet: async (token?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/utils/download`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (token !== undefined) {
                localVarQueryParameter['token'] = token;
            }



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
 * UtilsApi - functional programming interface
 * @export
 */
export const UtilsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UtilsApiAxiosParamCreator(configuration)
    return {
        /**
         * Uses a file token obtained by an active user to retrieve a file from the operating system.
         * @summary Download File
         * @param {string} [token]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async downloadFileApiUtilsDownloadGet(token?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.downloadFileApiUtilsDownloadGet(token, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UtilsApi - factory interface
 * @export
 */
export const UtilsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UtilsApiFp(configuration)
    return {
        /**
         * Uses a file token obtained by an active user to retrieve a file from the operating system.
         * @summary Download File
         * @param {string} [token]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downloadFileApiUtilsDownloadGet(token?: string, options?: any): AxiosPromise<any> {
            return localVarFp.downloadFileApiUtilsDownloadGet(token, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UtilsApi - object-oriented interface
 * @export
 * @class UtilsApi
 * @extends {BaseAPI}
 */
export class UtilsApi extends BaseAPI {
    /**
     * Uses a file token obtained by an active user to retrieve a file from the operating system.
     * @summary Download File
     * @param {string} [token]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UtilsApi
     */
    public downloadFileApiUtilsDownloadGet(token?: string, options?: AxiosRequestConfig) {
        return UtilsApiFp(this.configuration).downloadFileApiUtilsDownloadGet(token, options).then((request) => request(this.axios, this.basePath));
    }
}
