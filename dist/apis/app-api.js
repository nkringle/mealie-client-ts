"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppAboutApi = exports.AppAboutApiFactory = exports.AppAboutApiFp = exports.AppAboutApiAxiosParamCreator = void 0;
const axios_1 = __importDefault(require("axios"));
const base_1 = require("../common/base");
const common_1 = require("../common/common");
/**
 * AppAboutApi - axios parameter creator
 * @export
 */
const AppAboutApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Get general application information
         * @summary Get App Info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAppInfoApiAppAboutGet: async (options = {}) => {
            const localVarPath = `/api/app/about`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
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
exports.AppAboutApiAxiosParamCreator = AppAboutApiAxiosParamCreator;
/**
 * AppAboutApi - functional programming interface
 * @export
 */
const AppAboutApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.AppAboutApiAxiosParamCreator)(configuration);
    return {
        /**
         * Get general application information
         * @summary Get App Info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAppInfoApiAppAboutGet(options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAppInfoApiAppAboutGet(options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.AppAboutApiFp = AppAboutApiFp;
/**
 * AppAboutApi - factory interface
 * @export
 */
const AppAboutApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.AppAboutApiFp)(configuration);
    return {
        /**
         * Get general application information
         * @summary Get App Info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAppInfoApiAppAboutGet(options) {
            return localVarFp.getAppInfoApiAppAboutGet(options).then((request) => request(axios, basePath));
        },
    };
};
exports.AppAboutApiFactory = AppAboutApiFactory;
/**
 * AppAboutApi - object-oriented interface
 * @export
 * @class AppAboutApi
 * @extends {BaseAPI}
 */
class AppAboutApi extends base_1.BaseAPI {
    /**
     * Get general application information
     * @summary Get App Info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppAboutApi
     */
    getAppInfoApiAppAboutGet(options) {
        return (0, exports.AppAboutApiFp)(this.configuration).getAppInfoApiAppAboutGet(options).then((request) => request(this.axios, this.basePath));
    }
}
exports.AppAboutApi = AppAboutApi;
//# sourceMappingURL=app-api.js.map