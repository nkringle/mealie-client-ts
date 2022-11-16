import { Configuration } from "../common/configuration";
import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";
import { BaseAPI, RequestArgs } from "../common/base";
import { CategoryBase, CookBookPagination, CreateCookBook, CreateInviteToken, CreatePlanEntry, CreateRandomEntry, CreateWebhook, EmailInitationResponse, EmailInvitation, GroupEventNotifierCreate, GroupEventNotifierOut, GroupEventNotifierUpdate, GroupEventPagination, GroupInDB, GroupStatistics, GroupStorage, ItemId, MultiPurposeLabelCreate, MultiPurposeLabelOut, MultiPurposeLabelPagination, MultiPurposeLabelUpdate, OrderDirection, PlanEntryPagination, PlanRulesCreate, PlanRulesOut, PlanRulesPagination, ReadCookBook, ReadGroupPreferences, ReadInviteToken, ReadPlanEntry, ReadWebhook, RecipeCookBook, ReportCategory, ReportOut, ReportSummary, SeederConfig, SetPermissions, ShoppingListCreate, ShoppingListItemCreate, ShoppingListItemOut, ShoppingListItemUpdate, ShoppingListOut, ShoppingListPagination, ShoppingListUpdate, SuccessResponse, SupportedMigrations, UpdateCookBook, UpdateGroupPreferences, UpdatePlanEntry, UserOut, WebhookPagination } from "../models";
/**
 * GroupsCookbooksApi - axios parameter creator
 * @export
 */
export declare const GroupsCookbooksApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Create One
     * @param {CreateCookBook} createCookBook
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiGroupsCookbooksPost: (createCookBook: CreateCookBook, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiGroupsCookbooksItemIdDelete: (itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
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
    getAllApiGroupsCookbooksGet: (groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get One
     * @param {ItemId} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiGroupsCookbooksItemIdGet: (itemId: ItemId, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Update Many
     * @param {Array<UpdateCookBook>} updateCookBook
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateManyApiGroupsCookbooksPut: (updateCookBook: Array<UpdateCookBook>, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {CreateCookBook} createCookBook
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiGroupsCookbooksItemIdPut: (itemId: string, createCookBook: CreateCookBook, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * GroupsCookbooksApi - functional programming interface
 * @export
 */
export declare const GroupsCookbooksApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Create One
     * @param {CreateCookBook} createCookBook
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiGroupsCookbooksPost(createCookBook: CreateCookBook, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadCookBook>>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiGroupsCookbooksItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadCookBook>>;
    /**
     *
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
    getAllApiGroupsCookbooksGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CookBookPagination>>;
    /**
     *
     * @summary Get One
     * @param {ItemId} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiGroupsCookbooksItemIdGet(itemId: ItemId, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecipeCookBook>>;
    /**
     *
     * @summary Update Many
     * @param {Array<UpdateCookBook>} updateCookBook
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateManyApiGroupsCookbooksPut(updateCookBook: Array<UpdateCookBook>, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ReadCookBook>>>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {CreateCookBook} createCookBook
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiGroupsCookbooksItemIdPut(itemId: string, createCookBook: CreateCookBook, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadCookBook>>;
};
/**
 * GroupsCookbooksApi - factory interface
 * @export
 */
export declare const GroupsCookbooksApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Create One
     * @param {CreateCookBook} createCookBook
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiGroupsCookbooksPost(createCookBook: CreateCookBook, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<ReadCookBook>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiGroupsCookbooksItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<ReadCookBook>;
    /**
     *
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
    getAllApiGroupsCookbooksGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<CookBookPagination>;
    /**
     *
     * @summary Get One
     * @param {ItemId} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiGroupsCookbooksItemIdGet(itemId: ItemId, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<RecipeCookBook>;
    /**
     *
     * @summary Update Many
     * @param {Array<UpdateCookBook>} updateCookBook
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateManyApiGroupsCookbooksPut(updateCookBook: Array<UpdateCookBook>, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<Array<ReadCookBook>>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {CreateCookBook} createCookBook
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiGroupsCookbooksItemIdPut(itemId: string, createCookBook: CreateCookBook, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<ReadCookBook>;
};
/**
 * GroupsCookbooksApi - object-oriented interface
 * @export
 * @class GroupsCookbooksApi
 * @extends {BaseAPI}
 */
export declare class GroupsCookbooksApi extends BaseAPI {
    /**
     *
     * @summary Create One
     * @param {CreateCookBook} createCookBook
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsCookbooksApi
     */
    createOneApiGroupsCookbooksPost(createCookBook: CreateCookBook, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReadCookBook, any>>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsCookbooksApi
     */
    deleteOneApiGroupsCookbooksItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReadCookBook, any>>;
    /**
     *
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
     * @memberof GroupsCookbooksApi
     */
    getAllApiGroupsCookbooksGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<CookBookPagination, any>>;
    /**
     *
     * @summary Get One
     * @param {ItemId} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsCookbooksApi
     */
    getOneApiGroupsCookbooksItemIdGet(itemId: ItemId, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RecipeCookBook, any>>;
    /**
     *
     * @summary Update Many
     * @param {Array<UpdateCookBook>} updateCookBook
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsCookbooksApi
     */
    updateManyApiGroupsCookbooksPut(updateCookBook: Array<UpdateCookBook>, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReadCookBook[], any>>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {CreateCookBook} createCookBook
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsCookbooksApi
     */
    updateOneApiGroupsCookbooksItemIdPut(itemId: string, createCookBook: CreateCookBook, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReadCookBook, any>>;
}
/**
 * GroupsEventNotificationsApi - axios parameter creator
 * @export
 */
export declare const GroupsEventNotificationsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Create One
     * @param {GroupEventNotifierCreate} groupEventNotifierCreate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiGroupsEventsNotificationsPost: (groupEventNotifierCreate: GroupEventNotifierCreate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiGroupsEventsNotificationsItemIdDelete: (itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
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
    getAllApiGroupsEventsNotificationsGet: (groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiGroupsEventsNotificationsItemIdGet: (itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Test Notification
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    testNotificationApiGroupsEventsNotificationsItemIdTestPost: (itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {GroupEventNotifierUpdate} groupEventNotifierUpdate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiGroupsEventsNotificationsItemIdPut: (itemId: string, groupEventNotifierUpdate: GroupEventNotifierUpdate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * GroupsEventNotificationsApi - functional programming interface
 * @export
 */
export declare const GroupsEventNotificationsApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Create One
     * @param {GroupEventNotifierCreate} groupEventNotifierCreate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiGroupsEventsNotificationsPost(groupEventNotifierCreate: GroupEventNotifierCreate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupEventNotifierOut>>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiGroupsEventsNotificationsItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     *
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
    getAllApiGroupsEventsNotificationsGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupEventPagination>>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiGroupsEventsNotificationsItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupEventNotifierOut>>;
    /**
     *
     * @summary Test Notification
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    testNotificationApiGroupsEventsNotificationsItemIdTestPost(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {GroupEventNotifierUpdate} groupEventNotifierUpdate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiGroupsEventsNotificationsItemIdPut(itemId: string, groupEventNotifierUpdate: GroupEventNotifierUpdate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupEventNotifierOut>>;
};
/**
 * GroupsEventNotificationsApi - factory interface
 * @export
 */
export declare const GroupsEventNotificationsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Create One
     * @param {GroupEventNotifierCreate} groupEventNotifierCreate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiGroupsEventsNotificationsPost(groupEventNotifierCreate: GroupEventNotifierCreate, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<GroupEventNotifierOut>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiGroupsEventsNotificationsItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<void>;
    /**
     *
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
    getAllApiGroupsEventsNotificationsGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<GroupEventPagination>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiGroupsEventsNotificationsItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<GroupEventNotifierOut>;
    /**
     *
     * @summary Test Notification
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    testNotificationApiGroupsEventsNotificationsItemIdTestPost(itemId: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<void>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {GroupEventNotifierUpdate} groupEventNotifierUpdate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiGroupsEventsNotificationsItemIdPut(itemId: string, groupEventNotifierUpdate: GroupEventNotifierUpdate, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<GroupEventNotifierOut>;
};
/**
 * GroupsEventNotificationsApi - object-oriented interface
 * @export
 * @class GroupsEventNotificationsApi
 * @extends {BaseAPI}
 */
export declare class GroupsEventNotificationsApi extends BaseAPI {
    /**
     *
     * @summary Create One
     * @param {GroupEventNotifierCreate} groupEventNotifierCreate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsEventNotificationsApi
     */
    createOneApiGroupsEventsNotificationsPost(groupEventNotifierCreate: GroupEventNotifierCreate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GroupEventNotifierOut, any>>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsEventNotificationsApi
     */
    deleteOneApiGroupsEventsNotificationsItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     *
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
     * @memberof GroupsEventNotificationsApi
     */
    getAllApiGroupsEventsNotificationsGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GroupEventPagination, any>>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsEventNotificationsApi
     */
    getOneApiGroupsEventsNotificationsItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GroupEventNotifierOut, any>>;
    /**
     *
     * @summary Test Notification
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsEventNotificationsApi
     */
    testNotificationApiGroupsEventsNotificationsItemIdTestPost(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {GroupEventNotifierUpdate} groupEventNotifierUpdate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsEventNotificationsApi
     */
    updateOneApiGroupsEventsNotificationsItemIdPut(itemId: string, groupEventNotifierUpdate: GroupEventNotifierUpdate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GroupEventNotifierOut, any>>;
}
/**
 * GroupsInvitationsApi - axios parameter creator
 * @export
 */
export declare const GroupsInvitationsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Create Invite Token
     * @param {CreateInviteToken} createInviteToken
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createInviteTokenApiGroupsInvitationsPost: (createInviteToken: CreateInviteToken, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Email Invitation
     * @param {EmailInvitation} emailInvitation
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    emailInvitationApiGroupsInvitationsEmailPost: (emailInvitation: EmailInvitation, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get Invite Tokens
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInviteTokensApiGroupsInvitationsGet: (acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * GroupsInvitationsApi - functional programming interface
 * @export
 */
export declare const GroupsInvitationsApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Create Invite Token
     * @param {CreateInviteToken} createInviteToken
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createInviteTokenApiGroupsInvitationsPost(createInviteToken: CreateInviteToken, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadInviteToken>>;
    /**
     *
     * @summary Email Invitation
     * @param {EmailInvitation} emailInvitation
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    emailInvitationApiGroupsInvitationsEmailPost(emailInvitation: EmailInvitation, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmailInitationResponse>>;
    /**
     *
     * @summary Get Invite Tokens
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInviteTokensApiGroupsInvitationsGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ReadInviteToken>>>;
};
/**
 * GroupsInvitationsApi - factory interface
 * @export
 */
export declare const GroupsInvitationsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Create Invite Token
     * @param {CreateInviteToken} createInviteToken
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createInviteTokenApiGroupsInvitationsPost(createInviteToken: CreateInviteToken, acceptLanguage?: string, options?: any): AxiosPromise<ReadInviteToken>;
    /**
     *
     * @summary Email Invitation
     * @param {EmailInvitation} emailInvitation
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    emailInvitationApiGroupsInvitationsEmailPost(emailInvitation: EmailInvitation, acceptLanguage?: string, options?: any): AxiosPromise<EmailInitationResponse>;
    /**
     *
     * @summary Get Invite Tokens
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInviteTokensApiGroupsInvitationsGet(acceptLanguage?: string, options?: any): AxiosPromise<Array<ReadInviteToken>>;
};
/**
 * GroupsInvitationsApi - object-oriented interface
 * @export
 * @class GroupsInvitationsApi
 * @extends {BaseAPI}
 */
export declare class GroupsInvitationsApi extends BaseAPI {
    /**
     *
     * @summary Create Invite Token
     * @param {CreateInviteToken} createInviteToken
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsInvitationsApi
     */
    createInviteTokenApiGroupsInvitationsPost(createInviteToken: CreateInviteToken, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReadInviteToken, any>>;
    /**
     *
     * @summary Email Invitation
     * @param {EmailInvitation} emailInvitation
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsInvitationsApi
     */
    emailInvitationApiGroupsInvitationsEmailPost(emailInvitation: EmailInvitation, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<EmailInitationResponse, any>>;
    /**
     *
     * @summary Get Invite Tokens
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsInvitationsApi
     */
    getInviteTokensApiGroupsInvitationsGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReadInviteToken[], any>>;
}
/**
 * GroupsMealplanCategoriesApi - axios parameter creator
 * @export
 */
export declare const GroupsMealplanCategoriesApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get Mealplan Categories
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMealplanCategoriesApiGroupsCategoriesGet: (acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Update Mealplan Categories
     * @param {Array<CategoryBase>} categoryBase
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateMealplanCategoriesApiGroupsCategoriesPut: (categoryBase: Array<CategoryBase>, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * GroupsMealplanCategoriesApi - functional programming interface
 * @export
 */
export declare const GroupsMealplanCategoriesApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get Mealplan Categories
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMealplanCategoriesApiGroupsCategoriesGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CategoryBase>>>;
    /**
     *
     * @summary Update Mealplan Categories
     * @param {Array<CategoryBase>} categoryBase
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateMealplanCategoriesApiGroupsCategoriesPut(categoryBase: Array<CategoryBase>, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CategoryBase>>>;
};
/**
 * GroupsMealplanCategoriesApi - factory interface
 * @export
 */
export declare const GroupsMealplanCategoriesApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Get Mealplan Categories
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMealplanCategoriesApiGroupsCategoriesGet(acceptLanguage?: string, options?: any): AxiosPromise<Array<CategoryBase>>;
    /**
     *
     * @summary Update Mealplan Categories
     * @param {Array<CategoryBase>} categoryBase
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateMealplanCategoriesApiGroupsCategoriesPut(categoryBase: Array<CategoryBase>, acceptLanguage?: string, options?: any): AxiosPromise<Array<CategoryBase>>;
};
/**
 * GroupsMealplanCategoriesApi - object-oriented interface
 * @export
 * @class GroupsMealplanCategoriesApi
 * @extends {BaseAPI}
 */
export declare class GroupsMealplanCategoriesApi extends BaseAPI {
    /**
     *
     * @summary Get Mealplan Categories
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplanCategoriesApi
     */
    getMealplanCategoriesApiGroupsCategoriesGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<CategoryBase[], any>>;
    /**
     *
     * @summary Update Mealplan Categories
     * @param {Array<CategoryBase>} categoryBase
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplanCategoriesApi
     */
    updateMealplanCategoriesApiGroupsCategoriesPut(categoryBase: Array<CategoryBase>, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<CategoryBase[], any>>;
}
/**
 * GroupsMealplanRulesApi - axios parameter creator
 * @export
 */
export declare const GroupsMealplanRulesApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Create One
     * @param {PlanRulesCreate} planRulesCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiGroupsMealplansRulesPost: (planRulesCreate: PlanRulesCreate, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiGroupsMealplansRulesItemIdDelete: (itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
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
    getAllApiGroupsMealplansRulesGet: (page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiGroupsMealplansRulesItemIdGet: (itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {PlanRulesCreate} planRulesCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiGroupsMealplansRulesItemIdPut: (itemId: string, planRulesCreate: PlanRulesCreate, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * GroupsMealplanRulesApi - functional programming interface
 * @export
 */
export declare const GroupsMealplanRulesApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Create One
     * @param {PlanRulesCreate} planRulesCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiGroupsMealplansRulesPost(planRulesCreate: PlanRulesCreate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlanRulesOut>>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiGroupsMealplansRulesItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlanRulesOut>>;
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
    getAllApiGroupsMealplansRulesGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlanRulesPagination>>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiGroupsMealplansRulesItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlanRulesOut>>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {PlanRulesCreate} planRulesCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiGroupsMealplansRulesItemIdPut(itemId: string, planRulesCreate: PlanRulesCreate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlanRulesOut>>;
};
/**
 * GroupsMealplanRulesApi - factory interface
 * @export
 */
export declare const GroupsMealplanRulesApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Create One
     * @param {PlanRulesCreate} planRulesCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiGroupsMealplansRulesPost(planRulesCreate: PlanRulesCreate, acceptLanguage?: string, options?: any): AxiosPromise<PlanRulesOut>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiGroupsMealplansRulesItemIdDelete(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<PlanRulesOut>;
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
    getAllApiGroupsMealplansRulesGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<PlanRulesPagination>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiGroupsMealplansRulesItemIdGet(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<PlanRulesOut>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {PlanRulesCreate} planRulesCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiGroupsMealplansRulesItemIdPut(itemId: string, planRulesCreate: PlanRulesCreate, acceptLanguage?: string, options?: any): AxiosPromise<PlanRulesOut>;
};
/**
 * GroupsMealplanRulesApi - object-oriented interface
 * @export
 * @class GroupsMealplanRulesApi
 * @extends {BaseAPI}
 */
export declare class GroupsMealplanRulesApi extends BaseAPI {
    /**
     *
     * @summary Create One
     * @param {PlanRulesCreate} planRulesCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplanRulesApi
     */
    createOneApiGroupsMealplansRulesPost(planRulesCreate: PlanRulesCreate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PlanRulesOut, any>>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplanRulesApi
     */
    deleteOneApiGroupsMealplansRulesItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PlanRulesOut, any>>;
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
     * @memberof GroupsMealplanRulesApi
     */
    getAllApiGroupsMealplansRulesGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PlanRulesPagination, any>>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplanRulesApi
     */
    getOneApiGroupsMealplansRulesItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PlanRulesOut, any>>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {PlanRulesCreate} planRulesCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplanRulesApi
     */
    updateOneApiGroupsMealplansRulesItemIdPut(itemId: string, planRulesCreate: PlanRulesCreate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PlanRulesOut, any>>;
}
/**
 * GroupsMealplansApi - axios parameter creator
 * @export
 */
export declare const GroupsMealplansApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Create One
     * @param {CreatePlanEntry} createPlanEntry
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiGroupsMealplansPost: (createPlanEntry: CreatePlanEntry, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * create_random_meal is a route that provides the randomized functionality for mealplaners. It operates by following the rules setout in the Groups mealplan settings. If not settings are set, it will default return any random meal.  Refer to the mealplan settings routes for more information on how rules can be applied to the random meal selector.
     * @summary Create Random Meal
     * @param {CreateRandomEntry} createRandomEntry
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRandomMealApiGroupsMealplansRandomPost: (createRandomEntry: CreateRandomEntry, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Delete One
     * @param {number} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiGroupsMealplansItemIdDelete: (itemId: number, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get All
     * @param {string} [startDate]
     * @param {string} [endDate]
     * @param {number} [page]
     * @param {number} [perPage]
     * @param {string} [orderBy]
     * @param {OrderDirection} [orderDirection]
     * @param {string} [queryFilter]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllApiGroupsMealplansGet: (startDate?: string, endDate?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get One
     * @param {number} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiGroupsMealplansItemIdGet: (itemId: number, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get Todays Meals
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTodaysMealsApiGroupsMealplansTodayGet: (acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Update One
     * @param {number} itemId
     * @param {UpdatePlanEntry} updatePlanEntry
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiGroupsMealplansItemIdPut: (itemId: number, updatePlanEntry: UpdatePlanEntry, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * GroupsMealplansApi - functional programming interface
 * @export
 */
export declare const GroupsMealplansApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Create One
     * @param {CreatePlanEntry} createPlanEntry
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiGroupsMealplansPost(createPlanEntry: CreatePlanEntry, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadPlanEntry>>;
    /**
     * create_random_meal is a route that provides the randomized functionality for mealplaners. It operates by following the rules setout in the Groups mealplan settings. If not settings are set, it will default return any random meal.  Refer to the mealplan settings routes for more information on how rules can be applied to the random meal selector.
     * @summary Create Random Meal
     * @param {CreateRandomEntry} createRandomEntry
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRandomMealApiGroupsMealplansRandomPost(createRandomEntry: CreateRandomEntry, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadPlanEntry>>;
    /**
     *
     * @summary Delete One
     * @param {number} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiGroupsMealplansItemIdDelete(itemId: number, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadPlanEntry>>;
    /**
     *
     * @summary Get All
     * @param {string} [startDate]
     * @param {string} [endDate]
     * @param {number} [page]
     * @param {number} [perPage]
     * @param {string} [orderBy]
     * @param {OrderDirection} [orderDirection]
     * @param {string} [queryFilter]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllApiGroupsMealplansGet(startDate?: string, endDate?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlanEntryPagination>>;
    /**
     *
     * @summary Get One
     * @param {number} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiGroupsMealplansItemIdGet(itemId: number, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadPlanEntry>>;
    /**
     *
     * @summary Get Todays Meals
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTodaysMealsApiGroupsMealplansTodayGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     *
     * @summary Update One
     * @param {number} itemId
     * @param {UpdatePlanEntry} updatePlanEntry
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiGroupsMealplansItemIdPut(itemId: number, updatePlanEntry: UpdatePlanEntry, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadPlanEntry>>;
};
/**
 * GroupsMealplansApi - factory interface
 * @export
 */
export declare const GroupsMealplansApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Create One
     * @param {CreatePlanEntry} createPlanEntry
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiGroupsMealplansPost(createPlanEntry: CreatePlanEntry, acceptLanguage?: string, options?: any): AxiosPromise<ReadPlanEntry>;
    /**
     * create_random_meal is a route that provides the randomized functionality for mealplaners. It operates by following the rules setout in the Groups mealplan settings. If not settings are set, it will default return any random meal.  Refer to the mealplan settings routes for more information on how rules can be applied to the random meal selector.
     * @summary Create Random Meal
     * @param {CreateRandomEntry} createRandomEntry
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRandomMealApiGroupsMealplansRandomPost(createRandomEntry: CreateRandomEntry, acceptLanguage?: string, options?: any): AxiosPromise<ReadPlanEntry>;
    /**
     *
     * @summary Delete One
     * @param {number} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiGroupsMealplansItemIdDelete(itemId: number, acceptLanguage?: string, options?: any): AxiosPromise<ReadPlanEntry>;
    /**
     *
     * @summary Get All
     * @param {string} [startDate]
     * @param {string} [endDate]
     * @param {number} [page]
     * @param {number} [perPage]
     * @param {string} [orderBy]
     * @param {OrderDirection} [orderDirection]
     * @param {string} [queryFilter]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllApiGroupsMealplansGet(startDate?: string, endDate?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<PlanEntryPagination>;
    /**
     *
     * @summary Get One
     * @param {number} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiGroupsMealplansItemIdGet(itemId: number, acceptLanguage?: string, options?: any): AxiosPromise<ReadPlanEntry>;
    /**
     *
     * @summary Get Todays Meals
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTodaysMealsApiGroupsMealplansTodayGet(acceptLanguage?: string, options?: any): AxiosPromise<any>;
    /**
     *
     * @summary Update One
     * @param {number} itemId
     * @param {UpdatePlanEntry} updatePlanEntry
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiGroupsMealplansItemIdPut(itemId: number, updatePlanEntry: UpdatePlanEntry, acceptLanguage?: string, options?: any): AxiosPromise<ReadPlanEntry>;
};
/**
 * GroupsMealplansApi - object-oriented interface
 * @export
 * @class GroupsMealplansApi
 * @extends {BaseAPI}
 */
export declare class GroupsMealplansApi extends BaseAPI {
    /**
     *
     * @summary Create One
     * @param {CreatePlanEntry} createPlanEntry
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplansApi
     */
    createOneApiGroupsMealplansPost(createPlanEntry: CreatePlanEntry, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReadPlanEntry, any>>;
    /**
     * create_random_meal is a route that provides the randomized functionality for mealplaners. It operates by following the rules setout in the Groups mealplan settings. If not settings are set, it will default return any random meal.  Refer to the mealplan settings routes for more information on how rules can be applied to the random meal selector.
     * @summary Create Random Meal
     * @param {CreateRandomEntry} createRandomEntry
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplansApi
     */
    createRandomMealApiGroupsMealplansRandomPost(createRandomEntry: CreateRandomEntry, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReadPlanEntry, any>>;
    /**
     *
     * @summary Delete One
     * @param {number} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplansApi
     */
    deleteOneApiGroupsMealplansItemIdDelete(itemId: number, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReadPlanEntry, any>>;
    /**
     *
     * @summary Get All
     * @param {string} [startDate]
     * @param {string} [endDate]
     * @param {number} [page]
     * @param {number} [perPage]
     * @param {string} [orderBy]
     * @param {OrderDirection} [orderDirection]
     * @param {string} [queryFilter]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplansApi
     */
    getAllApiGroupsMealplansGet(startDate?: string, endDate?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<PlanEntryPagination, any>>;
    /**
     *
     * @summary Get One
     * @param {number} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplansApi
     */
    getOneApiGroupsMealplansItemIdGet(itemId: number, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReadPlanEntry, any>>;
    /**
     *
     * @summary Get Todays Meals
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplansApi
     */
    getTodaysMealsApiGroupsMealplansTodayGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     *
     * @summary Update One
     * @param {number} itemId
     * @param {UpdatePlanEntry} updatePlanEntry
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMealplansApi
     */
    updateOneApiGroupsMealplansItemIdPut(itemId: number, updatePlanEntry: UpdatePlanEntry, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReadPlanEntry, any>>;
}
/**
 * GroupsMigrationsApi - axios parameter creator
 * @export
 */
export declare const GroupsMigrationsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Start Data Migration
     * @param {SupportedMigrations} migrationType
     * @param {File} archive
     * @param {string} [acceptLanguage]
     * @param {boolean} [addMigrationTag]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    startDataMigrationApiGroupsMigrationsPost: (migrationType: SupportedMigrations, archive: File, acceptLanguage?: string, addMigrationTag?: boolean, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * GroupsMigrationsApi - functional programming interface
 * @export
 */
export declare const GroupsMigrationsApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Start Data Migration
     * @param {SupportedMigrations} migrationType
     * @param {File} archive
     * @param {string} [acceptLanguage]
     * @param {boolean} [addMigrationTag]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    startDataMigrationApiGroupsMigrationsPost(migrationType: SupportedMigrations, archive: File, acceptLanguage?: string, addMigrationTag?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReportSummary>>;
};
/**
 * GroupsMigrationsApi - factory interface
 * @export
 */
export declare const GroupsMigrationsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Start Data Migration
     * @param {SupportedMigrations} migrationType
     * @param {File} archive
     * @param {string} [acceptLanguage]
     * @param {boolean} [addMigrationTag]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    startDataMigrationApiGroupsMigrationsPost(migrationType: SupportedMigrations, archive: File, acceptLanguage?: string, addMigrationTag?: boolean, options?: any): AxiosPromise<ReportSummary>;
};
/**
 * GroupsMigrationsApi - object-oriented interface
 * @export
 * @class GroupsMigrationsApi
 * @extends {BaseAPI}
 */
export declare class GroupsMigrationsApi extends BaseAPI {
    /**
     *
     * @summary Start Data Migration
     * @param {SupportedMigrations} migrationType
     * @param {File} archive
     * @param {string} [acceptLanguage]
     * @param {boolean} [addMigrationTag]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMigrationsApi
     */
    startDataMigrationApiGroupsMigrationsPost(migrationType: SupportedMigrations, archive: File, acceptLanguage?: string, addMigrationTag?: boolean, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReportSummary, any>>;
}
/**
 * GroupsMultiPurposeLabelsApi - axios parameter creator
 * @export
 */
export declare const GroupsMultiPurposeLabelsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Create One
     * @param {MultiPurposeLabelCreate} multiPurposeLabelCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiGroupsLabelsPost: (multiPurposeLabelCreate: MultiPurposeLabelCreate, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiGroupsLabelsItemIdDelete: (itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
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
    getAllApiGroupsLabelsGet: (page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiGroupsLabelsItemIdGet: (itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {MultiPurposeLabelUpdate} multiPurposeLabelUpdate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiGroupsLabelsItemIdPut: (itemId: string, multiPurposeLabelUpdate: MultiPurposeLabelUpdate, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * GroupsMultiPurposeLabelsApi - functional programming interface
 * @export
 */
export declare const GroupsMultiPurposeLabelsApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Create One
     * @param {MultiPurposeLabelCreate} multiPurposeLabelCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiGroupsLabelsPost(multiPurposeLabelCreate: MultiPurposeLabelCreate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MultiPurposeLabelOut>>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiGroupsLabelsItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MultiPurposeLabelOut>>;
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
    getAllApiGroupsLabelsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MultiPurposeLabelPagination>>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiGroupsLabelsItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MultiPurposeLabelOut>>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {MultiPurposeLabelUpdate} multiPurposeLabelUpdate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiGroupsLabelsItemIdPut(itemId: string, multiPurposeLabelUpdate: MultiPurposeLabelUpdate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MultiPurposeLabelOut>>;
};
/**
 * GroupsMultiPurposeLabelsApi - factory interface
 * @export
 */
export declare const GroupsMultiPurposeLabelsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Create One
     * @param {MultiPurposeLabelCreate} multiPurposeLabelCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiGroupsLabelsPost(multiPurposeLabelCreate: MultiPurposeLabelCreate, acceptLanguage?: string, options?: any): AxiosPromise<MultiPurposeLabelOut>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiGroupsLabelsItemIdDelete(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<MultiPurposeLabelOut>;
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
    getAllApiGroupsLabelsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<MultiPurposeLabelPagination>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiGroupsLabelsItemIdGet(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<MultiPurposeLabelOut>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {MultiPurposeLabelUpdate} multiPurposeLabelUpdate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiGroupsLabelsItemIdPut(itemId: string, multiPurposeLabelUpdate: MultiPurposeLabelUpdate, acceptLanguage?: string, options?: any): AxiosPromise<MultiPurposeLabelOut>;
};
/**
 * GroupsMultiPurposeLabelsApi - object-oriented interface
 * @export
 * @class GroupsMultiPurposeLabelsApi
 * @extends {BaseAPI}
 */
export declare class GroupsMultiPurposeLabelsApi extends BaseAPI {
    /**
     *
     * @summary Create One
     * @param {MultiPurposeLabelCreate} multiPurposeLabelCreate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMultiPurposeLabelsApi
     */
    createOneApiGroupsLabelsPost(multiPurposeLabelCreate: MultiPurposeLabelCreate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<MultiPurposeLabelOut, any>>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMultiPurposeLabelsApi
     */
    deleteOneApiGroupsLabelsItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<MultiPurposeLabelOut, any>>;
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
     * @memberof GroupsMultiPurposeLabelsApi
     */
    getAllApiGroupsLabelsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<MultiPurposeLabelPagination, any>>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMultiPurposeLabelsApi
     */
    getOneApiGroupsLabelsItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<MultiPurposeLabelOut, any>>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {MultiPurposeLabelUpdate} multiPurposeLabelUpdate
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsMultiPurposeLabelsApi
     */
    updateOneApiGroupsLabelsItemIdPut(itemId: string, multiPurposeLabelUpdate: MultiPurposeLabelUpdate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<MultiPurposeLabelOut, any>>;
}
/**
 * GroupsReportsApi - axios parameter creator
 * @export
 */
export declare const GroupsReportsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiGroupsReportsItemIdDelete: (itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get All
     * @param {ReportCategory} [reportType]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllApiGroupsReportsGet: (reportType?: ReportCategory, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiGroupsReportsItemIdGet: (itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * GroupsReportsApi - functional programming interface
 * @export
 */
export declare const GroupsReportsApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiGroupsReportsItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     *
     * @summary Get All
     * @param {ReportCategory} [reportType]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllApiGroupsReportsGet(reportType?: ReportCategory, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ReportSummary>>>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiGroupsReportsItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReportOut>>;
};
/**
 * GroupsReportsApi - factory interface
 * @export
 */
export declare const GroupsReportsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiGroupsReportsItemIdDelete(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<any>;
    /**
     *
     * @summary Get All
     * @param {ReportCategory} [reportType]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllApiGroupsReportsGet(reportType?: ReportCategory, acceptLanguage?: string, options?: any): AxiosPromise<Array<ReportSummary>>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiGroupsReportsItemIdGet(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<ReportOut>;
};
/**
 * GroupsReportsApi - object-oriented interface
 * @export
 * @class GroupsReportsApi
 * @extends {BaseAPI}
 */
export declare class GroupsReportsApi extends BaseAPI {
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsReportsApi
     */
    deleteOneApiGroupsReportsItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     *
     * @summary Get All
     * @param {ReportCategory} [reportType]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsReportsApi
     */
    getAllApiGroupsReportsGet(reportType?: ReportCategory, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReportSummary[], any>>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsReportsApi
     */
    getOneApiGroupsReportsItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReportOut, any>>;
}
/**
 * GroupsSeedersApi - axios parameter creator
 * @export
 */
export declare const GroupsSeedersApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Seed Foods
     * @param {SeederConfig} seederConfig
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    seedFoodsApiGroupsSeedersFoodsPost: (seederConfig: SeederConfig, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Seed Labels
     * @param {SeederConfig} seederConfig
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    seedLabelsApiGroupsSeedersLabelsPost: (seederConfig: SeederConfig, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Seed Units
     * @param {SeederConfig} seederConfig
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    seedUnitsApiGroupsSeedersUnitsPost: (seederConfig: SeederConfig, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * GroupsSeedersApi - functional programming interface
 * @export
 */
export declare const GroupsSeedersApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Seed Foods
     * @param {SeederConfig} seederConfig
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    seedFoodsApiGroupsSeedersFoodsPost(seederConfig: SeederConfig, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>>;
    /**
     *
     * @summary Seed Labels
     * @param {SeederConfig} seederConfig
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    seedLabelsApiGroupsSeedersLabelsPost(seederConfig: SeederConfig, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>>;
    /**
     *
     * @summary Seed Units
     * @param {SeederConfig} seederConfig
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    seedUnitsApiGroupsSeedersUnitsPost(seederConfig: SeederConfig, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>>;
};
/**
 * GroupsSeedersApi - factory interface
 * @export
 */
export declare const GroupsSeedersApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Seed Foods
     * @param {SeederConfig} seederConfig
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    seedFoodsApiGroupsSeedersFoodsPost(seederConfig: SeederConfig, acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse>;
    /**
     *
     * @summary Seed Labels
     * @param {SeederConfig} seederConfig
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    seedLabelsApiGroupsSeedersLabelsPost(seederConfig: SeederConfig, acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse>;
    /**
     *
     * @summary Seed Units
     * @param {SeederConfig} seederConfig
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    seedUnitsApiGroupsSeedersUnitsPost(seederConfig: SeederConfig, acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse>;
};
/**
 * GroupsSeedersApi - object-oriented interface
 * @export
 * @class GroupsSeedersApi
 * @extends {BaseAPI}
 */
export declare class GroupsSeedersApi extends BaseAPI {
    /**
     *
     * @summary Seed Foods
     * @param {SeederConfig} seederConfig
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsSeedersApi
     */
    seedFoodsApiGroupsSeedersFoodsPost(seederConfig: SeederConfig, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<SuccessResponse, any>>;
    /**
     *
     * @summary Seed Labels
     * @param {SeederConfig} seederConfig
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsSeedersApi
     */
    seedLabelsApiGroupsSeedersLabelsPost(seederConfig: SeederConfig, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<SuccessResponse, any>>;
    /**
     *
     * @summary Seed Units
     * @param {SeederConfig} seederConfig
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsSeedersApi
     */
    seedUnitsApiGroupsSeedersUnitsPost(seederConfig: SeederConfig, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<SuccessResponse, any>>;
}
/**
 * GroupsSelfServiceApi - axios parameter creator
 * @export
 */
export declare const GroupsSelfServiceApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Returns the Group of user lists
     * @summary Get Group Members
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getGroupMembersApiGroupsMembersGet: (acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get Group Preferences
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getGroupPreferencesApiGroupsPreferencesGet: (acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Returns the Group Data for the Current User
     * @summary Get Logged In User Group
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLoggedInUserGroupApiGroupsSelfGet: (acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get Statistics
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getStatisticsApiGroupsStatisticsGet: (acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get Storage
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getStorageApiGroupsStorageGet: (acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Set Member Permissions
     * @param {SetPermissions} setPermissions
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    setMemberPermissionsApiGroupsPermissionsPut: (setPermissions: SetPermissions, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Update Group Preferences
     * @param {UpdateGroupPreferences} updateGroupPreferences
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateGroupPreferencesApiGroupsPreferencesPut: (updateGroupPreferences: UpdateGroupPreferences, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * GroupsSelfServiceApi - functional programming interface
 * @export
 */
export declare const GroupsSelfServiceApiFp: (configuration?: Configuration) => {
    /**
     * Returns the Group of user lists
     * @summary Get Group Members
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getGroupMembersApiGroupsMembersGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<UserOut>>>;
    /**
     *
     * @summary Get Group Preferences
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getGroupPreferencesApiGroupsPreferencesGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadGroupPreferences>>;
    /**
     * Returns the Group Data for the Current User
     * @summary Get Logged In User Group
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLoggedInUserGroupApiGroupsSelfGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupInDB>>;
    /**
     *
     * @summary Get Statistics
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getStatisticsApiGroupsStatisticsGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupStatistics>>;
    /**
     *
     * @summary Get Storage
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getStorageApiGroupsStorageGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupStorage>>;
    /**
     *
     * @summary Set Member Permissions
     * @param {SetPermissions} setPermissions
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    setMemberPermissionsApiGroupsPermissionsPut(setPermissions: SetPermissions, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserOut>>;
    /**
     *
     * @summary Update Group Preferences
     * @param {UpdateGroupPreferences} updateGroupPreferences
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateGroupPreferencesApiGroupsPreferencesPut(updateGroupPreferences: UpdateGroupPreferences, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadGroupPreferences>>;
};
/**
 * GroupsSelfServiceApi - factory interface
 * @export
 */
export declare const GroupsSelfServiceApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Returns the Group of user lists
     * @summary Get Group Members
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getGroupMembersApiGroupsMembersGet(acceptLanguage?: string, options?: any): AxiosPromise<Array<UserOut>>;
    /**
     *
     * @summary Get Group Preferences
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getGroupPreferencesApiGroupsPreferencesGet(acceptLanguage?: string, options?: any): AxiosPromise<ReadGroupPreferences>;
    /**
     * Returns the Group Data for the Current User
     * @summary Get Logged In User Group
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLoggedInUserGroupApiGroupsSelfGet(acceptLanguage?: string, options?: any): AxiosPromise<GroupInDB>;
    /**
     *
     * @summary Get Statistics
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getStatisticsApiGroupsStatisticsGet(acceptLanguage?: string, options?: any): AxiosPromise<GroupStatistics>;
    /**
     *
     * @summary Get Storage
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getStorageApiGroupsStorageGet(acceptLanguage?: string, options?: any): AxiosPromise<GroupStorage>;
    /**
     *
     * @summary Set Member Permissions
     * @param {SetPermissions} setPermissions
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    setMemberPermissionsApiGroupsPermissionsPut(setPermissions: SetPermissions, acceptLanguage?: string, options?: any): AxiosPromise<UserOut>;
    /**
     *
     * @summary Update Group Preferences
     * @param {UpdateGroupPreferences} updateGroupPreferences
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateGroupPreferencesApiGroupsPreferencesPut(updateGroupPreferences: UpdateGroupPreferences, acceptLanguage?: string, options?: any): AxiosPromise<ReadGroupPreferences>;
};
/**
 * GroupsSelfServiceApi - object-oriented interface
 * @export
 * @class GroupsSelfServiceApi
 * @extends {BaseAPI}
 */
export declare class GroupsSelfServiceApi extends BaseAPI {
    /**
     * Returns the Group of user lists
     * @summary Get Group Members
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsSelfServiceApi
     */
    getGroupMembersApiGroupsMembersGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<UserOut[], any>>;
    /**
     *
     * @summary Get Group Preferences
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsSelfServiceApi
     */
    getGroupPreferencesApiGroupsPreferencesGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReadGroupPreferences, any>>;
    /**
     * Returns the Group Data for the Current User
     * @summary Get Logged In User Group
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsSelfServiceApi
     */
    getLoggedInUserGroupApiGroupsSelfGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GroupInDB, any>>;
    /**
     *
     * @summary Get Statistics
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsSelfServiceApi
     */
    getStatisticsApiGroupsStatisticsGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GroupStatistics, any>>;
    /**
     *
     * @summary Get Storage
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsSelfServiceApi
     */
    getStorageApiGroupsStorageGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<GroupStorage, any>>;
    /**
     *
     * @summary Set Member Permissions
     * @param {SetPermissions} setPermissions
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsSelfServiceApi
     */
    setMemberPermissionsApiGroupsPermissionsPut(setPermissions: SetPermissions, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<UserOut, any>>;
    /**
     *
     * @summary Update Group Preferences
     * @param {UpdateGroupPreferences} updateGroupPreferences
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsSelfServiceApi
     */
    updateGroupPreferencesApiGroupsPreferencesPut(updateGroupPreferences: UpdateGroupPreferences, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReadGroupPreferences, any>>;
}
/**
 * GroupsShoppingListItemsApi - axios parameter creator
 * @export
 */
export declare const GroupsShoppingListItemsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Create One
     * @param {ShoppingListItemCreate} shoppingListItemCreate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiGroupsShoppingItemsPost: (shoppingListItemCreate: ShoppingListItemCreate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Delete Many
     * @param {Array<string>} [ids]
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteManyApiGroupsShoppingItemsDelete: (ids?: Array<string>, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiGroupsShoppingItemsItemIdDelete: (itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiGroupsShoppingItemsItemIdGet: (itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Update Many
     * @param {Array<ShoppingListItemUpdate>} shoppingListItemUpdate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateManyApiGroupsShoppingItemsPut: (shoppingListItemUpdate: Array<ShoppingListItemUpdate>, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {ShoppingListItemUpdate} shoppingListItemUpdate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiGroupsShoppingItemsItemIdPut: (itemId: string, shoppingListItemUpdate: ShoppingListItemUpdate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * GroupsShoppingListItemsApi - functional programming interface
 * @export
 */
export declare const GroupsShoppingListItemsApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Create One
     * @param {ShoppingListItemCreate} shoppingListItemCreate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiGroupsShoppingItemsPost(shoppingListItemCreate: ShoppingListItemCreate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShoppingListItemOut>>;
    /**
     *
     * @summary Delete Many
     * @param {Array<string>} [ids]
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteManyApiGroupsShoppingItemsDelete(ids?: Array<string>, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiGroupsShoppingItemsItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShoppingListItemOut>>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiGroupsShoppingItemsItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShoppingListItemOut>>;
    /**
     *
     * @summary Update Many
     * @param {Array<ShoppingListItemUpdate>} shoppingListItemUpdate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateManyApiGroupsShoppingItemsPut(shoppingListItemUpdate: Array<ShoppingListItemUpdate>, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ShoppingListItemOut>>>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {ShoppingListItemUpdate} shoppingListItemUpdate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiGroupsShoppingItemsItemIdPut(itemId: string, shoppingListItemUpdate: ShoppingListItemUpdate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShoppingListItemOut>>;
};
/**
 * GroupsShoppingListItemsApi - factory interface
 * @export
 */
export declare const GroupsShoppingListItemsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Create One
     * @param {ShoppingListItemCreate} shoppingListItemCreate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiGroupsShoppingItemsPost(shoppingListItemCreate: ShoppingListItemCreate, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<ShoppingListItemOut>;
    /**
     *
     * @summary Delete Many
     * @param {Array<string>} [ids]
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteManyApiGroupsShoppingItemsDelete(ids?: Array<string>, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiGroupsShoppingItemsItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<ShoppingListItemOut>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiGroupsShoppingItemsItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<ShoppingListItemOut>;
    /**
     *
     * @summary Update Many
     * @param {Array<ShoppingListItemUpdate>} shoppingListItemUpdate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateManyApiGroupsShoppingItemsPut(shoppingListItemUpdate: Array<ShoppingListItemUpdate>, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<Array<ShoppingListItemOut>>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {ShoppingListItemUpdate} shoppingListItemUpdate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiGroupsShoppingItemsItemIdPut(itemId: string, shoppingListItemUpdate: ShoppingListItemUpdate, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<ShoppingListItemOut>;
};
/**
 * GroupsShoppingListItemsApi - object-oriented interface
 * @export
 * @class GroupsShoppingListItemsApi
 * @extends {BaseAPI}
 */
export declare class GroupsShoppingListItemsApi extends BaseAPI {
    /**
     *
     * @summary Create One
     * @param {ShoppingListItemCreate} shoppingListItemCreate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsShoppingListItemsApi
     */
    createOneApiGroupsShoppingItemsPost(shoppingListItemCreate: ShoppingListItemCreate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ShoppingListItemOut, any>>;
    /**
     *
     * @summary Delete Many
     * @param {Array<string>} [ids]
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsShoppingListItemsApi
     */
    deleteManyApiGroupsShoppingItemsDelete(ids?: Array<string>, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<SuccessResponse, any>>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsShoppingListItemsApi
     */
    deleteOneApiGroupsShoppingItemsItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ShoppingListItemOut, any>>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsShoppingListItemsApi
     */
    getOneApiGroupsShoppingItemsItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ShoppingListItemOut, any>>;
    /**
     *
     * @summary Update Many
     * @param {Array<ShoppingListItemUpdate>} shoppingListItemUpdate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsShoppingListItemsApi
     */
    updateManyApiGroupsShoppingItemsPut(shoppingListItemUpdate: Array<ShoppingListItemUpdate>, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ShoppingListItemOut[], any>>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {ShoppingListItemUpdate} shoppingListItemUpdate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsShoppingListItemsApi
     */
    updateOneApiGroupsShoppingItemsItemIdPut(itemId: string, shoppingListItemUpdate: ShoppingListItemUpdate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ShoppingListItemOut, any>>;
}
/**
 * GroupsShoppingListsApi - axios parameter creator
 * @export
 */
export declare const GroupsShoppingListsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Add Recipe Ingredients To List
     * @param {string} itemId
     * @param {string} recipeId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addRecipeIngredientsToListApiGroupsShoppingListsItemIdRecipeRecipeIdPost: (itemId: string, recipeId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Create One
     * @param {ShoppingListCreate} shoppingListCreate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiGroupsShoppingListsPost: (shoppingListCreate: ShoppingListCreate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiGroupsShoppingListsItemIdDelete: (itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
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
    getAllApiGroupsShoppingListsGet: (groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiGroupsShoppingListsItemIdGet: (itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Remove Recipe Ingredients From List
     * @param {string} itemId
     * @param {string} recipeId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeRecipeIngredientsFromListApiGroupsShoppingListsItemIdRecipeRecipeIdDelete: (itemId: string, recipeId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {ShoppingListUpdate} shoppingListUpdate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiGroupsShoppingListsItemIdPut: (itemId: string, shoppingListUpdate: ShoppingListUpdate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * GroupsShoppingListsApi - functional programming interface
 * @export
 */
export declare const GroupsShoppingListsApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Add Recipe Ingredients To List
     * @param {string} itemId
     * @param {string} recipeId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addRecipeIngredientsToListApiGroupsShoppingListsItemIdRecipeRecipeIdPost(itemId: string, recipeId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShoppingListOut>>;
    /**
     *
     * @summary Create One
     * @param {ShoppingListCreate} shoppingListCreate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiGroupsShoppingListsPost(shoppingListCreate: ShoppingListCreate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShoppingListOut>>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiGroupsShoppingListsItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShoppingListOut>>;
    /**
     *
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
    getAllApiGroupsShoppingListsGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShoppingListPagination>>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiGroupsShoppingListsItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShoppingListOut>>;
    /**
     *
     * @summary Remove Recipe Ingredients From List
     * @param {string} itemId
     * @param {string} recipeId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeRecipeIngredientsFromListApiGroupsShoppingListsItemIdRecipeRecipeIdDelete(itemId: string, recipeId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShoppingListOut>>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {ShoppingListUpdate} shoppingListUpdate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiGroupsShoppingListsItemIdPut(itemId: string, shoppingListUpdate: ShoppingListUpdate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShoppingListOut>>;
};
/**
 * GroupsShoppingListsApi - factory interface
 * @export
 */
export declare const GroupsShoppingListsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Add Recipe Ingredients To List
     * @param {string} itemId
     * @param {string} recipeId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    addRecipeIngredientsToListApiGroupsShoppingListsItemIdRecipeRecipeIdPost(itemId: string, recipeId: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<ShoppingListOut>;
    /**
     *
     * @summary Create One
     * @param {ShoppingListCreate} shoppingListCreate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiGroupsShoppingListsPost(shoppingListCreate: ShoppingListCreate, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<ShoppingListOut>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiGroupsShoppingListsItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<ShoppingListOut>;
    /**
     *
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
    getAllApiGroupsShoppingListsGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<ShoppingListPagination>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiGroupsShoppingListsItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<ShoppingListOut>;
    /**
     *
     * @summary Remove Recipe Ingredients From List
     * @param {string} itemId
     * @param {string} recipeId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeRecipeIngredientsFromListApiGroupsShoppingListsItemIdRecipeRecipeIdDelete(itemId: string, recipeId: string, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<ShoppingListOut>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {ShoppingListUpdate} shoppingListUpdate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiGroupsShoppingListsItemIdPut(itemId: string, shoppingListUpdate: ShoppingListUpdate, groupId?: string, acceptLanguage?: string, options?: any): AxiosPromise<ShoppingListOut>;
};
/**
 * GroupsShoppingListsApi - object-oriented interface
 * @export
 * @class GroupsShoppingListsApi
 * @extends {BaseAPI}
 */
export declare class GroupsShoppingListsApi extends BaseAPI {
    /**
     *
     * @summary Add Recipe Ingredients To List
     * @param {string} itemId
     * @param {string} recipeId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsShoppingListsApi
     */
    addRecipeIngredientsToListApiGroupsShoppingListsItemIdRecipeRecipeIdPost(itemId: string, recipeId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ShoppingListOut, any>>;
    /**
     *
     * @summary Create One
     * @param {ShoppingListCreate} shoppingListCreate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsShoppingListsApi
     */
    createOneApiGroupsShoppingListsPost(shoppingListCreate: ShoppingListCreate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ShoppingListOut, any>>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsShoppingListsApi
     */
    deleteOneApiGroupsShoppingListsItemIdDelete(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ShoppingListOut, any>>;
    /**
     *
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
     * @memberof GroupsShoppingListsApi
     */
    getAllApiGroupsShoppingListsGet(groupId?: string, page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ShoppingListPagination, any>>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsShoppingListsApi
     */
    getOneApiGroupsShoppingListsItemIdGet(itemId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ShoppingListOut, any>>;
    /**
     *
     * @summary Remove Recipe Ingredients From List
     * @param {string} itemId
     * @param {string} recipeId
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsShoppingListsApi
     */
    removeRecipeIngredientsFromListApiGroupsShoppingListsItemIdRecipeRecipeIdDelete(itemId: string, recipeId: string, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ShoppingListOut, any>>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {ShoppingListUpdate} shoppingListUpdate
     * @param {string} [groupId]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsShoppingListsApi
     */
    updateOneApiGroupsShoppingListsItemIdPut(itemId: string, shoppingListUpdate: ShoppingListUpdate, groupId?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ShoppingListOut, any>>;
}
/**
 * GroupsWebhooksApi - axios parameter creator
 * @export
 */
export declare const GroupsWebhooksApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Create One
     * @param {CreateWebhook} createWebhook
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiGroupsWebhooksPost: (createWebhook: CreateWebhook, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiGroupsWebhooksItemIdDelete: (itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
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
    getAllApiGroupsWebhooksGet: (page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiGroupsWebhooksItemIdGet: (itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Manually re-fires all previously scheduled webhooks for today
     * @summary Rerun Webhooks
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    rerunWebhooksApiGroupsWebhooksRerunPost: (acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {CreateWebhook} createWebhook
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiGroupsWebhooksItemIdPut: (itemId: string, createWebhook: CreateWebhook, acceptLanguage?: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * GroupsWebhooksApi - functional programming interface
 * @export
 */
export declare const GroupsWebhooksApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Create One
     * @param {CreateWebhook} createWebhook
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiGroupsWebhooksPost(createWebhook: CreateWebhook, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadWebhook>>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiGroupsWebhooksItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadWebhook>>;
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
    getAllApiGroupsWebhooksGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookPagination>>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiGroupsWebhooksItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadWebhook>>;
    /**
     * Manually re-fires all previously scheduled webhooks for today
     * @summary Rerun Webhooks
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    rerunWebhooksApiGroupsWebhooksRerunPost(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {CreateWebhook} createWebhook
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiGroupsWebhooksItemIdPut(itemId: string, createWebhook: CreateWebhook, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadWebhook>>;
};
/**
 * GroupsWebhooksApi - factory interface
 * @export
 */
export declare const GroupsWebhooksApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Create One
     * @param {CreateWebhook} createWebhook
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createOneApiGroupsWebhooksPost(createWebhook: CreateWebhook, acceptLanguage?: string, options?: any): AxiosPromise<ReadWebhook>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOneApiGroupsWebhooksItemIdDelete(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<ReadWebhook>;
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
    getAllApiGroupsWebhooksGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<WebhookPagination>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOneApiGroupsWebhooksItemIdGet(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<ReadWebhook>;
    /**
     * Manually re-fires all previously scheduled webhooks for today
     * @summary Rerun Webhooks
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    rerunWebhooksApiGroupsWebhooksRerunPost(acceptLanguage?: string, options?: any): AxiosPromise<any>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {CreateWebhook} createWebhook
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOneApiGroupsWebhooksItemIdPut(itemId: string, createWebhook: CreateWebhook, acceptLanguage?: string, options?: any): AxiosPromise<ReadWebhook>;
};
/**
 * GroupsWebhooksApi - object-oriented interface
 * @export
 * @class GroupsWebhooksApi
 * @extends {BaseAPI}
 */
export declare class GroupsWebhooksApi extends BaseAPI {
    /**
     *
     * @summary Create One
     * @param {CreateWebhook} createWebhook
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsWebhooksApi
     */
    createOneApiGroupsWebhooksPost(createWebhook: CreateWebhook, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReadWebhook, any>>;
    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsWebhooksApi
     */
    deleteOneApiGroupsWebhooksItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReadWebhook, any>>;
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
     * @memberof GroupsWebhooksApi
     */
    getAllApiGroupsWebhooksGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<WebhookPagination, any>>;
    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsWebhooksApi
     */
    getOneApiGroupsWebhooksItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReadWebhook, any>>;
    /**
     * Manually re-fires all previously scheduled webhooks for today
     * @summary Rerun Webhooks
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsWebhooksApi
     */
    rerunWebhooksApiGroupsWebhooksRerunPost(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     *
     * @summary Update One
     * @param {string} itemId
     * @param {CreateWebhook} createWebhook
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupsWebhooksApi
     */
    updateOneApiGroupsWebhooksItemIdPut(itemId: string, createWebhook: CreateWebhook, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<ReadWebhook, any>>;
}
//# sourceMappingURL=groups-api.d.ts.map