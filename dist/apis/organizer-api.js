"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizerToolsApi = exports.OrganizerToolsApiFactory = exports.OrganizerToolsApiFp = exports.OrganizerToolsApiAxiosParamCreator = exports.OrganizerTagsApi = exports.OrganizerTagsApiFactory = exports.OrganizerTagsApiFp = exports.OrganizerTagsApiAxiosParamCreator = exports.OrganizerCategoriesApi = exports.OrganizerCategoriesApiFactory = exports.OrganizerCategoriesApiFp = exports.OrganizerCategoriesApiAxiosParamCreator = void 0;
const axios_1 = __importDefault(require("axios"));
const base_1 = require("../common/base");
const common_1 = require("../common/common");
/**
 * OrganizerCategoriesApi - axios parameter creator
 * @export
 */
const OrganizerCategoriesApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Creates a Category in the database
         * @summary Create One
         * @param {CategoryIn} categoryIn
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiOrganizersCategoriesPost: async (categoryIn, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'categoryIn' is not null or undefined
            (0, common_1.assertParamExists)('createOneApiOrganizersCategoriesPost', 'categoryIn', categoryIn);
            const localVarPath = `/api/organizers/categories`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(categoryIn, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Removes a recipe category from the database. Deleting a category does not impact a recipe. The category will be removed from any recipes that contain it
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiOrganizersCategoriesItemIdDelete: async (itemId, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('deleteOneApiOrganizersCategoriesItemIdDelete', 'itemId', itemId);
            const localVarPath = `/api/organizers/categories/{item_id}`
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
         * Returns a list of available categories in the database
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
        getAllApiOrganizersCategoriesGet: async (groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options = {}) => {
            const localVarPath = `/api/organizers/categories`;
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
         * Returns a list of categories that do not contain any recipes
         * @summary Get All Empty
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllEmptyApiOrganizersCategoriesEmptyGet: async (groupId, acceptLanguage, options = {}) => {
            const localVarPath = `/api/organizers/categories/empty`;
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
         * Returns a list of recipes associated with the provided category.
         * @summary Get One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiOrganizersCategoriesItemIdGet: async (itemId, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('getOneApiOrganizersCategoriesItemIdGet', 'itemId', itemId);
            const localVarPath = `/api/organizers/categories/{item_id}`
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
         * Returns a category object with the associated recieps relating to the category
         * @summary Get One By Slug
         * @param {string} categorySlug
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneBySlugApiOrganizersCategoriesSlugCategorySlugGet: async (categorySlug, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'categorySlug' is not null or undefined
            (0, common_1.assertParamExists)('getOneBySlugApiOrganizersCategoriesSlugCategorySlugGet', 'categorySlug', categorySlug);
            const localVarPath = `/api/organizers/categories/slug/{category_slug}`
                .replace(`{${"category_slug"}}`, encodeURIComponent(String(categorySlug)));
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
         * Updates an existing Tag in the database
         * @summary Update One
         * @param {string} itemId
         * @param {CategoryIn} categoryIn
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiOrganizersCategoriesItemIdPut: async (itemId, categoryIn, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiOrganizersCategoriesItemIdPut', 'itemId', itemId);
            // verify required parameter 'categoryIn' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiOrganizersCategoriesItemIdPut', 'categoryIn', categoryIn);
            const localVarPath = `/api/organizers/categories/{item_id}`
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(categoryIn, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.OrganizerCategoriesApiAxiosParamCreator = OrganizerCategoriesApiAxiosParamCreator;
/**
 * OrganizerCategoriesApi - functional programming interface
 * @export
 */
const OrganizerCategoriesApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.OrganizerCategoriesApiAxiosParamCreator)(configuration);
    return {
        /**
         * Creates a Category in the database
         * @summary Create One
         * @param {CategoryIn} categoryIn
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiOrganizersCategoriesPost(categoryIn, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiOrganizersCategoriesPost(categoryIn, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Removes a recipe category from the database. Deleting a category does not impact a recipe. The category will be removed from any recipes that contain it
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteOneApiOrganizersCategoriesItemIdDelete(itemId, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiOrganizersCategoriesItemIdDelete(itemId, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Returns a list of available categories in the database
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
        async getAllApiOrganizersCategoriesGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiOrganizersCategoriesGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Returns a list of categories that do not contain any recipes
         * @summary Get All Empty
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllEmptyApiOrganizersCategoriesEmptyGet(groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllEmptyApiOrganizersCategoriesEmptyGet(groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Returns a list of recipes associated with the provided category.
         * @summary Get One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOneApiOrganizersCategoriesItemIdGet(itemId, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiOrganizersCategoriesItemIdGet(itemId, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Returns a category object with the associated recieps relating to the category
         * @summary Get One By Slug
         * @param {string} categorySlug
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOneBySlugApiOrganizersCategoriesSlugCategorySlugGet(categorySlug, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneBySlugApiOrganizersCategoriesSlugCategorySlugGet(categorySlug, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Updates an existing Tag in the database
         * @summary Update One
         * @param {string} itemId
         * @param {CategoryIn} categoryIn
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOneApiOrganizersCategoriesItemIdPut(itemId, categoryIn, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiOrganizersCategoriesItemIdPut(itemId, categoryIn, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.OrganizerCategoriesApiFp = OrganizerCategoriesApiFp;
/**
 * OrganizerCategoriesApi - factory interface
 * @export
 */
const OrganizerCategoriesApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.OrganizerCategoriesApiFp)(configuration);
    return {
        /**
         * Creates a Category in the database
         * @summary Create One
         * @param {CategoryIn} categoryIn
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiOrganizersCategoriesPost(categoryIn, groupId, acceptLanguage, options) {
            return localVarFp.createOneApiOrganizersCategoriesPost(categoryIn, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes a recipe category from the database. Deleting a category does not impact a recipe. The category will be removed from any recipes that contain it
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiOrganizersCategoriesItemIdDelete(itemId, groupId, acceptLanguage, options) {
            return localVarFp.deleteOneApiOrganizersCategoriesItemIdDelete(itemId, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of available categories in the database
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
        getAllApiOrganizersCategoriesGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            return localVarFp.getAllApiOrganizersCategoriesGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of categories that do not contain any recipes
         * @summary Get All Empty
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllEmptyApiOrganizersCategoriesEmptyGet(groupId, acceptLanguage, options) {
            return localVarFp.getAllEmptyApiOrganizersCategoriesEmptyGet(groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of recipes associated with the provided category.
         * @summary Get One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiOrganizersCategoriesItemIdGet(itemId, groupId, acceptLanguage, options) {
            return localVarFp.getOneApiOrganizersCategoriesItemIdGet(itemId, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a category object with the associated recieps relating to the category
         * @summary Get One By Slug
         * @param {string} categorySlug
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneBySlugApiOrganizersCategoriesSlugCategorySlugGet(categorySlug, groupId, acceptLanguage, options) {
            return localVarFp.getOneBySlugApiOrganizersCategoriesSlugCategorySlugGet(categorySlug, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates an existing Tag in the database
         * @summary Update One
         * @param {string} itemId
         * @param {CategoryIn} categoryIn
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiOrganizersCategoriesItemIdPut(itemId, categoryIn, groupId, acceptLanguage, options) {
            return localVarFp.updateOneApiOrganizersCategoriesItemIdPut(itemId, categoryIn, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.OrganizerCategoriesApiFactory = OrganizerCategoriesApiFactory;
/**
 * OrganizerCategoriesApi - object-oriented interface
 * @export
 * @class OrganizerCategoriesApi
 * @extends {BaseAPI}
 */
class OrganizerCategoriesApi extends base_1.BaseAPI {
    /**
     * Creates a Category in the database
     * @summary Create One
     * @param {CategoryIn} categoryIn
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerCategoriesApi
     */
    createOneApiOrganizersCategoriesPost(categoryIn, groupId, acceptLanguage, options) {
        return (0, exports.OrganizerCategoriesApiFp)(this.configuration).createOneApiOrganizersCategoriesPost(categoryIn, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Removes a recipe category from the database. Deleting a category does not impact a recipe. The category will be removed from any recipes that contain it
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerCategoriesApi
     */
    deleteOneApiOrganizersCategoriesItemIdDelete(itemId, groupId, acceptLanguage, options) {
        return (0, exports.OrganizerCategoriesApiFp)(this.configuration).deleteOneApiOrganizersCategoriesItemIdDelete(itemId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns a list of available categories in the database
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
     * @memberof OrganizerCategoriesApi
     */
    getAllApiOrganizersCategoriesGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
        return (0, exports.OrganizerCategoriesApiFp)(this.configuration).getAllApiOrganizersCategoriesGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns a list of categories that do not contain any recipes
     * @summary Get All Empty
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerCategoriesApi
     */
    getAllEmptyApiOrganizersCategoriesEmptyGet(groupId, acceptLanguage, options) {
        return (0, exports.OrganizerCategoriesApiFp)(this.configuration).getAllEmptyApiOrganizersCategoriesEmptyGet(groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns a list of recipes associated with the provided category.
     * @summary Get One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerCategoriesApi
     */
    getOneApiOrganizersCategoriesItemIdGet(itemId, groupId, acceptLanguage, options) {
        return (0, exports.OrganizerCategoriesApiFp)(this.configuration).getOneApiOrganizersCategoriesItemIdGet(itemId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns a category object with the associated recieps relating to the category
     * @summary Get One By Slug
     * @param {string} categorySlug
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerCategoriesApi
     */
    getOneBySlugApiOrganizersCategoriesSlugCategorySlugGet(categorySlug, groupId, acceptLanguage, options) {
        return (0, exports.OrganizerCategoriesApiFp)(this.configuration).getOneBySlugApiOrganizersCategoriesSlugCategorySlugGet(categorySlug, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updates an existing Tag in the database
     * @summary Update One
     * @param {string} itemId
     * @param {CategoryIn} categoryIn
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerCategoriesApi
     */
    updateOneApiOrganizersCategoriesItemIdPut(itemId, categoryIn, groupId, acceptLanguage, options) {
        return (0, exports.OrganizerCategoriesApiFp)(this.configuration).updateOneApiOrganizersCategoriesItemIdPut(itemId, categoryIn, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.OrganizerCategoriesApi = OrganizerCategoriesApi;
/**
 * OrganizerTagsApi - axios parameter creator
 * @export
 */
const OrganizerTagsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Creates a Tag in the database
         * @summary Create One
         * @param {TagIn} tagIn
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiOrganizersTagsPost: async (tagIn, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'tagIn' is not null or undefined
            (0, common_1.assertParamExists)('createOneApiOrganizersTagsPost', 'tagIn', tagIn);
            const localVarPath = `/api/organizers/tags`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(tagIn, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Removes a recipe tag from the database. Deleting a tag does not impact a recipe. The tag will be removed from any recipes that contain it
         * @summary Delete Recipe Tag
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRecipeTagApiOrganizersTagsItemIdDelete: async (itemId, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('deleteRecipeTagApiOrganizersTagsItemIdDelete', 'itemId', itemId);
            const localVarPath = `/api/organizers/tags/{item_id}`
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
         * Returns a list of available tags in the database
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
        getAllApiOrganizersTagsGet: async (groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options = {}) => {
            const localVarPath = `/api/organizers/tags`;
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
         * Returns a list of tags that do not contain any recipes
         * @summary Get Empty Tags
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEmptyTagsApiOrganizersTagsEmptyGet: async (groupId, acceptLanguage, options = {}) => {
            const localVarPath = `/api/organizers/tags/empty`;
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
         * Returns a list of recipes associated with the provided tag.
         * @summary Get One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiOrganizersTagsItemIdGet: async (itemId, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('getOneApiOrganizersTagsItemIdGet', 'itemId', itemId);
            const localVarPath = `/api/organizers/tags/{item_id}`
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
         * @summary Get One By Slug
         * @param {string} tagSlug
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneBySlugApiOrganizersTagsSlugTagSlugGet: async (tagSlug, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'tagSlug' is not null or undefined
            (0, common_1.assertParamExists)('getOneBySlugApiOrganizersTagsSlugTagSlugGet', 'tagSlug', tagSlug);
            const localVarPath = `/api/organizers/tags/slug/{tag_slug}`
                .replace(`{${"tag_slug"}}`, encodeURIComponent(String(tagSlug)));
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
         * Updates an existing Tag in the database
         * @summary Update One
         * @param {string} itemId
         * @param {TagIn} tagIn
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiOrganizersTagsItemIdPut: async (itemId, tagIn, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiOrganizersTagsItemIdPut', 'itemId', itemId);
            // verify required parameter 'tagIn' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiOrganizersTagsItemIdPut', 'tagIn', tagIn);
            const localVarPath = `/api/organizers/tags/{item_id}`
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(tagIn, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.OrganizerTagsApiAxiosParamCreator = OrganizerTagsApiAxiosParamCreator;
/**
 * OrganizerTagsApi - functional programming interface
 * @export
 */
const OrganizerTagsApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.OrganizerTagsApiAxiosParamCreator)(configuration);
    return {
        /**
         * Creates a Tag in the database
         * @summary Create One
         * @param {TagIn} tagIn
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiOrganizersTagsPost(tagIn, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiOrganizersTagsPost(tagIn, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Removes a recipe tag from the database. Deleting a tag does not impact a recipe. The tag will be removed from any recipes that contain it
         * @summary Delete Recipe Tag
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteRecipeTagApiOrganizersTagsItemIdDelete(itemId, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRecipeTagApiOrganizersTagsItemIdDelete(itemId, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Returns a list of available tags in the database
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
        async getAllApiOrganizersTagsGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiOrganizersTagsGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Returns a list of tags that do not contain any recipes
         * @summary Get Empty Tags
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEmptyTagsApiOrganizersTagsEmptyGet(groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEmptyTagsApiOrganizersTagsEmptyGet(groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Returns a list of recipes associated with the provided tag.
         * @summary Get One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOneApiOrganizersTagsItemIdGet(itemId, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiOrganizersTagsItemIdGet(itemId, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get One By Slug
         * @param {string} tagSlug
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOneBySlugApiOrganizersTagsSlugTagSlugGet(tagSlug, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneBySlugApiOrganizersTagsSlugTagSlugGet(tagSlug, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Updates an existing Tag in the database
         * @summary Update One
         * @param {string} itemId
         * @param {TagIn} tagIn
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOneApiOrganizersTagsItemIdPut(itemId, tagIn, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiOrganizersTagsItemIdPut(itemId, tagIn, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.OrganizerTagsApiFp = OrganizerTagsApiFp;
/**
 * OrganizerTagsApi - factory interface
 * @export
 */
const OrganizerTagsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.OrganizerTagsApiFp)(configuration);
    return {
        /**
         * Creates a Tag in the database
         * @summary Create One
         * @param {TagIn} tagIn
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiOrganizersTagsPost(tagIn, groupId, acceptLanguage, options) {
            return localVarFp.createOneApiOrganizersTagsPost(tagIn, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes a recipe tag from the database. Deleting a tag does not impact a recipe. The tag will be removed from any recipes that contain it
         * @summary Delete Recipe Tag
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRecipeTagApiOrganizersTagsItemIdDelete(itemId, groupId, acceptLanguage, options) {
            return localVarFp.deleteRecipeTagApiOrganizersTagsItemIdDelete(itemId, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of available tags in the database
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
        getAllApiOrganizersTagsGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            return localVarFp.getAllApiOrganizersTagsGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of tags that do not contain any recipes
         * @summary Get Empty Tags
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEmptyTagsApiOrganizersTagsEmptyGet(groupId, acceptLanguage, options) {
            return localVarFp.getEmptyTagsApiOrganizersTagsEmptyGet(groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of recipes associated with the provided tag.
         * @summary Get One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiOrganizersTagsItemIdGet(itemId, groupId, acceptLanguage, options) {
            return localVarFp.getOneApiOrganizersTagsItemIdGet(itemId, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get One By Slug
         * @param {string} tagSlug
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneBySlugApiOrganizersTagsSlugTagSlugGet(tagSlug, groupId, acceptLanguage, options) {
            return localVarFp.getOneBySlugApiOrganizersTagsSlugTagSlugGet(tagSlug, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates an existing Tag in the database
         * @summary Update One
         * @param {string} itemId
         * @param {TagIn} tagIn
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiOrganizersTagsItemIdPut(itemId, tagIn, groupId, acceptLanguage, options) {
            return localVarFp.updateOneApiOrganizersTagsItemIdPut(itemId, tagIn, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.OrganizerTagsApiFactory = OrganizerTagsApiFactory;
/**
 * OrganizerTagsApi - object-oriented interface
 * @export
 * @class OrganizerTagsApi
 * @extends {BaseAPI}
 */
class OrganizerTagsApi extends base_1.BaseAPI {
    /**
     * Creates a Tag in the database
     * @summary Create One
     * @param {TagIn} tagIn
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerTagsApi
     */
    createOneApiOrganizersTagsPost(tagIn, groupId, acceptLanguage, options) {
        return (0, exports.OrganizerTagsApiFp)(this.configuration).createOneApiOrganizersTagsPost(tagIn, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Removes a recipe tag from the database. Deleting a tag does not impact a recipe. The tag will be removed from any recipes that contain it
     * @summary Delete Recipe Tag
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerTagsApi
     */
    deleteRecipeTagApiOrganizersTagsItemIdDelete(itemId, groupId, acceptLanguage, options) {
        return (0, exports.OrganizerTagsApiFp)(this.configuration).deleteRecipeTagApiOrganizersTagsItemIdDelete(itemId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns a list of available tags in the database
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
     * @memberof OrganizerTagsApi
     */
    getAllApiOrganizersTagsGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
        return (0, exports.OrganizerTagsApiFp)(this.configuration).getAllApiOrganizersTagsGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns a list of tags that do not contain any recipes
     * @summary Get Empty Tags
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerTagsApi
     */
    getEmptyTagsApiOrganizersTagsEmptyGet(groupId, acceptLanguage, options) {
        return (0, exports.OrganizerTagsApiFp)(this.configuration).getEmptyTagsApiOrganizersTagsEmptyGet(groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns a list of recipes associated with the provided tag.
     * @summary Get One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerTagsApi
     */
    getOneApiOrganizersTagsItemIdGet(itemId, groupId, acceptLanguage, options) {
        return (0, exports.OrganizerTagsApiFp)(this.configuration).getOneApiOrganizersTagsItemIdGet(itemId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get One By Slug
     * @param {string} tagSlug
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerTagsApi
     */
    getOneBySlugApiOrganizersTagsSlugTagSlugGet(tagSlug, groupId, acceptLanguage, options) {
        return (0, exports.OrganizerTagsApiFp)(this.configuration).getOneBySlugApiOrganizersTagsSlugTagSlugGet(tagSlug, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updates an existing Tag in the database
     * @summary Update One
     * @param {string} itemId
     * @param {TagIn} tagIn
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerTagsApi
     */
    updateOneApiOrganizersTagsItemIdPut(itemId, tagIn, groupId, acceptLanguage, options) {
        return (0, exports.OrganizerTagsApiFp)(this.configuration).updateOneApiOrganizersTagsItemIdPut(itemId, tagIn, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.OrganizerTagsApi = OrganizerTagsApi;
/**
 * OrganizerToolsApi - axios parameter creator
 * @export
 */
const OrganizerToolsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Create One
         * @param {RecipeToolCreate} recipeToolCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiOrganizersToolsPost: async (recipeToolCreate, acceptLanguage, options = {}) => {
            // verify required parameter 'recipeToolCreate' is not null or undefined
            (0, common_1.assertParamExists)('createOneApiOrganizersToolsPost', 'recipeToolCreate', recipeToolCreate);
            const localVarPath = `/api/organizers/tools`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(recipeToolCreate, localVarRequestOptions, configuration);
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
        deleteOneApiOrganizersToolsItemIdDelete: async (itemId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('deleteOneApiOrganizersToolsItemIdDelete', 'itemId', itemId);
            const localVarPath = `/api/organizers/tools/{item_id}`
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
        getAllApiOrganizersToolsGet: async (page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options = {}) => {
            const localVarPath = `/api/organizers/tools`;
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
        getOneApiOrganizersToolsItemIdGet: async (itemId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('getOneApiOrganizersToolsItemIdGet', 'itemId', itemId);
            const localVarPath = `/api/organizers/tools/{item_id}`
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
         * @summary Get One By Slug
         * @param {string} toolSlug
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneBySlugApiOrganizersToolsSlugToolSlugGet: async (toolSlug, acceptLanguage, options = {}) => {
            // verify required parameter 'toolSlug' is not null or undefined
            (0, common_1.assertParamExists)('getOneBySlugApiOrganizersToolsSlugToolSlugGet', 'toolSlug', toolSlug);
            const localVarPath = `/api/organizers/tools/slug/{tool_slug}`
                .replace(`{${"tool_slug"}}`, encodeURIComponent(String(toolSlug)));
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
         * @param {RecipeToolCreate} recipeToolCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiOrganizersToolsItemIdPut: async (itemId, recipeToolCreate, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiOrganizersToolsItemIdPut', 'itemId', itemId);
            // verify required parameter 'recipeToolCreate' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiOrganizersToolsItemIdPut', 'recipeToolCreate', recipeToolCreate);
            const localVarPath = `/api/organizers/tools/{item_id}`
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(recipeToolCreate, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.OrganizerToolsApiAxiosParamCreator = OrganizerToolsApiAxiosParamCreator;
/**
 * OrganizerToolsApi - functional programming interface
 * @export
 */
const OrganizerToolsApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.OrganizerToolsApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Create One
         * @param {RecipeToolCreate} recipeToolCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiOrganizersToolsPost(recipeToolCreate, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiOrganizersToolsPost(recipeToolCreate, acceptLanguage, options);
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
        async deleteOneApiOrganizersToolsItemIdDelete(itemId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiOrganizersToolsItemIdDelete(itemId, acceptLanguage, options);
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
        async getAllApiOrganizersToolsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiOrganizersToolsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
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
        async getOneApiOrganizersToolsItemIdGet(itemId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiOrganizersToolsItemIdGet(itemId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get One By Slug
         * @param {string} toolSlug
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOneBySlugApiOrganizersToolsSlugToolSlugGet(toolSlug, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneBySlugApiOrganizersToolsSlugToolSlugGet(toolSlug, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {RecipeToolCreate} recipeToolCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOneApiOrganizersToolsItemIdPut(itemId, recipeToolCreate, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiOrganizersToolsItemIdPut(itemId, recipeToolCreate, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.OrganizerToolsApiFp = OrganizerToolsApiFp;
/**
 * OrganizerToolsApi - factory interface
 * @export
 */
const OrganizerToolsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.OrganizerToolsApiFp)(configuration);
    return {
        /**
         *
         * @summary Create One
         * @param {RecipeToolCreate} recipeToolCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiOrganizersToolsPost(recipeToolCreate, acceptLanguage, options) {
            return localVarFp.createOneApiOrganizersToolsPost(recipeToolCreate, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiOrganizersToolsItemIdDelete(itemId, acceptLanguage, options) {
            return localVarFp.deleteOneApiOrganizersToolsItemIdDelete(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
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
        getAllApiOrganizersToolsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            return localVarFp.getAllApiOrganizersToolsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiOrganizersToolsItemIdGet(itemId, acceptLanguage, options) {
            return localVarFp.getOneApiOrganizersToolsItemIdGet(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get One By Slug
         * @param {string} toolSlug
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneBySlugApiOrganizersToolsSlugToolSlugGet(toolSlug, acceptLanguage, options) {
            return localVarFp.getOneBySlugApiOrganizersToolsSlugToolSlugGet(toolSlug, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {RecipeToolCreate} recipeToolCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiOrganizersToolsItemIdPut(itemId, recipeToolCreate, acceptLanguage, options) {
            return localVarFp.updateOneApiOrganizersToolsItemIdPut(itemId, recipeToolCreate, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.OrganizerToolsApiFactory = OrganizerToolsApiFactory;
/**
 * OrganizerToolsApi - object-oriented interface
 * @export
 * @class OrganizerToolsApi
 * @extends {BaseAPI}
 */
class OrganizerToolsApi extends base_1.BaseAPI {
    /**
     *
     * @summary Create One
     * @param {RecipeToolCreate} recipeToolCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerToolsApi
     */
    createOneApiOrganizersToolsPost(recipeToolCreate, acceptLanguage, options) {
        return (0, exports.OrganizerToolsApiFp)(this.configuration).createOneApiOrganizersToolsPost(recipeToolCreate, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerToolsApi
     */
    deleteOneApiOrganizersToolsItemIdDelete(itemId, acceptLanguage, options) {
        return (0, exports.OrganizerToolsApiFp)(this.configuration).deleteOneApiOrganizersToolsItemIdDelete(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
     * @memberof OrganizerToolsApi
     */
    getAllApiOrganizersToolsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
        return (0, exports.OrganizerToolsApiFp)(this.configuration).getAllApiOrganizersToolsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerToolsApi
     */
    getOneApiOrganizersToolsItemIdGet(itemId, acceptLanguage, options) {
        return (0, exports.OrganizerToolsApiFp)(this.configuration).getOneApiOrganizersToolsItemIdGet(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get One By Slug
     * @param {string} toolSlug
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerToolsApi
     */
    getOneBySlugApiOrganizersToolsSlugToolSlugGet(toolSlug, acceptLanguage, options) {
        return (0, exports.OrganizerToolsApiFp)(this.configuration).getOneBySlugApiOrganizersToolsSlugToolSlugGet(toolSlug, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {RecipeToolCreate} recipeToolCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerToolsApi
     */
    updateOneApiOrganizersToolsItemIdPut(itemId, recipeToolCreate, acceptLanguage, options) {
        return (0, exports.OrganizerToolsApiFp)(this.configuration).updateOneApiOrganizersToolsItemIdPut(itemId, recipeToolCreate, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.OrganizerToolsApi = OrganizerToolsApi;
//# sourceMappingURL=organizer-api.js.map