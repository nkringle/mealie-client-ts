import { Configuration } from "../common/configuration";
import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";
import { BaseAPI, RequestArgs } from "../common/base";
import { ChangePassword, CreateUserRegistration, DeleteTokenResponse, ForgotPassword, LongLiveTokenIn, LongLiveTokenOut, MealieSchemaUserUserUserBase, OrderDirection, ResetPassword, UserFavorites, UserIn, UserOut, UserPagination } from "../models";
/**
 * UsersAdminCRUDApi - axios parameter creator
 * @export
 */
export declare const UsersAdminCRUDApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Create User
     * @param {UserIn} userIn
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUserApiUsersPost: (userIn: UserIn, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Removes a user from the database. Must be the current user or a super user
     * @summary Delete User
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteUserApiUsersItemIdDelete: (itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
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
    getAllApiUsersGet: (page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get User
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserApiUsersItemIdGet: (itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * UsersAdminCRUDApi - functional programming interface
 * @export
 */
export declare const UsersAdminCRUDApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Create User
     * @param {UserIn} userIn
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUserApiUsersPost(userIn: UserIn, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserOut>>;
    /**
     * Removes a user from the database. Must be the current user or a super user
     * @summary Delete User
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteUserApiUsersItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
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
    getAllApiUsersGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserPagination>>;
    /**
     *
     * @summary Get User
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserApiUsersItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserOut>>;
};
/**
 * UsersAdminCRUDApi - factory interface
 * @export
 */
export declare const UsersAdminCRUDApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Create User
     * @param {UserIn} userIn
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUserApiUsersPost(userIn: UserIn, acceptLanguage?: string, options?: any): AxiosPromise<UserOut>;
    /**
     * Removes a user from the database. Must be the current user or a super user
     * @summary Delete User
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteUserApiUsersItemIdDelete(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<any>;
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
    getAllApiUsersGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<UserPagination>;
    /**
     *
     * @summary Get User
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserApiUsersItemIdGet(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<UserOut>;
};
/**
 * UsersAdminCRUDApi - object-oriented interface
 * @export
 * @class UsersAdminCRUDApi
 * @extends {BaseAPI}
 */
export declare class UsersAdminCRUDApi extends BaseAPI {
    /**
     *
     * @summary Create User
     * @param {UserIn} userIn
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersAdminCRUDApi
     */
    createUserApiUsersPost(userIn: UserIn, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<UserOut, any>>;
    /**
     * Removes a user from the database. Must be the current user or a super user
     * @summary Delete User
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersAdminCRUDApi
     */
    deleteUserApiUsersItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
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
    getAllApiUsersGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<UserPagination, any>>;
    /**
     *
     * @summary Get User
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersAdminCRUDApi
     */
    getUserApiUsersItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<UserOut, any>>;
}
/**
 * UsersAuthenticationApi - axios parameter creator
 * @export
 */
export declare const UsersAuthenticationApiAxiosParamCreator: (configuration?: Configuration) => {
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
    getTokenApiAuthTokenPost: (username: string, password: string, grantType?: string, rememberMe?: boolean, scope?: string, clientId?: string, clientSecret?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Use a valid token to get another token
     * @summary Refresh Token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    refreshTokenApiAuthRefreshGet: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * UsersAuthenticationApi - functional programming interface
 * @export
 */
export declare const UsersAuthenticationApiFp: (configuration?: Configuration) => {
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
    getTokenApiAuthTokenPost(username: string, password: string, grantType?: string, rememberMe?: boolean, scope?: string, clientId?: string, clientSecret?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     * Use a valid token to get another token
     * @summary Refresh Token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    refreshTokenApiAuthRefreshGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
};
/**
 * UsersAuthenticationApi - factory interface
 * @export
 */
export declare const UsersAuthenticationApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
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
    getTokenApiAuthTokenPost(username: string, password: string, grantType?: string, rememberMe?: boolean, scope?: string, clientId?: string, clientSecret?: string, options?: any): AxiosPromise<any>;
    /**
     * Use a valid token to get another token
     * @summary Refresh Token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    refreshTokenApiAuthRefreshGet(options?: any): AxiosPromise<any>;
};
/**
 * UsersAuthenticationApi - object-oriented interface
 * @export
 * @class UsersAuthenticationApi
 * @extends {BaseAPI}
 */
export declare class UsersAuthenticationApi extends BaseAPI {
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
    getTokenApiAuthTokenPost(username: string, password: string, grantType?: string, rememberMe?: boolean, scope?: string, clientId?: string, clientSecret?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Use a valid token to get another token
     * @summary Refresh Token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersAuthenticationApi
     */
    refreshTokenApiAuthRefreshGet(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
}
/**
 * UsersCRUDApi - axios parameter creator
 * @export
 */
export declare const UsersCRUDApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get Logged In User
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLoggedInUserApiUsersSelfGet: (acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Resets the User Password
     * @summary Update Password
     * @param {ChangePassword} changePassword
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatePasswordApiUsersPasswordPut: (changePassword: ChangePassword, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Update User
     * @param {string} itemId
     * @param {MealieSchemaUserUserUserBase} mealieSchemaUserUserUserBase
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUserApiUsersItemIdPut: (itemId: string, mealieSchemaUserUserUserBase: MealieSchemaUserUserUserBase, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * UsersCRUDApi - functional programming interface
 * @export
 */
export declare const UsersCRUDApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get Logged In User
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLoggedInUserApiUsersSelfGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserOut>>;
    /**
     * Resets the User Password
     * @summary Update Password
     * @param {ChangePassword} changePassword
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatePasswordApiUsersPasswordPut(changePassword: ChangePassword, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     *
     * @summary Update User
     * @param {string} itemId
     * @param {MealieSchemaUserUserUserBase} mealieSchemaUserUserUserBase
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUserApiUsersItemIdPut(itemId: string, mealieSchemaUserUserUserBase: MealieSchemaUserUserUserBase, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
};
/**
 * UsersCRUDApi - factory interface
 * @export
 */
export declare const UsersCRUDApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Get Logged In User
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLoggedInUserApiUsersSelfGet(acceptLanguage?: string, options?: any): AxiosPromise<UserOut>;
    /**
     * Resets the User Password
     * @summary Update Password
     * @param {ChangePassword} changePassword
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatePasswordApiUsersPasswordPut(changePassword: ChangePassword, acceptLanguage?: string, options?: any): AxiosPromise<any>;
    /**
     *
     * @summary Update User
     * @param {string} itemId
     * @param {MealieSchemaUserUserUserBase} mealieSchemaUserUserUserBase
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUserApiUsersItemIdPut(itemId: string, mealieSchemaUserUserUserBase: MealieSchemaUserUserUserBase, acceptLanguage?: string, options?: any): AxiosPromise<any>;
};
/**
 * UsersCRUDApi - object-oriented interface
 * @export
 * @class UsersCRUDApi
 * @extends {BaseAPI}
 */
export declare class UsersCRUDApi extends BaseAPI {
    /**
     *
     * @summary Get Logged In User
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersCRUDApi
     */
    getLoggedInUserApiUsersSelfGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<UserOut, any>>;
    /**
     * Resets the User Password
     * @summary Update Password
     * @param {ChangePassword} changePassword
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersCRUDApi
     */
    updatePasswordApiUsersPasswordPut(changePassword: ChangePassword, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
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
    updateUserApiUsersItemIdPut(itemId: string, mealieSchemaUserUserUserBase: MealieSchemaUserUserUserBase, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
}
/**
 * UsersFavoritesApi - axios parameter creator
 * @export
 */
export declare const UsersFavoritesApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Adds a Recipe to the users favorites
     * @summary Add Favorite
     * @param {string} id
     * @param {string} slug
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addFavoriteApiUsersIdFavoritesSlugPost: (id: string, slug: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get user\'s favorite recipes
     * @summary Get Favorites
     * @param {string} id
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFavoritesApiUsersIdFavoritesGet: (id: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Adds a Recipe to the users favorites
     * @summary Remove Favorite
     * @param {string} id
     * @param {string} slug
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeFavoriteApiUsersIdFavoritesSlugDelete: (id: string, slug: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * UsersFavoritesApi - functional programming interface
 * @export
 */
export declare const UsersFavoritesApiFp: (configuration?: Configuration) => {
    /**
     * Adds a Recipe to the users favorites
     * @summary Add Favorite
     * @param {string} id
     * @param {string} slug
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addFavoriteApiUsersIdFavoritesSlugPost(id: string, slug: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     * Get user\'s favorite recipes
     * @summary Get Favorites
     * @param {string} id
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFavoritesApiUsersIdFavoritesGet(id: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserFavorites>>;
    /**
     * Adds a Recipe to the users favorites
     * @summary Remove Favorite
     * @param {string} id
     * @param {string} slug
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeFavoriteApiUsersIdFavoritesSlugDelete(id: string, slug: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
};
/**
 * UsersFavoritesApi - factory interface
 * @export
 */
export declare const UsersFavoritesApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Adds a Recipe to the users favorites
     * @summary Add Favorite
     * @param {string} id
     * @param {string} slug
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addFavoriteApiUsersIdFavoritesSlugPost(id: string, slug: string, acceptLanguage?: string, options?: any): AxiosPromise<any>;
    /**
     * Get user\'s favorite recipes
     * @summary Get Favorites
     * @param {string} id
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFavoritesApiUsersIdFavoritesGet(id: string, acceptLanguage?: string, options?: any): AxiosPromise<UserFavorites>;
    /**
     * Adds a Recipe to the users favorites
     * @summary Remove Favorite
     * @param {string} id
     * @param {string} slug
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeFavoriteApiUsersIdFavoritesSlugDelete(id: string, slug: string, acceptLanguage?: string, options?: any): AxiosPromise<any>;
};
/**
 * UsersFavoritesApi - object-oriented interface
 * @export
 * @class UsersFavoritesApi
 * @extends {BaseAPI}
 */
export declare class UsersFavoritesApi extends BaseAPI {
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
    addFavoriteApiUsersIdFavoritesSlugPost(id: string, slug: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Get user\'s favorite recipes
     * @summary Get Favorites
     * @param {string} id
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersFavoritesApi
     */
    getFavoritesApiUsersIdFavoritesGet(id: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<UserFavorites, any>>;
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
    removeFavoriteApiUsersIdFavoritesSlugDelete(id: string, slug: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
}
/**
 * UsersImagesApi - axios parameter creator
 * @export
 */
export declare const UsersImagesApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Updates a User Image
     * @summary Update User Image
     * @param {string} id
     * @param {File} profile
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUserImageApiUsersIdImagePost: (id: string, profile: File, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * UsersImagesApi - functional programming interface
 * @export
 */
export declare const UsersImagesApiFp: (configuration?: Configuration) => {
    /**
     * Updates a User Image
     * @summary Update User Image
     * @param {string} id
     * @param {File} profile
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUserImageApiUsersIdImagePost(id: string, profile: File, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
};
/**
 * UsersImagesApi - factory interface
 * @export
 */
export declare const UsersImagesApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Updates a User Image
     * @summary Update User Image
     * @param {string} id
     * @param {File} profile
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUserImageApiUsersIdImagePost(id: string, profile: File, acceptLanguage?: string, options?: any): AxiosPromise<any>;
};
/**
 * UsersImagesApi - object-oriented interface
 * @export
 * @class UsersImagesApi
 * @extends {BaseAPI}
 */
export declare class UsersImagesApi extends BaseAPI {
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
    updateUserImageApiUsersIdImagePost(id: string, profile: File, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
}
/**
 * UsersPasswordsApi - axios parameter creator
 * @export
 */
export declare const UsersPasswordsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Sends an email with a reset link to the user
     * @summary Forgot Password
     * @param {ForgotPassword} forgotPassword
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    forgotPasswordApiUsersForgotPasswordPost: (forgotPassword: ForgotPassword, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Resets the user password
     * @summary Reset Password
     * @param {ResetPassword} resetPassword
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    resetPasswordApiUsersResetPasswordPost: (resetPassword: ResetPassword, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * UsersPasswordsApi - functional programming interface
 * @export
 */
export declare const UsersPasswordsApiFp: (configuration?: Configuration) => {
    /**
     * Sends an email with a reset link to the user
     * @summary Forgot Password
     * @param {ForgotPassword} forgotPassword
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    forgotPasswordApiUsersForgotPasswordPost(forgotPassword: ForgotPassword, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     * Resets the user password
     * @summary Reset Password
     * @param {ResetPassword} resetPassword
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    resetPasswordApiUsersResetPasswordPost(resetPassword: ResetPassword, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
};
/**
 * UsersPasswordsApi - factory interface
 * @export
 */
export declare const UsersPasswordsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Sends an email with a reset link to the user
     * @summary Forgot Password
     * @param {ForgotPassword} forgotPassword
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    forgotPasswordApiUsersForgotPasswordPost(forgotPassword: ForgotPassword, options?: any): AxiosPromise<any>;
    /**
     * Resets the user password
     * @summary Reset Password
     * @param {ResetPassword} resetPassword
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    resetPasswordApiUsersResetPasswordPost(resetPassword: ResetPassword, options?: any): AxiosPromise<any>;
};
/**
 * UsersPasswordsApi - object-oriented interface
 * @export
 * @class UsersPasswordsApi
 * @extends {BaseAPI}
 */
export declare class UsersPasswordsApi extends BaseAPI {
    /**
     * Sends an email with a reset link to the user
     * @summary Forgot Password
     * @param {ForgotPassword} forgotPassword
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersPasswordsApi
     */
    forgotPasswordApiUsersForgotPasswordPost(forgotPassword: ForgotPassword, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Resets the user password
     * @summary Reset Password
     * @param {ResetPassword} resetPassword
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersPasswordsApi
     */
    resetPasswordApiUsersResetPasswordPost(resetPassword: ResetPassword, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
}
/**
 * UsersRegistrationApi - axios parameter creator
 * @export
 */
export declare const UsersRegistrationApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Register New User
     * @param {CreateUserRegistration} createUserRegistration
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    registerNewUserApiUsersRegisterPost: (createUserRegistration: CreateUserRegistration, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * UsersRegistrationApi - functional programming interface
 * @export
 */
export declare const UsersRegistrationApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Register New User
     * @param {CreateUserRegistration} createUserRegistration
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    registerNewUserApiUsersRegisterPost(createUserRegistration: CreateUserRegistration, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserOut>>;
};
/**
 * UsersRegistrationApi - factory interface
 * @export
 */
export declare const UsersRegistrationApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Register New User
     * @param {CreateUserRegistration} createUserRegistration
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    registerNewUserApiUsersRegisterPost(createUserRegistration: CreateUserRegistration, acceptLanguage?: string, options?: any): AxiosPromise<UserOut>;
};
/**
 * UsersRegistrationApi - object-oriented interface
 * @export
 * @class UsersRegistrationApi
 * @extends {BaseAPI}
 */
export declare class UsersRegistrationApi extends BaseAPI {
    /**
     *
     * @summary Register New User
     * @param {CreateUserRegistration} createUserRegistration
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersRegistrationApi
     */
    registerNewUserApiUsersRegisterPost(createUserRegistration: CreateUserRegistration, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<UserOut, any>>;
}
/**
 * UsersTokensApi - axios parameter creator
 * @export
 */
export declare const UsersTokensApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Create api_token in the Database
     * @summary Create Api Token
     * @param {LongLiveTokenIn} longLiveTokenIn
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createApiTokenApiUsersApiTokensPost: (longLiveTokenIn: LongLiveTokenIn, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Delete api_token from the Database
     * @summary Delete Api Token
     * @param {number} tokenId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteApiTokenApiUsersApiTokensTokenIdDelete: (tokenId: number, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * UsersTokensApi - functional programming interface
 * @export
 */
export declare const UsersTokensApiFp: (configuration?: Configuration) => {
    /**
     * Create api_token in the Database
     * @summary Create Api Token
     * @param {LongLiveTokenIn} longLiveTokenIn
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createApiTokenApiUsersApiTokensPost(longLiveTokenIn: LongLiveTokenIn, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LongLiveTokenOut>>;
    /**
     * Delete api_token from the Database
     * @summary Delete Api Token
     * @param {number} tokenId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteApiTokenApiUsersApiTokensTokenIdDelete(tokenId: number, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteTokenResponse>>;
};
/**
 * UsersTokensApi - factory interface
 * @export
 */
export declare const UsersTokensApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Create api_token in the Database
     * @summary Create Api Token
     * @param {LongLiveTokenIn} longLiveTokenIn
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createApiTokenApiUsersApiTokensPost(longLiveTokenIn: LongLiveTokenIn, acceptLanguage?: string, options?: any): AxiosPromise<LongLiveTokenOut>;
    /**
     * Delete api_token from the Database
     * @summary Delete Api Token
     * @param {number} tokenId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteApiTokenApiUsersApiTokensTokenIdDelete(tokenId: number, acceptLanguage?: string, options?: any): AxiosPromise<DeleteTokenResponse>;
};
/**
 * UsersTokensApi - object-oriented interface
 * @export
 * @class UsersTokensApi
 * @extends {BaseAPI}
 */
export declare class UsersTokensApi extends BaseAPI {
    /**
     * Create api_token in the Database
     * @summary Create Api Token
     * @param {LongLiveTokenIn} longLiveTokenIn
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersTokensApi
     */
    createApiTokenApiUsersApiTokensPost(longLiveTokenIn: LongLiveTokenIn, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<LongLiveTokenOut, any>>;
    /**
     * Delete api_token from the Database
     * @summary Delete Api Token
     * @param {number} tokenId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersTokensApi
     */
    deleteApiTokenApiUsersApiTokensTokenIdDelete(tokenId: number, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<DeleteTokenResponse, any>>;
}
//# sourceMappingURL=users-api.d.ts.map