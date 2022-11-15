/**
 *
 * @export
 * @interface CookBookPagination
 */
import {CategoryBase, TagBase} from "./categories-tags-labels";
import {RecipeTool} from "./recipe";

export interface CookBookPagination {
    /**
     *
     * @type {number}
     * @memberof CookBookPagination
     */
    'page'?: number;
    /**
     *
     * @type {number}
     * @memberof CookBookPagination
     */
    'per_page'?: number;
    /**
     *
     * @type {number}
     * @memberof CookBookPagination
     */
    'total'?: number;
    /**
     *
     * @type {number}
     * @memberof CookBookPagination
     */
    'total_pages'?: number;
    /**
     *
     * @type {Array<ReadCookBook>}
     * @memberof CookBookPagination
     */
    'items': Array<ReadCookBook>;
    /**
     *
     * @type {string}
     * @memberof CookBookPagination
     */
    'next'?: string;
    /**
     *
     * @type {string}
     * @memberof CookBookPagination
     */
    'previous'?: string;
}
/**
 *
 * @export
 * @interface Cookbook
 */
export interface Cookbook {
}
/**
 *
 * @export
 * @interface CreateCookBook
 */
export interface CreateCookBook {
    /**
     *
     * @type {string}
     * @memberof CreateCookBook
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof CreateCookBook
     */
    'description'?: string;
    /**
     *
     * @type {string}
     * @memberof CreateCookBook
     */
    'slug'?: string;
    /**
     *
     * @type {number}
     * @memberof CreateCookBook
     */
    'position'?: number;
    /**
     *
     * @type {boolean}
     * @memberof CreateCookBook
     */
    'public'?: boolean;
    /**
     *
     * @type {Array<CategoryBase>}
     * @memberof CreateCookBook
     */
    'categories'?: Array<CategoryBase>;
    /**
     *
     * @type {Array<TagBase>}
     * @memberof CreateCookBook
     */
    'tags'?: Array<TagBase>;
    /**
     *
     * @type {Array<RecipeTool>}
     * @memberof CreateCookBook
     */
    'tools'?: Array<RecipeTool>;
    /**
     *
     * @type {boolean}
     * @memberof CreateCookBook
     */
    'requireAllCategories'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CreateCookBook
     */
    'requireAllTags'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CreateCookBook
     */
    'requireAllTools'?: boolean;
}
/**
 *
 * @export
 * @interface ReadCookBook
 */
export interface ReadCookBook {
    /**
     *
     * @type {string}
     * @memberof ReadCookBook
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof ReadCookBook
     */
    'description'?: string;
    /**
     *
     * @type {string}
     * @memberof ReadCookBook
     */
    'slug'?: string;
    /**
     *
     * @type {number}
     * @memberof ReadCookBook
     */
    'position'?: number;
    /**
     *
     * @type {boolean}
     * @memberof ReadCookBook
     */
    'public'?: boolean;
    /**
     *
     * @type {Array<CategoryBase>}
     * @memberof ReadCookBook
     */
    'categories'?: Array<CategoryBase>;
    /**
     *
     * @type {Array<TagBase>}
     * @memberof ReadCookBook
     */
    'tags'?: Array<TagBase>;
    /**
     *
     * @type {Array<RecipeTool>}
     * @memberof ReadCookBook
     */
    'tools'?: Array<RecipeTool>;
    /**
     *
     * @type {boolean}
     * @memberof ReadCookBook
     */
    'requireAllCategories'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ReadCookBook
     */
    'requireAllTags'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ReadCookBook
     */
    'requireAllTools'?: boolean;
    /**
     *
     * @type {string}
     * @memberof ReadCookBook
     */
    'groupId': string;
    /**
     *
     * @type {string}
     * @memberof ReadCookBook
     */
    'id': string;
}
/**
 *
 * @export
 * @interface UpdateCookBook
 */
export interface UpdateCookBook {
    /**
     *
     * @type {string}
     * @memberof UpdateCookBook
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof UpdateCookBook
     */
    'description'?: string;
    /**
     *
     * @type {string}
     * @memberof UpdateCookBook
     */
    'slug'?: string;
    /**
     *
     * @type {number}
     * @memberof UpdateCookBook
     */
    'position'?: number;
    /**
     *
     * @type {boolean}
     * @memberof UpdateCookBook
     */
    'public'?: boolean;
    /**
     *
     * @type {Array<CategoryBase>}
     * @memberof UpdateCookBook
     */
    'categories'?: Array<CategoryBase>;
    /**
     *
     * @type {Array<TagBase>}
     * @memberof UpdateCookBook
     */
    'tags'?: Array<TagBase>;
    /**
     *
     * @type {Array<RecipeTool>}
     * @memberof UpdateCookBook
     */
    'tools'?: Array<RecipeTool>;
    /**
     *
     * @type {boolean}
     * @memberof UpdateCookBook
     */
    'requireAllCategories'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UpdateCookBook
     */
    'requireAllTags'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UpdateCookBook
     */
    'requireAllTools'?: boolean;
    /**
     *
     * @type {string}
     * @memberof UpdateCookBook
     */
    'groupId': string;
    /**
     *
     * @type {string}
     * @memberof UpdateCookBook
     */
    'id': string;
}