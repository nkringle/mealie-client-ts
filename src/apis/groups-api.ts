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
    CategoryBase, CookBookPagination,
    CreateCookBook,
    CreateInviteToken,
    CreatePlanEntry,
    CreateRandomEntry,
    CreateWebhook, EmailInitationResponse,
    EmailInvitation,
    GroupEventNotifierCreate, GroupEventNotifierOut,
    GroupEventNotifierUpdate,
    GroupEventPagination, GroupInDB,
    GroupStatistics,
    GroupStorage,
    ItemId,
    MultiPurposeLabelCreate,
    MultiPurposeLabelOut,
    MultiPurposeLabelPagination,
    MultiPurposeLabelUpdate, OrderDirection,
    PlanEntryPagination,
    PlanRulesCreate, PlanRulesOut, PlanRulesPagination,
    ReadCookBook, ReadGroupPreferences,
    ReadInviteToken,
    ReadPlanEntry,
    ReadWebhook,
    RecipeCookBook,
    ReportCategory,
    ReportOut,
    ReportSummary, SeederConfig, SetPermissions,
    ShoppingListCreate,
    ShoppingListItemCreate,
    ShoppingListItemOut,
    ShoppingListItemUpdate,
    ShoppingListOut, ShoppingListPagination,
    ShoppingListUpdate,
    SuccessResponse,
    SupportedMigrations,
    UpdateCookBook,
    UpdateGroupPreferences,
    UpdatePlanEntry,
    UserOut,
    WebhookPagination
} from "../models";

/**
 * GroupsCookbooksApi - axios parameter creator
 * @export
 */
export const GroupsCookbooksApiAxiosParamCreator = function (configuration?: Configuration) {
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
        createOneApiGroupsCookbooksPost: async (createCookBook: CreateCookBook, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createCookBook' is not null or undefined
            assertParamExists('createOneApiGroupsCookbooksPost', 'createCookBook', createCookBook)
            const localVarPath = `/api/groups/cookbooks`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createCookBook, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        deleteOneApiGroupsCookbooksItemIdDelete: async (itemId: string, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('deleteOneApiGroupsCookbooksItemIdDelete', 'itemId', itemId)
            const localVarPath = `/api/groups/cookbooks/{item_id}`
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
        getAllApiGroupsCookbooksGet: async (groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/groups/cookbooks`;
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
         * @param {ItemId} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiGroupsCookbooksItemIdGet: async (itemId: ItemId, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getOneApiGroupsCookbooksItemIdGet', 'itemId', itemId)
            const localVarPath = `/api/groups/cookbooks/{item_id}`
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
         * @summary Update Many
         * @param {Array<UpdateCookBook>} updateCookBook
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateManyApiGroupsCookbooksPut: async (updateCookBook: Array<UpdateCookBook>, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'updateCookBook' is not null or undefined
            assertParamExists('updateManyApiGroupsCookbooksPut', 'updateCookBook', updateCookBook)
            const localVarPath = `/api/groups/cookbooks`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateCookBook, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        updateOneApiGroupsCookbooksItemIdPut: async (itemId: string, createCookBook: CreateCookBook, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('updateOneApiGroupsCookbooksItemIdPut', 'itemId', itemId)
            // verify required parameter 'createCookBook' is not null or undefined
            assertParamExists('updateOneApiGroupsCookbooksItemIdPut', 'createCookBook', createCookBook)
            const localVarPath = `/api/groups/cookbooks/{item_id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(createCookBook, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GroupsCookbooksApi - functional programming interface
 * @export
 */
export const GroupsCookbooksApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GroupsCookbooksApiAxiosParamCreator(configuration)
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
        async createOneApiGroupsCookbooksPost(createCookBook: CreateCookBook, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadCookBook>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiGroupsCookbooksPost(createCookBook, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async deleteOneApiGroupsCookbooksItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadCookBook>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiGroupsCookbooksItemIdDelete(itemId, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async getAllApiGroupsCookbooksGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CookBookPagination>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiGroupsCookbooksGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async getOneApiGroupsCookbooksItemIdGet(itemId: ItemId, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeCookBook>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiGroupsCookbooksItemIdGet(itemId, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async updateManyApiGroupsCookbooksPut(updateCookBook: Array<UpdateCookBook>, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ReadCookBook>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateManyApiGroupsCookbooksPut(updateCookBook, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async updateOneApiGroupsCookbooksItemIdPut(itemId: string, createCookBook: CreateCookBook, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadCookBook>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiGroupsCookbooksItemIdPut(itemId, createCookBook, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GroupsCookbooksApi - factory interface
 * @export
 */
export const GroupsCookbooksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GroupsCookbooksApiFp(configuration)
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
        createOneApiGroupsCookbooksPost(createCookBook: CreateCookBook, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<ReadCookBook> {
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
        deleteOneApiGroupsCookbooksItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<ReadCookBook> {
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
        getAllApiGroupsCookbooksGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<CookBookPagination> {
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
        getOneApiGroupsCookbooksItemIdGet(itemId: ItemId, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeCookBook> {
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
        updateManyApiGroupsCookbooksPut(updateCookBook: Array<UpdateCookBook>, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<Array<ReadCookBook>> {
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
        updateOneApiGroupsCookbooksItemIdPut(itemId: string, createCookBook: CreateCookBook, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<ReadCookBook> {
            return localVarFp.updateOneApiGroupsCookbooksItemIdPut(itemId, createCookBook, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GroupsCookbooksApi - object-oriented interface
 * @export
 * @class GroupsCookbooksApi
 * @extends {BaseAPI}
 */
export class GroupsCookbooksApi extends BaseAPI {
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
    public createOneApiGroupsCookbooksPost(createCookBook: CreateCookBook, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsCookbooksApiFp(this.configuration).createOneApiGroupsCookbooksPost(createCookBook, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public deleteOneApiGroupsCookbooksItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsCookbooksApiFp(this.configuration).deleteOneApiGroupsCookbooksItemIdDelete(itemId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getAllApiGroupsCookbooksGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsCookbooksApiFp(this.configuration).getAllApiGroupsCookbooksGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getOneApiGroupsCookbooksItemIdGet(itemId: ItemId, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsCookbooksApiFp(this.configuration).getOneApiGroupsCookbooksItemIdGet(itemId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public updateManyApiGroupsCookbooksPut(updateCookBook: Array<UpdateCookBook>, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsCookbooksApiFp(this.configuration).updateManyApiGroupsCookbooksPut(updateCookBook, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public updateOneApiGroupsCookbooksItemIdPut(itemId: string, createCookBook: CreateCookBook, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsCookbooksApiFp(this.configuration).updateOneApiGroupsCookbooksItemIdPut(itemId, createCookBook, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * GroupsEventNotificationsApi - axios parameter creator
 * @export
 */
export const GroupsEventNotificationsApiAxiosParamCreator = function (configuration?: Configuration) {
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
        createOneApiGroupsEventsNotificationsPost: async (groupEventNotifierCreate: GroupEventNotifierCreate, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupEventNotifierCreate' is not null or undefined
            assertParamExists('createOneApiGroupsEventsNotificationsPost', 'groupEventNotifierCreate', groupEventNotifierCreate)
            const localVarPath = `/api/groups/events/notifications`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(groupEventNotifierCreate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        deleteOneApiGroupsEventsNotificationsItemIdDelete: async (itemId: string, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('deleteOneApiGroupsEventsNotificationsItemIdDelete', 'itemId', itemId)
            const localVarPath = `/api/groups/events/notifications/{item_id}`
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
        getAllApiGroupsEventsNotificationsGet: async (groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/groups/events/notifications`;
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
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiGroupsEventsNotificationsItemIdGet: async (itemId: string, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getOneApiGroupsEventsNotificationsItemIdGet', 'itemId', itemId)
            const localVarPath = `/api/groups/events/notifications/{item_id}`
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
         * @summary Test Notification
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        testNotificationApiGroupsEventsNotificationsItemIdTestPost: async (itemId: string, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('testNotificationApiGroupsEventsNotificationsItemIdTestPost', 'itemId', itemId)
            const localVarPath = `/api/groups/events/notifications/{item_id}/test`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
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
         * @summary Update One
         * @param {string} itemId
         * @param {GroupEventNotifierUpdate} groupEventNotifierUpdate
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiGroupsEventsNotificationsItemIdPut: async (itemId: string, groupEventNotifierUpdate: GroupEventNotifierUpdate, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('updateOneApiGroupsEventsNotificationsItemIdPut', 'itemId', itemId)
            // verify required parameter 'groupEventNotifierUpdate' is not null or undefined
            assertParamExists('updateOneApiGroupsEventsNotificationsItemIdPut', 'groupEventNotifierUpdate', groupEventNotifierUpdate)
            const localVarPath = `/api/groups/events/notifications/{item_id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(groupEventNotifierUpdate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GroupsEventNotificationsApi - functional programming interface
 * @export
 */
export const GroupsEventNotificationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GroupsEventNotificationsApiAxiosParamCreator(configuration)
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
        async createOneApiGroupsEventsNotificationsPost(groupEventNotifierCreate: GroupEventNotifierCreate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupEventNotifierOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiGroupsEventsNotificationsPost(groupEventNotifierCreate, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async deleteOneApiGroupsEventsNotificationsItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiGroupsEventsNotificationsItemIdDelete(itemId, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async getAllApiGroupsEventsNotificationsGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupEventPagination>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiGroupsEventsNotificationsGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async getOneApiGroupsEventsNotificationsItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupEventNotifierOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiGroupsEventsNotificationsItemIdGet(itemId, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async testNotificationApiGroupsEventsNotificationsItemIdTestPost(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.testNotificationApiGroupsEventsNotificationsItemIdTestPost(itemId, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async updateOneApiGroupsEventsNotificationsItemIdPut(itemId: string, groupEventNotifierUpdate: GroupEventNotifierUpdate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupEventNotifierOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiGroupsEventsNotificationsItemIdPut(itemId, groupEventNotifierUpdate, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GroupsEventNotificationsApi - factory interface
 * @export
 */
export const GroupsEventNotificationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GroupsEventNotificationsApiFp(configuration)
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
        createOneApiGroupsEventsNotificationsPost(groupEventNotifierCreate: GroupEventNotifierCreate, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<GroupEventNotifierOut> {
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
        deleteOneApiGroupsEventsNotificationsItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<void> {
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
        getAllApiGroupsEventsNotificationsGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<GroupEventPagination> {
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
        getOneApiGroupsEventsNotificationsItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<GroupEventNotifierOut> {
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
        testNotificationApiGroupsEventsNotificationsItemIdTestPost(itemId: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<void> {
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
        updateOneApiGroupsEventsNotificationsItemIdPut(itemId: string, groupEventNotifierUpdate: GroupEventNotifierUpdate, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<GroupEventNotifierOut> {
            return localVarFp.updateOneApiGroupsEventsNotificationsItemIdPut(itemId, groupEventNotifierUpdate, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GroupsEventNotificationsApi - object-oriented interface
 * @export
 * @class GroupsEventNotificationsApi
 * @extends {BaseAPI}
 */
export class GroupsEventNotificationsApi extends BaseAPI {
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
    public createOneApiGroupsEventsNotificationsPost(groupEventNotifierCreate: GroupEventNotifierCreate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsEventNotificationsApiFp(this.configuration).createOneApiGroupsEventsNotificationsPost(groupEventNotifierCreate, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public deleteOneApiGroupsEventsNotificationsItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsEventNotificationsApiFp(this.configuration).deleteOneApiGroupsEventsNotificationsItemIdDelete(itemId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getAllApiGroupsEventsNotificationsGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsEventNotificationsApiFp(this.configuration).getAllApiGroupsEventsNotificationsGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getOneApiGroupsEventsNotificationsItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsEventNotificationsApiFp(this.configuration).getOneApiGroupsEventsNotificationsItemIdGet(itemId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public testNotificationApiGroupsEventsNotificationsItemIdTestPost(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsEventNotificationsApiFp(this.configuration).testNotificationApiGroupsEventsNotificationsItemIdTestPost(itemId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public updateOneApiGroupsEventsNotificationsItemIdPut(itemId: string, groupEventNotifierUpdate: GroupEventNotifierUpdate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsEventNotificationsApiFp(this.configuration).updateOneApiGroupsEventsNotificationsItemIdPut(itemId, groupEventNotifierUpdate, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * GroupsInvitationsApi - axios parameter creator
 * @export
 */
export const GroupsInvitationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Create Invite Token
         * @param {CreateInviteToken} createInviteToken
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createInviteTokenApiGroupsInvitationsPost: async (createInviteToken: CreateInviteToken, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createInviteToken' is not null or undefined
            assertParamExists('createInviteTokenApiGroupsInvitationsPost', 'createInviteToken', createInviteToken)
            const localVarPath = `/api/groups/invitations`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createInviteToken, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        emailInvitationApiGroupsInvitationsEmailPost: async (emailInvitation: EmailInvitation, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'emailInvitation' is not null or undefined
            assertParamExists('emailInvitationApiGroupsInvitationsEmailPost', 'emailInvitation', emailInvitation)
            const localVarPath = `/api/groups/invitations/email`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(emailInvitation, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        getInviteTokensApiGroupsInvitationsGet: async (acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/groups/invitations`;
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
 * GroupsInvitationsApi - functional programming interface
 * @export
 */
export const GroupsInvitationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GroupsInvitationsApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Create Invite Token
         * @param {CreateInviteToken} createInviteToken
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createInviteTokenApiGroupsInvitationsPost(createInviteToken: CreateInviteToken, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadInviteToken>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createInviteTokenApiGroupsInvitationsPost(createInviteToken, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Email Invitation
         * @param {EmailInvitation} emailInvitation
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async emailInvitationApiGroupsInvitationsEmailPost(emailInvitation: EmailInvitation, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmailInitationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.emailInvitationApiGroupsInvitationsEmailPost(emailInvitation, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get Invite Tokens
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInviteTokensApiGroupsInvitationsGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ReadInviteToken>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInviteTokensApiGroupsInvitationsGet(acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GroupsInvitationsApi - factory interface
 * @export
 */
export const GroupsInvitationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GroupsInvitationsApiFp(configuration)
    return {
        /**
         *
         * @summary Create Invite Token
         * @param {CreateInviteToken} createInviteToken
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createInviteTokenApiGroupsInvitationsPost(createInviteToken: CreateInviteToken, acceptLanguage?: string, options?: any): AxiosPromise<ReadInviteToken> {
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
        emailInvitationApiGroupsInvitationsEmailPost(emailInvitation: EmailInvitation, acceptLanguage?: string, options?: any): AxiosPromise<EmailInitationResponse> {
            return localVarFp.emailInvitationApiGroupsInvitationsEmailPost(emailInvitation, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get Invite Tokens
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInviteTokensApiGroupsInvitationsGet(acceptLanguage?: string, options?: any): AxiosPromise<Array<ReadInviteToken>> {
            return localVarFp.getInviteTokensApiGroupsInvitationsGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GroupsInvitationsApi - object-oriented interface
 * @export
 * @class GroupsInvitationsApi
 * @extends {BaseAPI}
 */
export class GroupsInvitationsApi extends BaseAPI {
    /**
     *
     * @summary Create Invite Token
     * @param {CreateInviteToken} createInviteToken
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsInvitationsApi
     */
    public createInviteTokenApiGroupsInvitationsPost(createInviteToken: CreateInviteToken, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsInvitationsApiFp(this.configuration).createInviteTokenApiGroupsInvitationsPost(createInviteToken, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public emailInvitationApiGroupsInvitationsEmailPost(emailInvitation: EmailInvitation, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsInvitationsApiFp(this.configuration).emailInvitationApiGroupsInvitationsEmailPost(emailInvitation, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Get Invite Tokens
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsInvitationsApi
     */
    public getInviteTokensApiGroupsInvitationsGet(acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsInvitationsApiFp(this.configuration).getInviteTokensApiGroupsInvitationsGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * GroupsMealplanCategoriesApi - axios parameter creator
 * @export
 */
export const GroupsMealplanCategoriesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Get Mealplan Categories
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMealplanCategoriesApiGroupsCategoriesGet: async (acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/groups/categories`;
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
         * @summary Update Mealplan Categories
         * @param {Array<CategoryBase>} categoryBase
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMealplanCategoriesApiGroupsCategoriesPut: async (categoryBase: Array<CategoryBase>, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'categoryBase' is not null or undefined
            assertParamExists('updateMealplanCategoriesApiGroupsCategoriesPut', 'categoryBase', categoryBase)
            const localVarPath = `/api/groups/categories`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(categoryBase, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GroupsMealplanCategoriesApi - functional programming interface
 * @export
 */
export const GroupsMealplanCategoriesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GroupsMealplanCategoriesApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Get Mealplan Categories
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMealplanCategoriesApiGroupsCategoriesGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CategoryBase>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMealplanCategoriesApiGroupsCategoriesGet(acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Update Mealplan Categories
         * @param {Array<CategoryBase>} categoryBase
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateMealplanCategoriesApiGroupsCategoriesPut(categoryBase: Array<CategoryBase>, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CategoryBase>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateMealplanCategoriesApiGroupsCategoriesPut(categoryBase, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GroupsMealplanCategoriesApi - factory interface
 * @export
 */
export const GroupsMealplanCategoriesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GroupsMealplanCategoriesApiFp(configuration)
    return {
        /**
         *
         * @summary Get Mealplan Categories
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMealplanCategoriesApiGroupsCategoriesGet(acceptLanguage?: string, options?: any): AxiosPromise<Array<CategoryBase>> {
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
        updateMealplanCategoriesApiGroupsCategoriesPut(categoryBase: Array<CategoryBase>, acceptLanguage?: string, options?: any): AxiosPromise<Array<CategoryBase>> {
            return localVarFp.updateMealplanCategoriesApiGroupsCategoriesPut(categoryBase, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GroupsMealplanCategoriesApi - object-oriented interface
 * @export
 * @class GroupsMealplanCategoriesApi
 * @extends {BaseAPI}
 */
export class GroupsMealplanCategoriesApi extends BaseAPI {
    /**
     *
     * @summary Get Mealplan Categories
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplanCategoriesApi
     */
    public getMealplanCategoriesApiGroupsCategoriesGet(acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsMealplanCategoriesApiFp(this.configuration).getMealplanCategoriesApiGroupsCategoriesGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public updateMealplanCategoriesApiGroupsCategoriesPut(categoryBase: Array<CategoryBase>, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsMealplanCategoriesApiFp(this.configuration).updateMealplanCategoriesApiGroupsCategoriesPut(categoryBase, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * GroupsMealplanRulesApi - axios parameter creator
 * @export
 */
export const GroupsMealplanRulesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Create One
         * @param {PlanRulesCreate} planRulesCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiGroupsMealplansRulesPost: async (planRulesCreate: PlanRulesCreate, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'planRulesCreate' is not null or undefined
            assertParamExists('createOneApiGroupsMealplansRulesPost', 'planRulesCreate', planRulesCreate)
            const localVarPath = `/api/groups/mealplans/rules`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(planRulesCreate, localVarRequestOptions, configuration)

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
        deleteOneApiGroupsMealplansRulesItemIdDelete: async (itemId: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('deleteOneApiGroupsMealplansRulesItemIdDelete', 'itemId', itemId)
            const localVarPath = `/api/groups/mealplans/rules/{item_id}`
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
        getAllApiGroupsMealplansRulesGet: async (page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/groups/mealplans/rules`;
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
        getOneApiGroupsMealplansRulesItemIdGet: async (itemId: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getOneApiGroupsMealplansRulesItemIdGet', 'itemId', itemId)
            const localVarPath = `/api/groups/mealplans/rules/{item_id}`
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
         * @param {PlanRulesCreate} planRulesCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiGroupsMealplansRulesItemIdPut: async (itemId: string, planRulesCreate: PlanRulesCreate, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('updateOneApiGroupsMealplansRulesItemIdPut', 'itemId', itemId)
            // verify required parameter 'planRulesCreate' is not null or undefined
            assertParamExists('updateOneApiGroupsMealplansRulesItemIdPut', 'planRulesCreate', planRulesCreate)
            const localVarPath = `/api/groups/mealplans/rules/{item_id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(planRulesCreate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GroupsMealplanRulesApi - functional programming interface
 * @export
 */
export const GroupsMealplanRulesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GroupsMealplanRulesApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Create One
         * @param {PlanRulesCreate} planRulesCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiGroupsMealplansRulesPost(planRulesCreate: PlanRulesCreate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlanRulesOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiGroupsMealplansRulesPost(planRulesCreate, acceptLanguage, options);
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
        async deleteOneApiGroupsMealplansRulesItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlanRulesOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiGroupsMealplansRulesItemIdDelete(itemId, acceptLanguage, options);
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
        async getAllApiGroupsMealplansRulesGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlanRulesPagination>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiGroupsMealplansRulesGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
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
        async getOneApiGroupsMealplansRulesItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlanRulesOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiGroupsMealplansRulesItemIdGet(itemId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async updateOneApiGroupsMealplansRulesItemIdPut(itemId: string, planRulesCreate: PlanRulesCreate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlanRulesOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiGroupsMealplansRulesItemIdPut(itemId, planRulesCreate, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GroupsMealplanRulesApi - factory interface
 * @export
 */
export const GroupsMealplanRulesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GroupsMealplanRulesApiFp(configuration)
    return {
        /**
         *
         * @summary Create One
         * @param {PlanRulesCreate} planRulesCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiGroupsMealplansRulesPost(planRulesCreate: PlanRulesCreate, acceptLanguage?: string, options?: any): AxiosPromise<PlanRulesOut> {
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
        deleteOneApiGroupsMealplansRulesItemIdDelete(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<PlanRulesOut> {
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
        getAllApiGroupsMealplansRulesGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<PlanRulesPagination> {
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
        getOneApiGroupsMealplansRulesItemIdGet(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<PlanRulesOut> {
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
        updateOneApiGroupsMealplansRulesItemIdPut(itemId: string, planRulesCreate: PlanRulesCreate, acceptLanguage?: string, options?: any): AxiosPromise<PlanRulesOut> {
            return localVarFp.updateOneApiGroupsMealplansRulesItemIdPut(itemId, planRulesCreate, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GroupsMealplanRulesApi - object-oriented interface
 * @export
 * @class GroupsMealplanRulesApi
 * @extends {BaseAPI}
 */
export class GroupsMealplanRulesApi extends BaseAPI {
    /**
     *
     * @summary Create One
     * @param {PlanRulesCreate} planRulesCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplanRulesApi
     */
    public createOneApiGroupsMealplansRulesPost(planRulesCreate: PlanRulesCreate, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsMealplanRulesApiFp(this.configuration).createOneApiGroupsMealplansRulesPost(planRulesCreate, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public deleteOneApiGroupsMealplansRulesItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsMealplanRulesApiFp(this.configuration).deleteOneApiGroupsMealplansRulesItemIdDelete(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getAllApiGroupsMealplansRulesGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsMealplanRulesApiFp(this.configuration).getAllApiGroupsMealplansRulesGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getOneApiGroupsMealplansRulesItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsMealplanRulesApiFp(this.configuration).getOneApiGroupsMealplansRulesItemIdGet(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public updateOneApiGroupsMealplansRulesItemIdPut(itemId: string, planRulesCreate: PlanRulesCreate, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsMealplanRulesApiFp(this.configuration).updateOneApiGroupsMealplansRulesItemIdPut(itemId, planRulesCreate, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * GroupsMealplansApi - axios parameter creator
 * @export
 */
export const GroupsMealplansApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Create One
         * @param {CreatePlanEntry} createPlanEntry
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiGroupsMealplansPost: async (createPlanEntry: CreatePlanEntry, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createPlanEntry' is not null or undefined
            assertParamExists('createOneApiGroupsMealplansPost', 'createPlanEntry', createPlanEntry)
            const localVarPath = `/api/groups/mealplans`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createPlanEntry, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        createRandomMealApiGroupsMealplansRandomPost: async (createRandomEntry: CreateRandomEntry, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createRandomEntry' is not null or undefined
            assertParamExists('createRandomMealApiGroupsMealplansRandomPost', 'createRandomEntry', createRandomEntry)
            const localVarPath = `/api/groups/mealplans/random`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createRandomEntry, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        deleteOneApiGroupsMealplansItemIdDelete: async (itemId: number, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('deleteOneApiGroupsMealplansItemIdDelete', 'itemId', itemId)
            const localVarPath = `/api/groups/mealplans/{item_id}`
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
        getAllApiGroupsMealplansGet: async (startDate?: string, endDate?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/groups/mealplans`;
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

            if (startDate !== undefined) {
                localVarQueryParameter['start_date'] = (startDate as any instanceof Date) ?
                    (startDate as any).toISOString().substr(0,10) :
                    startDate;
            }

            if (endDate !== undefined) {
                localVarQueryParameter['end_date'] = (endDate as any instanceof Date) ?
                    (endDate as any).toISOString().substr(0,10) :
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
         * @param {number} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiGroupsMealplansItemIdGet: async (itemId: number, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getOneApiGroupsMealplansItemIdGet', 'itemId', itemId)
            const localVarPath = `/api/groups/mealplans/{item_id}`
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
         * @summary Get Todays Meals
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTodaysMealsApiGroupsMealplansTodayGet: async (acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/groups/mealplans/today`;
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
         * @param {number} itemId
         * @param {UpdatePlanEntry} updatePlanEntry
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiGroupsMealplansItemIdPut: async (itemId: number, updatePlanEntry: UpdatePlanEntry, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('updateOneApiGroupsMealplansItemIdPut', 'itemId', itemId)
            // verify required parameter 'updatePlanEntry' is not null or undefined
            assertParamExists('updateOneApiGroupsMealplansItemIdPut', 'updatePlanEntry', updatePlanEntry)
            const localVarPath = `/api/groups/mealplans/{item_id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(updatePlanEntry, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GroupsMealplansApi - functional programming interface
 * @export
 */
export const GroupsMealplansApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GroupsMealplansApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Create One
         * @param {CreatePlanEntry} createPlanEntry
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiGroupsMealplansPost(createPlanEntry: CreatePlanEntry, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadPlanEntry>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiGroupsMealplansPost(createPlanEntry, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * create_random_meal is a route that provides the randomized functionality for mealplaners. It operates by following the rules setout in the Groups mealplan settings. If not settings are set, it will default return any random meal.  Refer to the mealplan settings routes for more information on how rules can be applied to the random meal selector.
         * @summary Create Random Meal
         * @param {CreateRandomEntry} createRandomEntry
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createRandomMealApiGroupsMealplansRandomPost(createRandomEntry: CreateRandomEntry, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadPlanEntry>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRandomMealApiGroupsMealplansRandomPost(createRandomEntry, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Delete One
         * @param {number} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteOneApiGroupsMealplansItemIdDelete(itemId: number, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadPlanEntry>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiGroupsMealplansItemIdDelete(itemId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async getAllApiGroupsMealplansGet(startDate?: string, endDate?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlanEntryPagination>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiGroupsMealplansGet(startDate, endDate, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get One
         * @param {number} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOneApiGroupsMealplansItemIdGet(itemId: number, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadPlanEntry>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiGroupsMealplansItemIdGet(itemId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get Todays Meals
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTodaysMealsApiGroupsMealplansTodayGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTodaysMealsApiGroupsMealplansTodayGet(acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async updateOneApiGroupsMealplansItemIdPut(itemId: number, updatePlanEntry: UpdatePlanEntry, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadPlanEntry>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiGroupsMealplansItemIdPut(itemId, updatePlanEntry, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GroupsMealplansApi - factory interface
 * @export
 */
export const GroupsMealplansApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GroupsMealplansApiFp(configuration)
    return {
        /**
         *
         * @summary Create One
         * @param {CreatePlanEntry} createPlanEntry
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiGroupsMealplansPost(createPlanEntry: CreatePlanEntry, acceptLanguage?: string, options?: any): AxiosPromise<ReadPlanEntry> {
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
        createRandomMealApiGroupsMealplansRandomPost(createRandomEntry: CreateRandomEntry, acceptLanguage?: string, options?: any): AxiosPromise<ReadPlanEntry> {
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
        deleteOneApiGroupsMealplansItemIdDelete(itemId: number, acceptLanguage?: string, options?: any): AxiosPromise<ReadPlanEntry> {
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
        getAllApiGroupsMealplansGet(startDate?: string, endDate?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<PlanEntryPagination> {
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
        getOneApiGroupsMealplansItemIdGet(itemId: number, acceptLanguage?: string, options?: any): AxiosPromise<ReadPlanEntry> {
            return localVarFp.getOneApiGroupsMealplansItemIdGet(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get Todays Meals
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTodaysMealsApiGroupsMealplansTodayGet(acceptLanguage?: string, options?: any): AxiosPromise<any> {
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
        updateOneApiGroupsMealplansItemIdPut(itemId: number, updatePlanEntry: UpdatePlanEntry, acceptLanguage?: string, options?: any): AxiosPromise<ReadPlanEntry> {
            return localVarFp.updateOneApiGroupsMealplansItemIdPut(itemId, updatePlanEntry, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GroupsMealplansApi - object-oriented interface
 * @export
 * @class GroupsMealplansApi
 * @extends {BaseAPI}
 */
export class GroupsMealplansApi extends BaseAPI {
    /**
     *
     * @summary Create One
     * @param {CreatePlanEntry} createPlanEntry
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplansApi
     */
    public createOneApiGroupsMealplansPost(createPlanEntry: CreatePlanEntry, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsMealplansApiFp(this.configuration).createOneApiGroupsMealplansPost(createPlanEntry, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public createRandomMealApiGroupsMealplansRandomPost(createRandomEntry: CreateRandomEntry, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsMealplansApiFp(this.configuration).createRandomMealApiGroupsMealplansRandomPost(createRandomEntry, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public deleteOneApiGroupsMealplansItemIdDelete(itemId: number, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsMealplansApiFp(this.configuration).deleteOneApiGroupsMealplansItemIdDelete(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getAllApiGroupsMealplansGet(startDate?: string, endDate?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsMealplansApiFp(this.configuration).getAllApiGroupsMealplansGet(startDate, endDate, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getOneApiGroupsMealplansItemIdGet(itemId: number, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsMealplansApiFp(this.configuration).getOneApiGroupsMealplansItemIdGet(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Get Todays Meals
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplansApi
     */
    public getTodaysMealsApiGroupsMealplansTodayGet(acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsMealplansApiFp(this.configuration).getTodaysMealsApiGroupsMealplansTodayGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public updateOneApiGroupsMealplansItemIdPut(itemId: number, updatePlanEntry: UpdatePlanEntry, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsMealplansApiFp(this.configuration).updateOneApiGroupsMealplansItemIdPut(itemId, updatePlanEntry, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * GroupsMigrationsApi - axios parameter creator
 * @export
 */
export const GroupsMigrationsApiAxiosParamCreator = function (configuration?: Configuration) {
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
        startDataMigrationApiGroupsMigrationsPost: async (migrationType: SupportedMigrations, archive: File, acceptLanguage?: string, addMigrationTag?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'migrationType' is not null or undefined
            assertParamExists('startDataMigrationApiGroupsMigrationsPost', 'migrationType', migrationType)
            // verify required parameter 'archive' is not null or undefined
            assertParamExists('startDataMigrationApiGroupsMigrationsPost', 'archive', archive)
            const localVarPath = `/api/groups/migrations`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }


            if (addMigrationTag !== undefined) {
                localVarFormParams.append('add_migration_tag', addMigrationTag as any);
            }

            if (migrationType !== undefined) {
                localVarFormParams.append('migration_type', new Blob([JSON.stringify(migrationType)], { type: "application/json", }));
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
    }
};

/**
 * GroupsMigrationsApi - functional programming interface
 * @export
 */
export const GroupsMigrationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GroupsMigrationsApiAxiosParamCreator(configuration)
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
        async startDataMigrationApiGroupsMigrationsPost(migrationType: SupportedMigrations, archive: File, acceptLanguage?: string, addMigrationTag?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReportSummary>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.startDataMigrationApiGroupsMigrationsPost(migrationType, archive, acceptLanguage, addMigrationTag, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GroupsMigrationsApi - factory interface
 * @export
 */
export const GroupsMigrationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GroupsMigrationsApiFp(configuration)
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
        startDataMigrationApiGroupsMigrationsPost(migrationType: SupportedMigrations, archive: File, acceptLanguage?: string, addMigrationTag?: boolean, options?: any): AxiosPromise<ReportSummary> {
            return localVarFp.startDataMigrationApiGroupsMigrationsPost(migrationType, archive, acceptLanguage, addMigrationTag, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GroupsMigrationsApi - object-oriented interface
 * @export
 * @class GroupsMigrationsApi
 * @extends {BaseAPI}
 */
export class GroupsMigrationsApi extends BaseAPI {
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
    public startDataMigrationApiGroupsMigrationsPost(migrationType: SupportedMigrations, archive: File, acceptLanguage?: string, addMigrationTag?: boolean, options?: AxiosRequestConfig) {
        return GroupsMigrationsApiFp(this.configuration).startDataMigrationApiGroupsMigrationsPost(migrationType, archive, acceptLanguage, addMigrationTag, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * GroupsMultiPurposeLabelsApi - axios parameter creator
 * @export
 */
export const GroupsMultiPurposeLabelsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Create One
         * @param {MultiPurposeLabelCreate} multiPurposeLabelCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiGroupsLabelsPost: async (multiPurposeLabelCreate: MultiPurposeLabelCreate, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'multiPurposeLabelCreate' is not null or undefined
            assertParamExists('createOneApiGroupsLabelsPost', 'multiPurposeLabelCreate', multiPurposeLabelCreate)
            const localVarPath = `/api/groups/labels`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(multiPurposeLabelCreate, localVarRequestOptions, configuration)

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
        deleteOneApiGroupsLabelsItemIdDelete: async (itemId: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('deleteOneApiGroupsLabelsItemIdDelete', 'itemId', itemId)
            const localVarPath = `/api/groups/labels/{item_id}`
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
        getAllApiGroupsLabelsGet: async (page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/groups/labels`;
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
        getOneApiGroupsLabelsItemIdGet: async (itemId: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getOneApiGroupsLabelsItemIdGet', 'itemId', itemId)
            const localVarPath = `/api/groups/labels/{item_id}`
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
         * @param {MultiPurposeLabelUpdate} multiPurposeLabelUpdate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiGroupsLabelsItemIdPut: async (itemId: string, multiPurposeLabelUpdate: MultiPurposeLabelUpdate, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('updateOneApiGroupsLabelsItemIdPut', 'itemId', itemId)
            // verify required parameter 'multiPurposeLabelUpdate' is not null or undefined
            assertParamExists('updateOneApiGroupsLabelsItemIdPut', 'multiPurposeLabelUpdate', multiPurposeLabelUpdate)
            const localVarPath = `/api/groups/labels/{item_id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(multiPurposeLabelUpdate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GroupsMultiPurposeLabelsApi - functional programming interface
 * @export
 */
export const GroupsMultiPurposeLabelsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GroupsMultiPurposeLabelsApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Create One
         * @param {MultiPurposeLabelCreate} multiPurposeLabelCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiGroupsLabelsPost(multiPurposeLabelCreate: MultiPurposeLabelCreate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MultiPurposeLabelOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiGroupsLabelsPost(multiPurposeLabelCreate, acceptLanguage, options);
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
        async deleteOneApiGroupsLabelsItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MultiPurposeLabelOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiGroupsLabelsItemIdDelete(itemId, acceptLanguage, options);
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
        async getAllApiGroupsLabelsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MultiPurposeLabelPagination>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiGroupsLabelsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
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
        async getOneApiGroupsLabelsItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MultiPurposeLabelOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiGroupsLabelsItemIdGet(itemId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async updateOneApiGroupsLabelsItemIdPut(itemId: string, multiPurposeLabelUpdate: MultiPurposeLabelUpdate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MultiPurposeLabelOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiGroupsLabelsItemIdPut(itemId, multiPurposeLabelUpdate, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GroupsMultiPurposeLabelsApi - factory interface
 * @export
 */
export const GroupsMultiPurposeLabelsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GroupsMultiPurposeLabelsApiFp(configuration)
    return {
        /**
         *
         * @summary Create One
         * @param {MultiPurposeLabelCreate} multiPurposeLabelCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiGroupsLabelsPost(multiPurposeLabelCreate: MultiPurposeLabelCreate, acceptLanguage?: string, options?: any): AxiosPromise<MultiPurposeLabelOut> {
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
        deleteOneApiGroupsLabelsItemIdDelete(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<MultiPurposeLabelOut> {
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
        getAllApiGroupsLabelsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<MultiPurposeLabelPagination> {
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
        getOneApiGroupsLabelsItemIdGet(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<MultiPurposeLabelOut> {
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
        updateOneApiGroupsLabelsItemIdPut(itemId: string, multiPurposeLabelUpdate: MultiPurposeLabelUpdate, acceptLanguage?: string, options?: any): AxiosPromise<MultiPurposeLabelOut> {
            return localVarFp.updateOneApiGroupsLabelsItemIdPut(itemId, multiPurposeLabelUpdate, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GroupsMultiPurposeLabelsApi - object-oriented interface
 * @export
 * @class GroupsMultiPurposeLabelsApi
 * @extends {BaseAPI}
 */
export class GroupsMultiPurposeLabelsApi extends BaseAPI {
    /**
     *
     * @summary Create One
     * @param {MultiPurposeLabelCreate} multiPurposeLabelCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMultiPurposeLabelsApi
     */
    public createOneApiGroupsLabelsPost(multiPurposeLabelCreate: MultiPurposeLabelCreate, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsMultiPurposeLabelsApiFp(this.configuration).createOneApiGroupsLabelsPost(multiPurposeLabelCreate, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public deleteOneApiGroupsLabelsItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsMultiPurposeLabelsApiFp(this.configuration).deleteOneApiGroupsLabelsItemIdDelete(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getAllApiGroupsLabelsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsMultiPurposeLabelsApiFp(this.configuration).getAllApiGroupsLabelsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getOneApiGroupsLabelsItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsMultiPurposeLabelsApiFp(this.configuration).getOneApiGroupsLabelsItemIdGet(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public updateOneApiGroupsLabelsItemIdPut(itemId: string, multiPurposeLabelUpdate: MultiPurposeLabelUpdate, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsMultiPurposeLabelsApiFp(this.configuration).updateOneApiGroupsLabelsItemIdPut(itemId, multiPurposeLabelUpdate, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * GroupsReportsApi - axios parameter creator
 * @export
 */
export const GroupsReportsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiGroupsReportsItemIdDelete: async (itemId: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('deleteOneApiGroupsReportsItemIdDelete', 'itemId', itemId)
            const localVarPath = `/api/groups/reports/{item_id}`
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
         * @param {ReportCategory} [reportType]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllApiGroupsReportsGet: async (reportType?: ReportCategory, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/groups/reports`;
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

            if (reportType !== undefined) {
                localVarQueryParameter['report_type'] = reportType;
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
        getOneApiGroupsReportsItemIdGet: async (itemId: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getOneApiGroupsReportsItemIdGet', 'itemId', itemId)
            const localVarPath = `/api/groups/reports/{item_id}`
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
 * GroupsReportsApi - functional programming interface
 * @export
 */
export const GroupsReportsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GroupsReportsApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteOneApiGroupsReportsItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiGroupsReportsItemIdDelete(itemId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get All
         * @param {ReportCategory} [reportType]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllApiGroupsReportsGet(reportType?: ReportCategory, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ReportSummary>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiGroupsReportsGet(reportType, acceptLanguage, options);
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
        async getOneApiGroupsReportsItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReportOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiGroupsReportsItemIdGet(itemId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GroupsReportsApi - factory interface
 * @export
 */
export const GroupsReportsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GroupsReportsApiFp(configuration)
    return {
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiGroupsReportsItemIdDelete(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<any> {
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
        getAllApiGroupsReportsGet(reportType?: ReportCategory, acceptLanguage?: string, options?: any): AxiosPromise<Array<ReportSummary>> {
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
        getOneApiGroupsReportsItemIdGet(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<ReportOut> {
            return localVarFp.getOneApiGroupsReportsItemIdGet(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GroupsReportsApi - object-oriented interface
 * @export
 * @class GroupsReportsApi
 * @extends {BaseAPI}
 */
export class GroupsReportsApi extends BaseAPI {
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsReportsApi
     */
    public deleteOneApiGroupsReportsItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsReportsApiFp(this.configuration).deleteOneApiGroupsReportsItemIdDelete(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getAllApiGroupsReportsGet(reportType?: ReportCategory, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsReportsApiFp(this.configuration).getAllApiGroupsReportsGet(reportType, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getOneApiGroupsReportsItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsReportsApiFp(this.configuration).getOneApiGroupsReportsItemIdGet(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * GroupsSeedersApi - axios parameter creator
 * @export
 */
export const GroupsSeedersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Seed Foods
         * @param {SeederConfig} seederConfig
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        seedFoodsApiGroupsSeedersFoodsPost: async (seederConfig: SeederConfig, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'seederConfig' is not null or undefined
            assertParamExists('seedFoodsApiGroupsSeedersFoodsPost', 'seederConfig', seederConfig)
            const localVarPath = `/api/groups/seeders/foods`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(seederConfig, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        seedLabelsApiGroupsSeedersLabelsPost: async (seederConfig: SeederConfig, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'seederConfig' is not null or undefined
            assertParamExists('seedLabelsApiGroupsSeedersLabelsPost', 'seederConfig', seederConfig)
            const localVarPath = `/api/groups/seeders/labels`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(seederConfig, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        seedUnitsApiGroupsSeedersUnitsPost: async (seederConfig: SeederConfig, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'seederConfig' is not null or undefined
            assertParamExists('seedUnitsApiGroupsSeedersUnitsPost', 'seederConfig', seederConfig)
            const localVarPath = `/api/groups/seeders/units`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(seederConfig, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GroupsSeedersApi - functional programming interface
 * @export
 */
export const GroupsSeedersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GroupsSeedersApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Seed Foods
         * @param {SeederConfig} seederConfig
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async seedFoodsApiGroupsSeedersFoodsPost(seederConfig: SeederConfig, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.seedFoodsApiGroupsSeedersFoodsPost(seederConfig, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Seed Labels
         * @param {SeederConfig} seederConfig
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async seedLabelsApiGroupsSeedersLabelsPost(seederConfig: SeederConfig, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.seedLabelsApiGroupsSeedersLabelsPost(seederConfig, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Seed Units
         * @param {SeederConfig} seederConfig
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async seedUnitsApiGroupsSeedersUnitsPost(seederConfig: SeederConfig, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.seedUnitsApiGroupsSeedersUnitsPost(seederConfig, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GroupsSeedersApi - factory interface
 * @export
 */
export const GroupsSeedersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GroupsSeedersApiFp(configuration)
    return {
        /**
         *
         * @summary Seed Foods
         * @param {SeederConfig} seederConfig
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        seedFoodsApiGroupsSeedersFoodsPost(seederConfig: SeederConfig, acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse> {
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
        seedLabelsApiGroupsSeedersLabelsPost(seederConfig: SeederConfig, acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse> {
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
        seedUnitsApiGroupsSeedersUnitsPost(seederConfig: SeederConfig, acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse> {
            return localVarFp.seedUnitsApiGroupsSeedersUnitsPost(seederConfig, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GroupsSeedersApi - object-oriented interface
 * @export
 * @class GroupsSeedersApi
 * @extends {BaseAPI}
 */
export class GroupsSeedersApi extends BaseAPI {
    /**
     *
     * @summary Seed Foods
     * @param {SeederConfig} seederConfig
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsSeedersApi
     */
    public seedFoodsApiGroupsSeedersFoodsPost(seederConfig: SeederConfig, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsSeedersApiFp(this.configuration).seedFoodsApiGroupsSeedersFoodsPost(seederConfig, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public seedLabelsApiGroupsSeedersLabelsPost(seederConfig: SeederConfig, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsSeedersApiFp(this.configuration).seedLabelsApiGroupsSeedersLabelsPost(seederConfig, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public seedUnitsApiGroupsSeedersUnitsPost(seederConfig: SeederConfig, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsSeedersApiFp(this.configuration).seedUnitsApiGroupsSeedersUnitsPost(seederConfig, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * GroupsSelfServiceApi - axios parameter creator
 * @export
 */
export const GroupsSelfServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the Group of user lists
         * @summary Get Group Members
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroupMembersApiGroupsMembersGet: async (acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/groups/members`;
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
         * @summary Get Group Preferences
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroupPreferencesApiGroupsPreferencesGet: async (acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/groups/preferences`;
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
         * Returns the Group Data for the Current User
         * @summary Get Logged In User Group
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLoggedInUserGroupApiGroupsSelfGet: async (acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/groups/self`;
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
         * @summary Get Statistics
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStatisticsApiGroupsStatisticsGet: async (acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/groups/statistics`;
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
         * @summary Get Storage
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStorageApiGroupsStorageGet: async (acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/groups/storage`;
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
         * @summary Set Member Permissions
         * @param {SetPermissions} setPermissions
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setMemberPermissionsApiGroupsPermissionsPut: async (setPermissions: SetPermissions, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'setPermissions' is not null or undefined
            assertParamExists('setMemberPermissionsApiGroupsPermissionsPut', 'setPermissions', setPermissions)
            const localVarPath = `/api/groups/permissions`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(setPermissions, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        updateGroupPreferencesApiGroupsPreferencesPut: async (updateGroupPreferences: UpdateGroupPreferences, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'updateGroupPreferences' is not null or undefined
            assertParamExists('updateGroupPreferencesApiGroupsPreferencesPut', 'updateGroupPreferences', updateGroupPreferences)
            const localVarPath = `/api/groups/preferences`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateGroupPreferences, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GroupsSelfServiceApi - functional programming interface
 * @export
 */
export const GroupsSelfServiceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GroupsSelfServiceApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the Group of user lists
         * @summary Get Group Members
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGroupMembersApiGroupsMembersGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<UserOut>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGroupMembersApiGroupsMembersGet(acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get Group Preferences
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGroupPreferencesApiGroupsPreferencesGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadGroupPreferences>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGroupPreferencesApiGroupsPreferencesGet(acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the Group Data for the Current User
         * @summary Get Logged In User Group
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLoggedInUserGroupApiGroupsSelfGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupInDB>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLoggedInUserGroupApiGroupsSelfGet(acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get Statistics
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStatisticsApiGroupsStatisticsGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupStatistics>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStatisticsApiGroupsStatisticsGet(acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get Storage
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStorageApiGroupsStorageGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupStorage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStorageApiGroupsStorageGet(acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Set Member Permissions
         * @param {SetPermissions} setPermissions
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setMemberPermissionsApiGroupsPermissionsPut(setPermissions: SetPermissions, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setMemberPermissionsApiGroupsPermissionsPut(setPermissions, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Update Group Preferences
         * @param {UpdateGroupPreferences} updateGroupPreferences
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateGroupPreferencesApiGroupsPreferencesPut(updateGroupPreferences: UpdateGroupPreferences, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadGroupPreferences>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateGroupPreferencesApiGroupsPreferencesPut(updateGroupPreferences, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GroupsSelfServiceApi - factory interface
 * @export
 */
export const GroupsSelfServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GroupsSelfServiceApiFp(configuration)
    return {
        /**
         * Returns the Group of user lists
         * @summary Get Group Members
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroupMembersApiGroupsMembersGet(acceptLanguage?: string, options?: any): AxiosPromise<Array<UserOut>> {
            return localVarFp.getGroupMembersApiGroupsMembersGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get Group Preferences
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroupPreferencesApiGroupsPreferencesGet(acceptLanguage?: string, options?: any): AxiosPromise<ReadGroupPreferences> {
            return localVarFp.getGroupPreferencesApiGroupsPreferencesGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the Group Data for the Current User
         * @summary Get Logged In User Group
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLoggedInUserGroupApiGroupsSelfGet(acceptLanguage?: string, options?: any): AxiosPromise<GroupInDB> {
            return localVarFp.getLoggedInUserGroupApiGroupsSelfGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get Statistics
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStatisticsApiGroupsStatisticsGet(acceptLanguage?: string, options?: any): AxiosPromise<GroupStatistics> {
            return localVarFp.getStatisticsApiGroupsStatisticsGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get Storage
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStorageApiGroupsStorageGet(acceptLanguage?: string, options?: any): AxiosPromise<GroupStorage> {
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
        setMemberPermissionsApiGroupsPermissionsPut(setPermissions: SetPermissions, acceptLanguage?: string, options?: any): AxiosPromise<UserOut> {
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
        updateGroupPreferencesApiGroupsPreferencesPut(updateGroupPreferences: UpdateGroupPreferences, acceptLanguage?: string, options?: any): AxiosPromise<ReadGroupPreferences> {
            return localVarFp.updateGroupPreferencesApiGroupsPreferencesPut(updateGroupPreferences, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GroupsSelfServiceApi - object-oriented interface
 * @export
 * @class GroupsSelfServiceApi
 * @extends {BaseAPI}
 */
export class GroupsSelfServiceApi extends BaseAPI {
    /**
     * Returns the Group of user lists
     * @summary Get Group Members
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsSelfServiceApi
     */
    public getGroupMembersApiGroupsMembersGet(acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsSelfServiceApiFp(this.configuration).getGroupMembersApiGroupsMembersGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Get Group Preferences
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsSelfServiceApi
     */
    public getGroupPreferencesApiGroupsPreferencesGet(acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsSelfServiceApiFp(this.configuration).getGroupPreferencesApiGroupsPreferencesGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the Group Data for the Current User
     * @summary Get Logged In User Group
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsSelfServiceApi
     */
    public getLoggedInUserGroupApiGroupsSelfGet(acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsSelfServiceApiFp(this.configuration).getLoggedInUserGroupApiGroupsSelfGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Get Statistics
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsSelfServiceApi
     */
    public getStatisticsApiGroupsStatisticsGet(acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsSelfServiceApiFp(this.configuration).getStatisticsApiGroupsStatisticsGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Get Storage
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsSelfServiceApi
     */
    public getStorageApiGroupsStorageGet(acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsSelfServiceApiFp(this.configuration).getStorageApiGroupsStorageGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public setMemberPermissionsApiGroupsPermissionsPut(setPermissions: SetPermissions, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsSelfServiceApiFp(this.configuration).setMemberPermissionsApiGroupsPermissionsPut(setPermissions, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public updateGroupPreferencesApiGroupsPreferencesPut(updateGroupPreferences: UpdateGroupPreferences, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsSelfServiceApiFp(this.configuration).updateGroupPreferencesApiGroupsPreferencesPut(updateGroupPreferences, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * GroupsShoppingListItemsApi - axios parameter creator
 * @export
 */
export const GroupsShoppingListItemsApiAxiosParamCreator = function (configuration?: Configuration) {
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
        createOneApiGroupsShoppingItemsPost: async (shoppingListItemCreate: ShoppingListItemCreate, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'shoppingListItemCreate' is not null or undefined
            assertParamExists('createOneApiGroupsShoppingItemsPost', 'shoppingListItemCreate', shoppingListItemCreate)
            const localVarPath = `/api/groups/shopping/items`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(shoppingListItemCreate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        deleteManyApiGroupsShoppingItemsDelete: async (ids?: Array<string>, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/groups/shopping/items`;
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

            if (ids) {
                localVarQueryParameter['ids'] = ids;
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
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiGroupsShoppingItemsItemIdDelete: async (itemId: string, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('deleteOneApiGroupsShoppingItemsItemIdDelete', 'itemId', itemId)
            const localVarPath = `/api/groups/shopping/items/{item_id}`
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
         * @summary Get One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiGroupsShoppingItemsItemIdGet: async (itemId: string, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getOneApiGroupsShoppingItemsItemIdGet', 'itemId', itemId)
            const localVarPath = `/api/groups/shopping/items/{item_id}`
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
         * @summary Update Many
         * @param {Array<ShoppingListItemUpdate>} shoppingListItemUpdate
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateManyApiGroupsShoppingItemsPut: async (shoppingListItemUpdate: Array<ShoppingListItemUpdate>, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'shoppingListItemUpdate' is not null or undefined
            assertParamExists('updateManyApiGroupsShoppingItemsPut', 'shoppingListItemUpdate', shoppingListItemUpdate)
            const localVarPath = `/api/groups/shopping/items`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(shoppingListItemUpdate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        updateOneApiGroupsShoppingItemsItemIdPut: async (itemId: string, shoppingListItemUpdate: ShoppingListItemUpdate, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('updateOneApiGroupsShoppingItemsItemIdPut', 'itemId', itemId)
            // verify required parameter 'shoppingListItemUpdate' is not null or undefined
            assertParamExists('updateOneApiGroupsShoppingItemsItemIdPut', 'shoppingListItemUpdate', shoppingListItemUpdate)
            const localVarPath = `/api/groups/shopping/items/{item_id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(shoppingListItemUpdate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GroupsShoppingListItemsApi - functional programming interface
 * @export
 */
export const GroupsShoppingListItemsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GroupsShoppingListItemsApiAxiosParamCreator(configuration)
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
        async createOneApiGroupsShoppingItemsPost(shoppingListItemCreate: ShoppingListItemCreate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShoppingListItemOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiGroupsShoppingItemsPost(shoppingListItemCreate, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async deleteManyApiGroupsShoppingItemsDelete(ids?: Array<string>, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteManyApiGroupsShoppingItemsDelete(ids, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async deleteOneApiGroupsShoppingItemsItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShoppingListItemOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiGroupsShoppingItemsItemIdDelete(itemId, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async getOneApiGroupsShoppingItemsItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShoppingListItemOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiGroupsShoppingItemsItemIdGet(itemId, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async updateManyApiGroupsShoppingItemsPut(shoppingListItemUpdate: Array<ShoppingListItemUpdate>, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ShoppingListItemOut>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateManyApiGroupsShoppingItemsPut(shoppingListItemUpdate, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async updateOneApiGroupsShoppingItemsItemIdPut(itemId: string, shoppingListItemUpdate: ShoppingListItemUpdate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShoppingListItemOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiGroupsShoppingItemsItemIdPut(itemId, shoppingListItemUpdate, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GroupsShoppingListItemsApi - factory interface
 * @export
 */
export const GroupsShoppingListItemsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GroupsShoppingListItemsApiFp(configuration)
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
        createOneApiGroupsShoppingItemsPost(shoppingListItemCreate: ShoppingListItemCreate, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<ShoppingListItemOut> {
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
        deleteManyApiGroupsShoppingItemsDelete(ids?: Array<string>, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse> {
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
        deleteOneApiGroupsShoppingItemsItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<ShoppingListItemOut> {
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
        getOneApiGroupsShoppingItemsItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<ShoppingListItemOut> {
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
        updateManyApiGroupsShoppingItemsPut(shoppingListItemUpdate: Array<ShoppingListItemUpdate>, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<Array<ShoppingListItemOut>> {
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
        updateOneApiGroupsShoppingItemsItemIdPut(itemId: string, shoppingListItemUpdate: ShoppingListItemUpdate, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<ShoppingListItemOut> {
            return localVarFp.updateOneApiGroupsShoppingItemsItemIdPut(itemId, shoppingListItemUpdate, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GroupsShoppingListItemsApi - object-oriented interface
 * @export
 * @class GroupsShoppingListItemsApi
 * @extends {BaseAPI}
 */
export class GroupsShoppingListItemsApi extends BaseAPI {
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
    public createOneApiGroupsShoppingItemsPost(shoppingListItemCreate: ShoppingListItemCreate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsShoppingListItemsApiFp(this.configuration).createOneApiGroupsShoppingItemsPost(shoppingListItemCreate, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public deleteManyApiGroupsShoppingItemsDelete(ids?: Array<string>, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsShoppingListItemsApiFp(this.configuration).deleteManyApiGroupsShoppingItemsDelete(ids, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public deleteOneApiGroupsShoppingItemsItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsShoppingListItemsApiFp(this.configuration).deleteOneApiGroupsShoppingItemsItemIdDelete(itemId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getOneApiGroupsShoppingItemsItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsShoppingListItemsApiFp(this.configuration).getOneApiGroupsShoppingItemsItemIdGet(itemId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public updateManyApiGroupsShoppingItemsPut(shoppingListItemUpdate: Array<ShoppingListItemUpdate>, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsShoppingListItemsApiFp(this.configuration).updateManyApiGroupsShoppingItemsPut(shoppingListItemUpdate, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public updateOneApiGroupsShoppingItemsItemIdPut(itemId: string, shoppingListItemUpdate: ShoppingListItemUpdate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsShoppingListItemsApiFp(this.configuration).updateOneApiGroupsShoppingItemsItemIdPut(itemId, shoppingListItemUpdate, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * GroupsShoppingListsApi - axios parameter creator
 * @export
 */
export const GroupsShoppingListsApiAxiosParamCreator = function (configuration?: Configuration) {
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
        addRecipeIngredientsToListApiGroupsShoppingListsItemIdRecipeRecipeIdPost: async (itemId: string, recipeId: string, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('addRecipeIngredientsToListApiGroupsShoppingListsItemIdRecipeRecipeIdPost', 'itemId', itemId)
            // verify required parameter 'recipeId' is not null or undefined
            assertParamExists('addRecipeIngredientsToListApiGroupsShoppingListsItemIdRecipeRecipeIdPost', 'recipeId', recipeId)
            const localVarPath = `/api/groups/shopping/lists/{item_id}/recipe/{recipe_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)))
                .replace(`{${"recipe_id"}}`, encodeURIComponent(String(recipeId)));
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
         * @summary Create One
         * @param {ShoppingListCreate} shoppingListCreate
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiGroupsShoppingListsPost: async (shoppingListCreate: ShoppingListCreate, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'shoppingListCreate' is not null or undefined
            assertParamExists('createOneApiGroupsShoppingListsPost', 'shoppingListCreate', shoppingListCreate)
            const localVarPath = `/api/groups/shopping/lists`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(shoppingListCreate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        deleteOneApiGroupsShoppingListsItemIdDelete: async (itemId: string, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('deleteOneApiGroupsShoppingListsItemIdDelete', 'itemId', itemId)
            const localVarPath = `/api/groups/shopping/lists/{item_id}`
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
        getAllApiGroupsShoppingListsGet: async (groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/groups/shopping/lists`;
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
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiGroupsShoppingListsItemIdGet: async (itemId: string, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getOneApiGroupsShoppingListsItemIdGet', 'itemId', itemId)
            const localVarPath = `/api/groups/shopping/lists/{item_id}`
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
         * @summary Remove Recipe Ingredients From List
         * @param {string} itemId
         * @param {string} recipeId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeRecipeIngredientsFromListApiGroupsShoppingListsItemIdRecipeRecipeIdDelete: async (itemId: string, recipeId: string, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('removeRecipeIngredientsFromListApiGroupsShoppingListsItemIdRecipeRecipeIdDelete', 'itemId', itemId)
            // verify required parameter 'recipeId' is not null or undefined
            assertParamExists('removeRecipeIngredientsFromListApiGroupsShoppingListsItemIdRecipeRecipeIdDelete', 'recipeId', recipeId)
            const localVarPath = `/api/groups/shopping/lists/{item_id}/recipe/{recipe_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)))
                .replace(`{${"recipe_id"}}`, encodeURIComponent(String(recipeId)));
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
         * @summary Update One
         * @param {string} itemId
         * @param {ShoppingListUpdate} shoppingListUpdate
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiGroupsShoppingListsItemIdPut: async (itemId: string, shoppingListUpdate: ShoppingListUpdate, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('updateOneApiGroupsShoppingListsItemIdPut', 'itemId', itemId)
            // verify required parameter 'shoppingListUpdate' is not null or undefined
            assertParamExists('updateOneApiGroupsShoppingListsItemIdPut', 'shoppingListUpdate', shoppingListUpdate)
            const localVarPath = `/api/groups/shopping/lists/{item_id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(shoppingListUpdate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GroupsShoppingListsApi - functional programming interface
 * @export
 */
export const GroupsShoppingListsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GroupsShoppingListsApiAxiosParamCreator(configuration)
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
        async addRecipeIngredientsToListApiGroupsShoppingListsItemIdRecipeRecipeIdPost(itemId: string, recipeId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShoppingListOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addRecipeIngredientsToListApiGroupsShoppingListsItemIdRecipeRecipeIdPost(itemId, recipeId, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async createOneApiGroupsShoppingListsPost(shoppingListCreate: ShoppingListCreate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShoppingListOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiGroupsShoppingListsPost(shoppingListCreate, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async deleteOneApiGroupsShoppingListsItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShoppingListOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiGroupsShoppingListsItemIdDelete(itemId, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async getAllApiGroupsShoppingListsGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShoppingListPagination>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiGroupsShoppingListsGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async getOneApiGroupsShoppingListsItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShoppingListOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiGroupsShoppingListsItemIdGet(itemId, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async removeRecipeIngredientsFromListApiGroupsShoppingListsItemIdRecipeRecipeIdDelete(itemId: string, recipeId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShoppingListOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeRecipeIngredientsFromListApiGroupsShoppingListsItemIdRecipeRecipeIdDelete(itemId, recipeId, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async updateOneApiGroupsShoppingListsItemIdPut(itemId: string, shoppingListUpdate: ShoppingListUpdate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShoppingListOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiGroupsShoppingListsItemIdPut(itemId, shoppingListUpdate, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GroupsShoppingListsApi - factory interface
 * @export
 */
export const GroupsShoppingListsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GroupsShoppingListsApiFp(configuration)
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
        addRecipeIngredientsToListApiGroupsShoppingListsItemIdRecipeRecipeIdPost(itemId: string, recipeId: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<ShoppingListOut> {
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
        createOneApiGroupsShoppingListsPost(shoppingListCreate: ShoppingListCreate, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<ShoppingListOut> {
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
        deleteOneApiGroupsShoppingListsItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<ShoppingListOut> {
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
        getAllApiGroupsShoppingListsGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<ShoppingListPagination> {
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
        getOneApiGroupsShoppingListsItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<ShoppingListOut> {
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
        removeRecipeIngredientsFromListApiGroupsShoppingListsItemIdRecipeRecipeIdDelete(itemId: string, recipeId: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<ShoppingListOut> {
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
        updateOneApiGroupsShoppingListsItemIdPut(itemId: string, shoppingListUpdate: ShoppingListUpdate, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<ShoppingListOut> {
            return localVarFp.updateOneApiGroupsShoppingListsItemIdPut(itemId, shoppingListUpdate, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GroupsShoppingListsApi - object-oriented interface
 * @export
 * @class GroupsShoppingListsApi
 * @extends {BaseAPI}
 */
export class GroupsShoppingListsApi extends BaseAPI {
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
    public addRecipeIngredientsToListApiGroupsShoppingListsItemIdRecipeRecipeIdPost(itemId: string, recipeId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsShoppingListsApiFp(this.configuration).addRecipeIngredientsToListApiGroupsShoppingListsItemIdRecipeRecipeIdPost(itemId, recipeId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public createOneApiGroupsShoppingListsPost(shoppingListCreate: ShoppingListCreate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsShoppingListsApiFp(this.configuration).createOneApiGroupsShoppingListsPost(shoppingListCreate, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public deleteOneApiGroupsShoppingListsItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsShoppingListsApiFp(this.configuration).deleteOneApiGroupsShoppingListsItemIdDelete(itemId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getAllApiGroupsShoppingListsGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsShoppingListsApiFp(this.configuration).getAllApiGroupsShoppingListsGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getOneApiGroupsShoppingListsItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsShoppingListsApiFp(this.configuration).getOneApiGroupsShoppingListsItemIdGet(itemId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public removeRecipeIngredientsFromListApiGroupsShoppingListsItemIdRecipeRecipeIdDelete(itemId: string, recipeId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsShoppingListsApiFp(this.configuration).removeRecipeIngredientsFromListApiGroupsShoppingListsItemIdRecipeRecipeIdDelete(itemId, recipeId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public updateOneApiGroupsShoppingListsItemIdPut(itemId: string, shoppingListUpdate: ShoppingListUpdate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsShoppingListsApiFp(this.configuration).updateOneApiGroupsShoppingListsItemIdPut(itemId, shoppingListUpdate, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * GroupsWebhooksApi - axios parameter creator
 * @export
 */
export const GroupsWebhooksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Create One
         * @param {CreateWebhook} createWebhook
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiGroupsWebhooksPost: async (createWebhook: CreateWebhook, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createWebhook' is not null or undefined
            assertParamExists('createOneApiGroupsWebhooksPost', 'createWebhook', createWebhook)
            const localVarPath = `/api/groups/webhooks`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createWebhook, localVarRequestOptions, configuration)

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
        deleteOneApiGroupsWebhooksItemIdDelete: async (itemId: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('deleteOneApiGroupsWebhooksItemIdDelete', 'itemId', itemId)
            const localVarPath = `/api/groups/webhooks/{item_id}`
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
        getAllApiGroupsWebhooksGet: async (page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/groups/webhooks`;
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
        getOneApiGroupsWebhooksItemIdGet: async (itemId: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getOneApiGroupsWebhooksItemIdGet', 'itemId', itemId)
            const localVarPath = `/api/groups/webhooks/{item_id}`
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
         * Manually re-fires all previously scheduled webhooks for today
         * @summary Rerun Webhooks
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rerunWebhooksApiGroupsWebhooksRerunPost: async (acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/groups/webhooks/rerun`;
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
         * @param {CreateWebhook} createWebhook
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiGroupsWebhooksItemIdPut: async (itemId: string, createWebhook: CreateWebhook, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('updateOneApiGroupsWebhooksItemIdPut', 'itemId', itemId)
            // verify required parameter 'createWebhook' is not null or undefined
            assertParamExists('updateOneApiGroupsWebhooksItemIdPut', 'createWebhook', createWebhook)
            const localVarPath = `/api/groups/webhooks/{item_id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(createWebhook, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GroupsWebhooksApi - functional programming interface
 * @export
 */
export const GroupsWebhooksApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GroupsWebhooksApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Create One
         * @param {CreateWebhook} createWebhook
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiGroupsWebhooksPost(createWebhook: CreateWebhook, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadWebhook>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiGroupsWebhooksPost(createWebhook, acceptLanguage, options);
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
        async deleteOneApiGroupsWebhooksItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadWebhook>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiGroupsWebhooksItemIdDelete(itemId, acceptLanguage, options);
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
        async getAllApiGroupsWebhooksGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookPagination>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiGroupsWebhooksGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
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
        async getOneApiGroupsWebhooksItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadWebhook>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiGroupsWebhooksItemIdGet(itemId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Manually re-fires all previously scheduled webhooks for today
         * @summary Rerun Webhooks
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async rerunWebhooksApiGroupsWebhooksRerunPost(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.rerunWebhooksApiGroupsWebhooksRerunPost(acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async updateOneApiGroupsWebhooksItemIdPut(itemId: string, createWebhook: CreateWebhook, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadWebhook>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiGroupsWebhooksItemIdPut(itemId, createWebhook, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GroupsWebhooksApi - factory interface
 * @export
 */
export const GroupsWebhooksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GroupsWebhooksApiFp(configuration)
    return {
        /**
         *
         * @summary Create One
         * @param {CreateWebhook} createWebhook
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiGroupsWebhooksPost(createWebhook: CreateWebhook, acceptLanguage?: string, options?: any): AxiosPromise<ReadWebhook> {
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
        deleteOneApiGroupsWebhooksItemIdDelete(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<ReadWebhook> {
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
        getAllApiGroupsWebhooksGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<WebhookPagination> {
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
        getOneApiGroupsWebhooksItemIdGet(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<ReadWebhook> {
            return localVarFp.getOneApiGroupsWebhooksItemIdGet(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Manually re-fires all previously scheduled webhooks for today
         * @summary Rerun Webhooks
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rerunWebhooksApiGroupsWebhooksRerunPost(acceptLanguage?: string, options?: any): AxiosPromise<any> {
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
        updateOneApiGroupsWebhooksItemIdPut(itemId: string, createWebhook: CreateWebhook, acceptLanguage?: string, options?: any): AxiosPromise<ReadWebhook> {
            return localVarFp.updateOneApiGroupsWebhooksItemIdPut(itemId, createWebhook, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GroupsWebhooksApi - object-oriented interface
 * @export
 * @class GroupsWebhooksApi
 * @extends {BaseAPI}
 */
export class GroupsWebhooksApi extends BaseAPI {
    /**
     *
     * @summary Create One
     * @param {CreateWebhook} createWebhook
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsWebhooksApi
     */
    public createOneApiGroupsWebhooksPost(createWebhook: CreateWebhook, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsWebhooksApiFp(this.configuration).createOneApiGroupsWebhooksPost(createWebhook, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public deleteOneApiGroupsWebhooksItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsWebhooksApiFp(this.configuration).deleteOneApiGroupsWebhooksItemIdDelete(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getAllApiGroupsWebhooksGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsWebhooksApiFp(this.configuration).getAllApiGroupsWebhooksGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getOneApiGroupsWebhooksItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsWebhooksApiFp(this.configuration).getOneApiGroupsWebhooksItemIdGet(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Manually re-fires all previously scheduled webhooks for today
     * @summary Rerun Webhooks
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsWebhooksApi
     */
    public rerunWebhooksApiGroupsWebhooksRerunPost(acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsWebhooksApiFp(this.configuration).rerunWebhooksApiGroupsWebhooksRerunPost(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public updateOneApiGroupsWebhooksItemIdPut(itemId: string, createWebhook: CreateWebhook, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return GroupsWebhooksApiFp(this.configuration).updateOneApiGroupsWebhooksItemIdPut(itemId, createWebhook, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
