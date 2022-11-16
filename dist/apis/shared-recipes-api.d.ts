import { Configuration } from "../common/configuration";
import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";
import { BaseAPI, RequestArgs } from "../common/base";
import { RecipeShareToken, RecipeShareTokenCreate, RecipeShareTokenSummary } from "../models";
/**
 * SharedRecipesApi - axios parameter creator
 * @export
 */
export declare const SharedRecipesApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Create One
     * @param {RecipeShareTokenCreate} recipeShareTokenCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiSharedRecipesPost: (recipeShareTokenCreate: RecipeShareTokenCreate, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiSharedRecipesItemIdDelete: (itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get All
     * @param {string} [recipeId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllApiSharedRecipesGet: (recipeId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiSharedRecipesItemIdGet: (itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * SharedRecipesApi - functional programming interface
 * @export
 */
export declare const SharedRecipesApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Create One
     * @param {RecipeShareTokenCreate} recipeShareTokenCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiSharedRecipesPost(recipeShareTokenCreate: RecipeShareTokenCreate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeShareToken>>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiSharedRecipesItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     *
     * @summary Get All
     * @param {string} [recipeId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllApiSharedRecipesGet(recipeId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<RecipeShareTokenSummary>>>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiSharedRecipesItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeShareToken>>;
};
/**
 * SharedRecipesApi - factory interface
 * @export
 */
export declare const SharedRecipesApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Create One
     * @param {RecipeShareTokenCreate} recipeShareTokenCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiSharedRecipesPost(recipeShareTokenCreate: RecipeShareTokenCreate, acceptLanguage?: string, options?: any): AxiosPromise<RecipeShareToken>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiSharedRecipesItemIdDelete(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<any>;
    /**
     *
     * @summary Get All
     * @param {string} [recipeId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllApiSharedRecipesGet(recipeId?: string, acceptLanguage?: string, options?: any): AxiosPromise<Array<RecipeShareTokenSummary>>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiSharedRecipesItemIdGet(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeShareToken>;
};
/**
 * SharedRecipesApi - object-oriented interface
 * @export
 * @class SharedRecipesApi
 * @extends {BaseAPI}
 */
export declare class SharedRecipesApi extends BaseAPI {
    /**
     *
     * @summary Create One
     * @param {RecipeShareTokenCreate} recipeShareTokenCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharedRecipesApi
     */
    createOneApiSharedRecipesPost(recipeShareTokenCreate: RecipeShareTokenCreate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RecipeShareToken, any>>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharedRecipesApi
     */
    deleteOneApiSharedRecipesItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     *
     * @summary Get All
     * @param {string} [recipeId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharedRecipesApi
     */
    getAllApiSharedRecipesGet(recipeId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RecipeShareTokenSummary[], any>>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharedRecipesApi
     */
    getOneApiSharedRecipesItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RecipeShareToken, any>>;
}
//# sourceMappingURL=shared-recipes-api.d.ts.map