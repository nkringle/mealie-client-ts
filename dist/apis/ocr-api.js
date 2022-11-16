"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OcrApi = exports.OcrApiFactory = exports.OcrApiFp = exports.OcrApiAxiosParamCreator = void 0;
const axios_1 = __importDefault(require("axios"));
const base_1 = require("../common/base");
const common_1 = require("../common/common");
/**
 * OcrApi - axios parameter creator
 * @export
 */
const OcrApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Asset To Tsv
         * @param {OcrAssetReq} ocrAssetReq
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetToTsvApiOcrAssetToTsvPost: async (ocrAssetReq, acceptLanguage, options = {}) => {
            // verify required parameter 'ocrAssetReq' is not null or undefined
            (0, common_1.assertParamExists)('assetToTsvApiOcrAssetToTsvPost', 'ocrAssetReq', ocrAssetReq);
            const localVarPath = `/api/ocr/asset-to-tsv`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(ocrAssetReq, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        fileToTsvApiOcrFileToTsvPost: async (file, acceptLanguage, options = {}) => {
            // verify required parameter 'file' is not null or undefined
            (0, common_1.assertParamExists)('fileToTsvApiOcrFileToTsvPost', 'file', file);
            const localVarPath = `/api/ocr/file-to-tsv`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            if (file !== undefined) {
                localVarFormParams.append('file', file);
            }
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = localVarFormParams;
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        imageToStringApiOcrPost: async (file, acceptLanguage, options = {}) => {
            // verify required parameter 'file' is not null or undefined
            (0, common_1.assertParamExists)('imageToStringApiOcrPost', 'file', file);
            const localVarPath = `/api/ocr/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            if (file !== undefined) {
                localVarFormParams.append('file', file);
            }
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = localVarFormParams;
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.OcrApiAxiosParamCreator = OcrApiAxiosParamCreator;
/**
 * OcrApi - functional programming interface
 * @export
 */
const OcrApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.OcrApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Asset To Tsv
         * @param {OcrAssetReq} ocrAssetReq
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async assetToTsvApiOcrAssetToTsvPost(ocrAssetReq, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.assetToTsvApiOcrAssetToTsvPost(ocrAssetReq, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary File To Tsv
         * @param {File} file
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fileToTsvApiOcrFileToTsvPost(file, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fileToTsvApiOcrFileToTsvPost(file, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Image To String
         * @param {File} file
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async imageToStringApiOcrPost(file, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.imageToStringApiOcrPost(file, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.OcrApiFp = OcrApiFp;
/**
 * OcrApi - factory interface
 * @export
 */
const OcrApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.OcrApiFp)(configuration);
    return {
        /**
         *
         * @summary Asset To Tsv
         * @param {OcrAssetReq} ocrAssetReq
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assetToTsvApiOcrAssetToTsvPost(ocrAssetReq, acceptLanguage, options) {
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
        fileToTsvApiOcrFileToTsvPost(file, acceptLanguage, options) {
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
        imageToStringApiOcrPost(file, acceptLanguage, options) {
            return localVarFp.imageToStringApiOcrPost(file, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.OcrApiFactory = OcrApiFactory;
/**
 * OcrApi - object-oriented interface
 * @export
 * @class OcrApi
 * @extends {BaseAPI}
 */
class OcrApi extends base_1.BaseAPI {
    /**
     *
     * @summary Asset To Tsv
     * @param {OcrAssetReq} ocrAssetReq
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OcrApi
     */
    assetToTsvApiOcrAssetToTsvPost(ocrAssetReq, acceptLanguage, options) {
        return (0, exports.OcrApiFp)(this.configuration).assetToTsvApiOcrAssetToTsvPost(ocrAssetReq, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    fileToTsvApiOcrFileToTsvPost(file, acceptLanguage, options) {
        return (0, exports.OcrApiFp)(this.configuration).fileToTsvApiOcrFileToTsvPost(file, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    imageToStringApiOcrPost(file, acceptLanguage, options) {
        return (0, exports.OcrApiFp)(this.configuration).imageToStringApiOcrPost(file, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.OcrApi = OcrApi;
//# sourceMappingURL=ocr-api.js.map