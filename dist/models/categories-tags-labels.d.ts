/**
 *
 * @export
 * @interface CategoriesInner
 */
export interface CategoriesInner {
}
/**
 *
 * @export
 * @interface Category
 */
export interface Category {
    /**
     *
     * @type {string}
     * @memberof Category
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof Category
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof Category
     */
    'slug': string;
}
/**
 *
 * @export
 * @interface CategoryBase
 */
export interface CategoryBase {
    /**
     *
     * @type {string}
     * @memberof CategoryBase
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof CategoryBase
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof CategoryBase
     */
    'slug': string;
}
/**
 *
 * @export
 * @interface CategoryIn
 */
export interface CategoryIn {
    /**
     *
     * @type {string}
     * @memberof CategoryIn
     */
    'name': string;
}
/**
 *
 * @export
 * @interface CategorySummary
 */
export interface CategorySummary {
    /**
     *
     * @type {string}
     * @memberof CategorySummary
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof CategorySummary
     */
    'slug': string;
    /**
     *
     * @type {string}
     * @memberof CategorySummary
     */
    'name': string;
}
/**
 *
 * @export
 * @interface Tag
 */
export interface Tag {
    /**
     *
     * @type {string}
     * @memberof Tag
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof Tag
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof Tag
     */
    'slug': string;
}
/**
 *
 * @export
 * @interface TagBase
 */
export interface TagBase {
    /**
     *
     * @type {string}
     * @memberof TagBase
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof TagBase
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof TagBase
     */
    'slug': string;
}
/**
 *
 * @export
 * @interface TagIn
 */
export interface TagIn {
    /**
     *
     * @type {string}
     * @memberof TagIn
     */
    'name': string;
}
/**
 *
 * @export
 * @interface AssignTags
 */
export interface AssignTags {
    /**
     *
     * @type {Array<string>}
     * @memberof AssignTags
     */
    'recipes': Array<string>;
    /**
     *
     * @type {Array<TagBase>}
     * @memberof AssignTags
     */
    'tags': Array<TagBase>;
}
/**
 *
 * @export
 * @interface AssignCategories
 */
export interface AssignCategories {
    /**
     *
     * @type {Array<string>}
     * @memberof AssignCategories
     */
    'recipes': Array<string>;
    /**
     *
     * @type {Array<CategoryBase>}
     * @memberof AssignCategories
     */
    'categories': Array<CategoryBase>;
}
/**
 *
 * @export
 * @interface MultiPurposeLabelCreate
 */
export interface MultiPurposeLabelCreate {
    /**
     *
     * @type {string}
     * @memberof MultiPurposeLabelCreate
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof MultiPurposeLabelCreate
     */
    'color'?: string;
}
/**
 *
 * @export
 * @interface MultiPurposeLabelOut
 */
export interface MultiPurposeLabelOut {
    /**
     *
     * @type {string}
     * @memberof MultiPurposeLabelOut
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof MultiPurposeLabelOut
     */
    'color'?: string;
    /**
     *
     * @type {string}
     * @memberof MultiPurposeLabelOut
     */
    'groupId': string;
    /**
     *
     * @type {string}
     * @memberof MultiPurposeLabelOut
     */
    'id': string;
}
/**
 *
 * @export
 * @interface MultiPurposeLabelPagination
 */
export interface MultiPurposeLabelPagination {
    /**
     *
     * @type {number}
     * @memberof MultiPurposeLabelPagination
     */
    'page'?: number;
    /**
     *
     * @type {number}
     * @memberof MultiPurposeLabelPagination
     */
    'per_page'?: number;
    /**
     *
     * @type {number}
     * @memberof MultiPurposeLabelPagination
     */
    'total'?: number;
    /**
     *
     * @type {number}
     * @memberof MultiPurposeLabelPagination
     */
    'total_pages'?: number;
    /**
     *
     * @type {Array<MultiPurposeLabelSummary>}
     * @memberof MultiPurposeLabelPagination
     */
    'items': Array<MultiPurposeLabelSummary>;
    /**
     *
     * @type {string}
     * @memberof MultiPurposeLabelPagination
     */
    'next'?: string;
    /**
     *
     * @type {string}
     * @memberof MultiPurposeLabelPagination
     */
    'previous'?: string;
}
/**
 *
 * @export
 * @interface MultiPurposeLabelSummary
 */
export interface MultiPurposeLabelSummary {
    /**
     *
     * @type {string}
     * @memberof MultiPurposeLabelSummary
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof MultiPurposeLabelSummary
     */
    'color'?: string;
    /**
     *
     * @type {string}
     * @memberof MultiPurposeLabelSummary
     */
    'groupId': string;
    /**
     *
     * @type {string}
     * @memberof MultiPurposeLabelSummary
     */
    'id': string;
}
/**
 *
 * @export
 * @interface MultiPurposeLabelUpdate
 */
export interface MultiPurposeLabelUpdate {
    /**
     *
     * @type {string}
     * @memberof MultiPurposeLabelUpdate
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof MultiPurposeLabelUpdate
     */
    'color'?: string;
    /**
     *
     * @type {string}
     * @memberof MultiPurposeLabelUpdate
     */
    'groupId': string;
    /**
     *
     * @type {string}
     * @memberof MultiPurposeLabelUpdate
     */
    'id': string;
}
//# sourceMappingURL=categories-tags-labels.d.ts.map