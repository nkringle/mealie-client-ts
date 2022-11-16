import { Configuration } from "../common/configuration";
import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";
import { BaseAPI, RequestArgs } from "../common/base";
import { AssignCategories, AssignSettings, AssignTags, CategoriesInner, Cookbook, CreateRecipe, CreateRecipeByUrlBulk, DeleteRecipes, ExportRecipes, FormatResponse, GroupDataExport, OrderDirection, Recipe, RecipeAsset, RecipeCommentOut, RecipePagination, RecipeSummary, RecipeZipTokenResponse, ScrapeRecipe, ScrapeRecipeTest, SuccessResponse, UpdateImageResponse } from "../models";
/**
 * RecipeCommentsApi - axios parameter creator
 * @export
 */
export declare const RecipeCommentsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Get all comments for a recipe
     * @summary Get Recipe Comments
     * @param {string} slug
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecipeCommentsApiRecipesSlugCommentsGet: (slug: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * RecipeCommentsApi - functional programming interface
 * @export
 */
export declare const RecipeCommentsApiFp: (configuration?: Configuration) => {
    /**
     * Get all comments for a recipe
     * @summary Get Recipe Comments
     * @param {string} slug
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecipeCommentsApiRecipesSlugCommentsGet(slug: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<RecipeCommentOut>>>;
};
/**
 * RecipeCommentsApi - factory interface
 * @export
 */
export declare const RecipeCommentsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Get all comments for a recipe
     * @summary Get Recipe Comments
     * @param {string} slug
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecipeCommentsApiRecipesSlugCommentsGet(slug: string, acceptLanguage?: string, options?: any): AxiosPromise<Array<RecipeCommentOut>>;
};
/**
 * RecipeCommentsApi - object-oriented interface
 * @export
 * @class RecipeCommentsApi
 * @extends {BaseAPI}
 */
export declare class RecipeCommentsApi extends BaseAPI {
    /**
     * Get all comments for a recipe
     * @summary Get Recipe Comments
     * @param {string} slug
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipeCommentsApi
     */
    getRecipeCommentsApiRecipesSlugCommentsGet(slug: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RecipeCommentOut[], any>>;
}
/**
 * RecipesBulkActionsApi - axios parameter creator
 * @export
 */
export declare const RecipesBulkActionsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Bulk Categorize Recipes
     * @param {AssignCategories} assignCategories
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    bulkCategorizeRecipesApiRecipesBulkActionsCategorizePost: (assignCategories: AssignCategories, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Bulk Delete Recipes
     * @param {DeleteRecipes} deleteRecipes
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    bulkDeleteRecipesApiRecipesBulkActionsDeletePost: (deleteRecipes: DeleteRecipes, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Bulk Export Recipes
     * @param {ExportRecipes} exportRecipes
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    bulkExportRecipesApiRecipesBulkActionsExportPost: (exportRecipes: ExportRecipes, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Bulk Settings Recipes
     * @param {AssignSettings} assignSettings
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    bulkSettingsRecipesApiRecipesBulkActionsSettingsPost: (assignSettings: AssignSettings, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Bulk Tag Recipes
     * @param {AssignTags} assignTags
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    bulkTagRecipesApiRecipesBulkActionsTagPost: (assignTags: AssignTags, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get Exported Data
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getExportedDataApiRecipesBulkActionsExportGet: (acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Returns a token to download a file
     * @summary Get Exported Data Token
     * @param {string} path
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getExportedDataTokenApiRecipesBulkActionsExportDownloadGet: (path: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Remove all exports data, including items on disk without database entry
     * @summary Purge Export Data
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    purgeExportDataApiRecipesBulkActionsExportPurgeDelete: (acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * RecipesBulkActionsApi - functional programming interface
 * @export
 */
export declare const RecipesBulkActionsApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Bulk Categorize Recipes
     * @param {AssignCategories} assignCategories
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    bulkCategorizeRecipesApiRecipesBulkActionsCategorizePost(assignCategories: AssignCategories, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     *
     * @summary Bulk Delete Recipes
     * @param {DeleteRecipes} deleteRecipes
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    bulkDeleteRecipesApiRecipesBulkActionsDeletePost(deleteRecipes: DeleteRecipes, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     *
     * @summary Bulk Export Recipes
     * @param {ExportRecipes} exportRecipes
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    bulkExportRecipesApiRecipesBulkActionsExportPost(exportRecipes: ExportRecipes, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     *
     * @summary Bulk Settings Recipes
     * @param {AssignSettings} assignSettings
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    bulkSettingsRecipesApiRecipesBulkActionsSettingsPost(assignSettings: AssignSettings, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     *
     * @summary Bulk Tag Recipes
     * @param {AssignTags} assignTags
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    bulkTagRecipesApiRecipesBulkActionsTagPost(assignTags: AssignTags, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     *
     * @summary Get Exported Data
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getExportedDataApiRecipesBulkActionsExportGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GroupDataExport>>>;
    /**
     * Returns a token to download a file
     * @summary Get Exported Data Token
     * @param {string} path
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getExportedDataTokenApiRecipesBulkActionsExportDownloadGet(path: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     * Remove all exports data, including items on disk without database entry
     * @summary Purge Export Data
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    purgeExportDataApiRecipesBulkActionsExportPurgeDelete(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>>;
};
/**
 * RecipesBulkActionsApi - factory interface
 * @export
 */
export declare const RecipesBulkActionsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Bulk Categorize Recipes
     * @param {AssignCategories} assignCategories
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    bulkCategorizeRecipesApiRecipesBulkActionsCategorizePost(assignCategories: AssignCategories, acceptLanguage?: string, options?: any): AxiosPromise<any>;
    /**
     *
     * @summary Bulk Delete Recipes
     * @param {DeleteRecipes} deleteRecipes
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    bulkDeleteRecipesApiRecipesBulkActionsDeletePost(deleteRecipes: DeleteRecipes, acceptLanguage?: string, options?: any): AxiosPromise<any>;
    /**
     *
     * @summary Bulk Export Recipes
     * @param {ExportRecipes} exportRecipes
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    bulkExportRecipesApiRecipesBulkActionsExportPost(exportRecipes: ExportRecipes, acceptLanguage?: string, options?: any): AxiosPromise<any>;
    /**
     *
     * @summary Bulk Settings Recipes
     * @param {AssignSettings} assignSettings
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    bulkSettingsRecipesApiRecipesBulkActionsSettingsPost(assignSettings: AssignSettings, acceptLanguage?: string, options?: any): AxiosPromise<any>;
    /**
     *
     * @summary Bulk Tag Recipes
     * @param {AssignTags} assignTags
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    bulkTagRecipesApiRecipesBulkActionsTagPost(assignTags: AssignTags, acceptLanguage?: string, options?: any): AxiosPromise<any>;
    /**
     *
     * @summary Get Exported Data
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getExportedDataApiRecipesBulkActionsExportGet(acceptLanguage?: string, options?: any): AxiosPromise<Array<GroupDataExport>>;
    /**
     * Returns a token to download a file
     * @summary Get Exported Data Token
     * @param {string} path
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getExportedDataTokenApiRecipesBulkActionsExportDownloadGet(path: string, acceptLanguage?: string, options?: any): AxiosPromise<any>;
    /**
     * Remove all exports data, including items on disk without database entry
     * @summary Purge Export Data
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    purgeExportDataApiRecipesBulkActionsExportPurgeDelete(acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse>;
};
/**
 * RecipesBulkActionsApi - object-oriented interface
 * @export
 * @class RecipesBulkActionsApi
 * @extends {BaseAPI}
 */
export declare class RecipesBulkActionsApi extends BaseAPI {
    /**
     *
     * @summary Bulk Categorize Recipes
     * @param {AssignCategories} assignCategories
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesBulkActionsApi
     */
    bulkCategorizeRecipesApiRecipesBulkActionsCategorizePost(assignCategories: AssignCategories, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     *
     * @summary Bulk Delete Recipes
     * @param {DeleteRecipes} deleteRecipes
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesBulkActionsApi
     */
    bulkDeleteRecipesApiRecipesBulkActionsDeletePost(deleteRecipes: DeleteRecipes, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     *
     * @summary Bulk Export Recipes
     * @param {ExportRecipes} exportRecipes
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesBulkActionsApi
     */
    bulkExportRecipesApiRecipesBulkActionsExportPost(exportRecipes: ExportRecipes, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     *
     * @summary Bulk Settings Recipes
     * @param {AssignSettings} assignSettings
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesBulkActionsApi
     */
    bulkSettingsRecipesApiRecipesBulkActionsSettingsPost(assignSettings: AssignSettings, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     *
     * @summary Bulk Tag Recipes
     * @param {AssignTags} assignTags
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesBulkActionsApi
     */
    bulkTagRecipesApiRecipesBulkActionsTagPost(assignTags: AssignTags, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     *
     * @summary Get Exported Data
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesBulkActionsApi
     */
    getExportedDataApiRecipesBulkActionsExportGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GroupDataExport[], any>>;
    /**
     * Returns a token to download a file
     * @summary Get Exported Data Token
     * @param {string} path
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesBulkActionsApi
     */
    getExportedDataTokenApiRecipesBulkActionsExportDownloadGet(path: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Remove all exports data, including items on disk without database entry
     * @summary Purge Export Data
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesBulkActionsApi
     */
    purgeExportDataApiRecipesBulkActionsExportPurgeDelete(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<SuccessResponse, any>>;
}
/**
 * RecipesCRUDApi - axios parameter creator
 * @export
 */
export declare const RecipesCRUDApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Takes in a JSON string and loads data into the database as a new entry
     * @summary Create One
     * @param {CreateRecipe} createRecipe
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiRecipesPost: (createRecipe: CreateRecipe, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Create recipe from archive
     * @summary Create Recipe From Zip
     * @param {File} archive
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRecipeFromZipApiRecipesCreateFromZipPost: (archive: File, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Takes an image and creates a recipe based on the image
     * @summary Create Recipe Ocr
     * @param {string} extension
     * @param {File} file
     * @param {boolean} makefilerecipeimage
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRecipeOcrApiRecipesCreateOcrPost: (extension: string, file: File, makefilerecipeimage: boolean, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Deletes a recipe by slug
     * @summary Delete One
     * @param {string} slug
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiRecipesSlugDelete: (slug: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get All
     * @param {Cookbook} [cookbook]
     * @param {Array<CategoriesInner>} [categories]
     * @param {Array<CategoriesInner>} [tags]
     * @param {Array<CategoriesInner>} [tools]
     * @param {string} [groupId]
     * @param {number} [page]
     * @param {number} [perPage]
     * @param {string} [orderBy]
     * @param {OrderDirection} [orderDirection]
     * @param {string} [queryFilter]
     * @param {boolean} [loadFood]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllApiRecipesGet: (cookbook?: Cookbook, categories?: Array<CategoriesInner>, tags?: Array<CategoriesInner>, tools?: Array<CategoriesInner>, groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, loadFood?: boolean, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Takes in a recipe slug, returns all data for a recipe
     * @summary Get One
     * @param {string} slug
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiRecipesSlugGet: (slug: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Takes in a URL and attempts to scrape data and load it into the database
     * @summary Parse Recipe Url
     * @param {ScrapeRecipe} scrapeRecipe
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    parseRecipeUrlApiRecipesCreateUrlPost: (scrapeRecipe: ScrapeRecipe, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Takes in a URL and attempts to scrape data and load it into the database
     * @summary Parse Recipe Url Bulk
     * @param {CreateRecipeByUrlBulk} createRecipeByUrlBulk
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    parseRecipeUrlBulkApiRecipesCreateUrlBulkPost: (createRecipeByUrlBulk: CreateRecipeByUrlBulk, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Updates a recipe by existing slug and data.
     * @summary Patch One
     * @param {string} slug
     * @param {Recipe} recipe
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchOneApiRecipesSlugPatch: (slug: string, recipe: Recipe, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Scrape Image Url
     * @param {string} slug
     * @param {ScrapeRecipe} scrapeRecipe
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scrapeImageUrlApiRecipesSlugImagePost: (slug: string, scrapeRecipe: ScrapeRecipe, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Test Parse Recipe Url
     * @param {ScrapeRecipeTest} scrapeRecipeTest
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    testParseRecipeUrlApiRecipesTestScrapeUrlPost: (scrapeRecipeTest: ScrapeRecipeTest, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Updates a recipe by existing slug and data.
     * @summary Update One
     * @param {string} slug
     * @param {Recipe} recipe
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiRecipesSlugPut: (slug: string, recipe: Recipe, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Update Recipe Image
     * @param {string} slug
     * @param {File} image
     * @param {string} extension
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRecipeImageApiRecipesSlugImagePut: (slug: string, image: File, extension: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Upload a file to store as a recipe asset
     * @summary Upload Recipe Asset
     * @param {string} slug
     * @param {string} name
     * @param {string} icon
     * @param {string} extension
     * @param {File} file
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadRecipeAssetApiRecipesSlugAssetsPost: (slug: string, name: string, icon: string, extension: string, file: File, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * RecipesCRUDApi - functional programming interface
 * @export
 */
export declare const RecipesCRUDApiFp: (configuration?: Configuration) => {
    /**
     * Takes in a JSON string and loads data into the database as a new entry
     * @summary Create One
     * @param {CreateRecipe} createRecipe
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiRecipesPost(createRecipe: CreateRecipe, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    /**
     * Create recipe from archive
     * @summary Create Recipe From Zip
     * @param {File} archive
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRecipeFromZipApiRecipesCreateFromZipPost(archive: File, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     * Takes an image and creates a recipe based on the image
     * @summary Create Recipe Ocr
     * @param {string} extension
     * @param {File} file
     * @param {boolean} makefilerecipeimage
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRecipeOcrApiRecipesCreateOcrPost(extension: string, file: File, makefilerecipeimage: boolean, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    /**
     * Deletes a recipe by slug
     * @summary Delete One
     * @param {string} slug
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiRecipesSlugDelete(slug: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     *
     * @summary Get All
     * @param {Cookbook} [cookbook]
     * @param {Array<CategoriesInner>} [categories]
     * @param {Array<CategoriesInner>} [tags]
     * @param {Array<CategoriesInner>} [tools]
     * @param {string} [groupId]
     * @param {number} [page]
     * @param {number} [perPage]
     * @param {string} [orderBy]
     * @param {OrderDirection} [orderDirection]
     * @param {string} [queryFilter]
     * @param {boolean} [loadFood]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllApiRecipesGet(cookbook?: Cookbook, categories?: Array<CategoriesInner>, tags?: Array<CategoriesInner>, tools?: Array<CategoriesInner>, groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, loadFood?: boolean, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipePagination>>;
    /**
     * Takes in a recipe slug, returns all data for a recipe
     * @summary Get One
     * @param {string} slug
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiRecipesSlugGet(slug: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Recipe>>;
    /**
     * Takes in a URL and attempts to scrape data and load it into the database
     * @summary Parse Recipe Url
     * @param {ScrapeRecipe} scrapeRecipe
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    parseRecipeUrlApiRecipesCreateUrlPost(scrapeRecipe: ScrapeRecipe, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
    /**
     * Takes in a URL and attempts to scrape data and load it into the database
     * @summary Parse Recipe Url Bulk
     * @param {CreateRecipeByUrlBulk} createRecipeByUrlBulk
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    parseRecipeUrlBulkApiRecipesCreateUrlBulkPost(createRecipeByUrlBulk: CreateRecipeByUrlBulk, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     * Updates a recipe by existing slug and data.
     * @summary Patch One
     * @param {string} slug
     * @param {Recipe} recipe
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchOneApiRecipesSlugPatch(slug: string, recipe: Recipe, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     *
     * @summary Scrape Image Url
     * @param {string} slug
     * @param {ScrapeRecipe} scrapeRecipe
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scrapeImageUrlApiRecipesSlugImagePost(slug: string, scrapeRecipe: ScrapeRecipe, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     *
     * @summary Test Parse Recipe Url
     * @param {ScrapeRecipeTest} scrapeRecipeTest
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    testParseRecipeUrlApiRecipesTestScrapeUrlPost(scrapeRecipeTest: ScrapeRecipeTest, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     * Updates a recipe by existing slug and data.
     * @summary Update One
     * @param {string} slug
     * @param {Recipe} recipe
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiRecipesSlugPut(slug: string, recipe: Recipe, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     *
     * @summary Update Recipe Image
     * @param {string} slug
     * @param {File} image
     * @param {string} extension
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRecipeImageApiRecipesSlugImagePut(slug: string, image: File, extension: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateImageResponse>>;
    /**
     * Upload a file to store as a recipe asset
     * @summary Upload Recipe Asset
     * @param {string} slug
     * @param {string} name
     * @param {string} icon
     * @param {string} extension
     * @param {File} file
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadRecipeAssetApiRecipesSlugAssetsPost(slug: string, name: string, icon: string, extension: string, file: File, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeAsset>>;
};
/**
 * RecipesCRUDApi - factory interface
 * @export
 */
export declare const RecipesCRUDApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Takes in a JSON string and loads data into the database as a new entry
     * @summary Create One
     * @param {CreateRecipe} createRecipe
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiRecipesPost(createRecipe: CreateRecipe, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<string>;
    /**
     * Create recipe from archive
     * @summary Create Recipe From Zip
     * @param {File} archive
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRecipeFromZipApiRecipesCreateFromZipPost(archive: File, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<any>;
    /**
     * Takes an image and creates a recipe based on the image
     * @summary Create Recipe Ocr
     * @param {string} extension
     * @param {File} file
     * @param {boolean} makefilerecipeimage
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRecipeOcrApiRecipesCreateOcrPost(extension: string, file: File, makefilerecipeimage: boolean, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<string>;
    /**
     * Deletes a recipe by slug
     * @summary Delete One
     * @param {string} slug
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiRecipesSlugDelete(slug: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<any>;
    /**
     *
     * @summary Get All
     * @param {Cookbook} [cookbook]
     * @param {Array<CategoriesInner>} [categories]
     * @param {Array<CategoriesInner>} [tags]
     * @param {Array<CategoriesInner>} [tools]
     * @param {string} [groupId]
     * @param {number} [page]
     * @param {number} [perPage]
     * @param {string} [orderBy]
     * @param {OrderDirection} [orderDirection]
     * @param {string} [queryFilter]
     * @param {boolean} [loadFood]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllApiRecipesGet(cookbook?: Cookbook, categories?: Array<CategoriesInner>, tags?: Array<CategoriesInner>, tools?: Array<CategoriesInner>, groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, loadFood?: boolean, acceptLanguage?: string, options?: any): AxiosPromise<RecipePagination>;
    /**
     * Takes in a recipe slug, returns all data for a recipe
     * @summary Get One
     * @param {string} slug
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiRecipesSlugGet(slug: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<Recipe>;
    /**
     * Takes in a URL and attempts to scrape data and load it into the database
     * @summary Parse Recipe Url
     * @param {ScrapeRecipe} scrapeRecipe
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    parseRecipeUrlApiRecipesCreateUrlPost(scrapeRecipe: ScrapeRecipe, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<string>;
    /**
     * Takes in a URL and attempts to scrape data and load it into the database
     * @summary Parse Recipe Url Bulk
     * @param {CreateRecipeByUrlBulk} createRecipeByUrlBulk
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    parseRecipeUrlBulkApiRecipesCreateUrlBulkPost(createRecipeByUrlBulk: CreateRecipeByUrlBulk, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<any>;
    /**
     * Updates a recipe by existing slug and data.
     * @summary Patch One
     * @param {string} slug
     * @param {Recipe} recipe
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    patchOneApiRecipesSlugPatch(slug: string, recipe: Recipe, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<any>;
    /**
     *
     * @summary Scrape Image Url
     * @param {string} slug
     * @param {ScrapeRecipe} scrapeRecipe
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    scrapeImageUrlApiRecipesSlugImagePost(slug: string, scrapeRecipe: ScrapeRecipe, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<any>;
    /**
     *
     * @summary Test Parse Recipe Url
     * @param {ScrapeRecipeTest} scrapeRecipeTest
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    testParseRecipeUrlApiRecipesTestScrapeUrlPost(scrapeRecipeTest: ScrapeRecipeTest, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<any>;
    /**
     * Updates a recipe by existing slug and data.
     * @summary Update One
     * @param {string} slug
     * @param {Recipe} recipe
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiRecipesSlugPut(slug: string, recipe: Recipe, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<any>;
    /**
     *
     * @summary Update Recipe Image
     * @param {string} slug
     * @param {File} image
     * @param {string} extension
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRecipeImageApiRecipesSlugImagePut(slug: string, image: File, extension: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<UpdateImageResponse>;
    /**
     * Upload a file to store as a recipe asset
     * @summary Upload Recipe Asset
     * @param {string} slug
     * @param {string} name
     * @param {string} icon
     * @param {string} extension
     * @param {File} file
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadRecipeAssetApiRecipesSlugAssetsPost(slug: string, name: string, icon: string, extension: string, file: File, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeAsset>;
};
/**
 * RecipesCRUDApi - object-oriented interface
 * @export
 * @class RecipesCRUDApi
 * @extends {BaseAPI}
 */
export declare class RecipesCRUDApi extends BaseAPI {
    /**
     * Takes in a JSON string and loads data into the database as a new entry
     * @summary Create One
     * @param {CreateRecipe} createRecipe
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesCRUDApi
     */
    createOneApiRecipesPost(createRecipe: CreateRecipe, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    /**
     * Create recipe from archive
     * @summary Create Recipe From Zip
     * @param {File} archive
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesCRUDApi
     */
    createRecipeFromZipApiRecipesCreateFromZipPost(archive: File, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Takes an image and creates a recipe based on the image
     * @summary Create Recipe Ocr
     * @param {string} extension
     * @param {File} file
     * @param {boolean} makefilerecipeimage
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesCRUDApi
     */
    createRecipeOcrApiRecipesCreateOcrPost(extension: string, file: File, makefilerecipeimage: boolean, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    /**
     * Deletes a recipe by slug
     * @summary Delete One
     * @param {string} slug
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesCRUDApi
     */
    deleteOneApiRecipesSlugDelete(slug: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     *
     * @summary Get All
     * @param {Cookbook} [cookbook]
     * @param {Array<CategoriesInner>} [categories]
     * @param {Array<CategoriesInner>} [tags]
     * @param {Array<CategoriesInner>} [tools]
     * @param {string} [groupId]
     * @param {number} [page]
     * @param {number} [perPage]
     * @param {string} [orderBy]
     * @param {OrderDirection} [orderDirection]
     * @param {string} [queryFilter]
     * @param {boolean} [loadFood]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesCRUDApi
     */
    getAllApiRecipesGet(cookbook?: Cookbook, categories?: Array<CategoriesInner>, tags?: Array<CategoriesInner>, tools?: Array<CategoriesInner>, groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, loadFood?: boolean, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RecipePagination, any>>;
    /**
     * Takes in a recipe slug, returns all data for a recipe
     * @summary Get One
     * @param {string} slug
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesCRUDApi
     */
    getOneApiRecipesSlugGet(slug: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Recipe, any>>;
    /**
     * Takes in a URL and attempts to scrape data and load it into the database
     * @summary Parse Recipe Url
     * @param {ScrapeRecipe} scrapeRecipe
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesCRUDApi
     */
    parseRecipeUrlApiRecipesCreateUrlPost(scrapeRecipe: ScrapeRecipe, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string, any>>;
    /**
     * Takes in a URL and attempts to scrape data and load it into the database
     * @summary Parse Recipe Url Bulk
     * @param {CreateRecipeByUrlBulk} createRecipeByUrlBulk
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesCRUDApi
     */
    parseRecipeUrlBulkApiRecipesCreateUrlBulkPost(createRecipeByUrlBulk: CreateRecipeByUrlBulk, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Updates a recipe by existing slug and data.
     * @summary Patch One
     * @param {string} slug
     * @param {Recipe} recipe
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesCRUDApi
     */
    patchOneApiRecipesSlugPatch(slug: string, recipe: Recipe, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     *
     * @summary Scrape Image Url
     * @param {string} slug
     * @param {ScrapeRecipe} scrapeRecipe
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesCRUDApi
     */
    scrapeImageUrlApiRecipesSlugImagePost(slug: string, scrapeRecipe: ScrapeRecipe, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     *
     * @summary Test Parse Recipe Url
     * @param {ScrapeRecipeTest} scrapeRecipeTest
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesCRUDApi
     */
    testParseRecipeUrlApiRecipesTestScrapeUrlPost(scrapeRecipeTest: ScrapeRecipeTest, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Updates a recipe by existing slug and data.
     * @summary Update One
     * @param {string} slug
     * @param {Recipe} recipe
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesCRUDApi
     */
    updateOneApiRecipesSlugPut(slug: string, recipe: Recipe, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     *
     * @summary Update Recipe Image
     * @param {string} slug
     * @param {File} image
     * @param {string} extension
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesCRUDApi
     */
    updateRecipeImageApiRecipesSlugImagePut(slug: string, image: File, extension: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<UpdateImageResponse, any>>;
    /**
     * Upload a file to store as a recipe asset
     * @summary Upload Recipe Asset
     * @param {string} slug
     * @param {string} name
     * @param {string} icon
     * @param {string} extension
     * @param {File} file
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesCRUDApi
     */
    uploadRecipeAssetApiRecipesSlugAssetsPost(slug: string, name: string, icon: string, extension: string, file: File, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RecipeAsset, any>>;
}
/**
 * RecipesExportsApi - axios parameter creator
 * @export
 */
export declare const RecipesExportsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * ## Parameters `template_name`: The name of the template to use to use in the exports listed. Template type will automatically be set on the backend. Because of this, it\'s important that your templates have unique names. See available names and formats in the /api/recipes/exports endpoint.
     * @summary Get Recipe As Format
     * @param {string} slug
     * @param {string} templateName
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecipeAsFormatApiRecipesSlugExportsGet: (slug: string, templateName: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get a Recipe and It\'s Original Image as a Zip File
     * @summary Get Recipe As Zip
     * @param {string} slug
     * @param {string} token
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecipeAsZipApiRecipesSlugExportsZipGet: (slug: string, token: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get Recipe Formats And Templates
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecipeFormatsAndTemplatesApiRecipesExportsGet: (groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Generates a recipe zip token to be used to download a recipe as a zip file
     * @summary Get Recipe Zip Token
     * @param {string} slug
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecipeZipTokenApiRecipesSlugExportsPost: (slug: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * RecipesExportsApi - functional programming interface
 * @export
 */
export declare const RecipesExportsApiFp: (configuration?: Configuration) => {
    /**
     * ## Parameters `template_name`: The name of the template to use to use in the exports listed. Template type will automatically be set on the backend. Because of this, it\'s important that your templates have unique names. See available names and formats in the /api/recipes/exports endpoint.
     * @summary Get Recipe As Format
     * @param {string} slug
     * @param {string} templateName
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecipeAsFormatApiRecipesSlugExportsGet(slug: string, templateName: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * Get a Recipe and It\'s Original Image as a Zip File
     * @summary Get Recipe As Zip
     * @param {string} slug
     * @param {string} token
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecipeAsZipApiRecipesSlugExportsZipGet(slug: string, token: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     *
     * @summary Get Recipe Formats And Templates
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecipeFormatsAndTemplatesApiRecipesExportsGet(groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FormatResponse>>;
    /**
     * Generates a recipe zip token to be used to download a recipe as a zip file
     * @summary Get Recipe Zip Token
     * @param {string} slug
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecipeZipTokenApiRecipesSlugExportsPost(slug: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeZipTokenResponse>>;
};
/**
 * RecipesExportsApi - factory interface
 * @export
 */
export declare const RecipesExportsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * ## Parameters `template_name`: The name of the template to use to use in the exports listed. Template type will automatically be set on the backend. Because of this, it\'s important that your templates have unique names. See available names and formats in the /api/recipes/exports endpoint.
     * @summary Get Recipe As Format
     * @param {string} slug
     * @param {string} templateName
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecipeAsFormatApiRecipesSlugExportsGet(slug: string, templateName: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<void>;
    /**
     * Get a Recipe and It\'s Original Image as a Zip File
     * @summary Get Recipe As Zip
     * @param {string} slug
     * @param {string} token
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecipeAsZipApiRecipesSlugExportsZipGet(slug: string, token: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<any>;
    /**
     *
     * @summary Get Recipe Formats And Templates
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecipeFormatsAndTemplatesApiRecipesExportsGet(groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<FormatResponse>;
    /**
     * Generates a recipe zip token to be used to download a recipe as a zip file
     * @summary Get Recipe Zip Token
     * @param {string} slug
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecipeZipTokenApiRecipesSlugExportsPost(slug: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeZipTokenResponse>;
};
/**
 * RecipesExportsApi - object-oriented interface
 * @export
 * @class RecipesExportsApi
 * @extends {BaseAPI}
 */
export declare class RecipesExportsApi extends BaseAPI {
    /**
     * ## Parameters `template_name`: The name of the template to use to use in the exports listed. Template type will automatically be set on the backend. Because of this, it\'s important that your templates have unique names. See available names and formats in the /api/recipes/exports endpoint.
     * @summary Get Recipe As Format
     * @param {string} slug
     * @param {string} templateName
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesExportsApi
     */
    getRecipeAsFormatApiRecipesSlugExportsGet(slug: string, templateName: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     * Get a Recipe and It\'s Original Image as a Zip File
     * @summary Get Recipe As Zip
     * @param {string} slug
     * @param {string} token
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesExportsApi
     */
    getRecipeAsZipApiRecipesSlugExportsZipGet(slug: string, token: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     *
     * @summary Get Recipe Formats And Templates
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesExportsApi
     */
    getRecipeFormatsAndTemplatesApiRecipesExportsGet(groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<FormatResponse, any>>;
    /**
     * Generates a recipe zip token to be used to download a recipe as a zip file
     * @summary Get Recipe Zip Token
     * @param {string} slug
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesExportsApi
     */
    getRecipeZipTokenApiRecipesSlugExportsPost(slug: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RecipeZipTokenResponse, any>>;
}
/**
 * RecipesQueryAllApi - axios parameter creator
 * @export
 */
export declare const RecipesQueryAllApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get Uncategorized Recipes
     * @param {boolean} [count]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUncategorizedRecipesApiRecipesSummaryUncategorizedGet: (count?: boolean, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get Untagged Recipes
     * @param {boolean} [count]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUntaggedRecipesApiRecipesSummaryUntaggedGet: (count?: boolean, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * RecipesQueryAllApi - functional programming interface
 * @export
 */
export declare const RecipesQueryAllApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get Uncategorized Recipes
     * @param {boolean} [count]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUncategorizedRecipesApiRecipesSummaryUncategorizedGet(count?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<RecipeSummary>>>;
    /**
     *
     * @summary Get Untagged Recipes
     * @param {boolean} [count]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUntaggedRecipesApiRecipesSummaryUntaggedGet(count?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<RecipeSummary>>>;
};
/**
 * RecipesQueryAllApi - factory interface
 * @export
 */
export declare const RecipesQueryAllApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Get Uncategorized Recipes
     * @param {boolean} [count]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUncategorizedRecipesApiRecipesSummaryUncategorizedGet(count?: boolean, options?: any): AxiosPromise<Array<RecipeSummary>>;
    /**
     *
     * @summary Get Untagged Recipes
     * @param {boolean} [count]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUntaggedRecipesApiRecipesSummaryUntaggedGet(count?: boolean, options?: any): AxiosPromise<Array<RecipeSummary>>;
};
/**
 * RecipesQueryAllApi - object-oriented interface
 * @export
 * @class RecipesQueryAllApi
 * @extends {BaseAPI}
 */
export declare class RecipesQueryAllApi extends BaseAPI {
    /**
     *
     * @summary Get Uncategorized Recipes
     * @param {boolean} [count]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesQueryAllApi
     */
    getUncategorizedRecipesApiRecipesSummaryUncategorizedGet(count?: boolean, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RecipeSummary[], any>>;
    /**
     *
     * @summary Get Untagged Recipes
     * @param {boolean} [count]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesQueryAllApi
     */
    getUntaggedRecipesApiRecipesSummaryUntaggedGet(count?: boolean, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RecipeSummary[], any>>;
}
/**
 * RecipesSharedApi - axios parameter creator
 * @export
 */
export declare const RecipesSharedApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get Shared Recipe
     * @param {string} tokenId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSharedRecipeApiRecipesSharedTokenIdGet: (tokenId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * RecipesSharedApi - functional programming interface
 * @export
 */
export declare const RecipesSharedApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get Shared Recipe
     * @param {string} tokenId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSharedRecipeApiRecipesSharedTokenIdGet(tokenId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Recipe>>;
};
/**
 * RecipesSharedApi - factory interface
 * @export
 */
export declare const RecipesSharedApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Get Shared Recipe
     * @param {string} tokenId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSharedRecipeApiRecipesSharedTokenIdGet(tokenId: string, options?: any): AxiosPromise<Recipe>;
};
/**
 * RecipesSharedApi - object-oriented interface
 * @export
 * @class RecipesSharedApi
 * @extends {BaseAPI}
 */
export declare class RecipesSharedApi extends BaseAPI {
    /**
     *
     * @summary Get Shared Recipe
     * @param {string} tokenId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesSharedApi
     */
    getSharedRecipeApiRecipesSharedTokenIdGet(tokenId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Recipe, any>>;
}
//# sourceMappingURL=recipes-api.d.ts.map