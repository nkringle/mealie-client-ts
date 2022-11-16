"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersTokensApi = exports.UsersTokensApiFactory = exports.UsersTokensApiFp = exports.UsersTokensApiAxiosParamCreator = exports.UsersRegistrationApi = exports.UsersRegistrationApiFactory = exports.UsersRegistrationApiFp = exports.UsersRegistrationApiAxiosParamCreator = exports.UsersPasswordsApi = exports.UsersPasswordsApiFactory = exports.UsersPasswordsApiFp = exports.UsersPasswordsApiAxiosParamCreator = exports.UsersImagesApi = exports.UsersImagesApiFactory = exports.UsersImagesApiFp = exports.UsersImagesApiAxiosParamCreator = exports.UsersFavoritesApi = exports.UsersFavoritesApiFactory = exports.UsersFavoritesApiFp = exports.UsersFavoritesApiAxiosParamCreator = exports.UsersCRUDApi = exports.UsersCRUDApiFactory = exports.UsersCRUDApiFp = exports.UsersCRUDApiAxiosParamCreator = exports.UsersAuthenticationApi = exports.UsersAuthenticationApiFactory = exports.UsersAuthenticationApiFp = exports.UsersAuthenticationApiAxiosParamCreator = exports.UsersAdminCRUDApi = exports.UsersAdminCRUDApiFactory = exports.UsersAdminCRUDApiFp = exports.UsersAdminCRUDApiAxiosParamCreator = void 0;
const axios_1 = __importDefault(require("axios"));
const base_1 = require("../common/base");
const common_1 = require("../common/common");
/**
 * UsersAdminCRUDApi - axios parameter creator
 * @export
 */
const UsersAdminCRUDApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Create User
         * @param {UserIn} userIn
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUserApiUsersPost: async (userIn, acceptLanguage, options = {}) => {
            // verify required parameter 'userIn' is not null or undefined
            (0, common_1.assertParamExists)('createUserApiUsersPost', 'userIn', userIn);
            const localVarPath = `/api/users`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(userIn, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Removes a user from the database. Must be the current user or a super user
         * @summary Delete User
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUserApiUsersItemIdDelete: async (itemId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('deleteUserApiUsersItemIdDelete', 'itemId', itemId);
            const localVarPath = `/api/users/{item_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'DELETE' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
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
        /**
         *
         * @summary Get All
         * @param {number} [page]
         * @param {number} [perPage]
         * @param {string} [orderBy]
         * @param {OrderDirection} [orderDirection]
         * @param {string} [queryFilter]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllApiUsersGet: async (page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options = {}) => {
            const localVarPath = `/api/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (perPage !== undefined) {
                localVarQueryParameter['perPage'] = perPage;
            }
            if (orderBy !== undefined) {
                localVarQueryParameter['orderBy'] = orderBy;
            }
            if (orderDirection !== undefined) {
                localVarQueryParameter['orderDirection'] = orderDirection;
            }
            if (queryFilter !== undefined) {
                localVarQueryParameter['queryFilter'] = queryFilter;
            }
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
        /**
         *
         * @summary Get User
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserApiUsersItemIdGet: async (itemId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('getUserApiUsersItemIdGet', 'itemId', itemId);
            const localVarPath = `/api/users/{item_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
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
exports.UsersAdminCRUDApiAxiosParamCreator = UsersAdminCRUDApiAxiosParamCreator;
/**
 * UsersAdminCRUDApi - functional programming interface
 * @export
 */
const UsersAdminCRUDApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.UsersAdminCRUDApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Create User
         * @param {UserIn} userIn
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createUserApiUsersPost(userIn, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createUserApiUsersPost(userIn, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Removes a user from the database. Must be the current user or a super user
         * @summary Delete User
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteUserApiUsersItemIdDelete(itemId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteUserApiUsersItemIdDelete(itemId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get All
         * @param {number} [page]
         * @param {number} [perPage]
         * @param {string} [orderBy]
         * @param {OrderDirection} [orderDirection]
         * @param {string} [queryFilter]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllApiUsersGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiUsersGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get User
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserApiUsersItemIdGet(itemId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserApiUsersItemIdGet(itemId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.UsersAdminCRUDApiFp = UsersAdminCRUDApiFp;
/**
 * UsersAdminCRUDApi - factory interface
 * @export
 */
const UsersAdminCRUDApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.UsersAdminCRUDApiFp)(configuration);
    return {
        /**
         *
         * @summary Create User
         * @param {UserIn} userIn
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUserApiUsersPost(userIn, acceptLanguage, options) {
            return localVarFp.createUserApiUsersPost(userIn, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Removes a user from the database. Must be the current user or a super user
         * @summary Delete User
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUserApiUsersItemIdDelete(itemId, acceptLanguage, options) {
            return localVarFp.deleteUserApiUsersItemIdDelete(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get All
         * @param {number} [page]
         * @param {number} [perPage]
         * @param {string} [orderBy]
         * @param {OrderDirection} [orderDirection]
         * @param {string} [queryFilter]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllApiUsersGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            return localVarFp.getAllApiUsersGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get User
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserApiUsersItemIdGet(itemId, acceptLanguage, options) {
            return localVarFp.getUserApiUsersItemIdGet(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.UsersAdminCRUDApiFactory = UsersAdminCRUDApiFactory;
/**
 * UsersAdminCRUDApi - object-oriented interface
 * @export
 * @class UsersAdminCRUDApi
 * @extends {BaseAPI}
 */
class UsersAdminCRUDApi extends base_1.BaseAPI {
    /**
     *
     * @summary Create User
     * @param {UserIn} userIn
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersAdminCRUDApi
     */
    createUserApiUsersPost(userIn, acceptLanguage, options) {
        return (0, exports.UsersAdminCRUDApiFp)(this.configuration).createUserApiUsersPost(userIn, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Removes a user from the database. Must be the current user or a super user
     * @summary Delete User
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersAdminCRUDApi
     */
    deleteUserApiUsersItemIdDelete(itemId, acceptLanguage, options) {
        return (0, exports.UsersAdminCRUDApiFp)(this.configuration).deleteUserApiUsersItemIdDelete(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get All
     * @param {number} [page]
     * @param {number} [perPage]
     * @param {string} [orderBy]
     * @param {OrderDirection} [orderDirection]
     * @param {string} [queryFilter]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersAdminCRUDApi
     */
    getAllApiUsersGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
        return (0, exports.UsersAdminCRUDApiFp)(this.configuration).getAllApiUsersGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get User
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersAdminCRUDApi
     */
    getUserApiUsersItemIdGet(itemId, acceptLanguage, options) {
        return (0, exports.UsersAdminCRUDApiFp)(this.configuration).getUserApiUsersItemIdGet(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.UsersAdminCRUDApi = UsersAdminCRUDApi;
/**
 * UsersAuthenticationApi - axios parameter creator
 * @export
 */
const UsersAuthenticationApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Get Token
         * @param {string} username
         * @param {string} password
         * @param {string} [grantType]
         * @param {boolean} [rememberMe]
         * @param {string} [scope]
         * @param {string} [clientId]
         * @param {string} [clientSecret]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTokenApiAuthTokenPost: async (username, password, grantType, rememberMe, scope, clientId, clientSecret, options = {}) => {
            // verify required parameter 'username' is not null or undefined
            (0, common_1.assertParamExists)('getTokenApiAuthTokenPost', 'username', username);
            // verify required parameter 'password' is not null or undefined
            (0, common_1.assertParamExists)('getTokenApiAuthTokenPost', 'password', password);
            const localVarPath = `/api/auth/token`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            const localVarFormParams = new URLSearchParams();
            if (grantType !== undefined) {
                localVarFormParams.set('grant_type', grantType);
            }
            if (username !== undefined) {
                localVarFormParams.set('username', username);
            }
            if (password !== undefined) {
                localVarFormParams.set('password', password);
            }
            if (rememberMe !== undefined) {
                localVarFormParams.set('remember_me', rememberMe);
            }
            if (scope !== undefined) {
                localVarFormParams.set('scope', scope);
            }
            if (clientId !== undefined) {
                localVarFormParams.set('client_id', clientId);
            }
            if (clientSecret !== undefined) {
                localVarFormParams.set('client_secret', clientSecret);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = localVarFormParams.toString();
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Use a valid token to get another token
         * @summary Refresh Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refreshTokenApiAuthRefreshGet: async (options = {}) => {
            const localVarPath = `/api/auth/refresh`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
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
exports.UsersAuthenticationApiAxiosParamCreator = UsersAuthenticationApiAxiosParamCreator;
/**
 * UsersAuthenticationApi - functional programming interface
 * @export
 */
const UsersAuthenticationApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.UsersAuthenticationApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Get Token
         * @param {string} username
         * @param {string} password
         * @param {string} [grantType]
         * @param {boolean} [rememberMe]
         * @param {string} [scope]
         * @param {string} [clientId]
         * @param {string} [clientSecret]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTokenApiAuthTokenPost(username, password, grantType, rememberMe, scope, clientId, clientSecret, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTokenApiAuthTokenPost(username, password, grantType, rememberMe, scope, clientId, clientSecret, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Use a valid token to get another token
         * @summary Refresh Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async refreshTokenApiAuthRefreshGet(options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.refreshTokenApiAuthRefreshGet(options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.UsersAuthenticationApiFp = UsersAuthenticationApiFp;
/**
 * UsersAuthenticationApi - factory interface
 * @export
 */
const UsersAuthenticationApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.UsersAuthenticationApiFp)(configuration);
    return {
        /**
         *
         * @summary Get Token
         * @param {string} username
         * @param {string} password
         * @param {string} [grantType]
         * @param {boolean} [rememberMe]
         * @param {string} [scope]
         * @param {string} [clientId]
         * @param {string} [clientSecret]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTokenApiAuthTokenPost(username, password, grantType, rememberMe, scope, clientId, clientSecret, options) {
            return localVarFp.getTokenApiAuthTokenPost(username, password, grantType, rememberMe, scope, clientId, clientSecret, options).then((request) => request(axios, basePath));
        },
        /**
         * Use a valid token to get another token
         * @summary Refresh Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refreshTokenApiAuthRefreshGet(options) {
            return localVarFp.refreshTokenApiAuthRefreshGet(options).then((request) => request(axios, basePath));
        },
    };
};
exports.UsersAuthenticationApiFactory = UsersAuthenticationApiFactory;
/**
 * UsersAuthenticationApi - object-oriented interface
 * @export
 * @class UsersAuthenticationApi
 * @extends {BaseAPI}
 */
class UsersAuthenticationApi extends base_1.BaseAPI {
    /**
     *
     * @summary Get Token
     * @param {string} username
     * @param {string} password
     * @param {string} [grantType]
     * @param {boolean} [rememberMe]
     * @param {string} [scope]
     * @param {string} [clientId]
     * @param {string} [clientSecret]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersAuthenticationApi
     */
    getTokenApiAuthTokenPost(username, password, grantType, rememberMe, scope, clientId, clientSecret, options) {
        return (0, exports.UsersAuthenticationApiFp)(this.configuration).getTokenApiAuthTokenPost(username, password, grantType, rememberMe, scope, clientId, clientSecret, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Use a valid token to get another token
     * @summary Refresh Token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersAuthenticationApi
     */
    refreshTokenApiAuthRefreshGet(options) {
        return (0, exports.UsersAuthenticationApiFp)(this.configuration).refreshTokenApiAuthRefreshGet(options).then((request) => request(this.axios, this.basePath));
    }
}
exports.UsersAuthenticationApi = UsersAuthenticationApi;
/**
 * UsersCRUDApi - axios parameter creator
 * @export
 */
const UsersCRUDApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Get Logged In User
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLoggedInUserApiUsersSelfGet: async (acceptLanguage, options = {}) => {
            const localVarPath = `/api/users/self`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
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
        /**
         * Resets the User Password
         * @summary Update Password
         * @param {ChangePassword} changePassword
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePasswordApiUsersPasswordPut: async (changePassword, acceptLanguage, options = {}) => {
            // verify required parameter 'changePassword' is not null or undefined
            (0, common_1.assertParamExists)('updatePasswordApiUsersPasswordPut', 'changePassword', changePassword);
            const localVarPath = `/api/users/password`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'PUT' }, baseOptions), options);
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(changePassword, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Update User
         * @param {string} itemId
         * @param {MealieSchemaUserUserUserBase} mealieSchemaUserUserUserBase
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUserApiUsersItemIdPut: async (itemId, mealieSchemaUserUserUserBase, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('updateUserApiUsersItemIdPut', 'itemId', itemId);
            // verify required parameter 'mealieSchemaUserUserUserBase' is not null or undefined
            (0, common_1.assertParamExists)('updateUserApiUsersItemIdPut', 'mealieSchemaUserUserUserBase', mealieSchemaUserUserUserBase);
            const localVarPath = `/api/users/{item_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'PUT' }, baseOptions), options);
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(mealieSchemaUserUserUserBase, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.UsersCRUDApiAxiosParamCreator = UsersCRUDApiAxiosParamCreator;
/**
 * UsersCRUDApi - functional programming interface
 * @export
 */
const UsersCRUDApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.UsersCRUDApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Get Logged In User
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLoggedInUserApiUsersSelfGet(acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLoggedInUserApiUsersSelfGet(acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Resets the User Password
         * @summary Update Password
         * @param {ChangePassword} changePassword
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePasswordApiUsersPasswordPut(changePassword, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updatePasswordApiUsersPasswordPut(changePassword, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Update User
         * @param {string} itemId
         * @param {MealieSchemaUserUserUserBase} mealieSchemaUserUserUserBase
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateUserApiUsersItemIdPut(itemId, mealieSchemaUserUserUserBase, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateUserApiUsersItemIdPut(itemId, mealieSchemaUserUserUserBase, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.UsersCRUDApiFp = UsersCRUDApiFp;
/**
 * UsersCRUDApi - factory interface
 * @export
 */
const UsersCRUDApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.UsersCRUDApiFp)(configuration);
    return {
        /**
         *
         * @summary Get Logged In User
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLoggedInUserApiUsersSelfGet(acceptLanguage, options) {
            return localVarFp.getLoggedInUserApiUsersSelfGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Resets the User Password
         * @summary Update Password
         * @param {ChangePassword} changePassword
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePasswordApiUsersPasswordPut(changePassword, acceptLanguage, options) {
            return localVarFp.updatePasswordApiUsersPasswordPut(changePassword, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Update User
         * @param {string} itemId
         * @param {MealieSchemaUserUserUserBase} mealieSchemaUserUserUserBase
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUserApiUsersItemIdPut(itemId, mealieSchemaUserUserUserBase, acceptLanguage, options) {
            return localVarFp.updateUserApiUsersItemIdPut(itemId, mealieSchemaUserUserUserBase, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.UsersCRUDApiFactory = UsersCRUDApiFactory;
/**
 * UsersCRUDApi - object-oriented interface
 * @export
 * @class UsersCRUDApi
 * @extends {BaseAPI}
 */
class UsersCRUDApi extends base_1.BaseAPI {
    /**
     *
     * @summary Get Logged In User
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersCRUDApi
     */
    getLoggedInUserApiUsersSelfGet(acceptLanguage, options) {
        return (0, exports.UsersCRUDApiFp)(this.configuration).getLoggedInUserApiUsersSelfGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Resets the User Password
     * @summary Update Password
     * @param {ChangePassword} changePassword
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersCRUDApi
     */
    updatePasswordApiUsersPasswordPut(changePassword, acceptLanguage, options) {
        return (0, exports.UsersCRUDApiFp)(this.configuration).updatePasswordApiUsersPasswordPut(changePassword, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Update User
     * @param {string} itemId
     * @param {MealieSchemaUserUserUserBase} mealieSchemaUserUserUserBase
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersCRUDApi
     */
    updateUserApiUsersItemIdPut(itemId, mealieSchemaUserUserUserBase, acceptLanguage, options) {
        return (0, exports.UsersCRUDApiFp)(this.configuration).updateUserApiUsersItemIdPut(itemId, mealieSchemaUserUserUserBase, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.UsersCRUDApi = UsersCRUDApi;
/**
 * UsersFavoritesApi - axios parameter creator
 * @export
 */
const UsersFavoritesApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Adds a Recipe to the users favorites
         * @summary Add Favorite
         * @param {string} id
         * @param {string} slug
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addFavoriteApiUsersIdFavoritesSlugPost: async (id, slug, acceptLanguage, options = {}) => {
            // verify required parameter 'id' is not null or undefined
            (0, common_1.assertParamExists)('addFavoriteApiUsersIdFavoritesSlugPost', 'id', id);
            // verify required parameter 'slug' is not null or undefined
            (0, common_1.assertParamExists)('addFavoriteApiUsersIdFavoritesSlugPost', 'slug', slug);
            const localVarPath = `/api/users/{id}/favorites/{slug}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)))
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
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
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get user\'s favorite recipes
         * @summary Get Favorites
         * @param {string} id
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFavoritesApiUsersIdFavoritesGet: async (id, acceptLanguage, options = {}) => {
            // verify required parameter 'id' is not null or undefined
            (0, common_1.assertParamExists)('getFavoritesApiUsersIdFavoritesGet', 'id', id);
            const localVarPath = `/api/users/{id}/favorites`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
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
        /**
         * Adds a Recipe to the users favorites
         * @summary Remove Favorite
         * @param {string} id
         * @param {string} slug
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeFavoriteApiUsersIdFavoritesSlugDelete: async (id, slug, acceptLanguage, options = {}) => {
            // verify required parameter 'id' is not null or undefined
            (0, common_1.assertParamExists)('removeFavoriteApiUsersIdFavoritesSlugDelete', 'id', id);
            // verify required parameter 'slug' is not null or undefined
            (0, common_1.assertParamExists)('removeFavoriteApiUsersIdFavoritesSlugDelete', 'slug', slug);
            const localVarPath = `/api/users/{id}/favorites/{slug}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)))
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'DELETE' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
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
exports.UsersFavoritesApiAxiosParamCreator = UsersFavoritesApiAxiosParamCreator;
/**
 * UsersFavoritesApi - functional programming interface
 * @export
 */
const UsersFavoritesApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.UsersFavoritesApiAxiosParamCreator)(configuration);
    return {
        /**
         * Adds a Recipe to the users favorites
         * @summary Add Favorite
         * @param {string} id
         * @param {string} slug
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addFavoriteApiUsersIdFavoritesSlugPost(id, slug, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addFavoriteApiUsersIdFavoritesSlugPost(id, slug, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Get user\'s favorite recipes
         * @summary Get Favorites
         * @param {string} id
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFavoritesApiUsersIdFavoritesGet(id, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFavoritesApiUsersIdFavoritesGet(id, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Adds a Recipe to the users favorites
         * @summary Remove Favorite
         * @param {string} id
         * @param {string} slug
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeFavoriteApiUsersIdFavoritesSlugDelete(id, slug, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeFavoriteApiUsersIdFavoritesSlugDelete(id, slug, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.UsersFavoritesApiFp = UsersFavoritesApiFp;
/**
 * UsersFavoritesApi - factory interface
 * @export
 */
const UsersFavoritesApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.UsersFavoritesApiFp)(configuration);
    return {
        /**
         * Adds a Recipe to the users favorites
         * @summary Add Favorite
         * @param {string} id
         * @param {string} slug
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addFavoriteApiUsersIdFavoritesSlugPost(id, slug, acceptLanguage, options) {
            return localVarFp.addFavoriteApiUsersIdFavoritesSlugPost(id, slug, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Get user\'s favorite recipes
         * @summary Get Favorites
         * @param {string} id
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFavoritesApiUsersIdFavoritesGet(id, acceptLanguage, options) {
            return localVarFp.getFavoritesApiUsersIdFavoritesGet(id, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Adds a Recipe to the users favorites
         * @summary Remove Favorite
         * @param {string} id
         * @param {string} slug
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeFavoriteApiUsersIdFavoritesSlugDelete(id, slug, acceptLanguage, options) {
            return localVarFp.removeFavoriteApiUsersIdFavoritesSlugDelete(id, slug, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.UsersFavoritesApiFactory = UsersFavoritesApiFactory;
/**
 * UsersFavoritesApi - object-oriented interface
 * @export
 * @class UsersFavoritesApi
 * @extends {BaseAPI}
 */
class UsersFavoritesApi extends base_1.BaseAPI {
    /**
     * Adds a Recipe to the users favorites
     * @summary Add Favorite
     * @param {string} id
     * @param {string} slug
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersFavoritesApi
     */
    addFavoriteApiUsersIdFavoritesSlugPost(id, slug, acceptLanguage, options) {
        return (0, exports.UsersFavoritesApiFp)(this.configuration).addFavoriteApiUsersIdFavoritesSlugPost(id, slug, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get user\'s favorite recipes
     * @summary Get Favorites
     * @param {string} id
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersFavoritesApi
     */
    getFavoritesApiUsersIdFavoritesGet(id, acceptLanguage, options) {
        return (0, exports.UsersFavoritesApiFp)(this.configuration).getFavoritesApiUsersIdFavoritesGet(id, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Adds a Recipe to the users favorites
     * @summary Remove Favorite
     * @param {string} id
     * @param {string} slug
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersFavoritesApi
     */
    removeFavoriteApiUsersIdFavoritesSlugDelete(id, slug, acceptLanguage, options) {
        return (0, exports.UsersFavoritesApiFp)(this.configuration).removeFavoriteApiUsersIdFavoritesSlugDelete(id, slug, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.UsersFavoritesApi = UsersFavoritesApi;
/**
 * UsersImagesApi - axios parameter creator
 * @export
 */
const UsersImagesApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Updates a User Image
         * @summary Update User Image
         * @param {string} id
         * @param {File} profile
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUserImageApiUsersIdImagePost: async (id, profile, acceptLanguage, options = {}) => {
            // verify required parameter 'id' is not null or undefined
            (0, common_1.assertParamExists)('updateUserImageApiUsersIdImagePost', 'id', id);
            // verify required parameter 'profile' is not null or undefined
            (0, common_1.assertParamExists)('updateUserImageApiUsersIdImagePost', 'profile', profile);
            const localVarPath = `/api/users/{id}/image`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            if (profile !== undefined) {
                localVarFormParams.append('profile', profile);
            }
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = localVarFormParams;
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.UsersImagesApiAxiosParamCreator = UsersImagesApiAxiosParamCreator;
/**
 * UsersImagesApi - functional programming interface
 * @export
 */
const UsersImagesApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.UsersImagesApiAxiosParamCreator)(configuration);
    return {
        /**
         * Updates a User Image
         * @summary Update User Image
         * @param {string} id
         * @param {File} profile
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateUserImageApiUsersIdImagePost(id, profile, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateUserImageApiUsersIdImagePost(id, profile, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.UsersImagesApiFp = UsersImagesApiFp;
/**
 * UsersImagesApi - factory interface
 * @export
 */
const UsersImagesApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.UsersImagesApiFp)(configuration);
    return {
        /**
         * Updates a User Image
         * @summary Update User Image
         * @param {string} id
         * @param {File} profile
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUserImageApiUsersIdImagePost(id, profile, acceptLanguage, options) {
            return localVarFp.updateUserImageApiUsersIdImagePost(id, profile, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.UsersImagesApiFactory = UsersImagesApiFactory;
/**
 * UsersImagesApi - object-oriented interface
 * @export
 * @class UsersImagesApi
 * @extends {BaseAPI}
 */
class UsersImagesApi extends base_1.BaseAPI {
    /**
     * Updates a User Image
     * @summary Update User Image
     * @param {string} id
     * @param {File} profile
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersImagesApi
     */
    updateUserImageApiUsersIdImagePost(id, profile, acceptLanguage, options) {
        return (0, exports.UsersImagesApiFp)(this.configuration).updateUserImageApiUsersIdImagePost(id, profile, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.UsersImagesApi = UsersImagesApi;
/**
 * UsersPasswordsApi - axios parameter creator
 * @export
 */
const UsersPasswordsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Sends an email with a reset link to the user
         * @summary Forgot Password
         * @param {ForgotPassword} forgotPassword
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        forgotPasswordApiUsersForgotPasswordPost: async (forgotPassword, options = {}) => {
            // verify required parameter 'forgotPassword' is not null or undefined
            (0, common_1.assertParamExists)('forgotPasswordApiUsersForgotPasswordPost', 'forgotPassword', forgotPassword);
            const localVarPath = `/api/users/forgot-password`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(forgotPassword, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Resets the user password
         * @summary Reset Password
         * @param {ResetPassword} resetPassword
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetPasswordApiUsersResetPasswordPost: async (resetPassword, options = {}) => {
            // verify required parameter 'resetPassword' is not null or undefined
            (0, common_1.assertParamExists)('resetPasswordApiUsersResetPasswordPost', 'resetPassword', resetPassword);
            const localVarPath = `/api/users/reset-password`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(resetPassword, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.UsersPasswordsApiAxiosParamCreator = UsersPasswordsApiAxiosParamCreator;
/**
 * UsersPasswordsApi - functional programming interface
 * @export
 */
const UsersPasswordsApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.UsersPasswordsApiAxiosParamCreator)(configuration);
    return {
        /**
         * Sends an email with a reset link to the user
         * @summary Forgot Password
         * @param {ForgotPassword} forgotPassword
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async forgotPasswordApiUsersForgotPasswordPost(forgotPassword, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.forgotPasswordApiUsersForgotPasswordPost(forgotPassword, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Resets the user password
         * @summary Reset Password
         * @param {ResetPassword} resetPassword
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resetPasswordApiUsersResetPasswordPost(resetPassword, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetPasswordApiUsersResetPasswordPost(resetPassword, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.UsersPasswordsApiFp = UsersPasswordsApiFp;
/**
 * UsersPasswordsApi - factory interface
 * @export
 */
const UsersPasswordsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.UsersPasswordsApiFp)(configuration);
    return {
        /**
         * Sends an email with a reset link to the user
         * @summary Forgot Password
         * @param {ForgotPassword} forgotPassword
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        forgotPasswordApiUsersForgotPasswordPost(forgotPassword, options) {
            return localVarFp.forgotPasswordApiUsersForgotPasswordPost(forgotPassword, options).then((request) => request(axios, basePath));
        },
        /**
         * Resets the user password
         * @summary Reset Password
         * @param {ResetPassword} resetPassword
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetPasswordApiUsersResetPasswordPost(resetPassword, options) {
            return localVarFp.resetPasswordApiUsersResetPasswordPost(resetPassword, options).then((request) => request(axios, basePath));
        },
    };
};
exports.UsersPasswordsApiFactory = UsersPasswordsApiFactory;
/**
 * UsersPasswordsApi - object-oriented interface
 * @export
 * @class UsersPasswordsApi
 * @extends {BaseAPI}
 */
class UsersPasswordsApi extends base_1.BaseAPI {
    /**
     * Sends an email with a reset link to the user
     * @summary Forgot Password
     * @param {ForgotPassword} forgotPassword
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersPasswordsApi
     */
    forgotPasswordApiUsersForgotPasswordPost(forgotPassword, options) {
        return (0, exports.UsersPasswordsApiFp)(this.configuration).forgotPasswordApiUsersForgotPasswordPost(forgotPassword, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Resets the user password
     * @summary Reset Password
     * @param {ResetPassword} resetPassword
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersPasswordsApi
     */
    resetPasswordApiUsersResetPasswordPost(resetPassword, options) {
        return (0, exports.UsersPasswordsApiFp)(this.configuration).resetPasswordApiUsersResetPasswordPost(resetPassword, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.UsersPasswordsApi = UsersPasswordsApi;
/**
 * UsersRegistrationApi - axios parameter creator
 * @export
 */
const UsersRegistrationApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Register New User
         * @param {CreateUserRegistration} createUserRegistration
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerNewUserApiUsersRegisterPost: async (createUserRegistration, acceptLanguage, options = {}) => {
            // verify required parameter 'createUserRegistration' is not null or undefined
            (0, common_1.assertParamExists)('registerNewUserApiUsersRegisterPost', 'createUserRegistration', createUserRegistration);
            const localVarPath = `/api/users/register`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(createUserRegistration, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.UsersRegistrationApiAxiosParamCreator = UsersRegistrationApiAxiosParamCreator;
/**
 * UsersRegistrationApi - functional programming interface
 * @export
 */
const UsersRegistrationApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.UsersRegistrationApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Register New User
         * @param {CreateUserRegistration} createUserRegistration
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async registerNewUserApiUsersRegisterPost(createUserRegistration, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.registerNewUserApiUsersRegisterPost(createUserRegistration, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.UsersRegistrationApiFp = UsersRegistrationApiFp;
/**
 * UsersRegistrationApi - factory interface
 * @export
 */
const UsersRegistrationApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.UsersRegistrationApiFp)(configuration);
    return {
        /**
         *
         * @summary Register New User
         * @param {CreateUserRegistration} createUserRegistration
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerNewUserApiUsersRegisterPost(createUserRegistration, acceptLanguage, options) {
            return localVarFp.registerNewUserApiUsersRegisterPost(createUserRegistration, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.UsersRegistrationApiFactory = UsersRegistrationApiFactory;
/**
 * UsersRegistrationApi - object-oriented interface
 * @export
 * @class UsersRegistrationApi
 * @extends {BaseAPI}
 */
class UsersRegistrationApi extends base_1.BaseAPI {
    /**
     *
     * @summary Register New User
     * @param {CreateUserRegistration} createUserRegistration
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersRegistrationApi
     */
    registerNewUserApiUsersRegisterPost(createUserRegistration, acceptLanguage, options) {
        return (0, exports.UsersRegistrationApiFp)(this.configuration).registerNewUserApiUsersRegisterPost(createUserRegistration, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.UsersRegistrationApi = UsersRegistrationApi;
/**
 * UsersTokensApi - axios parameter creator
 * @export
 */
const UsersTokensApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Create api_token in the Database
         * @summary Create Api Token
         * @param {LongLiveTokenIn} longLiveTokenIn
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createApiTokenApiUsersApiTokensPost: async (longLiveTokenIn, acceptLanguage, options = {}) => {
            // verify required parameter 'longLiveTokenIn' is not null or undefined
            (0, common_1.assertParamExists)('createApiTokenApiUsersApiTokensPost', 'longLiveTokenIn', longLiveTokenIn);
            const localVarPath = `/api/users/api-tokens`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(longLiveTokenIn, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete api_token from the Database
         * @summary Delete Api Token
         * @param {number} tokenId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteApiTokenApiUsersApiTokensTokenIdDelete: async (tokenId, acceptLanguage, options = {}) => {
            // verify required parameter 'tokenId' is not null or undefined
            (0, common_1.assertParamExists)('deleteApiTokenApiUsersApiTokensTokenIdDelete', 'tokenId', tokenId);
            const localVarPath = `/api/users/api-tokens/{token_id}`
                .replace(`{${"token_id"}}`, encodeURIComponent(String(tokenId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'DELETE' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
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
exports.UsersTokensApiAxiosParamCreator = UsersTokensApiAxiosParamCreator;
/**
 * UsersTokensApi - functional programming interface
 * @export
 */
const UsersTokensApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.UsersTokensApiAxiosParamCreator)(configuration);
    return {
        /**
         * Create api_token in the Database
         * @summary Create Api Token
         * @param {LongLiveTokenIn} longLiveTokenIn
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createApiTokenApiUsersApiTokensPost(longLiveTokenIn, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createApiTokenApiUsersApiTokensPost(longLiveTokenIn, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Delete api_token from the Database
         * @summary Delete Api Token
         * @param {number} tokenId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteApiTokenApiUsersApiTokensTokenIdDelete(tokenId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteApiTokenApiUsersApiTokensTokenIdDelete(tokenId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.UsersTokensApiFp = UsersTokensApiFp;
/**
 * UsersTokensApi - factory interface
 * @export
 */
const UsersTokensApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.UsersTokensApiFp)(configuration);
    return {
        /**
         * Create api_token in the Database
         * @summary Create Api Token
         * @param {LongLiveTokenIn} longLiveTokenIn
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createApiTokenApiUsersApiTokensPost(longLiveTokenIn, acceptLanguage, options) {
            return localVarFp.createApiTokenApiUsersApiTokensPost(longLiveTokenIn, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete api_token from the Database
         * @summary Delete Api Token
         * @param {number} tokenId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteApiTokenApiUsersApiTokensTokenIdDelete(tokenId, acceptLanguage, options) {
            return localVarFp.deleteApiTokenApiUsersApiTokensTokenIdDelete(tokenId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.UsersTokensApiFactory = UsersTokensApiFactory;
/**
 * UsersTokensApi - object-oriented interface
 * @export
 * @class UsersTokensApi
 * @extends {BaseAPI}
 */
class UsersTokensApi extends base_1.BaseAPI {
    /**
     * Create api_token in the Database
     * @summary Create Api Token
     * @param {LongLiveTokenIn} longLiveTokenIn
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersTokensApi
     */
    createApiTokenApiUsersApiTokensPost(longLiveTokenIn, acceptLanguage, options) {
        return (0, exports.UsersTokensApiFp)(this.configuration).createApiTokenApiUsersApiTokensPost(longLiveTokenIn, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Delete api_token from the Database
     * @summary Delete Api Token
     * @param {number} tokenId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersTokensApi
     */
    deleteApiTokenApiUsersApiTokensTokenIdDelete(tokenId, acceptLanguage, options) {
        return (0, exports.UsersTokensApiFp)(this.configuration).deleteApiTokenApiUsersApiTokensTokenIdDelete(tokenId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.UsersTokensApi = UsersTokensApi;
//# sourceMappingURL=users-api.js.map