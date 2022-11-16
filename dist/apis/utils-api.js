"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsApi = exports.UtilsApiFactory = exports.UtilsApiFp = exports.UtilsApiAxiosParamCreator = void 0;
const axios_1 = __importDefault(require("axios"));
const base_1 = require("../common/base");
const common_1 = require("../common/common");
/**
 * UtilsApi - axios parameter creator
 * @export
 */
const UtilsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Uses a file token obtained by an active user to retrieve a file from the operating system.
         * @summary Download File
         * @param {string} [token]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downloadFileApiUtilsDownloadGet: async (token, options = {}) => {
            const localVarPath = `/api/utils/download`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (token !== undefined) {
                localVarQueryParameter['token'] = token;
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.UtilsApiAxiosParamCreator = UtilsApiAxiosParamCreator;
/**
 * UtilsApi - functional programming interface
 * @export
 */
const UtilsApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.UtilsApiAxiosParamCreator)(configuration);
    return {
        /**
         * Uses a file token obtained by an active user to retrieve a file from the operating system.
         * @summary Download File
         * @param {string} [token]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async downloadFileApiUtilsDownloadGet(token, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.downloadFileApiUtilsDownloadGet(token, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.UtilsApiFp = UtilsApiFp;
/**
 * UtilsApi - factory interface
 * @export
 */
const UtilsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.UtilsApiFp)(configuration);
    return {
        /**
         * Uses a file token obtained by an active user to retrieve a file from the operating system.
         * @summary Download File
         * @param {string} [token]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downloadFileApiUtilsDownloadGet(token, options) {
            return localVarFp.downloadFileApiUtilsDownloadGet(token, options).then((request) => request(axios, basePath));
        },
    };
};
exports.UtilsApiFactory = UtilsApiFactory;
/**
 * UtilsApi - object-oriented interface
 * @export
 * @class UtilsApi
 * @extends {BaseAPI}
 */
class UtilsApi extends base_1.BaseAPI {
    /**
     * Uses a file token obtained by an active user to retrieve a file from the operating system.
     * @summary Download File
     * @param {string} [token]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UtilsApi
     */
    downloadFileApiUtilsDownloadGet(token, options) {
        return (0, exports.UtilsApiFp)(this.configuration).downloadFileApiUtilsDownloadGet(token, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.UtilsApi = UtilsApi;
//# sourceMappingURL=utils-api.js.map