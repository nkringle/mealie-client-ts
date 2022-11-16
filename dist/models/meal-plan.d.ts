/**
 *
 * @export
 * @interface CreatePlanEntry
 */
import { Category, Tag } from "./categories-tags-labels";
import { RecipeSummary } from "./recipe";
export interface CreatePlanEntry {
    /**
     *
     * @type {string}
     * @memberof CreatePlanEntry
     */
    'date': string;
    /**
     *
     * @type {PlanEntryType}
     * @memberof CreatePlanEntry
     */
    'entryType'?: PlanEntryType;
    /**
     *
     * @type {string}
     * @memberof CreatePlanEntry
     */
    'title'?: string;
    /**
     *
     * @type {string}
     * @memberof CreatePlanEntry
     */
    'text'?: string;
    /**
     *
     * @type {string}
     * @memberof CreatePlanEntry
     */
    'recipeId'?: string;
}
/**
 *
 * @export
 * @interface PlanEntryPagination
 */
export interface PlanEntryPagination {
    /**
     *
     * @type {number}
     * @memberof PlanEntryPagination
     */
    'page'?: number;
    /**
     *
     * @type {number}
     * @memberof PlanEntryPagination
     */
    'per_page'?: number;
    /**
     *
     * @type {number}
     * @memberof PlanEntryPagination
     */
    'total'?: number;
    /**
     *
     * @type {number}
     * @memberof PlanEntryPagination
     */
    'total_pages'?: number;
    /**
     *
     * @type {Array<ReadPlanEntry>}
     * @memberof PlanEntryPagination
     */
    'items': Array<ReadPlanEntry>;
    /**
     *
     * @type {string}
     * @memberof PlanEntryPagination
     */
    'next'?: string;
    /**
     *
     * @type {string}
     * @memberof PlanEntryPagination
     */
    'previous'?: string;
}
/**
 * An enumeration.
 * @export
 * @enum {string}
 */
export declare const PlanEntryType: {
    readonly Breakfast: "breakfast";
    readonly Lunch: "lunch";
    readonly Dinner: "dinner";
    readonly Side: "side";
};
export type PlanEntryType = typeof PlanEntryType[keyof typeof PlanEntryType];
/**
 *
 * @export
 * @interface PlanRulesCreate
 */
export interface PlanRulesCreate {
    /**
     *
     * @type {PlanRulesDay}
     * @memberof PlanRulesCreate
     */
    'day'?: PlanRulesDay;
    /**
     *
     * @type {PlanRulesType}
     * @memberof PlanRulesCreate
     */
    'entryType'?: PlanRulesType;
    /**
     *
     * @type {Array<Category>}
     * @memberof PlanRulesCreate
     */
    'categories'?: Array<Category>;
    /**
     *
     * @type {Array<Tag>}
     * @memberof PlanRulesCreate
     */
    'tags'?: Array<Tag>;
}
/**
 * An enumeration.
 * @export
 * @enum {string}
 */
export declare const PlanRulesDay: {
    readonly Monday: "monday";
    readonly Tuesday: "tuesday";
    readonly Wednesday: "wednesday";
    readonly Thursday: "thursday";
    readonly Friday: "friday";
    readonly Saturday: "saturday";
    readonly Sunday: "sunday";
    readonly Unset: "unset";
};
export type PlanRulesDay = typeof PlanRulesDay[keyof typeof PlanRulesDay];
/**
 *
 * @export
 * @interface PlanRulesOut
 */
export interface PlanRulesOut {
    /**
     *
     * @type {PlanRulesDay}
     * @memberof PlanRulesOut
     */
    'day'?: PlanRulesDay;
    /**
     *
     * @type {PlanRulesType}
     * @memberof PlanRulesOut
     */
    'entryType'?: PlanRulesType;
    /**
     *
     * @type {Array<Category>}
     * @memberof PlanRulesOut
     */
    'categories'?: Array<Category>;
    /**
     *
     * @type {Array<Tag>}
     * @memberof PlanRulesOut
     */
    'tags'?: Array<Tag>;
    /**
     *
     * @type {string}
     * @memberof PlanRulesOut
     */
    'groupId': string;
    /**
     *
     * @type {string}
     * @memberof PlanRulesOut
     */
    'id': string;
}
/**
 *
 * @export
 * @interface PlanRulesPagination
 */
export interface PlanRulesPagination {
    /**
     *
     * @type {number}
     * @memberof PlanRulesPagination
     */
    'page'?: number;
    /**
     *
     * @type {number}
     * @memberof PlanRulesPagination
     */
    'per_page'?: number;
    /**
     *
     * @type {number}
     * @memberof PlanRulesPagination
     */
    'total'?: number;
    /**
     *
     * @type {number}
     * @memberof PlanRulesPagination
     */
    'total_pages'?: number;
    /**
     *
     * @type {Array<PlanRulesOut>}
     * @memberof PlanRulesPagination
     */
    'items': Array<PlanRulesOut>;
    /**
     *
     * @type {string}
     * @memberof PlanRulesPagination
     */
    'next'?: string;
    /**
     *
     * @type {string}
     * @memberof PlanRulesPagination
     */
    'previous'?: string;
}
/**
 * An enumeration.
 * @export
 * @enum {string}
 */
export declare const PlanRulesType: {
    readonly Breakfast: "breakfast";
    readonly Lunch: "lunch";
    readonly Dinner: "dinner";
    readonly Side: "side";
    readonly Unset: "unset";
};
export type PlanRulesType = typeof PlanRulesType[keyof typeof PlanRulesType];
/**
 *
 * @export
 * @interface UpdatePlanEntry
 */
export interface UpdatePlanEntry {
    /**
     *
     * @type {string}
     * @memberof UpdatePlanEntry
     */
    'date': string;
    /**
     *
     * @type {PlanEntryType}
     * @memberof UpdatePlanEntry
     */
    'entryType'?: PlanEntryType;
    /**
     *
     * @type {string}
     * @memberof UpdatePlanEntry
     */
    'title'?: string;
    /**
     *
     * @type {string}
     * @memberof UpdatePlanEntry
     */
    'text'?: string;
    /**
     *
     * @type {string}
     * @memberof UpdatePlanEntry
     */
    'recipeId'?: string;
    /**
     *
     * @type {number}
     * @memberof UpdatePlanEntry
     */
    'id': number;
    /**
     *
     * @type {string}
     * @memberof UpdatePlanEntry
     */
    'groupId': string;
}
/**
 *
 * @export
 * @interface ReadPlanEntry
 */
export interface ReadPlanEntry {
    /**
     *
     * @type {string}
     * @memberof ReadPlanEntry
     */
    'date': string;
    /**
     *
     * @type {PlanEntryType}
     * @memberof ReadPlanEntry
     */
    'entryType'?: PlanEntryType;
    /**
     *
     * @type {string}
     * @memberof ReadPlanEntry
     */
    'title'?: string;
    /**
     *
     * @type {string}
     * @memberof ReadPlanEntry
     */
    'text'?: string;
    /**
     *
     * @type {string}
     * @memberof ReadPlanEntry
     */
    'recipeId'?: string;
    /**
     *
     * @type {number}
     * @memberof ReadPlanEntry
     */
    'id': number;
    /**
     *
     * @type {string}
     * @memberof ReadPlanEntry
     */
    'groupId': string;
    /**
     *
     * @type {RecipeSummary}
     * @memberof ReadPlanEntry
     */
    'recipe'?: RecipeSummary;
}
//# sourceMappingURL=meal-plan.d.ts.map