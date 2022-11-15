import {Configuration} from "../common/configuration";
import globalAxios, {AxiosInstance, AxiosPromise, AxiosRequestConfig} from "axios";
import {BASE_PATH, BaseAPI, RequestArgs} from "../common/base";
import {
    assertParamExists, createRequestFunction,
    DUMMY_BASE_URL,
    serializeDataIfNeeded,
    setOAuthToObject,
    setSearchParams,
    toPathString
} from "../common/common";
import {OcrAssetReq, OcrTsvResponse} from "../models";

/**
 * OcrApi - axios parameter creator
 * @export
 */
export const OcrApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Asset To Tsv
         * @param {OcrAssetReq} ocrAssetReq
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetToTsvApiOcrAssetToTsvPost: async (ocrAssetReq: OcrAssetReq, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ocrAssetReq' is not null or undefined
            assertParamExists('assetToTsvApiOcrAssetToTsvPost', 'ocrAssetReq', ocrAssetReq)
            const localVarPath = `/api/ocr/asset-to-tsv`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(ocrAssetReq, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary File To Tsv
         * @param {File} file
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fileToTsvApiOcrFileToTsvPost: async (file: File, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'file' is not null or undefined
            assertParamExists('fileToTsvApiOcrFileToTsvPost', 'file', file)
            const localVarPath = `/api/ocr/file-to-tsv`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }


            if (file !== undefined) {
                localVarFormParams.append('file', file as any);
            }


            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Image To String
         * @param {File} file
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        imageToStringApiOcrPost: async (file: File, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'file' is not null or undefined
            assertParamExists('imageToStringApiOcrPost', 'file', file)
            const localVarPath = `/api/ocr/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }


            if (file !== undefined) {
                localVarFormParams.append('file', file as any);
            }


            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OcrApi - functional programming interface
 * @export
 */
export const OcrApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OcrApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Asset To Tsv
         * @param {OcrAssetReq} ocrAssetReq
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async assetToTsvApiOcrAssetToTsvPost(ocrAssetReq: OcrAssetReq, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<OcrTsvResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.assetToTsvApiOcrAssetToTsvPost(ocrAssetReq, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary File To Tsv
         * @param {File} file
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fileToTsvApiOcrFileToTsvPost(file: File, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<OcrTsvResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fileToTsvApiOcrFileToTsvPost(file, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Image To String
         * @param {File} file
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async imageToStringApiOcrPost(file: File, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.imageToStringApiOcrPost(file, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * OcrApi - factory interface
 * @export
 */
export const OcrApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OcrApiFp(configuration)
    return {
        /**
         *
         * @summary Asset To Tsv
         * @param {OcrAssetReq} ocrAssetReq
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetToTsvApiOcrAssetToTsvPost(ocrAssetReq: OcrAssetReq, acceptLanguage?: string, options?: any): AxiosPromise<Array<OcrTsvResponse>> {
            return localVarFp.assetToTsvApiOcrAssetToTsvPost(ocrAssetReq, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary File To Tsv
         * @param {File} file
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fileToTsvApiOcrFileToTsvPost(file: File, acceptLanguage?: string, options?: any): AxiosPromise<Array<OcrTsvResponse>> {
            return localVarFp.fileToTsvApiOcrFileToTsvPost(file, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Image To String
         * @param {File} file
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        imageToStringApiOcrPost(file: File, acceptLanguage?: string, options?: any): AxiosPromise<string> {
            return localVarFp.imageToStringApiOcrPost(file, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OcrApi - object-oriented interface
 * @export
 * @class OcrApi
 * @extends {BaseAPI}
 */
export class OcrApi extends BaseAPI {
    /**
     *
     * @summary Asset To Tsv
     * @param {OcrAssetReq} ocrAssetReq
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OcrApi
     */
    public assetToTsvApiOcrAssetToTsvPost(ocrAssetReq: OcrAssetReq, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return OcrApiFp(this.configuration).assetToTsvApiOcrAssetToTsvPost(ocrAssetReq, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary File To Tsv
     * @param {File} file
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OcrApi
     */
    public fileToTsvApiOcrFileToTsvPost(file: File, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return OcrApiFp(this.configuration).fileToTsvApiOcrFileToTsvPost(file, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Image To String
     * @param {File} file
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OcrApi
     */
    public imageToStringApiOcrPost(file: File, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return OcrApiFp(this.configuration).imageToStringApiOcrPost(file, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
