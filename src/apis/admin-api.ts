import {Configuration} from "../common/configuration";
import globalAxios, {AxiosInstance, AxiosPromise, AxiosRequestConfig} from "axios";
import {BASE_PATH, BaseAPI, RequestArgs} from "../common/base";
import {
    assertParamExists,
    createRequestFunction,
    DUMMY_BASE_URL, serializeDataIfNeeded,
    setOAuthToObject,
    setSearchParams,
    toPathString
} from "../common/common";
import {
    AdminAboutInfo,
    AllBackups, AppStatistics,
    CheckAppConfig,
    DockerVolumeText,
    EmailReady, EmailSuccess, EmailTest, FileTokenResponse,
    GroupAdminUpdate,
    GroupBase, GroupInDB, GroupPagination,
    MaintenanceLogs, MaintenanceStorageDetails, MaintenanceSummary,
    MealieAnalytics,
    OrderDirection, ServerTask, ServerTaskPagination,
    SuccessResponse, UnlockResults,
    UserIn, UserOut, UserPagination
} from "../models";

/**
 * AdminAboutApi - axios parameter creator
 * @export
 */
export const AdminAboutApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Check App Config
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkAppConfigApiAdminAboutCheckGet: async (acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/about/check`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get general application information
         * @summary Get App Info
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAppInfoApiAdminAboutGet: async (acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/about`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Get App Statistics
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAppStatisticsApiAdminAboutStatisticsGet: async (acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/about/statistics`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Validate Docker Volume
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateDockerVolumeApiAdminAboutDockerValidateGet: async (acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/about/docker/validate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AdminAboutApi - functional programming interface
 * @export
 */
export const AdminAboutApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AdminAboutApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Check App Config
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async checkAppConfigApiAdminAboutCheckGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CheckAppConfig>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkAppConfigApiAdminAboutCheckGet(acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get general application information
         * @summary Get App Info
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAppInfoApiAdminAboutGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdminAboutInfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAppInfoApiAdminAboutGet(acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get App Statistics
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAppStatisticsApiAdminAboutStatisticsGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AppStatistics>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAppStatisticsApiAdminAboutStatisticsGet(acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Validate Docker Volume
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async validateDockerVolumeApiAdminAboutDockerValidateGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DockerVolumeText>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.validateDockerVolumeApiAdminAboutDockerValidateGet(acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AdminAboutApi - factory interface
 * @export
 */
export const AdminAboutApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AdminAboutApiFp(configuration)
    return {
        /**
         *
         * @summary Check App Config
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkAppConfigApiAdminAboutCheckGet(acceptLanguage?: string, options?: any): AxiosPromise<CheckAppConfig> {
            return localVarFp.checkAppConfigApiAdminAboutCheckGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Get general application information
         * @summary Get App Info
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAppInfoApiAdminAboutGet(acceptLanguage?: string, options?: any): AxiosPromise<AdminAboutInfo> {
            return localVarFp.getAppInfoApiAdminAboutGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get App Statistics
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAppStatisticsApiAdminAboutStatisticsGet(acceptLanguage?: string, options?: any): AxiosPromise<AppStatistics> {
            return localVarFp.getAppStatisticsApiAdminAboutStatisticsGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Validate Docker Volume
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateDockerVolumeApiAdminAboutDockerValidateGet(acceptLanguage?: string, options?: any): AxiosPromise<DockerVolumeText> {
            return localVarFp.validateDockerVolumeApiAdminAboutDockerValidateGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AdminAboutApi - object-oriented interface
 * @export
 * @class AdminAboutApi
 * @extends {BaseAPI}
 */
export class AdminAboutApi extends BaseAPI {
    /**
     *
     * @summary Check App Config
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminAboutApi
     */
    public checkAppConfigApiAdminAboutCheckGet(acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminAboutApiFp(this.configuration).checkAppConfigApiAdminAboutCheckGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get general application information
     * @summary Get App Info
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminAboutApi
     */
    public getAppInfoApiAdminAboutGet(acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminAboutApiFp(this.configuration).getAppInfoApiAdminAboutGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Get App Statistics
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminAboutApi
     */
    public getAppStatisticsApiAdminAboutStatisticsGet(acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminAboutApiFp(this.configuration).getAppStatisticsApiAdminAboutStatisticsGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Validate Docker Volume
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminAboutApi
     */
    public validateDockerVolumeApiAdminAboutDockerValidateGet(acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminAboutApiFp(this.configuration).validateDockerVolumeApiAdminAboutDockerValidateGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * AdminAnalyticsApi - axios parameter creator
 * @export
 */
export const AdminAnalyticsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Get Analytics
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAnalyticsApiAdminAnalyticsGet: async (acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/analytics`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AdminAnalyticsApi - functional programming interface
 * @export
 */
export const AdminAnalyticsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AdminAnalyticsApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Get Analytics
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAnalyticsApiAdminAnalyticsGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MealieAnalytics>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAnalyticsApiAdminAnalyticsGet(acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AdminAnalyticsApi - factory interface
 * @export
 */
export const AdminAnalyticsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AdminAnalyticsApiFp(configuration)
    return {
        /**
         *
         * @summary Get Analytics
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAnalyticsApiAdminAnalyticsGet(acceptLanguage?: string, options?: any): AxiosPromise<MealieAnalytics> {
            return localVarFp.getAnalyticsApiAdminAnalyticsGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AdminAnalyticsApi - object-oriented interface
 * @export
 * @class AdminAnalyticsApi
 * @extends {BaseAPI}
 */
export class AdminAnalyticsApi extends BaseAPI {
    /**
     *
     * @summary Get Analytics
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminAnalyticsApi
     */
    public getAnalyticsApiAdminAnalyticsGet(acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminAnalyticsApiFp(this.configuration).getAnalyticsApiAdminAnalyticsGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * AdminBackupsApi - axios parameter creator
 * @export
 */
export const AdminBackupsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Create One
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiAdminBackupsPost: async (acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/backups`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Delete One
         * @param {string} fileName
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiAdminBackupsFileNameDelete: async (fileName: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileName' is not null or undefined
            assertParamExists('deleteOneApiAdminBackupsFileNameDelete', 'fileName', fileName)
            const localVarPath = `/api/admin/backups/{file_name}`
                .replace(`{${"file_name"}}`, encodeURIComponent(String(fileName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Get All
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllApiAdminBackupsGet: async (acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/backups`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a token to download a file
         * @summary Get One
         * @param {string} fileName
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiAdminBackupsFileNameGet: async (fileName: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileName' is not null or undefined
            assertParamExists('getOneApiAdminBackupsFileNameGet', 'fileName', fileName)
            const localVarPath = `/api/admin/backups/{file_name}`
                .replace(`{${"file_name"}}`, encodeURIComponent(String(fileName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Import One
         * @param {string} fileName
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        importOneApiAdminBackupsFileNameRestorePost: async (fileName: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileName' is not null or undefined
            assertParamExists('importOneApiAdminBackupsFileNameRestorePost', 'fileName', fileName)
            const localVarPath = `/api/admin/backups/{file_name}/restore`
                .replace(`{${"file_name"}}`, encodeURIComponent(String(fileName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Upload a .zip File to later be imported into Mealie
         * @summary Upload One
         * @param {File} archive
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadOneApiAdminBackupsUploadPost: async (archive: File, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'archive' is not null or undefined
            assertParamExists('uploadOneApiAdminBackupsUploadPost', 'archive', archive)
            const localVarPath = `/api/admin/backups/upload`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }


            if (archive !== undefined) {
                localVarFormParams.append('archive', archive as any);
            }


            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AdminBackupsApi - functional programming interface
 * @export
 */
export const AdminBackupsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AdminBackupsApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Create One
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiAdminBackupsPost(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiAdminBackupsPost(acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Delete One
         * @param {string} fileName
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteOneApiAdminBackupsFileNameDelete(fileName: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiAdminBackupsFileNameDelete(fileName, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get All
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllApiAdminBackupsGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AllBackups>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiAdminBackupsGet(acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a token to download a file
         * @summary Get One
         * @param {string} fileName
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOneApiAdminBackupsFileNameGet(fileName: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileTokenResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiAdminBackupsFileNameGet(fileName, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Import One
         * @param {string} fileName
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async importOneApiAdminBackupsFileNameRestorePost(fileName: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.importOneApiAdminBackupsFileNameRestorePost(fileName, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Upload a .zip File to later be imported into Mealie
         * @summary Upload One
         * @param {File} archive
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadOneApiAdminBackupsUploadPost(archive: File, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadOneApiAdminBackupsUploadPost(archive, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AdminBackupsApi - factory interface
 * @export
 */
export const AdminBackupsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AdminBackupsApiFp(configuration)
    return {
        /**
         *
         * @summary Create One
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiAdminBackupsPost(acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse> {
            return localVarFp.createOneApiAdminBackupsPost(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Delete One
         * @param {string} fileName
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiAdminBackupsFileNameDelete(fileName: string, acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse> {
            return localVarFp.deleteOneApiAdminBackupsFileNameDelete(fileName, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get All
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllApiAdminBackupsGet(acceptLanguage?: string, options?: any): AxiosPromise<AllBackups> {
            return localVarFp.getAllApiAdminBackupsGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a token to download a file
         * @summary Get One
         * @param {string} fileName
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiAdminBackupsFileNameGet(fileName: string, acceptLanguage?: string, options?: any): AxiosPromise<FileTokenResponse> {
            return localVarFp.getOneApiAdminBackupsFileNameGet(fileName, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Import One
         * @param {string} fileName
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        importOneApiAdminBackupsFileNameRestorePost(fileName: string, acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse> {
            return localVarFp.importOneApiAdminBackupsFileNameRestorePost(fileName, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Upload a .zip File to later be imported into Mealie
         * @summary Upload One
         * @param {File} archive
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadOneApiAdminBackupsUploadPost(archive: File, acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse> {
            return localVarFp.uploadOneApiAdminBackupsUploadPost(archive, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AdminBackupsApi - object-oriented interface
 * @export
 * @class AdminBackupsApi
 * @extends {BaseAPI}
 */
export class AdminBackupsApi extends BaseAPI {
    /**
     *
     * @summary Create One
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminBackupsApi
     */
    public createOneApiAdminBackupsPost(acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminBackupsApiFp(this.configuration).createOneApiAdminBackupsPost(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Delete One
     * @param {string} fileName
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminBackupsApi
     */
    public deleteOneApiAdminBackupsFileNameDelete(fileName: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminBackupsApiFp(this.configuration).deleteOneApiAdminBackupsFileNameDelete(fileName, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Get All
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminBackupsApi
     */
    public getAllApiAdminBackupsGet(acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminBackupsApiFp(this.configuration).getAllApiAdminBackupsGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a token to download a file
     * @summary Get One
     * @param {string} fileName
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminBackupsApi
     */
    public getOneApiAdminBackupsFileNameGet(fileName: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminBackupsApiFp(this.configuration).getOneApiAdminBackupsFileNameGet(fileName, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Import One
     * @param {string} fileName
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminBackupsApi
     */
    public importOneApiAdminBackupsFileNameRestorePost(fileName: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminBackupsApiFp(this.configuration).importOneApiAdminBackupsFileNameRestorePost(fileName, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Upload a .zip File to later be imported into Mealie
     * @summary Upload One
     * @param {File} archive
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminBackupsApi
     */
    public uploadOneApiAdminBackupsUploadPost(archive: File, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminBackupsApiFp(this.configuration).uploadOneApiAdminBackupsUploadPost(archive, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * AdminEmailApi - axios parameter creator
 * @export
 */
export const AdminEmailApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get general application information
         * @summary Check Email Config
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkEmailConfigApiAdminEmailGet: async (acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/email`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Send Test Email
         * @param {EmailTest} emailTest
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendTestEmailApiAdminEmailPost: async (emailTest: EmailTest, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'emailTest' is not null or undefined
            assertParamExists('sendTestEmailApiAdminEmailPost', 'emailTest', emailTest)
            const localVarPath = `/api/admin/email`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(emailTest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AdminEmailApi - functional programming interface
 * @export
 */
export const AdminEmailApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AdminEmailApiAxiosParamCreator(configuration)
    return {
        /**
         * Get general application information
         * @summary Check Email Config
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async checkEmailConfigApiAdminEmailGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmailReady>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkEmailConfigApiAdminEmailGet(acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Send Test Email
         * @param {EmailTest} emailTest
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendTestEmailApiAdminEmailPost(emailTest: EmailTest, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmailSuccess>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendTestEmailApiAdminEmailPost(emailTest, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AdminEmailApi - factory interface
 * @export
 */
export const AdminEmailApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AdminEmailApiFp(configuration)
    return {
        /**
         * Get general application information
         * @summary Check Email Config
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkEmailConfigApiAdminEmailGet(acceptLanguage?: string, options?: any): AxiosPromise<EmailReady> {
            return localVarFp.checkEmailConfigApiAdminEmailGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Send Test Email
         * @param {EmailTest} emailTest
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendTestEmailApiAdminEmailPost(emailTest: EmailTest, acceptLanguage?: string, options?: any): AxiosPromise<EmailSuccess> {
            return localVarFp.sendTestEmailApiAdminEmailPost(emailTest, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AdminEmailApi - object-oriented interface
 * @export
 * @class AdminEmailApi
 * @extends {BaseAPI}
 */
export class AdminEmailApi extends BaseAPI {
    /**
     * Get general application information
     * @summary Check Email Config
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminEmailApi
     */
    public checkEmailConfigApiAdminEmailGet(acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminEmailApiFp(this.configuration).checkEmailConfigApiAdminEmailGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Send Test Email
     * @param {EmailTest} emailTest
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminEmailApi
     */
    public sendTestEmailApiAdminEmailPost(emailTest: EmailTest, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminEmailApiFp(this.configuration).sendTestEmailApiAdminEmailPost(emailTest, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * AdminGroupsApi - axios parameter creator
 * @export
 */
export const AdminGroupsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Create One
         * @param {GroupBase} groupBase
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiAdminGroupsPost: async (groupBase: GroupBase, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupBase' is not null or undefined
            assertParamExists('createOneApiAdminGroupsPost', 'groupBase', groupBase)
            const localVarPath = `/api/admin/groups`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(groupBase, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiAdminGroupsItemIdDelete: async (itemId: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('deleteOneApiAdminGroupsItemIdDelete', 'itemId', itemId)
            const localVarPath = `/api/admin/groups/{item_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
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
        getAllApiAdminGroupsGet: async (page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/groups`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['perPage'] = perPage;
            }

            if (orderBy !== undefined) {
                localVarQueryParameter['orderBy'] = orderBy;
            }

            if (orderDirection !== undefined) {
                localVarQueryParameter['orderDirection'] = orderDirection;
            }

            if (queryFilter !== undefined) {
                localVarQueryParameter['queryFilter'] = queryFilter;
            }

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Get One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiAdminGroupsItemIdGet: async (itemId: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getOneApiAdminGroupsItemIdGet', 'itemId', itemId)
            const localVarPath = `/api/admin/groups/{item_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {GroupAdminUpdate} groupAdminUpdate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiAdminGroupsItemIdPut: async (itemId: string, groupAdminUpdate: GroupAdminUpdate, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('updateOneApiAdminGroupsItemIdPut', 'itemId', itemId)
            // verify required parameter 'groupAdminUpdate' is not null or undefined
            assertParamExists('updateOneApiAdminGroupsItemIdPut', 'groupAdminUpdate', groupAdminUpdate)
            const localVarPath = `/api/admin/groups/{item_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(groupAdminUpdate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AdminGroupsApi - functional programming interface
 * @export
 */
export const AdminGroupsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AdminGroupsApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Create One
         * @param {GroupBase} groupBase
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiAdminGroupsPost(groupBase: GroupBase, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupInDB>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiAdminGroupsPost(groupBase, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteOneApiAdminGroupsItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupInDB>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiAdminGroupsItemIdDelete(itemId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
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
        async getAllApiAdminGroupsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupPagination>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiAdminGroupsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOneApiAdminGroupsItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupInDB>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiAdminGroupsItemIdGet(itemId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {GroupAdminUpdate} groupAdminUpdate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOneApiAdminGroupsItemIdPut(itemId: string, groupAdminUpdate: GroupAdminUpdate, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupInDB>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiAdminGroupsItemIdPut(itemId, groupAdminUpdate, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AdminGroupsApi - factory interface
 * @export
 */
export const AdminGroupsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AdminGroupsApiFp(configuration)
    return {
        /**
         *
         * @summary Create One
         * @param {GroupBase} groupBase
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiAdminGroupsPost(groupBase: GroupBase, acceptLanguage?: string, options?: any): AxiosPromise<GroupInDB> {
            return localVarFp.createOneApiAdminGroupsPost(groupBase, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiAdminGroupsItemIdDelete(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<GroupInDB> {
            return localVarFp.deleteOneApiAdminGroupsItemIdDelete(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
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
        getAllApiAdminGroupsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<GroupPagination> {
            return localVarFp.getAllApiAdminGroupsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiAdminGroupsItemIdGet(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<GroupInDB> {
            return localVarFp.getOneApiAdminGroupsItemIdGet(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {GroupAdminUpdate} groupAdminUpdate
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiAdminGroupsItemIdPut(itemId: string, groupAdminUpdate: GroupAdminUpdate, acceptLanguage?: string, options?: any): AxiosPromise<GroupInDB> {
            return localVarFp.updateOneApiAdminGroupsItemIdPut(itemId, groupAdminUpdate, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AdminGroupsApi - object-oriented interface
 * @export
 * @class AdminGroupsApi
 * @extends {BaseAPI}
 */
export class AdminGroupsApi extends BaseAPI {
    /**
     *
     * @summary Create One
     * @param {GroupBase} groupBase
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminGroupsApi
     */
    public createOneApiAdminGroupsPost(groupBase: GroupBase, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminGroupsApiFp(this.configuration).createOneApiAdminGroupsPost(groupBase, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminGroupsApi
     */
    public deleteOneApiAdminGroupsItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminGroupsApiFp(this.configuration).deleteOneApiAdminGroupsItemIdDelete(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

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
    public getAllApiAdminGroupsGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminGroupsApiFp(this.configuration).getAllApiAdminGroupsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminGroupsApi
     */
    public getOneApiAdminGroupsItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminGroupsApiFp(this.configuration).getOneApiAdminGroupsItemIdGet(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

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
    public updateOneApiAdminGroupsItemIdPut(itemId: string, groupAdminUpdate: GroupAdminUpdate, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminGroupsApiFp(this.configuration).updateOneApiAdminGroupsItemIdPut(itemId, groupAdminUpdate, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * AdminLogApi - axios parameter creator
 * @export
 */
export const AdminLogApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Doc Str
         * @summary Get Log
         * @param {number} num
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLogApiAdminLogsNumGet: async (num: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'num' is not null or undefined
            assertParamExists('getLogApiAdminLogsNumGet', 'num', num)
            const localVarPath = `/api/admin/logs/{num}`
                .replace(`{${"num"}}`, encodeURIComponent(String(num)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a token to download a file
         * @summary Get Log File
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLogFileApiAdminLogsGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/logs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AdminLogApi - functional programming interface
 * @export
 */
export const AdminLogApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AdminLogApiAxiosParamCreator(configuration)
    return {
        /**
         * Doc Str
         * @summary Get Log
         * @param {number} num
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLogApiAdminLogsNumGet(num: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLogApiAdminLogsNumGet(num, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a token to download a file
         * @summary Get Log File
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLogFileApiAdminLogsGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLogFileApiAdminLogsGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AdminLogApi - factory interface
 * @export
 */
export const AdminLogApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AdminLogApiFp(configuration)
    return {
        /**
         * Doc Str
         * @summary Get Log
         * @param {number} num
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLogApiAdminLogsNumGet(num: number, options?: any): AxiosPromise<any> {
            return localVarFp.getLogApiAdminLogsNumGet(num, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a token to download a file
         * @summary Get Log File
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLogFileApiAdminLogsGet(options?: any): AxiosPromise<any> {
            return localVarFp.getLogFileApiAdminLogsGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AdminLogApi - object-oriented interface
 * @export
 * @class AdminLogApi
 * @extends {BaseAPI}
 */
export class AdminLogApi extends BaseAPI {
    /**
     * Doc Str
     * @summary Get Log
     * @param {number} num
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminLogApi
     */
    public getLogApiAdminLogsNumGet(num: number, options?: AxiosRequestConfig) {
        return AdminLogApiFp(this.configuration).getLogApiAdminLogsNumGet(num, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a token to download a file
     * @summary Get Log File
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminLogApi
     */
    public getLogFileApiAdminLogsGet(options?: AxiosRequestConfig) {
        return AdminLogApiFp(this.configuration).getLogFileApiAdminLogsGet(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * AdminMaintenanceApi - axios parameter creator
 * @export
 */
export const AdminMaintenanceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Purges all the images from the filesystem that aren\'t .webp
         * @summary Clean Images
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cleanImagesApiAdminMaintenanceCleanImagesPost: async (acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/maintenance/clean/images`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Purges the logs
         * @summary Clean Logs
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cleanLogsApiAdminMaintenanceCleanLogsPost: async (acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/maintenance/clean/logs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes all the recipe folders that don\'t have names that are valid UUIDs
         * @summary Clean Recipe Folders
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cleanRecipeFoldersApiAdminMaintenanceCleanRecipeFoldersPost: async (acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/maintenance/clean/recipe-folders`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Clean Temp
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cleanTempApiAdminMaintenanceCleanTempPost: async (acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/maintenance/clean/temp`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Get Logs
         * @param {number} [lines]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLogsApiAdminMaintenanceLogsGet: async (lines?: number, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/maintenance/logs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (lines !== undefined) {
                localVarQueryParameter['lines'] = lines;
            }

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the maintenance summary
         * @summary Get Maintenance Summary
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMaintenanceSummaryApiAdminMaintenanceGet: async (acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/maintenance`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Get Storage Details
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStorageDetailsApiAdminMaintenanceStorageGet: async (acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/maintenance/storage`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AdminMaintenanceApi - functional programming interface
 * @export
 */
export const AdminMaintenanceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AdminMaintenanceApiAxiosParamCreator(configuration)
    return {
        /**
         * Purges all the images from the filesystem that aren\'t .webp
         * @summary Clean Images
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cleanImagesApiAdminMaintenanceCleanImagesPost(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cleanImagesApiAdminMaintenanceCleanImagesPost(acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Purges the logs
         * @summary Clean Logs
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cleanLogsApiAdminMaintenanceCleanLogsPost(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cleanLogsApiAdminMaintenanceCleanLogsPost(acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes all the recipe folders that don\'t have names that are valid UUIDs
         * @summary Clean Recipe Folders
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cleanRecipeFoldersApiAdminMaintenanceCleanRecipeFoldersPost(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cleanRecipeFoldersApiAdminMaintenanceCleanRecipeFoldersPost(acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Clean Temp
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cleanTempApiAdminMaintenanceCleanTempPost(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cleanTempApiAdminMaintenanceCleanTempPost(acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get Logs
         * @param {number} [lines]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLogsApiAdminMaintenanceLogsGet(lines?: number, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MaintenanceLogs>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLogsApiAdminMaintenanceLogsGet(lines, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get the maintenance summary
         * @summary Get Maintenance Summary
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMaintenanceSummaryApiAdminMaintenanceGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MaintenanceSummary>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMaintenanceSummaryApiAdminMaintenanceGet(acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get Storage Details
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStorageDetailsApiAdminMaintenanceStorageGet(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MaintenanceStorageDetails>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStorageDetailsApiAdminMaintenanceStorageGet(acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AdminMaintenanceApi - factory interface
 * @export
 */
export const AdminMaintenanceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AdminMaintenanceApiFp(configuration)
    return {
        /**
         * Purges all the images from the filesystem that aren\'t .webp
         * @summary Clean Images
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cleanImagesApiAdminMaintenanceCleanImagesPost(acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse> {
            return localVarFp.cleanImagesApiAdminMaintenanceCleanImagesPost(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Purges the logs
         * @summary Clean Logs
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cleanLogsApiAdminMaintenanceCleanLogsPost(acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse> {
            return localVarFp.cleanLogsApiAdminMaintenanceCleanLogsPost(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes all the recipe folders that don\'t have names that are valid UUIDs
         * @summary Clean Recipe Folders
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cleanRecipeFoldersApiAdminMaintenanceCleanRecipeFoldersPost(acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse> {
            return localVarFp.cleanRecipeFoldersApiAdminMaintenanceCleanRecipeFoldersPost(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Clean Temp
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cleanTempApiAdminMaintenanceCleanTempPost(acceptLanguage?: string, options?: any): AxiosPromise<SuccessResponse> {
            return localVarFp.cleanTempApiAdminMaintenanceCleanTempPost(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get Logs
         * @param {number} [lines]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLogsApiAdminMaintenanceLogsGet(lines?: number, acceptLanguage?: string, options?: any): AxiosPromise<MaintenanceLogs> {
            return localVarFp.getLogsApiAdminMaintenanceLogsGet(lines, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Get the maintenance summary
         * @summary Get Maintenance Summary
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMaintenanceSummaryApiAdminMaintenanceGet(acceptLanguage?: string, options?: any): AxiosPromise<MaintenanceSummary> {
            return localVarFp.getMaintenanceSummaryApiAdminMaintenanceGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get Storage Details
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStorageDetailsApiAdminMaintenanceStorageGet(acceptLanguage?: string, options?: any): AxiosPromise<MaintenanceStorageDetails> {
            return localVarFp.getStorageDetailsApiAdminMaintenanceStorageGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AdminMaintenanceApi - object-oriented interface
 * @export
 * @class AdminMaintenanceApi
 * @extends {BaseAPI}
 */
export class AdminMaintenanceApi extends BaseAPI {
    /**
     * Purges all the images from the filesystem that aren\'t .webp
     * @summary Clean Images
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminMaintenanceApi
     */
    public cleanImagesApiAdminMaintenanceCleanImagesPost(acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminMaintenanceApiFp(this.configuration).cleanImagesApiAdminMaintenanceCleanImagesPost(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Purges the logs
     * @summary Clean Logs
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminMaintenanceApi
     */
    public cleanLogsApiAdminMaintenanceCleanLogsPost(acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminMaintenanceApiFp(this.configuration).cleanLogsApiAdminMaintenanceCleanLogsPost(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes all the recipe folders that don\'t have names that are valid UUIDs
     * @summary Clean Recipe Folders
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminMaintenanceApi
     */
    public cleanRecipeFoldersApiAdminMaintenanceCleanRecipeFoldersPost(acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminMaintenanceApiFp(this.configuration).cleanRecipeFoldersApiAdminMaintenanceCleanRecipeFoldersPost(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Clean Temp
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminMaintenanceApi
     */
    public cleanTempApiAdminMaintenanceCleanTempPost(acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminMaintenanceApiFp(this.configuration).cleanTempApiAdminMaintenanceCleanTempPost(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Get Logs
     * @param {number} [lines]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminMaintenanceApi
     */
    public getLogsApiAdminMaintenanceLogsGet(lines?: number, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminMaintenanceApiFp(this.configuration).getLogsApiAdminMaintenanceLogsGet(lines, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get the maintenance summary
     * @summary Get Maintenance Summary
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminMaintenanceApi
     */
    public getMaintenanceSummaryApiAdminMaintenanceGet(acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminMaintenanceApiFp(this.configuration).getMaintenanceSummaryApiAdminMaintenanceGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Get Storage Details
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminMaintenanceApi
     */
    public getStorageDetailsApiAdminMaintenanceStorageGet(acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminMaintenanceApiFp(this.configuration).getStorageDetailsApiAdminMaintenanceStorageGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * AdminServerTasksApi - axios parameter creator
 * @export
 */
export const AdminServerTasksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Create Test Tasks
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTestTasksApiAdminServerTasksPost: async (acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/server-tasks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
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
        getAllApiAdminServerTasksGet: async (page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/server-tasks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['perPage'] = perPage;
            }

            if (orderBy !== undefined) {
                localVarQueryParameter['orderBy'] = orderBy;
            }

            if (orderDirection !== undefined) {
                localVarQueryParameter['orderDirection'] = orderDirection;
            }

            if (queryFilter !== undefined) {
                localVarQueryParameter['queryFilter'] = queryFilter;
            }

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AdminServerTasksApi - functional programming interface
 * @export
 */
export const AdminServerTasksApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AdminServerTasksApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Create Test Tasks
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createTestTasksApiAdminServerTasksPost(acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServerTask>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createTestTasksApiAdminServerTasksPost(acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
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
        async getAllApiAdminServerTasksGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServerTaskPagination>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiAdminServerTasksGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AdminServerTasksApi - factory interface
 * @export
 */
export const AdminServerTasksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AdminServerTasksApiFp(configuration)
    return {
        /**
         *
         * @summary Create Test Tasks
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTestTasksApiAdminServerTasksPost(acceptLanguage?: string, options?: any): AxiosPromise<ServerTask> {
            return localVarFp.createTestTasksApiAdminServerTasksPost(acceptLanguage, options).then((request) => request(axios, basePath));
        },
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
        getAllApiAdminServerTasksGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<ServerTaskPagination> {
            return localVarFp.getAllApiAdminServerTasksGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AdminServerTasksApi - object-oriented interface
 * @export
 * @class AdminServerTasksApi
 * @extends {BaseAPI}
 */
export class AdminServerTasksApi extends BaseAPI {
    /**
     *
     * @summary Create Test Tasks
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminServerTasksApi
     */
    public createTestTasksApiAdminServerTasksPost(acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminServerTasksApiFp(this.configuration).createTestTasksApiAdminServerTasksPost(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

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
    public getAllApiAdminServerTasksGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminServerTasksApiFp(this.configuration).getAllApiAdminServerTasksGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * AdminUsersApi - axios parameter creator
 * @export
 */
export const AdminUsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         *
         * @summary Create One
         * @param {UserIn} userIn
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiAdminUsersPost: async (userIn: UserIn, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userIn' is not null or undefined
            assertParamExists('createOneApiAdminUsersPost', 'userIn', userIn)
            const localVarPath = `/api/admin/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(userIn, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiAdminUsersItemIdDelete: async (itemId: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('deleteOneApiAdminUsersItemIdDelete', 'itemId', itemId)
            const localVarPath = `/api/admin/users/{item_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
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
        getAllApiAdminUsersGet: async (page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['perPage'] = perPage;
            }

            if (orderBy !== undefined) {
                localVarQueryParameter['orderBy'] = orderBy;
            }

            if (orderDirection !== undefined) {
                localVarQueryParameter['orderDirection'] = orderDirection;
            }

            if (queryFilter !== undefined) {
                localVarQueryParameter['queryFilter'] = queryFilter;
            }

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Get One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiAdminUsersItemIdGet: async (itemId: string, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('getOneApiAdminUsersItemIdGet', 'itemId', itemId)
            const localVarPath = `/api/admin/users/{item_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Unlock Users
         * @param {boolean} [force]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unlockUsersApiAdminUsersUnlockPost: async (force?: boolean, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/admin/users/unlock`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (force !== undefined) {
                localVarQueryParameter['force'] = force;
            }

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {UserOut} userOut
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiAdminUsersItemIdPut: async (itemId: string, userOut: UserOut, acceptLanguage?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'itemId' is not null or undefined
            assertParamExists('updateOneApiAdminUsersItemIdPut', 'itemId', itemId)
            // verify required parameter 'userOut' is not null or undefined
            assertParamExists('updateOneApiAdminUsersItemIdPut', 'userOut', userOut)
            const localVarPath = `/api/admin/users/{item_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }



            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(userOut, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AdminUsersApi - functional programming interface
 * @export
 */
export const AdminUsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AdminUsersApiAxiosParamCreator(configuration)
    return {
        /**
         *
         * @summary Create One
         * @param {UserIn} userIn
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiAdminUsersPost(userIn: UserIn, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiAdminUsersPost(userIn, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteOneApiAdminUsersItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiAdminUsersItemIdDelete(itemId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
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
        async getAllApiAdminUsersGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserPagination>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiAdminUsersGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOneApiAdminUsersItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiAdminUsersItemIdGet(itemId, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Unlock Users
         * @param {boolean} [force]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async unlockUsersApiAdminUsersUnlockPost(force?: boolean, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UnlockResults>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unlockUsersApiAdminUsersUnlockPost(force, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {UserOut} userOut
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOneApiAdminUsersItemIdPut(itemId: string, userOut: UserOut, acceptLanguage?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserOut>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiAdminUsersItemIdPut(itemId, userOut, acceptLanguage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AdminUsersApi - factory interface
 * @export
 */
export const AdminUsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AdminUsersApiFp(configuration)
    return {
        /**
         *
         * @summary Create One
         * @param {UserIn} userIn
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiAdminUsersPost(userIn: UserIn, acceptLanguage?: string, options?: any): AxiosPromise<UserOut> {
            return localVarFp.createOneApiAdminUsersPost(userIn, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneApiAdminUsersItemIdDelete(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<UserOut> {
            return localVarFp.deleteOneApiAdminUsersItemIdDelete(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
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
        getAllApiAdminUsersGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: any): AxiosPromise<UserPagination> {
            return localVarFp.getAllApiAdminUsersGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneApiAdminUsersItemIdGet(itemId: string, acceptLanguage?: string, options?: any): AxiosPromise<UserOut> {
            return localVarFp.getOneApiAdminUsersItemIdGet(itemId, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Unlock Users
         * @param {boolean} [force]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unlockUsersApiAdminUsersUnlockPost(force?: boolean, acceptLanguage?: string, options?: any): AxiosPromise<UnlockResults> {
            return localVarFp.unlockUsersApiAdminUsersUnlockPost(force, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Update One
         * @param {string} itemId
         * @param {UserOut} userOut
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneApiAdminUsersItemIdPut(itemId: string, userOut: UserOut, acceptLanguage?: string, options?: any): AxiosPromise<UserOut> {
            return localVarFp.updateOneApiAdminUsersItemIdPut(itemId, userOut, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AdminUsersApi - object-oriented interface
 * @export
 * @class AdminUsersApi
 * @extends {BaseAPI}
 */
export class AdminUsersApi extends BaseAPI {
    /**
     *
     * @summary Create One
     * @param {UserIn} userIn
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminUsersApi
     */
    public createOneApiAdminUsersPost(userIn: UserIn, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminUsersApiFp(this.configuration).createOneApiAdminUsersPost(userIn, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Delete One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminUsersApi
     */
    public deleteOneApiAdminUsersItemIdDelete(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminUsersApiFp(this.configuration).deleteOneApiAdminUsersItemIdDelete(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

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
    public getAllApiAdminUsersGet(page?: number, perPage?: number, orderBy?: string, orderDirection?: OrderDirection, queryFilter?: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminUsersApiFp(this.configuration).getAllApiAdminUsersGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Get One
     * @param {string} itemId
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminUsersApi
     */
    public getOneApiAdminUsersItemIdGet(itemId: string, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminUsersApiFp(this.configuration).getOneApiAdminUsersItemIdGet(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *
     * @summary Unlock Users
     * @param {boolean} [force]
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminUsersApi
     */
    public unlockUsersApiAdminUsersUnlockPost(force?: boolean, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminUsersApiFp(this.configuration).unlockUsersApiAdminUsersUnlockPost(force, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }

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
    public updateOneApiAdminUsersItemIdPut(itemId: string, userOut: UserOut, acceptLanguage?: string, options?: AxiosRequestConfig) {
        return AdminUsersApiFp(this.configuration).updateOneApiAdminUsersItemIdPut(itemId, userOut, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}