import { Configuration } from "../common/configuration";
import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";
import { BaseAPI, RequestArgs } from "../common/base";
import { OcrAssetReq, OcrTsvResponse } from "../models";
/**
 * OcrApi - axios parameter creator
 * @export
 */
export declare const OcrApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Asset To Tsv
     * @param {OcrAssetReq} ocrAssetReq
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    assetToTsvApiOcrAssetToTsvPost: (ocrAssetReq: OcrAssetReq, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary File To Tsv
     * @param {File} file
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fileToTsvApiOcrFileToTsvPost: (file: File, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Image To String
     * @param {File} file
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    imageToStringApiOcrPost: (file: File, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * OcrApi - functional programming interface
 * @export
 */
export declare const OcrApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Asset To Tsv
     * @param {OcrAssetReq} ocrAssetReq
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    assetToTsvApiOcrAssetToTsvPost(ocrAssetReq: OcrAssetReq, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<OcrTsvResponse>>>;
    /**
     *
     * @summary File To Tsv
     * @param {File} file
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fileToTsvApiOcrFileToTsvPost(file: File, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<OcrTsvResponse>>>;
    /**
     *
     * @summary Image To String
     * @param {File} file
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    imageToStringApiOcrPost(file: File, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
};
/**
 * OcrApi - factory interface
 * @export
 */
export declare const OcrApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Asset To Tsv
     * @param {OcrAssetReq} ocrAssetReq
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    assetToTsvApiOcrAssetToTsvPost(ocrAssetReq: OcrAssetReq, acceptLanguage?: string, options?: any): AxiosPromise<Array<OcrTsvResponse>>;
    /**
     *
     * @summary File To Tsv
     * @param {File} file
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    fileToTsvApiOcrFileToTsvPost(file: File, acceptLanguage?: string, options?: any): AxiosPromise<Array<OcrTsvResponse>>;
    /**
     *
     * @summary Image To String
     * @param {File} file
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    imageToStringApiOcrPost(file: File, acceptLanguage?: string, options?: any): AxiosPromise<string>;
};
/**
 * OcrApi - object-oriented interface
 * @export
 * @class OcrApi
 * @extends {BaseAPI}
 */
export declare class OcrApi extends BaseAPI {
    /**
     *
     * @summary Asset To Tsv
     * @param {OcrAssetReq} ocrAssetReq
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OcrApi
     */
    assetToTsvApiOcrAssetToTsvPost(ocrAssetReq: OcrAssetReq, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<OcrTsvResponse[], any>>;
    /**
     *
     * @summary File To Tsv
     * @param {File} file
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OcrApi
     */
    fileToTsvApiOcrFileToTsvPost(file: File, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<OcrTsvResponse[], any>>;
    /**
     *
     * @summary Image To String
     * @param {File} file
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OcrApi
     */
    imageToStringApiOcrPost(file: File, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
}
//# sourceMappingURL=ocr-api.d.ts.map