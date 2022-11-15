/**
 *
 * @export
 * @interface AdminAboutInfo
 */
import {WebhookType} from "./generic-api";

export interface AdminAboutInfo {
    /**
     *
     * @type {boolean}
     * @memberof AdminAboutInfo
     */
    'production': boolean;
    /**
     *
     * @type {string}
     * @memberof AdminAboutInfo
     */
    'version': string;
    /**
     *
     * @type {boolean}
     * @memberof AdminAboutInfo
     */
    'demoStatus': boolean;
    /**
     *
     * @type {boolean}
     * @memberof AdminAboutInfo
     */
    'allowSignup': boolean;
    /**
     *
     * @type {string}
     * @memberof AdminAboutInfo
     */
    'versionLatest': string;
    /**
     *
     * @type {number}
     * @memberof AdminAboutInfo
     */
    'apiPort': number;
    /**
     *
     * @type {boolean}
     * @memberof AdminAboutInfo
     */
    'apiDocs': boolean;
    /**
     *
     * @type {string}
     * @memberof AdminAboutInfo
     */
    'dbType': string;
    /**
     *
     * @type {string}
     * @memberof AdminAboutInfo
     */
    'dbUrl'?: string;
    /**
     *
     * @type {string}
     * @memberof AdminAboutInfo
     */
    'defaultGroup': string;
    /**
     *
     * @type {string}
     * @memberof AdminAboutInfo
     */
    'buildId': string;
    /**
     *
     * @type {string}
     * @memberof AdminAboutInfo
     */
    'recipeScraperVersion': string;
}
/**
 *
 * @export
 * @interface AllBackups
 */
export interface AllBackups {
    /**
     *
     * @type {Array<BackupFile>}
     * @memberof AllBackups
     */
    'imports': Array<BackupFile>;
    /**
     *
     * @type {Array<string>}
     * @memberof AllBackups
     */
    'templates': Array<string>;
}
/**
 *
 * @export
 * @interface AppInfo
 */
export interface AppInfo {
    /**
     *
     * @type {boolean}
     * @memberof AppInfo
     */
    'production': boolean;
    /**
     *
     * @type {string}
     * @memberof AppInfo
     */
    'version': string;
    /**
     *
     * @type {boolean}
     * @memberof AppInfo
     */
    'demoStatus': boolean;
    /**
     *
     * @type {boolean}
     * @memberof AppInfo
     */
    'allowSignup': boolean;
}
/**
 *
 * @export
 * @interface AppStatistics
 */
export interface AppStatistics {
    /**
     *
     * @type {number}
     * @memberof AppStatistics
     */
    'totalRecipes': number;
    /**
     *
     * @type {number}
     * @memberof AppStatistics
     */
    'totalUsers': number;
    /**
     *
     * @type {number}
     * @memberof AppStatistics
     */
    'totalGroups': number;
    /**
     *
     * @type {number}
     * @memberof AppStatistics
     */
    'uncategorizedRecipes': number;
    /**
     *
     * @type {number}
     * @memberof AppStatistics
     */
    'untaggedRecipes': number;
}
/**
 *
 * @export
 * @interface BackupFile
 */
export interface BackupFile {
    /**
     *
     * @type {string}
     * @memberof BackupFile
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof BackupFile
     */
    'date': string;
    /**
     *
     * @type {string}
     * @memberof BackupFile
     */
    'size': string;
}
/**
 *
 * @export
 * @interface CheckAppConfig
 */
export interface CheckAppConfig {
    /**
     *
     * @type {boolean}
     * @memberof CheckAppConfig
     */
    'emailReady': boolean;
    /**
     *
     * @type {boolean}
     * @memberof CheckAppConfig
     */
    'ldapReady': boolean;
    /**
     *
     * @type {boolean}
     * @memberof CheckAppConfig
     */
    'baseUrlSet': boolean;
    /**
     *
     * @type {boolean}
     * @memberof CheckAppConfig
     */
    'isUpToDate': boolean;
}
/**
 *
 * @export
 * @interface LongLiveTokenIn
 */
export interface LongLiveTokenIn {
    /**
     *
     * @type {string}
     * @memberof LongLiveTokenIn
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof LongLiveTokenIn
     */
    'integrationId'?: string;
}
/**
 *
 * @export
 * @interface LongLiveTokenOut
 */
export interface LongLiveTokenOut {
    /**
     *
     * @type {string}
     * @memberof LongLiveTokenOut
     */
    'token': string;
    /**
     *
     * @type {string}
     * @memberof LongLiveTokenOut
     */
    'name': string;
    /**
     *
     * @type {number}
     * @memberof LongLiveTokenOut
     */
    'id': number;
}
/**
 *
 * @export
 * @interface MaintenanceLogs
 */
export interface MaintenanceLogs {
    /**
     *
     * @type {Array<string>}
     * @memberof MaintenanceLogs
     */
    'logs': Array<string>;
}
/**
 *
 * @export
 * @interface MaintenanceStorageDetails
 */
export interface MaintenanceStorageDetails {
    /**
     *
     * @type {string}
     * @memberof MaintenanceStorageDetails
     */
    'tempDirSize': string;
    /**
     *
     * @type {string}
     * @memberof MaintenanceStorageDetails
     */
    'backupsDirSize': string;
    /**
     *
     * @type {string}
     * @memberof MaintenanceStorageDetails
     */
    'groupsDirSize': string;
    /**
     *
     * @type {string}
     * @memberof MaintenanceStorageDetails
     */
    'recipesDirSize': string;
    /**
     *
     * @type {string}
     * @memberof MaintenanceStorageDetails
     */
    'userDirSize': string;
}
/**
 *
 * @export
 * @interface MaintenanceSummary
 */
export interface MaintenanceSummary {
    /**
     *
     * @type {string}
     * @memberof MaintenanceSummary
     */
    'dataDirSize': string;
    /**
     *
     * @type {string}
     * @memberof MaintenanceSummary
     */
    'logFileSize': string;
    /**
     *
     * @type {number}
     * @memberof MaintenanceSummary
     */
    'cleanableImages': number;
    /**
     *
     * @type {number}
     * @memberof MaintenanceSummary
     */
    'cleanableDirs': number;
}
/**
 *
 * @export
 * @interface MealieAnalytics
 */
export interface MealieAnalytics {
    /**
     *
     * @type {string}
     * @memberof MealieAnalytics
     */
    'installationId': string;
    /**
     *
     * @type {string}
     * @memberof MealieAnalytics
     */
    'version': string;
    /**
     *
     * @type {string}
     * @memberof MealieAnalytics
     */
    'databaseType': string;
    /**
     *
     * @type {boolean}
     * @memberof MealieAnalytics
     */
    'usingEmail': boolean;
    /**
     *
     * @type {boolean}
     * @memberof MealieAnalytics
     */
    'usingLdap': boolean;
    /**
     *
     * @type {number}
     * @memberof MealieAnalytics
     */
    'apiTokens': number;
    /**
     *
     * @type {number}
     * @memberof MealieAnalytics
     */
    'users': number;
    /**
     *
     * @type {number}
     * @memberof MealieAnalytics
     */
    'groups': number;
    /**
     *
     * @type {number}
     * @memberof MealieAnalytics
     */
    'recipes': number;
    /**
     *
     * @type {number}
     * @memberof MealieAnalytics
     */
    'shoppingLists': number;
    /**
     *
     * @type {number}
     * @memberof MealieAnalytics
     */
    'cookbooks': number;
}
/**
 *
 * @export
 * @interface CreateWebhook
 */
export interface CreateWebhook {
    /**
     *
     * @type {boolean}
     * @memberof CreateWebhook
     */
    'enabled'?: boolean;
    /**
     *
     * @type {string}
     * @memberof CreateWebhook
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof CreateWebhook
     */
    'url'?: string;
    /**
     *
     * @type {WebhookType}
     * @memberof CreateWebhook
     */
    'webhookType'?: WebhookType;
    /**
     *
     * @type {string}
     * @memberof CreateWebhook
     */
    'scheduledTime': string;
}
/**
 *
 * @export
 * @interface DeleteTokenResponse
 */
export interface DeleteTokenResponse {
    /**
     *
     * @type {string}
     * @memberof DeleteTokenResponse
     */
    'tokenDelete': string;
}
/**
 *
 * @export
 * @interface DockerVolumeText
 */
export interface DockerVolumeText {
    /**
     *
     * @type {string}
     * @memberof DockerVolumeText
     */
    'text': string;
}
/**
 *
 * @export
 * @interface EmailInitationResponse
 */
export interface EmailInitationResponse {
    /**
     *
     * @type {boolean}
     * @memberof EmailInitationResponse
     */
    'success': boolean;
    /**
     *
     * @type {string}
     * @memberof EmailInitationResponse
     */
    'error'?: string;
}
/**
 *
 * @export
 * @interface EmailInvitation
 */
export interface EmailInvitation {
    /**
     *
     * @type {string}
     * @memberof EmailInvitation
     */
    'email': string;
    /**
     *
     * @type {string}
     * @memberof EmailInvitation
     */
    'token': string;
}
/**
 *
 * @export
 * @interface EmailReady
 */
export interface EmailReady {
    /**
     *
     * @type {boolean}
     * @memberof EmailReady
     */
    'ready': boolean;
}
/**
 *
 * @export
 * @interface EmailSuccess
 */
export interface EmailSuccess {
    /**
     *
     * @type {boolean}
     * @memberof EmailSuccess
     */
    'success': boolean;
    /**
     *
     * @type {string}
     * @memberof EmailSuccess
     */
    'error'?: string;
}
/**
 *
 * @export
 * @interface EmailTest
 */
export interface EmailTest {
    /**
     *
     * @type {string}
     * @memberof EmailTest
     */
    'email': string;
}
/**
 * An enumeration.
 * @export
 * @enum {string}
 */
export const ExportTypes = {
    Json: 'json'
} as const;
export type ExportTypes = typeof ExportTypes[keyof typeof ExportTypes];
export interface ServerTask {
    /**
     *
     * @type {string}
     * @memberof ServerTask
     */
    'groupId': string;
    /**
     *
     * @type {ServerTaskNames}
     * @memberof ServerTask
     */
    'name'?: ServerTaskNames;
    /**
     *
     * @type {string}
     * @memberof ServerTask
     */
    'createdAt'?: string;
    /**
     *
     * @type {ServerTaskStatus}
     * @memberof ServerTask
     */
    'status'?: ServerTaskStatus;
    /**
     *
     * @type {string}
     * @memberof ServerTask
     */
    'log'?: string;
    /**
     *
     * @type {number}
     * @memberof ServerTask
     */
    'id': number;
}
/**
 * An enumeration.
 * @export
 * @enum {string}
 */
export const ServerTaskNames = {
    BackgroundTask: 'Background Task',
    DatabaseBackup: 'Database Backup',
    BulkRecipeImport: 'Bulk Recipe Import'
} as const;
export type ServerTaskNames = typeof ServerTaskNames[keyof typeof ServerTaskNames];
/**
 * An enumeration.
 * @export
 * @enum {string}
 */
export const SupportedMigrations = {
    NextCloud: 'nextcloud',
    Chowdown: 'chowdown',
    Paprika: 'paprika',
    MealieAlpha: 'mealie_alpha'
} as const;
export type SupportedMigrations = typeof SupportedMigrations[keyof typeof SupportedMigrations];
/**
 *
 * @export
 * @interface ServerTaskPagination
 */
export interface ServerTaskPagination {
    /**
     *
     * @type {number}
     * @memberof ServerTaskPagination
     */
    'page'?: number;
    /**
     *
     * @type {number}
     * @memberof ServerTaskPagination
     */
    'per_page'?: number;
    /**
     *
     * @type {number}
     * @memberof ServerTaskPagination
     */
    'total'?: number;
    /**
     *
     * @type {number}
     * @memberof ServerTaskPagination
     */
    'total_pages'?: number;
    /**
     *
     * @type {Array<ServerTask>}
     * @memberof ServerTaskPagination
     */
    'items': Array<ServerTask>;
    /**
     *
     * @type {string}
     * @memberof ServerTaskPagination
     */
    'next'?: string;
    /**
     *
     * @type {string}
     * @memberof ServerTaskPagination
     */
    'previous'?: string;
}
/**
 * An enumeration.
 * @export
 * @enum {string}
 */
export const ServerTaskStatus = {
    Running: 'running',
    Finished: 'finished',
    Failed: 'failed'
} as const;
export type ServerTaskStatus = typeof ServerTaskStatus[keyof typeof ServerTaskStatus];