/**
 *
 * @export
 * @interface Confidence
 */
import {PlanEntryType} from "./meal-plan";
import {MultiPurposeLabelSummary} from "./categories-tags-labels";
import {ValidationError, WebhookType} from "./generic-api";
import {RecipeIngredient} from "./recipe";

export interface Confidence {
    /**
     *
     * @type {number}
     * @memberof Confidence
     */
    'average'?: number;
    /**
     *
     * @type {number}
     * @memberof Confidence
     */
    'comment'?: number;
    /**
     *
     * @type {number}
     * @memberof Confidence
     */
    'name'?: number;
    /**
     *
     * @type {number}
     * @memberof Confidence
     */
    'unit'?: number;
    /**
     *
     * @type {number}
     * @memberof Confidence
     */
    'quantity'?: number;
    /**
     *
     * @type {number}
     * @memberof Confidence
     */
    'food'?: number;
}
/**
 *
 * @export
 * @interface CreateRandomEntry
 */
export interface CreateRandomEntry {
    /**
     *
     * @type {string}
     * @memberof CreateRandomEntry
     */
    'date': string;
    /**
     *
     * @type {PlanEntryType}
     * @memberof CreateRandomEntry
     */
    'entryType'?: PlanEntryType;
}
/**
 *
 * @export
 * @interface FileTokenResponse
 */
export interface FileTokenResponse {
    /**
     *
     * @type {string}
     * @memberof FileTokenResponse
     */
    'fileToken': string;
}
/**
 *
 * @export
 * @interface Food
 */
export interface Food {
    /**
     *
     * @type {string}
     * @memberof Food
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof Food
     */
    'description'?: string;
    /**
     *
     * @type {object}
     * @memberof Food
     */
    'extras'?: object;
    /**
     *
     * @type {string}
     * @memberof Food
     */
    'labelId'?: string;
    /**
     *
     * @type {string}
     * @memberof Food
     */
    'id': string;
    /**
     *
     * @type {MultiPurposeLabelSummary}
     * @memberof Food
     */
    'label'?: MultiPurposeLabelSummary;
    /**
     *
     * @type {string}
     * @memberof Food
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof Food
     */
    'updateAt'?: string;
}
/**
 *
 * @export
 * @interface HTTPValidationError
 */
export interface HTTPValidationError {
    /**
     *
     * @type {Array<ValidationError>}
     * @memberof HTTPValidationError
     */
    'detail'?: Array<ValidationError>;
}
/**
 * An enumeration.
 * @export
 * @enum {string}
 */
export const ImageType = {
    OriginalWebp: 'original.webp',
    MinOriginalWebp: 'min-original.webp',
    TinyOriginalWebp: 'tiny-original.webp'
} as const;
export type ImageType = typeof ImageType[keyof typeof ImageType];
/**
 *
 * @export
 * @interface MergeFood
 */
export interface MergeFood {
    /**
     *
     * @type {string}
     * @memberof MergeFood
     */
    'fromFood': string;
    /**
     *
     * @type {string}
     * @memberof MergeFood
     */
    'toFood': string;
}
/**
 *
 * @export
 * @interface MergeUnit
 */
export interface MergeUnit {
    /**
     *
     * @type {string}
     * @memberof MergeUnit
     */
    'fromUnit': string;
    /**
     *
     * @type {string}
     * @memberof MergeUnit
     */
    'toUnit': string;
}
/**
 *
 * @export
 * @interface Nutrition
 */
export interface Nutrition {
    /**
     *
     * @type {string}
     * @memberof Nutrition
     */
    'calories'?: string;
    /**
     *
     * @type {string}
     * @memberof Nutrition
     */
    'fatContent'?: string;
    /**
     *
     * @type {string}
     * @memberof Nutrition
     */
    'proteinContent'?: string;
    /**
     *
     * @type {string}
     * @memberof Nutrition
     */
    'carbohydrateContent'?: string;
    /**
     *
     * @type {string}
     * @memberof Nutrition
     */
    'fiberContent'?: string;
    /**
     *
     * @type {string}
     * @memberof Nutrition
     */
    'sodiumContent'?: string;
    /**
     *
     * @type {string}
     * @memberof Nutrition
     */
    'sugarContent'?: string;
}
/**
 *
 * @export
 * @interface OcrAssetReq
 */
export interface OcrAssetReq {
    /**
     *
     * @type {string}
     * @memberof OcrAssetReq
     */
    'recipeSlug': string;
    /**
     *
     * @type {string}
     * @memberof OcrAssetReq
     */
    'assetName': string;
}
/**
 *
 * @export
 * @interface OcrTsvResponse
 */
export interface OcrTsvResponse {
    /**
     *
     * @type {number}
     * @memberof OcrTsvResponse
     */
    'level'?: number;
    /**
     *
     * @type {number}
     * @memberof OcrTsvResponse
     */
    'pageNum'?: number;
    /**
     *
     * @type {number}
     * @memberof OcrTsvResponse
     */
    'blockNum'?: number;
    /**
     *
     * @type {number}
     * @memberof OcrTsvResponse
     */
    'parNum'?: number;
    /**
     *
     * @type {number}
     * @memberof OcrTsvResponse
     */
    'lineNum'?: number;
    /**
     *
     * @type {number}
     * @memberof OcrTsvResponse
     */
    'wordNum'?: number;
    /**
     *
     * @type {number}
     * @memberof OcrTsvResponse
     */
    'left'?: number;
    /**
     *
     * @type {number}
     * @memberof OcrTsvResponse
     */
    'top'?: number;
    /**
     *
     * @type {number}
     * @memberof OcrTsvResponse
     */
    'width'?: number;
    /**
     *
     * @type {number}
     * @memberof OcrTsvResponse
     */
    'height'?: number;
    /**
     *
     * @type {number}
     * @memberof OcrTsvResponse
     */
    'conf'?: number;
    /**
     *
     * @type {string}
     * @memberof OcrTsvResponse
     */
    'text'?: string;
}
/**
 *
 * @export
 * @interface ParsedIngredient
 */
export interface ParsedIngredient {
    /**
     *
     * @type {string}
     * @memberof ParsedIngredient
     */
    'input'?: string;
    /**
     *
     * @type {Confidence}
     * @memberof ParsedIngredient
     */
    'confidence'?: Confidence;
    /**
     *
     * @type {RecipeIngredient}
     * @memberof ParsedIngredient
     */
    'ingredient': RecipeIngredient;
}
/**
 *
 * @export
 * @interface ReadInviteToken
 */
export interface ReadInviteToken {
    /**
     *
     * @type {string}
     * @memberof ReadInviteToken
     */
    'token': string;
    /**
     *
     * @type {number}
     * @memberof ReadInviteToken
     */
    'usesLeft': number;
    /**
     *
     * @type {string}
     * @memberof ReadInviteToken
     */
    'groupId': string;
}
/**
 *
 * @export
 * @interface ReadWebhook
 */
export interface ReadWebhook {
    /**
     *
     * @type {boolean}
     * @memberof ReadWebhook
     */
    'enabled'?: boolean;
    /**
     *
     * @type {string}
     * @memberof ReadWebhook
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof ReadWebhook
     */
    'url'?: string;
    /**
     *
     * @type {WebhookType}
     * @memberof ReadWebhook
     */
    'webhookType'?: WebhookType;
    /**
     *
     * @type {string}
     * @memberof ReadWebhook
     */
    'scheduledTime': string;
    /**
     *
     * @type {string}
     * @memberof ReadWebhook
     */
    'groupId': string;
    /**
     *
     * @type {string}
     * @memberof ReadWebhook
     */
    'id': string;
}
/**
 * An enumeration.
 * @export
 * @enum {string}
 */
export const RegisteredParser = {
    Nlp: 'nlp',
    Brute: 'brute'
} as const;
export type RegisteredParser = typeof RegisteredParser[keyof typeof RegisteredParser];
/**
 * An enumeration.
 * @export
 * @enum {string}
 */
export const ReportCategory = {
    Backup: 'backup',
    Restore: 'restore',
    Migration: 'migration',
    BulkImport: 'bulk_import'
} as const;
export type ReportCategory = typeof ReportCategory[keyof typeof ReportCategory];
/**
 *
 * @export
 * @interface ReportEntryOut
 */
export interface ReportEntryOut {
    /**
     *
     * @type {string}
     * @memberof ReportEntryOut
     */
    'reportId': string;
    /**
     *
     * @type {string}
     * @memberof ReportEntryOut
     */
    'timestamp'?: string;
    /**
     *
     * @type {boolean}
     * @memberof ReportEntryOut
     */
    'success'?: boolean;
    /**
     *
     * @type {string}
     * @memberof ReportEntryOut
     */
    'message': string;
    /**
     *
     * @type {string}
     * @memberof ReportEntryOut
     */
    'exception'?: string;
    /**
     *
     * @type {string}
     * @memberof ReportEntryOut
     */
    'id': string;
}
/**
 *
 * @export
 * @interface ReportOut
 */
export interface ReportOut {
    /**
     *
     * @type {string}
     * @memberof ReportOut
     */
    'timestamp'?: string;
    /**
     *
     * @type {ReportCategory}
     * @memberof ReportOut
     */
    'category': ReportCategory;
    /**
     *
     * @type {string}
     * @memberof ReportOut
     */
    'groupId': string;
    /**
     *
     * @type {string}
     * @memberof ReportOut
     */
    'name': string;
    /**
     *
     * @type {ReportSummaryStatus}
     * @memberof ReportOut
     */
    'status'?: ReportSummaryStatus;
    /**
     *
     * @type {string}
     * @memberof ReportOut
     */
    'id': string;
    /**
     *
     * @type {Array<ReportEntryOut>}
     * @memberof ReportOut
     */
    'entries'?: Array<ReportEntryOut>;
}
/**
 *
 * @export
 * @interface ReportSummary
 */
export interface ReportSummary {
    /**
     *
     * @type {string}
     * @memberof ReportSummary
     */
    'timestamp'?: string;
    /**
     *
     * @type {ReportCategory}
     * @memberof ReportSummary
     */
    'category': ReportCategory;
    /**
     *
     * @type {string}
     * @memberof ReportSummary
     */
    'groupId': string;
    /**
     *
     * @type {string}
     * @memberof ReportSummary
     */
    'name': string;
    /**
     *
     * @type {ReportSummaryStatus}
     * @memberof ReportSummary
     */
    'status'?: ReportSummaryStatus;
    /**
     *
     * @type {string}
     * @memberof ReportSummary
     */
    'id': string;
}
/**
 * An enumeration.
 * @export
 * @enum {string}
 */
export const ReportSummaryStatus = {
    InProgress: 'in-progress',
    Success: 'success',
    Failure: 'failure',
    Partial: 'partial'
} as const;
export type ReportSummaryStatus = typeof ReportSummaryStatus[keyof typeof ReportSummaryStatus];
/**
 *
 * @export
 * @interface ScrapeRecipe
 */
export interface ScrapeRecipe {
    /**
     *
     * @type {string}
     * @memberof ScrapeRecipe
     */
    'url': string;
    /**
     *
     * @type {boolean}
     * @memberof ScrapeRecipe
     */
    'includeTags'?: boolean;
}
/**
 *
 * @export
 * @interface ScrapeRecipeTest
 */
export interface ScrapeRecipeTest {
    /**
     *
     * @type {string}
     * @memberof ScrapeRecipeTest
     */
    'url': string;
}
/**
 *
 * @export
 * @interface SeederConfig
 */
export interface SeederConfig {
    /**
     *
     * @type {string}
     * @memberof SeederConfig
     */
    'locale': string;
}
/**
 *
 * @export
 * @interface ServerTask
 */
/**
 *
 * @export
 * @interface Unit
 */
export interface Unit {
    /**
     *
     * @type {string}
     * @memberof Unit
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof Unit
     */
    'description'?: string;
    /**
     *
     * @type {object}
     * @memberof Unit
     */
    'extras'?: object;
    /**
     *
     * @type {boolean}
     * @memberof Unit
     */
    'fraction'?: boolean;
    /**
     *
     * @type {string}
     * @memberof Unit
     */
    'abbreviation'?: string;
    /**
     *
     * @type {boolean}
     * @memberof Unit
     */
    'useAbbreviation'?: boolean;
    /**
     *
     * @type {string}
     * @memberof Unit
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof Unit
     */
    'createdAt'?: string;
    /**
     *
     * @type {string}
     * @memberof Unit
     */
    'updateAt'?: string;
}
/**
 *
 * @export
 * @interface UnlockResults
 */
export interface UnlockResults {
    /**
     *
     * @type {number}
     * @memberof UnlockResults
     */
    'unlocked'?: number;
}
/**
 *
 * @export
 * @interface UpdateGroupPreferences
 */
export interface UpdateGroupPreferences {
    /**
     *
     * @type {boolean}
     * @memberof UpdateGroupPreferences
     */
    'privateGroup'?: boolean;
    /**
     *
     * @type {number}
     * @memberof UpdateGroupPreferences
     */
    'firstDayOfWeek'?: number;
    /**
     *
     * @type {boolean}
     * @memberof UpdateGroupPreferences
     */
    'recipePublic'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UpdateGroupPreferences
     */
    'recipeShowNutrition'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UpdateGroupPreferences
     */
    'recipeShowAssets'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UpdateGroupPreferences
     */
    'recipeLandscapeView'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UpdateGroupPreferences
     */
    'recipeDisableComments'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UpdateGroupPreferences
     */
    'recipeDisableAmount'?: boolean;
}
/**
 *
 * @export
 * @interface UpdateImageResponse
 */
export interface UpdateImageResponse {
    /**
     *
     * @type {string}
     * @memberof UpdateImageResponse
     */
    'image': string;
}
