import { Configuration } from "../common/configuration";
import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";
import { BaseAPI, RequestArgs } from "../common/base";
import { AdminAboutInfo, AllBackups, AppStatistics, CheckAppConfig, DockerVolumeText, EmailReady, EmailSuccess, EmailTest, FileTokenResponse, GroupAdminUpdate, GroupBase, GroupInDB, GroupPagination, MaintenanceLogs, MaintenanceStorageDetails, MaintenanceSummary, MealieAnalytics, OrderDirection, ServerTask, ServerTaskPagination, SuccessResponse, UnlockResults, UserIn, UserOut, UserPagination } from "../models";
/**
 * AdminAboutApi - axios parameter creator
 * @export
 */
export declare const AdminAboutApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Check App Config
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    checkAppConfigApiAdminAboutCheckGet: (acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get general application information
     * @summary Get App Info
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAppInfoApiAdminAboutGet: (acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get App Statistics
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAppStatisticsApiAdminAboutStatisticsGet: (acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Validate Docker Volume
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validateDockerVolumeApiAdminAboutDockerValidateGet: (acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * AdminAboutApi - functional programming interface
 * @export
 */
export declare const AdminAboutApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Check App Config
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    checkAppConfigApiAdminAboutCheckGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CheckAppConfig>>;
    /**
     * Get general application information
     * @summary Get App Info
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAppInfoApiAdminAboutGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdminAboutInfo>>;
    /**
     *
     * @summary Get App Statistics
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAppStatisticsApiAdminAboutStatisticsGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AppStatistics>>;
    /**
     *
     * @summary Validate Docker Volume
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validateDockerVolumeApiAdminAboutDockerValidateGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DockerVolumeText>>;
};
/**
 * AdminAboutApi - factory interface
 * @export
 */
export declare const AdminAboutApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Check App Config
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    checkAppConfigApiAdminAboutCheckGet(acceptLanguage?: string, options?: any): AxiosPromise<CheckAppConfig>;
    /**
     * Get general application information
     * @summary Get App Info
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAppInfoApiAdminAboutGet(acceptLanguage?: string, options?: any): AxiosPromise<AdminAboutInfo>;
    /**
     *
     * @summary Get App Statistics
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAppStatisticsApiAdminAboutStatisticsGet(acceptLanguage?: string, options?: any): AxiosPromise<AppStatistics>;
    /**
     *
     * @summary Validate Docker Volume
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validateDockerVolumeApiAdminAboutDockerValidateGet(acceptLanguage?: string, options?: any): AxiosPromise<DockerVolumeText>;
};
/**
 * AdminAboutApi - object-oriented interface
 * @export
 * @class AdminAboutApi
 * @extends {BaseAPI}
 */
export declare class AdminAboutApi extends BaseAPI {
    /**
     *
     * @summary Check App Config
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminAboutApi
     */
    checkAppConfigApiAdminAboutCheckGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<CheckAppConfig, any>>;
    /**
     * Get general application information
     * @summary Get App Info
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminAboutApi
     */
    getAppInfoApiAdminAboutGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<AdminAboutInfo, any>>;
    /**
     *
     * @summary Get App Statistics
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminAboutApi
     */
    getAppStatisticsApiAdminAboutStatisticsGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<AppStatistics, any>>;
    /**
     *
     * @summary Validate Docker Volume
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminAboutApi
     */
    validateDockerVolumeApiAdminAboutDockerValidateGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<DockerVolumeText, any>>;
}
/**
 * AdminAnalyticsApi - axios parameter creator
 * @export
 */
export declare const AdminAnalyticsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get Analytics
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAnalyticsApiAdminAnalyticsGet: (acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * AdminAnalyticsApi - functional programming interface
 * @export
 */
export declare const AdminAnalyticsApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get Analytics
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAnalyticsApiAdminAnalyticsGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MealieAnalytics>>;
};
/**
 * AdminAnalyticsApi - factory interface
 * @export
 */
export declare const AdminAnalyticsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Get Analytics
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAnalyticsApiAdminAnalyticsGet(acceptLanguage?: string, options?: any): AxiosPromise<MealieAnalytics>;
};
/**
 * AdminAnalyticsApi - object-oriented interface
 * @export
 * @class AdminAnalyticsApi
 * @extends {BaseAPI}
 */
export declare class AdminAnalyticsApi extends BaseAPI {
    /**
     *
     * @summary Get Analytics
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminAnalyticsApi
     */
    getAnalyticsApiAdminAnalyticsGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<MealieAnalytics, any>>;
}
/**
 * AdminBackupsApi - axios parameter creator
 * @export
 */
export declare const AdminBackupsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Create One
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiAdminBackupsPost: (acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Delete One
     * @param {string} fileName
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiAdminBackupsFileNameDelete: (fileName: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get All
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllApiAdminBackupsGet: (acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Returns a token to download a file
     * @summary Get One
     * @param {string} fileName
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiAdminBackupsFileNameGet: (fileName: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Import One
     * @param {string} fileName
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    importOneApiAdminBackupsFileNameRestorePost: (fileName: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Upload a .zip File to later be imported into Mealie
     * @summary Upload One
     * @param {File} archive
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadOneApiAdminBackupsUploadPost: (archive: File, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * AdminBackupsApi - functional programming interface
 * @export
 */
export declare const AdminBackupsApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Create One
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiAdminBackupsPost(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>>;
    /**
     *
     * @summary Delete One
     * @param {string} fileName
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiAdminBackupsFileNameDelete(fileName: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>>;
    /**
     *
     * @summary Get All
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllApiAdminBackupsGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AllBackups>>;
    /**
     * Returns a token to download a file
     * @summary Get One
     * @param {string} fileName
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiAdminBackupsFileNameGet(fileName: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileTokenResponse>>;
    /**
     *
     * @summary Import One
     * @param {string} fileName
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    importOneApiAdminBackupsFileNameRestorePost(fileName: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>>;
    /**
     * Upload a .zip File to later be imported into Mealie
     * @summary Upload One
     * @param {File} archive
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadOneApiAdminBackupsUploadPost(archive: File, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>>;
};
/**
 * AdminBackupsApi - factory interface
 * @export
 */
export declare const AdminBackupsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Create One
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiAdminBackupsPost(acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse>;
    /**
     *
     * @summary Delete One
     * @param {string} fileName
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiAdminBackupsFileNameDelete(fileName: string, acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse>;
    /**
     *
     * @summary Get All
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllApiAdminBackupsGet(acceptLanguage?: string, options?: any): AxiosPromise<AllBackups>;
    /**
     * Returns a token to download a file
     * @summary Get One
     * @param {string} fileName
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiAdminBackupsFileNameGet(fileName: string, acceptLanguage?: string, options?: any): AxiosPromise<FileTokenResponse>;
    /**
     *
     * @summary Import One
     * @param {string} fileName
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    importOneApiAdminBackupsFileNameRestorePost(fileName: string, acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse>;
    /**
     * Upload a .zip File to later be imported into Mealie
     * @summary Upload One
     * @param {File} archive
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadOneApiAdminBackupsUploadPost(archive: File, acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse>;
};
/**
 * AdminBackupsApi - object-oriented interface
 * @export
 * @class AdminBackupsApi
 * @extends {BaseAPI}
 */
export declare class AdminBackupsApi extends BaseAPI {
    /**
     *
     * @summary Create One
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminBackupsApi
     */
    createOneApiAdminBackupsPost(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<SuccessResponse, any>>;
    /**
     *
     * @summary Delete One
     * @param {string} fileName
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminBackupsApi
     */
    deleteOneApiAdminBackupsFileNameDelete(fileName: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<SuccessResponse, any>>;
    /**
     *
     * @summary Get All
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminBackupsApi
     */
    getAllApiAdminBackupsGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<AllBackups, any>>;
    /**
     * Returns a token to download a file
     * @summary Get One
     * @param {string} fileName
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminBackupsApi
     */
    getOneApiAdminBackupsFileNameGet(fileName: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<FileTokenResponse, any>>;
    /**
     *
     * @summary Import One
     * @param {string} fileName
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminBackupsApi
     */
    importOneApiAdminBackupsFileNameRestorePost(fileName: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<SuccessResponse, any>>;
    /**
     * Upload a .zip File to later be imported into Mealie
     * @summary Upload One
     * @param {File} archive
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminBackupsApi
     */
    uploadOneApiAdminBackupsUploadPost(archive: File, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<SuccessResponse, any>>;
}
/**
 * AdminEmailApi - axios parameter creator
 * @export
 */
export declare const AdminEmailApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Get general application information
     * @summary Check Email Config
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    checkEmailConfigApiAdminEmailGet: (acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Send Test Email
     * @param {EmailTest} emailTest
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    sendTestEmailApiAdminEmailPost: (emailTest: EmailTest, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * AdminEmailApi - functional programming interface
 * @export
 */
export declare const AdminEmailApiFp: (configuration?: Configuration) => {
    /**
     * Get general application information
     * @summary Check Email Config
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    checkEmailConfigApiAdminEmailGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmailReady>>;
    /**
     *
     * @summary Send Test Email
     * @param {EmailTest} emailTest
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    sendTestEmailApiAdminEmailPost(emailTest: EmailTest, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmailSuccess>>;
};
/**
 * AdminEmailApi - factory interface
 * @export
 */
export declare const AdminEmailApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Get general application information
     * @summary Check Email Config
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    checkEmailConfigApiAdminEmailGet(acceptLanguage?: string, options?: any): AxiosPromise<EmailReady>;
    /**
     *
     * @summary Send Test Email
     * @param {EmailTest} emailTest
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    sendTestEmailApiAdminEmailPost(emailTest: EmailTest, acceptLanguage?: string, options?: any): AxiosPromise<EmailSuccess>;
};
/**
 * AdminEmailApi - object-oriented interface
 * @export
 * @class AdminEmailApi
 * @extends {BaseAPI}
 */
export declare class AdminEmailApi extends BaseAPI {
    /**
     * Get general application information
     * @summary Check Email Config
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminEmailApi
     */
    checkEmailConfigApiAdminEmailGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<EmailReady, any>>;
    /**
     *
     * @summary Send Test Email
     * @param {EmailTest} emailTest
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminEmailApi
     */
    sendTestEmailApiAdminEmailPost(emailTest: EmailTest, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<EmailSuccess, any>>;
}
/**
 * AdminGroupsApi - axios parameter creator
 * @export
 */
export declare const AdminGroupsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Create One
     * @param {GroupBase} groupBase
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiAdminGroupsPost: (groupBase: GroupBase, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiAdminGroupsItemIdDelete: (itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
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
    getAllApiAdminGroupsGet: (page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiAdminGroupsItemIdGet: (itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {GroupAdminUpdate} groupAdminUpdate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiAdminGroupsItemIdPut: (itemId: string, groupAdminUpdate: GroupAdminUpdate, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * AdminGroupsApi - functional programming interface
 * @export
 */
export declare const AdminGroupsApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Create One
     * @param {GroupBase} groupBase
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiAdminGroupsPost(groupBase: GroupBase, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupInDB>>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiAdminGroupsItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupInDB>>;
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
    getAllApiAdminGroupsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupPagination>>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiAdminGroupsItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupInDB>>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {GroupAdminUpdate} groupAdminUpdate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiAdminGroupsItemIdPut(itemId: string, groupAdminUpdate: GroupAdminUpdate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupInDB>>;
};
/**
 * AdminGroupsApi - factory interface
 * @export
 */
export declare const AdminGroupsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Create One
     * @param {GroupBase} groupBase
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiAdminGroupsPost(groupBase: GroupBase, acceptLanguage?: string, options?: any): AxiosPromise<GroupInDB>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiAdminGroupsItemIdDelete(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<GroupInDB>;
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
    getAllApiAdminGroupsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<GroupPagination>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiAdminGroupsItemIdGet(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<GroupInDB>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {GroupAdminUpdate} groupAdminUpdate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiAdminGroupsItemIdPut(itemId: string, groupAdminUpdate: GroupAdminUpdate, acceptLanguage?: string, options?: any): AxiosPromise<GroupInDB>;
};
/**
 * AdminGroupsApi - object-oriented interface
 * @export
 * @class AdminGroupsApi
 * @extends {BaseAPI}
 */
export declare class AdminGroupsApi extends BaseAPI {
    /**
     *
     * @summary Create One
     * @param {GroupBase} groupBase
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminGroupsApi
     */
    createOneApiAdminGroupsPost(groupBase: GroupBase, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GroupInDB, any>>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminGroupsApi
     */
    deleteOneApiAdminGroupsItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GroupInDB, any>>;
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
     * @memberof AdminGroupsApi
     */
    getAllApiAdminGroupsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GroupPagination, any>>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminGroupsApi
     */
    getOneApiAdminGroupsItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GroupInDB, any>>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {GroupAdminUpdate} groupAdminUpdate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminGroupsApi
     */
    updateOneApiAdminGroupsItemIdPut(itemId: string, groupAdminUpdate: GroupAdminUpdate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GroupInDB, any>>;
}
/**
 * AdminLogApi - axios parameter creator
 * @export
 */
export declare const AdminLogApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Doc Str
     * @summary Get Log
     * @param {number} num
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLogApiAdminLogsNumGet: (num: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Returns a token to download a file
     * @summary Get Log File
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLogFileApiAdminLogsGet: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * AdminLogApi - functional programming interface
 * @export
 */
export declare const AdminLogApiFp: (configuration?: Configuration) => {
    /**
     * Doc Str
     * @summary Get Log
     * @param {number} num
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLogApiAdminLogsNumGet(num: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     * Returns a token to download a file
     * @summary Get Log File
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLogFileApiAdminLogsGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
};
/**
 * AdminLogApi - factory interface
 * @export
 */
export declare const AdminLogApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Doc Str
     * @summary Get Log
     * @param {number} num
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLogApiAdminLogsNumGet(num: number, options?: any): AxiosPromise<any>;
    /**
     * Returns a token to download a file
     * @summary Get Log File
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLogFileApiAdminLogsGet(options?: any): AxiosPromise<any>;
};
/**
 * AdminLogApi - object-oriented interface
 * @export
 * @class AdminLogApi
 * @extends {BaseAPI}
 */
export declare class AdminLogApi extends BaseAPI {
    /**
     * Doc Str
     * @summary Get Log
     * @param {number} num
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminLogApi
     */
    getLogApiAdminLogsNumGet(num: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Returns a token to download a file
     * @summary Get Log File
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminLogApi
     */
    getLogFileApiAdminLogsGet(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
}
/**
 * AdminMaintenanceApi - axios parameter creator
 * @export
 */
export declare const AdminMaintenanceApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Purges all the images from the filesystem that aren\'t .webp
     * @summary Clean Images
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cleanImagesApiAdminMaintenanceCleanImagesPost: (acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Purges the logs
     * @summary Clean Logs
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cleanLogsApiAdminMaintenanceCleanLogsPost: (acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Deletes all the recipe folders that don\'t have names that are valid UUIDs
     * @summary Clean Recipe Folders
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cleanRecipeFoldersApiAdminMaintenanceCleanRecipeFoldersPost: (acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Clean Temp
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cleanTempApiAdminMaintenanceCleanTempPost: (acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get Logs
     * @param {number} [lines]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLogsApiAdminMaintenanceLogsGet: (lines?: number, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get the maintenance summary
     * @summary Get Maintenance Summary
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMaintenanceSummaryApiAdminMaintenanceGet: (acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get Storage Details
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getStorageDetailsApiAdminMaintenanceStorageGet: (acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * AdminMaintenanceApi - functional programming interface
 * @export
 */
export declare const AdminMaintenanceApiFp: (configuration?: Configuration) => {
    /**
     * Purges all the images from the filesystem that aren\'t .webp
     * @summary Clean Images
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cleanImagesApiAdminMaintenanceCleanImagesPost(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>>;
    /**
     * Purges the logs
     * @summary Clean Logs
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cleanLogsApiAdminMaintenanceCleanLogsPost(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>>;
    /**
     * Deletes all the recipe folders that don\'t have names that are valid UUIDs
     * @summary Clean Recipe Folders
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cleanRecipeFoldersApiAdminMaintenanceCleanRecipeFoldersPost(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>>;
    /**
     *
     * @summary Clean Temp
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cleanTempApiAdminMaintenanceCleanTempPost(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>>;
    /**
     *
     * @summary Get Logs
     * @param {number} [lines]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLogsApiAdminMaintenanceLogsGet(lines?: number, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MaintenanceLogs>>;
    /**
     * Get the maintenance summary
     * @summary Get Maintenance Summary
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMaintenanceSummaryApiAdminMaintenanceGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MaintenanceSummary>>;
    /**
     *
     * @summary Get Storage Details
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getStorageDetailsApiAdminMaintenanceStorageGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MaintenanceStorageDetails>>;
};
/**
 * AdminMaintenanceApi - factory interface
 * @export
 */
export declare const AdminMaintenanceApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Purges all the images from the filesystem that aren\'t .webp
     * @summary Clean Images
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cleanImagesApiAdminMaintenanceCleanImagesPost(acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse>;
    /**
     * Purges the logs
     * @summary Clean Logs
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cleanLogsApiAdminMaintenanceCleanLogsPost(acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse>;
    /**
     * Deletes all the recipe folders that don\'t have names that are valid UUIDs
     * @summary Clean Recipe Folders
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cleanRecipeFoldersApiAdminMaintenanceCleanRecipeFoldersPost(acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse>;
    /**
     *
     * @summary Clean Temp
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cleanTempApiAdminMaintenanceCleanTempPost(acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse>;
    /**
     *
     * @summary Get Logs
     * @param {number} [lines]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLogsApiAdminMaintenanceLogsGet(lines?: number, acceptLanguage?: string, options?: any): AxiosPromise<MaintenanceLogs>;
    /**
     * Get the maintenance summary
     * @summary Get Maintenance Summary
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMaintenanceSummaryApiAdminMaintenanceGet(acceptLanguage?: string, options?: any): AxiosPromise<MaintenanceSummary>;
    /**
     *
     * @summary Get Storage Details
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getStorageDetailsApiAdminMaintenanceStorageGet(acceptLanguage?: string, options?: any): AxiosPromise<MaintenanceStorageDetails>;
};
/**
 * AdminMaintenanceApi - object-oriented interface
 * @export
 * @class AdminMaintenanceApi
 * @extends {BaseAPI}
 */
export declare class AdminMaintenanceApi extends BaseAPI {
    /**
     * Purges all the images from the filesystem that aren\'t .webp
     * @summary Clean Images
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminMaintenanceApi
     */
    cleanImagesApiAdminMaintenanceCleanImagesPost(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<SuccessResponse, any>>;
    /**
     * Purges the logs
     * @summary Clean Logs
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminMaintenanceApi
     */
    cleanLogsApiAdminMaintenanceCleanLogsPost(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<SuccessResponse, any>>;
    /**
     * Deletes all the recipe folders that don\'t have names that are valid UUIDs
     * @summary Clean Recipe Folders
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminMaintenanceApi
     */
    cleanRecipeFoldersApiAdminMaintenanceCleanRecipeFoldersPost(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<SuccessResponse, any>>;
    /**
     *
     * @summary Clean Temp
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminMaintenanceApi
     */
    cleanTempApiAdminMaintenanceCleanTempPost(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<SuccessResponse, any>>;
    /**
     *
     * @summary Get Logs
     * @param {number} [lines]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminMaintenanceApi
     */
    getLogsApiAdminMaintenanceLogsGet(lines?: number, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<MaintenanceLogs, any>>;
    /**
     * Get the maintenance summary
     * @summary Get Maintenance Summary
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminMaintenanceApi
     */
    getMaintenanceSummaryApiAdminMaintenanceGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<MaintenanceSummary, any>>;
    /**
     *
     * @summary Get Storage Details
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminMaintenanceApi
     */
    getStorageDetailsApiAdminMaintenanceStorageGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<MaintenanceStorageDetails, any>>;
}
/**
 * AdminServerTasksApi - axios parameter creator
 * @export
 */
export declare const AdminServerTasksApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Create Test Tasks
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTestTasksApiAdminServerTasksPost: (acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
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
    getAllApiAdminServerTasksGet: (page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * AdminServerTasksApi - functional programming interface
 * @export
 */
export declare const AdminServerTasksApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Create Test Tasks
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTestTasksApiAdminServerTasksPost(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServerTask>>;
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
    getAllApiAdminServerTasksGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServerTaskPagination>>;
};
/**
 * AdminServerTasksApi - factory interface
 * @export
 */
export declare const AdminServerTasksApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Create Test Tasks
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createTestTasksApiAdminServerTasksPost(acceptLanguage?: string, options?: any): AxiosPromise<ServerTask>;
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
    getAllApiAdminServerTasksGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<ServerTaskPagination>;
};
/**
 * AdminServerTasksApi - object-oriented interface
 * @export
 * @class AdminServerTasksApi
 * @extends {BaseAPI}
 */
export declare class AdminServerTasksApi extends BaseAPI {
    /**
     *
     * @summary Create Test Tasks
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminServerTasksApi
     */
    createTestTasksApiAdminServerTasksPost(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ServerTask, any>>;
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
     * @memberof AdminServerTasksApi
     */
    getAllApiAdminServerTasksGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ServerTaskPagination, any>>;
}
/**
 * AdminUsersApi - axios parameter creator
 * @export
 */
export declare const AdminUsersApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Create One
     * @param {UserIn} userIn
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiAdminUsersPost: (userIn: UserIn, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiAdminUsersItemIdDelete: (itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
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
    getAllApiAdminUsersGet: (page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiAdminUsersItemIdGet: (itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Unlock Users
     * @param {boolean} [force]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    unlockUsersApiAdminUsersUnlockPost: (force?: boolean, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {UserOut} userOut
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiAdminUsersItemIdPut: (itemId: string, userOut: UserOut, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * AdminUsersApi - functional programming interface
 * @export
 */
export declare const AdminUsersApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Create One
     * @param {UserIn} userIn
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiAdminUsersPost(userIn: UserIn, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserOut>>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiAdminUsersItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserOut>>;
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
    getAllApiAdminUsersGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserPagination>>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiAdminUsersItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserOut>>;
    /**
     *
     * @summary Unlock Users
     * @param {boolean} [force]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    unlockUsersApiAdminUsersUnlockPost(force?: boolean, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UnlockResults>>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {UserOut} userOut
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiAdminUsersItemIdPut(itemId: string, userOut: UserOut, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserOut>>;
};
/**
 * AdminUsersApi - factory interface
 * @export
 */
export declare const AdminUsersApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Create One
     * @param {UserIn} userIn
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiAdminUsersPost(userIn: UserIn, acceptLanguage?: string, options?: any): AxiosPromise<UserOut>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiAdminUsersItemIdDelete(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<UserOut>;
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
    getAllApiAdminUsersGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<UserPagination>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiAdminUsersItemIdGet(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<UserOut>;
    /**
     *
     * @summary Unlock Users
     * @param {boolean} [force]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    unlockUsersApiAdminUsersUnlockPost(force?: boolean, acceptLanguage?: string, options?: any): AxiosPromise<UnlockResults>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {UserOut} userOut
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiAdminUsersItemIdPut(itemId: string, userOut: UserOut, acceptLanguage?: string, options?: any): AxiosPromise<UserOut>;
};
/**
 * AdminUsersApi - object-oriented interface
 * @export
 * @class AdminUsersApi
 * @extends {BaseAPI}
 */
export declare class AdminUsersApi extends BaseAPI {
    /**
     *
     * @summary Create One
     * @param {UserIn} userIn
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminUsersApi
     */
    createOneApiAdminUsersPost(userIn: UserIn, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<UserOut, any>>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminUsersApi
     */
    deleteOneApiAdminUsersItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<UserOut, any>>;
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
     * @memberof AdminUsersApi
     */
    getAllApiAdminUsersGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<UserPagination, any>>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminUsersApi
     */
    getOneApiAdminUsersItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<UserOut, any>>;
    /**
     *
     * @summary Unlock Users
     * @param {boolean} [force]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminUsersApi
     */
    unlockUsersApiAdminUsersUnlockPost(force?: boolean, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<UnlockResults, any>>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {UserOut} userOut
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminUsersApi
     */
    updateOneApiAdminUsersItemIdPut(itemId: string, userOut: UserOut, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<UserOut, any>>;
}
//# sourceMappingURL=admin-api.d.ts.map