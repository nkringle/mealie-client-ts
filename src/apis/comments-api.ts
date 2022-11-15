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
import {
    OrderDirection,
    RecipeCommentCreate,
    RecipeCommentOut,
    RecipeCommentPagination, RecipeCommentUpdate,
    SuccessResponse
} from "../models";

/**
 * CommentsApi - axios parameter creator
 * @export
 */
export const CommentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Create One
         * @param {RecipeCommentCreate} recipeCommentCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiCommentsPost: async (recipeCommentCreate: RecipeCommentCreate, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'recipeCommentCreate' is not null or undefined
            assertParamExists('createOneApiCommentsPost', 'recipeCommentCreate', recipeCommentCreate)
            const localVarPath = `/api/comments`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(recipeCommentCreate, localVarRequestOptions, configuration)

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
        deleteOneApiCommentsItemIdDelete: async (itemId: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('deleteOneApiCommentsItemIdDelete', 'itemId', itemId)
            const localVarPath = `/api/comments/{item_id}`
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
         * @param {number} [page]
         * @param {number} [perPage]
         * @param {string} [orderBy]
         * @param {OrderDirection} [orderDirection]
         * @param {string} [queryFilter]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllApiCommentsGet: async (page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/comments`;
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
        getOneApiCommentsItemIdGet: async (itemId: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getOneApiCommentsItemIdGet', 'itemId', itemId)
            const localVarPath = `/api/comments/{item_id}`
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
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {RecipeCommentUpdate} recipeCommentUpdate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiCommentsItemIdPut: async (itemId: string, recipeCommentUpdate: RecipeCommentUpdate, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('updateOneApiCommentsItemIdPut', 'itemId', itemId)
            // verify required parameter 'recipeCommentUpdate' is not null or undefined
            assertParamExists('updateOneApiCommentsItemIdPut', 'recipeCommentUpdate', recipeCommentUpdate)
            const localVarPath = `/api/comments/{item_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(recipeCommentUpdate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CommentsApi - functional programming interface
 * @export
 */
export const CommentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CommentsApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Create One
         * @param {RecipeCommentCreate} recipeCommentCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiCommentsPost(recipeCommentCreate: RecipeCommentCreate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeCommentOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiCommentsPost(recipeCommentCreate, acceptLanguage, options);
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
        async deleteOneApiCommentsItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiCommentsItemIdDelete(itemId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async getAllApiCommentsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeCommentPagination>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiCommentsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
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
        async getOneApiCommentsItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeCommentOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiCommentsItemIdGet(itemId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async updateOneApiCommentsItemIdPut(itemId: string, recipeCommentUpdate: RecipeCommentUpdate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeCommentOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiCommentsItemIdPut(itemId, recipeCommentUpdate, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CommentsApi - factory interface
 * @export
 */
export const CommentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CommentsApiFp(configuration)
    return {
        /**
         *
         * @summary Create One
         * @param {RecipeCommentCreate} recipeCommentCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiCommentsPost(recipeCommentCreate: RecipeCommentCreate, acceptLanguage?: string, options?: any): AxiosPromise<RecipeCommentOut> {
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
        deleteOneApiCommentsItemIdDelete(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse> {
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
        getAllApiCommentsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeCommentPagination> {
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
        getOneApiCommentsItemIdGet(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeCommentOut> {
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
        updateOneApiCommentsItemIdPut(itemId: string, recipeCommentUpdate: RecipeCommentUpdate, acceptLanguage?: string, options?: any): AxiosPromise<RecipeCommentOut> {
            return localVarFp.updateOneApiCommentsItemIdPut(itemId, recipeCommentUpdate, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CommentsApi - object-oriented interface
 * @export
 * @class CommentsApi
 * @extends {BaseAPI}
 */
export class CommentsApi extends BaseAPI {
    /**
     *
     * @summary Create One
     * @param {RecipeCommentCreate} recipeCommentCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    public createOneApiCommentsPost(recipeCommentCreate: RecipeCommentCreate, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return CommentsApiFp(this.configuration).createOneApiCommentsPost(recipeCommentCreate, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public deleteOneApiCommentsItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return CommentsApiFp(this.configuration).deleteOneApiCommentsItemIdDelete(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getAllApiCommentsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return CommentsApiFp(this.configuration).getAllApiCommentsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getOneApiCommentsItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return CommentsApiFp(this.configuration).getOneApiCommentsItemIdGet(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public updateOneApiCommentsItemIdPut(itemId: string, recipeCommentUpdate: RecipeCommentUpdate, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return CommentsApiFp(this.configuration).updateOneApiCommentsItemIdPut(itemId, recipeCommentUpdate, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
