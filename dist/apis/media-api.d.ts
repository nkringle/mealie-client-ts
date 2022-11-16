import { Configuration } from "../common/configuration";
import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";
import { BaseAPI, RequestArgs } from "../common/base";
import { ImageType } from "../models";
/**
 * MediaApi - axios parameter creator
 * @export
 */
export declare const MediaApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Returns a recipe asset
     * @summary Get Recipe Asset
     * @param {string} recipeId
     * @param {string} fileName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecipeAssetApiMediaRecipesRecipeIdAssetsFileNameGet: (recipeId: string, fileName: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Takes in a recipe recipe_id, returns the static image. This route is proxied in the docker image and should not hit the API in production
     * @summary Get Recipe Img
     * @param {string} recipeId
     * @param {ImageType} fileName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecipeImgApiMediaRecipesRecipeIdImagesFileNameGet: (recipeId: string, fileName: ImageType, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Takes in a recipe slug, returns the static image. This route is proxied in the docker image and should not hit the API in production
     * @summary Get User Image
     * @param {string} userId
     * @param {string} fileName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserImageApiMediaUsersUserIdFileNameGet: (userId: string, fileName: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get Validation Text
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getValidationTextApiMediaDockerValidateTxtGet: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * MediaApi - functional programming interface
 * @export
 */
export declare const MediaApiFp: (configuration?: Configuration) => {
    /**
     * Returns a recipe asset
     * @summary Get Recipe Asset
     * @param {string} recipeId
     * @param {string} fileName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecipeAssetApiMediaRecipesRecipeIdAssetsFileNameGet(recipeId: string, fileName: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     * Takes in a recipe recipe_id, returns the static image. This route is proxied in the docker image and should not hit the API in production
     * @summary Get Recipe Img
     * @param {string} recipeId
     * @param {ImageType} fileName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecipeImgApiMediaRecipesRecipeIdImagesFileNameGet(recipeId: string, fileName: ImageType, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     * Takes in a recipe slug, returns the static image. This route is proxied in the docker image and should not hit the API in production
     * @summary Get User Image
     * @param {string} userId
     * @param {string} fileName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserImageApiMediaUsersUserIdFileNameGet(userId: string, fileName: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     *
     * @summary Get Validation Text
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getValidationTextApiMediaDockerValidateTxtGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
/**
 * MediaApi - factory interface
 * @export
 */
export declare const MediaApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Returns a recipe asset
     * @summary Get Recipe Asset
     * @param {string} recipeId
     * @param {string} fileName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecipeAssetApiMediaRecipesRecipeIdAssetsFileNameGet(recipeId: string, fileName: string, options?: any): AxiosPromise<any>;
    /**
     * Takes in a recipe recipe_id, returns the static image. This route is proxied in the docker image and should not hit the API in production
     * @summary Get Recipe Img
     * @param {string} recipeId
     * @param {ImageType} fileName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecipeImgApiMediaRecipesRecipeIdImagesFileNameGet(recipeId: string, fileName: ImageType, options?: any): AxiosPromise<any>;
    /**
     * Takes in a recipe slug, returns the static image. This route is proxied in the docker image and should not hit the API in production
     * @summary Get User Image
     * @param {string} userId
     * @param {string} fileName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserImageApiMediaUsersUserIdFileNameGet(userId: string, fileName: string, options?: any): AxiosPromise<void>;
    /**
     *
     * @summary Get Validation Text
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getValidationTextApiMediaDockerValidateTxtGet(options?: any): AxiosPromise<void>;
};
/**
 * MediaApi - object-oriented interface
 * @export
 * @class MediaApi
 * @extends {BaseAPI}
 */
export declare class MediaApi extends BaseAPI {
    /**
     * Returns a recipe asset
     * @summary Get Recipe Asset
     * @param {string} recipeId
     * @param {string} fileName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaApi
     */
    getRecipeAssetApiMediaRecipesRecipeIdAssetsFileNameGet(recipeId: string, fileName: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Takes in a recipe recipe_id, returns the static image. This route is proxied in the docker image and should not hit the API in production
     * @summary Get Recipe Img
     * @param {string} recipeId
     * @param {ImageType} fileName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaApi
     */
    getRecipeImgApiMediaRecipesRecipeIdImagesFileNameGet(recipeId: string, fileName: ImageType, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Takes in a recipe slug, returns the static image. This route is proxied in the docker image and should not hit the API in production
     * @summary Get User Image
     * @param {string} userId
     * @param {string} fileName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaApi
     */
    getUserImageApiMediaUsersUserIdFileNameGet(userId: string, fileName: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     *
     * @summary Get Validation Text
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaApi
     */
    getValidationTextApiMediaDockerValidateTxtGet(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
}
//# sourceMappingURL=media-api.d.ts.map