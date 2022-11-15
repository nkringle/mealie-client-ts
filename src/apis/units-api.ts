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
    CreateIngredientUnit,
    IngredientUnit,
    IngredientUnitPagination,
    MergeUnit,
    OrderDirection,
    SuccessResponse
} from "../models";

/**
 * UnitsApi - axios parameter creator
 * @export
 */
export const UnitsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Create One
         * @param {CreateIngredientUnit} createIngredientUnit
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiUnitsPost: async (createIngredientUnit: CreateIngredientUnit, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createIngredientUnit' is not null or undefined
            assertParamExists('createOneApiUnitsPost', 'createIngredientUnit', createIngredientUnit)
            const localVarPath = `/api/units`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createIngredientUnit, localVarRequestOptions, configuration)

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
        deleteOneApiUnitsItemIdDelete: async (itemId: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('deleteOneApiUnitsItemIdDelete', 'itemId', itemId)
            const localVarPath = `/api/units/{item_id}`
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
        getAllApiUnitsGet: async (page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/units`;
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
        getOneApiUnitsItemIdGet: async (itemId: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getOneApiUnitsItemIdGet', 'itemId', itemId)
            const localVarPath = `/api/units/{item_id}`
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
         * @param {MergeUnit} mergeUnit
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mergeOneApiUnitsMergePut: async (mergeUnit: MergeUnit, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'mergeUnit' is not null or undefined
            assertParamExists('mergeOneApiUnitsMergePut', 'mergeUnit', mergeUnit)
            const localVarPath = `/api/units/merge`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(mergeUnit, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {CreateIngredientUnit} createIngredientUnit
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiUnitsItemIdPut: async (itemId: string, createIngredientUnit: CreateIngredientUnit, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('updateOneApiUnitsItemIdPut', 'itemId', itemId)
            // verify required parameter 'createIngredientUnit' is not null or undefined
            assertParamExists('updateOneApiUnitsItemIdPut', 'createIngredientUnit', createIngredientUnit)
            const localVarPath = `/api/units/{item_id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(createIngredientUnit, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UnitsApi - functional programming interface
 * @export
 */
export const UnitsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UnitsApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Create One
         * @param {CreateIngredientUnit} createIngredientUnit
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiUnitsPost(createIngredientUnit: CreateIngredientUnit, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IngredientUnit>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiUnitsPost(createIngredientUnit, acceptLanguage, options);
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
        async deleteOneApiUnitsItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IngredientUnit>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiUnitsItemIdDelete(itemId, acceptLanguage, options);
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
        async getAllApiUnitsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IngredientUnitPagination>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiUnitsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
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
        async getOneApiUnitsItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IngredientUnit>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiUnitsItemIdGet(itemId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Merge One
         * @param {MergeUnit} mergeUnit
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async mergeOneApiUnitsMergePut(mergeUnit: MergeUnit, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.mergeOneApiUnitsMergePut(mergeUnit, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {CreateIngredientUnit} createIngredientUnit
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOneApiUnitsItemIdPut(itemId: string, createIngredientUnit: CreateIngredientUnit, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IngredientUnit>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiUnitsItemIdPut(itemId, createIngredientUnit, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UnitsApi - factory interface
 * @export
 */
export const UnitsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UnitsApiFp(configuration)
    return {
        /**
         *
         * @summary Create One
         * @param {CreateIngredientUnit} createIngredientUnit
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiUnitsPost(createIngredientUnit: CreateIngredientUnit, acceptLanguage?: string, options?: any): AxiosPromise<IngredientUnit> {
            return localVarFp.createOneApiUnitsPost(createIngredientUnit, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiUnitsItemIdDelete(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<IngredientUnit> {
            return localVarFp.deleteOneApiUnitsItemIdDelete(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
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
        getAllApiUnitsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<IngredientUnitPagination> {
            return localVarFp.getAllApiUnitsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiUnitsItemIdGet(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<IngredientUnit> {
            return localVarFp.getOneApiUnitsItemIdGet(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Merge One
         * @param {MergeUnit} mergeUnit
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mergeOneApiUnitsMergePut(mergeUnit: MergeUnit, acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse> {
            return localVarFp.mergeOneApiUnitsMergePut(mergeUnit, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {CreateIngredientUnit} createIngredientUnit
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiUnitsItemIdPut(itemId: string, createIngredientUnit: CreateIngredientUnit, acceptLanguage?: string, options?: any): AxiosPromise<IngredientUnit> {
            return localVarFp.updateOneApiUnitsItemIdPut(itemId, createIngredientUnit, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UnitsApi - object-oriented interface
 * @export
 * @class UnitsApi
 * @extends {BaseAPI}
 */
export class UnitsApi extends BaseAPI {
    /**
     *
     * @summary Create One
     * @param {CreateIngredientUnit} createIngredientUnit
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UnitsApi
     */
    public createOneApiUnitsPost(createIngredientUnit: CreateIngredientUnit, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return UnitsApiFp(this.configuration).createOneApiUnitsPost(createIngredientUnit, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UnitsApi
     */
    public deleteOneApiUnitsItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return UnitsApiFp(this.configuration).deleteOneApiUnitsItemIdDelete(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
     * @memberof UnitsApi
     */
    public getAllApiUnitsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return UnitsApiFp(this.configuration).getAllApiUnitsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UnitsApi
     */
    public getOneApiUnitsItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return UnitsApiFp(this.configuration).getOneApiUnitsItemIdGet(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Merge One
     * @param {MergeUnit} mergeUnit
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UnitsApi
     */
    public mergeOneApiUnitsMergePut(mergeUnit: MergeUnit, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return UnitsApiFp(this.configuration).mergeOneApiUnitsMergePut(mergeUnit, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {CreateIngredientUnit} createIngredientUnit
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UnitsApi
     */
    public updateOneApiUnitsItemIdPut(itemId: string, createIngredientUnit: CreateIngredientUnit, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return UnitsApiFp(this.configuration).updateOneApiUnitsItemIdPut(itemId, createIngredientUnit, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
