import { ReadWebhook } from "./misc";
/**
 *
 * @export
 * @interface MealieSchemaRecipeRecipeCommentsUserBase
 */
export interface MealieSchemaRecipeRecipeCommentsUserBase {
    /**
     *
     * @type {string}
     * @memberof MealieSchemaRecipeRecipeCommentsUserBase
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof MealieSchemaRecipeRecipeCommentsUserBase
     */
    'username'?: string;
    /**
     *
     * @type {boolean}
     * @memberof MealieSchemaRecipeRecipeCommentsUserBase
     */
    'admin': boolean;
}
/**
 *
 * @export
 * @interface MealieSchemaUserUserUserBase
 */
export interface MealieSchemaUserUserUserBase {
    /**
     *
     * @type {string}
     * @memberof MealieSchemaUserUserUserBase
     */
    'username'?: string;
    /**
     *
     * @type {string}
     * @memberof MealieSchemaUserUserUserBase
     */
    'fullName'?: string;
    /**
     *
     * @type {string}
     * @memberof MealieSchemaUserUserUserBase
     */
    'email': string;
    /**
     *
     * @type {boolean}
     * @memberof MealieSchemaUserUserUserBase
     */
    'admin'?: boolean;
    /**
     *
     * @type {string}
     * @memberof MealieSchemaUserUserUserBase
     */
    'group'?: string;
    /**
     *
     * @type {boolean}
     * @memberof MealieSchemaUserUserUserBase
     */
    'advanced'?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof MealieSchemaUserUserUserBase
     */
    'favoriteRecipes'?: Array<string>;
    /**
     *
     * @type {boolean}
     * @memberof MealieSchemaUserUserUserBase
     */
    'canInvite'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof MealieSchemaUserUserUserBase
     */
    'canManage'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof MealieSchemaUserUserUserBase
     */
    'canOrganize'?: boolean;
}
/**
 *
 * @export
 * @interface ItemId
 */
export interface ItemId {
}
/**
 *
 * @export
 * @interface LocationInner
 */
export interface LocationInner {
}
/**
 *
 * @export
 * @interface FormatResponse
 */
export interface FormatResponse {
    /**
     *
     * @type {Array<string>}
     * @memberof FormatResponse
     */
    'json': Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof FormatResponse
     */
    'zip': Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof FormatResponse
     */
    'jinja2': Array<string>;
}
/**
 *
 * @export
 * @interface Options
 */
export interface Options {
    /**
     *
     * @type {boolean}
     * @memberof Options
     */
    'testMessage'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Options
     */
    'webhookTask'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Options
     */
    'recipeCreated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Options
     */
    'recipeUpdated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Options
     */
    'recipeDeleted'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Options
     */
    'userSignup'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Options
     */
    'dataMigrations'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Options
     */
    'dataExport'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Options
     */
    'dataImport'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Options
     */
    'mealplanEntryCreated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Options
     */
    'shoppingListCreated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Options
     */
    'shoppingListUpdated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Options
     */
    'shoppingListDeleted'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Options
     */
    'cookbookCreated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Options
     */
    'cookbookUpdated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Options
     */
    'cookbookDeleted'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Options
     */
    'tagCreated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Options
     */
    'tagUpdated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Options
     */
    'tagDeleted'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Options
     */
    'categoryCreated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Options
     */
    'categoryUpdated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Options
     */
    'categoryDeleted'?: boolean;
}
/**
 * An enumeration.
 * @export
 * @enum {string}
 */
export declare const OrderDirection: {
    readonly Asc: "asc";
    readonly Desc: "desc";
};
export type OrderDirection = typeof OrderDirection[keyof typeof OrderDirection];
/**
 *
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     *
     * @type {Array<LocationInner>}
     * @memberof ValidationError
     */
    'loc': Array<LocationInner>;
    /**
     *
     * @type {string}
     * @memberof ValidationError
     */
    'msg': string;
    /**
     *
     * @type {string}
     * @memberof ValidationError
     */
    'type': string;
}
/**
 *
 * @export
 * @interface ValidationResponse
 */
export interface ValidationResponse {
    /**
     *
     * @type {boolean}
     * @memberof ValidationResponse
     */
    'valid': boolean;
}
/**
 *
 * @export
 * @interface WebhookPagination
 */
export interface WebhookPagination {
    /**
     *
     * @type {number}
     * @memberof WebhookPagination
     */
    'page'?: number;
    /**
     *
     * @type {number}
     * @memberof WebhookPagination
     */
    'per_page'?: number;
    /**
     *
     * @type {number}
     * @memberof WebhookPagination
     */
    'total'?: number;
    /**
     *
     * @type {number}
     * @memberof WebhookPagination
     */
    'total_pages'?: number;
    /**
     *
     * @type {Array<ReadWebhook>}
     * @memberof WebhookPagination
     */
    'items': Array<ReadWebhook>;
    /**
     *
     * @type {string}
     * @memberof WebhookPagination
     */
    'next'?: string;
    /**
     *
     * @type {string}
     * @memberof WebhookPagination
     */
    'previous'?: string;
}
/**
 * An enumeration.
 * @export
 * @enum {string}
 */
export declare const WebhookType: {
    readonly Mealplan: "mealplan";
};
export type WebhookType = typeof WebhookType[keyof typeof WebhookType];
/**
 *
 * @export
 * @interface SuccessResponse
 */
export interface SuccessResponse {
    /**
     *
     * @type {string}
     * @memberof SuccessResponse
     */
    'message': string;
    /**
     *
     * @type {boolean}
     * @memberof SuccessResponse
     */
    'error'?: boolean;
}
//# sourceMappingURL=generic-api.d.ts.map