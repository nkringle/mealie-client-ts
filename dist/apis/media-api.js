"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaApi = exports.MediaApiFactory = exports.MediaApiFp = exports.MediaApiAxiosParamCreator = void 0;
const axios_1 = __importDefault(require("axios"));
const base_1 = require("../common/base");
const common_1 = require("../common/common");
/**
 * MediaApi - axios parameter creator
 * @export
 */
const MediaApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Returns a recipe asset
         * @summary Get Recipe Asset
         * @param {string} recipeId
         * @param {string} fileName
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecipeAssetApiMediaRecipesRecipeIdAssetsFileNameGet: async (recipeId, fileName, options = {}) => {
            // verify required parameter 'recipeId' is not null or undefined
            (0, common_1.assertParamExists)('getRecipeAssetApiMediaRecipesRecipeIdAssetsFileNameGet', 'recipeId', recipeId);
            // verify required parameter 'fileName' is not null or undefined
            (0, common_1.assertParamExists)('getRecipeAssetApiMediaRecipesRecipeIdAssetsFileNameGet', 'fileName', fileName);
            const localVarPath = `/api/media/recipes/{recipe_id}/assets/{file_name}`
                .replace(`{${"recipe_id"}}`, encodeURIComponent(String(recipeId)))
                .replace(`{${"file_name"}}`, encodeURIComponent(String(fileName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Takes in a recipe recipe_id, returns the static image. This route is proxied in the docker image and should not hit the API in production
         * @summary Get Recipe Img
         * @param {string} recipeId
         * @param {ImageType} fileName
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecipeImgApiMediaRecipesRecipeIdImagesFileNameGet: async (recipeId, fileName, options = {}) => {
            // verify required parameter 'recipeId' is not null or undefined
            (0, common_1.assertParamExists)('getRecipeImgApiMediaRecipesRecipeIdImagesFileNameGet', 'recipeId', recipeId);
            // verify required parameter 'fileName' is not null or undefined
            (0, common_1.assertParamExists)('getRecipeImgApiMediaRecipesRecipeIdImagesFileNameGet', 'fileName', fileName);
            const localVarPath = `/api/media/recipes/{recipe_id}/images/{file_name}`
                .replace(`{${"recipe_id"}}`, encodeURIComponent(String(recipeId)))
                .replace(`{${"file_name"}}`, encodeURIComponent(String(fileName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Takes in a recipe slug, returns the static image. This route is proxied in the docker image and should not hit the API in production
         * @summary Get User Image
         * @param {string} userId
         * @param {string} fileName
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserImageApiMediaUsersUserIdFileNameGet: async (userId, fileName, options = {}) => {
            // verify required parameter 'userId' is not null or undefined
            (0, common_1.assertParamExists)('getUserImageApiMediaUsersUserIdFileNameGet', 'userId', userId);
            // verify required parameter 'fileName' is not null or undefined
            (0, common_1.assertParamExists)('getUserImageApiMediaUsersUserIdFileNameGet', 'fileName', fileName);
            const localVarPath = `/api/media/users/{user_id}/{file_name}`
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)))
                .replace(`{${"file_name"}}`, encodeURIComponent(String(fileName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Get Validation Text
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getValidationTextApiMediaDockerValidateTxtGet: async (options = {}) => {
            const localVarPath = `/api/media/docker/validate.txt`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
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
exports.MediaApiAxiosParamCreator = MediaApiAxiosParamCreator;
/**
 * MediaApi - functional programming interface
 * @export
 */
const MediaApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.MediaApiAxiosParamCreator)(configuration);
    return {
        /**
         * Returns a recipe asset
         * @summary Get Recipe Asset
         * @param {string} recipeId
         * @param {string} fileName
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRecipeAssetApiMediaRecipesRecipeIdAssetsFileNameGet(recipeId, fileName, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRecipeAssetApiMediaRecipesRecipeIdAssetsFileNameGet(recipeId, fileName, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Takes in a recipe recipe_id, returns the static image. This route is proxied in the docker image and should not hit the API in production
         * @summary Get Recipe Img
         * @param {string} recipeId
         * @param {ImageType} fileName
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRecipeImgApiMediaRecipesRecipeIdImagesFileNameGet(recipeId, fileName, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRecipeImgApiMediaRecipesRecipeIdImagesFileNameGet(recipeId, fileName, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Takes in a recipe slug, returns the static image. This route is proxied in the docker image and should not hit the API in production
         * @summary Get User Image
         * @param {string} userId
         * @param {string} fileName
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserImageApiMediaUsersUserIdFileNameGet(userId, fileName, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserImageApiMediaUsersUserIdFileNameGet(userId, fileName, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get Validation Text
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getValidationTextApiMediaDockerValidateTxtGet(options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getValidationTextApiMediaDockerValidateTxtGet(options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.MediaApiFp = MediaApiFp;
/**
 * MediaApi - factory interface
 * @export
 */
const MediaApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.MediaApiFp)(configuration);
    return {
        /**
         * Returns a recipe asset
         * @summary Get Recipe Asset
         * @param {string} recipeId
         * @param {string} fileName
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecipeAssetApiMediaRecipesRecipeIdAssetsFileNameGet(recipeId, fileName, options) {
            return localVarFp.getRecipeAssetApiMediaRecipesRecipeIdAssetsFileNameGet(recipeId, fileName, options).then((request) => request(axios, basePath));
        },
        /**
         * Takes in a recipe recipe_id, returns the static image. This route is proxied in the docker image and should not hit the API in production
         * @summary Get Recipe Img
         * @param {string} recipeId
         * @param {ImageType} fileName
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecipeImgApiMediaRecipesRecipeIdImagesFileNameGet(recipeId, fileName, options) {
            return localVarFp.getRecipeImgApiMediaRecipesRecipeIdImagesFileNameGet(recipeId, fileName, options).then((request) => request(axios, basePath));
        },
        /**
         * Takes in a recipe slug, returns the static image. This route is proxied in the docker image and should not hit the API in production
         * @summary Get User Image
         * @param {string} userId
         * @param {string} fileName
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserImageApiMediaUsersUserIdFileNameGet(userId, fileName, options) {
            return localVarFp.getUserImageApiMediaUsersUserIdFileNameGet(userId, fileName, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get Validation Text
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getValidationTextApiMediaDockerValidateTxtGet(options) {
            return localVarFp.getValidationTextApiMediaDockerValidateTxtGet(options).then((request) => request(axios, basePath));
        },
    };
};
exports.MediaApiFactory = MediaApiFactory;
/**
 * MediaApi - object-oriented interface
 * @export
 * @class MediaApi
 * @extends {BaseAPI}
 */
class MediaApi extends base_1.BaseAPI {
    /**
     * Returns a recipe asset
     * @summary Get Recipe Asset
     * @param {string} recipeId
     * @param {string} fileName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaApi
     */
    getRecipeAssetApiMediaRecipesRecipeIdAssetsFileNameGet(recipeId, fileName, options) {
        return (0, exports.MediaApiFp)(this.configuration).getRecipeAssetApiMediaRecipesRecipeIdAssetsFileNameGet(recipeId, fileName, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Takes in a recipe recipe_id, returns the static image. This route is proxied in the docker image and should not hit the API in production
     * @summary Get Recipe Img
     * @param {string} recipeId
     * @param {ImageType} fileName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaApi
     */
    getRecipeImgApiMediaRecipesRecipeIdImagesFileNameGet(recipeId, fileName, options) {
        return (0, exports.MediaApiFp)(this.configuration).getRecipeImgApiMediaRecipesRecipeIdImagesFileNameGet(recipeId, fileName, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Takes in a recipe slug, returns the static image. This route is proxied in the docker image and should not hit the API in production
     * @summary Get User Image
     * @param {string} userId
     * @param {string} fileName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaApi
     */
    getUserImageApiMediaUsersUserIdFileNameGet(userId, fileName, options) {
        return (0, exports.MediaApiFp)(this.configuration).getUserImageApiMediaUsersUserIdFileNameGet(userId, fileName, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get Validation Text
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaApi
     */
    getValidationTextApiMediaDockerValidateTxtGet(options) {
        return (0, exports.MediaApiFp)(this.configuration).getValidationTextApiMediaDockerValidateTxtGet(options).then((request) => request(this.axios, this.basePath));
    }
}
exports.MediaApi = MediaApi;
//# sourceMappingURL=media-api.js.map