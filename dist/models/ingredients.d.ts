import { MultiPurposeLabelSummary } from "./categories-tags-labels";
import { RegisteredParser } from "./misc";
/**
 *
 * @export
 * @interface CreateIngredientFood
 */
export interface CreateIngredientFood {
    /**
     *
     * @type {string}
     * @memberof CreateIngredientFood
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof CreateIngredientFood
     */
    'description'?: string;
    /**
     *
     * @type {object}
     * @memberof CreateIngredientFood
     */
    'extras'?: object;
    /**
     *
     * @type {string}
     * @memberof CreateIngredientFood
     */
    'labelId'?: string;
}
/**
 *
 * @export
 * @interface CreateIngredientUnit
 */
export interface CreateIngredientUnit {
    /**
     *
     * @type {string}
     * @memberof CreateIngredientUnit
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof CreateIngredientUnit
     */
    'description'?: string;
    /**
     *
     * @type {object}
     * @memberof CreateIngredientUnit
     */
    'extras'?: object;
    /**
     *
     * @type {boolean}
     * @memberof CreateIngredientUnit
     */
    'fraction'?: boolean;
    /**
     *
     * @type {string}
     * @memberof CreateIngredientUnit
     */
    'abbreviation'?: string;
    /**
     *
     * @type {boolean}
     * @memberof CreateIngredientUnit
     */
    'useAbbreviation'?: boolean;
}
/**
 *
 * @export
 * @interface IngredientConfidence
 */
export interface IngredientConfidence {
    /**
     *
     * @type {number}
     * @memberof IngredientConfidence
     */
    'average'?: number;
    /**
     *
     * @type {number}
     * @memberof IngredientConfidence
     */
    'comment'?: number;
    /**
     *
     * @type {number}
     * @memberof IngredientConfidence
     */
    'name'?: number;
    /**
     *
     * @type {number}
     * @memberof IngredientConfidence
     */
    'unit'?: number;
    /**
     *
     * @type {number}
     * @memberof IngredientConfidence
     */
    'quantity'?: number;
    /**
     *
     * @type {number}
     * @memberof IngredientConfidence
     */
    'food'?: number;
}
/**
 *
 * @export
 * @interface IngredientFood
 */
export interface IngredientFood {
    /**
     *
     * @type {string}
     * @memberof IngredientFood
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof IngredientFood
     */
    'description'?: string;
    /**
     *
     * @type {object}
     * @memberof IngredientFood
     */
    'extras'?: object;
    /**
     *
     * @type {string}
     * @memberof IngredientFood
     */
    'labelId'?: string;
    /**
     *
     * @type {string}
     * @memberof IngredientFood
     */
    'id': string;
    /**
     *
     * @type {MultiPurposeLabelSummary}
     * @memberof IngredientFood
     */
    'label'?: MultiPurposeLabelSummary;
    /**
     *
     * @type {string}
     * @memberof IngredientFood
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof IngredientFood
     */
    'updateAt'?: string;
}
/**
 *
 * @export
 * @interface IngredientFoodPagination
 */
export interface IngredientFoodPagination {
    /**
     *
     * @type {number}
     * @memberof IngredientFoodPagination
     */
    'page'?: number;
    /**
     *
     * @type {number}
     * @memberof IngredientFoodPagination
     */
    'per_page'?: number;
    /**
     *
     * @type {number}
     * @memberof IngredientFoodPagination
     */
    'total'?: number;
    /**
     *
     * @type {number}
     * @memberof IngredientFoodPagination
     */
    'total_pages'?: number;
    /**
     *
     * @type {Array<IngredientFood>}
     * @memberof IngredientFoodPagination
     */
    'items': Array<IngredientFood>;
    /**
     *
     * @type {string}
     * @memberof IngredientFoodPagination
     */
    'next'?: string;
    /**
     *
     * @type {string}
     * @memberof IngredientFoodPagination
     */
    'previous'?: string;
}
/**
 * A list of ingredient references.
 * @export
 * @interface IngredientReferences
 */
export interface IngredientReferences {
    /**
     *
     * @type {string}
     * @memberof IngredientReferences
     */
    'referenceId'?: string;
}
/**
 *
 * @export
 * @interface IngredientRequest
 */
export interface IngredientRequest {
    /**
     *
     * @type {RegisteredParser}
     * @memberof IngredientRequest
     */
    'parser'?: RegisteredParser;
    /**
     *
     * @type {string}
     * @memberof IngredientRequest
     */
    'ingredient': string;
}
/**
 *
 * @export
 * @interface IngredientUnit
 */
export interface IngredientUnit {
    /**
     *
     * @type {string}
     * @memberof IngredientUnit
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof IngredientUnit
     */
    'description'?: string;
    /**
     *
     * @type {object}
     * @memberof IngredientUnit
     */
    'extras'?: object;
    /**
     *
     * @type {boolean}
     * @memberof IngredientUnit
     */
    'fraction'?: boolean;
    /**
     *
     * @type {string}
     * @memberof IngredientUnit
     */
    'abbreviation'?: string;
    /**
     *
     * @type {boolean}
     * @memberof IngredientUnit
     */
    'useAbbreviation'?: boolean;
    /**
     *
     * @type {string}
     * @memberof IngredientUnit
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof IngredientUnit
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof IngredientUnit
     */
    'updateAt'?: string;
}
/**
 *
 * @export
 * @interface IngredientUnitPagination
 */
export interface IngredientUnitPagination {
    /**
     *
     * @type {number}
     * @memberof IngredientUnitPagination
     */
    'page'?: number;
    /**
     *
     * @type {number}
     * @memberof IngredientUnitPagination
     */
    'per_page'?: number;
    /**
     *
     * @type {number}
     * @memberof IngredientUnitPagination
     */
    'total'?: number;
    /**
     *
     * @type {number}
     * @memberof IngredientUnitPagination
     */
    'total_pages'?: number;
    /**
     *
     * @type {Array<IngredientUnit>}
     * @memberof IngredientUnitPagination
     */
    'items': Array<IngredientUnit>;
    /**
     *
     * @type {string}
     * @memberof IngredientUnitPagination
     */
    'next'?: string;
    /**
     *
     * @type {string}
     * @memberof IngredientUnitPagination
     */
    'previous'?: string;
}
/**
 *
 * @export
 * @interface IngredientsRequest
 */
export interface IngredientsRequest {
    /**
     *
     * @type {RegisteredParser}
     * @memberof IngredientsRequest
     */
    'parser'?: RegisteredParser;
    /**
     *
     * @type {Array<string>}
     * @memberof IngredientsRequest
     */
    'ingredients': Array<string>;
}
//# sourceMappingURL=ingredients.d.ts.map