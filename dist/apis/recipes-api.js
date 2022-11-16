"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesSharedApi = exports.RecipesSharedApiFactory = exports.RecipesSharedApiFp = exports.RecipesSharedApiAxiosParamCreator = exports.RecipesQueryAllApi = exports.RecipesQueryAllApiFactory = exports.RecipesQueryAllApiFp = exports.RecipesQueryAllApiAxiosParamCreator = exports.RecipesExportsApi = exports.RecipesExportsApiFactory = exports.RecipesExportsApiFp = exports.RecipesExportsApiAxiosParamCreator = exports.RecipesCRUDApi = exports.RecipesCRUDApiFactory = exports.RecipesCRUDApiFp = exports.RecipesCRUDApiAxiosParamCreator = exports.RecipesBulkActionsApi = exports.RecipesBulkActionsApiFactory = exports.RecipesBulkActionsApiFp = exports.RecipesBulkActionsApiAxiosParamCreator = exports.RecipeCommentsApi = exports.RecipeCommentsApiFactory = exports.RecipeCommentsApiFp = exports.RecipeCommentsApiAxiosParamCreator = void 0;
const axios_1 = __importDefault(require("axios"));
const base_1 = require("../common/base");
const common_1 = require("../common/common");
/**
 * RecipeCommentsApi - axios parameter creator
 * @export
 */
const RecipeCommentsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Get all comments for a recipe
         * @summary Get Recipe Comments
         * @param {string} slug
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecipeCommentsApiRecipesSlugCommentsGet: async (slug, acceptLanguage, options = {}) => {
            // verify required parameter 'slug' is not null or undefined
            (0, common_1.assertParamExists)('getRecipeCommentsApiRecipesSlugCommentsGet', 'slug', slug);
            const localVarPath = `/api/recipes/{slug}/comments`
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
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
exports.RecipeCommentsApiAxiosParamCreator = RecipeCommentsApiAxiosParamCreator;
/**
 * RecipeCommentsApi - functional programming interface
 * @export
 */
const RecipeCommentsApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.RecipeCommentsApiAxiosParamCreator)(configuration);
    return {
        /**
         * Get all comments for a recipe
         * @summary Get Recipe Comments
         * @param {string} slug
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRecipeCommentsApiRecipesSlugCommentsGet(slug, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRecipeCommentsApiRecipesSlugCommentsGet(slug, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.RecipeCommentsApiFp = RecipeCommentsApiFp;
/**
 * RecipeCommentsApi - factory interface
 * @export
 */
const RecipeCommentsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.RecipeCommentsApiFp)(configuration);
    return {
        /**
         * Get all comments for a recipe
         * @summary Get Recipe Comments
         * @param {string} slug
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecipeCommentsApiRecipesSlugCommentsGet(slug, acceptLanguage, options) {
            return localVarFp.getRecipeCommentsApiRecipesSlugCommentsGet(slug, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.RecipeCommentsApiFactory = RecipeCommentsApiFactory;
/**
 * RecipeCommentsApi - object-oriented interface
 * @export
 * @class RecipeCommentsApi
 * @extends {BaseAPI}
 */
class RecipeCommentsApi extends base_1.BaseAPI {
    /**
     * Get all comments for a recipe
     * @summary Get Recipe Comments
     * @param {string} slug
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipeCommentsApi
     */
    getRecipeCommentsApiRecipesSlugCommentsGet(slug, acceptLanguage, options) {
        return (0, exports.RecipeCommentsApiFp)(this.configuration).getRecipeCommentsApiRecipesSlugCommentsGet(slug, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.RecipeCommentsApi = RecipeCommentsApi;
/**
 * RecipesBulkActionsApi - axios parameter creator
 * @export
 */
const RecipesBulkActionsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Bulk Categorize Recipes
         * @param {AssignCategories} assignCategories
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bulkCategorizeRecipesApiRecipesBulkActionsCategorizePost: async (assignCategories, acceptLanguage, options = {}) => {
            // verify required parameter 'assignCategories' is not null or undefined
            (0, common_1.assertParamExists)('bulkCategorizeRecipesApiRecipesBulkActionsCategorizePost', 'assignCategories', assignCategories);
            const localVarPath = `/api/recipes/bulk-actions/categorize`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(assignCategories, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Bulk Delete Recipes
         * @param {DeleteRecipes} deleteRecipes
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bulkDeleteRecipesApiRecipesBulkActionsDeletePost: async (deleteRecipes, acceptLanguage, options = {}) => {
            // verify required parameter 'deleteRecipes' is not null or undefined
            (0, common_1.assertParamExists)('bulkDeleteRecipesApiRecipesBulkActionsDeletePost', 'deleteRecipes', deleteRecipes);
            const localVarPath = `/api/recipes/bulk-actions/delete`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(deleteRecipes, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Bulk Export Recipes
         * @param {ExportRecipes} exportRecipes
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bulkExportRecipesApiRecipesBulkActionsExportPost: async (exportRecipes, acceptLanguage, options = {}) => {
            // verify required parameter 'exportRecipes' is not null or undefined
            (0, common_1.assertParamExists)('bulkExportRecipesApiRecipesBulkActionsExportPost', 'exportRecipes', exportRecipes);
            const localVarPath = `/api/recipes/bulk-actions/export`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(exportRecipes, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Bulk Settings Recipes
         * @param {AssignSettings} assignSettings
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bulkSettingsRecipesApiRecipesBulkActionsSettingsPost: async (assignSettings, acceptLanguage, options = {}) => {
            // verify required parameter 'assignSettings' is not null or undefined
            (0, common_1.assertParamExists)('bulkSettingsRecipesApiRecipesBulkActionsSettingsPost', 'assignSettings', assignSettings);
            const localVarPath = `/api/recipes/bulk-actions/settings`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(assignSettings, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Bulk Tag Recipes
         * @param {AssignTags} assignTags
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bulkTagRecipesApiRecipesBulkActionsTagPost: async (assignTags, acceptLanguage, options = {}) => {
            // verify required parameter 'assignTags' is not null or undefined
            (0, common_1.assertParamExists)('bulkTagRecipesApiRecipesBulkActionsTagPost', 'assignTags', assignTags);
            const localVarPath = `/api/recipes/bulk-actions/tag`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(assignTags, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Get Exported Data
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExportedDataApiRecipesBulkActionsExportGet: async (acceptLanguage, options = {}) => {
            const localVarPath = `/api/recipes/bulk-actions/export`;
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
         * Returns a token to download a file
         * @summary Get Exported Data Token
         * @param {string} path
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExportedDataTokenApiRecipesBulkActionsExportDownloadGet: async (path, acceptLanguage, options = {}) => {
            // verify required parameter 'path' is not null or undefined
            (0, common_1.assertParamExists)('getExportedDataTokenApiRecipesBulkActionsExportDownloadGet', 'path', path);
            const localVarPath = `/api/recipes/bulk-actions/export/download`;
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
            if (path !== undefined) {
                localVarQueryParameter['path'] = path;
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
         * Remove all exports data, including items on disk without database entry
         * @summary Purge Export Data
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        purgeExportDataApiRecipesBulkActionsExportPurgeDelete: async (acceptLanguage, options = {}) => {
            const localVarPath = `/api/recipes/bulk-actions/export/purge`;
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
    };
};
exports.RecipesBulkActionsApiAxiosParamCreator = RecipesBulkActionsApiAxiosParamCreator;
/**
 * RecipesBulkActionsApi - functional programming interface
 * @export
 */
const RecipesBulkActionsApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.RecipesBulkActionsApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Bulk Categorize Recipes
         * @param {AssignCategories} assignCategories
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async bulkCategorizeRecipesApiRecipesBulkActionsCategorizePost(assignCategories, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.bulkCategorizeRecipesApiRecipesBulkActionsCategorizePost(assignCategories, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Bulk Delete Recipes
         * @param {DeleteRecipes} deleteRecipes
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async bulkDeleteRecipesApiRecipesBulkActionsDeletePost(deleteRecipes, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.bulkDeleteRecipesApiRecipesBulkActionsDeletePost(deleteRecipes, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Bulk Export Recipes
         * @param {ExportRecipes} exportRecipes
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async bulkExportRecipesApiRecipesBulkActionsExportPost(exportRecipes, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.bulkExportRecipesApiRecipesBulkActionsExportPost(exportRecipes, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Bulk Settings Recipes
         * @param {AssignSettings} assignSettings
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async bulkSettingsRecipesApiRecipesBulkActionsSettingsPost(assignSettings, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.bulkSettingsRecipesApiRecipesBulkActionsSettingsPost(assignSettings, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Bulk Tag Recipes
         * @param {AssignTags} assignTags
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async bulkTagRecipesApiRecipesBulkActionsTagPost(assignTags, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.bulkTagRecipesApiRecipesBulkActionsTagPost(assignTags, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get Exported Data
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getExportedDataApiRecipesBulkActionsExportGet(acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getExportedDataApiRecipesBulkActionsExportGet(acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Returns a token to download a file
         * @summary Get Exported Data Token
         * @param {string} path
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getExportedDataTokenApiRecipesBulkActionsExportDownloadGet(path, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getExportedDataTokenApiRecipesBulkActionsExportDownloadGet(path, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Remove all exports data, including items on disk without database entry
         * @summary Purge Export Data
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async purgeExportDataApiRecipesBulkActionsExportPurgeDelete(acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.purgeExportDataApiRecipesBulkActionsExportPurgeDelete(acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.RecipesBulkActionsApiFp = RecipesBulkActionsApiFp;
/**
 * RecipesBulkActionsApi - factory interface
 * @export
 */
const RecipesBulkActionsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.RecipesBulkActionsApiFp)(configuration);
    return {
        /**
         *
         * @summary Bulk Categorize Recipes
         * @param {AssignCategories} assignCategories
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bulkCategorizeRecipesApiRecipesBulkActionsCategorizePost(assignCategories, acceptLanguage, options) {
            return localVarFp.bulkCategorizeRecipesApiRecipesBulkActionsCategorizePost(assignCategories, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Bulk Delete Recipes
         * @param {DeleteRecipes} deleteRecipes
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bulkDeleteRecipesApiRecipesBulkActionsDeletePost(deleteRecipes, acceptLanguage, options) {
            return localVarFp.bulkDeleteRecipesApiRecipesBulkActionsDeletePost(deleteRecipes, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Bulk Export Recipes
         * @param {ExportRecipes} exportRecipes
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bulkExportRecipesApiRecipesBulkActionsExportPost(exportRecipes, acceptLanguage, options) {
            return localVarFp.bulkExportRecipesApiRecipesBulkActionsExportPost(exportRecipes, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Bulk Settings Recipes
         * @param {AssignSettings} assignSettings
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bulkSettingsRecipesApiRecipesBulkActionsSettingsPost(assignSettings, acceptLanguage, options) {
            return localVarFp.bulkSettingsRecipesApiRecipesBulkActionsSettingsPost(assignSettings, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Bulk Tag Recipes
         * @param {AssignTags} assignTags
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bulkTagRecipesApiRecipesBulkActionsTagPost(assignTags, acceptLanguage, options) {
            return localVarFp.bulkTagRecipesApiRecipesBulkActionsTagPost(assignTags, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get Exported Data
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExportedDataApiRecipesBulkActionsExportGet(acceptLanguage, options) {
            return localVarFp.getExportedDataApiRecipesBulkActionsExportGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a token to download a file
         * @summary Get Exported Data Token
         * @param {string} path
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExportedDataTokenApiRecipesBulkActionsExportDownloadGet(path, acceptLanguage, options) {
            return localVarFp.getExportedDataTokenApiRecipesBulkActionsExportDownloadGet(path, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Remove all exports data, including items on disk without database entry
         * @summary Purge Export Data
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        purgeExportDataApiRecipesBulkActionsExportPurgeDelete(acceptLanguage, options) {
            return localVarFp.purgeExportDataApiRecipesBulkActionsExportPurgeDelete(acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.RecipesBulkActionsApiFactory = RecipesBulkActionsApiFactory;
/**
 * RecipesBulkActionsApi - object-oriented interface
 * @export
 * @class RecipesBulkActionsApi
 * @extends {BaseAPI}
 */
class RecipesBulkActionsApi extends base_1.BaseAPI {
    /**
     *
     * @summary Bulk Categorize Recipes
     * @param {AssignCategories} assignCategories
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesBulkActionsApi
     */
    bulkCategorizeRecipesApiRecipesBulkActionsCategorizePost(assignCategories, acceptLanguage, options) {
        return (0, exports.RecipesBulkActionsApiFp)(this.configuration).bulkCategorizeRecipesApiRecipesBulkActionsCategorizePost(assignCategories, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Bulk Delete Recipes
     * @param {DeleteRecipes} deleteRecipes
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesBulkActionsApi
     */
    bulkDeleteRecipesApiRecipesBulkActionsDeletePost(deleteRecipes, acceptLanguage, options) {
        return (0, exports.RecipesBulkActionsApiFp)(this.configuration).bulkDeleteRecipesApiRecipesBulkActionsDeletePost(deleteRecipes, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Bulk Export Recipes
     * @param {ExportRecipes} exportRecipes
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesBulkActionsApi
     */
    bulkExportRecipesApiRecipesBulkActionsExportPost(exportRecipes, acceptLanguage, options) {
        return (0, exports.RecipesBulkActionsApiFp)(this.configuration).bulkExportRecipesApiRecipesBulkActionsExportPost(exportRecipes, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Bulk Settings Recipes
     * @param {AssignSettings} assignSettings
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesBulkActionsApi
     */
    bulkSettingsRecipesApiRecipesBulkActionsSettingsPost(assignSettings, acceptLanguage, options) {
        return (0, exports.RecipesBulkActionsApiFp)(this.configuration).bulkSettingsRecipesApiRecipesBulkActionsSettingsPost(assignSettings, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Bulk Tag Recipes
     * @param {AssignTags} assignTags
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesBulkActionsApi
     */
    bulkTagRecipesApiRecipesBulkActionsTagPost(assignTags, acceptLanguage, options) {
        return (0, exports.RecipesBulkActionsApiFp)(this.configuration).bulkTagRecipesApiRecipesBulkActionsTagPost(assignTags, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get Exported Data
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesBulkActionsApi
     */
    getExportedDataApiRecipesBulkActionsExportGet(acceptLanguage, options) {
        return (0, exports.RecipesBulkActionsApiFp)(this.configuration).getExportedDataApiRecipesBulkActionsExportGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns a token to download a file
     * @summary Get Exported Data Token
     * @param {string} path
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesBulkActionsApi
     */
    getExportedDataTokenApiRecipesBulkActionsExportDownloadGet(path, acceptLanguage, options) {
        return (0, exports.RecipesBulkActionsApiFp)(this.configuration).getExportedDataTokenApiRecipesBulkActionsExportDownloadGet(path, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Remove all exports data, including items on disk without database entry
     * @summary Purge Export Data
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesBulkActionsApi
     */
    purgeExportDataApiRecipesBulkActionsExportPurgeDelete(acceptLanguage, options) {
        return (0, exports.RecipesBulkActionsApiFp)(this.configuration).purgeExportDataApiRecipesBulkActionsExportPurgeDelete(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.RecipesBulkActionsApi = RecipesBulkActionsApi;
/**
 * RecipesCRUDApi - axios parameter creator
 * @export
 */
const RecipesCRUDApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Takes in a JSON string and loads data into the database as a new entry
         * @summary Create One
         * @param {CreateRecipe} createRecipe
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiRecipesPost: async (createRecipe, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'createRecipe' is not null or undefined
            (0, common_1.assertParamExists)('createOneApiRecipesPost', 'createRecipe', createRecipe);
            const localVarPath = `/api/recipes`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(createRecipe, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create recipe from archive
         * @summary Create Recipe From Zip
         * @param {File} archive
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRecipeFromZipApiRecipesCreateFromZipPost: async (archive, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'archive' is not null or undefined
            (0, common_1.assertParamExists)('createRecipeFromZipApiRecipesCreateFromZipPost', 'archive', archive);
            const localVarPath = `/api/recipes/create-from-zip`;
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
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
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
        /**
         * Takes an image and creates a recipe based on the image
         * @summary Create Recipe Ocr
         * @param {string} extension
         * @param {File} file
         * @param {boolean} makefilerecipeimage
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRecipeOcrApiRecipesCreateOcrPost: async (extension, file, makefilerecipeimage, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'extension' is not null or undefined
            (0, common_1.assertParamExists)('createRecipeOcrApiRecipesCreateOcrPost', 'extension', extension);
            // verify required parameter 'file' is not null or undefined
            (0, common_1.assertParamExists)('createRecipeOcrApiRecipesCreateOcrPost', 'file', file);
            // verify required parameter 'makefilerecipeimage' is not null or undefined
            (0, common_1.assertParamExists)('createRecipeOcrApiRecipesCreateOcrPost', 'makefilerecipeimage', makefilerecipeimage);
            const localVarPath = `/api/recipes/create-ocr`;
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
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            if (extension !== undefined) {
                localVarFormParams.append('extension', extension);
            }
            if (file !== undefined) {
                localVarFormParams.append('file', file);
            }
            if (makefilerecipeimage !== undefined) {
                localVarFormParams.append('makefilerecipeimage', makefilerecipeimage);
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
         * Deletes a recipe by slug
         * @summary Delete One
         * @param {string} slug
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiRecipesSlugDelete: async (slug, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'slug' is not null or undefined
            (0, common_1.assertParamExists)('deleteOneApiRecipesSlugDelete', 'slug', slug);
            const localVarPath = `/api/recipes/{slug}`
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
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
         * @param {Cookbook} [cookbook]
         * @param {Array<CategoriesInner>} [categories]
         * @param {Array<CategoriesInner>} [tags]
         * @param {Array<CategoriesInner>} [tools]
         * @param {string} [groupId]
         * @param {number} [page]
         * @param {number} [perPage]
         * @param {string} [orderBy]
         * @param {OrderDirection} [orderDirection]
         * @param {string} [queryFilter]
         * @param {boolean} [loadFood]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllApiRecipesGet: async (cookbook, categories, tags, tools, groupId, page, perPage, orderBy, orderDirection, queryFilter, loadFood, acceptLanguage, options = {}) => {
            const localVarPath = `/api/recipes`;
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
            if (cookbook !== undefined) {
                localVarQueryParameter['cookbook'] = cookbook;
            }
            if (categories) {
                localVarQueryParameter['categories'] = categories;
            }
            if (tags) {
                localVarQueryParameter['tags'] = tags;
            }
            if (tools) {
                localVarQueryParameter['tools'] = tools;
            }
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
            if (loadFood !== undefined) {
                localVarQueryParameter['loadFood'] = loadFood;
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
         * Takes in a recipe slug, returns all data for a recipe
         * @summary Get One
         * @param {string} slug
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiRecipesSlugGet: async (slug, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'slug' is not null or undefined
            (0, common_1.assertParamExists)('getOneApiRecipesSlugGet', 'slug', slug);
            const localVarPath = `/api/recipes/{slug}`
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
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
         * Takes in a URL and attempts to scrape data and load it into the database
         * @summary Parse Recipe Url
         * @param {ScrapeRecipe} scrapeRecipe
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        parseRecipeUrlApiRecipesCreateUrlPost: async (scrapeRecipe, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'scrapeRecipe' is not null or undefined
            (0, common_1.assertParamExists)('parseRecipeUrlApiRecipesCreateUrlPost', 'scrapeRecipe', scrapeRecipe);
            const localVarPath = `/api/recipes/create-url`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(scrapeRecipe, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Takes in a URL and attempts to scrape data and load it into the database
         * @summary Parse Recipe Url Bulk
         * @param {CreateRecipeByUrlBulk} createRecipeByUrlBulk
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        parseRecipeUrlBulkApiRecipesCreateUrlBulkPost: async (createRecipeByUrlBulk, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'createRecipeByUrlBulk' is not null or undefined
            (0, common_1.assertParamExists)('parseRecipeUrlBulkApiRecipesCreateUrlBulkPost', 'createRecipeByUrlBulk', createRecipeByUrlBulk);
            const localVarPath = `/api/recipes/create-url/bulk`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(createRecipeByUrlBulk, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a recipe by existing slug and data.
         * @summary Patch One
         * @param {string} slug
         * @param {Recipe} recipe
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchOneApiRecipesSlugPatch: async (slug, recipe, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'slug' is not null or undefined
            (0, common_1.assertParamExists)('patchOneApiRecipesSlugPatch', 'slug', slug);
            // verify required parameter 'recipe' is not null or undefined
            (0, common_1.assertParamExists)('patchOneApiRecipesSlugPatch', 'recipe', recipe);
            const localVarPath = `/api/recipes/{slug}`
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'PATCH' }, baseOptions), options);
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(recipe, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Scrape Image Url
         * @param {string} slug
         * @param {ScrapeRecipe} scrapeRecipe
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        scrapeImageUrlApiRecipesSlugImagePost: async (slug, scrapeRecipe, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'slug' is not null or undefined
            (0, common_1.assertParamExists)('scrapeImageUrlApiRecipesSlugImagePost', 'slug', slug);
            // verify required parameter 'scrapeRecipe' is not null or undefined
            (0, common_1.assertParamExists)('scrapeImageUrlApiRecipesSlugImagePost', 'scrapeRecipe', scrapeRecipe);
            const localVarPath = `/api/recipes/{slug}/image`
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(scrapeRecipe, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Test Parse Recipe Url
         * @param {ScrapeRecipeTest} scrapeRecipeTest
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        testParseRecipeUrlApiRecipesTestScrapeUrlPost: async (scrapeRecipeTest, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'scrapeRecipeTest' is not null or undefined
            (0, common_1.assertParamExists)('testParseRecipeUrlApiRecipesTestScrapeUrlPost', 'scrapeRecipeTest', scrapeRecipeTest);
            const localVarPath = `/api/recipes/test-scrape-url`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(scrapeRecipeTest, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a recipe by existing slug and data.
         * @summary Update One
         * @param {string} slug
         * @param {Recipe} recipe
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiRecipesSlugPut: async (slug, recipe, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'slug' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiRecipesSlugPut', 'slug', slug);
            // verify required parameter 'recipe' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiRecipesSlugPut', 'recipe', recipe);
            const localVarPath = `/api/recipes/{slug}`
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(recipe, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Update Recipe Image
         * @param {string} slug
         * @param {File} image
         * @param {string} extension
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRecipeImageApiRecipesSlugImagePut: async (slug, image, extension, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'slug' is not null or undefined
            (0, common_1.assertParamExists)('updateRecipeImageApiRecipesSlugImagePut', 'slug', slug);
            // verify required parameter 'image' is not null or undefined
            (0, common_1.assertParamExists)('updateRecipeImageApiRecipesSlugImagePut', 'image', image);
            // verify required parameter 'extension' is not null or undefined
            (0, common_1.assertParamExists)('updateRecipeImageApiRecipesSlugImagePut', 'extension', extension);
            const localVarPath = `/api/recipes/{slug}/image`
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'PUT' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            if (image !== undefined) {
                localVarFormParams.append('image', image);
            }
            if (extension !== undefined) {
                localVarFormParams.append('extension', extension);
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
         * Upload a file to store as a recipe asset
         * @summary Upload Recipe Asset
         * @param {string} slug
         * @param {string} name
         * @param {string} icon
         * @param {string} extension
         * @param {File} file
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadRecipeAssetApiRecipesSlugAssetsPost: async (slug, name, icon, extension, file, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'slug' is not null or undefined
            (0, common_1.assertParamExists)('uploadRecipeAssetApiRecipesSlugAssetsPost', 'slug', slug);
            // verify required parameter 'name' is not null or undefined
            (0, common_1.assertParamExists)('uploadRecipeAssetApiRecipesSlugAssetsPost', 'name', name);
            // verify required parameter 'icon' is not null or undefined
            (0, common_1.assertParamExists)('uploadRecipeAssetApiRecipesSlugAssetsPost', 'icon', icon);
            // verify required parameter 'extension' is not null or undefined
            (0, common_1.assertParamExists)('uploadRecipeAssetApiRecipesSlugAssetsPost', 'extension', extension);
            // verify required parameter 'file' is not null or undefined
            (0, common_1.assertParamExists)('uploadRecipeAssetApiRecipesSlugAssetsPost', 'file', file);
            const localVarPath = `/api/recipes/{slug}/assets`
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
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
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            if (name !== undefined) {
                localVarFormParams.append('name', name);
            }
            if (icon !== undefined) {
                localVarFormParams.append('icon', icon);
            }
            if (extension !== undefined) {
                localVarFormParams.append('extension', extension);
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
exports.RecipesCRUDApiAxiosParamCreator = RecipesCRUDApiAxiosParamCreator;
/**
 * RecipesCRUDApi - functional programming interface
 * @export
 */
const RecipesCRUDApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.RecipesCRUDApiAxiosParamCreator)(configuration);
    return {
        /**
         * Takes in a JSON string and loads data into the database as a new entry
         * @summary Create One
         * @param {CreateRecipe} createRecipe
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiRecipesPost(createRecipe, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiRecipesPost(createRecipe, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Create recipe from archive
         * @summary Create Recipe From Zip
         * @param {File} archive
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createRecipeFromZipApiRecipesCreateFromZipPost(archive, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRecipeFromZipApiRecipesCreateFromZipPost(archive, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Takes an image and creates a recipe based on the image
         * @summary Create Recipe Ocr
         * @param {string} extension
         * @param {File} file
         * @param {boolean} makefilerecipeimage
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createRecipeOcrApiRecipesCreateOcrPost(extension, file, makefilerecipeimage, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRecipeOcrApiRecipesCreateOcrPost(extension, file, makefilerecipeimage, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Deletes a recipe by slug
         * @summary Delete One
         * @param {string} slug
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteOneApiRecipesSlugDelete(slug, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiRecipesSlugDelete(slug, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get All
         * @param {Cookbook} [cookbook]
         * @param {Array<CategoriesInner>} [categories]
         * @param {Array<CategoriesInner>} [tags]
         * @param {Array<CategoriesInner>} [tools]
         * @param {string} [groupId]
         * @param {number} [page]
         * @param {number} [perPage]
         * @param {string} [orderBy]
         * @param {OrderDirection} [orderDirection]
         * @param {string} [queryFilter]
         * @param {boolean} [loadFood]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllApiRecipesGet(cookbook, categories, tags, tools, groupId, page, perPage, orderBy, orderDirection, queryFilter, loadFood, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiRecipesGet(cookbook, categories, tags, tools, groupId, page, perPage, orderBy, orderDirection, queryFilter, loadFood, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Takes in a recipe slug, returns all data for a recipe
         * @summary Get One
         * @param {string} slug
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOneApiRecipesSlugGet(slug, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiRecipesSlugGet(slug, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Takes in a URL and attempts to scrape data and load it into the database
         * @summary Parse Recipe Url
         * @param {ScrapeRecipe} scrapeRecipe
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async parseRecipeUrlApiRecipesCreateUrlPost(scrapeRecipe, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.parseRecipeUrlApiRecipesCreateUrlPost(scrapeRecipe, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Takes in a URL and attempts to scrape data and load it into the database
         * @summary Parse Recipe Url Bulk
         * @param {CreateRecipeByUrlBulk} createRecipeByUrlBulk
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async parseRecipeUrlBulkApiRecipesCreateUrlBulkPost(createRecipeByUrlBulk, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.parseRecipeUrlBulkApiRecipesCreateUrlBulkPost(createRecipeByUrlBulk, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Updates a recipe by existing slug and data.
         * @summary Patch One
         * @param {string} slug
         * @param {Recipe} recipe
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchOneApiRecipesSlugPatch(slug, recipe, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchOneApiRecipesSlugPatch(slug, recipe, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Scrape Image Url
         * @param {string} slug
         * @param {ScrapeRecipe} scrapeRecipe
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async scrapeImageUrlApiRecipesSlugImagePost(slug, scrapeRecipe, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.scrapeImageUrlApiRecipesSlugImagePost(slug, scrapeRecipe, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Test Parse Recipe Url
         * @param {ScrapeRecipeTest} scrapeRecipeTest
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async testParseRecipeUrlApiRecipesTestScrapeUrlPost(scrapeRecipeTest, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.testParseRecipeUrlApiRecipesTestScrapeUrlPost(scrapeRecipeTest, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Updates a recipe by existing slug and data.
         * @summary Update One
         * @param {string} slug
         * @param {Recipe} recipe
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOneApiRecipesSlugPut(slug, recipe, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiRecipesSlugPut(slug, recipe, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Update Recipe Image
         * @param {string} slug
         * @param {File} image
         * @param {string} extension
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateRecipeImageApiRecipesSlugImagePut(slug, image, extension, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateRecipeImageApiRecipesSlugImagePut(slug, image, extension, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Upload a file to store as a recipe asset
         * @summary Upload Recipe Asset
         * @param {string} slug
         * @param {string} name
         * @param {string} icon
         * @param {string} extension
         * @param {File} file
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadRecipeAssetApiRecipesSlugAssetsPost(slug, name, icon, extension, file, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadRecipeAssetApiRecipesSlugAssetsPost(slug, name, icon, extension, file, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.RecipesCRUDApiFp = RecipesCRUDApiFp;
/**
 * RecipesCRUDApi - factory interface
 * @export
 */
const RecipesCRUDApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.RecipesCRUDApiFp)(configuration);
    return {
        /**
         * Takes in a JSON string and loads data into the database as a new entry
         * @summary Create One
         * @param {CreateRecipe} createRecipe
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiRecipesPost(createRecipe, groupId, acceptLanguage, options) {
            return localVarFp.createOneApiRecipesPost(createRecipe, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Create recipe from archive
         * @summary Create Recipe From Zip
         * @param {File} archive
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRecipeFromZipApiRecipesCreateFromZipPost(archive, groupId, acceptLanguage, options) {
            return localVarFp.createRecipeFromZipApiRecipesCreateFromZipPost(archive, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Takes an image and creates a recipe based on the image
         * @summary Create Recipe Ocr
         * @param {string} extension
         * @param {File} file
         * @param {boolean} makefilerecipeimage
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRecipeOcrApiRecipesCreateOcrPost(extension, file, makefilerecipeimage, groupId, acceptLanguage, options) {
            return localVarFp.createRecipeOcrApiRecipesCreateOcrPost(extension, file, makefilerecipeimage, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a recipe by slug
         * @summary Delete One
         * @param {string} slug
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiRecipesSlugDelete(slug, groupId, acceptLanguage, options) {
            return localVarFp.deleteOneApiRecipesSlugDelete(slug, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get All
         * @param {Cookbook} [cookbook]
         * @param {Array<CategoriesInner>} [categories]
         * @param {Array<CategoriesInner>} [tags]
         * @param {Array<CategoriesInner>} [tools]
         * @param {string} [groupId]
         * @param {number} [page]
         * @param {number} [perPage]
         * @param {string} [orderBy]
         * @param {OrderDirection} [orderDirection]
         * @param {string} [queryFilter]
         * @param {boolean} [loadFood]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllApiRecipesGet(cookbook, categories, tags, tools, groupId, page, perPage, orderBy, orderDirection, queryFilter, loadFood, acceptLanguage, options) {
            return localVarFp.getAllApiRecipesGet(cookbook, categories, tags, tools, groupId, page, perPage, orderBy, orderDirection, queryFilter, loadFood, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Takes in a recipe slug, returns all data for a recipe
         * @summary Get One
         * @param {string} slug
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiRecipesSlugGet(slug, groupId, acceptLanguage, options) {
            return localVarFp.getOneApiRecipesSlugGet(slug, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Takes in a URL and attempts to scrape data and load it into the database
         * @summary Parse Recipe Url
         * @param {ScrapeRecipe} scrapeRecipe
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        parseRecipeUrlApiRecipesCreateUrlPost(scrapeRecipe, groupId, acceptLanguage, options) {
            return localVarFp.parseRecipeUrlApiRecipesCreateUrlPost(scrapeRecipe, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Takes in a URL and attempts to scrape data and load it into the database
         * @summary Parse Recipe Url Bulk
         * @param {CreateRecipeByUrlBulk} createRecipeByUrlBulk
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        parseRecipeUrlBulkApiRecipesCreateUrlBulkPost(createRecipeByUrlBulk, groupId, acceptLanguage, options) {
            return localVarFp.parseRecipeUrlBulkApiRecipesCreateUrlBulkPost(createRecipeByUrlBulk, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a recipe by existing slug and data.
         * @summary Patch One
         * @param {string} slug
         * @param {Recipe} recipe
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchOneApiRecipesSlugPatch(slug, recipe, groupId, acceptLanguage, options) {
            return localVarFp.patchOneApiRecipesSlugPatch(slug, recipe, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Scrape Image Url
         * @param {string} slug
         * @param {ScrapeRecipe} scrapeRecipe
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        scrapeImageUrlApiRecipesSlugImagePost(slug, scrapeRecipe, groupId, acceptLanguage, options) {
            return localVarFp.scrapeImageUrlApiRecipesSlugImagePost(slug, scrapeRecipe, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Test Parse Recipe Url
         * @param {ScrapeRecipeTest} scrapeRecipeTest
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        testParseRecipeUrlApiRecipesTestScrapeUrlPost(scrapeRecipeTest, groupId, acceptLanguage, options) {
            return localVarFp.testParseRecipeUrlApiRecipesTestScrapeUrlPost(scrapeRecipeTest, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a recipe by existing slug and data.
         * @summary Update One
         * @param {string} slug
         * @param {Recipe} recipe
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiRecipesSlugPut(slug, recipe, groupId, acceptLanguage, options) {
            return localVarFp.updateOneApiRecipesSlugPut(slug, recipe, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Update Recipe Image
         * @param {string} slug
         * @param {File} image
         * @param {string} extension
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRecipeImageApiRecipesSlugImagePut(slug, image, extension, groupId, acceptLanguage, options) {
            return localVarFp.updateRecipeImageApiRecipesSlugImagePut(slug, image, extension, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Upload a file to store as a recipe asset
         * @summary Upload Recipe Asset
         * @param {string} slug
         * @param {string} name
         * @param {string} icon
         * @param {string} extension
         * @param {File} file
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadRecipeAssetApiRecipesSlugAssetsPost(slug, name, icon, extension, file, groupId, acceptLanguage, options) {
            return localVarFp.uploadRecipeAssetApiRecipesSlugAssetsPost(slug, name, icon, extension, file, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.RecipesCRUDApiFactory = RecipesCRUDApiFactory;
/**
 * RecipesCRUDApi - object-oriented interface
 * @export
 * @class RecipesCRUDApi
 * @extends {BaseAPI}
 */
class RecipesCRUDApi extends base_1.BaseAPI {
    /**
     * Takes in a JSON string and loads data into the database as a new entry
     * @summary Create One
     * @param {CreateRecipe} createRecipe
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesCRUDApi
     */
    createOneApiRecipesPost(createRecipe, groupId, acceptLanguage, options) {
        return (0, exports.RecipesCRUDApiFp)(this.configuration).createOneApiRecipesPost(createRecipe, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Create recipe from archive
     * @summary Create Recipe From Zip
     * @param {File} archive
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesCRUDApi
     */
    createRecipeFromZipApiRecipesCreateFromZipPost(archive, groupId, acceptLanguage, options) {
        return (0, exports.RecipesCRUDApiFp)(this.configuration).createRecipeFromZipApiRecipesCreateFromZipPost(archive, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Takes an image and creates a recipe based on the image
     * @summary Create Recipe Ocr
     * @param {string} extension
     * @param {File} file
     * @param {boolean} makefilerecipeimage
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesCRUDApi
     */
    createRecipeOcrApiRecipesCreateOcrPost(extension, file, makefilerecipeimage, groupId, acceptLanguage, options) {
        return (0, exports.RecipesCRUDApiFp)(this.configuration).createRecipeOcrApiRecipesCreateOcrPost(extension, file, makefilerecipeimage, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Deletes a recipe by slug
     * @summary Delete One
     * @param {string} slug
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesCRUDApi
     */
    deleteOneApiRecipesSlugDelete(slug, groupId, acceptLanguage, options) {
        return (0, exports.RecipesCRUDApiFp)(this.configuration).deleteOneApiRecipesSlugDelete(slug, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get All
     * @param {Cookbook} [cookbook]
     * @param {Array<CategoriesInner>} [categories]
     * @param {Array<CategoriesInner>} [tags]
     * @param {Array<CategoriesInner>} [tools]
     * @param {string} [groupId]
     * @param {number} [page]
     * @param {number} [perPage]
     * @param {string} [orderBy]
     * @param {OrderDirection} [orderDirection]
     * @param {string} [queryFilter]
     * @param {boolean} [loadFood]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesCRUDApi
     */
    getAllApiRecipesGet(cookbook, categories, tags, tools, groupId, page, perPage, orderBy, orderDirection, queryFilter, loadFood, acceptLanguage, options) {
        return (0, exports.RecipesCRUDApiFp)(this.configuration).getAllApiRecipesGet(cookbook, categories, tags, tools, groupId, page, perPage, orderBy, orderDirection, queryFilter, loadFood, acceptLanguage, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Takes in a recipe slug, returns all data for a recipe
     * @summary Get One
     * @param {string} slug
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesCRUDApi
     */
    getOneApiRecipesSlugGet(slug, groupId, acceptLanguage, options) {
        return (0, exports.RecipesCRUDApiFp)(this.configuration).getOneApiRecipesSlugGet(slug, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Takes in a URL and attempts to scrape data and load it into the database
     * @summary Parse Recipe Url
     * @param {ScrapeRecipe} scrapeRecipe
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesCRUDApi
     */
    parseRecipeUrlApiRecipesCreateUrlPost(scrapeRecipe, groupId, acceptLanguage, options) {
        return (0, exports.RecipesCRUDApiFp)(this.configuration).parseRecipeUrlApiRecipesCreateUrlPost(scrapeRecipe, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Takes in a URL and attempts to scrape data and load it into the database
     * @summary Parse Recipe Url Bulk
     * @param {CreateRecipeByUrlBulk} createRecipeByUrlBulk
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesCRUDApi
     */
    parseRecipeUrlBulkApiRecipesCreateUrlBulkPost(createRecipeByUrlBulk, groupId, acceptLanguage, options) {
        return (0, exports.RecipesCRUDApiFp)(this.configuration).parseRecipeUrlBulkApiRecipesCreateUrlBulkPost(createRecipeByUrlBulk, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updates a recipe by existing slug and data.
     * @summary Patch One
     * @param {string} slug
     * @param {Recipe} recipe
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesCRUDApi
     */
    patchOneApiRecipesSlugPatch(slug, recipe, groupId, acceptLanguage, options) {
        return (0, exports.RecipesCRUDApiFp)(this.configuration).patchOneApiRecipesSlugPatch(slug, recipe, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Scrape Image Url
     * @param {string} slug
     * @param {ScrapeRecipe} scrapeRecipe
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesCRUDApi
     */
    scrapeImageUrlApiRecipesSlugImagePost(slug, scrapeRecipe, groupId, acceptLanguage, options) {
        return (0, exports.RecipesCRUDApiFp)(this.configuration).scrapeImageUrlApiRecipesSlugImagePost(slug, scrapeRecipe, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Test Parse Recipe Url
     * @param {ScrapeRecipeTest} scrapeRecipeTest
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesCRUDApi
     */
    testParseRecipeUrlApiRecipesTestScrapeUrlPost(scrapeRecipeTest, groupId, acceptLanguage, options) {
        return (0, exports.RecipesCRUDApiFp)(this.configuration).testParseRecipeUrlApiRecipesTestScrapeUrlPost(scrapeRecipeTest, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updates a recipe by existing slug and data.
     * @summary Update One
     * @param {string} slug
     * @param {Recipe} recipe
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesCRUDApi
     */
    updateOneApiRecipesSlugPut(slug, recipe, groupId, acceptLanguage, options) {
        return (0, exports.RecipesCRUDApiFp)(this.configuration).updateOneApiRecipesSlugPut(slug, recipe, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Update Recipe Image
     * @param {string} slug
     * @param {File} image
     * @param {string} extension
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesCRUDApi
     */
    updateRecipeImageApiRecipesSlugImagePut(slug, image, extension, groupId, acceptLanguage, options) {
        return (0, exports.RecipesCRUDApiFp)(this.configuration).updateRecipeImageApiRecipesSlugImagePut(slug, image, extension, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Upload a file to store as a recipe asset
     * @summary Upload Recipe Asset
     * @param {string} slug
     * @param {string} name
     * @param {string} icon
     * @param {string} extension
     * @param {File} file
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesCRUDApi
     */
    uploadRecipeAssetApiRecipesSlugAssetsPost(slug, name, icon, extension, file, groupId, acceptLanguage, options) {
        return (0, exports.RecipesCRUDApiFp)(this.configuration).uploadRecipeAssetApiRecipesSlugAssetsPost(slug, name, icon, extension, file, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.RecipesCRUDApi = RecipesCRUDApi;
/**
 * RecipesExportsApi - axios parameter creator
 * @export
 */
const RecipesExportsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * ## Parameters `template_name`: The name of the template to use to use in the exports listed. Template type will automatically be set on the backend. Because of this, it\'s important that your templates have unique names. See available names and formats in the /api/recipes/exports endpoint.
         * @summary Get Recipe As Format
         * @param {string} slug
         * @param {string} templateName
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecipeAsFormatApiRecipesSlugExportsGet: async (slug, templateName, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'slug' is not null or undefined
            (0, common_1.assertParamExists)('getRecipeAsFormatApiRecipesSlugExportsGet', 'slug', slug);
            // verify required parameter 'templateName' is not null or undefined
            (0, common_1.assertParamExists)('getRecipeAsFormatApiRecipesSlugExportsGet', 'templateName', templateName);
            const localVarPath = `/api/recipes/{slug}/exports`
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
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
            if (templateName !== undefined) {
                localVarQueryParameter['template_name'] = templateName;
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
         * Get a Recipe and It\'s Original Image as a Zip File
         * @summary Get Recipe As Zip
         * @param {string} slug
         * @param {string} token
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecipeAsZipApiRecipesSlugExportsZipGet: async (slug, token, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'slug' is not null or undefined
            (0, common_1.assertParamExists)('getRecipeAsZipApiRecipesSlugExportsZipGet', 'slug', slug);
            // verify required parameter 'token' is not null or undefined
            (0, common_1.assertParamExists)('getRecipeAsZipApiRecipesSlugExportsZipGet', 'token', token);
            const localVarPath = `/api/recipes/{slug}/exports/zip`
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
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
            if (token !== undefined) {
                localVarQueryParameter['token'] = token;
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
         * @summary Get Recipe Formats And Templates
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecipeFormatsAndTemplatesApiRecipesExportsGet: async (groupId, acceptLanguage, options = {}) => {
            const localVarPath = `/api/recipes/exports`;
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
         * Generates a recipe zip token to be used to download a recipe as a zip file
         * @summary Get Recipe Zip Token
         * @param {string} slug
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecipeZipTokenApiRecipesSlugExportsPost: async (slug, groupId, acceptLanguage, options = {}) => {
            // verify required parameter 'slug' is not null or undefined
            (0, common_1.assertParamExists)('getRecipeZipTokenApiRecipesSlugExportsPost', 'slug', slug);
            const localVarPath = `/api/recipes/{slug}/exports`
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
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
    };
};
exports.RecipesExportsApiAxiosParamCreator = RecipesExportsApiAxiosParamCreator;
/**
 * RecipesExportsApi - functional programming interface
 * @export
 */
const RecipesExportsApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.RecipesExportsApiAxiosParamCreator)(configuration);
    return {
        /**
         * ## Parameters `template_name`: The name of the template to use to use in the exports listed. Template type will automatically be set on the backend. Because of this, it\'s important that your templates have unique names. See available names and formats in the /api/recipes/exports endpoint.
         * @summary Get Recipe As Format
         * @param {string} slug
         * @param {string} templateName
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRecipeAsFormatApiRecipesSlugExportsGet(slug, templateName, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRecipeAsFormatApiRecipesSlugExportsGet(slug, templateName, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Get a Recipe and It\'s Original Image as a Zip File
         * @summary Get Recipe As Zip
         * @param {string} slug
         * @param {string} token
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRecipeAsZipApiRecipesSlugExportsZipGet(slug, token, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRecipeAsZipApiRecipesSlugExportsZipGet(slug, token, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get Recipe Formats And Templates
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRecipeFormatsAndTemplatesApiRecipesExportsGet(groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRecipeFormatsAndTemplatesApiRecipesExportsGet(groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Generates a recipe zip token to be used to download a recipe as a zip file
         * @summary Get Recipe Zip Token
         * @param {string} slug
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRecipeZipTokenApiRecipesSlugExportsPost(slug, groupId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRecipeZipTokenApiRecipesSlugExportsPost(slug, groupId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.RecipesExportsApiFp = RecipesExportsApiFp;
/**
 * RecipesExportsApi - factory interface
 * @export
 */
const RecipesExportsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.RecipesExportsApiFp)(configuration);
    return {
        /**
         * ## Parameters `template_name`: The name of the template to use to use in the exports listed. Template type will automatically be set on the backend. Because of this, it\'s important that your templates have unique names. See available names and formats in the /api/recipes/exports endpoint.
         * @summary Get Recipe As Format
         * @param {string} slug
         * @param {string} templateName
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecipeAsFormatApiRecipesSlugExportsGet(slug, templateName, groupId, acceptLanguage, options) {
            return localVarFp.getRecipeAsFormatApiRecipesSlugExportsGet(slug, templateName, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a Recipe and It\'s Original Image as a Zip File
         * @summary Get Recipe As Zip
         * @param {string} slug
         * @param {string} token
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecipeAsZipApiRecipesSlugExportsZipGet(slug, token, groupId, acceptLanguage, options) {
            return localVarFp.getRecipeAsZipApiRecipesSlugExportsZipGet(slug, token, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get Recipe Formats And Templates
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecipeFormatsAndTemplatesApiRecipesExportsGet(groupId, acceptLanguage, options) {
            return localVarFp.getRecipeFormatsAndTemplatesApiRecipesExportsGet(groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Generates a recipe zip token to be used to download a recipe as a zip file
         * @summary Get Recipe Zip Token
         * @param {string} slug
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecipeZipTokenApiRecipesSlugExportsPost(slug, groupId, acceptLanguage, options) {
            return localVarFp.getRecipeZipTokenApiRecipesSlugExportsPost(slug, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.RecipesExportsApiFactory = RecipesExportsApiFactory;
/**
 * RecipesExportsApi - object-oriented interface
 * @export
 * @class RecipesExportsApi
 * @extends {BaseAPI}
 */
class RecipesExportsApi extends base_1.BaseAPI {
    /**
     * ## Parameters `template_name`: The name of the template to use to use in the exports listed. Template type will automatically be set on the backend. Because of this, it\'s important that your templates have unique names. See available names and formats in the /api/recipes/exports endpoint.
     * @summary Get Recipe As Format
     * @param {string} slug
     * @param {string} templateName
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesExportsApi
     */
    getRecipeAsFormatApiRecipesSlugExportsGet(slug, templateName, groupId, acceptLanguage, options) {
        return (0, exports.RecipesExportsApiFp)(this.configuration).getRecipeAsFormatApiRecipesSlugExportsGet(slug, templateName, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get a Recipe and It\'s Original Image as a Zip File
     * @summary Get Recipe As Zip
     * @param {string} slug
     * @param {string} token
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesExportsApi
     */
    getRecipeAsZipApiRecipesSlugExportsZipGet(slug, token, groupId, acceptLanguage, options) {
        return (0, exports.RecipesExportsApiFp)(this.configuration).getRecipeAsZipApiRecipesSlugExportsZipGet(slug, token, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get Recipe Formats And Templates
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesExportsApi
     */
    getRecipeFormatsAndTemplatesApiRecipesExportsGet(groupId, acceptLanguage, options) {
        return (0, exports.RecipesExportsApiFp)(this.configuration).getRecipeFormatsAndTemplatesApiRecipesExportsGet(groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Generates a recipe zip token to be used to download a recipe as a zip file
     * @summary Get Recipe Zip Token
     * @param {string} slug
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesExportsApi
     */
    getRecipeZipTokenApiRecipesSlugExportsPost(slug, groupId, acceptLanguage, options) {
        return (0, exports.RecipesExportsApiFp)(this.configuration).getRecipeZipTokenApiRecipesSlugExportsPost(slug, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.RecipesExportsApi = RecipesExportsApi;
/**
 * RecipesQueryAllApi - axios parameter creator
 * @export
 */
const RecipesQueryAllApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Get Uncategorized Recipes
         * @param {boolean} [count]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUncategorizedRecipesApiRecipesSummaryUncategorizedGet: async (count, options = {}) => {
            const localVarPath = `/api/recipes/summary/uncategorized`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
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
         * @summary Get Untagged Recipes
         * @param {boolean} [count]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUntaggedRecipesApiRecipesSummaryUntaggedGet: async (count, options = {}) => {
            const localVarPath = `/api/recipes/summary/untagged`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
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
exports.RecipesQueryAllApiAxiosParamCreator = RecipesQueryAllApiAxiosParamCreator;
/**
 * RecipesQueryAllApi - functional programming interface
 * @export
 */
const RecipesQueryAllApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.RecipesQueryAllApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Get Uncategorized Recipes
         * @param {boolean} [count]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUncategorizedRecipesApiRecipesSummaryUncategorizedGet(count, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUncategorizedRecipesApiRecipesSummaryUncategorizedGet(count, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get Untagged Recipes
         * @param {boolean} [count]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUntaggedRecipesApiRecipesSummaryUntaggedGet(count, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUntaggedRecipesApiRecipesSummaryUntaggedGet(count, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.RecipesQueryAllApiFp = RecipesQueryAllApiFp;
/**
 * RecipesQueryAllApi - factory interface
 * @export
 */
const RecipesQueryAllApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.RecipesQueryAllApiFp)(configuration);
    return {
        /**
         *
         * @summary Get Uncategorized Recipes
         * @param {boolean} [count]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUncategorizedRecipesApiRecipesSummaryUncategorizedGet(count, options) {
            return localVarFp.getUncategorizedRecipesApiRecipesSummaryUncategorizedGet(count, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get Untagged Recipes
         * @param {boolean} [count]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUntaggedRecipesApiRecipesSummaryUntaggedGet(count, options) {
            return localVarFp.getUntaggedRecipesApiRecipesSummaryUntaggedGet(count, options).then((request) => request(axios, basePath));
        },
    };
};
exports.RecipesQueryAllApiFactory = RecipesQueryAllApiFactory;
/**
 * RecipesQueryAllApi - object-oriented interface
 * @export
 * @class RecipesQueryAllApi
 * @extends {BaseAPI}
 */
class RecipesQueryAllApi extends base_1.BaseAPI {
    /**
     *
     * @summary Get Uncategorized Recipes
     * @param {boolean} [count]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesQueryAllApi
     */
    getUncategorizedRecipesApiRecipesSummaryUncategorizedGet(count, options) {
        return (0, exports.RecipesQueryAllApiFp)(this.configuration).getUncategorizedRecipesApiRecipesSummaryUncategorizedGet(count, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get Untagged Recipes
     * @param {boolean} [count]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesQueryAllApi
     */
    getUntaggedRecipesApiRecipesSummaryUntaggedGet(count, options) {
        return (0, exports.RecipesQueryAllApiFp)(this.configuration).getUntaggedRecipesApiRecipesSummaryUntaggedGet(count, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.RecipesQueryAllApi = RecipesQueryAllApi;
/**
 * RecipesSharedApi - axios parameter creator
 * @export
 */
const RecipesSharedApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Get Shared Recipe
         * @param {string} tokenId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSharedRecipeApiRecipesSharedTokenIdGet: async (tokenId, options = {}) => {
            // verify required parameter 'tokenId' is not null or undefined
            (0, common_1.assertParamExists)('getSharedRecipeApiRecipesSharedTokenIdGet', 'tokenId', tokenId);
            const localVarPath = `/api/recipes/shared/{token_id}`
                .replace(`{${"token_id"}}`, encodeURIComponent(String(tokenId)));
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
exports.RecipesSharedApiAxiosParamCreator = RecipesSharedApiAxiosParamCreator;
/**
 * RecipesSharedApi - functional programming interface
 * @export
 */
const RecipesSharedApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.RecipesSharedApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Get Shared Recipe
         * @param {string} tokenId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSharedRecipeApiRecipesSharedTokenIdGet(tokenId, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSharedRecipeApiRecipesSharedTokenIdGet(tokenId, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.RecipesSharedApiFp = RecipesSharedApiFp;
/**
 * RecipesSharedApi - factory interface
 * @export
 */
const RecipesSharedApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.RecipesSharedApiFp)(configuration);
    return {
        /**
         *
         * @summary Get Shared Recipe
         * @param {string} tokenId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSharedRecipeApiRecipesSharedTokenIdGet(tokenId, options) {
            return localVarFp.getSharedRecipeApiRecipesSharedTokenIdGet(tokenId, options).then((request) => request(axios, basePath));
        },
    };
};
exports.RecipesSharedApiFactory = RecipesSharedApiFactory;
/**
 * RecipesSharedApi - object-oriented interface
 * @export
 * @class RecipesSharedApi
 * @extends {BaseAPI}
 */
class RecipesSharedApi extends base_1.BaseAPI {
    /**
     *
     * @summary Get Shared Recipe
     * @param {string} tokenId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesSharedApi
     */
    getSharedRecipeApiRecipesSharedTokenIdGet(tokenId, options) {
        return (0, exports.RecipesSharedApiFp)(this.configuration).getSharedRecipeApiRecipesSharedTokenIdGet(tokenId, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.RecipesSharedApi = RecipesSharedApi;
//# sourceMappingURL=recipes-api.js.map