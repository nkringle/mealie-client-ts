import { Configuration } from "../common/configuration";
import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";
import { BaseAPI, RequestArgs } from "../common/base";
import { CategoryBase, CategoryIn, CategorySummary, OrderDirection, RecipeCategoryPagination, RecipeTagPagination, RecipeTagResponse, RecipeTool, RecipeToolCreate, RecipeToolPagination, RecipeToolResponse, TagIn } from "../models";
/**
 * OrganizerCategoriesApi - axios parameter creator
 * @export
 */
export declare const OrganizerCategoriesApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Creates a Category in the database
     * @summary Create One
     * @param {CategoryIn} categoryIn
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiOrganizersCategoriesPost: (categoryIn: CategoryIn, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Removes a recipe category from the database. Deleting a category does not impact a recipe. The category will be removed from any recipes that contain it
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiOrganizersCategoriesItemIdDelete: (itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Returns a list of available categories in the database
     * @summary Get All
     * @param {string} [groupId]
     * @param {number} [page]
     * @param {number} [perPage]
     * @param {string} [orderBy]
     * @param {OrderDirection} [orderDirection]
     * @param {string} [queryFilter]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllApiOrganizersCategoriesGet: (groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Returns a list of categories that do not contain any recipes
     * @summary Get All Empty
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllEmptyApiOrganizersCategoriesEmptyGet: (groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Returns a list of recipes associated with the provided category.
     * @summary Get One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiOrganizersCategoriesItemIdGet: (itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Returns a category object with the associated recieps relating to the category
     * @summary Get One By Slug
     * @param {string} categorySlug
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneBySlugApiOrganizersCategoriesSlugCategorySlugGet: (categorySlug: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Updates an existing Tag in the database
     * @summary Update One
     * @param {string} itemId
     * @param {CategoryIn} categoryIn
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiOrganizersCategoriesItemIdPut: (itemId: string, categoryIn: CategoryIn, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * OrganizerCategoriesApi - functional programming interface
 * @export
 */
export declare const OrganizerCategoriesApiFp: (configuration?: Configuration) => {
    /**
     * Creates a Category in the database
     * @summary Create One
     * @param {CategoryIn} categoryIn
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiOrganizersCategoriesPost(categoryIn: CategoryIn, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     * Removes a recipe category from the database. Deleting a category does not impact a recipe. The category will be removed from any recipes that contain it
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiOrganizersCategoriesItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     * Returns a list of available categories in the database
     * @summary Get All
     * @param {string} [groupId]
     * @param {number} [page]
     * @param {number} [perPage]
     * @param {string} [orderBy]
     * @param {OrderDirection} [orderDirection]
     * @param {string} [queryFilter]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllApiOrganizersCategoriesGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeCategoryPagination>>;
    /**
     * Returns a list of categories that do not contain any recipes
     * @summary Get All Empty
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllEmptyApiOrganizersCategoriesEmptyGet(groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CategoryBase>>>;
    /**
     * Returns a list of recipes associated with the provided category.
     * @summary Get One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiOrganizersCategoriesItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CategorySummary>>;
    /**
     * Returns a category object with the associated recieps relating to the category
     * @summary Get One By Slug
     * @param {string} categorySlug
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneBySlugApiOrganizersCategoriesSlugCategorySlugGet(categorySlug: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     * Updates an existing Tag in the database
     * @summary Update One
     * @param {string} itemId
     * @param {CategoryIn} categoryIn
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiOrganizersCategoriesItemIdPut(itemId: string, categoryIn: CategoryIn, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CategorySummary>>;
};
/**
 * OrganizerCategoriesApi - factory interface
 * @export
 */
export declare const OrganizerCategoriesApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Creates a Category in the database
     * @summary Create One
     * @param {CategoryIn} categoryIn
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiOrganizersCategoriesPost(categoryIn: CategoryIn, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<any>;
    /**
     * Removes a recipe category from the database. Deleting a category does not impact a recipe. The category will be removed from any recipes that contain it
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiOrganizersCategoriesItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<any>;
    /**
     * Returns a list of available categories in the database
     * @summary Get All
     * @param {string} [groupId]
     * @param {number} [page]
     * @param {number} [perPage]
     * @param {string} [orderBy]
     * @param {OrderDirection} [orderDirection]
     * @param {string} [queryFilter]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllApiOrganizersCategoriesGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeCategoryPagination>;
    /**
     * Returns a list of categories that do not contain any recipes
     * @summary Get All Empty
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllEmptyApiOrganizersCategoriesEmptyGet(groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<Array<CategoryBase>>;
    /**
     * Returns a list of recipes associated with the provided category.
     * @summary Get One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiOrganizersCategoriesItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<CategorySummary>;
    /**
     * Returns a category object with the associated recieps relating to the category
     * @summary Get One By Slug
     * @param {string} categorySlug
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneBySlugApiOrganizersCategoriesSlugCategorySlugGet(categorySlug: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<any>;
    /**
     * Updates an existing Tag in the database
     * @summary Update One
     * @param {string} itemId
     * @param {CategoryIn} categoryIn
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiOrganizersCategoriesItemIdPut(itemId: string, categoryIn: CategoryIn, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<CategorySummary>;
};
/**
 * OrganizerCategoriesApi - object-oriented interface
 * @export
 * @class OrganizerCategoriesApi
 * @extends {BaseAPI}
 */
export declare class OrganizerCategoriesApi extends BaseAPI {
    /**
     * Creates a Category in the database
     * @summary Create One
     * @param {CategoryIn} categoryIn
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerCategoriesApi
     */
    createOneApiOrganizersCategoriesPost(categoryIn: CategoryIn, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Removes a recipe category from the database. Deleting a category does not impact a recipe. The category will be removed from any recipes that contain it
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerCategoriesApi
     */
    deleteOneApiOrganizersCategoriesItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Returns a list of available categories in the database
     * @summary Get All
     * @param {string} [groupId]
     * @param {number} [page]
     * @param {number} [perPage]
     * @param {string} [orderBy]
     * @param {OrderDirection} [orderDirection]
     * @param {string} [queryFilter]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerCategoriesApi
     */
    getAllApiOrganizersCategoriesGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RecipeCategoryPagination, any>>;
    /**
     * Returns a list of categories that do not contain any recipes
     * @summary Get All Empty
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerCategoriesApi
     */
    getAllEmptyApiOrganizersCategoriesEmptyGet(groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<CategoryBase[], any>>;
    /**
     * Returns a list of recipes associated with the provided category.
     * @summary Get One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerCategoriesApi
     */
    getOneApiOrganizersCategoriesItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<CategorySummary, any>>;
    /**
     * Returns a category object with the associated recieps relating to the category
     * @summary Get One By Slug
     * @param {string} categorySlug
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerCategoriesApi
     */
    getOneBySlugApiOrganizersCategoriesSlugCategorySlugGet(categorySlug: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Updates an existing Tag in the database
     * @summary Update One
     * @param {string} itemId
     * @param {CategoryIn} categoryIn
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerCategoriesApi
     */
    updateOneApiOrganizersCategoriesItemIdPut(itemId: string, categoryIn: CategoryIn, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<CategorySummary, any>>;
}
/**
 * OrganizerTagsApi - axios parameter creator
 * @export
 */
export declare const OrganizerTagsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Creates a Tag in the database
     * @summary Create One
     * @param {TagIn} tagIn
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiOrganizersTagsPost: (tagIn: TagIn, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Removes a recipe tag from the database. Deleting a tag does not impact a recipe. The tag will be removed from any recipes that contain it
     * @summary Delete Recipe Tag
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRecipeTagApiOrganizersTagsItemIdDelete: (itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Returns a list of available tags in the database
     * @summary Get All
     * @param {string} [groupId]
     * @param {number} [page]
     * @param {number} [perPage]
     * @param {string} [orderBy]
     * @param {OrderDirection} [orderDirection]
     * @param {string} [queryFilter]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllApiOrganizersTagsGet: (groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Returns a list of tags that do not contain any recipes
     * @summary Get Empty Tags
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEmptyTagsApiOrganizersTagsEmptyGet: (groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Returns a list of recipes associated with the provided tag.
     * @summary Get One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiOrganizersTagsItemIdGet: (itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get One By Slug
     * @param {string} tagSlug
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneBySlugApiOrganizersTagsSlugTagSlugGet: (tagSlug: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Updates an existing Tag in the database
     * @summary Update One
     * @param {string} itemId
     * @param {TagIn} tagIn
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiOrganizersTagsItemIdPut: (itemId: string, tagIn: TagIn, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * OrganizerTagsApi - functional programming interface
 * @export
 */
export declare const OrganizerTagsApiFp: (configuration?: Configuration) => {
    /**
     * Creates a Tag in the database
     * @summary Create One
     * @param {TagIn} tagIn
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiOrganizersTagsPost(tagIn: TagIn, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     * Removes a recipe tag from the database. Deleting a tag does not impact a recipe. The tag will be removed from any recipes that contain it
     * @summary Delete Recipe Tag
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRecipeTagApiOrganizersTagsItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     * Returns a list of available tags in the database
     * @summary Get All
     * @param {string} [groupId]
     * @param {number} [page]
     * @param {number} [perPage]
     * @param {string} [orderBy]
     * @param {OrderDirection} [orderDirection]
     * @param {string} [queryFilter]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllApiOrganizersTagsGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeTagPagination>>;
    /**
     * Returns a list of tags that do not contain any recipes
     * @summary Get Empty Tags
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEmptyTagsApiOrganizersTagsEmptyGet(groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     * Returns a list of recipes associated with the provided tag.
     * @summary Get One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiOrganizersTagsItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeTagResponse>>;
    /**
     *
     * @summary Get One By Slug
     * @param {string} tagSlug
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneBySlugApiOrganizersTagsSlugTagSlugGet(tagSlug: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeTagResponse>>;
    /**
     * Updates an existing Tag in the database
     * @summary Update One
     * @param {string} itemId
     * @param {TagIn} tagIn
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiOrganizersTagsItemIdPut(itemId: string, tagIn: TagIn, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeTagResponse>>;
};
/**
 * OrganizerTagsApi - factory interface
 * @export
 */
export declare const OrganizerTagsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Creates a Tag in the database
     * @summary Create One
     * @param {TagIn} tagIn
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiOrganizersTagsPost(tagIn: TagIn, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<any>;
    /**
     * Removes a recipe tag from the database. Deleting a tag does not impact a recipe. The tag will be removed from any recipes that contain it
     * @summary Delete Recipe Tag
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRecipeTagApiOrganizersTagsItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<any>;
    /**
     * Returns a list of available tags in the database
     * @summary Get All
     * @param {string} [groupId]
     * @param {number} [page]
     * @param {number} [perPage]
     * @param {string} [orderBy]
     * @param {OrderDirection} [orderDirection]
     * @param {string} [queryFilter]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllApiOrganizersTagsGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeTagPagination>;
    /**
     * Returns a list of tags that do not contain any recipes
     * @summary Get Empty Tags
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEmptyTagsApiOrganizersTagsEmptyGet(groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<any>;
    /**
     * Returns a list of recipes associated with the provided tag.
     * @summary Get One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiOrganizersTagsItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeTagResponse>;
    /**
     *
     * @summary Get One By Slug
     * @param {string} tagSlug
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneBySlugApiOrganizersTagsSlugTagSlugGet(tagSlug: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeTagResponse>;
    /**
     * Updates an existing Tag in the database
     * @summary Update One
     * @param {string} itemId
     * @param {TagIn} tagIn
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiOrganizersTagsItemIdPut(itemId: string, tagIn: TagIn, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeTagResponse>;
};
/**
 * OrganizerTagsApi - object-oriented interface
 * @export
 * @class OrganizerTagsApi
 * @extends {BaseAPI}
 */
export declare class OrganizerTagsApi extends BaseAPI {
    /**
     * Creates a Tag in the database
     * @summary Create One
     * @param {TagIn} tagIn
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerTagsApi
     */
    createOneApiOrganizersTagsPost(tagIn: TagIn, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Removes a recipe tag from the database. Deleting a tag does not impact a recipe. The tag will be removed from any recipes that contain it
     * @summary Delete Recipe Tag
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerTagsApi
     */
    deleteRecipeTagApiOrganizersTagsItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Returns a list of available tags in the database
     * @summary Get All
     * @param {string} [groupId]
     * @param {number} [page]
     * @param {number} [perPage]
     * @param {string} [orderBy]
     * @param {OrderDirection} [orderDirection]
     * @param {string} [queryFilter]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerTagsApi
     */
    getAllApiOrganizersTagsGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RecipeTagPagination, any>>;
    /**
     * Returns a list of tags that do not contain any recipes
     * @summary Get Empty Tags
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerTagsApi
     */
    getEmptyTagsApiOrganizersTagsEmptyGet(groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Returns a list of recipes associated with the provided tag.
     * @summary Get One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerTagsApi
     */
    getOneApiOrganizersTagsItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RecipeTagResponse, any>>;
    /**
     *
     * @summary Get One By Slug
     * @param {string} tagSlug
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerTagsApi
     */
    getOneBySlugApiOrganizersTagsSlugTagSlugGet(tagSlug: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RecipeTagResponse, any>>;
    /**
     * Updates an existing Tag in the database
     * @summary Update One
     * @param {string} itemId
     * @param {TagIn} tagIn
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerTagsApi
     */
    updateOneApiOrganizersTagsItemIdPut(itemId: string, tagIn: TagIn, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RecipeTagResponse, any>>;
}
/**
 * OrganizerToolsApi - axios parameter creator
 * @export
 */
export declare const OrganizerToolsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Create One
     * @param {RecipeToolCreate} recipeToolCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiOrganizersToolsPost: (recipeToolCreate: RecipeToolCreate, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiOrganizersToolsItemIdDelete: (itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
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
    getAllApiOrganizersToolsGet: (page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiOrganizersToolsItemIdGet: (itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get One By Slug
     * @param {string} toolSlug
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneBySlugApiOrganizersToolsSlugToolSlugGet: (toolSlug: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {RecipeToolCreate} recipeToolCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiOrganizersToolsItemIdPut: (itemId: string, recipeToolCreate: RecipeToolCreate, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * OrganizerToolsApi - functional programming interface
 * @export
 */
export declare const OrganizerToolsApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Create One
     * @param {RecipeToolCreate} recipeToolCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiOrganizersToolsPost(recipeToolCreate: RecipeToolCreate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeTool>>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiOrganizersToolsItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeTool>>;
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
    getAllApiOrganizersToolsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeToolPagination>>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiOrganizersToolsItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeTool>>;
    /**
     *
     * @summary Get One By Slug
     * @param {string} toolSlug
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneBySlugApiOrganizersToolsSlugToolSlugGet(toolSlug: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeToolResponse>>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {RecipeToolCreate} recipeToolCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiOrganizersToolsItemIdPut(itemId: string, recipeToolCreate: RecipeToolCreate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeTool>>;
};
/**
 * OrganizerToolsApi - factory interface
 * @export
 */
export declare const OrganizerToolsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Create One
     * @param {RecipeToolCreate} recipeToolCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiOrganizersToolsPost(recipeToolCreate: RecipeToolCreate, acceptLanguage?: string, options?: any): AxiosPromise<RecipeTool>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiOrganizersToolsItemIdDelete(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeTool>;
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
    getAllApiOrganizersToolsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeToolPagination>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiOrganizersToolsItemIdGet(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeTool>;
    /**
     *
     * @summary Get One By Slug
     * @param {string} toolSlug
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneBySlugApiOrganizersToolsSlugToolSlugGet(toolSlug: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeToolResponse>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {RecipeToolCreate} recipeToolCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiOrganizersToolsItemIdPut(itemId: string, recipeToolCreate: RecipeToolCreate, acceptLanguage?: string, options?: any): AxiosPromise<RecipeTool>;
};
/**
 * OrganizerToolsApi - object-oriented interface
 * @export
 * @class OrganizerToolsApi
 * @extends {BaseAPI}
 */
export declare class OrganizerToolsApi extends BaseAPI {
    /**
     *
     * @summary Create One
     * @param {RecipeToolCreate} recipeToolCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerToolsApi
     */
    createOneApiOrganizersToolsPost(recipeToolCreate: RecipeToolCreate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RecipeTool, any>>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerToolsApi
     */
    deleteOneApiOrganizersToolsItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RecipeTool, any>>;
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
     * @memberof OrganizerToolsApi
     */
    getAllApiOrganizersToolsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RecipeToolPagination, any>>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerToolsApi
     */
    getOneApiOrganizersToolsItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RecipeTool, any>>;
    /**
     *
     * @summary Get One By Slug
     * @param {string} toolSlug
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerToolsApi
     */
    getOneBySlugApiOrganizersToolsSlugToolSlugGet(toolSlug: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RecipeToolResponse, any>>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {RecipeToolCreate} recipeToolCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizerToolsApi
     */
    updateOneApiOrganizersToolsItemIdPut(itemId: string, recipeToolCreate: RecipeToolCreate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RecipeTool, any>>;
}
//# sourceMappingURL=organizer-api.d.ts.map