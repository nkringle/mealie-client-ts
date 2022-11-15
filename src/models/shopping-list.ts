/**
 *
 * @export
 * @interface ShoppingListCreate
 */
import {IngredientFood, IngredientUnit} from "./ingredients";
import {RecipereferencesInner, RecipeSummary} from "./recipe";
import {MultiPurposeLabelSummary} from "./categories-tags-labels";

export interface ShoppingListCreate {
    /**
     *
     * @type {string}
     * @memberof ShoppingListCreate
     */
    'name'?: string;
    /**
     *
     * @type {object}
     * @memberof ShoppingListCreate
     */
    'extras'?: object;
    /**
     *
     * @type {string}
     * @memberof ShoppingListCreate
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof ShoppingListCreate
     */
    'updateAt'?: string;
}
/**
 *
 * @export
 * @interface ShoppingListItemCreate
 */
export interface ShoppingListItemCreate {
    /**
     *
     * @type {string}
     * @memberof ShoppingListItemCreate
     */
    'shoppingListId': string;
    /**
     *
     * @type {boolean}
     * @memberof ShoppingListItemCreate
     */
    'checked'?: boolean;
    /**
     *
     * @type {number}
     * @memberof ShoppingListItemCreate
     */
    'position'?: number;
    /**
     *
     * @type {boolean}
     * @memberof ShoppingListItemCreate
     */
    'isFood'?: boolean;
    /**
     *
     * @type {string}
     * @memberof ShoppingListItemCreate
     */
    'note'?: string;
    /**
     *
     * @type {number}
     * @memberof ShoppingListItemCreate
     */
    'quantity'?: number;
    /**
     *
     * @type {string}
     * @memberof ShoppingListItemCreate
     */
    'unitId'?: string;
    /**
     *
     * @type {IngredientUnit}
     * @memberof ShoppingListItemCreate
     */
    'unit'?: IngredientUnit;
    /**
     *
     * @type {string}
     * @memberof ShoppingListItemCreate
     */
    'foodId'?: string;
    /**
     *
     * @type {IngredientFood}
     * @memberof ShoppingListItemCreate
     */
    'food'?: IngredientFood;
    /**
     *
     * @type {string}
     * @memberof ShoppingListItemCreate
     */
    'labelId'?: string;
    /**
     *
     * @type {Array<ShoppingListItemRecipeRef>}
     * @memberof ShoppingListItemCreate
     */
    'recipeReferences'?: Array<ShoppingListItemRecipeRef>;
    /**
     *
     * @type {object}
     * @memberof ShoppingListItemCreate
     */
    'extras'?: object;
    /**
     *
     * @type {string}
     * @memberof ShoppingListItemCreate
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof ShoppingListItemCreate
     */
    'updateAt'?: string;
}
/**
 *
 * @export
 * @interface ShoppingListItemOut
 */
export interface ShoppingListItemOut {
    /**
     *
     * @type {string}
     * @memberof ShoppingListItemOut
     */
    'shoppingListId': string;
    /**
     *
     * @type {boolean}
     * @memberof ShoppingListItemOut
     */
    'checked'?: boolean;
    /**
     *
     * @type {number}
     * @memberof ShoppingListItemOut
     */
    'position'?: number;
    /**
     *
     * @type {boolean}
     * @memberof ShoppingListItemOut
     */
    'isFood'?: boolean;
    /**
     *
     * @type {string}
     * @memberof ShoppingListItemOut
     */
    'note'?: string;
    /**
     *
     * @type {number}
     * @memberof ShoppingListItemOut
     */
    'quantity'?: number;
    /**
     *
     * @type {string}
     * @memberof ShoppingListItemOut
     */
    'unitId'?: string;
    /**
     *
     * @type {IngredientUnit}
     * @memberof ShoppingListItemOut
     */
    'unit'?: IngredientUnit;
    /**
     *
     * @type {string}
     * @memberof ShoppingListItemOut
     */
    'foodId'?: string;
    /**
     *
     * @type {IngredientFood}
     * @memberof ShoppingListItemOut
     */
    'food'?: IngredientFood;
    /**
     *
     * @type {string}
     * @memberof ShoppingListItemOut
     */
    'labelId'?: string;
    /**
     *
     * @type {Array<RecipereferencesInner>}
     * @memberof ShoppingListItemOut
     */
    'recipeReferences'?: Array<RecipereferencesInner>;
    /**
     *
     * @type {object}
     * @memberof ShoppingListItemOut
     */
    'extras'?: object;
    /**
     *
     * @type {string}
     * @memberof ShoppingListItemOut
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof ShoppingListItemOut
     */
    'updateAt'?: string;
    /**
     *
     * @type {string}
     * @memberof ShoppingListItemOut
     */
    'id': string;
    /**
     *
     * @type {MultiPurposeLabelSummary}
     * @memberof ShoppingListItemOut
     */
    'label'?: MultiPurposeLabelSummary;
}
/**
 *
 * @export
 * @interface ShoppingListItemRecipeRef
 */
export interface ShoppingListItemRecipeRef {
    /**
     *
     * @type {string}
     * @memberof ShoppingListItemRecipeRef
     */
    'recipeId': string;
    /**
     *
     * @type {number}
     * @memberof ShoppingListItemRecipeRef
     */
    'recipeQuantity'?: number;
}
/**
 *
 * @export
 * @interface ShoppingListItemRecipeRefOut
 */
export interface ShoppingListItemRecipeRefOut {
    /**
     *
     * @type {string}
     * @memberof ShoppingListItemRecipeRefOut
     */
    'recipeId': string;
    /**
     *
     * @type {number}
     * @memberof ShoppingListItemRecipeRefOut
     */
    'recipeQuantity'?: number;
    /**
     *
     * @type {string}
     * @memberof ShoppingListItemRecipeRefOut
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof ShoppingListItemRecipeRefOut
     */
    'shoppingListItemId': string;
}
/**
 *
 * @export
 * @interface ShoppingListItemUpdate
 */
export interface ShoppingListItemUpdate {
    /**
     *
     * @type {string}
     * @memberof ShoppingListItemUpdate
     */
    'shoppingListId': string;
    /**
     *
     * @type {boolean}
     * @memberof ShoppingListItemUpdate
     */
    'checked'?: boolean;
    /**
     *
     * @type {number}
     * @memberof ShoppingListItemUpdate
     */
    'position'?: number;
    /**
     *
     * @type {boolean}
     * @memberof ShoppingListItemUpdate
     */
    'isFood'?: boolean;
    /**
     *
     * @type {string}
     * @memberof ShoppingListItemUpdate
     */
    'note'?: string;
    /**
     *
     * @type {number}
     * @memberof ShoppingListItemUpdate
     */
    'quantity'?: number;
    /**
     *
     * @type {string}
     * @memberof ShoppingListItemUpdate
     */
    'unitId'?: string;
    /**
     *
     * @type {IngredientUnit}
     * @memberof ShoppingListItemUpdate
     */
    'unit'?: IngredientUnit;
    /**
     *
     * @type {string}
     * @memberof ShoppingListItemUpdate
     */
    'foodId'?: string;
    /**
     *
     * @type {IngredientFood}
     * @memberof ShoppingListItemUpdate
     */
    'food'?: IngredientFood;
    /**
     *
     * @type {string}
     * @memberof ShoppingListItemUpdate
     */
    'labelId'?: string;
    /**
     *
     * @type {Array<ShoppingListItemRecipeRef>}
     * @memberof ShoppingListItemUpdate
     */
    'recipeReferences'?: Array<ShoppingListItemRecipeRef>;
    /**
     *
     * @type {object}
     * @memberof ShoppingListItemUpdate
     */
    'extras'?: object;
    /**
     *
     * @type {string}
     * @memberof ShoppingListItemUpdate
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof ShoppingListItemUpdate
     */
    'updateAt'?: string;
    /**
     *
     * @type {string}
     * @memberof ShoppingListItemUpdate
     */
    'id': string;
}
/**
 *
 * @export
 * @interface ShoppingListOut
 */
export interface ShoppingListOut {
    /**
     *
     * @type {string}
     * @memberof ShoppingListOut
     */
    'name'?: string;
    /**
     *
     * @type {object}
     * @memberof ShoppingListOut
     */
    'extras'?: object;
    /**
     *
     * @type {string}
     * @memberof ShoppingListOut
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof ShoppingListOut
     */
    'updateAt'?: string;
    /**
     *
     * @type {string}
     * @memberof ShoppingListOut
     */
    'groupId': string;
    /**
     *
     * @type {string}
     * @memberof ShoppingListOut
     */
    'id': string;
    /**
     *
     * @type {Array<ShoppingListItemOut>}
     * @memberof ShoppingListOut
     */
    'listItems'?: Array<ShoppingListItemOut>;
    /**
     *
     * @type {Array<ShoppingListRecipeRefOut>}
     * @memberof ShoppingListOut
     */
    'recipeReferences': Array<ShoppingListRecipeRefOut>;
}
/**
 *
 * @export
 * @interface ShoppingListPagination
 */
export interface ShoppingListPagination {
    /**
     *
     * @type {number}
     * @memberof ShoppingListPagination
     */
    'page'?: number;
    /**
     *
     * @type {number}
     * @memberof ShoppingListPagination
     */
    'per_page'?: number;
    /**
     *
     * @type {number}
     * @memberof ShoppingListPagination
     */
    'total'?: number;
    /**
     *
     * @type {number}
     * @memberof ShoppingListPagination
     */
    'total_pages'?: number;
    /**
     *
     * @type {Array<ShoppingListSummary>}
     * @memberof ShoppingListPagination
     */
    'items': Array<ShoppingListSummary>;
    /**
     *
     * @type {string}
     * @memberof ShoppingListPagination
     */
    'next'?: string;
    /**
     *
     * @type {string}
     * @memberof ShoppingListPagination
     */
    'previous'?: string;
}
/**
 *
 * @export
 * @interface ShoppingListRecipeRefOut
 */
export interface ShoppingListRecipeRefOut {
    /**
     *
     * @type {string}
     * @memberof ShoppingListRecipeRefOut
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof ShoppingListRecipeRefOut
     */
    'shoppingListId': string;
    /**
     *
     * @type {string}
     * @memberof ShoppingListRecipeRefOut
     */
    'recipeId': string;
    /**
     *
     * @type {number}
     * @memberof ShoppingListRecipeRefOut
     */
    'recipeQuantity': number;
    /**
     *
     * @type {RecipeSummary}
     * @memberof ShoppingListRecipeRefOut
     */
    'recipe': RecipeSummary;
}
/**
 *
 * @export
 * @interface ShoppingListSummary
 */
export interface ShoppingListSummary {
    /**
     *
     * @type {string}
     * @memberof ShoppingListSummary
     */
    'name'?: string;
    /**
     *
     * @type {object}
     * @memberof ShoppingListSummary
     */
    'extras'?: object;
    /**
     *
     * @type {string}
     * @memberof ShoppingListSummary
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof ShoppingListSummary
     */
    'updateAt'?: string;
    /**
     *
     * @type {string}
     * @memberof ShoppingListSummary
     */
    'groupId': string;
    /**
     *
     * @type {string}
     * @memberof ShoppingListSummary
     */
    'id': string;
}
/**
 *
 * @export
 * @interface ShoppingListUpdate
 */
export interface ShoppingListUpdate {
    /**
     *
     * @type {string}
     * @memberof ShoppingListUpdate
     */
    'name'?: string;
    /**
     *
     * @type {object}
     * @memberof ShoppingListUpdate
     */
    'extras'?: object;
    /**
     *
     * @type {string}
     * @memberof ShoppingListUpdate
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof ShoppingListUpdate
     */
    'updateAt'?: string;
    /**
     *
     * @type {string}
     * @memberof ShoppingListUpdate
     */
    'groupId': string;
    /**
     *
     * @type {string}
     * @memberof ShoppingListUpdate
     */
    'id': string;
    /**
     *
     * @type {Array<ShoppingListItemOut>}
     * @memberof ShoppingListUpdate
     */
    'listItems'?: Array<ShoppingListItemOut>;
}