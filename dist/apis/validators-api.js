"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorsApi = exports.ValidatorsApiFactory = exports.ValidatorsApiFp = exports.ValidatorsApiAxiosParamCreator = void 0;
const axios_1 = __importDefault(require("axios"));
const base_1 = require("../common/base");
const common_1 = require("../common/common");
/**
 * ValidatorsApi - axios parameter creator
 * @export
 */
const ValidatorsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Checks if a group with the given name exists
         * @summary Validate Group
         * @param {string} name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateGroupApiValidatorsGroupGet: async (name, options = {}) => {
            // verify required parameter 'name' is not null or undefined
            (0, common_1.assertParamExists)('validateGroupApiValidatorsGroupGet', 'name', name);
            const localVarPath = `/api/validators/group`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        validateRecipeApiValidatorsRecipeGet: async (groupId, name, options = {}) => {
            // verify required parameter 'groupId' is not null or undefined
            (0, common_1.assertParamExists)('validateRecipeApiValidatorsRecipeGet', 'groupId', groupId);
            // verify required parameter 'name' is not null or undefined
            (0, common_1.assertParamExists)('validateRecipeApiValidatorsRecipeGet', 'name', name);
            const localVarPath = `/api/validators/recipe`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        validateUserApiValidatorsUserNameGet: async (name, options = {}) => {
            // verify required parameter 'name' is not null or undefined
            (0, common_1.assertParamExists)('validateUserApiValidatorsUserNameGet', 'name', name);
            const localVarPath = `/api/validators/user/name`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        validateUserEmailApiValidatorsUserEmailGet: async (email, options = {}) => {
            // verify required parameter 'email' is not null or undefined
            (0, common_1.assertParamExists)('validateUserEmailApiValidatorsUserEmailGet', 'email', email);
            const localVarPath = `/api/validators/user/email`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (email !== undefined) {
                localVarQueryParameter['email'] = email;
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
exports.ValidatorsApiAxiosParamCreator = ValidatorsApiAxiosParamCreator;
/**
 * ValidatorsApi - functional programming interface
 * @export
 */
const ValidatorsApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.ValidatorsApiAxiosParamCreator)(configuration);
    return {
        /**
         * Checks if a group with the given name exists
         * @summary Validate Group
         * @param {string} name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async validateGroupApiValidatorsGroupGet(name, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.validateGroupApiValidatorsGroupGet(name, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Checks if a group with the given slug exists
         * @summary Validate Recipe
         * @param {string} groupId
         * @param {string} name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async validateRecipeApiValidatorsRecipeGet(groupId, name, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.validateRecipeApiValidatorsRecipeGet(groupId, name, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Checks if a user with the given name exists
         * @summary Validate User
         * @param {string} name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async validateUserApiValidatorsUserNameGet(name, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.validateUserApiValidatorsUserNameGet(name, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Checks if a user with the given name exists
         * @summary Validate User Email
         * @param {string} email
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async validateUserEmailApiValidatorsUserEmailGet(email, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.validateUserEmailApiValidatorsUserEmailGet(email, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.ValidatorsApiFp = ValidatorsApiFp;
/**
 * ValidatorsApi - factory interface
 * @export
 */
const ValidatorsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.ValidatorsApiFp)(configuration);
    return {
        /**
         * Checks if a group with the given name exists
         * @summary Validate Group
         * @param {string} name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateGroupApiValidatorsGroupGet(name, options) {
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
        validateRecipeApiValidatorsRecipeGet(groupId, name, options) {
            return localVarFp.validateRecipeApiValidatorsRecipeGet(groupId, name, options).then((request) => request(axios, basePath));
        },
        /**
         * Checks if a user with the given name exists
         * @summary Validate User
         * @param {string} name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateUserApiValidatorsUserNameGet(name, options) {
            return localVarFp.validateUserApiValidatorsUserNameGet(name, options).then((request) => request(axios, basePath));
        },
        /**
         * Checks if a user with the given name exists
         * @summary Validate User Email
         * @param {string} email
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateUserEmailApiValidatorsUserEmailGet(email, options) {
            return localVarFp.validateUserEmailApiValidatorsUserEmailGet(email, options).then((request) => request(axios, basePath));
        },
    };
};
exports.ValidatorsApiFactory = ValidatorsApiFactory;
/**
 * ValidatorsApi - object-oriented interface
 * @export
 * @class ValidatorsApi
 * @extends {BaseAPI}
 */
class ValidatorsApi extends base_1.BaseAPI {
    /**
     * Checks if a group with the given name exists
     * @summary Validate Group
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ValidatorsApi
     */
    validateGroupApiValidatorsGroupGet(name, options) {
        return (0, exports.ValidatorsApiFp)(this.configuration).validateGroupApiValidatorsGroupGet(name, options).then((request) => request(this.axios, this.basePath));
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
    validateRecipeApiValidatorsRecipeGet(groupId, name, options) {
        return (0, exports.ValidatorsApiFp)(this.configuration).validateRecipeApiValidatorsRecipeGet(groupId, name, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Checks if a user with the given name exists
     * @summary Validate User
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ValidatorsApi
     */
    validateUserApiValidatorsUserNameGet(name, options) {
        return (0, exports.ValidatorsApiFp)(this.configuration).validateUserApiValidatorsUserNameGet(name, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Checks if a user with the given name exists
     * @summary Validate User Email
     * @param {string} email
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ValidatorsApi
     */
    validateUserEmailApiValidatorsUserEmailGet(email, options) {
        return (0, exports.ValidatorsApiFp)(this.configuration).validateUserEmailApiValidatorsUserEmailGet(email, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.ValidatorsApi = ValidatorsApi;
//# sourceMappingURL=validators-api.js.map