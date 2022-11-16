import { Configuration } from "../common/configuration";
import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";
import { BaseAPI, RequestArgs } from "../common/base";
import { Recipe } from "../models";
/**
 * ExploreRecipesApi - axios parameter creator
 * @export
 */
export declare const ExploreRecipesApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get Recipe
     * @param {string} groupId
     * @param {string} recipeSlug
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecipeApiExploreRecipesGroupIdRecipeSlugGet: (groupId: string, recipeSlug: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * ExploreRecipesApi - functional programming interface
 * @export
 */
export declare const ExploreRecipesApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get Recipe
     * @param {string} groupId
     * @param {string} recipeSlug
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecipeApiExploreRecipesGroupIdRecipeSlugGet(groupId: string, recipeSlug: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Recipe>>;
};
/**
 * ExploreRecipesApi - factory interface
 * @export
 */
export declare const ExploreRecipesApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Get Recipe
     * @param {string} groupId
     * @param {string} recipeSlug
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecipeApiExploreRecipesGroupIdRecipeSlugGet(groupId: string, recipeSlug: string, acceptLanguage?: string, options?: any): AxiosPromise<Recipe>;
};
/**
 * ExploreRecipesApi - object-oriented interface
 * @export
 * @class ExploreRecipesApi
 * @extends {BaseAPI}
 */
export declare class ExploreRecipesApi extends BaseAPI {
    /**
     *
     * @summary Get Recipe
     * @param {string} groupId
     * @param {string} recipeSlug
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExploreRecipesApi
     */
    getRecipeApiExploreRecipesGroupIdRecipeSlugGet(groupId: string, recipeSlug: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Recipe, any>>;
}
//# sourceMappingURL=explore-api.d.ts.map