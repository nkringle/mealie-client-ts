import { Configuration } from "../common/configuration";
import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";
import { BaseAPI, RequestArgs } from "../common/base";
import { IngredientRequest, IngredientsRequest, ParsedIngredient } from "../models";
/**
 * IngredientParserApi - axios parameter creator
 * @export
 */
export declare const IngredientParserApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Parse Ingredient
     * @param {IngredientRequest} ingredientRequest
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    parseIngredientApiParserIngredientPost: (ingredientRequest: IngredientRequest, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Parse Ingredients
     * @param {IngredientsRequest} ingredientsRequest
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    parseIngredientsApiParserIngredientsPost: (ingredientsRequest: IngredientsRequest, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * IngredientParserApi - functional programming interface
 * @export
 */
export declare const IngredientParserApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Parse Ingredient
     * @param {IngredientRequest} ingredientRequest
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    parseIngredientApiParserIngredientPost(ingredientRequest: IngredientRequest, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ParsedIngredient>>;
    /**
     *
     * @summary Parse Ingredients
     * @param {IngredientsRequest} ingredientsRequest
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    parseIngredientsApiParserIngredientsPost(ingredientsRequest: IngredientsRequest, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ParsedIngredient>>>;
};
/**
 * IngredientParserApi - factory interface
 * @export
 */
export declare const IngredientParserApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Parse Ingredient
     * @param {IngredientRequest} ingredientRequest
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    parseIngredientApiParserIngredientPost(ingredientRequest: IngredientRequest, acceptLanguage?: string, options?: any): AxiosPromise<ParsedIngredient>;
    /**
     *
     * @summary Parse Ingredients
     * @param {IngredientsRequest} ingredientsRequest
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    parseIngredientsApiParserIngredientsPost(ingredientsRequest: IngredientsRequest, acceptLanguage?: string, options?: any): AxiosPromise<Array<ParsedIngredient>>;
};
/**
 * IngredientParserApi - object-oriented interface
 * @export
 * @class IngredientParserApi
 * @extends {BaseAPI}
 */
export declare class IngredientParserApi extends BaseAPI {
    /**
     *
     * @summary Parse Ingredient
     * @param {IngredientRequest} ingredientRequest
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IngredientParserApi
     */
    parseIngredientApiParserIngredientPost(ingredientRequest: IngredientRequest, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ParsedIngredient, any>>;
    /**
     *
     * @summary Parse Ingredients
     * @param {IngredientsRequest} ingredientsRequest
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IngredientParserApi
     */
    parseIngredientsApiParserIngredientsPost(ingredientsRequest: IngredientsRequest, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ParsedIngredient[], any>>;
}
//# sourceMappingURL=ingredient-api.d.ts.map