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
    CreateIngredientFood,
    IngredientFood,
    IngredientFoodPagination,
    MergeFood,
    OrderDirection,
    SuccessResponse
} from "../models";

/**
 * FoodsApi - axios parameter creator
 * @export
 */
export const FoodsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Create One
         * @param {CreateIngredientFood} createIngredientFood
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiFoodsPost: async (createIngredientFood: CreateIngredientFood, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createIngredientFood' is not null or undefined
            assertParamExists('createOneApiFoodsPost', 'createIngredientFood', createIngredientFood)
            const localVarPath = `/api/foods`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createIngredientFood, localVarRequestOptions, configuration)

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
        deleteOneApiFoodsItemIdDelete: async (itemId: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('deleteOneApiFoodsItemIdDelete', 'itemId', itemId)
            const localVarPath = `/api/foods/{item_id}`
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
        getAllApiFoodsGet: async (page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/foods`;
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
        getOneApiFoodsItemIdGet: async (itemId: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getOneApiFoodsItemIdGet', 'itemId', itemId)
            const localVarPath = `/api/foods/{item_id}`
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
         * @summary Merge One
         * @param {MergeFood} mergeFood
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mergeOneApiFoodsMergePut: async (mergeFood: MergeFood, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'mergeFood' is not null or undefined
            assertParamExists('mergeOneApiFoodsMergePut', 'mergeFood', mergeFood)
            const localVarPath = `/api/foods/merge`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(mergeFood, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        updateOneApiFoodsItemIdPut: async (itemId: string, createIngredientFood: CreateIngredientFood, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('updateOneApiFoodsItemIdPut', 'itemId', itemId)
            // verify required parameter 'createIngredientFood' is not null or undefined
            assertParamExists('updateOneApiFoodsItemIdPut', 'createIngredientFood', createIngredientFood)
            const localVarPath = `/api/foods/{item_id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(createIngredientFood, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FoodsApi - functional programming interface
 * @export
 */
export const FoodsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FoodsApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Create One
         * @param {CreateIngredientFood} createIngredientFood
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiFoodsPost(createIngredientFood: CreateIngredientFood, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IngredientFood>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiFoodsPost(createIngredientFood, acceptLanguage, options);
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
        async deleteOneApiFoodsItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IngredientFood>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiFoodsItemIdDelete(itemId, acceptLanguage, options);
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
        async getAllApiFoodsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IngredientFoodPagination>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiFoodsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
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
        async getOneApiFoodsItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IngredientFood>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiFoodsItemIdGet(itemId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Merge One
         * @param {MergeFood} mergeFood
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async mergeOneApiFoodsMergePut(mergeFood: MergeFood, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.mergeOneApiFoodsMergePut(mergeFood, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async updateOneApiFoodsItemIdPut(itemId: string, createIngredientFood: CreateIngredientFood, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IngredientFood>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiFoodsItemIdPut(itemId, createIngredientFood, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FoodsApi - factory interface
 * @export
 */
export const FoodsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FoodsApiFp(configuration)
    return {
        /**
         *
         * @summary Create One
         * @param {CreateIngredientFood} createIngredientFood
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiFoodsPost(createIngredientFood: CreateIngredientFood, acceptLanguage?: string, options?: any): AxiosPromise<IngredientFood> {
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
        deleteOneApiFoodsItemIdDelete(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<IngredientFood> {
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
        getAllApiFoodsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<IngredientFoodPagination> {
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
        getOneApiFoodsItemIdGet(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<IngredientFood> {
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
        mergeOneApiFoodsMergePut(mergeFood: MergeFood, acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse> {
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
        updateOneApiFoodsItemIdPut(itemId: string, createIngredientFood: CreateIngredientFood, acceptLanguage?: string, options?: any): AxiosPromise<IngredientFood> {
            return localVarFp.updateOneApiFoodsItemIdPut(itemId, createIngredientFood, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FoodsApi - object-oriented interface
 * @export
 * @class FoodsApi
 * @extends {BaseAPI}
 */
export class FoodsApi extends BaseAPI {
    /**
     *
     * @summary Create One
     * @param {CreateIngredientFood} createIngredientFood
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoodsApi
     */
    public createOneApiFoodsPost(createIngredientFood: CreateIngredientFood, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return FoodsApiFp(this.configuration).createOneApiFoodsPost(createIngredientFood, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public deleteOneApiFoodsItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return FoodsApiFp(this.configuration).deleteOneApiFoodsItemIdDelete(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getAllApiFoodsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return FoodsApiFp(this.configuration).getAllApiFoodsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getOneApiFoodsItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return FoodsApiFp(this.configuration).getOneApiFoodsItemIdGet(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public mergeOneApiFoodsMergePut(mergeFood: MergeFood, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return FoodsApiFp(this.configuration).mergeOneApiFoodsMergePut(mergeFood, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public updateOneApiFoodsItemIdPut(itemId: string, createIngredientFood: CreateIngredientFood, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return FoodsApiFp(this.configuration).updateOneApiFoodsItemIdPut(itemId, createIngredientFood, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
