import { Configuration } from "../common/configuration";
import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";
import { BaseAPI, RequestArgs } from "../common/base";
import { OrderDirection, RecipeCommentCreate, RecipeCommentOut, RecipeCommentPagination, RecipeCommentUpdate, SuccessResponse } from "../models";
/**
 * CommentsApi - axios parameter creator
 * @export
 */
export declare const CommentsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Create One
     * @param {RecipeCommentCreate} recipeCommentCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiCommentsPost: (recipeCommentCreate: RecipeCommentCreate, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiCommentsItemIdDelete: (itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
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
    getAllApiCommentsGet: (page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiCommentsItemIdGet: (itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {RecipeCommentUpdate} recipeCommentUpdate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiCommentsItemIdPut: (itemId: string, recipeCommentUpdate: RecipeCommentUpdate, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * CommentsApi - functional programming interface
 * @export
 */
export declare const CommentsApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Create One
     * @param {RecipeCommentCreate} recipeCommentCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiCommentsPost(recipeCommentCreate: RecipeCommentCreate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeCommentOut>>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiCommentsItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>>;
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
    getAllApiCommentsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeCommentPagination>>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiCommentsItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeCommentOut>>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {RecipeCommentUpdate} recipeCommentUpdate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiCommentsItemIdPut(itemId: string, recipeCommentUpdate: RecipeCommentUpdate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeCommentOut>>;
};
/**
 * CommentsApi - factory interface
 * @export
 */
export declare const CommentsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Create One
     * @param {RecipeCommentCreate} recipeCommentCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiCommentsPost(recipeCommentCreate: RecipeCommentCreate, acceptLanguage?: string, options?: any): AxiosPromise<RecipeCommentOut>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiCommentsItemIdDelete(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse>;
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
    getAllApiCommentsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeCommentPagination>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiCommentsItemIdGet(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeCommentOut>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {RecipeCommentUpdate} recipeCommentUpdate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiCommentsItemIdPut(itemId: string, recipeCommentUpdate: RecipeCommentUpdate, acceptLanguage?: string, options?: any): AxiosPromise<RecipeCommentOut>;
};
/**
 * CommentsApi - object-oriented interface
 * @export
 * @class CommentsApi
 * @extends {BaseAPI}
 */
export declare class CommentsApi extends BaseAPI {
    /**
     *
     * @summary Create One
     * @param {RecipeCommentCreate} recipeCommentCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    createOneApiCommentsPost(recipeCommentCreate: RecipeCommentCreate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RecipeCommentOut, any>>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    deleteOneApiCommentsItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<SuccessResponse, any>>;
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
    getAllApiCommentsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RecipeCommentPagination, any>>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    getOneApiCommentsItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RecipeCommentOut, any>>;
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
    updateOneApiCommentsItemIdPut(itemId: string, recipeCommentUpdate: RecipeCommentUpdate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RecipeCommentOut, any>>;
}
//# sourceMappingURL=comments-api.d.ts.map