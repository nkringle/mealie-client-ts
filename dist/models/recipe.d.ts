/**
 *
 * @export
 * @interface CreateRecipe
 */
import { ExportTypes } from "./app-backups-admin";
import { Food, Nutrition, Unit } from "./misc";
import { MealieSchemaRecipeRecipeCommentsUserBase } from "./generic-api";
import { CategoryBase, TagBase } from "./categories-tags-labels";
import { IngredientReferences } from "./ingredients";
export interface CreateRecipe {
    /**
     *
     * @type {string}
     * @memberof CreateRecipe
     */
    'name': string;
}
/**
 *
 * @export
 * @interface CreateRecipeBulk
 */
export interface CreateRecipeBulk {
    /**
     *
     * @type {string}
     * @memberof CreateRecipeBulk
     */
    'url': string;
    /**
     *
     * @type {Array<RecipeCategory>}
     * @memberof CreateRecipeBulk
     */
    'categories'?: Array<RecipeCategory>;
    /**
     *
     * @type {Array<RecipeTag>}
     * @memberof CreateRecipeBulk
     */
    'tags'?: Array<RecipeTag>;
}
/**
 *
 * @export
 * @interface CreateRecipeByUrlBulk
 */
export interface CreateRecipeByUrlBulk {
    /**
     *
     * @type {Array<CreateRecipeBulk>}
     * @memberof CreateRecipeByUrlBulk
     */
    'imports': Array<CreateRecipeBulk>;
}
/**
 *
 * @export
 * @interface DeleteRecipes
 */
export interface DeleteRecipes {
    /**
     *
     * @type {Array<string>}
     * @memberof DeleteRecipes
     */
    'recipes': Array<string>;
}
/**
 *
 * @export
 * @interface ExportRecipes
 */
export interface ExportRecipes {
    /**
     *
     * @type {Array<string>}
     * @memberof ExportRecipes
     */
    'recipes': Array<string>;
    /**
     *
     * @type {ExportTypes}
     * @memberof ExportRecipes
     */
    'exportType'?: ExportTypes;
}
/**
 *
 * @export
 * @interface Recipe
 */
export interface Recipe {
    /**
     *
     * @type {string}
     * @memberof Recipe
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof Recipe
     */
    'userId'?: string;
    /**
     *
     * @type {string}
     * @memberof Recipe
     */
    'groupId'?: string;
    /**
     *
     * @type {string}
     * @memberof Recipe
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof Recipe
     */
    'slug'?: string;
    /**
     *
     * @type {any}
     * @memberof Recipe
     */
    'image'?: any;
    /**
     *
     * @type {string}
     * @memberof Recipe
     */
    'recipeYield'?: string;
    /**
     *
     * @type {string}
     * @memberof Recipe
     */
    'totalTime'?: string;
    /**
     *
     * @type {string}
     * @memberof Recipe
     */
    'prepTime'?: string;
    /**
     *
     * @type {string}
     * @memberof Recipe
     */
    'cookTime'?: string;
    /**
     *
     * @type {string}
     * @memberof Recipe
     */
    'performTime'?: string;
    /**
     *
     * @type {string}
     * @memberof Recipe
     */
    'description'?: string;
    /**
     *
     * @type {Array<RecipeCategory>}
     * @memberof Recipe
     */
    'recipeCategory'?: Array<RecipeCategory>;
    /**
     *
     * @type {Array<RecipeTag>}
     * @memberof Recipe
     */
    'tags'?: Array<RecipeTag>;
    /**
     *
     * @type {Array<RecipeTool>}
     * @memberof Recipe
     */
    'tools'?: Array<RecipeTool>;
    /**
     *
     * @type {number}
     * @memberof Recipe
     */
    'rating'?: number;
    /**
     *
     * @type {string}
     * @memberof Recipe
     */
    'orgURL'?: string;
    /**
     *
     * @type {Array<RecipeIngredient>}
     * @memberof Recipe
     */
    'recipeIngredient'?: Array<RecipeIngredient>;
    /**
     *
     * @type {string}
     * @memberof Recipe
     */
    'dateAdded'?: string;
    /**
     *
     * @type {string}
     * @memberof Recipe
     */
    'dateUpdated'?: string;
    /**
     *
     * @type {string}
     * @memberof Recipe
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof Recipe
     */
    'updateAt'?: string;
    /**
     *
     * @type {Array<RecipeStep>}
     * @memberof Recipe
     */
    'recipeInstructions'?: Array<RecipeStep>;
    /**
     *
     * @type {Nutrition}
     * @memberof Recipe
     */
    'nutrition'?: Nutrition;
    /**
     *
     * @type {RecipeSettings}
     * @memberof Recipe
     */
    'settings'?: RecipeSettings;
    /**
     *
     * @type {Array<RecipeAsset>}
     * @memberof Recipe
     */
    'assets'?: Array<RecipeAsset>;
    /**
     *
     * @type {Array<RecipeNote>}
     * @memberof Recipe
     */
    'notes'?: Array<RecipeNote>;
    /**
     *
     * @type {object}
     * @memberof Recipe
     */
    'extras'?: object;
    /**
     *
     * @type {boolean}
     * @memberof Recipe
     */
    'isOcrRecipe'?: boolean;
    /**
     *
     * @type {Array<RecipeCommentOut>}
     * @memberof Recipe
     */
    'comments'?: Array<RecipeCommentOut>;
}
/**
 *
 * @export
 * @interface RecipeAsset
 */
export interface RecipeAsset {
    /**
     *
     * @type {string}
     * @memberof RecipeAsset
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof RecipeAsset
     */
    'icon': string;
    /**
     *
     * @type {string}
     * @memberof RecipeAsset
     */
    'fileName'?: string;
}
/**
 *
 * @export
 * @interface RecipeCategory
 */
export interface RecipeCategory {
    /**
     *
     * @type {string}
     * @memberof RecipeCategory
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof RecipeCategory
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof RecipeCategory
     */
    'slug': string;
}
/**
 *
 * @export
 * @interface RecipeCategoryPagination
 */
export interface RecipeCategoryPagination {
    /**
     *
     * @type {number}
     * @memberof RecipeCategoryPagination
     */
    'page'?: number;
    /**
     *
     * @type {number}
     * @memberof RecipeCategoryPagination
     */
    'per_page'?: number;
    /**
     *
     * @type {number}
     * @memberof RecipeCategoryPagination
     */
    'total'?: number;
    /**
     *
     * @type {number}
     * @memberof RecipeCategoryPagination
     */
    'total_pages'?: number;
    /**
     *
     * @type {Array<RecipeCategory>}
     * @memberof RecipeCategoryPagination
     */
    'items': Array<RecipeCategory>;
    /**
     *
     * @type {string}
     * @memberof RecipeCategoryPagination
     */
    'next'?: string;
    /**
     *
     * @type {string}
     * @memberof RecipeCategoryPagination
     */
    'previous'?: string;
}
/**
 *
 * @export
 * @interface RecipeCommentCreate
 */
export interface RecipeCommentCreate {
    /**
     *
     * @type {string}
     * @memberof RecipeCommentCreate
     */
    'recipeId': string;
    /**
     *
     * @type {string}
     * @memberof RecipeCommentCreate
     */
    'text': string;
}
/**
 *
 * @export
 * @interface RecipeCommentOut
 */
export interface RecipeCommentOut {
    /**
     *
     * @type {string}
     * @memberof RecipeCommentOut
     */
    'recipeId': string;
    /**
     *
     * @type {string}
     * @memberof RecipeCommentOut
     */
    'text': string;
    /**
     *
     * @type {string}
     * @memberof RecipeCommentOut
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof RecipeCommentOut
     */
    'createdAt': string;
    /**
     *
     * @type {string}
     * @memberof RecipeCommentOut
     */
    'updateAt': string;
    /**
     *
     * @type {string}
     * @memberof RecipeCommentOut
     */
    'userId': string;
    /**
     *
     * @type {MealieSchemaRecipeRecipeCommentsUserBase}
     * @memberof RecipeCommentOut
     */
    'user': MealieSchemaRecipeRecipeCommentsUserBase;
}
/**
 *
 * @export
 * @interface RecipeCommentPagination
 */
export interface RecipeCommentPagination {
    /**
     *
     * @type {number}
     * @memberof RecipeCommentPagination
     */
    'page'?: number;
    /**
     *
     * @type {number}
     * @memberof RecipeCommentPagination
     */
    'per_page'?: number;
    /**
     *
     * @type {number}
     * @memberof RecipeCommentPagination
     */
    'total'?: number;
    /**
     *
     * @type {number}
     * @memberof RecipeCommentPagination
     */
    'total_pages'?: number;
    /**
     *
     * @type {Array<RecipeCommentOut>}
     * @memberof RecipeCommentPagination
     */
    'items': Array<RecipeCommentOut>;
    /**
     *
     * @type {string}
     * @memberof RecipeCommentPagination
     */
    'next'?: string;
    /**
     *
     * @type {string}
     * @memberof RecipeCommentPagination
     */
    'previous'?: string;
}
/**
 *
 * @export
 * @interface RecipeCommentUpdate
 */
export interface RecipeCommentUpdate {
    /**
     *
     * @type {string}
     * @memberof RecipeCommentUpdate
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof RecipeCommentUpdate
     */
    'text': string;
}
/**
 *
 * @export
 * @interface RecipeCookBook
 */
export interface RecipeCookBook {
    /**
     *
     * @type {string}
     * @memberof RecipeCookBook
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof RecipeCookBook
     */
    'description'?: string;
    /**
     *
     * @type {string}
     * @memberof RecipeCookBook
     */
    'slug'?: string;
    /**
     *
     * @type {number}
     * @memberof RecipeCookBook
     */
    'position'?: number;
    /**
     *
     * @type {boolean}
     * @memberof RecipeCookBook
     */
    'public'?: boolean;
    /**
     *
     * @type {Array<CategoryBase>}
     * @memberof RecipeCookBook
     */
    'categories'?: Array<CategoryBase>;
    /**
     *
     * @type {Array<TagBase>}
     * @memberof RecipeCookBook
     */
    'tags'?: Array<TagBase>;
    /**
     *
     * @type {Array<RecipeTool>}
     * @memberof RecipeCookBook
     */
    'tools'?: Array<RecipeTool>;
    /**
     *
     * @type {boolean}
     * @memberof RecipeCookBook
     */
    'requireAllCategories'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RecipeCookBook
     */
    'requireAllTags'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RecipeCookBook
     */
    'requireAllTools'?: boolean;
    /**
     *
     * @type {string}
     * @memberof RecipeCookBook
     */
    'groupId': string;
    /**
     *
     * @type {string}
     * @memberof RecipeCookBook
     */
    'id': string;
    /**
     *
     * @type {Array<RecipeSummary>}
     * @memberof RecipeCookBook
     */
    'recipes': Array<RecipeSummary>;
}
/**
 *
 * @export
 * @interface RecipeIngredient
 */
export interface RecipeIngredient {
    /**
     *
     * @type {string}
     * @memberof RecipeIngredient
     */
    'title'?: string;
    /**
     *
     * @type {string}
     * @memberof RecipeIngredient
     */
    'note'?: string;
    /**
     *
     * @type {Unit}
     * @memberof RecipeIngredient
     */
    'unit'?: Unit;
    /**
     *
     * @type {Food}
     * @memberof RecipeIngredient
     */
    'food'?: Food;
    /**
     *
     * @type {boolean}
     * @memberof RecipeIngredient
     */
    'disableAmount'?: boolean;
    /**
     *
     * @type {number}
     * @memberof RecipeIngredient
     */
    'quantity'?: number;
    /**
     *
     * @type {string}
     * @memberof RecipeIngredient
     */
    'originalText'?: string;
    /**
     *
     * @type {string}
     * @memberof RecipeIngredient
     */
    'referenceId'?: string;
}
/**
 *
 * @export
 * @interface RecipeNote
 */
export interface RecipeNote {
    /**
     *
     * @type {string}
     * @memberof RecipeNote
     */
    'title': string;
    /**
     *
     * @type {string}
     * @memberof RecipeNote
     */
    'text': string;
}
/**
 *
 * @export
 * @interface RecipePagination
 */
export interface RecipePagination {
    /**
     *
     * @type {number}
     * @memberof RecipePagination
     */
    'page'?: number;
    /**
     *
     * @type {number}
     * @memberof RecipePagination
     */
    'per_page'?: number;
    /**
     *
     * @type {number}
     * @memberof RecipePagination
     */
    'total'?: number;
    /**
     *
     * @type {number}
     * @memberof RecipePagination
     */
    'total_pages'?: number;
    /**
     *
     * @type {Array<RecipeSummary>}
     * @memberof RecipePagination
     */
    'items': Array<RecipeSummary>;
    /**
     *
     * @type {string}
     * @memberof RecipePagination
     */
    'next'?: string;
    /**
     *
     * @type {string}
     * @memberof RecipePagination
     */
    'previous'?: string;
}
/**
 *
 * @export
 * @interface RecipeSettings
 */
export interface RecipeSettings {
    /**
     *
     * @type {boolean}
     * @memberof RecipeSettings
     */
    'public'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RecipeSettings
     */
    'showNutrition'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RecipeSettings
     */
    'showAssets'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RecipeSettings
     */
    'landscapeView'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RecipeSettings
     */
    'disableComments'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RecipeSettings
     */
    'disableAmount'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RecipeSettings
     */
    'locked'?: boolean;
}
/**
 *
 * @export
 * @interface RecipeShareToken
 */
export interface RecipeShareToken {
    /**
     *
     * @type {string}
     * @memberof RecipeShareToken
     */
    'recipeId': string;
    /**
     *
     * @type {string}
     * @memberof RecipeShareToken
     */
    'expiresAt'?: string;
    /**
     *
     * @type {string}
     * @memberof RecipeShareToken
     */
    'groupId': string;
    /**
     *
     * @type {string}
     * @memberof RecipeShareToken
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof RecipeShareToken
     */
    'createdAt': string;
    /**
     *
     * @type {Recipe}
     * @memberof RecipeShareToken
     */
    'recipe': Recipe;
}
/**
 *
 * @export
 * @interface RecipeShareTokenCreate
 */
export interface RecipeShareTokenCreate {
    /**
     *
     * @type {string}
     * @memberof RecipeShareTokenCreate
     */
    'recipeId': string;
    /**
     *
     * @type {string}
     * @memberof RecipeShareTokenCreate
     */
    'expiresAt'?: string;
}
/**
 *
 * @export
 * @interface RecipeShareTokenSummary
 */
export interface RecipeShareTokenSummary {
    /**
     *
     * @type {string}
     * @memberof RecipeShareTokenSummary
     */
    'recipeId': string;
    /**
     *
     * @type {string}
     * @memberof RecipeShareTokenSummary
     */
    'expiresAt'?: string;
    /**
     *
     * @type {string}
     * @memberof RecipeShareTokenSummary
     */
    'groupId': string;
    /**
     *
     * @type {string}
     * @memberof RecipeShareTokenSummary
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof RecipeShareTokenSummary
     */
    'createdAt': string;
}
/**
 *
 * @export
 * @interface RecipeStep
 */
export interface RecipeStep {
    /**
     *
     * @type {string}
     * @memberof RecipeStep
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof RecipeStep
     */
    'title'?: string;
    /**
     *
     * @type {string}
     * @memberof RecipeStep
     */
    'text': string;
    /**
     *
     * @type {Array<IngredientReferences>}
     * @memberof RecipeStep
     */
    'ingredientReferences'?: Array<IngredientReferences>;
}
/**
 *
 * @export
 * @interface RecipeSummary
 */
export interface RecipeSummary {
    /**
     *
     * @type {string}
     * @memberof RecipeSummary
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof RecipeSummary
     */
    'userId'?: string;
    /**
     *
     * @type {string}
     * @memberof RecipeSummary
     */
    'groupId'?: string;
    /**
     *
     * @type {string}
     * @memberof RecipeSummary
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof RecipeSummary
     */
    'slug'?: string;
    /**
     *
     * @type {any}
     * @memberof RecipeSummary
     */
    'image'?: any;
    /**
     *
     * @type {string}
     * @memberof RecipeSummary
     */
    'recipeYield'?: string;
    /**
     *
     * @type {string}
     * @memberof RecipeSummary
     */
    'totalTime'?: string;
    /**
     *
     * @type {string}
     * @memberof RecipeSummary
     */
    'prepTime'?: string;
    /**
     *
     * @type {string}
     * @memberof RecipeSummary
     */
    'cookTime'?: string;
    /**
     *
     * @type {string}
     * @memberof RecipeSummary
     */
    'performTime'?: string;
    /**
     *
     * @type {string}
     * @memberof RecipeSummary
     */
    'description'?: string;
    /**
     *
     * @type {Array<RecipeCategory>}
     * @memberof RecipeSummary
     */
    'recipeCategory'?: Array<RecipeCategory>;
    /**
     *
     * @type {Array<RecipeTag>}
     * @memberof RecipeSummary
     */
    'tags'?: Array<RecipeTag>;
    /**
     *
     * @type {Array<RecipeTool>}
     * @memberof RecipeSummary
     */
    'tools'?: Array<RecipeTool>;
    /**
     *
     * @type {number}
     * @memberof RecipeSummary
     */
    'rating'?: number;
    /**
     *
     * @type {string}
     * @memberof RecipeSummary
     */
    'orgURL'?: string;
    /**
     *
     * @type {Array<RecipeIngredient>}
     * @memberof RecipeSummary
     */
    'recipeIngredient'?: Array<RecipeIngredient>;
    /**
     *
     * @type {string}
     * @memberof RecipeSummary
     */
    'dateAdded'?: string;
    /**
     *
     * @type {string}
     * @memberof RecipeSummary
     */
    'dateUpdated'?: string;
    /**
     *
     * @type {string}
     * @memberof RecipeSummary
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof RecipeSummary
     */
    'updateAt'?: string;
}
/**
 *
 * @export
 * @interface RecipeTag
 */
export interface RecipeTag {
    /**
     *
     * @type {string}
     * @memberof RecipeTag
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof RecipeTag
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof RecipeTag
     */
    'slug': string;
}
/**
 *
 * @export
 * @interface RecipeTagPagination
 */
export interface RecipeTagPagination {
    /**
     *
     * @type {number}
     * @memberof RecipeTagPagination
     */
    'page'?: number;
    /**
     *
     * @type {number}
     * @memberof RecipeTagPagination
     */
    'per_page'?: number;
    /**
     *
     * @type {number}
     * @memberof RecipeTagPagination
     */
    'total'?: number;
    /**
     *
     * @type {number}
     * @memberof RecipeTagPagination
     */
    'total_pages'?: number;
    /**
     *
     * @type {Array<RecipeTag>}
     * @memberof RecipeTagPagination
     */
    'items': Array<RecipeTag>;
    /**
     *
     * @type {string}
     * @memberof RecipeTagPagination
     */
    'next'?: string;
    /**
     *
     * @type {string}
     * @memberof RecipeTagPagination
     */
    'previous'?: string;
}
/**
 *
 * @export
 * @interface RecipeTagResponse
 */
export interface RecipeTagResponse {
    /**
     *
     * @type {string}
     * @memberof RecipeTagResponse
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof RecipeTagResponse
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof RecipeTagResponse
     */
    'slug': string;
    /**
     *
     * @type {Array<RecipeSummary>}
     * @memberof RecipeTagResponse
     */
    'recipes'?: Array<RecipeSummary>;
}
/**
 *
 * @export
 * @interface RecipeTool
 */
export interface RecipeTool {
    /**
     *
     * @type {string}
     * @memberof RecipeTool
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof RecipeTool
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof RecipeTool
     */
    'slug': string;
    /**
     *
     * @type {boolean}
     * @memberof RecipeTool
     */
    'onHand'?: boolean;
}
/**
 *
 * @export
 * @interface RecipeToolCreate
 */
export interface RecipeToolCreate {
    /**
     *
     * @type {string}
     * @memberof RecipeToolCreate
     */
    'name': string;
    /**
     *
     * @type {boolean}
     * @memberof RecipeToolCreate
     */
    'onHand'?: boolean;
}
/**
 *
 * @export
 * @interface RecipeToolPagination
 */
export interface RecipeToolPagination {
    /**
     *
     * @type {number}
     * @memberof RecipeToolPagination
     */
    'page'?: number;
    /**
     *
     * @type {number}
     * @memberof RecipeToolPagination
     */
    'per_page'?: number;
    /**
     *
     * @type {number}
     * @memberof RecipeToolPagination
     */
    'total'?: number;
    /**
     *
     * @type {number}
     * @memberof RecipeToolPagination
     */
    'total_pages'?: number;
    /**
     *
     * @type {Array<RecipeTool>}
     * @memberof RecipeToolPagination
     */
    'items': Array<RecipeTool>;
    /**
     *
     * @type {string}
     * @memberof RecipeToolPagination
     */
    'next'?: string;
    /**
     *
     * @type {string}
     * @memberof RecipeToolPagination
     */
    'previous'?: string;
}
/**
 *
 * @export
 * @interface RecipeToolResponse
 */
export interface RecipeToolResponse {
    /**
     *
     * @type {string}
     * @memberof RecipeToolResponse
     */
    'name': string;
    /**
     *
     * @type {boolean}
     * @memberof RecipeToolResponse
     */
    'onHand'?: boolean;
    /**
     *
     * @type {string}
     * @memberof RecipeToolResponse
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof RecipeToolResponse
     */
    'slug': string;
    /**
     *
     * @type {Array<Recipe>}
     * @memberof RecipeToolResponse
     */
    'recipes'?: Array<Recipe>;
}
/**
 *
 * @export
 * @interface RecipeZipTokenResponse
 */
export interface RecipeZipTokenResponse {
    /**
     *
     * @type {string}
     * @memberof RecipeZipTokenResponse
     */
    'token': string;
}
/**
 *
 * @export
 * @interface RecipereferencesInner
 */
export interface RecipereferencesInner {
    /**
     *
     * @type {string}
     * @memberof RecipereferencesInner
     */
    'recipeId': string;
    /**
     *
     * @type {number}
     * @memberof RecipereferencesInner
     */
    'recipeQuantity'?: number;
    /**
     *
     * @type {string}
     * @memberof RecipereferencesInner
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof RecipereferencesInner
     */
    'shoppingListItemId': string;
}
//# sourceMappingURL=recipe.d.ts.map