import {Configuration} from "../common/configuration";
import globalAxios, {AxiosInstance, AxiosPromise, AxiosRequestConfig} from "axios";
import {BASE_PATH, BaseAPI, RequestArgs} from "../common/base";
import {
    assertParamExists,
    createRequestFunction,
    DUMMY_BASE_URL, serializeDataIfNeeded,
    setOAuthToObject,
    setSearchParams,
    toPathString
} from "../common/common";
import {
    AssignCategories,
    AssignSettings, AssignTags, CategoriesInner, Cookbook, CreateRecipe, CreateRecipeByUrlBulk, DeleteRecipes,
    ExportRecipes,
    FormatResponse, GroupDataExport, OrderDirection,
    Recipe,
    RecipeAsset, RecipeCommentOut,
    RecipePagination, RecipeSummary, RecipeZipTokenResponse, ScrapeRecipe, ScrapeRecipeTest,
    SuccessResponse,
    UpdateImageResponse
} from "../models";

/**
 * RecipeCommentsApi - axios parameter creator
 * @export
 */
export const RecipeCommentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get all comments for a recipe
         * @summary Get Recipe Comments
         * @param {string} slug
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecipeCommentsApiRecipesSlugCommentsGet: async (slug: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'slug' is not null or undefined
            assertParamExists('getRecipeCommentsApiRecipesSlugCommentsGet', 'slug', slug)
            const localVarPath = `/api/recipes/{slug}/comments`
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }


            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RecipeCommentsApi - functional programming interface
 * @export
 */
export const RecipeCommentsApiFp = function (configuration?: Configuration) {
    const localVarAxiosParamCreator = RecipeCommentsApiAxiosParamCreator(configuration)
    return {
        /**
         * Get all comments for a recipe
         * @summary Get Recipe Comments
         * @param {string} slug
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRecipeCommentsApiRecipesSlugCommentsGet(slug: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<RecipeCommentOut>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRecipeCommentsApiRecipesSlugCommentsGet(slug, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RecipeCommentsApi - factory interface
 * @export
 */
export const RecipeCommentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RecipeCommentsApiFp(configuration)
    return {
        /**
         * Get all comments for a recipe
         * @summary Get Recipe Comments
         * @param {string} slug
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecipeCommentsApiRecipesSlugCommentsGet(slug: string, acceptLanguage?: string, options?: any): AxiosPromise<Array<RecipeCommentOut>> {
            return localVarFp.getRecipeCommentsApiRecipesSlugCommentsGet(slug, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RecipeCommentsApi - object-oriented interface
 * @export
 * @class RecipeCommentsApi
 * @extends {BaseAPI}
 */
export class RecipeCommentsApi extends BaseAPI {
    /**
     * Get all comments for a recipe
     * @summary Get Recipe Comments
     * @param {string} slug
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipeCommentsApi
     */
    public getRecipeCommentsApiRecipesSlugCommentsGet(slug: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return RecipeCommentsApiFp(this.configuration).getRecipeCommentsApiRecipesSlugCommentsGet(slug, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * RecipesBulkActionsApi - axios parameter creator
 * @export
 */
export const RecipesBulkActionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Bulk Categorize Recipes
         * @param {AssignCategories} assignCategories
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bulkCategorizeRecipesApiRecipesBulkActionsCategorizePost: async (assignCategories: AssignCategories, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'assignCategories' is not null or undefined
            assertParamExists('bulkCategorizeRecipesApiRecipesBulkActionsCategorizePost', 'assignCategories', assignCategories)
            const localVarPath = `/api/recipes/bulk-actions/categorize`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'POST', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(assignCategories, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        bulkDeleteRecipesApiRecipesBulkActionsDeletePost: async (deleteRecipes: DeleteRecipes, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'deleteRecipes' is not null or undefined
            assertParamExists('bulkDeleteRecipesApiRecipesBulkActionsDeletePost', 'deleteRecipes', deleteRecipes)
            const localVarPath = `/api/recipes/bulk-actions/delete`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'POST', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(deleteRecipes, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        bulkExportRecipesApiRecipesBulkActionsExportPost: async (exportRecipes: ExportRecipes, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'exportRecipes' is not null or undefined
            assertParamExists('bulkExportRecipesApiRecipesBulkActionsExportPost', 'exportRecipes', exportRecipes)
            const localVarPath = `/api/recipes/bulk-actions/export`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'POST', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(exportRecipes, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        bulkSettingsRecipesApiRecipesBulkActionsSettingsPost: async (assignSettings: AssignSettings, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'assignSettings' is not null or undefined
            assertParamExists('bulkSettingsRecipesApiRecipesBulkActionsSettingsPost', 'assignSettings', assignSettings)
            const localVarPath = `/api/recipes/bulk-actions/settings`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'POST', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(assignSettings, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        bulkTagRecipesApiRecipesBulkActionsTagPost: async (assignTags: AssignTags, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'assignTags' is not null or undefined
            assertParamExists('bulkTagRecipesApiRecipesBulkActionsTagPost', 'assignTags', assignTags)
            const localVarPath = `/api/recipes/bulk-actions/tag`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'POST', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(assignTags, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        getExportedDataApiRecipesBulkActionsExportGet: async (acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/recipes/bulk-actions/export`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }


            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
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
        getExportedDataTokenApiRecipesBulkActionsExportDownloadGet: async (path: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'path' is not null or undefined
            assertParamExists('getExportedDataTokenApiRecipesBulkActionsExportDownloadGet', 'path', path)
            const localVarPath = `/api/recipes/bulk-actions/export/download`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (path !== undefined) {
                localVarQueryParameter['path'] = path;
            }

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }


            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
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
        purgeExportDataApiRecipesBulkActionsExportPurgeDelete: async (acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/recipes/bulk-actions/export/purge`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }


            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RecipesBulkActionsApi - functional programming interface
 * @export
 */
export const RecipesBulkActionsApiFp = function (configuration?: Configuration) {
    const localVarAxiosParamCreator = RecipesBulkActionsApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Bulk Categorize Recipes
         * @param {AssignCategories} assignCategories
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async bulkCategorizeRecipesApiRecipesBulkActionsCategorizePost(assignCategories: AssignCategories, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.bulkCategorizeRecipesApiRecipesBulkActionsCategorizePost(assignCategories, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Bulk Delete Recipes
         * @param {DeleteRecipes} deleteRecipes
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async bulkDeleteRecipesApiRecipesBulkActionsDeletePost(deleteRecipes: DeleteRecipes, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.bulkDeleteRecipesApiRecipesBulkActionsDeletePost(deleteRecipes, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Bulk Export Recipes
         * @param {ExportRecipes} exportRecipes
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async bulkExportRecipesApiRecipesBulkActionsExportPost(exportRecipes: ExportRecipes, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.bulkExportRecipesApiRecipesBulkActionsExportPost(exportRecipes, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Bulk Settings Recipes
         * @param {AssignSettings} assignSettings
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async bulkSettingsRecipesApiRecipesBulkActionsSettingsPost(assignSettings: AssignSettings, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.bulkSettingsRecipesApiRecipesBulkActionsSettingsPost(assignSettings, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Bulk Tag Recipes
         * @param {AssignTags} assignTags
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async bulkTagRecipesApiRecipesBulkActionsTagPost(assignTags: AssignTags, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.bulkTagRecipesApiRecipesBulkActionsTagPost(assignTags, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get Exported Data
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getExportedDataApiRecipesBulkActionsExportGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GroupDataExport>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getExportedDataApiRecipesBulkActionsExportGet(acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a token to download a file
         * @summary Get Exported Data Token
         * @param {string} path
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getExportedDataTokenApiRecipesBulkActionsExportDownloadGet(path: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getExportedDataTokenApiRecipesBulkActionsExportDownloadGet(path, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Remove all exports data, including items on disk without database entry
         * @summary Purge Export Data
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async purgeExportDataApiRecipesBulkActionsExportPurgeDelete(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.purgeExportDataApiRecipesBulkActionsExportPurgeDelete(acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RecipesBulkActionsApi - factory interface
 * @export
 */
export const RecipesBulkActionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RecipesBulkActionsApiFp(configuration)
    return {
        /**
         *
         * @summary Bulk Categorize Recipes
         * @param {AssignCategories} assignCategories
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bulkCategorizeRecipesApiRecipesBulkActionsCategorizePost(assignCategories: AssignCategories, acceptLanguage?: string, options?: any): AxiosPromise<any> {
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
        bulkDeleteRecipesApiRecipesBulkActionsDeletePost(deleteRecipes: DeleteRecipes, acceptLanguage?: string, options?: any): AxiosPromise<any> {
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
        bulkExportRecipesApiRecipesBulkActionsExportPost(exportRecipes: ExportRecipes, acceptLanguage?: string, options?: any): AxiosPromise<any> {
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
        bulkSettingsRecipesApiRecipesBulkActionsSettingsPost(assignSettings: AssignSettings, acceptLanguage?: string, options?: any): AxiosPromise<any> {
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
        bulkTagRecipesApiRecipesBulkActionsTagPost(assignTags: AssignTags, acceptLanguage?: string, options?: any): AxiosPromise<any> {
            return localVarFp.bulkTagRecipesApiRecipesBulkActionsTagPost(assignTags, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get Exported Data
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExportedDataApiRecipesBulkActionsExportGet(acceptLanguage?: string, options?: any): AxiosPromise<Array<GroupDataExport>> {
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
        getExportedDataTokenApiRecipesBulkActionsExportDownloadGet(path: string, acceptLanguage?: string, options?: any): AxiosPromise<any> {
            return localVarFp.getExportedDataTokenApiRecipesBulkActionsExportDownloadGet(path, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Remove all exports data, including items on disk without database entry
         * @summary Purge Export Data
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        purgeExportDataApiRecipesBulkActionsExportPurgeDelete(acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse> {
            return localVarFp.purgeExportDataApiRecipesBulkActionsExportPurgeDelete(acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RecipesBulkActionsApi - object-oriented interface
 * @export
 * @class RecipesBulkActionsApi
 * @extends {BaseAPI}
 */
export class RecipesBulkActionsApi extends BaseAPI {
    /**
     *
     * @summary Bulk Categorize Recipes
     * @param {AssignCategories} assignCategories
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesBulkActionsApi
     */
    public bulkCategorizeRecipesApiRecipesBulkActionsCategorizePost(assignCategories: AssignCategories, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return RecipesBulkActionsApiFp(this.configuration).bulkCategorizeRecipesApiRecipesBulkActionsCategorizePost(assignCategories, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public bulkDeleteRecipesApiRecipesBulkActionsDeletePost(deleteRecipes: DeleteRecipes, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return RecipesBulkActionsApiFp(this.configuration).bulkDeleteRecipesApiRecipesBulkActionsDeletePost(deleteRecipes, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public bulkExportRecipesApiRecipesBulkActionsExportPost(exportRecipes: ExportRecipes, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return RecipesBulkActionsApiFp(this.configuration).bulkExportRecipesApiRecipesBulkActionsExportPost(exportRecipes, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public bulkSettingsRecipesApiRecipesBulkActionsSettingsPost(assignSettings: AssignSettings, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return RecipesBulkActionsApiFp(this.configuration).bulkSettingsRecipesApiRecipesBulkActionsSettingsPost(assignSettings, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public bulkTagRecipesApiRecipesBulkActionsTagPost(assignTags: AssignTags, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return RecipesBulkActionsApiFp(this.configuration).bulkTagRecipesApiRecipesBulkActionsTagPost(assignTags, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Get Exported Data
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesBulkActionsApi
     */
    public getExportedDataApiRecipesBulkActionsExportGet(acceptLanguage?: string, options?: AxiosRequestConfig) {
        return RecipesBulkActionsApiFp(this.configuration).getExportedDataApiRecipesBulkActionsExportGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getExportedDataTokenApiRecipesBulkActionsExportDownloadGet(path: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return RecipesBulkActionsApiFp(this.configuration).getExportedDataTokenApiRecipesBulkActionsExportDownloadGet(path, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Remove all exports data, including items on disk without database entry
     * @summary Purge Export Data
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesBulkActionsApi
     */
    public purgeExportDataApiRecipesBulkActionsExportPurgeDelete(acceptLanguage?: string, options?: AxiosRequestConfig) {
        return RecipesBulkActionsApiFp(this.configuration).purgeExportDataApiRecipesBulkActionsExportPurgeDelete(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * RecipesCRUDApi - axios parameter creator
 * @export
 */
export const RecipesCRUDApiAxiosParamCreator = function (configuration?: Configuration) {
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
        createOneApiRecipesPost: async (createRecipe: CreateRecipe, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createRecipe' is not null or undefined
            assertParamExists('createOneApiRecipesPost', 'createRecipe', createRecipe)
            const localVarPath = `/api/recipes`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }


            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createRecipe, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        createRecipeFromZipApiRecipesCreateFromZipPost: async (archive: File, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'archive' is not null or undefined
            assertParamExists('createRecipeFromZipApiRecipesCreateFromZipPost', 'archive', archive)
            const localVarPath = `/api/recipes/create-from-zip`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }


            if (archive !== undefined) {
                localVarFormParams.append('archive', archive as any);
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
        createRecipeOcrApiRecipesCreateOcrPost: async (extension: string, file: File, makefilerecipeimage: boolean, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'extension' is not null or undefined
            assertParamExists('createRecipeOcrApiRecipesCreateOcrPost', 'extension', extension)
            // verify required parameter 'file' is not null or undefined
            assertParamExists('createRecipeOcrApiRecipesCreateOcrPost', 'file', file)
            // verify required parameter 'makefilerecipeimage' is not null or undefined
            assertParamExists('createRecipeOcrApiRecipesCreateOcrPost', 'makefilerecipeimage', makefilerecipeimage)
            const localVarPath = `/api/recipes/create-ocr`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }


            if (extension !== undefined) {
                localVarFormParams.append('extension', extension as any);
            }

            if (file !== undefined) {
                localVarFormParams.append('file', file as any);
            }

            if (makefilerecipeimage !== undefined) {
                localVarFormParams.append('makefilerecipeimage', makefilerecipeimage as any);
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
         * Deletes a recipe by slug
         * @summary Delete One
         * @param {string} slug
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiRecipesSlugDelete: async (slug: string, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'slug' is not null or undefined
            assertParamExists('deleteOneApiRecipesSlugDelete', 'slug', slug)
            const localVarPath = `/api/recipes/{slug}`
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }


            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
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
        getAllApiRecipesGet: async (cookbook?: Cookbook, categories?: Array<CategoriesInner>, tags?: Array<CategoriesInner>, tools?: Array<CategoriesInner>, groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, loadFood?: boolean, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/recipes`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

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


            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
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
        getOneApiRecipesSlugGet: async (slug: string, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'slug' is not null or undefined
            assertParamExists('getOneApiRecipesSlugGet', 'slug', slug)
            const localVarPath = `/api/recipes/{slug}`
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }


            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
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
        parseRecipeUrlApiRecipesCreateUrlPost: async (scrapeRecipe: ScrapeRecipe, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'scrapeRecipe' is not null or undefined
            assertParamExists('parseRecipeUrlApiRecipesCreateUrlPost', 'scrapeRecipe', scrapeRecipe)
            const localVarPath = `/api/recipes/create-url`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }


            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(scrapeRecipe, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        parseRecipeUrlBulkApiRecipesCreateUrlBulkPost: async (createRecipeByUrlBulk: CreateRecipeByUrlBulk, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createRecipeByUrlBulk' is not null or undefined
            assertParamExists('parseRecipeUrlBulkApiRecipesCreateUrlBulkPost', 'createRecipeByUrlBulk', createRecipeByUrlBulk)
            const localVarPath = `/api/recipes/create-url/bulk`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }


            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createRecipeByUrlBulk, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        patchOneApiRecipesSlugPatch: async (slug: string, recipe: Recipe, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'slug' is not null or undefined
            assertParamExists('patchOneApiRecipesSlugPatch', 'slug', slug)
            // verify required parameter 'recipe' is not null or undefined
            assertParamExists('patchOneApiRecipesSlugPatch', 'recipe', recipe)
            const localVarPath = `/api/recipes/{slug}`
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }


            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(recipe, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        scrapeImageUrlApiRecipesSlugImagePost: async (slug: string, scrapeRecipe: ScrapeRecipe, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'slug' is not null or undefined
            assertParamExists('scrapeImageUrlApiRecipesSlugImagePost', 'slug', slug)
            // verify required parameter 'scrapeRecipe' is not null or undefined
            assertParamExists('scrapeImageUrlApiRecipesSlugImagePost', 'scrapeRecipe', scrapeRecipe)
            const localVarPath = `/api/recipes/{slug}/image`
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }


            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(scrapeRecipe, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        testParseRecipeUrlApiRecipesTestScrapeUrlPost: async (scrapeRecipeTest: ScrapeRecipeTest, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'scrapeRecipeTest' is not null or undefined
            assertParamExists('testParseRecipeUrlApiRecipesTestScrapeUrlPost', 'scrapeRecipeTest', scrapeRecipeTest)
            const localVarPath = `/api/recipes/test-scrape-url`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }


            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(scrapeRecipeTest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        updateOneApiRecipesSlugPut: async (slug: string, recipe: Recipe, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'slug' is not null or undefined
            assertParamExists('updateOneApiRecipesSlugPut', 'slug', slug)
            // verify required parameter 'recipe' is not null or undefined
            assertParamExists('updateOneApiRecipesSlugPut', 'recipe', recipe)
            const localVarPath = `/api/recipes/{slug}`
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }


            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(recipe, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        updateRecipeImageApiRecipesSlugImagePut: async (slug: string, image: File, extension: string, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'slug' is not null or undefined
            assertParamExists('updateRecipeImageApiRecipesSlugImagePut', 'slug', slug)
            // verify required parameter 'image' is not null or undefined
            assertParamExists('updateRecipeImageApiRecipesSlugImagePut', 'image', image)
            // verify required parameter 'extension' is not null or undefined
            assertParamExists('updateRecipeImageApiRecipesSlugImagePut', 'extension', extension)
            const localVarPath = `/api/recipes/{slug}/image`
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }


            if (image !== undefined) {
                localVarFormParams.append('image', image as any);
            }

            if (extension !== undefined) {
                localVarFormParams.append('extension', extension as any);
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
        uploadRecipeAssetApiRecipesSlugAssetsPost: async (slug: string, name: string, icon: string, extension: string, file: File, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'slug' is not null or undefined
            assertParamExists('uploadRecipeAssetApiRecipesSlugAssetsPost', 'slug', slug)
            // verify required parameter 'name' is not null or undefined
            assertParamExists('uploadRecipeAssetApiRecipesSlugAssetsPost', 'name', name)
            // verify required parameter 'icon' is not null or undefined
            assertParamExists('uploadRecipeAssetApiRecipesSlugAssetsPost', 'icon', icon)
            // verify required parameter 'extension' is not null or undefined
            assertParamExists('uploadRecipeAssetApiRecipesSlugAssetsPost', 'extension', extension)
            // verify required parameter 'file' is not null or undefined
            assertParamExists('uploadRecipeAssetApiRecipesSlugAssetsPost', 'file', file)
            const localVarPath = `/api/recipes/{slug}/assets`
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }


            if (name !== undefined) {
                localVarFormParams.append('name', name as any);
            }

            if (icon !== undefined) {
                localVarFormParams.append('icon', icon as any);
            }

            if (extension !== undefined) {
                localVarFormParams.append('extension', extension as any);
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
 * RecipesCRUDApi - functional programming interface
 * @export
 */
export const RecipesCRUDApiFp = function (configuration?: Configuration) {
    const localVarAxiosParamCreator = RecipesCRUDApiAxiosParamCreator(configuration)
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
        async createOneApiRecipesPost(createRecipe: CreateRecipe, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiRecipesPost(createRecipe, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async createRecipeFromZipApiRecipesCreateFromZipPost(archive: File, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRecipeFromZipApiRecipesCreateFromZipPost(archive, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async createRecipeOcrApiRecipesCreateOcrPost(extension: string, file: File, makefilerecipeimage: boolean, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRecipeOcrApiRecipesCreateOcrPost(extension, file, makefilerecipeimage, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async deleteOneApiRecipesSlugDelete(slug: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiRecipesSlugDelete(slug, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async getAllApiRecipesGet(cookbook?: Cookbook, categories?: Array<CategoriesInner>, tags?: Array<CategoriesInner>, tools?: Array<CategoriesInner>, groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, loadFood?: boolean, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipePagination>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiRecipesGet(cookbook, categories, tags, tools, groupId, page, perPage, orderBy, orderDirection, queryFilter, loadFood, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async getOneApiRecipesSlugGet(slug: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Recipe>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiRecipesSlugGet(slug, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async parseRecipeUrlApiRecipesCreateUrlPost(scrapeRecipe: ScrapeRecipe, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.parseRecipeUrlApiRecipesCreateUrlPost(scrapeRecipe, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async parseRecipeUrlBulkApiRecipesCreateUrlBulkPost(createRecipeByUrlBulk: CreateRecipeByUrlBulk, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.parseRecipeUrlBulkApiRecipesCreateUrlBulkPost(createRecipeByUrlBulk, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async patchOneApiRecipesSlugPatch(slug: string, recipe: Recipe, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchOneApiRecipesSlugPatch(slug, recipe, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async scrapeImageUrlApiRecipesSlugImagePost(slug: string, scrapeRecipe: ScrapeRecipe, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.scrapeImageUrlApiRecipesSlugImagePost(slug, scrapeRecipe, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async testParseRecipeUrlApiRecipesTestScrapeUrlPost(scrapeRecipeTest: ScrapeRecipeTest, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.testParseRecipeUrlApiRecipesTestScrapeUrlPost(scrapeRecipeTest, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async updateOneApiRecipesSlugPut(slug: string, recipe: Recipe, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiRecipesSlugPut(slug, recipe, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async updateRecipeImageApiRecipesSlugImagePut(slug: string, image: File, extension: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateImageResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateRecipeImageApiRecipesSlugImagePut(slug, image, extension, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async uploadRecipeAssetApiRecipesSlugAssetsPost(slug: string, name: string, icon: string, extension: string, file: File, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeAsset>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadRecipeAssetApiRecipesSlugAssetsPost(slug, name, icon, extension, file, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RecipesCRUDApi - factory interface
 * @export
 */
export const RecipesCRUDApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RecipesCRUDApiFp(configuration)
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
        createOneApiRecipesPost(createRecipe: CreateRecipe, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<string> {
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
        createRecipeFromZipApiRecipesCreateFromZipPost(archive: File, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<any> {
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
        createRecipeOcrApiRecipesCreateOcrPost(extension: string, file: File, makefilerecipeimage: boolean, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<string> {
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
        deleteOneApiRecipesSlugDelete(slug: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<any> {
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
        getAllApiRecipesGet(cookbook?: Cookbook, categories?: Array<CategoriesInner>, tags?: Array<CategoriesInner>, tools?: Array<CategoriesInner>, groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, loadFood?: boolean, acceptLanguage?: string, options?: any): AxiosPromise<RecipePagination> {
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
        getOneApiRecipesSlugGet(slug: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<Recipe> {
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
        parseRecipeUrlApiRecipesCreateUrlPost(scrapeRecipe: ScrapeRecipe, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<string> {
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
        parseRecipeUrlBulkApiRecipesCreateUrlBulkPost(createRecipeByUrlBulk: CreateRecipeByUrlBulk, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<any> {
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
        patchOneApiRecipesSlugPatch(slug: string, recipe: Recipe, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<any> {
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
        scrapeImageUrlApiRecipesSlugImagePost(slug: string, scrapeRecipe: ScrapeRecipe, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<any> {
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
        testParseRecipeUrlApiRecipesTestScrapeUrlPost(scrapeRecipeTest: ScrapeRecipeTest, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<any> {
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
        updateOneApiRecipesSlugPut(slug: string, recipe: Recipe, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<any> {
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
        updateRecipeImageApiRecipesSlugImagePut(slug: string, image: File, extension: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<UpdateImageResponse> {
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
        uploadRecipeAssetApiRecipesSlugAssetsPost(slug: string, name: string, icon: string, extension: string, file: File, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeAsset> {
            return localVarFp.uploadRecipeAssetApiRecipesSlugAssetsPost(slug, name, icon, extension, file, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RecipesCRUDApi - object-oriented interface
 * @export
 * @class RecipesCRUDApi
 * @extends {BaseAPI}
 */
export class RecipesCRUDApi extends BaseAPI {
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
    public createOneApiRecipesPost(createRecipe: CreateRecipe, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return RecipesCRUDApiFp(this.configuration).createOneApiRecipesPost(createRecipe, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public createRecipeFromZipApiRecipesCreateFromZipPost(archive: File, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return RecipesCRUDApiFp(this.configuration).createRecipeFromZipApiRecipesCreateFromZipPost(archive, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public createRecipeOcrApiRecipesCreateOcrPost(extension: string, file: File, makefilerecipeimage: boolean, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return RecipesCRUDApiFp(this.configuration).createRecipeOcrApiRecipesCreateOcrPost(extension, file, makefilerecipeimage, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public deleteOneApiRecipesSlugDelete(slug: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return RecipesCRUDApiFp(this.configuration).deleteOneApiRecipesSlugDelete(slug, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getAllApiRecipesGet(cookbook?: Cookbook, categories?: Array<CategoriesInner>, tags?: Array<CategoriesInner>, tools?: Array<CategoriesInner>, groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, loadFood?: boolean, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return RecipesCRUDApiFp(this.configuration).getAllApiRecipesGet(cookbook, categories, tags, tools, groupId, page, perPage, orderBy, orderDirection, queryFilter, loadFood, acceptLanguage, options)
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
    public getOneApiRecipesSlugGet(slug: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return RecipesCRUDApiFp(this.configuration).getOneApiRecipesSlugGet(slug, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public parseRecipeUrlApiRecipesCreateUrlPost(scrapeRecipe: ScrapeRecipe, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return RecipesCRUDApiFp(this.configuration).parseRecipeUrlApiRecipesCreateUrlPost(scrapeRecipe, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public parseRecipeUrlBulkApiRecipesCreateUrlBulkPost(createRecipeByUrlBulk: CreateRecipeByUrlBulk, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return RecipesCRUDApiFp(this.configuration).parseRecipeUrlBulkApiRecipesCreateUrlBulkPost(createRecipeByUrlBulk, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public patchOneApiRecipesSlugPatch(slug: string, recipe: Recipe, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return RecipesCRUDApiFp(this.configuration).patchOneApiRecipesSlugPatch(slug, recipe, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public scrapeImageUrlApiRecipesSlugImagePost(slug: string, scrapeRecipe: ScrapeRecipe, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return RecipesCRUDApiFp(this.configuration).scrapeImageUrlApiRecipesSlugImagePost(slug, scrapeRecipe, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public testParseRecipeUrlApiRecipesTestScrapeUrlPost(scrapeRecipeTest: ScrapeRecipeTest, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return RecipesCRUDApiFp(this.configuration).testParseRecipeUrlApiRecipesTestScrapeUrlPost(scrapeRecipeTest, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public updateOneApiRecipesSlugPut(slug: string, recipe: Recipe, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return RecipesCRUDApiFp(this.configuration).updateOneApiRecipesSlugPut(slug, recipe, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public updateRecipeImageApiRecipesSlugImagePut(slug: string, image: File, extension: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return RecipesCRUDApiFp(this.configuration).updateRecipeImageApiRecipesSlugImagePut(slug, image, extension, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public uploadRecipeAssetApiRecipesSlugAssetsPost(slug: string, name: string, icon: string, extension: string, file: File, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return RecipesCRUDApiFp(this.configuration).uploadRecipeAssetApiRecipesSlugAssetsPost(slug, name, icon, extension, file, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * RecipesExportsApi - axios parameter creator
 * @export
 */
export const RecipesExportsApiAxiosParamCreator = function (configuration?: Configuration) {
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
        getRecipeAsFormatApiRecipesSlugExportsGet: async (slug: string, templateName: string, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'slug' is not null or undefined
            assertParamExists('getRecipeAsFormatApiRecipesSlugExportsGet', 'slug', slug)
            // verify required parameter 'templateName' is not null or undefined
            assertParamExists('getRecipeAsFormatApiRecipesSlugExportsGet', 'templateName', templateName)
            const localVarPath = `/api/recipes/{slug}/exports`
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (templateName !== undefined) {
                localVarQueryParameter['template_name'] = templateName;
            }

            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }


            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
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
        getRecipeAsZipApiRecipesSlugExportsZipGet: async (slug: string, token: string, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'slug' is not null or undefined
            assertParamExists('getRecipeAsZipApiRecipesSlugExportsZipGet', 'slug', slug)
            // verify required parameter 'token' is not null or undefined
            assertParamExists('getRecipeAsZipApiRecipesSlugExportsZipGet', 'token', token)
            const localVarPath = `/api/recipes/{slug}/exports/zip`
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (token !== undefined) {
                localVarQueryParameter['token'] = token;
            }

            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }


            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
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
        getRecipeFormatsAndTemplatesApiRecipesExportsGet: async (groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/recipes/exports`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }


            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
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
        getRecipeZipTokenApiRecipesSlugExportsPost: async (slug: string, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'slug' is not null or undefined
            assertParamExists('getRecipeZipTokenApiRecipesSlugExportsPost', 'slug', slug)
            const localVarPath = `/api/recipes/{slug}/exports`
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }


            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RecipesExportsApi - functional programming interface
 * @export
 */
export const RecipesExportsApiFp = function (configuration?: Configuration) {
    const localVarAxiosParamCreator = RecipesExportsApiAxiosParamCreator(configuration)
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
        async getRecipeAsFormatApiRecipesSlugExportsGet(slug: string, templateName: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRecipeAsFormatApiRecipesSlugExportsGet(slug, templateName, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async getRecipeAsZipApiRecipesSlugExportsZipGet(slug: string, token: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRecipeAsZipApiRecipesSlugExportsZipGet(slug, token, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get Recipe Formats And Templates
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRecipeFormatsAndTemplatesApiRecipesExportsGet(groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FormatResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRecipeFormatsAndTemplatesApiRecipesExportsGet(groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async getRecipeZipTokenApiRecipesSlugExportsPost(slug: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeZipTokenResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRecipeZipTokenApiRecipesSlugExportsPost(slug, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RecipesExportsApi - factory interface
 * @export
 */
export const RecipesExportsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RecipesExportsApiFp(configuration)
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
        getRecipeAsFormatApiRecipesSlugExportsGet(slug: string, templateName: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<void> {
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
        getRecipeAsZipApiRecipesSlugExportsZipGet(slug: string, token: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<any> {
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
        getRecipeFormatsAndTemplatesApiRecipesExportsGet(groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<FormatResponse> {
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
        getRecipeZipTokenApiRecipesSlugExportsPost(slug: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeZipTokenResponse> {
            return localVarFp.getRecipeZipTokenApiRecipesSlugExportsPost(slug, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RecipesExportsApi - object-oriented interface
 * @export
 * @class RecipesExportsApi
 * @extends {BaseAPI}
 */
export class RecipesExportsApi extends BaseAPI {
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
    public getRecipeAsFormatApiRecipesSlugExportsGet(slug: string, templateName: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return RecipesExportsApiFp(this.configuration).getRecipeAsFormatApiRecipesSlugExportsGet(slug, templateName, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getRecipeAsZipApiRecipesSlugExportsZipGet(slug: string, token: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return RecipesExportsApiFp(this.configuration).getRecipeAsZipApiRecipesSlugExportsZipGet(slug, token, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getRecipeFormatsAndTemplatesApiRecipesExportsGet(groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return RecipesExportsApiFp(this.configuration).getRecipeFormatsAndTemplatesApiRecipesExportsGet(groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getRecipeZipTokenApiRecipesSlugExportsPost(slug: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return RecipesExportsApiFp(this.configuration).getRecipeZipTokenApiRecipesSlugExportsPost(slug, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * RecipesQueryAllApi - axios parameter creator
 * @export
 */
export const RecipesQueryAllApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Get Uncategorized Recipes
         * @param {boolean} [count]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUncategorizedRecipesApiRecipesSummaryUncategorizedGet: async (count?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/recipes/summary/uncategorized`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }


            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
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
        getUntaggedRecipesApiRecipesSummaryUntaggedGet: async (count?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/recipes/summary/untagged`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }


            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RecipesQueryAllApi - functional programming interface
 * @export
 */
export const RecipesQueryAllApiFp = function (configuration?: Configuration) {
    const localVarAxiosParamCreator = RecipesQueryAllApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Get Uncategorized Recipes
         * @param {boolean} [count]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUncategorizedRecipesApiRecipesSummaryUncategorizedGet(count?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<RecipeSummary>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUncategorizedRecipesApiRecipesSummaryUncategorizedGet(count, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get Untagged Recipes
         * @param {boolean} [count]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUntaggedRecipesApiRecipesSummaryUntaggedGet(count?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<RecipeSummary>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUntaggedRecipesApiRecipesSummaryUntaggedGet(count, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RecipesQueryAllApi - factory interface
 * @export
 */
export const RecipesQueryAllApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RecipesQueryAllApiFp(configuration)
    return {
        /**
         *
         * @summary Get Uncategorized Recipes
         * @param {boolean} [count]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUncategorizedRecipesApiRecipesSummaryUncategorizedGet(count?: boolean, options?: any): AxiosPromise<Array<RecipeSummary>> {
            return localVarFp.getUncategorizedRecipesApiRecipesSummaryUncategorizedGet(count, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get Untagged Recipes
         * @param {boolean} [count]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUntaggedRecipesApiRecipesSummaryUntaggedGet(count?: boolean, options?: any): AxiosPromise<Array<RecipeSummary>> {
            return localVarFp.getUntaggedRecipesApiRecipesSummaryUntaggedGet(count, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RecipesQueryAllApi - object-oriented interface
 * @export
 * @class RecipesQueryAllApi
 * @extends {BaseAPI}
 */
export class RecipesQueryAllApi extends BaseAPI {
    /**
     *
     * @summary Get Uncategorized Recipes
     * @param {boolean} [count]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesQueryAllApi
     */
    public getUncategorizedRecipesApiRecipesSummaryUncategorizedGet(count?: boolean, options?: AxiosRequestConfig) {
        return RecipesQueryAllApiFp(this.configuration).getUncategorizedRecipesApiRecipesSummaryUncategorizedGet(count, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Get Untagged Recipes
     * @param {boolean} [count]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesQueryAllApi
     */
    public getUntaggedRecipesApiRecipesSummaryUntaggedGet(count?: boolean, options?: AxiosRequestConfig) {
        return RecipesQueryAllApiFp(this.configuration).getUntaggedRecipesApiRecipesSummaryUntaggedGet(count, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * RecipesSharedApi - axios parameter creator
 * @export
 */
export const RecipesSharedApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Get Shared Recipe
         * @param {string} tokenId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSharedRecipeApiRecipesSharedTokenIdGet: async (tokenId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tokenId' is not null or undefined
            assertParamExists('getSharedRecipeApiRecipesSharedTokenIdGet', 'tokenId', tokenId)
            const localVarPath = `/api/recipes/shared/{token_id}`
                .replace(`{${"token_id"}}`, encodeURIComponent(String(tokenId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = {method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RecipesSharedApi - functional programming interface
 * @export
 */
export const RecipesSharedApiFp = function (configuration?: Configuration) {
    const localVarAxiosParamCreator = RecipesSharedApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Get Shared Recipe
         * @param {string} tokenId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSharedRecipeApiRecipesSharedTokenIdGet(tokenId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Recipe>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSharedRecipeApiRecipesSharedTokenIdGet(tokenId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RecipesSharedApi - factory interface
 * @export
 */
export const RecipesSharedApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RecipesSharedApiFp(configuration)
    return {
        /**
         *
         * @summary Get Shared Recipe
         * @param {string} tokenId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSharedRecipeApiRecipesSharedTokenIdGet(tokenId: string, options?: any): AxiosPromise<Recipe> {
            return localVarFp.getSharedRecipeApiRecipesSharedTokenIdGet(tokenId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RecipesSharedApi - object-oriented interface
 * @export
 * @class RecipesSharedApi
 * @extends {BaseAPI}
 */
export class RecipesSharedApi extends BaseAPI {
    /**
     *
     * @summary Get Shared Recipe
     * @param {string} tokenId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesSharedApi
     */
    public getSharedRecipeApiRecipesSharedTokenIdGet(tokenId: string, options?: AxiosRequestConfig) {
        return RecipesSharedApiFp(this.configuration).getSharedRecipeApiRecipesSharedTokenIdGet(tokenId, options).then((request) => request(this.axios, this.basePath));
    }
}
