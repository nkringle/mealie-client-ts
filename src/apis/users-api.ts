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
import {
    ChangePassword, CreateUserRegistration, DeleteTokenResponse,
    ForgotPassword, LongLiveTokenIn, LongLiveTokenOut,
    MealieSchemaUserUserUserBase, OrderDirection,
    ResetPassword,
    UserFavorites,
    UserIn, UserOut, UserPagination
} from "../models";

/**
 * UsersAdminCRUDApi - axios parameter creator
 * @export
 */
export const UsersAdminCRUDApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Create User
         * @param {UserIn} userIn
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUserApiUsersPost: async (userIn: UserIn, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userIn' is not null or undefined
            assertParamExists('createUserApiUsersPost', 'userIn', userIn)
            const localVarPath = `/api/users`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(userIn, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        deleteUserApiUsersItemIdDelete: async (itemId: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('deleteUserApiUsersItemIdDelete', 'itemId', itemId)
            const localVarPath = `/api/users/{item_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

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
        getAllApiUsersGet: async (page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

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
         * @summary Get User
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserApiUsersItemIdGet: async (itemId: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getUserApiUsersItemIdGet', 'itemId', itemId)
            const localVarPath = `/api/users/{item_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

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
 * UsersAdminCRUDApi - functional programming interface
 * @export
 */
export const UsersAdminCRUDApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersAdminCRUDApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Create User
         * @param {UserIn} userIn
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createUserApiUsersPost(userIn: UserIn, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createUserApiUsersPost(userIn, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Removes a user from the database. Must be the current user or a super user
         * @summary Delete User
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteUserApiUsersItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteUserApiUsersItemIdDelete(itemId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async getAllApiUsersGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserPagination>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiUsersGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get User
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserApiUsersItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserApiUsersItemIdGet(itemId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UsersAdminCRUDApi - factory interface
 * @export
 */
export const UsersAdminCRUDApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersAdminCRUDApiFp(configuration)
    return {
        /**
         *
         * @summary Create User
         * @param {UserIn} userIn
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUserApiUsersPost(userIn: UserIn, acceptLanguage?: string, options?: any): AxiosPromise<UserOut> {
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
        deleteUserApiUsersItemIdDelete(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<any> {
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
        getAllApiUsersGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<UserPagination> {
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
        getUserApiUsersItemIdGet(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<UserOut> {
            return localVarFp.getUserApiUsersItemIdGet(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersAdminCRUDApi - object-oriented interface
 * @export
 * @class UsersAdminCRUDApi
 * @extends {BaseAPI}
 */
export class UsersAdminCRUDApi extends BaseAPI {
    /**
     *
     * @summary Create User
     * @param {UserIn} userIn
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersAdminCRUDApi
     */
    public createUserApiUsersPost(userIn: UserIn, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return UsersAdminCRUDApiFp(this.configuration).createUserApiUsersPost(userIn, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public deleteUserApiUsersItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return UsersAdminCRUDApiFp(this.configuration).deleteUserApiUsersItemIdDelete(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getAllApiUsersGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return UsersAdminCRUDApiFp(this.configuration).getAllApiUsersGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getUserApiUsersItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return UsersAdminCRUDApiFp(this.configuration).getUserApiUsersItemIdGet(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * UsersAuthenticationApi - axios parameter creator
 * @export
 */
export const UsersAuthenticationApiAxiosParamCreator = function (configuration?: Configuration) {
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
        getTokenApiAuthTokenPost: async (username: string, password: string, grantType?: string, rememberMe?: boolean, scope?: string, clientId?: string, clientSecret?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'username' is not null or undefined
            assertParamExists('getTokenApiAuthTokenPost', 'username', username)
            // verify required parameter 'password' is not null or undefined
            assertParamExists('getTokenApiAuthTokenPost', 'password', password)
            const localVarPath = `/api/auth/token`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new URLSearchParams();


            if (grantType !== undefined) {
                localVarFormParams.set('grant_type', grantType as any);
            }

            if (username !== undefined) {
                localVarFormParams.set('username', username as any);
            }

            if (password !== undefined) {
                localVarFormParams.set('password', password as any);
            }

            if (rememberMe !== undefined) {
                localVarFormParams.set('remember_me', rememberMe as any);
            }

            if (scope !== undefined) {
                localVarFormParams.set('scope', scope as any);
            }

            if (clientId !== undefined) {
                localVarFormParams.set('client_id', clientId as any);
            }

            if (clientSecret !== undefined) {
                localVarFormParams.set('client_secret', clientSecret as any);
            }


            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams.toString();

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Use a valid token to get another token
         * @summary Refresh Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refreshTokenApiAuthRefreshGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/auth/refresh`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)



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
 * UsersAuthenticationApi - functional programming interface
 * @export
 */
export const UsersAuthenticationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersAuthenticationApiAxiosParamCreator(configuration)
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
        async getTokenApiAuthTokenPost(username: string, password: string, grantType?: string, rememberMe?: boolean, scope?: string, clientId?: string, clientSecret?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTokenApiAuthTokenPost(username, password, grantType, rememberMe, scope, clientId, clientSecret, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Use a valid token to get another token
         * @summary Refresh Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async refreshTokenApiAuthRefreshGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.refreshTokenApiAuthRefreshGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UsersAuthenticationApi - factory interface
 * @export
 */
export const UsersAuthenticationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersAuthenticationApiFp(configuration)
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
        getTokenApiAuthTokenPost(username: string, password: string, grantType?: string, rememberMe?: boolean, scope?: string, clientId?: string, clientSecret?: string, options?: any): AxiosPromise<any> {
            return localVarFp.getTokenApiAuthTokenPost(username, password, grantType, rememberMe, scope, clientId, clientSecret, options).then((request) => request(axios, basePath));
        },
        /**
         * Use a valid token to get another token
         * @summary Refresh Token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refreshTokenApiAuthRefreshGet(options?: any): AxiosPromise<any> {
            return localVarFp.refreshTokenApiAuthRefreshGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersAuthenticationApi - object-oriented interface
 * @export
 * @class UsersAuthenticationApi
 * @extends {BaseAPI}
 */
export class UsersAuthenticationApi extends BaseAPI {
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
    public getTokenApiAuthTokenPost(username: string, password: string, grantType?: string, rememberMe?: boolean, scope?: string, clientId?: string, clientSecret?: string, options?: AxiosRequestConfig) {
        return UsersAuthenticationApiFp(this.configuration).getTokenApiAuthTokenPost(username, password, grantType, rememberMe, scope, clientId, clientSecret, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Use a valid token to get another token
     * @summary Refresh Token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersAuthenticationApi
     */
    public refreshTokenApiAuthRefreshGet(options?: AxiosRequestConfig) {
        return UsersAuthenticationApiFp(this.configuration).refreshTokenApiAuthRefreshGet(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * UsersCRUDApi - axios parameter creator
 * @export
 */
export const UsersCRUDApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Get Logged In User
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLoggedInUserApiUsersSelfGet: async (acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/users/self`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

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
        /**
         * Resets the User Password
         * @summary Update Password
         * @param {ChangePassword} changePassword
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePasswordApiUsersPasswordPut: async (changePassword: ChangePassword, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'changePassword' is not null or undefined
            assertParamExists('updatePasswordApiUsersPasswordPut', 'changePassword', changePassword)
            const localVarPath = `/api/users/password`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(changePassword, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        updateUserApiUsersItemIdPut: async (itemId: string, mealieSchemaUserUserUserBase: MealieSchemaUserUserUserBase, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('updateUserApiUsersItemIdPut', 'itemId', itemId)
            // verify required parameter 'mealieSchemaUserUserUserBase' is not null or undefined
            assertParamExists('updateUserApiUsersItemIdPut', 'mealieSchemaUserUserUserBase', mealieSchemaUserUserUserBase)
            const localVarPath = `/api/users/{item_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(mealieSchemaUserUserUserBase, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersCRUDApi - functional programming interface
 * @export
 */
export const UsersCRUDApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersCRUDApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Get Logged In User
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLoggedInUserApiUsersSelfGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLoggedInUserApiUsersSelfGet(acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Resets the User Password
         * @summary Update Password
         * @param {ChangePassword} changePassword
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePasswordApiUsersPasswordPut(changePassword: ChangePassword, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updatePasswordApiUsersPasswordPut(changePassword, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async updateUserApiUsersItemIdPut(itemId: string, mealieSchemaUserUserUserBase: MealieSchemaUserUserUserBase, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateUserApiUsersItemIdPut(itemId, mealieSchemaUserUserUserBase, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UsersCRUDApi - factory interface
 * @export
 */
export const UsersCRUDApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersCRUDApiFp(configuration)
    return {
        /**
         *
         * @summary Get Logged In User
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLoggedInUserApiUsersSelfGet(acceptLanguage?: string, options?: any): AxiosPromise<UserOut> {
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
        updatePasswordApiUsersPasswordPut(changePassword: ChangePassword, acceptLanguage?: string, options?: any): AxiosPromise<any> {
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
        updateUserApiUsersItemIdPut(itemId: string, mealieSchemaUserUserUserBase: MealieSchemaUserUserUserBase, acceptLanguage?: string, options?: any): AxiosPromise<any> {
            return localVarFp.updateUserApiUsersItemIdPut(itemId, mealieSchemaUserUserUserBase, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersCRUDApi - object-oriented interface
 * @export
 * @class UsersCRUDApi
 * @extends {BaseAPI}
 */
export class UsersCRUDApi extends BaseAPI {
    /**
     *
     * @summary Get Logged In User
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersCRUDApi
     */
    public getLoggedInUserApiUsersSelfGet(acceptLanguage?: string, options?: AxiosRequestConfig) {
        return UsersCRUDApiFp(this.configuration).getLoggedInUserApiUsersSelfGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public updatePasswordApiUsersPasswordPut(changePassword: ChangePassword, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return UsersCRUDApiFp(this.configuration).updatePasswordApiUsersPasswordPut(changePassword, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public updateUserApiUsersItemIdPut(itemId: string, mealieSchemaUserUserUserBase: MealieSchemaUserUserUserBase, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return UsersCRUDApiFp(this.configuration).updateUserApiUsersItemIdPut(itemId, mealieSchemaUserUserUserBase, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * UsersFavoritesApi - axios parameter creator
 * @export
 */
export const UsersFavoritesApiAxiosParamCreator = function (configuration?: Configuration) {
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
        addFavoriteApiUsersIdFavoritesSlugPost: async (id: string, slug: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('addFavoriteApiUsersIdFavoritesSlugPost', 'id', id)
            // verify required parameter 'slug' is not null or undefined
            assertParamExists('addFavoriteApiUsersIdFavoritesSlugPost', 'slug', slug)
            const localVarPath = `/api/users/{id}/favorites/{slug}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)))
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
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



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
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
        getFavoritesApiUsersIdFavoritesGet: async (id: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getFavoritesApiUsersIdFavoritesGet', 'id', id)
            const localVarPath = `/api/users/{id}/favorites`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

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
        /**
         * Adds a Recipe to the users favorites
         * @summary Remove Favorite
         * @param {string} id
         * @param {string} slug
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeFavoriteApiUsersIdFavoritesSlugDelete: async (id: string, slug: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('removeFavoriteApiUsersIdFavoritesSlugDelete', 'id', id)
            // verify required parameter 'slug' is not null or undefined
            assertParamExists('removeFavoriteApiUsersIdFavoritesSlugDelete', 'slug', slug)
            const localVarPath = `/api/users/{id}/favorites/{slug}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)))
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

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
 * UsersFavoritesApi - functional programming interface
 * @export
 */
export const UsersFavoritesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersFavoritesApiAxiosParamCreator(configuration)
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
        async addFavoriteApiUsersIdFavoritesSlugPost(id: string, slug: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addFavoriteApiUsersIdFavoritesSlugPost(id, slug, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get user\'s favorite recipes
         * @summary Get Favorites
         * @param {string} id
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFavoritesApiUsersIdFavoritesGet(id: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserFavorites>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFavoritesApiUsersIdFavoritesGet(id, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
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
        async removeFavoriteApiUsersIdFavoritesSlugDelete(id: string, slug: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeFavoriteApiUsersIdFavoritesSlugDelete(id, slug, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UsersFavoritesApi - factory interface
 * @export
 */
export const UsersFavoritesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersFavoritesApiFp(configuration)
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
        addFavoriteApiUsersIdFavoritesSlugPost(id: string, slug: string, acceptLanguage?: string, options?: any): AxiosPromise<any> {
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
        getFavoritesApiUsersIdFavoritesGet(id: string, acceptLanguage?: string, options?: any): AxiosPromise<UserFavorites> {
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
        removeFavoriteApiUsersIdFavoritesSlugDelete(id: string, slug: string, acceptLanguage?: string, options?: any): AxiosPromise<any> {
            return localVarFp.removeFavoriteApiUsersIdFavoritesSlugDelete(id, slug, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersFavoritesApi - object-oriented interface
 * @export
 * @class UsersFavoritesApi
 * @extends {BaseAPI}
 */
export class UsersFavoritesApi extends BaseAPI {
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
    public addFavoriteApiUsersIdFavoritesSlugPost(id: string, slug: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return UsersFavoritesApiFp(this.configuration).addFavoriteApiUsersIdFavoritesSlugPost(id, slug, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public getFavoritesApiUsersIdFavoritesGet(id: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return UsersFavoritesApiFp(this.configuration).getFavoritesApiUsersIdFavoritesGet(id, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public removeFavoriteApiUsersIdFavoritesSlugDelete(id: string, slug: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return UsersFavoritesApiFp(this.configuration).removeFavoriteApiUsersIdFavoritesSlugDelete(id, slug, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * UsersImagesApi - axios parameter creator
 * @export
 */
export const UsersImagesApiAxiosParamCreator = function (configuration?: Configuration) {
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
        updateUserImageApiUsersIdImagePost: async (id: string, profile: File, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateUserImageApiUsersIdImagePost', 'id', id)
            // verify required parameter 'profile' is not null or undefined
            assertParamExists('updateUserImageApiUsersIdImagePost', 'profile', profile)
            const localVarPath = `/api/users/{id}/image`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }


            if (profile !== undefined) {
                localVarFormParams.append('profile', profile as any);
            }


            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersImagesApi - functional programming interface
 * @export
 */
export const UsersImagesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersImagesApiAxiosParamCreator(configuration)
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
        async updateUserImageApiUsersIdImagePost(id: string, profile: File, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateUserImageApiUsersIdImagePost(id, profile, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UsersImagesApi - factory interface
 * @export
 */
export const UsersImagesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersImagesApiFp(configuration)
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
        updateUserImageApiUsersIdImagePost(id: string, profile: File, acceptLanguage?: string, options?: any): AxiosPromise<any> {
            return localVarFp.updateUserImageApiUsersIdImagePost(id, profile, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersImagesApi - object-oriented interface
 * @export
 * @class UsersImagesApi
 * @extends {BaseAPI}
 */
export class UsersImagesApi extends BaseAPI {
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
    public updateUserImageApiUsersIdImagePost(id: string, profile: File, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return UsersImagesApiFp(this.configuration).updateUserImageApiUsersIdImagePost(id, profile, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * UsersPasswordsApi - axios parameter creator
 * @export
 */
export const UsersPasswordsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Sends an email with a reset link to the user
         * @summary Forgot Password
         * @param {ForgotPassword} forgotPassword
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        forgotPasswordApiUsersForgotPasswordPost: async (forgotPassword: ForgotPassword, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'forgotPassword' is not null or undefined
            assertParamExists('forgotPasswordApiUsersForgotPasswordPost', 'forgotPassword', forgotPassword)
            const localVarPath = `/api/users/forgot-password`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;



            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(forgotPassword, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        resetPasswordApiUsersResetPasswordPost: async (resetPassword: ResetPassword, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'resetPassword' is not null or undefined
            assertParamExists('resetPasswordApiUsersResetPasswordPost', 'resetPassword', resetPassword)
            const localVarPath = `/api/users/reset-password`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;



            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(resetPassword, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersPasswordsApi - functional programming interface
 * @export
 */
export const UsersPasswordsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersPasswordsApiAxiosParamCreator(configuration)
    return {
        /**
         * Sends an email with a reset link to the user
         * @summary Forgot Password
         * @param {ForgotPassword} forgotPassword
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async forgotPasswordApiUsersForgotPasswordPost(forgotPassword: ForgotPassword, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.forgotPasswordApiUsersForgotPasswordPost(forgotPassword, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Resets the user password
         * @summary Reset Password
         * @param {ResetPassword} resetPassword
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resetPasswordApiUsersResetPasswordPost(resetPassword: ResetPassword, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetPasswordApiUsersResetPasswordPost(resetPassword, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UsersPasswordsApi - factory interface
 * @export
 */
export const UsersPasswordsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersPasswordsApiFp(configuration)
    return {
        /**
         * Sends an email with a reset link to the user
         * @summary Forgot Password
         * @param {ForgotPassword} forgotPassword
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        forgotPasswordApiUsersForgotPasswordPost(forgotPassword: ForgotPassword, options?: any): AxiosPromise<any> {
            return localVarFp.forgotPasswordApiUsersForgotPasswordPost(forgotPassword, options).then((request) => request(axios, basePath));
        },
        /**
         * Resets the user password
         * @summary Reset Password
         * @param {ResetPassword} resetPassword
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetPasswordApiUsersResetPasswordPost(resetPassword: ResetPassword, options?: any): AxiosPromise<any> {
            return localVarFp.resetPasswordApiUsersResetPasswordPost(resetPassword, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersPasswordsApi - object-oriented interface
 * @export
 * @class UsersPasswordsApi
 * @extends {BaseAPI}
 */
export class UsersPasswordsApi extends BaseAPI {
    /**
     * Sends an email with a reset link to the user
     * @summary Forgot Password
     * @param {ForgotPassword} forgotPassword
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersPasswordsApi
     */
    public forgotPasswordApiUsersForgotPasswordPost(forgotPassword: ForgotPassword, options?: AxiosRequestConfig) {
        return UsersPasswordsApiFp(this.configuration).forgotPasswordApiUsersForgotPasswordPost(forgotPassword, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Resets the user password
     * @summary Reset Password
     * @param {ResetPassword} resetPassword
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersPasswordsApi
     */
    public resetPasswordApiUsersResetPasswordPost(resetPassword: ResetPassword, options?: AxiosRequestConfig) {
        return UsersPasswordsApiFp(this.configuration).resetPasswordApiUsersResetPasswordPost(resetPassword, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * UsersRegistrationApi - axios parameter creator
 * @export
 */
export const UsersRegistrationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Register New User
         * @param {CreateUserRegistration} createUserRegistration
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerNewUserApiUsersRegisterPost: async (createUserRegistration: CreateUserRegistration, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createUserRegistration' is not null or undefined
            assertParamExists('registerNewUserApiUsersRegisterPost', 'createUserRegistration', createUserRegistration)
            const localVarPath = `/api/users/register`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createUserRegistration, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersRegistrationApi - functional programming interface
 * @export
 */
export const UsersRegistrationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersRegistrationApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Register New User
         * @param {CreateUserRegistration} createUserRegistration
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async registerNewUserApiUsersRegisterPost(createUserRegistration: CreateUserRegistration, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.registerNewUserApiUsersRegisterPost(createUserRegistration, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UsersRegistrationApi - factory interface
 * @export
 */
export const UsersRegistrationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersRegistrationApiFp(configuration)
    return {
        /**
         *
         * @summary Register New User
         * @param {CreateUserRegistration} createUserRegistration
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerNewUserApiUsersRegisterPost(createUserRegistration: CreateUserRegistration, acceptLanguage?: string, options?: any): AxiosPromise<UserOut> {
            return localVarFp.registerNewUserApiUsersRegisterPost(createUserRegistration, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersRegistrationApi - object-oriented interface
 * @export
 * @class UsersRegistrationApi
 * @extends {BaseAPI}
 */
export class UsersRegistrationApi extends BaseAPI {
    /**
     *
     * @summary Register New User
     * @param {CreateUserRegistration} createUserRegistration
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersRegistrationApi
     */
    public registerNewUserApiUsersRegisterPost(createUserRegistration: CreateUserRegistration, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return UsersRegistrationApiFp(this.configuration).registerNewUserApiUsersRegisterPost(createUserRegistration, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * UsersTokensApi - axios parameter creator
 * @export
 */
export const UsersTokensApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create api_token in the Database
         * @summary Create Api Token
         * @param {LongLiveTokenIn} longLiveTokenIn
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createApiTokenApiUsersApiTokensPost: async (longLiveTokenIn: LongLiveTokenIn, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'longLiveTokenIn' is not null or undefined
            assertParamExists('createApiTokenApiUsersApiTokensPost', 'longLiveTokenIn', longLiveTokenIn)
            const localVarPath = `/api/users/api-tokens`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(longLiveTokenIn, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
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
        deleteApiTokenApiUsersApiTokensTokenIdDelete: async (tokenId: number, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tokenId' is not null or undefined
            assertParamExists('deleteApiTokenApiUsersApiTokensTokenIdDelete', 'tokenId', tokenId)
            const localVarPath = `/api/users/api-tokens/{token_id}`
                .replace(`{${"token_id"}}`, encodeURIComponent(String(tokenId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

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
 * UsersTokensApi - functional programming interface
 * @export
 */
export const UsersTokensApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersTokensApiAxiosParamCreator(configuration)
    return {
        /**
         * Create api_token in the Database
         * @summary Create Api Token
         * @param {LongLiveTokenIn} longLiveTokenIn
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createApiTokenApiUsersApiTokensPost(longLiveTokenIn: LongLiveTokenIn, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LongLiveTokenOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createApiTokenApiUsersApiTokensPost(longLiveTokenIn, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete api_token from the Database
         * @summary Delete Api Token
         * @param {number} tokenId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteApiTokenApiUsersApiTokensTokenIdDelete(tokenId: number, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteTokenResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteApiTokenApiUsersApiTokensTokenIdDelete(tokenId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UsersTokensApi - factory interface
 * @export
 */
export const UsersTokensApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersTokensApiFp(configuration)
    return {
        /**
         * Create api_token in the Database
         * @summary Create Api Token
         * @param {LongLiveTokenIn} longLiveTokenIn
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createApiTokenApiUsersApiTokensPost(longLiveTokenIn: LongLiveTokenIn, acceptLanguage?: string, options?: any): AxiosPromise<LongLiveTokenOut> {
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
        deleteApiTokenApiUsersApiTokensTokenIdDelete(tokenId: number, acceptLanguage?: string, options?: any): AxiosPromise<DeleteTokenResponse> {
            return localVarFp.deleteApiTokenApiUsersApiTokensTokenIdDelete(tokenId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersTokensApi - object-oriented interface
 * @export
 * @class UsersTokensApi
 * @extends {BaseAPI}
 */
export class UsersTokensApi extends BaseAPI {
    /**
     * Create api_token in the Database
     * @summary Create Api Token
     * @param {LongLiveTokenIn} longLiveTokenIn
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersTokensApi
     */
    public createApiTokenApiUsersApiTokensPost(longLiveTokenIn: LongLiveTokenIn, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return UsersTokensApiFp(this.configuration).createApiTokenApiUsersApiTokensPost(longLiveTokenIn, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    public deleteApiTokenApiUsersApiTokensTokenIdDelete(tokenId: number, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return UsersTokensApiFp(this.configuration).deleteApiTokenApiUsersApiTokensTokenIdDelete(tokenId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
