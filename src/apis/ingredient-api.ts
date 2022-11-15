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
import {IngredientRequest, IngredientsRequest, ParsedIngredient} from "../models";

/**
 * IngredientParserApi - axios parameter creator
 * @export
 */
export const IngredientParserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Parse Ingredient
         * @param {IngredientRequest} ingredientRequest
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        parseIngredientApiParserIngredientPost: async (ingredientRequest: IngredientRequest, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ingredientRequest' is not null or undefined
            assertParamExists('parseIngredientApiParserIngredientPost', 'ingredientRequest', ingredientRequest)
            const localVarPath = `/api/parser/ingredient`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(ingredientRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Parse Ingredients
         * @param {IngredientsRequest} ingredientsRequest
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        parseIngredientsApiParserIngredientsPost: async (ingredientsRequest: IngredientsRequest, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'ingredientsRequest' is not null or undefined
            assertParamExists('parseIngredientsApiParserIngredientsPost', 'ingredientsRequest', ingredientsRequest)
            const localVarPath = `/api/parser/ingredients`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(ingredientsRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * IngredientParserApi - functional programming interface
 * @export
 */
export const IngredientParserApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = IngredientParserApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Parse Ingredient
         * @param {IngredientRequest} ingredientRequest
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async parseIngredientApiParserIngredientPost(ingredientRequest: IngredientRequest, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ParsedIngredient>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.parseIngredientApiParserIngredientPost(ingredientRequest, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Parse Ingredients
         * @param {IngredientsRequest} ingredientsRequest
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async parseIngredientsApiParserIngredientsPost(ingredientsRequest: IngredientsRequest, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ParsedIngredient>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.parseIngredientsApiParserIngredientsPost(ingredientsRequest, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * IngredientParserApi - factory interface
 * @export
 */
export const IngredientParserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = IngredientParserApiFp(configuration)
    return {
        /**
         *
         * @summary Parse Ingredient
         * @param {IngredientRequest} ingredientRequest
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        parseIngredientApiParserIngredientPost(ingredientRequest: IngredientRequest, acceptLanguage?: string, options?: any): AxiosPromise<ParsedIngredient> {
            return localVarFp.parseIngredientApiParserIngredientPost(ingredientRequest, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Parse Ingredients
         * @param {IngredientsRequest} ingredientsRequest
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        parseIngredientsApiParserIngredientsPost(ingredientsRequest: IngredientsRequest, acceptLanguage?: string, options?: any): AxiosPromise<Array<ParsedIngredient>> {
            return localVarFp.parseIngredientsApiParserIngredientsPost(ingredientsRequest, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * IngredientParserApi - object-oriented interface
 * @export
 * @class IngredientParserApi
 * @extends {BaseAPI}
 */
export class IngredientParserApi extends BaseAPI {
    /**
     *
     * @summary Parse Ingredient
     * @param {IngredientRequest} ingredientRequest
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IngredientParserApi
     */
    public parseIngredientApiParserIngredientPost(ingredientRequest: IngredientRequest, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return IngredientParserApiFp(this.configuration).parseIngredientApiParserIngredientPost(ingredientRequest, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Parse Ingredients
     * @param {IngredientsRequest} ingredientsRequest
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IngredientParserApi
     */
    public parseIngredientsApiParserIngredientsPost(ingredientsRequest: IngredientsRequest, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return IngredientParserApiFp(this.configuration).parseIngredientsApiParserIngredientsPost(ingredientsRequest, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}

