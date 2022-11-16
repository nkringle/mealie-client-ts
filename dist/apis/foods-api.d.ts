import { Configuration } from "../common/configuration";
import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";
import { BaseAPI, RequestArgs } from "../common/base";
import { CreateIngredientFood, IngredientFood, IngredientFoodPagination, MergeFood, OrderDirection, SuccessResponse } from "../models";
/**
 * FoodsApi - axios parameter creator
 * @export
 */
export declare const FoodsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Create One
     * @param {CreateIngredientFood} createIngredientFood
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiFoodsPost: (createIngredientFood: CreateIngredientFood, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiFoodsItemIdDelete: (itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
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
    getAllApiFoodsGet: (page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiFoodsItemIdGet: (itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Merge One
     * @param {MergeFood} mergeFood
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    mergeOneApiFoodsMergePut: (mergeFood: MergeFood, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {CreateIngredientFood} createIngredientFood
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiFoodsItemIdPut: (itemId: string, createIngredientFood: CreateIngredientFood, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * FoodsApi - functional programming interface
 * @export
 */
export declare const FoodsApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Create One
     * @param {CreateIngredientFood} createIngredientFood
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiFoodsPost(createIngredientFood: CreateIngredientFood, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IngredientFood>>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiFoodsItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IngredientFood>>;
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
    getAllApiFoodsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IngredientFoodPagination>>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiFoodsItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IngredientFood>>;
    /**
     *
     * @summary Merge One
     * @param {MergeFood} mergeFood
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    mergeOneApiFoodsMergePut(mergeFood: MergeFood, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {CreateIngredientFood} createIngredientFood
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiFoodsItemIdPut(itemId: string, createIngredientFood: CreateIngredientFood, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IngredientFood>>;
};
/**
 * FoodsApi - factory interface
 * @export
 */
export declare const FoodsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Create One
     * @param {CreateIngredientFood} createIngredientFood
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiFoodsPost(createIngredientFood: CreateIngredientFood, acceptLanguage?: string, options?: any): AxiosPromise<IngredientFood>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiFoodsItemIdDelete(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<IngredientFood>;
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
    getAllApiFoodsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<IngredientFoodPagination>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiFoodsItemIdGet(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<IngredientFood>;
    /**
     *
     * @summary Merge One
     * @param {MergeFood} mergeFood
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    mergeOneApiFoodsMergePut(mergeFood: MergeFood, acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {CreateIngredientFood} createIngredientFood
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiFoodsItemIdPut(itemId: string, createIngredientFood: CreateIngredientFood, acceptLanguage?: string, options?: any): AxiosPromise<IngredientFood>;
};
/**
 * FoodsApi - object-oriented interface
 * @export
 * @class FoodsApi
 * @extends {BaseAPI}
 */
export declare class FoodsApi extends BaseAPI {
    /**
     *
     * @summary Create One
     * @param {CreateIngredientFood} createIngredientFood
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoodsApi
     */
    createOneApiFoodsPost(createIngredientFood: CreateIngredientFood, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<IngredientFood, any>>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoodsApi
     */
    deleteOneApiFoodsItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<IngredientFood, any>>;
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
    getAllApiFoodsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<IngredientFoodPagination, any>>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoodsApi
     */
    getOneApiFoodsItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<IngredientFood, any>>;
    /**
     *
     * @summary Merge One
     * @param {MergeFood} mergeFood
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FoodsApi
     */
    mergeOneApiFoodsMergePut(mergeFood: MergeFood, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<SuccessResponse, any>>;
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
    updateOneApiFoodsItemIdPut(itemId: string, createIngredientFood: CreateIngredientFood, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<IngredientFood, any>>;
}
//# sourceMappingURL=foods-api.d.ts.map