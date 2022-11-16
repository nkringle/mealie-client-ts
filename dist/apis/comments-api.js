"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsApi = exports.CommentsApiFactory = exports.CommentsApiFp = exports.CommentsApiAxiosParamCreator = void 0;
const axios_1 = __importDefault(require("axios"));
const base_1 = require("../common/base");
const common_1 = require("../common/common");
/**
 * CommentsApi - axios parameter creator
 * @export
 */
const CommentsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Create One
         * @param {RecipeCommentCreate} recipeCommentCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiCommentsPost: async (recipeCommentCreate, acceptLanguage, options = {}) => {
            // verify required parameter 'recipeCommentCreate' is not null or undefined
            (0, common_1.assertParamExists)('createOneApiCommentsPost', 'recipeCommentCreate', recipeCommentCreate);
            const localVarPath = `/api/comments`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(recipeCommentCreate, localVarRequestOptions, configuration);
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
        deleteOneApiCommentsItemIdDelete: async (itemId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('deleteOneApiCommentsItemIdDelete', 'itemId', itemId);
            const localVarPath = `/api/comments/{item_id}`
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
        getAllApiCommentsGet: async (page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options = {}) => {
            const localVarPath = `/api/comments`;
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
        getOneApiCommentsItemIdGet: async (itemId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('getOneApiCommentsItemIdGet', 'itemId', itemId);
            const localVarPath = `/api/comments/{item_id}`
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
         * @summary Update One
         * @param {string} itemId
         * @param {RecipeCommentUpdate} recipeCommentUpdate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiCommentsItemIdPut: async (itemId, recipeCommentUpdate, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiCommentsItemIdPut', 'itemId', itemId);
            // verify required parameter 'recipeCommentUpdate' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiCommentsItemIdPut', 'recipeCommentUpdate', recipeCommentUpdate);
            const localVarPath = `/api/comments/{item_id}`
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(recipeCommentUpdate, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.CommentsApiAxiosParamCreator = CommentsApiAxiosParamCreator;
/**
 * CommentsApi - functional programming interface
 * @export
 */
const CommentsApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.CommentsApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Create One
         * @param {RecipeCommentCreate} recipeCommentCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiCommentsPost(recipeCommentCreate, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiCommentsPost(recipeCommentCreate, acceptLanguage, options);
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
        async deleteOneApiCommentsItemIdDelete(itemId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiCommentsItemIdDelete(itemId, acceptLanguage, options);
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
        async getAllApiCommentsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiCommentsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
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
        async getOneApiCommentsItemIdGet(itemId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiCommentsItemIdGet(itemId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {RecipeCommentUpdate} recipeCommentUpdate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOneApiCommentsItemIdPut(itemId, recipeCommentUpdate, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiCommentsItemIdPut(itemId, recipeCommentUpdate, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.CommentsApiFp = CommentsApiFp;
/**
 * CommentsApi - factory interface
 * @export
 */
const CommentsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.CommentsApiFp)(configuration);
    return {
        /**
         *
         * @summary Create One
         * @param {RecipeCommentCreate} recipeCommentCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiCommentsPost(recipeCommentCreate, acceptLanguage, options) {
            return localVarFp.createOneApiCommentsPost(recipeCommentCreate, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiCommentsItemIdDelete(itemId, acceptLanguage, options) {
            return localVarFp.deleteOneApiCommentsItemIdDelete(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
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
        getAllApiCommentsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            return localVarFp.getAllApiCommentsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiCommentsItemIdGet(itemId, acceptLanguage, options) {
            return localVarFp.getOneApiCommentsItemIdGet(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {RecipeCommentUpdate} recipeCommentUpdate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiCommentsItemIdPut(itemId, recipeCommentUpdate, acceptLanguage, options) {
            return localVarFp.updateOneApiCommentsItemIdPut(itemId, recipeCommentUpdate, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.CommentsApiFactory = CommentsApiFactory;
/**
 * CommentsApi - object-oriented interface
 * @export
 * @class CommentsApi
 * @extends {BaseAPI}
 */
class CommentsApi extends base_1.BaseAPI {
    /**
     *
     * @summary Create One
     * @param {RecipeCommentCreate} recipeCommentCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    createOneApiCommentsPost(recipeCommentCreate, acceptLanguage, options) {
        return (0, exports.CommentsApiFp)(this.configuration).createOneApiCommentsPost(recipeCommentCreate, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    deleteOneApiCommentsItemIdDelete(itemId, acceptLanguage, options) {
        return (0, exports.CommentsApiFp)(this.configuration).deleteOneApiCommentsItemIdDelete(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
     * @memberof CommentsApi
     */
    getAllApiCommentsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
        return (0, exports.CommentsApiFp)(this.configuration).getAllApiCommentsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    getOneApiCommentsItemIdGet(itemId, acceptLanguage, options) {
        return (0, exports.CommentsApiFp)(this.configuration).getOneApiCommentsItemIdGet(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {RecipeCommentUpdate} recipeCommentUpdate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    updateOneApiCommentsItemIdPut(itemId, recipeCommentUpdate, acceptLanguage, options) {
        return (0, exports.CommentsApiFp)(this.configuration).updateOneApiCommentsItemIdPut(itemId, recipeCommentUpdate, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.CommentsApi = CommentsApi;
//# sourceMappingURL=comments-api.js.map