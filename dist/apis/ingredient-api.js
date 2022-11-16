"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientParserApi = exports.IngredientParserApiFactory = exports.IngredientParserApiFp = exports.IngredientParserApiAxiosParamCreator = void 0;
const axios_1 = __importDefault(require("axios"));
const base_1 = require("../common/base");
const common_1 = require("../common/common");
/**
 * IngredientParserApi - axios parameter creator
 * @export
 */
const IngredientParserApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Parse Ingredient
         * @param {IngredientRequest} ingredientRequest
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        parseIngredientApiParserIngredientPost: async (ingredientRequest, acceptLanguage, options = {}) => {
            // verify required parameter 'ingredientRequest' is not null or undefined
            (0, common_1.assertParamExists)('parseIngredientApiParserIngredientPost', 'ingredientRequest', ingredientRequest);
            const localVarPath = `/api/parser/ingredient`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(ingredientRequest, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        parseIngredientsApiParserIngredientsPost: async (ingredientsRequest, acceptLanguage, options = {}) => {
            // verify required parameter 'ingredientsRequest' is not null or undefined
            (0, common_1.assertParamExists)('parseIngredientsApiParserIngredientsPost', 'ingredientsRequest', ingredientsRequest);
            const localVarPath = `/api/parser/ingredients`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(ingredientsRequest, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.IngredientParserApiAxiosParamCreator = IngredientParserApiAxiosParamCreator;
/**
 * IngredientParserApi - functional programming interface
 * @export
 */
const IngredientParserApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.IngredientParserApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Parse Ingredient
         * @param {IngredientRequest} ingredientRequest
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async parseIngredientApiParserIngredientPost(ingredientRequest, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.parseIngredientApiParserIngredientPost(ingredientRequest, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Parse Ingredients
         * @param {IngredientsRequest} ingredientsRequest
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async parseIngredientsApiParserIngredientsPost(ingredientsRequest, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.parseIngredientsApiParserIngredientsPost(ingredientsRequest, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.IngredientParserApiFp = IngredientParserApiFp;
/**
 * IngredientParserApi - factory interface
 * @export
 */
const IngredientParserApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.IngredientParserApiFp)(configuration);
    return {
        /**
         *
         * @summary Parse Ingredient
         * @param {IngredientRequest} ingredientRequest
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        parseIngredientApiParserIngredientPost(ingredientRequest, acceptLanguage, options) {
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
        parseIngredientsApiParserIngredientsPost(ingredientsRequest, acceptLanguage, options) {
            return localVarFp.parseIngredientsApiParserIngredientsPost(ingredientsRequest, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.IngredientParserApiFactory = IngredientParserApiFactory;
/**
 * IngredientParserApi - object-oriented interface
 * @export
 * @class IngredientParserApi
 * @extends {BaseAPI}
 */
class IngredientParserApi extends base_1.BaseAPI {
    /**
     *
     * @summary Parse Ingredient
     * @param {IngredientRequest} ingredientRequest
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IngredientParserApi
     */
    parseIngredientApiParserIngredientPost(ingredientRequest, acceptLanguage, options) {
        return (0, exports.IngredientParserApiFp)(this.configuration).parseIngredientApiParserIngredientPost(ingredientRequest, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    parseIngredientsApiParserIngredientsPost(ingredientsRequest, acceptLanguage, options) {
        return (0, exports.IngredientParserApiFp)(this.configuration).parseIngredientsApiParserIngredientsPost(ingredientsRequest, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.IngredientParserApi = IngredientParserApi;
//# sourceMappingURL=ingredient-api.js.map