/**
 *
 * @export
 * @interface GroupAdminUpdate
 */
import { UpdateGroupPreferences } from "./misc";
import { Options } from "./generic-api";
import { CategoryBase } from "./categories-tags-labels";
import { UserOut } from "./user-security";
import { RecipeSettings } from "./recipe";
export interface GroupAdminUpdate {
    /**
     *
     * @type {string}
     * @memberof GroupAdminUpdate
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof GroupAdminUpdate
     */
    'name': string;
    /**
     *
     * @type {UpdateGroupPreferences}
     * @memberof GroupAdminUpdate
     */
    'preferences'?: UpdateGroupPreferences;
}
/**
 *
 * @export
 * @interface GroupBase
 */
export interface GroupBase {
    /**
     *
     * @type {string}
     * @memberof GroupBase
     */
    'name': string;
}
/**
 *
 * @export
 * @interface GroupDataExport
 */
export interface GroupDataExport {
    /**
     *
     * @type {string}
     * @memberof GroupDataExport
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof GroupDataExport
     */
    'groupId': string;
    /**
     *
     * @type {string}
     * @memberof GroupDataExport
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof GroupDataExport
     */
    'filename': string;
    /**
     *
     * @type {string}
     * @memberof GroupDataExport
     */
    'path': string;
    /**
     *
     * @type {string}
     * @memberof GroupDataExport
     */
    'size': string;
    /**
     *
     * @type {string}
     * @memberof GroupDataExport
     */
    'expires': string;
}
/**
 *
 * @export
 * @interface GroupEventNotifierCreate
 */
export interface GroupEventNotifierCreate {
    /**
     *
     * @type {string}
     * @memberof GroupEventNotifierCreate
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof GroupEventNotifierCreate
     */
    'appriseUrl': string;
}
/**
 * These events are in-sync with the EventTypes found in the EventBusService. If you modify this, make sure to update the EventBusService as well.
 * @export
 * @interface GroupEventNotifierOptions
 */
export interface GroupEventNotifierOptions {
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptions
     */
    'testMessage'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptions
     */
    'webhookTask'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptions
     */
    'recipeCreated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptions
     */
    'recipeUpdated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptions
     */
    'recipeDeleted'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptions
     */
    'userSignup'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptions
     */
    'dataMigrations'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptions
     */
    'dataExport'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptions
     */
    'dataImport'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptions
     */
    'mealplanEntryCreated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptions
     */
    'shoppingListCreated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptions
     */
    'shoppingListUpdated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptions
     */
    'shoppingListDeleted'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptions
     */
    'cookbookCreated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptions
     */
    'cookbookUpdated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptions
     */
    'cookbookDeleted'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptions
     */
    'tagCreated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptions
     */
    'tagUpdated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptions
     */
    'tagDeleted'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptions
     */
    'categoryCreated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptions
     */
    'categoryUpdated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptions
     */
    'categoryDeleted'?: boolean;
}
/**
 * These events are in-sync with the EventTypes found in the EventBusService. If you modify this, make sure to update the EventBusService as well.
 * @export
 * @interface GroupEventNotifierOptionsOut
 */
export interface GroupEventNotifierOptionsOut {
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptionsOut
     */
    'testMessage'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptionsOut
     */
    'webhookTask'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptionsOut
     */
    'recipeCreated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptionsOut
     */
    'recipeUpdated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptionsOut
     */
    'recipeDeleted'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptionsOut
     */
    'userSignup'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptionsOut
     */
    'dataMigrations'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptionsOut
     */
    'dataExport'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptionsOut
     */
    'dataImport'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptionsOut
     */
    'mealplanEntryCreated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptionsOut
     */
    'shoppingListCreated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptionsOut
     */
    'shoppingListUpdated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptionsOut
     */
    'shoppingListDeleted'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptionsOut
     */
    'cookbookCreated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptionsOut
     */
    'cookbookUpdated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptionsOut
     */
    'cookbookDeleted'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptionsOut
     */
    'tagCreated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptionsOut
     */
    'tagUpdated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptionsOut
     */
    'tagDeleted'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptionsOut
     */
    'categoryCreated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptionsOut
     */
    'categoryUpdated'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOptionsOut
     */
    'categoryDeleted'?: boolean;
    /**
     *
     * @type {string}
     * @memberof GroupEventNotifierOptionsOut
     */
    'id': string;
}
/**
 *
 * @export
 * @interface GroupEventNotifierOut
 */
export interface GroupEventNotifierOut {
    /**
     *
     * @type {string}
     * @memberof GroupEventNotifierOut
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof GroupEventNotifierOut
     */
    'name': string;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierOut
     */
    'enabled': boolean;
    /**
     *
     * @type {string}
     * @memberof GroupEventNotifierOut
     */
    'groupId': string;
    /**
     *
     * @type {GroupEventNotifierOptionsOut}
     * @memberof GroupEventNotifierOut
     */
    'options': GroupEventNotifierOptionsOut;
}
/**
 *
 * @export
 * @interface GroupEventNotifierUpdate
 */
export interface GroupEventNotifierUpdate {
    /**
     *
     * @type {string}
     * @memberof GroupEventNotifierUpdate
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof GroupEventNotifierUpdate
     */
    'appriseUrl'?: string;
    /**
     *
     * @type {boolean}
     * @memberof GroupEventNotifierUpdate
     */
    'enabled'?: boolean;
    /**
     *
     * @type {string}
     * @memberof GroupEventNotifierUpdate
     */
    'groupId': string;
    /**
     *
     * @type {Options}
     * @memberof GroupEventNotifierUpdate
     */
    'options'?: Options;
    /**
     *
     * @type {string}
     * @memberof GroupEventNotifierUpdate
     */
    'id': string;
}
/**
 *
 * @export
 * @interface GroupEventPagination
 */
export interface GroupEventPagination {
    /**
     *
     * @type {number}
     * @memberof GroupEventPagination
     */
    'page'?: number;
    /**
     *
     * @type {number}
     * @memberof GroupEventPagination
     */
    'per_page'?: number;
    /**
     *
     * @type {number}
     * @memberof GroupEventPagination
     */
    'total'?: number;
    /**
     *
     * @type {number}
     * @memberof GroupEventPagination
     */
    'total_pages'?: number;
    /**
     *
     * @type {Array<GroupEventNotifierOut>}
     * @memberof GroupEventPagination
     */
    'items': Array<GroupEventNotifierOut>;
    /**
     *
     * @type {string}
     * @memberof GroupEventPagination
     */
    'next'?: string;
    /**
     *
     * @type {string}
     * @memberof GroupEventPagination
     */
    'previous'?: string;
}
/**
 *
 * @export
 * @interface GroupInDB
 */
export interface GroupInDB {
    /**
     *
     * @type {string}
     * @memberof GroupInDB
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof GroupInDB
     */
    'id': string;
    /**
     *
     * @type {Array<CategoryBase>}
     * @memberof GroupInDB
     */
    'categories'?: Array<CategoryBase>;
    /**
     *
     * @type {Array<any>}
     * @memberof GroupInDB
     */
    'webhooks'?: Array<any>;
    /**
     *
     * @type {Array<UserOut>}
     * @memberof GroupInDB
     */
    'users'?: Array<UserOut>;
    /**
     *
     * @type {ReadGroupPreferences}
     * @memberof GroupInDB
     */
    'preferences'?: ReadGroupPreferences;
}
/**
 *
 * @export
 * @interface GroupPagination
 */
export interface GroupPagination {
    /**
     *
     * @type {number}
     * @memberof GroupPagination
     */
    'page'?: number;
    /**
     *
     * @type {number}
     * @memberof GroupPagination
     */
    'per_page'?: number;
    /**
     *
     * @type {number}
     * @memberof GroupPagination
     */
    'total'?: number;
    /**
     *
     * @type {number}
     * @memberof GroupPagination
     */
    'total_pages'?: number;
    /**
     *
     * @type {Array<GroupInDB>}
     * @memberof GroupPagination
     */
    'items': Array<GroupInDB>;
    /**
     *
     * @type {string}
     * @memberof GroupPagination
     */
    'next'?: string;
    /**
     *
     * @type {string}
     * @memberof GroupPagination
     */
    'previous'?: string;
}
/**
 *
 * @export
 * @interface GroupStatistics
 */
export interface GroupStatistics {
    /**
     *
     * @type {number}
     * @memberof GroupStatistics
     */
    'totalRecipes': number;
    /**
     *
     * @type {number}
     * @memberof GroupStatistics
     */
    'totalUsers': number;
    /**
     *
     * @type {number}
     * @memberof GroupStatistics
     */
    'totalCategories': number;
    /**
     *
     * @type {number}
     * @memberof GroupStatistics
     */
    'totalTags': number;
    /**
     *
     * @type {number}
     * @memberof GroupStatistics
     */
    'totalTools': number;
}
/**
 *
 * @export
 * @interface GroupStorage
 */
export interface GroupStorage {
    /**
     *
     * @type {number}
     * @memberof GroupStorage
     */
    'usedStorageBytes': number;
    /**
     *
     * @type {string}
     * @memberof GroupStorage
     */
    'usedStorageStr': string;
    /**
     *
     * @type {number}
     * @memberof GroupStorage
     */
    'totalStorageBytes': number;
    /**
     *
     * @type {string}
     * @memberof GroupStorage
     */
    'totalStorageStr': string;
}
/**
 *
 * @export
 * @interface AssignSettings
 */
export interface AssignSettings {
    /**
     *
     * @type {Array<string>}
     * @memberof AssignSettings
     */
    'recipes': Array<string>;
    /**
     *
     * @type {RecipeSettings}
     * @memberof AssignSettings
     */
    'settings': RecipeSettings;
}
/**
 *
 * @export
 * @interface ReadGroupPreferences
 */
export interface ReadGroupPreferences {
    /**
     *
     * @type {boolean}
     * @memberof ReadGroupPreferences
     */
    'privateGroup'?: boolean;
    /**
     *
     * @type {number}
     * @memberof ReadGroupPreferences
     */
    'firstDayOfWeek'?: number;
    /**
     *
     * @type {boolean}
     * @memberof ReadGroupPreferences
     */
    'recipePublic'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ReadGroupPreferences
     */
    'recipeShowNutrition'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ReadGroupPreferences
     */
    'recipeShowAssets'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ReadGroupPreferences
     */
    'recipeLandscapeView'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ReadGroupPreferences
     */
    'recipeDisableComments'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ReadGroupPreferences
     */
    'recipeDisableAmount'?: boolean;
    /**
     *
     * @type {string}
     * @memberof ReadGroupPreferences
     */
    'groupId': string;
    /**
     *
     * @type {string}
     * @memberof ReadGroupPreferences
     */
    'id': string;
}
//# sourceMappingURL=group.d.ts.map