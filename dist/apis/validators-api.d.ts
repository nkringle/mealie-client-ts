import { Configuration } from "../common/configuration";
import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";
import { BaseAPI, RequestArgs } from "../common/base";
import { ValidationResponse } from "../models";
/**
 * ValidatorsApi - axios parameter creator
 * @export
 */
export declare const ValidatorsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Checks if a group with the given name exists
     * @summary Validate Group
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validateGroupApiValidatorsGroupGet: (name: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Checks if a group with the given slug exists
     * @summary Validate Recipe
     * @param {string} groupId
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validateRecipeApiValidatorsRecipeGet: (groupId: string, name: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Checks if a user with the given name exists
     * @summary Validate User
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validateUserApiValidatorsUserNameGet: (name: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Checks if a user with the given name exists
     * @summary Validate User Email
     * @param {string} email
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validateUserEmailApiValidatorsUserEmailGet: (email: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * ValidatorsApi - functional programming interface
 * @export
 */
export declare const ValidatorsApiFp: (configuration?: Configuration) => {
    /**
     * Checks if a group with the given name exists
     * @summary Validate Group
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validateGroupApiValidatorsGroupGet(name: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ValidationResponse>>;
    /**
     * Checks if a group with the given slug exists
     * @summary Validate Recipe
     * @param {string} groupId
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validateRecipeApiValidatorsRecipeGet(groupId: string, name: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ValidationResponse>>;
    /**
     * Checks if a user with the given name exists
     * @summary Validate User
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validateUserApiValidatorsUserNameGet(name: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ValidationResponse>>;
    /**
     * Checks if a user with the given name exists
     * @summary Validate User Email
     * @param {string} email
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validateUserEmailApiValidatorsUserEmailGet(email: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ValidationResponse>>;
};
/**
 * ValidatorsApi - factory interface
 * @export
 */
export declare const ValidatorsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Checks if a group with the given name exists
     * @summary Validate Group
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validateGroupApiValidatorsGroupGet(name: string, options?: any): AxiosPromise<ValidationResponse>;
    /**
     * Checks if a group with the given slug exists
     * @summary Validate Recipe
     * @param {string} groupId
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validateRecipeApiValidatorsRecipeGet(groupId: string, name: string, options?: any): AxiosPromise<ValidationResponse>;
    /**
     * Checks if a user with the given name exists
     * @summary Validate User
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validateUserApiValidatorsUserNameGet(name: string, options?: any): AxiosPromise<ValidationResponse>;
    /**
     * Checks if a user with the given name exists
     * @summary Validate User Email
     * @param {string} email
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validateUserEmailApiValidatorsUserEmailGet(email: string, options?: any): AxiosPromise<ValidationResponse>;
};
/**
 * ValidatorsApi - object-oriented interface
 * @export
 * @class ValidatorsApi
 * @extends {BaseAPI}
 */
export declare class ValidatorsApi extends BaseAPI {
    /**
     * Checks if a group with the given name exists
     * @summary Validate Group
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ValidatorsApi
     */
    validateGroupApiValidatorsGroupGet(name: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ValidationResponse, any>>;
    /**
     * Checks if a group with the given slug exists
     * @summary Validate Recipe
     * @param {string} groupId
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ValidatorsApi
     */
    validateRecipeApiValidatorsRecipeGet(groupId: string, name: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ValidationResponse, any>>;
    /**
     * Checks if a user with the given name exists
     * @summary Validate User
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ValidatorsApi
     */
    validateUserApiValidatorsUserNameGet(name: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ValidationResponse, any>>;
    /**
     * Checks if a user with the given name exists
     * @summary Validate User Email
     * @param {string} email
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ValidatorsApi
     */
    validateUserEmailApiValidatorsUserEmailGet(email: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ValidationResponse, any>>;
}
//# sourceMappingURL=validators-api.d.ts.map