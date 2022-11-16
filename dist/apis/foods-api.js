"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodsApi = exports.FoodsApiFactory = exports.FoodsApiFp = exports.FoodsApiAxiosParamCreator = void 0;
const axios_1 = __importDefault(require("axios"));
const base_1 = require("../common/base");
const common_1 = require("../common/common");
/**
 * FoodsApi - axios parameter creator
 * @export
 */
const FoodsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Create One
         * @param {CreateIngredientFood} createIngredientFood
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiFoodsPost: async (createIngredientFood, acceptLanguage, options = {}) => {
            // verify required parameter 'createIngredientFood' is not null or undefined
            (0, common_1.assertParamExists)('createOneApiFoodsPost', 'createIngredientFood', createIngredientFood);
            const localVarPath = `/api/foods`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(createIngredientFood, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiFoodsItemIdDelete: async (itemId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('deleteOneApiFoodsItemIdDelete', 'itemId', itemId);
            const localVarPath = `/api/foods/{item_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'DELETE' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Get All
         * @param {number} [page]
         * @param {number} [perPage]
         * @param {string} [orderBy]
         * @param {OrderDirection} [orderDirection]
         * @param {string} [queryFilter]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllApiFoodsGet: async (page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options = {}) => {
            const localVarPath = `/api/foods`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (perPage !== undefined) {
                localVarQueryParameter['perPage'] = perPage;
            }
            if (orderBy !== undefined) {
                localVarQueryParameter['orderBy'] = orderBy;
            }
            if (orderDirection !== undefined) {
                localVarQueryParameter['orderDirection'] = orderDirection;
            }
            if (queryFilter !== undefined) {
                localVarQueryParameter['queryFilter'] = queryFilter;
            }
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Get One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiFoodsItemIdGet: async (itemId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('getOneApiFoodsItemIdGet', 'itemId', itemId);
            const localVarPath = `/api/foods/{item_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Merge One
         * @param {MergeFood} mergeFood
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mergeOneApiFoodsMergePut: async (mergeFood, acceptLanguage, options = {}) => {
            // verify required parameter 'mergeFood' is not null or undefined
            (0, common_1.assertParamExists)('mergeOneApiFoodsMergePut', 'mergeFood', mergeFood);
            const localVarPath = `/api/foods/merge`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'PUT' }, baseOptions), options);
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(mergeFood, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {CreateIngredientFood} createIngredientFood
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiFoodsItemIdPut: async (itemId, createIngredientFood, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiFoodsItemIdPut', 'itemId', itemId);
            // verify required parameter 'createIngredientFood' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiFoodsItemIdPut', 'createIngredientFood', createIngredientFood);
            const localVarPath = `/api/foods/{item_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'PUT' }, baseOptions), options);
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(createIngredientFood, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.FoodsApiAxiosParamCreator = FoodsApiAxiosParamCreator;
/**
 * FoodsApi - functional programming interface
 * @export
 */
const FoodsApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.FoodsApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Create One
         * @param {CreateIngredientFood} createIngredientFood
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiFoodsPost(createIngredientFood, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiFoodsPost(createIngredientFood, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteOneApiFoodsItemIdDelete(itemId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiFoodsItemIdDelete(itemId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get All
         * @param {number} [page]
         * @param {number} [perPage]
         * @param {string} [orderBy]
         * @param {OrderDirection} [orderDirection]
         * @param {string} [queryFilter]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllApiFoodsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiFoodsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOneApiFoodsItemIdGet(itemId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiFoodsItemIdGet(itemId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Merge One
         * @param {MergeFood} mergeFood
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async mergeOneApiFoodsMergePut(mergeFood, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.mergeOneApiFoodsMergePut(mergeFood, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {CreateIngredientFood} createIngredientFood
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOneApiFoodsItemIdPut(itemId, createIngredientFood, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiFoodsItemIdPut(itemId, createIngredientFood, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.FoodsApiFp = FoodsApiFp;
/**
 * FoodsApi - factory interface
 * @export
 */
const FoodsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.FoodsApiFp)(configuration);
    return {
        /**
         *
         * @summary Create One
         * @param {CreateIngredientFood} createIngredientFood
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiFoodsPost(createIngredientFood, acceptLanguage, options) {
            return localVarFp.createOneApiFoodsPost(createIngredientFood, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiFoodsItemIdDelete(itemId, acceptLanguage, options) {
            return localVarFp.deleteOneApiFoodsItemIdDelete(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get All
         * @param {number} [page]
         * @param {number} [perPage]
         * @param {string} [orderBy]
         * @param {OrderDirection} [orderDirection]
         * @param {string} [queryFilter]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllApiFoodsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            return localVarFp.getAllApiFoodsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiFoodsItemIdGet(itemId, acceptLanguage, options) {
            return localVarFp.getOneApiFoodsItemIdGet(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Merge One
         * @param {MergeFood} mergeFood
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mergeOneApiFoodsMergePut(mergeFood, acceptLanguage, options) {
            return localVarFp.mergeOneApiFoodsMergePut(mergeFood, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {CreateIngredientFood} createIngredientFood
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiFoodsItemIdPut(itemId, createIngredientFood, acceptLanguage, options) {
            return localVarFp.updateOneApiFoodsItemIdPut(itemId, createIngredientFood, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.FoodsApiFactory = FoodsApiFactory;
/**
 * FoodsApi - object-oriented interface
 * @export
 * @class FoodsApi
 * @extends {BaseAPI}
 */
class FoodsApi extends base_1.BaseAPI {
    /**
     *
     * @summary Create One
     * @param {CreateIngredientFood} createIngredientFood
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoodsApi
     */
    createOneApiFoodsPost(createIngredientFood, acceptLanguage, options) {
        return (0, exports.FoodsApiFp)(this.configuration).createOneApiFoodsPost(createIngredientFood, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoodsApi
     */
    deleteOneApiFoodsItemIdDelete(itemId, acceptLanguage, options) {
        return (0, exports.FoodsApiFp)(this.configuration).deleteOneApiFoodsItemIdDelete(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get All
     * @param {number} [page]
     * @param {number} [perPage]
     * @param {string} [orderBy]
     * @param {OrderDirection} [orderDirection]
     * @param {string} [queryFilter]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoodsApi
     */
    getAllApiFoodsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
        return (0, exports.FoodsApiFp)(this.configuration).getAllApiFoodsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoodsApi
     */
    getOneApiFoodsItemIdGet(itemId, acceptLanguage, options) {
        return (0, exports.FoodsApiFp)(this.configuration).getOneApiFoodsItemIdGet(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Merge One
     * @param {MergeFood} mergeFood
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoodsApi
     */
    mergeOneApiFoodsMergePut(mergeFood, acceptLanguage, options) {
        return (0, exports.FoodsApiFp)(this.configuration).mergeOneApiFoodsMergePut(mergeFood, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {CreateIngredientFood} createIngredientFood
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoodsApi
     */
    updateOneApiFoodsItemIdPut(itemId, createIngredientFood, acceptLanguage, options) {
        return (0, exports.FoodsApiFp)(this.configuration).updateOneApiFoodsItemIdPut(itemId, createIngredientFood, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.FoodsApi = FoodsApi;
//# sourceMappingURL=foods-api.js.map