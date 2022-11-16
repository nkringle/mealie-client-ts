"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupsShoppingListsApiFp = exports.GroupsShoppingListsApiAxiosParamCreator = exports.GroupsShoppingListItemsApi = exports.GroupsShoppingListItemsApiFactory = exports.GroupsShoppingListItemsApiFp = exports.GroupsShoppingListItemsApiAxiosParamCreator = exports.GroupsSelfServiceApi = exports.GroupsSelfServiceApiFactory = exports.GroupsSelfServiceApiFp = exports.GroupsSelfServiceApiAxiosParamCreator = exports.GroupsSeedersApi = exports.GroupsSeedersApiFactory = exports.GroupsSeedersApiFp = exports.GroupsSeedersApiAxiosParamCreator = exports.GroupsReportsApi = exports.GroupsReportsApiFactory = exports.GroupsReportsApiFp = exports.GroupsReportsApiAxiosParamCreator = exports.GroupsMultiPurposeLabelsApi = exports.GroupsMultiPurposeLabelsApiFactory = exports.GroupsMultiPurposeLabelsApiFp = exports.GroupsMultiPurposeLabelsApiAxiosParamCreator = exports.GroupsMigrationsApi = exports.GroupsMigrationsApiFactory = exports.GroupsMigrationsApiFp = exports.GroupsMigrationsApiAxiosParamCreator = exports.GroupsMealplansApi = exports.GroupsMealplansApiFactory = exports.GroupsMealplansApiFp = exports.GroupsMealplansApiAxiosParamCreator = exports.GroupsMealplanRulesApi = exports.GroupsMealplanRulesApiFactory = exports.GroupsMealplanRulesApiFp = exports.GroupsMealplanRulesApiAxiosParamCreator = exports.GroupsMealplanCategoriesApi = exports.GroupsMealplanCategoriesApiFactory = exports.GroupsMealplanCategoriesApiFp = exports.GroupsMealplanCategoriesApiAxiosParamCreator = exports.GroupsInvitationsApi = exports.GroupsInvitationsApiFactory = exports.GroupsInvitationsApiFp = exports.GroupsInvitationsApiAxiosParamCreator = exports.GroupsEventNotificationsApi = exports.GroupsEventNotificationsApiFactory = exports.GroupsEventNotificationsApiFp = exports.GroupsEventNotificationsApiAxiosParamCreator = exports.GroupsCookbooksApi = exports.GroupsCookbooksApiFactory = exports.GroupsCookbooksApiFp = exports.GroupsCookbooksApiAxiosParamCreator = void 0;
exports.GroupsWebhooksApi = exports.GroupsWebhooksApiFactory = exports.GroupsWebhooksApiFp = exports.GroupsWebhooksApiAxiosParamCreator = exports.GroupsShoppingListsApi = exports.GroupsShoppingListsApiFactory = void 0;
const axios_1 = __importDefault(require("axios"));
const base_1 = require("../common/base");
const common_1 = require("../common/common");
/**
 * GroupsCookbooksApi - axios parameter creator
 * @export
 */
const GroupsCookbooksApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Create One
         * @param {CreateCookBook} createCookBook
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiGroupsCookbooksPost: async (createCookBook, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'createCookBook' is not null or undefined
            (0, common_1.assertParamExists)('createOneApiGroupsCookbooksPost', 'createCookBook', createCookBook);
            const localVarPath = `/api/groups/cookbooks`;
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
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(createCookBook, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiGroupsCookbooksItemIdDelete: async (itemId, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('deleteOneApiGroupsCookbooksItemIdDelete', 'itemId', itemId);
            const localVarPath = `/api/groups/cookbooks/{item_id}`
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
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
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
         * @summary Get All
         * @param {string} [groupId]
         * @param {number} [page]
         * @param {number} [perPage]
         * @param {string} [orderBy]
         * @param {OrderDirection} [orderDirection]
         * @param {string} [queryFilter]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllApiGroupsCookbooksGet: async (groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options = {}) => {
            const localVarPath = `/api/groups/cookbooks`;
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
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
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
         * @param {ItemId} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiGroupsCookbooksItemIdGet: async (itemId, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('getOneApiGroupsCookbooksItemIdGet', 'itemId', itemId);
            const localVarPath = `/api/groups/cookbooks/{item_id}`
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
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
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
         * @summary Update Many
         * @param {Array<UpdateCookBook>} updateCookBook
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateManyApiGroupsCookbooksPut: async (updateCookBook, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'updateCookBook' is not null or undefined
            (0, common_1.assertParamExists)('updateManyApiGroupsCookbooksPut', 'updateCookBook', updateCookBook);
            const localVarPath = `/api/groups/cookbooks`;
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
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(updateCookBook, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {CreateCookBook} createCookBook
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiGroupsCookbooksItemIdPut: async (itemId, createCookBook, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiGroupsCookbooksItemIdPut', 'itemId', itemId);
            // verify required parameter 'createCookBook' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiGroupsCookbooksItemIdPut', 'createCookBook', createCookBook);
            const localVarPath = `/api/groups/cookbooks/{item_id}`
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
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(createCookBook, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.GroupsCookbooksApiAxiosParamCreator = GroupsCookbooksApiAxiosParamCreator;
/**
 * GroupsCookbooksApi - functional programming interface
 * @export
 */
const GroupsCookbooksApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.GroupsCookbooksApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Create One
         * @param {CreateCookBook} createCookBook
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiGroupsCookbooksPost(createCookBook, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiGroupsCookbooksPost(createCookBook, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteOneApiGroupsCookbooksItemIdDelete(itemId, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiGroupsCookbooksItemIdDelete(itemId, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get All
         * @param {string} [groupId]
         * @param {number} [page]
         * @param {number} [perPage]
         * @param {string} [orderBy]
         * @param {OrderDirection} [orderDirection]
         * @param {string} [queryFilter]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllApiGroupsCookbooksGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiGroupsCookbooksGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get One
         * @param {ItemId} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOneApiGroupsCookbooksItemIdGet(itemId, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiGroupsCookbooksItemIdGet(itemId, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Update Many
         * @param {Array<UpdateCookBook>} updateCookBook
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateManyApiGroupsCookbooksPut(updateCookBook, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateManyApiGroupsCookbooksPut(updateCookBook, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {CreateCookBook} createCookBook
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOneApiGroupsCookbooksItemIdPut(itemId, createCookBook, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiGroupsCookbooksItemIdPut(itemId, createCookBook, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.GroupsCookbooksApiFp = GroupsCookbooksApiFp;
/**
 * GroupsCookbooksApi - factory interface
 * @export
 */
const GroupsCookbooksApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.GroupsCookbooksApiFp)(configuration);
    return {
        /**
         *
         * @summary Create One
         * @param {CreateCookBook} createCookBook
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiGroupsCookbooksPost(createCookBook, groupId, acceptLanguage, options) {
            return localVarFp.createOneApiGroupsCookbooksPost(createCookBook, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiGroupsCookbooksItemIdDelete(itemId, groupId, acceptLanguage, options) {
            return localVarFp.deleteOneApiGroupsCookbooksItemIdDelete(itemId, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get All
         * @param {string} [groupId]
         * @param {number} [page]
         * @param {number} [perPage]
         * @param {string} [orderBy]
         * @param {OrderDirection} [orderDirection]
         * @param {string} [queryFilter]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllApiGroupsCookbooksGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            return localVarFp.getAllApiGroupsCookbooksGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get One
         * @param {ItemId} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiGroupsCookbooksItemIdGet(itemId, groupId, acceptLanguage, options) {
            return localVarFp.getOneApiGroupsCookbooksItemIdGet(itemId, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Update Many
         * @param {Array<UpdateCookBook>} updateCookBook
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateManyApiGroupsCookbooksPut(updateCookBook, groupId, acceptLanguage, options) {
            return localVarFp.updateManyApiGroupsCookbooksPut(updateCookBook, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {CreateCookBook} createCookBook
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiGroupsCookbooksItemIdPut(itemId, createCookBook, groupId, acceptLanguage, options) {
            return localVarFp.updateOneApiGroupsCookbooksItemIdPut(itemId, createCookBook, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.GroupsCookbooksApiFactory = GroupsCookbooksApiFactory;
/**
 * GroupsCookbooksApi - object-oriented interface
 * @export
 * @class GroupsCookbooksApi
 * @extends {BaseAPI}
 */
class GroupsCookbooksApi extends base_1.BaseAPI {
    /**
     *
     * @summary Create One
     * @param {CreateCookBook} createCookBook
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsCookbooksApi
     */
    createOneApiGroupsCookbooksPost(createCookBook, groupId, acceptLanguage, options) {
        return (0, exports.GroupsCookbooksApiFp)(this.configuration).createOneApiGroupsCookbooksPost(createCookBook, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsCookbooksApi
     */
    deleteOneApiGroupsCookbooksItemIdDelete(itemId, groupId, acceptLanguage, options) {
        return (0, exports.GroupsCookbooksApiFp)(this.configuration).deleteOneApiGroupsCookbooksItemIdDelete(itemId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get All
     * @param {string} [groupId]
     * @param {number} [page]
     * @param {number} [perPage]
     * @param {string} [orderBy]
     * @param {OrderDirection} [orderDirection]
     * @param {string} [queryFilter]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsCookbooksApi
     */
    getAllApiGroupsCookbooksGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
        return (0, exports.GroupsCookbooksApiFp)(this.configuration).getAllApiGroupsCookbooksGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get One
     * @param {ItemId} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsCookbooksApi
     */
    getOneApiGroupsCookbooksItemIdGet(itemId, groupId, acceptLanguage, options) {
        return (0, exports.GroupsCookbooksApiFp)(this.configuration).getOneApiGroupsCookbooksItemIdGet(itemId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Update Many
     * @param {Array<UpdateCookBook>} updateCookBook
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsCookbooksApi
     */
    updateManyApiGroupsCookbooksPut(updateCookBook, groupId, acceptLanguage, options) {
        return (0, exports.GroupsCookbooksApiFp)(this.configuration).updateManyApiGroupsCookbooksPut(updateCookBook, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {CreateCookBook} createCookBook
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsCookbooksApi
     */
    updateOneApiGroupsCookbooksItemIdPut(itemId, createCookBook, groupId, acceptLanguage, options) {
        return (0, exports.GroupsCookbooksApiFp)(this.configuration).updateOneApiGroupsCookbooksItemIdPut(itemId, createCookBook, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.GroupsCookbooksApi = GroupsCookbooksApi;
/**
 * GroupsEventNotificationsApi - axios parameter creator
 * @export
 */
const GroupsEventNotificationsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Create One
         * @param {GroupEventNotifierCreate} groupEventNotifierCreate
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiGroupsEventsNotificationsPost: async (groupEventNotifierCreate, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'groupEventNotifierCreate' is not null or undefined
            (0, common_1.assertParamExists)('createOneApiGroupsEventsNotificationsPost', 'groupEventNotifierCreate', groupEventNotifierCreate);
            const localVarPath = `/api/groups/events/notifications`;
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
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(groupEventNotifierCreate, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiGroupsEventsNotificationsItemIdDelete: async (itemId, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('deleteOneApiGroupsEventsNotificationsItemIdDelete', 'itemId', itemId);
            const localVarPath = `/api/groups/events/notifications/{item_id}`
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
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
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
         * @summary Get All
         * @param {string} [groupId]
         * @param {number} [page]
         * @param {number} [perPage]
         * @param {string} [orderBy]
         * @param {OrderDirection} [orderDirection]
         * @param {string} [queryFilter]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllApiGroupsEventsNotificationsGet: async (groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options = {}) => {
            const localVarPath = `/api/groups/events/notifications`;
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
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
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
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiGroupsEventsNotificationsItemIdGet: async (itemId, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('getOneApiGroupsEventsNotificationsItemIdGet', 'itemId', itemId);
            const localVarPath = `/api/groups/events/notifications/{item_id}`
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
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
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
         * @summary Test Notification
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        testNotificationApiGroupsEventsNotificationsItemIdTestPost: async (itemId, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('testNotificationApiGroupsEventsNotificationsItemIdTestPost', 'itemId', itemId);
            const localVarPath = `/api/groups/events/notifications/{item_id}/test`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
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
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
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
         * @summary Update One
         * @param {string} itemId
         * @param {GroupEventNotifierUpdate} groupEventNotifierUpdate
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiGroupsEventsNotificationsItemIdPut: async (itemId, groupEventNotifierUpdate, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiGroupsEventsNotificationsItemIdPut', 'itemId', itemId);
            // verify required parameter 'groupEventNotifierUpdate' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiGroupsEventsNotificationsItemIdPut', 'groupEventNotifierUpdate', groupEventNotifierUpdate);
            const localVarPath = `/api/groups/events/notifications/{item_id}`
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
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(groupEventNotifierUpdate, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.GroupsEventNotificationsApiAxiosParamCreator = GroupsEventNotificationsApiAxiosParamCreator;
/**
 * GroupsEventNotificationsApi - functional programming interface
 * @export
 */
const GroupsEventNotificationsApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.GroupsEventNotificationsApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Create One
         * @param {GroupEventNotifierCreate} groupEventNotifierCreate
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiGroupsEventsNotificationsPost(groupEventNotifierCreate, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiGroupsEventsNotificationsPost(groupEventNotifierCreate, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteOneApiGroupsEventsNotificationsItemIdDelete(itemId, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiGroupsEventsNotificationsItemIdDelete(itemId, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get All
         * @param {string} [groupId]
         * @param {number} [page]
         * @param {number} [perPage]
         * @param {string} [orderBy]
         * @param {OrderDirection} [orderDirection]
         * @param {string} [queryFilter]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllApiGroupsEventsNotificationsGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiGroupsEventsNotificationsGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOneApiGroupsEventsNotificationsItemIdGet(itemId, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiGroupsEventsNotificationsItemIdGet(itemId, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Test Notification
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async testNotificationApiGroupsEventsNotificationsItemIdTestPost(itemId, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.testNotificationApiGroupsEventsNotificationsItemIdTestPost(itemId, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {GroupEventNotifierUpdate} groupEventNotifierUpdate
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOneApiGroupsEventsNotificationsItemIdPut(itemId, groupEventNotifierUpdate, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiGroupsEventsNotificationsItemIdPut(itemId, groupEventNotifierUpdate, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.GroupsEventNotificationsApiFp = GroupsEventNotificationsApiFp;
/**
 * GroupsEventNotificationsApi - factory interface
 * @export
 */
const GroupsEventNotificationsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.GroupsEventNotificationsApiFp)(configuration);
    return {
        /**
         *
         * @summary Create One
         * @param {GroupEventNotifierCreate} groupEventNotifierCreate
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiGroupsEventsNotificationsPost(groupEventNotifierCreate, groupId, acceptLanguage, options) {
            return localVarFp.createOneApiGroupsEventsNotificationsPost(groupEventNotifierCreate, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiGroupsEventsNotificationsItemIdDelete(itemId, groupId, acceptLanguage, options) {
            return localVarFp.deleteOneApiGroupsEventsNotificationsItemIdDelete(itemId, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get All
         * @param {string} [groupId]
         * @param {number} [page]
         * @param {number} [perPage]
         * @param {string} [orderBy]
         * @param {OrderDirection} [orderDirection]
         * @param {string} [queryFilter]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllApiGroupsEventsNotificationsGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            return localVarFp.getAllApiGroupsEventsNotificationsGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiGroupsEventsNotificationsItemIdGet(itemId, groupId, acceptLanguage, options) {
            return localVarFp.getOneApiGroupsEventsNotificationsItemIdGet(itemId, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Test Notification
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        testNotificationApiGroupsEventsNotificationsItemIdTestPost(itemId, groupId, acceptLanguage, options) {
            return localVarFp.testNotificationApiGroupsEventsNotificationsItemIdTestPost(itemId, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {GroupEventNotifierUpdate} groupEventNotifierUpdate
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiGroupsEventsNotificationsItemIdPut(itemId, groupEventNotifierUpdate, groupId, acceptLanguage, options) {
            return localVarFp.updateOneApiGroupsEventsNotificationsItemIdPut(itemId, groupEventNotifierUpdate, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.GroupsEventNotificationsApiFactory = GroupsEventNotificationsApiFactory;
/**
 * GroupsEventNotificationsApi - object-oriented interface
 * @export
 * @class GroupsEventNotificationsApi
 * @extends {BaseAPI}
 */
class GroupsEventNotificationsApi extends base_1.BaseAPI {
    /**
     *
     * @summary Create One
     * @param {GroupEventNotifierCreate} groupEventNotifierCreate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsEventNotificationsApi
     */
    createOneApiGroupsEventsNotificationsPost(groupEventNotifierCreate, groupId, acceptLanguage, options) {
        return (0, exports.GroupsEventNotificationsApiFp)(this.configuration).createOneApiGroupsEventsNotificationsPost(groupEventNotifierCreate, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsEventNotificationsApi
     */
    deleteOneApiGroupsEventsNotificationsItemIdDelete(itemId, groupId, acceptLanguage, options) {
        return (0, exports.GroupsEventNotificationsApiFp)(this.configuration).deleteOneApiGroupsEventsNotificationsItemIdDelete(itemId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get All
     * @param {string} [groupId]
     * @param {number} [page]
     * @param {number} [perPage]
     * @param {string} [orderBy]
     * @param {OrderDirection} [orderDirection]
     * @param {string} [queryFilter]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsEventNotificationsApi
     */
    getAllApiGroupsEventsNotificationsGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
        return (0, exports.GroupsEventNotificationsApiFp)(this.configuration).getAllApiGroupsEventsNotificationsGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsEventNotificationsApi
     */
    getOneApiGroupsEventsNotificationsItemIdGet(itemId, groupId, acceptLanguage, options) {
        return (0, exports.GroupsEventNotificationsApiFp)(this.configuration).getOneApiGroupsEventsNotificationsItemIdGet(itemId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Test Notification
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsEventNotificationsApi
     */
    testNotificationApiGroupsEventsNotificationsItemIdTestPost(itemId, groupId, acceptLanguage, options) {
        return (0, exports.GroupsEventNotificationsApiFp)(this.configuration).testNotificationApiGroupsEventsNotificationsItemIdTestPost(itemId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {GroupEventNotifierUpdate} groupEventNotifierUpdate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsEventNotificationsApi
     */
    updateOneApiGroupsEventsNotificationsItemIdPut(itemId, groupEventNotifierUpdate, groupId, acceptLanguage, options) {
        return (0, exports.GroupsEventNotificationsApiFp)(this.configuration).updateOneApiGroupsEventsNotificationsItemIdPut(itemId, groupEventNotifierUpdate, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.GroupsEventNotificationsApi = GroupsEventNotificationsApi;
/**
 * GroupsInvitationsApi - axios parameter creator
 * @export
 */
const GroupsInvitationsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Create Invite Token
         * @param {CreateInviteToken} createInviteToken
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createInviteTokenApiGroupsInvitationsPost: async (createInviteToken, acceptLanguage, options = {}) => {
            // verify required parameter 'createInviteToken' is not null or undefined
            (0, common_1.assertParamExists)('createInviteTokenApiGroupsInvitationsPost', 'createInviteToken', createInviteToken);
            const localVarPath = `/api/groups/invitations`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(createInviteToken, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Email Invitation
         * @param {EmailInvitation} emailInvitation
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        emailInvitationApiGroupsInvitationsEmailPost: async (emailInvitation, acceptLanguage, options = {}) => {
            // verify required parameter 'emailInvitation' is not null or undefined
            (0, common_1.assertParamExists)('emailInvitationApiGroupsInvitationsEmailPost', 'emailInvitation', emailInvitation);
            const localVarPath = `/api/groups/invitations/email`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(emailInvitation, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Get Invite Tokens
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInviteTokensApiGroupsInvitationsGet: async (acceptLanguage, options = {}) => {
            const localVarPath = `/api/groups/invitations`;
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
    };
};
exports.GroupsInvitationsApiAxiosParamCreator = GroupsInvitationsApiAxiosParamCreator;
/**
 * GroupsInvitationsApi - functional programming interface
 * @export
 */
const GroupsInvitationsApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.GroupsInvitationsApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Create Invite Token
         * @param {CreateInviteToken} createInviteToken
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createInviteTokenApiGroupsInvitationsPost(createInviteToken, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createInviteTokenApiGroupsInvitationsPost(createInviteToken, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Email Invitation
         * @param {EmailInvitation} emailInvitation
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async emailInvitationApiGroupsInvitationsEmailPost(emailInvitation, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.emailInvitationApiGroupsInvitationsEmailPost(emailInvitation, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get Invite Tokens
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInviteTokensApiGroupsInvitationsGet(acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInviteTokensApiGroupsInvitationsGet(acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.GroupsInvitationsApiFp = GroupsInvitationsApiFp;
/**
 * GroupsInvitationsApi - factory interface
 * @export
 */
const GroupsInvitationsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.GroupsInvitationsApiFp)(configuration);
    return {
        /**
         *
         * @summary Create Invite Token
         * @param {CreateInviteToken} createInviteToken
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createInviteTokenApiGroupsInvitationsPost(createInviteToken, acceptLanguage, options) {
            return localVarFp.createInviteTokenApiGroupsInvitationsPost(createInviteToken, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Email Invitation
         * @param {EmailInvitation} emailInvitation
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        emailInvitationApiGroupsInvitationsEmailPost(emailInvitation, acceptLanguage, options) {
            return localVarFp.emailInvitationApiGroupsInvitationsEmailPost(emailInvitation, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get Invite Tokens
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInviteTokensApiGroupsInvitationsGet(acceptLanguage, options) {
            return localVarFp.getInviteTokensApiGroupsInvitationsGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.GroupsInvitationsApiFactory = GroupsInvitationsApiFactory;
/**
 * GroupsInvitationsApi - object-oriented interface
 * @export
 * @class GroupsInvitationsApi
 * @extends {BaseAPI}
 */
class GroupsInvitationsApi extends base_1.BaseAPI {
    /**
     *
     * @summary Create Invite Token
     * @param {CreateInviteToken} createInviteToken
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsInvitationsApi
     */
    createInviteTokenApiGroupsInvitationsPost(createInviteToken, acceptLanguage, options) {
        return (0, exports.GroupsInvitationsApiFp)(this.configuration).createInviteTokenApiGroupsInvitationsPost(createInviteToken, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Email Invitation
     * @param {EmailInvitation} emailInvitation
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsInvitationsApi
     */
    emailInvitationApiGroupsInvitationsEmailPost(emailInvitation, acceptLanguage, options) {
        return (0, exports.GroupsInvitationsApiFp)(this.configuration).emailInvitationApiGroupsInvitationsEmailPost(emailInvitation, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get Invite Tokens
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsInvitationsApi
     */
    getInviteTokensApiGroupsInvitationsGet(acceptLanguage, options) {
        return (0, exports.GroupsInvitationsApiFp)(this.configuration).getInviteTokensApiGroupsInvitationsGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.GroupsInvitationsApi = GroupsInvitationsApi;
/**
 * GroupsMealplanCategoriesApi - axios parameter creator
 * @export
 */
const GroupsMealplanCategoriesApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Get Mealplan Categories
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMealplanCategoriesApiGroupsCategoriesGet: async (acceptLanguage, options = {}) => {
            const localVarPath = `/api/groups/categories`;
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
         * @summary Update Mealplan Categories
         * @param {Array<CategoryBase>} categoryBase
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMealplanCategoriesApiGroupsCategoriesPut: async (categoryBase, acceptLanguage, options = {}) => {
            // verify required parameter 'categoryBase' is not null or undefined
            (0, common_1.assertParamExists)('updateMealplanCategoriesApiGroupsCategoriesPut', 'categoryBase', categoryBase);
            const localVarPath = `/api/groups/categories`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(categoryBase, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.GroupsMealplanCategoriesApiAxiosParamCreator = GroupsMealplanCategoriesApiAxiosParamCreator;
/**
 * GroupsMealplanCategoriesApi - functional programming interface
 * @export
 */
const GroupsMealplanCategoriesApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.GroupsMealplanCategoriesApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Get Mealplan Categories
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMealplanCategoriesApiGroupsCategoriesGet(acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMealplanCategoriesApiGroupsCategoriesGet(acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Update Mealplan Categories
         * @param {Array<CategoryBase>} categoryBase
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateMealplanCategoriesApiGroupsCategoriesPut(categoryBase, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateMealplanCategoriesApiGroupsCategoriesPut(categoryBase, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.GroupsMealplanCategoriesApiFp = GroupsMealplanCategoriesApiFp;
/**
 * GroupsMealplanCategoriesApi - factory interface
 * @export
 */
const GroupsMealplanCategoriesApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.GroupsMealplanCategoriesApiFp)(configuration);
    return {
        /**
         *
         * @summary Get Mealplan Categories
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMealplanCategoriesApiGroupsCategoriesGet(acceptLanguage, options) {
            return localVarFp.getMealplanCategoriesApiGroupsCategoriesGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Update Mealplan Categories
         * @param {Array<CategoryBase>} categoryBase
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMealplanCategoriesApiGroupsCategoriesPut(categoryBase, acceptLanguage, options) {
            return localVarFp.updateMealplanCategoriesApiGroupsCategoriesPut(categoryBase, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.GroupsMealplanCategoriesApiFactory = GroupsMealplanCategoriesApiFactory;
/**
 * GroupsMealplanCategoriesApi - object-oriented interface
 * @export
 * @class GroupsMealplanCategoriesApi
 * @extends {BaseAPI}
 */
class GroupsMealplanCategoriesApi extends base_1.BaseAPI {
    /**
     *
     * @summary Get Mealplan Categories
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplanCategoriesApi
     */
    getMealplanCategoriesApiGroupsCategoriesGet(acceptLanguage, options) {
        return (0, exports.GroupsMealplanCategoriesApiFp)(this.configuration).getMealplanCategoriesApiGroupsCategoriesGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Update Mealplan Categories
     * @param {Array<CategoryBase>} categoryBase
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplanCategoriesApi
     */
    updateMealplanCategoriesApiGroupsCategoriesPut(categoryBase, acceptLanguage, options) {
        return (0, exports.GroupsMealplanCategoriesApiFp)(this.configuration).updateMealplanCategoriesApiGroupsCategoriesPut(categoryBase, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.GroupsMealplanCategoriesApi = GroupsMealplanCategoriesApi;
/**
 * GroupsMealplanRulesApi - axios parameter creator
 * @export
 */
const GroupsMealplanRulesApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Create One
         * @param {PlanRulesCreate} planRulesCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiGroupsMealplansRulesPost: async (planRulesCreate, acceptLanguage, options = {}) => {
            // verify required parameter 'planRulesCreate' is not null or undefined
            (0, common_1.assertParamExists)('createOneApiGroupsMealplansRulesPost', 'planRulesCreate', planRulesCreate);
            const localVarPath = `/api/groups/mealplans/rules`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(planRulesCreate, localVarRequestOptions, configuration);
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
        deleteOneApiGroupsMealplansRulesItemIdDelete: async (itemId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('deleteOneApiGroupsMealplansRulesItemIdDelete', 'itemId', itemId);
            const localVarPath = `/api/groups/mealplans/rules/{item_id}`
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
        getAllApiGroupsMealplansRulesGet: async (page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options = {}) => {
            const localVarPath = `/api/groups/mealplans/rules`;
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
        getOneApiGroupsMealplansRulesItemIdGet: async (itemId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('getOneApiGroupsMealplansRulesItemIdGet', 'itemId', itemId);
            const localVarPath = `/api/groups/mealplans/rules/{item_id}`
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
         * @param {PlanRulesCreate} planRulesCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiGroupsMealplansRulesItemIdPut: async (itemId, planRulesCreate, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiGroupsMealplansRulesItemIdPut', 'itemId', itemId);
            // verify required parameter 'planRulesCreate' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiGroupsMealplansRulesItemIdPut', 'planRulesCreate', planRulesCreate);
            const localVarPath = `/api/groups/mealplans/rules/{item_id}`
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(planRulesCreate, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.GroupsMealplanRulesApiAxiosParamCreator = GroupsMealplanRulesApiAxiosParamCreator;
/**
 * GroupsMealplanRulesApi - functional programming interface
 * @export
 */
const GroupsMealplanRulesApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.GroupsMealplanRulesApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Create One
         * @param {PlanRulesCreate} planRulesCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiGroupsMealplansRulesPost(planRulesCreate, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiGroupsMealplansRulesPost(planRulesCreate, acceptLanguage, options);
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
        async deleteOneApiGroupsMealplansRulesItemIdDelete(itemId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiGroupsMealplansRulesItemIdDelete(itemId, acceptLanguage, options);
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
        async getAllApiGroupsMealplansRulesGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiGroupsMealplansRulesGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
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
        async getOneApiGroupsMealplansRulesItemIdGet(itemId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiGroupsMealplansRulesItemIdGet(itemId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {PlanRulesCreate} planRulesCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOneApiGroupsMealplansRulesItemIdPut(itemId, planRulesCreate, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiGroupsMealplansRulesItemIdPut(itemId, planRulesCreate, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.GroupsMealplanRulesApiFp = GroupsMealplanRulesApiFp;
/**
 * GroupsMealplanRulesApi - factory interface
 * @export
 */
const GroupsMealplanRulesApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.GroupsMealplanRulesApiFp)(configuration);
    return {
        /**
         *
         * @summary Create One
         * @param {PlanRulesCreate} planRulesCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiGroupsMealplansRulesPost(planRulesCreate, acceptLanguage, options) {
            return localVarFp.createOneApiGroupsMealplansRulesPost(planRulesCreate, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiGroupsMealplansRulesItemIdDelete(itemId, acceptLanguage, options) {
            return localVarFp.deleteOneApiGroupsMealplansRulesItemIdDelete(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
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
        getAllApiGroupsMealplansRulesGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            return localVarFp.getAllApiGroupsMealplansRulesGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiGroupsMealplansRulesItemIdGet(itemId, acceptLanguage, options) {
            return localVarFp.getOneApiGroupsMealplansRulesItemIdGet(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {PlanRulesCreate} planRulesCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiGroupsMealplansRulesItemIdPut(itemId, planRulesCreate, acceptLanguage, options) {
            return localVarFp.updateOneApiGroupsMealplansRulesItemIdPut(itemId, planRulesCreate, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.GroupsMealplanRulesApiFactory = GroupsMealplanRulesApiFactory;
/**
 * GroupsMealplanRulesApi - object-oriented interface
 * @export
 * @class GroupsMealplanRulesApi
 * @extends {BaseAPI}
 */
class GroupsMealplanRulesApi extends base_1.BaseAPI {
    /**
     *
     * @summary Create One
     * @param {PlanRulesCreate} planRulesCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplanRulesApi
     */
    createOneApiGroupsMealplansRulesPost(planRulesCreate, acceptLanguage, options) {
        return (0, exports.GroupsMealplanRulesApiFp)(this.configuration).createOneApiGroupsMealplansRulesPost(planRulesCreate, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplanRulesApi
     */
    deleteOneApiGroupsMealplansRulesItemIdDelete(itemId, acceptLanguage, options) {
        return (0, exports.GroupsMealplanRulesApiFp)(this.configuration).deleteOneApiGroupsMealplansRulesItemIdDelete(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
     * @memberof GroupsMealplanRulesApi
     */
    getAllApiGroupsMealplansRulesGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
        return (0, exports.GroupsMealplanRulesApiFp)(this.configuration).getAllApiGroupsMealplansRulesGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplanRulesApi
     */
    getOneApiGroupsMealplansRulesItemIdGet(itemId, acceptLanguage, options) {
        return (0, exports.GroupsMealplanRulesApiFp)(this.configuration).getOneApiGroupsMealplansRulesItemIdGet(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {PlanRulesCreate} planRulesCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplanRulesApi
     */
    updateOneApiGroupsMealplansRulesItemIdPut(itemId, planRulesCreate, acceptLanguage, options) {
        return (0, exports.GroupsMealplanRulesApiFp)(this.configuration).updateOneApiGroupsMealplansRulesItemIdPut(itemId, planRulesCreate, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.GroupsMealplanRulesApi = GroupsMealplanRulesApi;
/**
 * GroupsMealplansApi - axios parameter creator
 * @export
 */
const GroupsMealplansApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Create One
         * @param {CreatePlanEntry} createPlanEntry
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiGroupsMealplansPost: async (createPlanEntry, acceptLanguage, options = {}) => {
            // verify required parameter 'createPlanEntry' is not null or undefined
            (0, common_1.assertParamExists)('createOneApiGroupsMealplansPost', 'createPlanEntry', createPlanEntry);
            const localVarPath = `/api/groups/mealplans`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(createPlanEntry, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * create_random_meal is a route that provides the randomized functionality for mealplaners. It operates by following the rules setout in the Groups mealplan settings. If not settings are set, it will default return any random meal.  Refer to the mealplan settings routes for more information on how rules can be applied to the random meal selector.
         * @summary Create Random Meal
         * @param {CreateRandomEntry} createRandomEntry
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRandomMealApiGroupsMealplansRandomPost: async (createRandomEntry, acceptLanguage, options = {}) => {
            // verify required parameter 'createRandomEntry' is not null or undefined
            (0, common_1.assertParamExists)('createRandomMealApiGroupsMealplansRandomPost', 'createRandomEntry', createRandomEntry);
            const localVarPath = `/api/groups/mealplans/random`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(createRandomEntry, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Delete One
         * @param {number} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiGroupsMealplansItemIdDelete: async (itemId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('deleteOneApiGroupsMealplansItemIdDelete', 'itemId', itemId);
            const localVarPath = `/api/groups/mealplans/{item_id}`
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
         * @param {string} [startDate]
         * @param {string} [endDate]
         * @param {number} [page]
         * @param {number} [perPage]
         * @param {string} [orderBy]
         * @param {OrderDirection} [orderDirection]
         * @param {string} [queryFilter]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllApiGroupsMealplansGet: async (startDate, endDate, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options = {}) => {
            const localVarPath = `/api/groups/mealplans`;
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
            if (startDate !== undefined) {
                localVarQueryParameter['start_date'] = (startDate instanceof Date) ?
                    startDate.toISOString().substr(0, 10) :
                    startDate;
            }
            if (endDate !== undefined) {
                localVarQueryParameter['end_date'] = (endDate instanceof Date) ?
                    endDate.toISOString().substr(0, 10) :
                    endDate;
            }
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
         * @param {number} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiGroupsMealplansItemIdGet: async (itemId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('getOneApiGroupsMealplansItemIdGet', 'itemId', itemId);
            const localVarPath = `/api/groups/mealplans/{item_id}`
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
         * @summary Get Todays Meals
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTodaysMealsApiGroupsMealplansTodayGet: async (acceptLanguage, options = {}) => {
            const localVarPath = `/api/groups/mealplans/today`;
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
         * @param {number} itemId
         * @param {UpdatePlanEntry} updatePlanEntry
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiGroupsMealplansItemIdPut: async (itemId, updatePlanEntry, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiGroupsMealplansItemIdPut', 'itemId', itemId);
            // verify required parameter 'updatePlanEntry' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiGroupsMealplansItemIdPut', 'updatePlanEntry', updatePlanEntry);
            const localVarPath = `/api/groups/mealplans/{item_id}`
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(updatePlanEntry, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.GroupsMealplansApiAxiosParamCreator = GroupsMealplansApiAxiosParamCreator;
/**
 * GroupsMealplansApi - functional programming interface
 * @export
 */
const GroupsMealplansApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.GroupsMealplansApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Create One
         * @param {CreatePlanEntry} createPlanEntry
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiGroupsMealplansPost(createPlanEntry, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiGroupsMealplansPost(createPlanEntry, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * create_random_meal is a route that provides the randomized functionality for mealplaners. It operates by following the rules setout in the Groups mealplan settings. If not settings are set, it will default return any random meal.  Refer to the mealplan settings routes for more information on how rules can be applied to the random meal selector.
         * @summary Create Random Meal
         * @param {CreateRandomEntry} createRandomEntry
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createRandomMealApiGroupsMealplansRandomPost(createRandomEntry, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRandomMealApiGroupsMealplansRandomPost(createRandomEntry, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Delete One
         * @param {number} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteOneApiGroupsMealplansItemIdDelete(itemId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiGroupsMealplansItemIdDelete(itemId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get All
         * @param {string} [startDate]
         * @param {string} [endDate]
         * @param {number} [page]
         * @param {number} [perPage]
         * @param {string} [orderBy]
         * @param {OrderDirection} [orderDirection]
         * @param {string} [queryFilter]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllApiGroupsMealplansGet(startDate, endDate, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiGroupsMealplansGet(startDate, endDate, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get One
         * @param {number} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOneApiGroupsMealplansItemIdGet(itemId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiGroupsMealplansItemIdGet(itemId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get Todays Meals
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTodaysMealsApiGroupsMealplansTodayGet(acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTodaysMealsApiGroupsMealplansTodayGet(acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Update One
         * @param {number} itemId
         * @param {UpdatePlanEntry} updatePlanEntry
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOneApiGroupsMealplansItemIdPut(itemId, updatePlanEntry, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiGroupsMealplansItemIdPut(itemId, updatePlanEntry, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.GroupsMealplansApiFp = GroupsMealplansApiFp;
/**
 * GroupsMealplansApi - factory interface
 * @export
 */
const GroupsMealplansApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.GroupsMealplansApiFp)(configuration);
    return {
        /**
         *
         * @summary Create One
         * @param {CreatePlanEntry} createPlanEntry
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiGroupsMealplansPost(createPlanEntry, acceptLanguage, options) {
            return localVarFp.createOneApiGroupsMealplansPost(createPlanEntry, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * create_random_meal is a route that provides the randomized functionality for mealplaners. It operates by following the rules setout in the Groups mealplan settings. If not settings are set, it will default return any random meal.  Refer to the mealplan settings routes for more information on how rules can be applied to the random meal selector.
         * @summary Create Random Meal
         * @param {CreateRandomEntry} createRandomEntry
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRandomMealApiGroupsMealplansRandomPost(createRandomEntry, acceptLanguage, options) {
            return localVarFp.createRandomMealApiGroupsMealplansRandomPost(createRandomEntry, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Delete One
         * @param {number} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiGroupsMealplansItemIdDelete(itemId, acceptLanguage, options) {
            return localVarFp.deleteOneApiGroupsMealplansItemIdDelete(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get All
         * @param {string} [startDate]
         * @param {string} [endDate]
         * @param {number} [page]
         * @param {number} [perPage]
         * @param {string} [orderBy]
         * @param {OrderDirection} [orderDirection]
         * @param {string} [queryFilter]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllApiGroupsMealplansGet(startDate, endDate, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            return localVarFp.getAllApiGroupsMealplansGet(startDate, endDate, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get One
         * @param {number} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiGroupsMealplansItemIdGet(itemId, acceptLanguage, options) {
            return localVarFp.getOneApiGroupsMealplansItemIdGet(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get Todays Meals
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTodaysMealsApiGroupsMealplansTodayGet(acceptLanguage, options) {
            return localVarFp.getTodaysMealsApiGroupsMealplansTodayGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Update One
         * @param {number} itemId
         * @param {UpdatePlanEntry} updatePlanEntry
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiGroupsMealplansItemIdPut(itemId, updatePlanEntry, acceptLanguage, options) {
            return localVarFp.updateOneApiGroupsMealplansItemIdPut(itemId, updatePlanEntry, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.GroupsMealplansApiFactory = GroupsMealplansApiFactory;
/**
 * GroupsMealplansApi - object-oriented interface
 * @export
 * @class GroupsMealplansApi
 * @extends {BaseAPI}
 */
class GroupsMealplansApi extends base_1.BaseAPI {
    /**
     *
     * @summary Create One
     * @param {CreatePlanEntry} createPlanEntry
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplansApi
     */
    createOneApiGroupsMealplansPost(createPlanEntry, acceptLanguage, options) {
        return (0, exports.GroupsMealplansApiFp)(this.configuration).createOneApiGroupsMealplansPost(createPlanEntry, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * create_random_meal is a route that provides the randomized functionality for mealplaners. It operates by following the rules setout in the Groups mealplan settings. If not settings are set, it will default return any random meal.  Refer to the mealplan settings routes for more information on how rules can be applied to the random meal selector.
     * @summary Create Random Meal
     * @param {CreateRandomEntry} createRandomEntry
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplansApi
     */
    createRandomMealApiGroupsMealplansRandomPost(createRandomEntry, acceptLanguage, options) {
        return (0, exports.GroupsMealplansApiFp)(this.configuration).createRandomMealApiGroupsMealplansRandomPost(createRandomEntry, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Delete One
     * @param {number} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplansApi
     */
    deleteOneApiGroupsMealplansItemIdDelete(itemId, acceptLanguage, options) {
        return (0, exports.GroupsMealplansApiFp)(this.configuration).deleteOneApiGroupsMealplansItemIdDelete(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get All
     * @param {string} [startDate]
     * @param {string} [endDate]
     * @param {number} [page]
     * @param {number} [perPage]
     * @param {string} [orderBy]
     * @param {OrderDirection} [orderDirection]
     * @param {string} [queryFilter]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplansApi
     */
    getAllApiGroupsMealplansGet(startDate, endDate, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
        return (0, exports.GroupsMealplansApiFp)(this.configuration).getAllApiGroupsMealplansGet(startDate, endDate, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get One
     * @param {number} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplansApi
     */
    getOneApiGroupsMealplansItemIdGet(itemId, acceptLanguage, options) {
        return (0, exports.GroupsMealplansApiFp)(this.configuration).getOneApiGroupsMealplansItemIdGet(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get Todays Meals
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplansApi
     */
    getTodaysMealsApiGroupsMealplansTodayGet(acceptLanguage, options) {
        return (0, exports.GroupsMealplansApiFp)(this.configuration).getTodaysMealsApiGroupsMealplansTodayGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Update One
     * @param {number} itemId
     * @param {UpdatePlanEntry} updatePlanEntry
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplansApi
     */
    updateOneApiGroupsMealplansItemIdPut(itemId, updatePlanEntry, acceptLanguage, options) {
        return (0, exports.GroupsMealplansApiFp)(this.configuration).updateOneApiGroupsMealplansItemIdPut(itemId, updatePlanEntry, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.GroupsMealplansApi = GroupsMealplansApi;
/**
 * GroupsMigrationsApi - axios parameter creator
 * @export
 */
const GroupsMigrationsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Start Data Migration
         * @param {SupportedMigrations} migrationType
         * @param {File} archive
         * @param {string} [acceptLanguage]
         * @param {boolean} [addMigrationTag]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startDataMigrationApiGroupsMigrationsPost: async (migrationType, archive, acceptLanguage, addMigrationTag, options = {}) => {
            // verify required parameter 'migrationType' is not null or undefined
            (0, common_1.assertParamExists)('startDataMigrationApiGroupsMigrationsPost', 'migrationType', migrationType);
            // verify required parameter 'archive' is not null or undefined
            (0, common_1.assertParamExists)('startDataMigrationApiGroupsMigrationsPost', 'archive', archive);
            const localVarPath = `/api/groups/migrations`;
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
            if (addMigrationTag !== undefined) {
                localVarFormParams.append('add_migration_tag', addMigrationTag);
            }
            if (migrationType !== undefined) {
                localVarFormParams.append('migration_type', new Blob([JSON.stringify(migrationType)], { type: "application/json", }));
            }
            if (archive !== undefined) {
                localVarFormParams.append('archive', archive);
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
exports.GroupsMigrationsApiAxiosParamCreator = GroupsMigrationsApiAxiosParamCreator;
/**
 * GroupsMigrationsApi - functional programming interface
 * @export
 */
const GroupsMigrationsApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.GroupsMigrationsApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Start Data Migration
         * @param {SupportedMigrations} migrationType
         * @param {File} archive
         * @param {string} [acceptLanguage]
         * @param {boolean} [addMigrationTag]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async startDataMigrationApiGroupsMigrationsPost(migrationType, archive, acceptLanguage, addMigrationTag, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startDataMigrationApiGroupsMigrationsPost(migrationType, archive, acceptLanguage, addMigrationTag, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.GroupsMigrationsApiFp = GroupsMigrationsApiFp;
/**
 * GroupsMigrationsApi - factory interface
 * @export
 */
const GroupsMigrationsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.GroupsMigrationsApiFp)(configuration);
    return {
        /**
         *
         * @summary Start Data Migration
         * @param {SupportedMigrations} migrationType
         * @param {File} archive
         * @param {string} [acceptLanguage]
         * @param {boolean} [addMigrationTag]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startDataMigrationApiGroupsMigrationsPost(migrationType, archive, acceptLanguage, addMigrationTag, options) {
            return localVarFp.startDataMigrationApiGroupsMigrationsPost(migrationType, archive, acceptLanguage, addMigrationTag, options).then((request) => request(axios, basePath));
        },
    };
};
exports.GroupsMigrationsApiFactory = GroupsMigrationsApiFactory;
/**
 * GroupsMigrationsApi - object-oriented interface
 * @export
 * @class GroupsMigrationsApi
 * @extends {BaseAPI}
 */
class GroupsMigrationsApi extends base_1.BaseAPI {
    /**
     *
     * @summary Start Data Migration
     * @param {SupportedMigrations} migrationType
     * @param {File} archive
     * @param {string} [acceptLanguage]
     * @param {boolean} [addMigrationTag]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMigrationsApi
     */
    startDataMigrationApiGroupsMigrationsPost(migrationType, archive, acceptLanguage, addMigrationTag, options) {
        return (0, exports.GroupsMigrationsApiFp)(this.configuration).startDataMigrationApiGroupsMigrationsPost(migrationType, archive, acceptLanguage, addMigrationTag, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.GroupsMigrationsApi = GroupsMigrationsApi;
/**
 * GroupsMultiPurposeLabelsApi - axios parameter creator
 * @export
 */
const GroupsMultiPurposeLabelsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Create One
         * @param {MultiPurposeLabelCreate} multiPurposeLabelCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiGroupsLabelsPost: async (multiPurposeLabelCreate, acceptLanguage, options = {}) => {
            // verify required parameter 'multiPurposeLabelCreate' is not null or undefined
            (0, common_1.assertParamExists)('createOneApiGroupsLabelsPost', 'multiPurposeLabelCreate', multiPurposeLabelCreate);
            const localVarPath = `/api/groups/labels`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(multiPurposeLabelCreate, localVarRequestOptions, configuration);
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
        deleteOneApiGroupsLabelsItemIdDelete: async (itemId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('deleteOneApiGroupsLabelsItemIdDelete', 'itemId', itemId);
            const localVarPath = `/api/groups/labels/{item_id}`
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
        getAllApiGroupsLabelsGet: async (page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options = {}) => {
            const localVarPath = `/api/groups/labels`;
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
        getOneApiGroupsLabelsItemIdGet: async (itemId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('getOneApiGroupsLabelsItemIdGet', 'itemId', itemId);
            const localVarPath = `/api/groups/labels/{item_id}`
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
         * @param {MultiPurposeLabelUpdate} multiPurposeLabelUpdate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiGroupsLabelsItemIdPut: async (itemId, multiPurposeLabelUpdate, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiGroupsLabelsItemIdPut', 'itemId', itemId);
            // verify required parameter 'multiPurposeLabelUpdate' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiGroupsLabelsItemIdPut', 'multiPurposeLabelUpdate', multiPurposeLabelUpdate);
            const localVarPath = `/api/groups/labels/{item_id}`
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(multiPurposeLabelUpdate, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.GroupsMultiPurposeLabelsApiAxiosParamCreator = GroupsMultiPurposeLabelsApiAxiosParamCreator;
/**
 * GroupsMultiPurposeLabelsApi - functional programming interface
 * @export
 */
const GroupsMultiPurposeLabelsApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.GroupsMultiPurposeLabelsApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Create One
         * @param {MultiPurposeLabelCreate} multiPurposeLabelCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiGroupsLabelsPost(multiPurposeLabelCreate, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiGroupsLabelsPost(multiPurposeLabelCreate, acceptLanguage, options);
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
        async deleteOneApiGroupsLabelsItemIdDelete(itemId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiGroupsLabelsItemIdDelete(itemId, acceptLanguage, options);
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
        async getAllApiGroupsLabelsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiGroupsLabelsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
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
        async getOneApiGroupsLabelsItemIdGet(itemId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiGroupsLabelsItemIdGet(itemId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {MultiPurposeLabelUpdate} multiPurposeLabelUpdate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOneApiGroupsLabelsItemIdPut(itemId, multiPurposeLabelUpdate, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiGroupsLabelsItemIdPut(itemId, multiPurposeLabelUpdate, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.GroupsMultiPurposeLabelsApiFp = GroupsMultiPurposeLabelsApiFp;
/**
 * GroupsMultiPurposeLabelsApi - factory interface
 * @export
 */
const GroupsMultiPurposeLabelsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.GroupsMultiPurposeLabelsApiFp)(configuration);
    return {
        /**
         *
         * @summary Create One
         * @param {MultiPurposeLabelCreate} multiPurposeLabelCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiGroupsLabelsPost(multiPurposeLabelCreate, acceptLanguage, options) {
            return localVarFp.createOneApiGroupsLabelsPost(multiPurposeLabelCreate, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiGroupsLabelsItemIdDelete(itemId, acceptLanguage, options) {
            return localVarFp.deleteOneApiGroupsLabelsItemIdDelete(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
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
        getAllApiGroupsLabelsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            return localVarFp.getAllApiGroupsLabelsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiGroupsLabelsItemIdGet(itemId, acceptLanguage, options) {
            return localVarFp.getOneApiGroupsLabelsItemIdGet(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {MultiPurposeLabelUpdate} multiPurposeLabelUpdate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiGroupsLabelsItemIdPut(itemId, multiPurposeLabelUpdate, acceptLanguage, options) {
            return localVarFp.updateOneApiGroupsLabelsItemIdPut(itemId, multiPurposeLabelUpdate, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.GroupsMultiPurposeLabelsApiFactory = GroupsMultiPurposeLabelsApiFactory;
/**
 * GroupsMultiPurposeLabelsApi - object-oriented interface
 * @export
 * @class GroupsMultiPurposeLabelsApi
 * @extends {BaseAPI}
 */
class GroupsMultiPurposeLabelsApi extends base_1.BaseAPI {
    /**
     *
     * @summary Create One
     * @param {MultiPurposeLabelCreate} multiPurposeLabelCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMultiPurposeLabelsApi
     */
    createOneApiGroupsLabelsPost(multiPurposeLabelCreate, acceptLanguage, options) {
        return (0, exports.GroupsMultiPurposeLabelsApiFp)(this.configuration).createOneApiGroupsLabelsPost(multiPurposeLabelCreate, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMultiPurposeLabelsApi
     */
    deleteOneApiGroupsLabelsItemIdDelete(itemId, acceptLanguage, options) {
        return (0, exports.GroupsMultiPurposeLabelsApiFp)(this.configuration).deleteOneApiGroupsLabelsItemIdDelete(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
     * @memberof GroupsMultiPurposeLabelsApi
     */
    getAllApiGroupsLabelsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
        return (0, exports.GroupsMultiPurposeLabelsApiFp)(this.configuration).getAllApiGroupsLabelsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMultiPurposeLabelsApi
     */
    getOneApiGroupsLabelsItemIdGet(itemId, acceptLanguage, options) {
        return (0, exports.GroupsMultiPurposeLabelsApiFp)(this.configuration).getOneApiGroupsLabelsItemIdGet(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {MultiPurposeLabelUpdate} multiPurposeLabelUpdate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMultiPurposeLabelsApi
     */
    updateOneApiGroupsLabelsItemIdPut(itemId, multiPurposeLabelUpdate, acceptLanguage, options) {
        return (0, exports.GroupsMultiPurposeLabelsApiFp)(this.configuration).updateOneApiGroupsLabelsItemIdPut(itemId, multiPurposeLabelUpdate, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.GroupsMultiPurposeLabelsApi = GroupsMultiPurposeLabelsApi;
/**
 * GroupsReportsApi - axios parameter creator
 * @export
 */
const GroupsReportsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiGroupsReportsItemIdDelete: async (itemId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('deleteOneApiGroupsReportsItemIdDelete', 'itemId', itemId);
            const localVarPath = `/api/groups/reports/{item_id}`
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
         * @param {ReportCategory} [reportType]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllApiGroupsReportsGet: async (reportType, acceptLanguage, options = {}) => {
            const localVarPath = `/api/groups/reports`;
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
            if (reportType !== undefined) {
                localVarQueryParameter['report_type'] = reportType;
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
        getOneApiGroupsReportsItemIdGet: async (itemId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('getOneApiGroupsReportsItemIdGet', 'itemId', itemId);
            const localVarPath = `/api/groups/reports/{item_id}`
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
    };
};
exports.GroupsReportsApiAxiosParamCreator = GroupsReportsApiAxiosParamCreator;
/**
 * GroupsReportsApi - functional programming interface
 * @export
 */
const GroupsReportsApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.GroupsReportsApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteOneApiGroupsReportsItemIdDelete(itemId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiGroupsReportsItemIdDelete(itemId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get All
         * @param {ReportCategory} [reportType]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllApiGroupsReportsGet(reportType, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiGroupsReportsGet(reportType, acceptLanguage, options);
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
        async getOneApiGroupsReportsItemIdGet(itemId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiGroupsReportsItemIdGet(itemId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.GroupsReportsApiFp = GroupsReportsApiFp;
/**
 * GroupsReportsApi - factory interface
 * @export
 */
const GroupsReportsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.GroupsReportsApiFp)(configuration);
    return {
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiGroupsReportsItemIdDelete(itemId, acceptLanguage, options) {
            return localVarFp.deleteOneApiGroupsReportsItemIdDelete(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get All
         * @param {ReportCategory} [reportType]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllApiGroupsReportsGet(reportType, acceptLanguage, options) {
            return localVarFp.getAllApiGroupsReportsGet(reportType, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiGroupsReportsItemIdGet(itemId, acceptLanguage, options) {
            return localVarFp.getOneApiGroupsReportsItemIdGet(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.GroupsReportsApiFactory = GroupsReportsApiFactory;
/**
 * GroupsReportsApi - object-oriented interface
 * @export
 * @class GroupsReportsApi
 * @extends {BaseAPI}
 */
class GroupsReportsApi extends base_1.BaseAPI {
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsReportsApi
     */
    deleteOneApiGroupsReportsItemIdDelete(itemId, acceptLanguage, options) {
        return (0, exports.GroupsReportsApiFp)(this.configuration).deleteOneApiGroupsReportsItemIdDelete(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get All
     * @param {ReportCategory} [reportType]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsReportsApi
     */
    getAllApiGroupsReportsGet(reportType, acceptLanguage, options) {
        return (0, exports.GroupsReportsApiFp)(this.configuration).getAllApiGroupsReportsGet(reportType, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsReportsApi
     */
    getOneApiGroupsReportsItemIdGet(itemId, acceptLanguage, options) {
        return (0, exports.GroupsReportsApiFp)(this.configuration).getOneApiGroupsReportsItemIdGet(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.GroupsReportsApi = GroupsReportsApi;
/**
 * GroupsSeedersApi - axios parameter creator
 * @export
 */
const GroupsSeedersApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Seed Foods
         * @param {SeederConfig} seederConfig
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        seedFoodsApiGroupsSeedersFoodsPost: async (seederConfig, acceptLanguage, options = {}) => {
            // verify required parameter 'seederConfig' is not null or undefined
            (0, common_1.assertParamExists)('seedFoodsApiGroupsSeedersFoodsPost', 'seederConfig', seederConfig);
            const localVarPath = `/api/groups/seeders/foods`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(seederConfig, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Seed Labels
         * @param {SeederConfig} seederConfig
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        seedLabelsApiGroupsSeedersLabelsPost: async (seederConfig, acceptLanguage, options = {}) => {
            // verify required parameter 'seederConfig' is not null or undefined
            (0, common_1.assertParamExists)('seedLabelsApiGroupsSeedersLabelsPost', 'seederConfig', seederConfig);
            const localVarPath = `/api/groups/seeders/labels`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(seederConfig, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Seed Units
         * @param {SeederConfig} seederConfig
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        seedUnitsApiGroupsSeedersUnitsPost: async (seederConfig, acceptLanguage, options = {}) => {
            // verify required parameter 'seederConfig' is not null or undefined
            (0, common_1.assertParamExists)('seedUnitsApiGroupsSeedersUnitsPost', 'seederConfig', seederConfig);
            const localVarPath = `/api/groups/seeders/units`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(seederConfig, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.GroupsSeedersApiAxiosParamCreator = GroupsSeedersApiAxiosParamCreator;
/**
 * GroupsSeedersApi - functional programming interface
 * @export
 */
const GroupsSeedersApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.GroupsSeedersApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Seed Foods
         * @param {SeederConfig} seederConfig
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async seedFoodsApiGroupsSeedersFoodsPost(seederConfig, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.seedFoodsApiGroupsSeedersFoodsPost(seederConfig, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Seed Labels
         * @param {SeederConfig} seederConfig
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async seedLabelsApiGroupsSeedersLabelsPost(seederConfig, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.seedLabelsApiGroupsSeedersLabelsPost(seederConfig, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Seed Units
         * @param {SeederConfig} seederConfig
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async seedUnitsApiGroupsSeedersUnitsPost(seederConfig, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.seedUnitsApiGroupsSeedersUnitsPost(seederConfig, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.GroupsSeedersApiFp = GroupsSeedersApiFp;
/**
 * GroupsSeedersApi - factory interface
 * @export
 */
const GroupsSeedersApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.GroupsSeedersApiFp)(configuration);
    return {
        /**
         *
         * @summary Seed Foods
         * @param {SeederConfig} seederConfig
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        seedFoodsApiGroupsSeedersFoodsPost(seederConfig, acceptLanguage, options) {
            return localVarFp.seedFoodsApiGroupsSeedersFoodsPost(seederConfig, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Seed Labels
         * @param {SeederConfig} seederConfig
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        seedLabelsApiGroupsSeedersLabelsPost(seederConfig, acceptLanguage, options) {
            return localVarFp.seedLabelsApiGroupsSeedersLabelsPost(seederConfig, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Seed Units
         * @param {SeederConfig} seederConfig
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        seedUnitsApiGroupsSeedersUnitsPost(seederConfig, acceptLanguage, options) {
            return localVarFp.seedUnitsApiGroupsSeedersUnitsPost(seederConfig, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.GroupsSeedersApiFactory = GroupsSeedersApiFactory;
/**
 * GroupsSeedersApi - object-oriented interface
 * @export
 * @class GroupsSeedersApi
 * @extends {BaseAPI}
 */
class GroupsSeedersApi extends base_1.BaseAPI {
    /**
     *
     * @summary Seed Foods
     * @param {SeederConfig} seederConfig
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsSeedersApi
     */
    seedFoodsApiGroupsSeedersFoodsPost(seederConfig, acceptLanguage, options) {
        return (0, exports.GroupsSeedersApiFp)(this.configuration).seedFoodsApiGroupsSeedersFoodsPost(seederConfig, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Seed Labels
     * @param {SeederConfig} seederConfig
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsSeedersApi
     */
    seedLabelsApiGroupsSeedersLabelsPost(seederConfig, acceptLanguage, options) {
        return (0, exports.GroupsSeedersApiFp)(this.configuration).seedLabelsApiGroupsSeedersLabelsPost(seederConfig, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Seed Units
     * @param {SeederConfig} seederConfig
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsSeedersApi
     */
    seedUnitsApiGroupsSeedersUnitsPost(seederConfig, acceptLanguage, options) {
        return (0, exports.GroupsSeedersApiFp)(this.configuration).seedUnitsApiGroupsSeedersUnitsPost(seederConfig, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.GroupsSeedersApi = GroupsSeedersApi;
/**
 * GroupsSelfServiceApi - axios parameter creator
 * @export
 */
const GroupsSelfServiceApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Returns the Group of user lists
         * @summary Get Group Members
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroupMembersApiGroupsMembersGet: async (acceptLanguage, options = {}) => {
            const localVarPath = `/api/groups/members`;
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
         * @summary Get Group Preferences
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroupPreferencesApiGroupsPreferencesGet: async (acceptLanguage, options = {}) => {
            const localVarPath = `/api/groups/preferences`;
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
         * Returns the Group Data for the Current User
         * @summary Get Logged In User Group
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLoggedInUserGroupApiGroupsSelfGet: async (acceptLanguage, options = {}) => {
            const localVarPath = `/api/groups/self`;
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
         * @summary Get Statistics
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStatisticsApiGroupsStatisticsGet: async (acceptLanguage, options = {}) => {
            const localVarPath = `/api/groups/statistics`;
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
         * @summary Get Storage
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStorageApiGroupsStorageGet: async (acceptLanguage, options = {}) => {
            const localVarPath = `/api/groups/storage`;
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
         * @summary Set Member Permissions
         * @param {SetPermissions} setPermissions
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setMemberPermissionsApiGroupsPermissionsPut: async (setPermissions, acceptLanguage, options = {}) => {
            // verify required parameter 'setPermissions' is not null or undefined
            (0, common_1.assertParamExists)('setMemberPermissionsApiGroupsPermissionsPut', 'setPermissions', setPermissions);
            const localVarPath = `/api/groups/permissions`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(setPermissions, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Update Group Preferences
         * @param {UpdateGroupPreferences} updateGroupPreferences
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateGroupPreferencesApiGroupsPreferencesPut: async (updateGroupPreferences, acceptLanguage, options = {}) => {
            // verify required parameter 'updateGroupPreferences' is not null or undefined
            (0, common_1.assertParamExists)('updateGroupPreferencesApiGroupsPreferencesPut', 'updateGroupPreferences', updateGroupPreferences);
            const localVarPath = `/api/groups/preferences`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(updateGroupPreferences, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.GroupsSelfServiceApiAxiosParamCreator = GroupsSelfServiceApiAxiosParamCreator;
/**
 * GroupsSelfServiceApi - functional programming interface
 * @export
 */
const GroupsSelfServiceApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.GroupsSelfServiceApiAxiosParamCreator)(configuration);
    return {
        /**
         * Returns the Group of user lists
         * @summary Get Group Members
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGroupMembersApiGroupsMembersGet(acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGroupMembersApiGroupsMembersGet(acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get Group Preferences
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGroupPreferencesApiGroupsPreferencesGet(acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGroupPreferencesApiGroupsPreferencesGet(acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Returns the Group Data for the Current User
         * @summary Get Logged In User Group
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLoggedInUserGroupApiGroupsSelfGet(acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLoggedInUserGroupApiGroupsSelfGet(acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get Statistics
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStatisticsApiGroupsStatisticsGet(acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStatisticsApiGroupsStatisticsGet(acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get Storage
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStorageApiGroupsStorageGet(acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStorageApiGroupsStorageGet(acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Set Member Permissions
         * @param {SetPermissions} setPermissions
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setMemberPermissionsApiGroupsPermissionsPut(setPermissions, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setMemberPermissionsApiGroupsPermissionsPut(setPermissions, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Update Group Preferences
         * @param {UpdateGroupPreferences} updateGroupPreferences
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateGroupPreferencesApiGroupsPreferencesPut(updateGroupPreferences, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateGroupPreferencesApiGroupsPreferencesPut(updateGroupPreferences, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.GroupsSelfServiceApiFp = GroupsSelfServiceApiFp;
/**
 * GroupsSelfServiceApi - factory interface
 * @export
 */
const GroupsSelfServiceApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.GroupsSelfServiceApiFp)(configuration);
    return {
        /**
         * Returns the Group of user lists
         * @summary Get Group Members
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroupMembersApiGroupsMembersGet(acceptLanguage, options) {
            return localVarFp.getGroupMembersApiGroupsMembersGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get Group Preferences
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroupPreferencesApiGroupsPreferencesGet(acceptLanguage, options) {
            return localVarFp.getGroupPreferencesApiGroupsPreferencesGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the Group Data for the Current User
         * @summary Get Logged In User Group
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLoggedInUserGroupApiGroupsSelfGet(acceptLanguage, options) {
            return localVarFp.getLoggedInUserGroupApiGroupsSelfGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get Statistics
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStatisticsApiGroupsStatisticsGet(acceptLanguage, options) {
            return localVarFp.getStatisticsApiGroupsStatisticsGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get Storage
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStorageApiGroupsStorageGet(acceptLanguage, options) {
            return localVarFp.getStorageApiGroupsStorageGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Set Member Permissions
         * @param {SetPermissions} setPermissions
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setMemberPermissionsApiGroupsPermissionsPut(setPermissions, acceptLanguage, options) {
            return localVarFp.setMemberPermissionsApiGroupsPermissionsPut(setPermissions, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Update Group Preferences
         * @param {UpdateGroupPreferences} updateGroupPreferences
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateGroupPreferencesApiGroupsPreferencesPut(updateGroupPreferences, acceptLanguage, options) {
            return localVarFp.updateGroupPreferencesApiGroupsPreferencesPut(updateGroupPreferences, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.GroupsSelfServiceApiFactory = GroupsSelfServiceApiFactory;
/**
 * GroupsSelfServiceApi - object-oriented interface
 * @export
 * @class GroupsSelfServiceApi
 * @extends {BaseAPI}
 */
class GroupsSelfServiceApi extends base_1.BaseAPI {
    /**
     * Returns the Group of user lists
     * @summary Get Group Members
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsSelfServiceApi
     */
    getGroupMembersApiGroupsMembersGet(acceptLanguage, options) {
        return (0, exports.GroupsSelfServiceApiFp)(this.configuration).getGroupMembersApiGroupsMembersGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get Group Preferences
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsSelfServiceApi
     */
    getGroupPreferencesApiGroupsPreferencesGet(acceptLanguage, options) {
        return (0, exports.GroupsSelfServiceApiFp)(this.configuration).getGroupPreferencesApiGroupsPreferencesGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns the Group Data for the Current User
     * @summary Get Logged In User Group
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsSelfServiceApi
     */
    getLoggedInUserGroupApiGroupsSelfGet(acceptLanguage, options) {
        return (0, exports.GroupsSelfServiceApiFp)(this.configuration).getLoggedInUserGroupApiGroupsSelfGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get Statistics
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsSelfServiceApi
     */
    getStatisticsApiGroupsStatisticsGet(acceptLanguage, options) {
        return (0, exports.GroupsSelfServiceApiFp)(this.configuration).getStatisticsApiGroupsStatisticsGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get Storage
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsSelfServiceApi
     */
    getStorageApiGroupsStorageGet(acceptLanguage, options) {
        return (0, exports.GroupsSelfServiceApiFp)(this.configuration).getStorageApiGroupsStorageGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Set Member Permissions
     * @param {SetPermissions} setPermissions
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsSelfServiceApi
     */
    setMemberPermissionsApiGroupsPermissionsPut(setPermissions, acceptLanguage, options) {
        return (0, exports.GroupsSelfServiceApiFp)(this.configuration).setMemberPermissionsApiGroupsPermissionsPut(setPermissions, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Update Group Preferences
     * @param {UpdateGroupPreferences} updateGroupPreferences
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsSelfServiceApi
     */
    updateGroupPreferencesApiGroupsPreferencesPut(updateGroupPreferences, acceptLanguage, options) {
        return (0, exports.GroupsSelfServiceApiFp)(this.configuration).updateGroupPreferencesApiGroupsPreferencesPut(updateGroupPreferences, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.GroupsSelfServiceApi = GroupsSelfServiceApi;
/**
 * GroupsShoppingListItemsApi - axios parameter creator
 * @export
 */
const GroupsShoppingListItemsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Create One
         * @param {ShoppingListItemCreate} shoppingListItemCreate
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiGroupsShoppingItemsPost: async (shoppingListItemCreate, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'shoppingListItemCreate' is not null or undefined
            (0, common_1.assertParamExists)('createOneApiGroupsShoppingItemsPost', 'shoppingListItemCreate', shoppingListItemCreate);
            const localVarPath = `/api/groups/shopping/items`;
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
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(shoppingListItemCreate, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Delete Many
         * @param {Array<string>} [ids]
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteManyApiGroupsShoppingItemsDelete: async (ids, groupId, acceptLanguage, options = {}) => {
            const localVarPath = `/api/groups/shopping/items`;
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
            if (ids) {
                localVarQueryParameter['ids'] = ids;
            }
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
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
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiGroupsShoppingItemsItemIdDelete: async (itemId, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('deleteOneApiGroupsShoppingItemsItemIdDelete', 'itemId', itemId);
            const localVarPath = `/api/groups/shopping/items/{item_id}`
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
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
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
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiGroupsShoppingItemsItemIdGet: async (itemId, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('getOneApiGroupsShoppingItemsItemIdGet', 'itemId', itemId);
            const localVarPath = `/api/groups/shopping/items/{item_id}`
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
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
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
         * @summary Update Many
         * @param {Array<ShoppingListItemUpdate>} shoppingListItemUpdate
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateManyApiGroupsShoppingItemsPut: async (shoppingListItemUpdate, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'shoppingListItemUpdate' is not null or undefined
            (0, common_1.assertParamExists)('updateManyApiGroupsShoppingItemsPut', 'shoppingListItemUpdate', shoppingListItemUpdate);
            const localVarPath = `/api/groups/shopping/items`;
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
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(shoppingListItemUpdate, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {ShoppingListItemUpdate} shoppingListItemUpdate
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiGroupsShoppingItemsItemIdPut: async (itemId, shoppingListItemUpdate, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiGroupsShoppingItemsItemIdPut', 'itemId', itemId);
            // verify required parameter 'shoppingListItemUpdate' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiGroupsShoppingItemsItemIdPut', 'shoppingListItemUpdate', shoppingListItemUpdate);
            const localVarPath = `/api/groups/shopping/items/{item_id}`
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
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(shoppingListItemUpdate, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.GroupsShoppingListItemsApiAxiosParamCreator = GroupsShoppingListItemsApiAxiosParamCreator;
/**
 * GroupsShoppingListItemsApi - functional programming interface
 * @export
 */
const GroupsShoppingListItemsApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.GroupsShoppingListItemsApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Create One
         * @param {ShoppingListItemCreate} shoppingListItemCreate
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiGroupsShoppingItemsPost(shoppingListItemCreate, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiGroupsShoppingItemsPost(shoppingListItemCreate, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Delete Many
         * @param {Array<string>} [ids]
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteManyApiGroupsShoppingItemsDelete(ids, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteManyApiGroupsShoppingItemsDelete(ids, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteOneApiGroupsShoppingItemsItemIdDelete(itemId, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiGroupsShoppingItemsItemIdDelete(itemId, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOneApiGroupsShoppingItemsItemIdGet(itemId, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiGroupsShoppingItemsItemIdGet(itemId, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Update Many
         * @param {Array<ShoppingListItemUpdate>} shoppingListItemUpdate
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateManyApiGroupsShoppingItemsPut(shoppingListItemUpdate, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateManyApiGroupsShoppingItemsPut(shoppingListItemUpdate, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {ShoppingListItemUpdate} shoppingListItemUpdate
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOneApiGroupsShoppingItemsItemIdPut(itemId, shoppingListItemUpdate, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiGroupsShoppingItemsItemIdPut(itemId, shoppingListItemUpdate, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.GroupsShoppingListItemsApiFp = GroupsShoppingListItemsApiFp;
/**
 * GroupsShoppingListItemsApi - factory interface
 * @export
 */
const GroupsShoppingListItemsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.GroupsShoppingListItemsApiFp)(configuration);
    return {
        /**
         *
         * @summary Create One
         * @param {ShoppingListItemCreate} shoppingListItemCreate
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiGroupsShoppingItemsPost(shoppingListItemCreate, groupId, acceptLanguage, options) {
            return localVarFp.createOneApiGroupsShoppingItemsPost(shoppingListItemCreate, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Delete Many
         * @param {Array<string>} [ids]
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteManyApiGroupsShoppingItemsDelete(ids, groupId, acceptLanguage, options) {
            return localVarFp.deleteManyApiGroupsShoppingItemsDelete(ids, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiGroupsShoppingItemsItemIdDelete(itemId, groupId, acceptLanguage, options) {
            return localVarFp.deleteOneApiGroupsShoppingItemsItemIdDelete(itemId, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiGroupsShoppingItemsItemIdGet(itemId, groupId, acceptLanguage, options) {
            return localVarFp.getOneApiGroupsShoppingItemsItemIdGet(itemId, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Update Many
         * @param {Array<ShoppingListItemUpdate>} shoppingListItemUpdate
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateManyApiGroupsShoppingItemsPut(shoppingListItemUpdate, groupId, acceptLanguage, options) {
            return localVarFp.updateManyApiGroupsShoppingItemsPut(shoppingListItemUpdate, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {ShoppingListItemUpdate} shoppingListItemUpdate
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiGroupsShoppingItemsItemIdPut(itemId, shoppingListItemUpdate, groupId, acceptLanguage, options) {
            return localVarFp.updateOneApiGroupsShoppingItemsItemIdPut(itemId, shoppingListItemUpdate, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.GroupsShoppingListItemsApiFactory = GroupsShoppingListItemsApiFactory;
/**
 * GroupsShoppingListItemsApi - object-oriented interface
 * @export
 * @class GroupsShoppingListItemsApi
 * @extends {BaseAPI}
 */
class GroupsShoppingListItemsApi extends base_1.BaseAPI {
    /**
     *
     * @summary Create One
     * @param {ShoppingListItemCreate} shoppingListItemCreate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsShoppingListItemsApi
     */
    createOneApiGroupsShoppingItemsPost(shoppingListItemCreate, groupId, acceptLanguage, options) {
        return (0, exports.GroupsShoppingListItemsApiFp)(this.configuration).createOneApiGroupsShoppingItemsPost(shoppingListItemCreate, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Delete Many
     * @param {Array<string>} [ids]
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsShoppingListItemsApi
     */
    deleteManyApiGroupsShoppingItemsDelete(ids, groupId, acceptLanguage, options) {
        return (0, exports.GroupsShoppingListItemsApiFp)(this.configuration).deleteManyApiGroupsShoppingItemsDelete(ids, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsShoppingListItemsApi
     */
    deleteOneApiGroupsShoppingItemsItemIdDelete(itemId, groupId, acceptLanguage, options) {
        return (0, exports.GroupsShoppingListItemsApiFp)(this.configuration).deleteOneApiGroupsShoppingItemsItemIdDelete(itemId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsShoppingListItemsApi
     */
    getOneApiGroupsShoppingItemsItemIdGet(itemId, groupId, acceptLanguage, options) {
        return (0, exports.GroupsShoppingListItemsApiFp)(this.configuration).getOneApiGroupsShoppingItemsItemIdGet(itemId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Update Many
     * @param {Array<ShoppingListItemUpdate>} shoppingListItemUpdate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsShoppingListItemsApi
     */
    updateManyApiGroupsShoppingItemsPut(shoppingListItemUpdate, groupId, acceptLanguage, options) {
        return (0, exports.GroupsShoppingListItemsApiFp)(this.configuration).updateManyApiGroupsShoppingItemsPut(shoppingListItemUpdate, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {ShoppingListItemUpdate} shoppingListItemUpdate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsShoppingListItemsApi
     */
    updateOneApiGroupsShoppingItemsItemIdPut(itemId, shoppingListItemUpdate, groupId, acceptLanguage, options) {
        return (0, exports.GroupsShoppingListItemsApiFp)(this.configuration).updateOneApiGroupsShoppingItemsItemIdPut(itemId, shoppingListItemUpdate, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.GroupsShoppingListItemsApi = GroupsShoppingListItemsApi;
/**
 * GroupsShoppingListsApi - axios parameter creator
 * @export
 */
const GroupsShoppingListsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Add Recipe Ingredients To List
         * @param {string} itemId
         * @param {string} recipeId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addRecipeIngredientsToListApiGroupsShoppingListsItemIdRecipeRecipeIdPost: async (itemId, recipeId, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('addRecipeIngredientsToListApiGroupsShoppingListsItemIdRecipeRecipeIdPost', 'itemId', itemId);
            // verify required parameter 'recipeId' is not null or undefined
            (0, common_1.assertParamExists)('addRecipeIngredientsToListApiGroupsShoppingListsItemIdRecipeRecipeIdPost', 'recipeId', recipeId);
            const localVarPath = `/api/groups/shopping/lists/{item_id}/recipe/{recipe_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)))
                .replace(`{${"recipe_id"}}`, encodeURIComponent(String(recipeId)));
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
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
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
         * @summary Create One
         * @param {ShoppingListCreate} shoppingListCreate
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiGroupsShoppingListsPost: async (shoppingListCreate, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'shoppingListCreate' is not null or undefined
            (0, common_1.assertParamExists)('createOneApiGroupsShoppingListsPost', 'shoppingListCreate', shoppingListCreate);
            const localVarPath = `/api/groups/shopping/lists`;
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
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(shoppingListCreate, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiGroupsShoppingListsItemIdDelete: async (itemId, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('deleteOneApiGroupsShoppingListsItemIdDelete', 'itemId', itemId);
            const localVarPath = `/api/groups/shopping/lists/{item_id}`
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
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
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
         * @summary Get All
         * @param {string} [groupId]
         * @param {number} [page]
         * @param {number} [perPage]
         * @param {string} [orderBy]
         * @param {OrderDirection} [orderDirection]
         * @param {string} [queryFilter]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllApiGroupsShoppingListsGet: async (groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options = {}) => {
            const localVarPath = `/api/groups/shopping/lists`;
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
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
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
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiGroupsShoppingListsItemIdGet: async (itemId, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('getOneApiGroupsShoppingListsItemIdGet', 'itemId', itemId);
            const localVarPath = `/api/groups/shopping/lists/{item_id}`
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
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
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
         * @summary Remove Recipe Ingredients From List
         * @param {string} itemId
         * @param {string} recipeId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeRecipeIngredientsFromListApiGroupsShoppingListsItemIdRecipeRecipeIdDelete: async (itemId, recipeId, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('removeRecipeIngredientsFromListApiGroupsShoppingListsItemIdRecipeRecipeIdDelete', 'itemId', itemId);
            // verify required parameter 'recipeId' is not null or undefined
            (0, common_1.assertParamExists)('removeRecipeIngredientsFromListApiGroupsShoppingListsItemIdRecipeRecipeIdDelete', 'recipeId', recipeId);
            const localVarPath = `/api/groups/shopping/lists/{item_id}/recipe/{recipe_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)))
                .replace(`{${"recipe_id"}}`, encodeURIComponent(String(recipeId)));
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
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
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
         * @summary Update One
         * @param {string} itemId
         * @param {ShoppingListUpdate} shoppingListUpdate
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiGroupsShoppingListsItemIdPut: async (itemId, shoppingListUpdate, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiGroupsShoppingListsItemIdPut', 'itemId', itemId);
            // verify required parameter 'shoppingListUpdate' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiGroupsShoppingListsItemIdPut', 'shoppingListUpdate', shoppingListUpdate);
            const localVarPath = `/api/groups/shopping/lists/{item_id}`
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
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(shoppingListUpdate, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.GroupsShoppingListsApiAxiosParamCreator = GroupsShoppingListsApiAxiosParamCreator;
/**
 * GroupsShoppingListsApi - functional programming interface
 * @export
 */
const GroupsShoppingListsApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.GroupsShoppingListsApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Add Recipe Ingredients To List
         * @param {string} itemId
         * @param {string} recipeId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addRecipeIngredientsToListApiGroupsShoppingListsItemIdRecipeRecipeIdPost(itemId, recipeId, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addRecipeIngredientsToListApiGroupsShoppingListsItemIdRecipeRecipeIdPost(itemId, recipeId, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Create One
         * @param {ShoppingListCreate} shoppingListCreate
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiGroupsShoppingListsPost(shoppingListCreate, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiGroupsShoppingListsPost(shoppingListCreate, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteOneApiGroupsShoppingListsItemIdDelete(itemId, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiGroupsShoppingListsItemIdDelete(itemId, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get All
         * @param {string} [groupId]
         * @param {number} [page]
         * @param {number} [perPage]
         * @param {string} [orderBy]
         * @param {OrderDirection} [orderDirection]
         * @param {string} [queryFilter]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllApiGroupsShoppingListsGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiGroupsShoppingListsGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOneApiGroupsShoppingListsItemIdGet(itemId, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiGroupsShoppingListsItemIdGet(itemId, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Remove Recipe Ingredients From List
         * @param {string} itemId
         * @param {string} recipeId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeRecipeIngredientsFromListApiGroupsShoppingListsItemIdRecipeRecipeIdDelete(itemId, recipeId, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeRecipeIngredientsFromListApiGroupsShoppingListsItemIdRecipeRecipeIdDelete(itemId, recipeId, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {ShoppingListUpdate} shoppingListUpdate
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOneApiGroupsShoppingListsItemIdPut(itemId, shoppingListUpdate, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiGroupsShoppingListsItemIdPut(itemId, shoppingListUpdate, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.GroupsShoppingListsApiFp = GroupsShoppingListsApiFp;
/**
 * GroupsShoppingListsApi - factory interface
 * @export
 */
const GroupsShoppingListsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.GroupsShoppingListsApiFp)(configuration);
    return {
        /**
         *
         * @summary Add Recipe Ingredients To List
         * @param {string} itemId
         * @param {string} recipeId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addRecipeIngredientsToListApiGroupsShoppingListsItemIdRecipeRecipeIdPost(itemId, recipeId, groupId, acceptLanguage, options) {
            return localVarFp.addRecipeIngredientsToListApiGroupsShoppingListsItemIdRecipeRecipeIdPost(itemId, recipeId, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Create One
         * @param {ShoppingListCreate} shoppingListCreate
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiGroupsShoppingListsPost(shoppingListCreate, groupId, acceptLanguage, options) {
            return localVarFp.createOneApiGroupsShoppingListsPost(shoppingListCreate, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiGroupsShoppingListsItemIdDelete(itemId, groupId, acceptLanguage, options) {
            return localVarFp.deleteOneApiGroupsShoppingListsItemIdDelete(itemId, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get All
         * @param {string} [groupId]
         * @param {number} [page]
         * @param {number} [perPage]
         * @param {string} [orderBy]
         * @param {OrderDirection} [orderDirection]
         * @param {string} [queryFilter]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllApiGroupsShoppingListsGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            return localVarFp.getAllApiGroupsShoppingListsGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiGroupsShoppingListsItemIdGet(itemId, groupId, acceptLanguage, options) {
            return localVarFp.getOneApiGroupsShoppingListsItemIdGet(itemId, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Remove Recipe Ingredients From List
         * @param {string} itemId
         * @param {string} recipeId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeRecipeIngredientsFromListApiGroupsShoppingListsItemIdRecipeRecipeIdDelete(itemId, recipeId, groupId, acceptLanguage, options) {
            return localVarFp.removeRecipeIngredientsFromListApiGroupsShoppingListsItemIdRecipeRecipeIdDelete(itemId, recipeId, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {ShoppingListUpdate} shoppingListUpdate
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiGroupsShoppingListsItemIdPut(itemId, shoppingListUpdate, groupId, acceptLanguage, options) {
            return localVarFp.updateOneApiGroupsShoppingListsItemIdPut(itemId, shoppingListUpdate, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.GroupsShoppingListsApiFactory = GroupsShoppingListsApiFactory;
/**
 * GroupsShoppingListsApi - object-oriented interface
 * @export
 * @class GroupsShoppingListsApi
 * @extends {BaseAPI}
 */
class GroupsShoppingListsApi extends base_1.BaseAPI {
    /**
     *
     * @summary Add Recipe Ingredients To List
     * @param {string} itemId
     * @param {string} recipeId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsShoppingListsApi
     */
    addRecipeIngredientsToListApiGroupsShoppingListsItemIdRecipeRecipeIdPost(itemId, recipeId, groupId, acceptLanguage, options) {
        return (0, exports.GroupsShoppingListsApiFp)(this.configuration).addRecipeIngredientsToListApiGroupsShoppingListsItemIdRecipeRecipeIdPost(itemId, recipeId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Create One
     * @param {ShoppingListCreate} shoppingListCreate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsShoppingListsApi
     */
    createOneApiGroupsShoppingListsPost(shoppingListCreate, groupId, acceptLanguage, options) {
        return (0, exports.GroupsShoppingListsApiFp)(this.configuration).createOneApiGroupsShoppingListsPost(shoppingListCreate, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsShoppingListsApi
     */
    deleteOneApiGroupsShoppingListsItemIdDelete(itemId, groupId, acceptLanguage, options) {
        return (0, exports.GroupsShoppingListsApiFp)(this.configuration).deleteOneApiGroupsShoppingListsItemIdDelete(itemId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get All
     * @param {string} [groupId]
     * @param {number} [page]
     * @param {number} [perPage]
     * @param {string} [orderBy]
     * @param {OrderDirection} [orderDirection]
     * @param {string} [queryFilter]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsShoppingListsApi
     */
    getAllApiGroupsShoppingListsGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
        return (0, exports.GroupsShoppingListsApiFp)(this.configuration).getAllApiGroupsShoppingListsGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsShoppingListsApi
     */
    getOneApiGroupsShoppingListsItemIdGet(itemId, groupId, acceptLanguage, options) {
        return (0, exports.GroupsShoppingListsApiFp)(this.configuration).getOneApiGroupsShoppingListsItemIdGet(itemId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Remove Recipe Ingredients From List
     * @param {string} itemId
     * @param {string} recipeId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsShoppingListsApi
     */
    removeRecipeIngredientsFromListApiGroupsShoppingListsItemIdRecipeRecipeIdDelete(itemId, recipeId, groupId, acceptLanguage, options) {
        return (0, exports.GroupsShoppingListsApiFp)(this.configuration).removeRecipeIngredientsFromListApiGroupsShoppingListsItemIdRecipeRecipeIdDelete(itemId, recipeId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {ShoppingListUpdate} shoppingListUpdate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsShoppingListsApi
     */
    updateOneApiGroupsShoppingListsItemIdPut(itemId, shoppingListUpdate, groupId, acceptLanguage, options) {
        return (0, exports.GroupsShoppingListsApiFp)(this.configuration).updateOneApiGroupsShoppingListsItemIdPut(itemId, shoppingListUpdate, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.GroupsShoppingListsApi = GroupsShoppingListsApi;
/**
 * GroupsWebhooksApi - axios parameter creator
 * @export
 */
const GroupsWebhooksApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Create One
         * @param {CreateWebhook} createWebhook
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiGroupsWebhooksPost: async (createWebhook, acceptLanguage, options = {}) => {
            // verify required parameter 'createWebhook' is not null or undefined
            (0, common_1.assertParamExists)('createOneApiGroupsWebhooksPost', 'createWebhook', createWebhook);
            const localVarPath = `/api/groups/webhooks`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(createWebhook, localVarRequestOptions, configuration);
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
        deleteOneApiGroupsWebhooksItemIdDelete: async (itemId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('deleteOneApiGroupsWebhooksItemIdDelete', 'itemId', itemId);
            const localVarPath = `/api/groups/webhooks/{item_id}`
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
        getAllApiGroupsWebhooksGet: async (page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options = {}) => {
            const localVarPath = `/api/groups/webhooks`;
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
        getOneApiGroupsWebhooksItemIdGet: async (itemId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('getOneApiGroupsWebhooksItemIdGet', 'itemId', itemId);
            const localVarPath = `/api/groups/webhooks/{item_id}`
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
         * Manually re-fires all previously scheduled webhooks for today
         * @summary Rerun Webhooks
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rerunWebhooksApiGroupsWebhooksRerunPost: async (acceptLanguage, options = {}) => {
            const localVarPath = `/api/groups/webhooks/rerun`;
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
         * @param {CreateWebhook} createWebhook
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiGroupsWebhooksItemIdPut: async (itemId, createWebhook, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiGroupsWebhooksItemIdPut', 'itemId', itemId);
            // verify required parameter 'createWebhook' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiGroupsWebhooksItemIdPut', 'createWebhook', createWebhook);
            const localVarPath = `/api/groups/webhooks/{item_id}`
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(createWebhook, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.GroupsWebhooksApiAxiosParamCreator = GroupsWebhooksApiAxiosParamCreator;
/**
 * GroupsWebhooksApi - functional programming interface
 * @export
 */
const GroupsWebhooksApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.GroupsWebhooksApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Create One
         * @param {CreateWebhook} createWebhook
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiGroupsWebhooksPost(createWebhook, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiGroupsWebhooksPost(createWebhook, acceptLanguage, options);
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
        async deleteOneApiGroupsWebhooksItemIdDelete(itemId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiGroupsWebhooksItemIdDelete(itemId, acceptLanguage, options);
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
        async getAllApiGroupsWebhooksGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiGroupsWebhooksGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
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
        async getOneApiGroupsWebhooksItemIdGet(itemId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiGroupsWebhooksItemIdGet(itemId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Manually re-fires all previously scheduled webhooks for today
         * @summary Rerun Webhooks
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async rerunWebhooksApiGroupsWebhooksRerunPost(acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.rerunWebhooksApiGroupsWebhooksRerunPost(acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {CreateWebhook} createWebhook
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOneApiGroupsWebhooksItemIdPut(itemId, createWebhook, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiGroupsWebhooksItemIdPut(itemId, createWebhook, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.GroupsWebhooksApiFp = GroupsWebhooksApiFp;
/**
 * GroupsWebhooksApi - factory interface
 * @export
 */
const GroupsWebhooksApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.GroupsWebhooksApiFp)(configuration);
    return {
        /**
         *
         * @summary Create One
         * @param {CreateWebhook} createWebhook
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiGroupsWebhooksPost(createWebhook, acceptLanguage, options) {
            return localVarFp.createOneApiGroupsWebhooksPost(createWebhook, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiGroupsWebhooksItemIdDelete(itemId, acceptLanguage, options) {
            return localVarFp.deleteOneApiGroupsWebhooksItemIdDelete(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
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
        getAllApiGroupsWebhooksGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            return localVarFp.getAllApiGroupsWebhooksGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiGroupsWebhooksItemIdGet(itemId, acceptLanguage, options) {
            return localVarFp.getOneApiGroupsWebhooksItemIdGet(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Manually re-fires all previously scheduled webhooks for today
         * @summary Rerun Webhooks
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rerunWebhooksApiGroupsWebhooksRerunPost(acceptLanguage, options) {
            return localVarFp.rerunWebhooksApiGroupsWebhooksRerunPost(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {CreateWebhook} createWebhook
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiGroupsWebhooksItemIdPut(itemId, createWebhook, acceptLanguage, options) {
            return localVarFp.updateOneApiGroupsWebhooksItemIdPut(itemId, createWebhook, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.GroupsWebhooksApiFactory = GroupsWebhooksApiFactory;
/**
 * GroupsWebhooksApi - object-oriented interface
 * @export
 * @class GroupsWebhooksApi
 * @extends {BaseAPI}
 */
class GroupsWebhooksApi extends base_1.BaseAPI {
    /**
     *
     * @summary Create One
     * @param {CreateWebhook} createWebhook
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsWebhooksApi
     */
    createOneApiGroupsWebhooksPost(createWebhook, acceptLanguage, options) {
        return (0, exports.GroupsWebhooksApiFp)(this.configuration).createOneApiGroupsWebhooksPost(createWebhook, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsWebhooksApi
     */
    deleteOneApiGroupsWebhooksItemIdDelete(itemId, acceptLanguage, options) {
        return (0, exports.GroupsWebhooksApiFp)(this.configuration).deleteOneApiGroupsWebhooksItemIdDelete(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
     * @memberof GroupsWebhooksApi
     */
    getAllApiGroupsWebhooksGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
        return (0, exports.GroupsWebhooksApiFp)(this.configuration).getAllApiGroupsWebhooksGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsWebhooksApi
     */
    getOneApiGroupsWebhooksItemIdGet(itemId, acceptLanguage, options) {
        return (0, exports.GroupsWebhooksApiFp)(this.configuration).getOneApiGroupsWebhooksItemIdGet(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Manually re-fires all previously scheduled webhooks for today
     * @summary Rerun Webhooks
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsWebhooksApi
     */
    rerunWebhooksApiGroupsWebhooksRerunPost(acceptLanguage, options) {
        return (0, exports.GroupsWebhooksApiFp)(this.configuration).rerunWebhooksApiGroupsWebhooksRerunPost(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {CreateWebhook} createWebhook
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsWebhooksApi
     */
    updateOneApiGroupsWebhooksItemIdPut(itemId, createWebhook, acceptLanguage, options) {
        return (0, exports.GroupsWebhooksApiFp)(this.configuration).updateOneApiGroupsWebhooksItemIdPut(itemId, createWebhook, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.GroupsWebhooksApi = GroupsWebhooksApi;
//# sourceMappingURL=groups-api.js.map