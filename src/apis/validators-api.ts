import {Configuration} from "../common/configuration";
import globalAxios, {AxiosInstance, AxiosPromise, AxiosRequestConfig} from "axios";
import {BASE_PATH, BaseAPI, RequestArgs} from "../common/base";
import {assertParamExists, createRequestFunction, DUMMY_BASE_URL, setSearchParams, toPathString} from "../common/common";
import {ValidationResponse} from "../models";

/**
 * ValidatorsApi - axios parameter creator
 * @export
 */
export const ValidatorsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Checks if a group with the given name exists
         * @summary Validate Group
         * @param {string} name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateGroupApiValidatorsGroupGet: async (name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('validateGroupApiValidatorsGroupGet', 'name', name)
            const localVarPath = `/api/validators/group`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Checks if a group with the given slug exists
         * @summary Validate Recipe
         * @param {string} groupId
         * @param {string} name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateRecipeApiValidatorsRecipeGet: async (groupId: string, name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupId' is not null or undefined
            assertParamExists('validateRecipeApiValidatorsRecipeGet', 'groupId', groupId)
            // verify required parameter 'name' is not null or undefined
            assertParamExists('validateRecipeApiValidatorsRecipeGet', 'name', name)
            const localVarPath = `/api/validators/recipe`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Checks if a user with the given name exists
         * @summary Validate User
         * @param {string} name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateUserApiValidatorsUserNameGet: async (name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('validateUserApiValidatorsUserNameGet', 'name', name)
            const localVarPath = `/api/validators/user/name`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Checks if a user with the given name exists
         * @summary Validate User Email
         * @param {string} email
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateUserEmailApiValidatorsUserEmailGet: async (email: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'email' is not null or undefined
            assertParamExists('validateUserEmailApiValidatorsUserEmailGet', 'email', email)
            const localVarPath = `/api/validators/user/email`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (email !== undefined) {
                localVarQueryParameter['email'] = email;
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
 * ValidatorsApi - functional programming interface
 * @export
 */
export const ValidatorsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ValidatorsApiAxiosParamCreator(configuration)
    return {
        /**
         * Checks if a group with the given name exists
         * @summary Validate Group
         * @param {string} name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async validateGroupApiValidatorsGroupGet(name: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ValidationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.validateGroupApiValidatorsGroupGet(name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Checks if a group with the given slug exists
         * @summary Validate Recipe
         * @param {string} groupId
         * @param {string} name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async validateRecipeApiValidatorsRecipeGet(groupId: string, name: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ValidationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.validateRecipeApiValidatorsRecipeGet(groupId, name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Checks if a user with the given name exists
         * @summary Validate User
         * @param {string} name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async validateUserApiValidatorsUserNameGet(name: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ValidationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.validateUserApiValidatorsUserNameGet(name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Checks if a user with the given name exists
         * @summary Validate User Email
         * @param {string} email
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async validateUserEmailApiValidatorsUserEmailGet(email: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ValidationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.validateUserEmailApiValidatorsUserEmailGet(email, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ValidatorsApi - factory interface
 * @export
 */
export const ValidatorsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ValidatorsApiFp(configuration)
    return {
        /**
         * Checks if a group with the given name exists
         * @summary Validate Group
         * @param {string} name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateGroupApiValidatorsGroupGet(name: string, options?: any): AxiosPromise<ValidationResponse> {
            return localVarFp.validateGroupApiValidatorsGroupGet(name, options).then((request) => request(axios, basePath));
        },
        /**
         * Checks if a group with the given slug exists
         * @summary Validate Recipe
         * @param {string} groupId
         * @param {string} name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateRecipeApiValidatorsRecipeGet(groupId: string, name: string, options?: any): AxiosPromise<ValidationResponse> {
            return localVarFp.validateRecipeApiValidatorsRecipeGet(groupId, name, options).then((request) => request(axios, basePath));
        },
        /**
         * Checks if a user with the given name exists
         * @summary Validate User
         * @param {string} name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateUserApiValidatorsUserNameGet(name: string, options?: any): AxiosPromise<ValidationResponse> {
            return localVarFp.validateUserApiValidatorsUserNameGet(name, options).then((request) => request(axios, basePath));
        },
        /**
         * Checks if a user with the given name exists
         * @summary Validate User Email
         * @param {string} email
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateUserEmailApiValidatorsUserEmailGet(email: string, options?: any): AxiosPromise<ValidationResponse> {
            return localVarFp.validateUserEmailApiValidatorsUserEmailGet(email, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ValidatorsApi - object-oriented interface
 * @export
 * @class ValidatorsApi
 * @extends {BaseAPI}
 */
export class ValidatorsApi extends BaseAPI {
    /**
     * Checks if a group with the given name exists
     * @summary Validate Group
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ValidatorsApi
     */
    public validateGroupApiValidatorsGroupGet(name: string, options?: AxiosRequestConfig) {
        return ValidatorsApiFp(this.configuration).validateGroupApiValidatorsGroupGet(name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Checks if a group with the given slug exists
     * @summary Validate Recipe
     * @param {string} groupId
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ValidatorsApi
     */
    public validateRecipeApiValidatorsRecipeGet(groupId: string, name: string, options?: AxiosRequestConfig) {
        return ValidatorsApiFp(this.configuration).validateRecipeApiValidatorsRecipeGet(groupId, name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Checks if a user with the given name exists
     * @summary Validate User
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ValidatorsApi
     */
    public validateUserApiValidatorsUserNameGet(name: string, options?: AxiosRequestConfig) {
        return ValidatorsApiFp(this.configuration).validateUserApiValidatorsUserNameGet(name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Checks if a user with the given name exists
     * @summary Validate User Email
     * @param {string} email
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ValidatorsApi
     */
    public validateUserEmailApiValidatorsUserEmailGet(email: string, options?: AxiosRequestConfig) {
        return ValidatorsApiFp(this.configuration).validateUserEmailApiValidatorsUserEmailGet(email, options).then((request) => request(this.axios, this.basePath));
    }
}