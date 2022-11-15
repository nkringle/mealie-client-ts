import {Configuration} from "../common/configuration";
import globalAxios, {AxiosInstance, AxiosPromise, AxiosRequestConfig} from "axios";
import {BASE_PATH, BaseAPI, RequestArgs} from "../common/base";
import {
    assertParamExists, createRequestFunction,
    DUMMY_BASE_URL,
    serializeDataIfNeeded,
    setOAuthToObject,
    setSearchParams,
    toPathString
} from "../common/common";
import {RecipeShareToken, RecipeShareTokenCreate, RecipeShareTokenSummary} from "../models";

/**
 * SharedRecipesApi - axios parameter creator
 * @export
 */
export const SharedRecipesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Create One
         * @param {RecipeShareTokenCreate} recipeShareTokenCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiSharedRecipesPost: async (recipeShareTokenCreate: RecipeShareTokenCreate, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'recipeShareTokenCreate' is not null or undefined
            assertParamExists('createOneApiSharedRecipesPost', 'recipeShareTokenCreate', recipeShareTokenCreate)
            const localVarPath = `/api/shared/recipes`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(recipeShareTokenCreate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        deleteOneApiSharedRecipesItemIdDelete: async (itemId: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('deleteOneApiSharedRecipesItemIdDelete', 'itemId', itemId)
            const localVarPath = `/api/shared/recipes/{item_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         *
         * @summary Get All
         * @param {string} [recipeId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllApiSharedRecipesGet: async (recipeId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/shared/recipes`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (recipeId !== undefined) {
                localVarQueryParameter['recipe_id'] = recipeId;
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
         * @summary Get One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiSharedRecipesItemIdGet: async (itemId: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getOneApiSharedRecipesItemIdGet', 'itemId', itemId)
            const localVarPath = `/api/shared/recipes/{item_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
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
 * SharedRecipesApi - functional programming interface
 * @export
 */
export const SharedRecipesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SharedRecipesApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Create One
         * @param {RecipeShareTokenCreate} recipeShareTokenCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiSharedRecipesPost(recipeShareTokenCreate: RecipeShareTokenCreate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeShareToken>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiSharedRecipesPost(recipeShareTokenCreate, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteOneApiSharedRecipesItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiSharedRecipesItemIdDelete(itemId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get All
         * @param {string} [recipeId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllApiSharedRecipesGet(recipeId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<RecipeShareTokenSummary>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiSharedRecipesGet(recipeId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOneApiSharedRecipesItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeShareToken>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiSharedRecipesItemIdGet(itemId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SharedRecipesApi - factory interface
 * @export
 */
export const SharedRecipesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SharedRecipesApiFp(configuration)
    return {
        /**
         *
         * @summary Create One
         * @param {RecipeShareTokenCreate} recipeShareTokenCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiSharedRecipesPost(recipeShareTokenCreate: RecipeShareTokenCreate, acceptLanguage?: string, options?: any): AxiosPromise<RecipeShareToken> {
            return localVarFp.createOneApiSharedRecipesPost(recipeShareTokenCreate, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiSharedRecipesItemIdDelete(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<any> {
            return localVarFp.deleteOneApiSharedRecipesItemIdDelete(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get All
         * @param {string} [recipeId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllApiSharedRecipesGet(recipeId?: string, acceptLanguage?: string, options?: any): AxiosPromise<Array<RecipeShareTokenSummary>> {
            return localVarFp.getAllApiSharedRecipesGet(recipeId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiSharedRecipesItemIdGet(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeShareToken> {
            return localVarFp.getOneApiSharedRecipesItemIdGet(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SharedRecipesApi - object-oriented interface
 * @export
 * @class SharedRecipesApi
 * @extends {BaseAPI}
 */
export class SharedRecipesApi extends BaseAPI {
    /**
     *
     * @summary Create One
     * @param {RecipeShareTokenCreate} recipeShareTokenCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharedRecipesApi
     */
    public createOneApiSharedRecipesPost(recipeShareTokenCreate: RecipeShareTokenCreate, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return SharedRecipesApiFp(this.configuration).createOneApiSharedRecipesPost(recipeShareTokenCreate, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharedRecipesApi
     */
    public deleteOneApiSharedRecipesItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return SharedRecipesApiFp(this.configuration).deleteOneApiSharedRecipesItemIdDelete(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Get All
     * @param {string} [recipeId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharedRecipesApi
     */
    public getAllApiSharedRecipesGet(recipeId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return SharedRecipesApiFp(this.configuration).getAllApiSharedRecipesGet(recipeId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharedRecipesApi
     */
    public getOneApiSharedRecipesItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return SharedRecipesApiFp(this.configuration).getOneApiSharedRecipesItemIdGet(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
