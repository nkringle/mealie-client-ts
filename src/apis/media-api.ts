import {Configuration} from "../common/configuration";
import globalAxios, {AxiosInstance, AxiosPromise, AxiosRequestConfig} from "axios";
import {BASE_PATH, BaseAPI, RequestArgs} from "../common/base";
import {assertParamExists, createRequestFunction, DUMMY_BASE_URL, setSearchParams, toPathString} from "../common/common";
import {ImageType} from "../models";

/**
 * MediaApi - axios parameter creator
 * @export
 */
export const MediaApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a recipe asset
         * @summary Get Recipe Asset
         * @param {string} recipeId
         * @param {string} fileName
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecipeAssetApiMediaRecipesRecipeIdAssetsFileNameGet: async (recipeId: string, fileName: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'recipeId' is not null or undefined
            assertParamExists('getRecipeAssetApiMediaRecipesRecipeIdAssetsFileNameGet', 'recipeId', recipeId)
            // verify required parameter 'fileName' is not null or undefined
            assertParamExists('getRecipeAssetApiMediaRecipesRecipeIdAssetsFileNameGet', 'fileName', fileName)
            const localVarPath = `/api/media/recipes/{recipe_id}/assets/{file_name}`
                .replace(`{${"recipe_id"}}`, encodeURIComponent(String(recipeId)))
                .replace(`{${"file_name"}}`, encodeURIComponent(String(fileName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
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
        getRecipeImgApiMediaRecipesRecipeIdImagesFileNameGet: async (recipeId: string, fileName: ImageType, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'recipeId' is not null or undefined
            assertParamExists('getRecipeImgApiMediaRecipesRecipeIdImagesFileNameGet', 'recipeId', recipeId)
            // verify required parameter 'fileName' is not null or undefined
            assertParamExists('getRecipeImgApiMediaRecipesRecipeIdImagesFileNameGet', 'fileName', fileName)
            const localVarPath = `/api/media/recipes/{recipe_id}/images/{file_name}`
                .replace(`{${"recipe_id"}}`, encodeURIComponent(String(recipeId)))
                .replace(`{${"file_name"}}`, encodeURIComponent(String(fileName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
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
        getUserImageApiMediaUsersUserIdFileNameGet: async (userId: string, fileName: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getUserImageApiMediaUsersUserIdFileNameGet', 'userId', userId)
            // verify required parameter 'fileName' is not null or undefined
            assertParamExists('getUserImageApiMediaUsersUserIdFileNameGet', 'fileName', fileName)
            const localVarPath = `/api/media/users/{user_id}/{file_name}`
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)))
                .replace(`{${"file_name"}}`, encodeURIComponent(String(fileName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Get Validation Text
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getValidationTextApiMediaDockerValidateTxtGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/media/docker/validate.txt`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;



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
 * MediaApi - functional programming interface
 * @export
 */
export const MediaApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MediaApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a recipe asset
         * @summary Get Recipe Asset
         * @param {string} recipeId
         * @param {string} fileName
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRecipeAssetApiMediaRecipesRecipeIdAssetsFileNameGet(recipeId: string, fileName: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRecipeAssetApiMediaRecipesRecipeIdAssetsFileNameGet(recipeId, fileName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Takes in a recipe recipe_id, returns the static image. This route is proxied in the docker image and should not hit the API in production
         * @summary Get Recipe Img
         * @param {string} recipeId
         * @param {ImageType} fileName
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRecipeImgApiMediaRecipesRecipeIdImagesFileNameGet(recipeId: string, fileName: ImageType, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRecipeImgApiMediaRecipesRecipeIdImagesFileNameGet(recipeId, fileName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Takes in a recipe slug, returns the static image. This route is proxied in the docker image and should not hit the API in production
         * @summary Get User Image
         * @param {string} userId
         * @param {string} fileName
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserImageApiMediaUsersUserIdFileNameGet(userId: string, fileName: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserImageApiMediaUsersUserIdFileNameGet(userId, fileName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get Validation Text
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getValidationTextApiMediaDockerValidateTxtGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getValidationTextApiMediaDockerValidateTxtGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MediaApi - factory interface
 * @export
 */
export const MediaApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MediaApiFp(configuration)
    return {
        /**
         * Returns a recipe asset
         * @summary Get Recipe Asset
         * @param {string} recipeId
         * @param {string} fileName
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecipeAssetApiMediaRecipesRecipeIdAssetsFileNameGet(recipeId: string, fileName: string, options?: any): AxiosPromise<any> {
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
        getRecipeImgApiMediaRecipesRecipeIdImagesFileNameGet(recipeId: string, fileName: ImageType, options?: any): AxiosPromise<any> {
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
        getUserImageApiMediaUsersUserIdFileNameGet(userId: string, fileName: string, options?: any): AxiosPromise<void> {
            return localVarFp.getUserImageApiMediaUsersUserIdFileNameGet(userId, fileName, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get Validation Text
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getValidationTextApiMediaDockerValidateTxtGet(options?: any): AxiosPromise<void> {
            return localVarFp.getValidationTextApiMediaDockerValidateTxtGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MediaApi - object-oriented interface
 * @export
 * @class MediaApi
 * @extends {BaseAPI}
 */
export class MediaApi extends BaseAPI {
    /**
     * Returns a recipe asset
     * @summary Get Recipe Asset
     * @param {string} recipeId
     * @param {string} fileName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaApi
     */
    public getRecipeAssetApiMediaRecipesRecipeIdAssetsFileNameGet(recipeId: string, fileName: string, options?: AxiosRequestConfig) {
        return MediaApiFp(this.configuration).getRecipeAssetApiMediaRecipesRecipeIdAssetsFileNameGet(recipeId, fileName, options).then((request) => request(this.axios, this.basePath));
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
    public getRecipeImgApiMediaRecipesRecipeIdImagesFileNameGet(recipeId: string, fileName: ImageType, options?: AxiosRequestConfig) {
        return MediaApiFp(this.configuration).getRecipeImgApiMediaRecipesRecipeIdImagesFileNameGet(recipeId, fileName, options).then((request) => request(this.axios, this.basePath));
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
    public getUserImageApiMediaUsersUserIdFileNameGet(userId: string, fileName: string, options?: AxiosRequestConfig) {
        return MediaApiFp(this.configuration).getUserImageApiMediaUsersUserIdFileNameGet(userId, fileName, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Get Validation Text
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaApi
     */
    public getValidationTextApiMediaDockerValidateTxtGet(options?: AxiosRequestConfig) {
        return MediaApiFp(this.configuration).getValidationTextApiMediaDockerValidateTxtGet(options).then((request) => request(this.axios, this.basePath));
    }
}

