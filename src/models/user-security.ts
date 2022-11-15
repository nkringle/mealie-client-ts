import {RecipeSummary} from "./recipe";
import {LongLiveTokenOut} from "./app-backups-admin";

/**
 *
 * @export
 * @interface ChangePassword
 */
export interface ChangePassword {
    /**
     *
     * @type {string}
     * @memberof ChangePassword
     */
    'currentPassword': string;
    /**
     *
     * @type {string}
     * @memberof ChangePassword
     */
    'newPassword': string;
}
/**
 *
 * @export
 * @interface CreateInviteToken
 */
export interface CreateInviteToken {
    /**
     *
     * @type {number}
     * @memberof CreateInviteToken
     */
    'uses': number;
}
/**
 *
 * @export
 * @interface CreateUserRegistration
 */
export interface CreateUserRegistration {
    /**
     *
     * @type {string}
     * @memberof CreateUserRegistration
     */
    'group'?: string;
    /**
     *
     * @type {string}
     * @memberof CreateUserRegistration
     */
    'groupToken'?: string;
    /**
     *
     * @type {string}
     * @memberof CreateUserRegistration
     */
    'email': string;
    /**
     *
     * @type {string}
     * @memberof CreateUserRegistration
     */
    'username': string;
    /**
     *
     * @type {string}
     * @memberof CreateUserRegistration
     */
    'password': string;
    /**
     *
     * @type {string}
     * @memberof CreateUserRegistration
     */
    'passwordConfirm': string;
    /**
     *
     * @type {boolean}
     * @memberof CreateUserRegistration
     */
    'advanced'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CreateUserRegistration
     */
    'private'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CreateUserRegistration
     */
    'seedData'?: boolean;
    /**
     *
     * @type {string}
     * @memberof CreateUserRegistration
     */
    'locale'?: string;
}
/**
 *
 * @export
 * @interface ForgotPassword
 */
export interface ForgotPassword {
    /**
     *
     * @type {string}
     * @memberof ForgotPassword
     */
    'email': string;
}

/**
 *
 * @export
 * @interface SetPermissions
 */
export interface SetPermissions {
    /**
     *
     * @type {string}
     * @memberof SetPermissions
     */
    'userId': string;
    /**
     *
     * @type {boolean}
     * @memberof SetPermissions
     */
    'canManage'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof SetPermissions
     */
    'canInvite'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof SetPermissions
     */
    'canOrganize'?: boolean;
}
/**
 *
 * @export
 * @interface UserFavorites
 */
export interface UserFavorites {
    /**
     *
     * @type {string}
     * @memberof UserFavorites
     */
    'username'?: string;
    /**
     *
     * @type {string}
     * @memberof UserFavorites
     */
    'fullName'?: string;
    /**
     *
     * @type {string}
     * @memberof UserFavorites
     */
    'email': string;
    /**
     *
     * @type {boolean}
     * @memberof UserFavorites
     */
    'admin'?: boolean;
    /**
     *
     * @type {string}
     * @memberof UserFavorites
     */
    'group'?: string;
    /**
     *
     * @type {boolean}
     * @memberof UserFavorites
     */
    'advanced'?: boolean;
    /**
     *
     * @type {Array<RecipeSummary>}
     * @memberof UserFavorites
     */
    'favoriteRecipes'?: Array<RecipeSummary>;
    /**
     *
     * @type {boolean}
     * @memberof UserFavorites
     */
    'canInvite'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UserFavorites
     */
    'canManage'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UserFavorites
     */
    'canOrganize'?: boolean;
}
/**
 *
 * @export
 * @interface UserIn
 */
export interface UserIn {
    /**
     *
     * @type {string}
     * @memberof UserIn
     */
    'username'?: string;
    /**
     *
     * @type {string}
     * @memberof UserIn
     */
    'fullName'?: string;
    /**
     *
     * @type {string}
     * @memberof UserIn
     */
    'email': string;
    /**
     *
     * @type {boolean}
     * @memberof UserIn
     */
    'admin'?: boolean;
    /**
     *
     * @type {string}
     * @memberof UserIn
     */
    'group'?: string;
    /**
     *
     * @type {boolean}
     * @memberof UserIn
     */
    'advanced'?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof UserIn
     */
    'favoriteRecipes'?: Array<string>;
    /**
     *
     * @type {boolean}
     * @memberof UserIn
     */
    'canInvite'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UserIn
     */
    'canManage'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UserIn
     */
    'canOrganize'?: boolean;
    /**
     *
     * @type {string}
     * @memberof UserIn
     */
    'password': string;
}
/**
 *
 * @export
 * @interface UserOut
 */
export interface UserOut {
    /**
     *
     * @type {string}
     * @memberof UserOut
     */
    'username'?: string;
    /**
     *
     * @type {string}
     * @memberof UserOut
     */
    'fullName'?: string;
    /**
     *
     * @type {string}
     * @memberof UserOut
     */
    'email': string;
    /**
     *
     * @type {boolean}
     * @memberof UserOut
     */
    'admin'?: boolean;
    /**
     *
     * @type {string}
     * @memberof UserOut
     */
    'group': string;
    /**
     *
     * @type {boolean}
     * @memberof UserOut
     */
    'advanced'?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof UserOut
     */
    'favoriteRecipes'?: Array<string>;
    /**
     *
     * @type {boolean}
     * @memberof UserOut
     */
    'canInvite'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UserOut
     */
    'canManage'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UserOut
     */
    'canOrganize'?: boolean;
    /**
     *
     * @type {string}
     * @memberof UserOut
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof UserOut
     */
    'groupId': string;
    /**
     *
     * @type {Array<LongLiveTokenOut>}
     * @memberof UserOut
     */
    'tokens'?: Array<LongLiveTokenOut>;
    /**
     *
     * @type {string}
     * @memberof UserOut
     */
    'cacheKey': string;
}
/**
 *
 * @export
 * @interface UserPagination
 */
export interface UserPagination {
    /**
     *
     * @type {number}
     * @memberof UserPagination
     */
    'page'?: number;
    /**
     *
     * @type {number}
     * @memberof UserPagination
     */
    'per_page'?: number;
    /**
     *
     * @type {number}
     * @memberof UserPagination
     */
    'total'?: number;
    /**
     *
     * @type {number}
     * @memberof UserPagination
     */
    'total_pages'?: number;
    /**
     *
     * @type {Array<UserOut>}
     * @memberof UserPagination
     */
    'items': Array<UserOut>;
    /**
     *
     * @type {string}
     * @memberof UserPagination
     */
    'next'?: string;
    /**
     *
     * @type {string}
     * @memberof UserPagination
     */
    'previous'?: string;
}
/**
 *
 * @export
 * @interface ResetPassword
 */
export interface ResetPassword {
    /**
     *
     * @type {string}
     * @memberof ResetPassword
     */
    'token': string;
    /**
     *
     * @type {string}
     * @memberof ResetPassword
     */
    'email': string;
    /**
     *
     * @type {string}
     * @memberof ResetPassword
     */
    'password': string;
    /**
     *
     * @type {string}
     * @memberof ResetPassword
     */
    'passwordConfirm': string;
}