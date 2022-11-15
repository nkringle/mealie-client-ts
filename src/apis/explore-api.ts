import {Configuration} from "../common/configuration";
import globalAxios, {AxiosInstance, AxiosPromise, AxiosRequestConfig} from "axios";
import {BASE_PATH, BaseAPI, RequestArgs} from "../common/base";
import {assertParamExists, createRequestFunction, DUMMY_BASE_URL, setSearchParams, toPathString} from "../common/common";
import {Recipe} from "../models";


/**
 * ExploreRecipesApi - axios parameter creator
 * @export
 */
export const ExploreRecipesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Get Recipe
         * @param {string} groupId
         * @param {string} recipeSlug
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecipeApiExploreRecipesGroupIdRecipeSlugGet: async (groupId: string, recipeSlug: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('getRecipeApiExploreRecipesGroupIdRecipeSlugGet', 'groupId', groupId)
            // verify required parameter 'recipeSlug' is not null or undefined
            assertParamExists('getRecipeApiExploreRecipesGroupIdRecipeSlugGet', 'recipeSlug', recipeSlug)
            const localVarPath = `/api/explore/recipes/{group_id}/{recipe_slug}`
                .replace(`{${"group_id"}}`, encodeURIComponent(String(groupId)))
                .replace(`{${"recipe_slug"}}`, encodeURIComponent(String(recipeSlug)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

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
 * ExploreRecipesApi - functional programming interface
 * @export
 */
export const ExploreRecipesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ExploreRecipesApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Get Recipe
         * @param {string} groupId
         * @param {string} recipeSlug
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRecipeApiExploreRecipesGroupIdRecipeSlugGet(groupId: string, recipeSlug: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Recipe>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRecipeApiExploreRecipesGroupIdRecipeSlugGet(groupId, recipeSlug, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ExploreRecipesApi - factory interface
 * @export
 */
export const ExploreRecipesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ExploreRecipesApiFp(configuration)
    return {
        /**
         *
         * @summary Get Recipe
         * @param {string} groupId
         * @param {string} recipeSlug
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecipeApiExploreRecipesGroupIdRecipeSlugGet(groupId: string, recipeSlug: string, acceptLanguage?: string, options?: any): AxiosPromise<Recipe> {
            return localVarFp.getRecipeApiExploreRecipesGroupIdRecipeSlugGet(groupId, recipeSlug, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ExploreRecipesApi - object-oriented interface
 * @export
 * @class ExploreRecipesApi
 * @extends {BaseAPI}
 */
export class ExploreRecipesApi extends BaseAPI {
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
    public getRecipeApiExploreRecipesGroupIdRecipeSlugGet(groupId: string, recipeSlug: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return ExploreRecipesApiFp(this.configuration).getRecipeApiExploreRecipesGroupIdRecipeSlugGet(groupId, recipeSlug, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}



