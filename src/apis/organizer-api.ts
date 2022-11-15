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
    CategoryBase, CategoryIn,
    CategorySummary, OrderDirection, RecipeCategoryPagination,
    RecipeTagPagination,
    RecipeTagResponse, RecipeTool,
    RecipeToolCreate, RecipeToolPagination, RecipeToolResponse,
    TagIn
} from "../models";

/**
 * OrganizerCategoriesApi - axios parameter creator
 * @export
 */
export const OrganizerCategoriesApiAxiosParamCreator = function (configuration?: Configuration) {
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
        createOneApiOrganizersCategoriesPost: async (categoryIn: CategoryIn, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'categoryIn' is not null or undefined
            assertParamExists('createOneApiOrganizersCategoriesPost', 'categoryIn', categoryIn)
            const localVarPath = `/api/organizers/categories`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(categoryIn, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        deleteOneApiOrganizersCategoriesItemIdDelete: async (itemId: string, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('deleteOneApiOrganizersCategoriesItemIdDelete', 'itemId', itemId)
            const localVarPath = `/api/organizers/categories/{item_id}`
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
        getAllApiOrganizersCategoriesGet: async (groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/organizers/categories`;
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
         * Returns a list of categories that do not contain any recipes
         * @summary Get All Empty
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllEmptyApiOrganizersCategoriesEmptyGet: async (groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/organizers/categories/empty`;
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
         * Returns a list of recipes associated with the provided category.
         * @summary Get One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiOrganizersCategoriesItemIdGet: async (itemId: string, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getOneApiOrganizersCategoriesItemIdGet', 'itemId', itemId)
            const localVarPath = `/api/organizers/categories/{item_id}`
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
         * Returns a category object with the associated recieps relating to the category
         * @summary Get One By Slug
         * @param {string} categorySlug
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneBySlugApiOrganizersCategoriesSlugCategorySlugGet: async (categorySlug: string, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'categorySlug' is not null or undefined
            assertParamExists('getOneBySlugApiOrganizersCategoriesSlugCategorySlugGet', 'categorySlug', categorySlug)
            const localVarPath = `/api/organizers/categories/slug/{category_slug}`
                .replace(`{${"category_slug"}}`, encodeURIComponent(String(categorySlug)));
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
         * Updates an existing Tag in the database
         * @summary Update One
         * @param {string} itemId
         * @param {CategoryIn} categoryIn
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiOrganizersCategoriesItemIdPut: async (itemId: string, categoryIn: CategoryIn, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('updateOneApiOrganizersCategoriesItemIdPut', 'itemId', itemId)
            // verify required parameter 'categoryIn' is not null or undefined
            assertParamExists('updateOneApiOrganizersCategoriesItemIdPut', 'categoryIn', categoryIn)
            const localVarPath = `/api/organizers/categories/{item_id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(categoryIn, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OrganizerCategoriesApi - functional programming interface
 * @export
 */
export const OrganizerCategoriesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OrganizerCategoriesApiAxiosParamCreator(configuration)
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
        async createOneApiOrganizersCategoriesPost(categoryIn: CategoryIn, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiOrganizersCategoriesPost(categoryIn, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async deleteOneApiOrganizersCategoriesItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiOrganizersCategoriesItemIdDelete(itemId, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async getAllApiOrganizersCategoriesGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeCategoryPagination>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiOrganizersCategoriesGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of categories that do not contain any recipes
         * @summary Get All Empty
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllEmptyApiOrganizersCategoriesEmptyGet(groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CategoryBase>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllEmptyApiOrganizersCategoriesEmptyGet(groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async getOneApiOrganizersCategoriesItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CategorySummary>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiOrganizersCategoriesItemIdGet(itemId, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async getOneBySlugApiOrganizersCategoriesSlugCategorySlugGet(categorySlug: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneBySlugApiOrganizersCategoriesSlugCategorySlugGet(categorySlug, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async updateOneApiOrganizersCategoriesItemIdPut(itemId: string, categoryIn: CategoryIn, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CategorySummary>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiOrganizersCategoriesItemIdPut(itemId, categoryIn, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * OrganizerCategoriesApi - factory interface
 * @export
 */
export const OrganizerCategoriesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OrganizerCategoriesApiFp(configuration)
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
        createOneApiOrganizersCategoriesPost(categoryIn: CategoryIn, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<any> {
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
        deleteOneApiOrganizersCategoriesItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<any> {
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
        getAllApiOrganizersCategoriesGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeCategoryPagination> {
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
        getAllEmptyApiOrganizersCategoriesEmptyGet(groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<Array<CategoryBase>> {
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
        getOneApiOrganizersCategoriesItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<CategorySummary> {
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
        getOneBySlugApiOrganizersCategoriesSlugCategorySlugGet(categorySlug: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<any> {
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
        updateOneApiOrganizersCategoriesItemIdPut(itemId: string, categoryIn: CategoryIn, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<CategorySummary> {
            return localVarFp.updateOneApiOrganizersCategoriesItemIdPut(itemId, categoryIn, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OrganizerCategoriesApi - object-oriented interface
 * @export
 * @class OrganizerCategoriesApi
 * @extends {BaseAPI}
 */
export class OrganizerCategoriesApi extends BaseAPI {
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
    public createOneApiOrganizersCategoriesPost(categoryIn: CategoryIn, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return OrganizerCategoriesApiFp(this.configuration).createOneApiOrganizersCategoriesPost(categoryIn, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public deleteOneApiOrganizersCategoriesItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return OrganizerCategoriesApiFp(this.configuration).deleteOneApiOrganizersCategoriesItemIdDelete(itemId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getAllApiOrganizersCategoriesGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return OrganizerCategoriesApiFp(this.configuration).getAllApiOrganizersCategoriesGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getAllEmptyApiOrganizersCategoriesEmptyGet(groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return OrganizerCategoriesApiFp(this.configuration).getAllEmptyApiOrganizersCategoriesEmptyGet(groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getOneApiOrganizersCategoriesItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return OrganizerCategoriesApiFp(this.configuration).getOneApiOrganizersCategoriesItemIdGet(itemId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getOneBySlugApiOrganizersCategoriesSlugCategorySlugGet(categorySlug: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return OrganizerCategoriesApiFp(this.configuration).getOneBySlugApiOrganizersCategoriesSlugCategorySlugGet(categorySlug, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public updateOneApiOrganizersCategoriesItemIdPut(itemId: string, categoryIn: CategoryIn, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return OrganizerCategoriesApiFp(this.configuration).updateOneApiOrganizersCategoriesItemIdPut(itemId, categoryIn, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * OrganizerTagsApi - axios parameter creator
 * @export
 */
export const OrganizerTagsApiAxiosParamCreator = function (configuration?: Configuration) {
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
        createOneApiOrganizersTagsPost: async (tagIn: TagIn, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tagIn' is not null or undefined
            assertParamExists('createOneApiOrganizersTagsPost', 'tagIn', tagIn)
            const localVarPath = `/api/organizers/tags`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(tagIn, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        deleteRecipeTagApiOrganizersTagsItemIdDelete: async (itemId: string, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('deleteRecipeTagApiOrganizersTagsItemIdDelete', 'itemId', itemId)
            const localVarPath = `/api/organizers/tags/{item_id}`
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
        getAllApiOrganizersTagsGet: async (groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/organizers/tags`;
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
         * Returns a list of tags that do not contain any recipes
         * @summary Get Empty Tags
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEmptyTagsApiOrganizersTagsEmptyGet: async (groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/organizers/tags/empty`;
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
         * Returns a list of recipes associated with the provided tag.
         * @summary Get One
         * @param {string} itemId
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiOrganizersTagsItemIdGet: async (itemId: string, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getOneApiOrganizersTagsItemIdGet', 'itemId', itemId)
            const localVarPath = `/api/organizers/tags/{item_id}`
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
         * @summary Get One By Slug
         * @param {string} tagSlug
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneBySlugApiOrganizersTagsSlugTagSlugGet: async (tagSlug: string, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tagSlug' is not null or undefined
            assertParamExists('getOneBySlugApiOrganizersTagsSlugTagSlugGet', 'tagSlug', tagSlug)
            const localVarPath = `/api/organizers/tags/slug/{tag_slug}`
                .replace(`{${"tag_slug"}}`, encodeURIComponent(String(tagSlug)));
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
         * Updates an existing Tag in the database
         * @summary Update One
         * @param {string} itemId
         * @param {TagIn} tagIn
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiOrganizersTagsItemIdPut: async (itemId: string, tagIn: TagIn, groupId?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('updateOneApiOrganizersTagsItemIdPut', 'itemId', itemId)
            // verify required parameter 'tagIn' is not null or undefined
            assertParamExists('updateOneApiOrganizersTagsItemIdPut', 'tagIn', tagIn)
            const localVarPath = `/api/organizers/tags/{item_id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(tagIn, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OrganizerTagsApi - functional programming interface
 * @export
 */
export const OrganizerTagsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OrganizerTagsApiAxiosParamCreator(configuration)
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
        async createOneApiOrganizersTagsPost(tagIn: TagIn, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiOrganizersTagsPost(tagIn, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async deleteRecipeTagApiOrganizersTagsItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteRecipeTagApiOrganizersTagsItemIdDelete(itemId, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async getAllApiOrganizersTagsGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeTagPagination>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiOrganizersTagsGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of tags that do not contain any recipes
         * @summary Get Empty Tags
         * @param {string} [groupId]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEmptyTagsApiOrganizersTagsEmptyGet(groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEmptyTagsApiOrganizersTagsEmptyGet(groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async getOneApiOrganizersTagsItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeTagResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiOrganizersTagsItemIdGet(itemId, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async getOneBySlugApiOrganizersTagsSlugTagSlugGet(tagSlug: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeTagResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneBySlugApiOrganizersTagsSlugTagSlugGet(tagSlug, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async updateOneApiOrganizersTagsItemIdPut(itemId: string, tagIn: TagIn, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeTagResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiOrganizersTagsItemIdPut(itemId, tagIn, groupId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * OrganizerTagsApi - factory interface
 * @export
 */
export const OrganizerTagsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OrganizerTagsApiFp(configuration)
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
        createOneApiOrganizersTagsPost(tagIn: TagIn, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<any> {
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
        deleteRecipeTagApiOrganizersTagsItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<any> {
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
        getAllApiOrganizersTagsGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeTagPagination> {
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
        getEmptyTagsApiOrganizersTagsEmptyGet(groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<any> {
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
        getOneApiOrganizersTagsItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeTagResponse> {
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
        getOneBySlugApiOrganizersTagsSlugTagSlugGet(tagSlug: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeTagResponse> {
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
        updateOneApiOrganizersTagsItemIdPut(itemId: string, tagIn: TagIn, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeTagResponse> {
            return localVarFp.updateOneApiOrganizersTagsItemIdPut(itemId, tagIn, groupId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OrganizerTagsApi - object-oriented interface
 * @export
 * @class OrganizerTagsApi
 * @extends {BaseAPI}
 */
export class OrganizerTagsApi extends BaseAPI {
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
    public createOneApiOrganizersTagsPost(tagIn: TagIn, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return OrganizerTagsApiFp(this.configuration).createOneApiOrganizersTagsPost(tagIn, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public deleteRecipeTagApiOrganizersTagsItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return OrganizerTagsApiFp(this.configuration).deleteRecipeTagApiOrganizersTagsItemIdDelete(itemId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getAllApiOrganizersTagsGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return OrganizerTagsApiFp(this.configuration).getAllApiOrganizersTagsGet(groupId, page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getEmptyTagsApiOrganizersTagsEmptyGet(groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return OrganizerTagsApiFp(this.configuration).getEmptyTagsApiOrganizersTagsEmptyGet(groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getOneApiOrganizersTagsItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return OrganizerTagsApiFp(this.configuration).getOneApiOrganizersTagsItemIdGet(itemId, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getOneBySlugApiOrganizersTagsSlugTagSlugGet(tagSlug: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return OrganizerTagsApiFp(this.configuration).getOneBySlugApiOrganizersTagsSlugTagSlugGet(tagSlug, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public updateOneApiOrganizersTagsItemIdPut(itemId: string, tagIn: TagIn, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return OrganizerTagsApiFp(this.configuration).updateOneApiOrganizersTagsItemIdPut(itemId, tagIn, groupId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * OrganizerToolsApi - axios parameter creator
 * @export
 */
export const OrganizerToolsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Create One
         * @param {RecipeToolCreate} recipeToolCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiOrganizersToolsPost: async (recipeToolCreate: RecipeToolCreate, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'recipeToolCreate' is not null or undefined
            assertParamExists('createOneApiOrganizersToolsPost', 'recipeToolCreate', recipeToolCreate)
            const localVarPath = `/api/organizers/tools`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(recipeToolCreate, localVarRequestOptions, configuration)

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
        deleteOneApiOrganizersToolsItemIdDelete: async (itemId: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('deleteOneApiOrganizersToolsItemIdDelete', 'itemId', itemId)
            const localVarPath = `/api/organizers/tools/{item_id}`
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
        getAllApiOrganizersToolsGet: async (page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/organizers/tools`;
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
        getOneApiOrganizersToolsItemIdGet: async (itemId: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getOneApiOrganizersToolsItemIdGet', 'itemId', itemId)
            const localVarPath = `/api/organizers/tools/{item_id}`
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
         * @summary Get One By Slug
         * @param {string} toolSlug
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneBySlugApiOrganizersToolsSlugToolSlugGet: async (toolSlug: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'toolSlug' is not null or undefined
            assertParamExists('getOneBySlugApiOrganizersToolsSlugToolSlugGet', 'toolSlug', toolSlug)
            const localVarPath = `/api/organizers/tools/slug/{tool_slug}`
                .replace(`{${"tool_slug"}}`, encodeURIComponent(String(toolSlug)));
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
         * @param {RecipeToolCreate} recipeToolCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiOrganizersToolsItemIdPut: async (itemId: string, recipeToolCreate: RecipeToolCreate, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('updateOneApiOrganizersToolsItemIdPut', 'itemId', itemId)
            // verify required parameter 'recipeToolCreate' is not null or undefined
            assertParamExists('updateOneApiOrganizersToolsItemIdPut', 'recipeToolCreate', recipeToolCreate)
            const localVarPath = `/api/organizers/tools/{item_id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(recipeToolCreate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OrganizerToolsApi - functional programming interface
 * @export
 */
export const OrganizerToolsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OrganizerToolsApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Create One
         * @param {RecipeToolCreate} recipeToolCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiOrganizersToolsPost(recipeToolCreate: RecipeToolCreate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeTool>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiOrganizersToolsPost(recipeToolCreate, acceptLanguage, options);
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
        async deleteOneApiOrganizersToolsItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeTool>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiOrganizersToolsItemIdDelete(itemId, acceptLanguage, options);
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
        async getAllApiOrganizersToolsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeToolPagination>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiOrganizersToolsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
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
        async getOneApiOrganizersToolsItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeTool>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiOrganizersToolsItemIdGet(itemId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get One By Slug
         * @param {string} toolSlug
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOneBySlugApiOrganizersToolsSlugToolSlugGet(toolSlug: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeToolResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneBySlugApiOrganizersToolsSlugToolSlugGet(toolSlug, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async updateOneApiOrganizersToolsItemIdPut(itemId: string, recipeToolCreate: RecipeToolCreate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeTool>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiOrganizersToolsItemIdPut(itemId, recipeToolCreate, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * OrganizerToolsApi - factory interface
 * @export
 */
export const OrganizerToolsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OrganizerToolsApiFp(configuration)
    return {
        /**
         *
         * @summary Create One
         * @param {RecipeToolCreate} recipeToolCreate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiOrganizersToolsPost(recipeToolCreate: RecipeToolCreate, acceptLanguage?: string, options?: any): AxiosPromise<RecipeTool> {
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
        deleteOneApiOrganizersToolsItemIdDelete(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeTool> {
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
        getAllApiOrganizersToolsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeToolPagination> {
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
        getOneApiOrganizersToolsItemIdGet(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeTool> {
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
        getOneBySlugApiOrganizersToolsSlugToolSlugGet(toolSlug: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeToolResponse> {
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
        updateOneApiOrganizersToolsItemIdPut(itemId: string, recipeToolCreate: RecipeToolCreate, acceptLanguage?: string, options?: any): AxiosPromise<RecipeTool> {
            return localVarFp.updateOneApiOrganizersToolsItemIdPut(itemId, recipeToolCreate, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OrganizerToolsApi - object-oriented interface
 * @export
 * @class OrganizerToolsApi
 * @extends {BaseAPI}
 */
export class OrganizerToolsApi extends BaseAPI {
    /**
     *
     * @summary Create One
     * @param {RecipeToolCreate} recipeToolCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerToolsApi
     */
    public createOneApiOrganizersToolsPost(recipeToolCreate: RecipeToolCreate, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return OrganizerToolsApiFp(this.configuration).createOneApiOrganizersToolsPost(recipeToolCreate, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public deleteOneApiOrganizersToolsItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return OrganizerToolsApiFp(this.configuration).deleteOneApiOrganizersToolsItemIdDelete(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getAllApiOrganizersToolsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return OrganizerToolsApiFp(this.configuration).getAllApiOrganizersToolsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getOneApiOrganizersToolsItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return OrganizerToolsApiFp(this.configuration).getOneApiOrganizersToolsItemIdGet(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getOneBySlugApiOrganizersToolsSlugToolSlugGet(toolSlug: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return OrganizerToolsApiFp(this.configuration).getOneBySlugApiOrganizersToolsSlugToolSlugGet(toolSlug, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public updateOneApiOrganizersToolsItemIdPut(itemId: string, recipeToolCreate: RecipeToolCreate, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return OrganizerToolsApiFp(this.configuration).updateOneApiOrganizersToolsItemIdPut(itemId, recipeToolCreate, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
