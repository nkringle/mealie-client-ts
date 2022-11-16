"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExploreRecipesApi = exports.ExploreRecipesApiFactory = exports.ExploreRecipesApiFp = exports.ExploreRecipesApiAxiosParamCreator = void 0;
const axios_1 = __importDefault(require("axios"));
const base_1 = require("../common/base");
const common_1 = require("../common/common");
/**
 * ExploreRecipesApi - axios parameter creator
 * @export
 */
const ExploreRecipesApiAxiosParamCreator = function (configuration) {
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
        getRecipeApiExploreRecipesGroupIdRecipeSlugGet: async (groupId, recipeSlug, acceptLanguage, options = {}) => {
            // verify required parameter 'groupId' is not null or undefined
            (0, common_1.assertParamExists)('getRecipeApiExploreRecipesGroupIdRecipeSlugGet', 'groupId', groupId);
            // verify required parameter 'recipeSlug' is not null or undefined
            (0, common_1.assertParamExists)('getRecipeApiExploreRecipesGroupIdRecipeSlugGet', 'recipeSlug', recipeSlug);
            const localVarPath = `/api/explore/recipes/{group_id}/{recipe_slug}`
                .replace(`{${"group_id"}}`, encodeURIComponent(String(groupId)))
                .replace(`{${"recipe_slug"}}`, encodeURIComponent(String(recipeSlug)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.ExploreRecipesApiAxiosParamCreator = ExploreRecipesApiAxiosParamCreator;
/**
 * ExploreRecipesApi - functional programming interface
 * @export
 */
const ExploreRecipesApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.ExploreRecipesApiAxiosParamCreator)(configuration);
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
        async getRecipeApiExploreRecipesGroupIdRecipeSlugGet(groupId, recipeSlug, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRecipeApiExploreRecipesGroupIdRecipeSlugGet(groupId, recipeSlug, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.ExploreRecipesApiFp = ExploreRecipesApiFp;
/**
 * ExploreRecipesApi - factory interface
 * @export
 */
const ExploreRecipesApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.ExploreRecipesApiFp)(configuration);
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
        getRecipeApiExploreRecipesGroupIdRecipeSlugGet(groupId, recipeSlug, acceptLanguage, options) {
            return localVarFp.getRecipeApiExploreRecipesGroupIdRecipeSlugGet(groupId, recipeSlug, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.ExploreRecipesApiFactory = ExploreRecipesApiFactory;
/**
 * ExploreRecipesApi - object-oriented interface
 * @export
 * @class ExploreRecipesApi
 * @extends {BaseAPI}
 */
class ExploreRecipesApi extends base_1.BaseAPI {
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
    getRecipeApiExploreRecipesGroupIdRecipeSlugGet(groupId, recipeSlug, acceptLanguage, options) {
        return (0, exports.ExploreRecipesApiFp)(this.configuration).getRecipeApiExploreRecipesGroupIdRecipeSlugGet(groupId, recipeSlug, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.ExploreRecipesApi = ExploreRecipesApi;
//# sourceMappingURL=explore-api.js.map