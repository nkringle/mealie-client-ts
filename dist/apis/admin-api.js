"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUsersApi = exports.AdminUsersApiFactory = exports.AdminUsersApiFp = exports.AdminUsersApiAxiosParamCreator = exports.AdminServerTasksApi = exports.AdminServerTasksApiFactory = exports.AdminServerTasksApiFp = exports.AdminServerTasksApiAxiosParamCreator = exports.AdminMaintenanceApi = exports.AdminMaintenanceApiFactory = exports.AdminMaintenanceApiFp = exports.AdminMaintenanceApiAxiosParamCreator = exports.AdminLogApi = exports.AdminLogApiFactory = exports.AdminLogApiFp = exports.AdminLogApiAxiosParamCreator = exports.AdminGroupsApi = exports.AdminGroupsApiFactory = exports.AdminGroupsApiFp = exports.AdminGroupsApiAxiosParamCreator = exports.AdminEmailApi = exports.AdminEmailApiFactory = exports.AdminEmailApiFp = exports.AdminEmailApiAxiosParamCreator = exports.AdminBackupsApi = exports.AdminBackupsApiFactory = exports.AdminBackupsApiFp = exports.AdminBackupsApiAxiosParamCreator = exports.AdminAnalyticsApi = exports.AdminAnalyticsApiFactory = exports.AdminAnalyticsApiFp = exports.AdminAnalyticsApiAxiosParamCreator = exports.AdminAboutApi = exports.AdminAboutApiFactory = exports.AdminAboutApiFp = exports.AdminAboutApiAxiosParamCreator = void 0;
const axios_1 = __importDefault(require("axios"));
const base_1 = require("../common/base");
const common_1 = require("../common/common");
/**
 * AdminAboutApi - axios parameter creator
 * @export
 */
const AdminAboutApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Check App Config
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkAppConfigApiAdminAboutCheckGet: async (acceptLanguage, options = {}) => {
            const localVarPath = `/api/admin/about/check`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        getAppInfoApiAdminAboutGet: async (acceptLanguage, options = {}) => {
            const localVarPath = `/api/admin/about`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        getAppStatisticsApiAdminAboutStatisticsGet: async (acceptLanguage, options = {}) => {
            const localVarPath = `/api/admin/about/statistics`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        validateDockerVolumeApiAdminAboutDockerValidateGet: async (acceptLanguage, options = {}) => {
            const localVarPath = `/api/admin/about/docker/validate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.AdminAboutApiAxiosParamCreator = AdminAboutApiAxiosParamCreator;
/**
 * AdminAboutApi - functional programming interface
 * @export
 */
const AdminAboutApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.AdminAboutApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Check App Config
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async checkAppConfigApiAdminAboutCheckGet(acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkAppConfigApiAdminAboutCheckGet(acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Get general application information
         * @summary Get App Info
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAppInfoApiAdminAboutGet(acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAppInfoApiAdminAboutGet(acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get App Statistics
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAppStatisticsApiAdminAboutStatisticsGet(acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAppStatisticsApiAdminAboutStatisticsGet(acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Validate Docker Volume
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async validateDockerVolumeApiAdminAboutDockerValidateGet(acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.validateDockerVolumeApiAdminAboutDockerValidateGet(acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.AdminAboutApiFp = AdminAboutApiFp;
/**
 * AdminAboutApi - factory interface
 * @export
 */
const AdminAboutApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.AdminAboutApiFp)(configuration);
    return {
        /**
         *
         * @summary Check App Config
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkAppConfigApiAdminAboutCheckGet(acceptLanguage, options) {
            return localVarFp.checkAppConfigApiAdminAboutCheckGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Get general application information
         * @summary Get App Info
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAppInfoApiAdminAboutGet(acceptLanguage, options) {
            return localVarFp.getAppInfoApiAdminAboutGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get App Statistics
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAppStatisticsApiAdminAboutStatisticsGet(acceptLanguage, options) {
            return localVarFp.getAppStatisticsApiAdminAboutStatisticsGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Validate Docker Volume
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateDockerVolumeApiAdminAboutDockerValidateGet(acceptLanguage, options) {
            return localVarFp.validateDockerVolumeApiAdminAboutDockerValidateGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.AdminAboutApiFactory = AdminAboutApiFactory;
/**
 * AdminAboutApi - object-oriented interface
 * @export
 * @class AdminAboutApi
 * @extends {BaseAPI}
 */
class AdminAboutApi extends base_1.BaseAPI {
    /**
     *
     * @summary Check App Config
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminAboutApi
     */
    checkAppConfigApiAdminAboutCheckGet(acceptLanguage, options) {
        return (0, exports.AdminAboutApiFp)(this.configuration).checkAppConfigApiAdminAboutCheckGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get general application information
     * @summary Get App Info
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminAboutApi
     */
    getAppInfoApiAdminAboutGet(acceptLanguage, options) {
        return (0, exports.AdminAboutApiFp)(this.configuration).getAppInfoApiAdminAboutGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get App Statistics
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminAboutApi
     */
    getAppStatisticsApiAdminAboutStatisticsGet(acceptLanguage, options) {
        return (0, exports.AdminAboutApiFp)(this.configuration).getAppStatisticsApiAdminAboutStatisticsGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Validate Docker Volume
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminAboutApi
     */
    validateDockerVolumeApiAdminAboutDockerValidateGet(acceptLanguage, options) {
        return (0, exports.AdminAboutApiFp)(this.configuration).validateDockerVolumeApiAdminAboutDockerValidateGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.AdminAboutApi = AdminAboutApi;
/**
 * AdminAnalyticsApi - axios parameter creator
 * @export
 */
const AdminAnalyticsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Get Analytics
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAnalyticsApiAdminAnalyticsGet: async (acceptLanguage, options = {}) => {
            const localVarPath = `/api/admin/analytics`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.AdminAnalyticsApiAxiosParamCreator = AdminAnalyticsApiAxiosParamCreator;
/**
 * AdminAnalyticsApi - functional programming interface
 * @export
 */
const AdminAnalyticsApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.AdminAnalyticsApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Get Analytics
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAnalyticsApiAdminAnalyticsGet(acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAnalyticsApiAdminAnalyticsGet(acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.AdminAnalyticsApiFp = AdminAnalyticsApiFp;
/**
 * AdminAnalyticsApi - factory interface
 * @export
 */
const AdminAnalyticsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.AdminAnalyticsApiFp)(configuration);
    return {
        /**
         *
         * @summary Get Analytics
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAnalyticsApiAdminAnalyticsGet(acceptLanguage, options) {
            return localVarFp.getAnalyticsApiAdminAnalyticsGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.AdminAnalyticsApiFactory = AdminAnalyticsApiFactory;
/**
 * AdminAnalyticsApi - object-oriented interface
 * @export
 * @class AdminAnalyticsApi
 * @extends {BaseAPI}
 */
class AdminAnalyticsApi extends base_1.BaseAPI {
    /**
     *
     * @summary Get Analytics
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminAnalyticsApi
     */
    getAnalyticsApiAdminAnalyticsGet(acceptLanguage, options) {
        return (0, exports.AdminAnalyticsApiFp)(this.configuration).getAnalyticsApiAdminAnalyticsGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.AdminAnalyticsApi = AdminAnalyticsApi;
/**
 * AdminBackupsApi - axios parameter creator
 * @export
 */
const AdminBackupsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Create One
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiAdminBackupsPost: async (acceptLanguage, options = {}) => {
            const localVarPath = `/api/admin/backups`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        deleteOneApiAdminBackupsFileNameDelete: async (fileName, acceptLanguage, options = {}) => {
            // verify required parameter 'fileName' is not null or undefined
            (0, common_1.assertParamExists)('deleteOneApiAdminBackupsFileNameDelete', 'fileName', fileName);
            const localVarPath = `/api/admin/backups/{file_name}`
                .replace(`{${"file_name"}}`, encodeURIComponent(String(fileName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'DELETE' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        getAllApiAdminBackupsGet: async (acceptLanguage, options = {}) => {
            const localVarPath = `/api/admin/backups`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        getOneApiAdminBackupsFileNameGet: async (fileName, acceptLanguage, options = {}) => {
            // verify required parameter 'fileName' is not null or undefined
            (0, common_1.assertParamExists)('getOneApiAdminBackupsFileNameGet', 'fileName', fileName);
            const localVarPath = `/api/admin/backups/{file_name}`
                .replace(`{${"file_name"}}`, encodeURIComponent(String(fileName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        importOneApiAdminBackupsFileNameRestorePost: async (fileName, acceptLanguage, options = {}) => {
            // verify required parameter 'fileName' is not null or undefined
            (0, common_1.assertParamExists)('importOneApiAdminBackupsFileNameRestorePost', 'fileName', fileName);
            const localVarPath = `/api/admin/backups/{file_name}/restore`
                .replace(`{${"file_name"}}`, encodeURIComponent(String(fileName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        uploadOneApiAdminBackupsUploadPost: async (archive, acceptLanguage, options = {}) => {
            // verify required parameter 'archive' is not null or undefined
            (0, common_1.assertParamExists)('uploadOneApiAdminBackupsUploadPost', 'archive', archive);
            const localVarPath = `/api/admin/backups/upload`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            if (archive !== undefined) {
                localVarFormParams.append('archive', archive);
            }
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = localVarFormParams;
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.AdminBackupsApiAxiosParamCreator = AdminBackupsApiAxiosParamCreator;
/**
 * AdminBackupsApi - functional programming interface
 * @export
 */
const AdminBackupsApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.AdminBackupsApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Create One
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiAdminBackupsPost(acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiAdminBackupsPost(acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Delete One
         * @param {string} fileName
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteOneApiAdminBackupsFileNameDelete(fileName, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiAdminBackupsFileNameDelete(fileName, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get All
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllApiAdminBackupsGet(acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiAdminBackupsGet(acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Returns a token to download a file
         * @summary Get One
         * @param {string} fileName
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOneApiAdminBackupsFileNameGet(fileName, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiAdminBackupsFileNameGet(fileName, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Import One
         * @param {string} fileName
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async importOneApiAdminBackupsFileNameRestorePost(fileName, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.importOneApiAdminBackupsFileNameRestorePost(fileName, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Upload a .zip File to later be imported into Mealie
         * @summary Upload One
         * @param {File} archive
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadOneApiAdminBackupsUploadPost(archive, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadOneApiAdminBackupsUploadPost(archive, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.AdminBackupsApiFp = AdminBackupsApiFp;
/**
 * AdminBackupsApi - factory interface
 * @export
 */
const AdminBackupsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.AdminBackupsApiFp)(configuration);
    return {
        /**
         *
         * @summary Create One
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiAdminBackupsPost(acceptLanguage, options) {
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
        deleteOneApiAdminBackupsFileNameDelete(fileName, acceptLanguage, options) {
            return localVarFp.deleteOneApiAdminBackupsFileNameDelete(fileName, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get All
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllApiAdminBackupsGet(acceptLanguage, options) {
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
        getOneApiAdminBackupsFileNameGet(fileName, acceptLanguage, options) {
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
        importOneApiAdminBackupsFileNameRestorePost(fileName, acceptLanguage, options) {
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
        uploadOneApiAdminBackupsUploadPost(archive, acceptLanguage, options) {
            return localVarFp.uploadOneApiAdminBackupsUploadPost(archive, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.AdminBackupsApiFactory = AdminBackupsApiFactory;
/**
 * AdminBackupsApi - object-oriented interface
 * @export
 * @class AdminBackupsApi
 * @extends {BaseAPI}
 */
class AdminBackupsApi extends base_1.BaseAPI {
    /**
     *
     * @summary Create One
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminBackupsApi
     */
    createOneApiAdminBackupsPost(acceptLanguage, options) {
        return (0, exports.AdminBackupsApiFp)(this.configuration).createOneApiAdminBackupsPost(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    deleteOneApiAdminBackupsFileNameDelete(fileName, acceptLanguage, options) {
        return (0, exports.AdminBackupsApiFp)(this.configuration).deleteOneApiAdminBackupsFileNameDelete(fileName, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get All
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminBackupsApi
     */
    getAllApiAdminBackupsGet(acceptLanguage, options) {
        return (0, exports.AdminBackupsApiFp)(this.configuration).getAllApiAdminBackupsGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    getOneApiAdminBackupsFileNameGet(fileName, acceptLanguage, options) {
        return (0, exports.AdminBackupsApiFp)(this.configuration).getOneApiAdminBackupsFileNameGet(fileName, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    importOneApiAdminBackupsFileNameRestorePost(fileName, acceptLanguage, options) {
        return (0, exports.AdminBackupsApiFp)(this.configuration).importOneApiAdminBackupsFileNameRestorePost(fileName, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    uploadOneApiAdminBackupsUploadPost(archive, acceptLanguage, options) {
        return (0, exports.AdminBackupsApiFp)(this.configuration).uploadOneApiAdminBackupsUploadPost(archive, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.AdminBackupsApi = AdminBackupsApi;
/**
 * AdminEmailApi - axios parameter creator
 * @export
 */
const AdminEmailApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Get general application information
         * @summary Check Email Config
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkEmailConfigApiAdminEmailGet: async (acceptLanguage, options = {}) => {
            const localVarPath = `/api/admin/email`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        sendTestEmailApiAdminEmailPost: async (emailTest, acceptLanguage, options = {}) => {
            // verify required parameter 'emailTest' is not null or undefined
            (0, common_1.assertParamExists)('sendTestEmailApiAdminEmailPost', 'emailTest', emailTest);
            const localVarPath = `/api/admin/email`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(emailTest, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.AdminEmailApiAxiosParamCreator = AdminEmailApiAxiosParamCreator;
/**
 * AdminEmailApi - functional programming interface
 * @export
 */
const AdminEmailApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.AdminEmailApiAxiosParamCreator)(configuration);
    return {
        /**
         * Get general application information
         * @summary Check Email Config
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async checkEmailConfigApiAdminEmailGet(acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkEmailConfigApiAdminEmailGet(acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Send Test Email
         * @param {EmailTest} emailTest
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendTestEmailApiAdminEmailPost(emailTest, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendTestEmailApiAdminEmailPost(emailTest, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.AdminEmailApiFp = AdminEmailApiFp;
/**
 * AdminEmailApi - factory interface
 * @export
 */
const AdminEmailApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.AdminEmailApiFp)(configuration);
    return {
        /**
         * Get general application information
         * @summary Check Email Config
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkEmailConfigApiAdminEmailGet(acceptLanguage, options) {
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
        sendTestEmailApiAdminEmailPost(emailTest, acceptLanguage, options) {
            return localVarFp.sendTestEmailApiAdminEmailPost(emailTest, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.AdminEmailApiFactory = AdminEmailApiFactory;
/**
 * AdminEmailApi - object-oriented interface
 * @export
 * @class AdminEmailApi
 * @extends {BaseAPI}
 */
class AdminEmailApi extends base_1.BaseAPI {
    /**
     * Get general application information
     * @summary Check Email Config
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminEmailApi
     */
    checkEmailConfigApiAdminEmailGet(acceptLanguage, options) {
        return (0, exports.AdminEmailApiFp)(this.configuration).checkEmailConfigApiAdminEmailGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    sendTestEmailApiAdminEmailPost(emailTest, acceptLanguage, options) {
        return (0, exports.AdminEmailApiFp)(this.configuration).sendTestEmailApiAdminEmailPost(emailTest, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.AdminEmailApi = AdminEmailApi;
/**
 * AdminGroupsApi - axios parameter creator
 * @export
 */
const AdminGroupsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Create One
         * @param {GroupBase} groupBase
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiAdminGroupsPost: async (groupBase, acceptLanguage, options = {}) => {
            // verify required parameter 'groupBase' is not null or undefined
            (0, common_1.assertParamExists)('createOneApiAdminGroupsPost', 'groupBase', groupBase);
            const localVarPath = `/api/admin/groups`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(groupBase, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        deleteOneApiAdminGroupsItemIdDelete: async (itemId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('deleteOneApiAdminGroupsItemIdDelete', 'itemId', itemId);
            const localVarPath = `/api/admin/groups/{item_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'DELETE' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        getAllApiAdminGroupsGet: async (page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options = {}) => {
            const localVarPath = `/api/admin/groups`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
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
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        getOneApiAdminGroupsItemIdGet: async (itemId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('getOneApiAdminGroupsItemIdGet', 'itemId', itemId);
            const localVarPath = `/api/admin/groups/{item_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        updateOneApiAdminGroupsItemIdPut: async (itemId, groupAdminUpdate, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiAdminGroupsItemIdPut', 'itemId', itemId);
            // verify required parameter 'groupAdminUpdate' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiAdminGroupsItemIdPut', 'groupAdminUpdate', groupAdminUpdate);
            const localVarPath = `/api/admin/groups/{item_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'PUT' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(groupAdminUpdate, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.AdminGroupsApiAxiosParamCreator = AdminGroupsApiAxiosParamCreator;
/**
 * AdminGroupsApi - functional programming interface
 * @export
 */
const AdminGroupsApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.AdminGroupsApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Create One
         * @param {GroupBase} groupBase
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiAdminGroupsPost(groupBase, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiAdminGroupsPost(groupBase, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteOneApiAdminGroupsItemIdDelete(itemId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiAdminGroupsItemIdDelete(itemId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
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
        async getAllApiAdminGroupsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiAdminGroupsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOneApiAdminGroupsItemIdGet(itemId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiAdminGroupsItemIdGet(itemId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
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
        async updateOneApiAdminGroupsItemIdPut(itemId, groupAdminUpdate, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiAdminGroupsItemIdPut(itemId, groupAdminUpdate, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.AdminGroupsApiFp = AdminGroupsApiFp;
/**
 * AdminGroupsApi - factory interface
 * @export
 */
const AdminGroupsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.AdminGroupsApiFp)(configuration);
    return {
        /**
         *
         * @summary Create One
         * @param {GroupBase} groupBase
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiAdminGroupsPost(groupBase, acceptLanguage, options) {
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
        deleteOneApiAdminGroupsItemIdDelete(itemId, acceptLanguage, options) {
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
        getAllApiAdminGroupsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
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
        getOneApiAdminGroupsItemIdGet(itemId, acceptLanguage, options) {
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
        updateOneApiAdminGroupsItemIdPut(itemId, groupAdminUpdate, acceptLanguage, options) {
            return localVarFp.updateOneApiAdminGroupsItemIdPut(itemId, groupAdminUpdate, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.AdminGroupsApiFactory = AdminGroupsApiFactory;
/**
 * AdminGroupsApi - object-oriented interface
 * @export
 * @class AdminGroupsApi
 * @extends {BaseAPI}
 */
class AdminGroupsApi extends base_1.BaseAPI {
    /**
     *
     * @summary Create One
     * @param {GroupBase} groupBase
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminGroupsApi
     */
    createOneApiAdminGroupsPost(groupBase, acceptLanguage, options) {
        return (0, exports.AdminGroupsApiFp)(this.configuration).createOneApiAdminGroupsPost(groupBase, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    deleteOneApiAdminGroupsItemIdDelete(itemId, acceptLanguage, options) {
        return (0, exports.AdminGroupsApiFp)(this.configuration).deleteOneApiAdminGroupsItemIdDelete(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    getAllApiAdminGroupsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
        return (0, exports.AdminGroupsApiFp)(this.configuration).getAllApiAdminGroupsGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    getOneApiAdminGroupsItemIdGet(itemId, acceptLanguage, options) {
        return (0, exports.AdminGroupsApiFp)(this.configuration).getOneApiAdminGroupsItemIdGet(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    updateOneApiAdminGroupsItemIdPut(itemId, groupAdminUpdate, acceptLanguage, options) {
        return (0, exports.AdminGroupsApiFp)(this.configuration).updateOneApiAdminGroupsItemIdPut(itemId, groupAdminUpdate, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.AdminGroupsApi = AdminGroupsApi;
/**
 * AdminLogApi - axios parameter creator
 * @export
 */
const AdminLogApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Doc Str
         * @summary Get Log
         * @param {number} num
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLogApiAdminLogsNumGet: async (num, options = {}) => {
            // verify required parameter 'num' is not null or undefined
            (0, common_1.assertParamExists)('getLogApiAdminLogsNumGet', 'num', num);
            const localVarPath = `/api/admin/logs/{num}`
                .replace(`{${"num"}}`, encodeURIComponent(String(num)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a token to download a file
         * @summary Get Log File
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLogFileApiAdminLogsGet: async (options = {}) => {
            const localVarPath = `/api/admin/logs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.AdminLogApiAxiosParamCreator = AdminLogApiAxiosParamCreator;
/**
 * AdminLogApi - functional programming interface
 * @export
 */
const AdminLogApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.AdminLogApiAxiosParamCreator)(configuration);
    return {
        /**
         * Doc Str
         * @summary Get Log
         * @param {number} num
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLogApiAdminLogsNumGet(num, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLogApiAdminLogsNumGet(num, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Returns a token to download a file
         * @summary Get Log File
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLogFileApiAdminLogsGet(options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLogFileApiAdminLogsGet(options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.AdminLogApiFp = AdminLogApiFp;
/**
 * AdminLogApi - factory interface
 * @export
 */
const AdminLogApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.AdminLogApiFp)(configuration);
    return {
        /**
         * Doc Str
         * @summary Get Log
         * @param {number} num
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLogApiAdminLogsNumGet(num, options) {
            return localVarFp.getLogApiAdminLogsNumGet(num, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a token to download a file
         * @summary Get Log File
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLogFileApiAdminLogsGet(options) {
            return localVarFp.getLogFileApiAdminLogsGet(options).then((request) => request(axios, basePath));
        },
    };
};
exports.AdminLogApiFactory = AdminLogApiFactory;
/**
 * AdminLogApi - object-oriented interface
 * @export
 * @class AdminLogApi
 * @extends {BaseAPI}
 */
class AdminLogApi extends base_1.BaseAPI {
    /**
     * Doc Str
     * @summary Get Log
     * @param {number} num
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminLogApi
     */
    getLogApiAdminLogsNumGet(num, options) {
        return (0, exports.AdminLogApiFp)(this.configuration).getLogApiAdminLogsNumGet(num, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns a token to download a file
     * @summary Get Log File
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminLogApi
     */
    getLogFileApiAdminLogsGet(options) {
        return (0, exports.AdminLogApiFp)(this.configuration).getLogFileApiAdminLogsGet(options).then((request) => request(this.axios, this.basePath));
    }
}
exports.AdminLogApi = AdminLogApi;
/**
 * AdminMaintenanceApi - axios parameter creator
 * @export
 */
const AdminMaintenanceApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Purges all the images from the filesystem that aren\'t .webp
         * @summary Clean Images
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cleanImagesApiAdminMaintenanceCleanImagesPost: async (acceptLanguage, options = {}) => {
            const localVarPath = `/api/admin/maintenance/clean/images`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        cleanLogsApiAdminMaintenanceCleanLogsPost: async (acceptLanguage, options = {}) => {
            const localVarPath = `/api/admin/maintenance/clean/logs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        cleanRecipeFoldersApiAdminMaintenanceCleanRecipeFoldersPost: async (acceptLanguage, options = {}) => {
            const localVarPath = `/api/admin/maintenance/clean/recipe-folders`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        cleanTempApiAdminMaintenanceCleanTempPost: async (acceptLanguage, options = {}) => {
            const localVarPath = `/api/admin/maintenance/clean/temp`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        getLogsApiAdminMaintenanceLogsGet: async (lines, acceptLanguage, options = {}) => {
            const localVarPath = `/api/admin/maintenance/logs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (lines !== undefined) {
                localVarQueryParameter['lines'] = lines;
            }
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        getMaintenanceSummaryApiAdminMaintenanceGet: async (acceptLanguage, options = {}) => {
            const localVarPath = `/api/admin/maintenance`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        getStorageDetailsApiAdminMaintenanceStorageGet: async (acceptLanguage, options = {}) => {
            const localVarPath = `/api/admin/maintenance/storage`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.AdminMaintenanceApiAxiosParamCreator = AdminMaintenanceApiAxiosParamCreator;
/**
 * AdminMaintenanceApi - functional programming interface
 * @export
 */
const AdminMaintenanceApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.AdminMaintenanceApiAxiosParamCreator)(configuration);
    return {
        /**
         * Purges all the images from the filesystem that aren\'t .webp
         * @summary Clean Images
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cleanImagesApiAdminMaintenanceCleanImagesPost(acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cleanImagesApiAdminMaintenanceCleanImagesPost(acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Purges the logs
         * @summary Clean Logs
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cleanLogsApiAdminMaintenanceCleanLogsPost(acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cleanLogsApiAdminMaintenanceCleanLogsPost(acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Deletes all the recipe folders that don\'t have names that are valid UUIDs
         * @summary Clean Recipe Folders
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cleanRecipeFoldersApiAdminMaintenanceCleanRecipeFoldersPost(acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cleanRecipeFoldersApiAdminMaintenanceCleanRecipeFoldersPost(acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Clean Temp
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cleanTempApiAdminMaintenanceCleanTempPost(acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cleanTempApiAdminMaintenanceCleanTempPost(acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get Logs
         * @param {number} [lines]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLogsApiAdminMaintenanceLogsGet(lines, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLogsApiAdminMaintenanceLogsGet(lines, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         * Get the maintenance summary
         * @summary Get Maintenance Summary
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMaintenanceSummaryApiAdminMaintenanceGet(acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMaintenanceSummaryApiAdminMaintenanceGet(acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get Storage Details
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStorageDetailsApiAdminMaintenanceStorageGet(acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStorageDetailsApiAdminMaintenanceStorageGet(acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.AdminMaintenanceApiFp = AdminMaintenanceApiFp;
/**
 * AdminMaintenanceApi - factory interface
 * @export
 */
const AdminMaintenanceApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.AdminMaintenanceApiFp)(configuration);
    return {
        /**
         * Purges all the images from the filesystem that aren\'t .webp
         * @summary Clean Images
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cleanImagesApiAdminMaintenanceCleanImagesPost(acceptLanguage, options) {
            return localVarFp.cleanImagesApiAdminMaintenanceCleanImagesPost(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Purges the logs
         * @summary Clean Logs
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cleanLogsApiAdminMaintenanceCleanLogsPost(acceptLanguage, options) {
            return localVarFp.cleanLogsApiAdminMaintenanceCleanLogsPost(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes all the recipe folders that don\'t have names that are valid UUIDs
         * @summary Clean Recipe Folders
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cleanRecipeFoldersApiAdminMaintenanceCleanRecipeFoldersPost(acceptLanguage, options) {
            return localVarFp.cleanRecipeFoldersApiAdminMaintenanceCleanRecipeFoldersPost(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Clean Temp
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cleanTempApiAdminMaintenanceCleanTempPost(acceptLanguage, options) {
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
        getLogsApiAdminMaintenanceLogsGet(lines, acceptLanguage, options) {
            return localVarFp.getLogsApiAdminMaintenanceLogsGet(lines, acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         * Get the maintenance summary
         * @summary Get Maintenance Summary
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMaintenanceSummaryApiAdminMaintenanceGet(acceptLanguage, options) {
            return localVarFp.getMaintenanceSummaryApiAdminMaintenanceGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get Storage Details
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStorageDetailsApiAdminMaintenanceStorageGet(acceptLanguage, options) {
            return localVarFp.getStorageDetailsApiAdminMaintenanceStorageGet(acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.AdminMaintenanceApiFactory = AdminMaintenanceApiFactory;
/**
 * AdminMaintenanceApi - object-oriented interface
 * @export
 * @class AdminMaintenanceApi
 * @extends {BaseAPI}
 */
class AdminMaintenanceApi extends base_1.BaseAPI {
    /**
     * Purges all the images from the filesystem that aren\'t .webp
     * @summary Clean Images
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminMaintenanceApi
     */
    cleanImagesApiAdminMaintenanceCleanImagesPost(acceptLanguage, options) {
        return (0, exports.AdminMaintenanceApiFp)(this.configuration).cleanImagesApiAdminMaintenanceCleanImagesPost(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Purges the logs
     * @summary Clean Logs
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminMaintenanceApi
     */
    cleanLogsApiAdminMaintenanceCleanLogsPost(acceptLanguage, options) {
        return (0, exports.AdminMaintenanceApiFp)(this.configuration).cleanLogsApiAdminMaintenanceCleanLogsPost(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Deletes all the recipe folders that don\'t have names that are valid UUIDs
     * @summary Clean Recipe Folders
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminMaintenanceApi
     */
    cleanRecipeFoldersApiAdminMaintenanceCleanRecipeFoldersPost(acceptLanguage, options) {
        return (0, exports.AdminMaintenanceApiFp)(this.configuration).cleanRecipeFoldersApiAdminMaintenanceCleanRecipeFoldersPost(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Clean Temp
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminMaintenanceApi
     */
    cleanTempApiAdminMaintenanceCleanTempPost(acceptLanguage, options) {
        return (0, exports.AdminMaintenanceApiFp)(this.configuration).cleanTempApiAdminMaintenanceCleanTempPost(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    getLogsApiAdminMaintenanceLogsGet(lines, acceptLanguage, options) {
        return (0, exports.AdminMaintenanceApiFp)(this.configuration).getLogsApiAdminMaintenanceLogsGet(lines, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get the maintenance summary
     * @summary Get Maintenance Summary
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminMaintenanceApi
     */
    getMaintenanceSummaryApiAdminMaintenanceGet(acceptLanguage, options) {
        return (0, exports.AdminMaintenanceApiFp)(this.configuration).getMaintenanceSummaryApiAdminMaintenanceGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get Storage Details
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminMaintenanceApi
     */
    getStorageDetailsApiAdminMaintenanceStorageGet(acceptLanguage, options) {
        return (0, exports.AdminMaintenanceApiFp)(this.configuration).getStorageDetailsApiAdminMaintenanceStorageGet(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.AdminMaintenanceApi = AdminMaintenanceApi;
/**
 * AdminServerTasksApi - axios parameter creator
 * @export
 */
const AdminServerTasksApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Create Test Tasks
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTestTasksApiAdminServerTasksPost: async (acceptLanguage, options = {}) => {
            const localVarPath = `/api/admin/server-tasks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        getAllApiAdminServerTasksGet: async (page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options = {}) => {
            const localVarPath = `/api/admin/server-tasks`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
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
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.AdminServerTasksApiAxiosParamCreator = AdminServerTasksApiAxiosParamCreator;
/**
 * AdminServerTasksApi - functional programming interface
 * @export
 */
const AdminServerTasksApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.AdminServerTasksApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Create Test Tasks
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createTestTasksApiAdminServerTasksPost(acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createTestTasksApiAdminServerTasksPost(acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
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
        async getAllApiAdminServerTasksGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiAdminServerTasksGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.AdminServerTasksApiFp = AdminServerTasksApiFp;
/**
 * AdminServerTasksApi - factory interface
 * @export
 */
const AdminServerTasksApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.AdminServerTasksApiFp)(configuration);
    return {
        /**
         *
         * @summary Create Test Tasks
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTestTasksApiAdminServerTasksPost(acceptLanguage, options) {
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
        getAllApiAdminServerTasksGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            return localVarFp.getAllApiAdminServerTasksGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.AdminServerTasksApiFactory = AdminServerTasksApiFactory;
/**
 * AdminServerTasksApi - object-oriented interface
 * @export
 * @class AdminServerTasksApi
 * @extends {BaseAPI}
 */
class AdminServerTasksApi extends base_1.BaseAPI {
    /**
     *
     * @summary Create Test Tasks
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminServerTasksApi
     */
    createTestTasksApiAdminServerTasksPost(acceptLanguage, options) {
        return (0, exports.AdminServerTasksApiFp)(this.configuration).createTestTasksApiAdminServerTasksPost(acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    getAllApiAdminServerTasksGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
        return (0, exports.AdminServerTasksApiFp)(this.configuration).getAllApiAdminServerTasksGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.AdminServerTasksApi = AdminServerTasksApi;
/**
 * AdminUsersApi - axios parameter creator
 * @export
 */
const AdminUsersApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Create One
         * @param {UserIn} userIn
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiAdminUsersPost: async (userIn, acceptLanguage, options = {}) => {
            // verify required parameter 'userIn' is not null or undefined
            (0, common_1.assertParamExists)('createOneApiAdminUsersPost', 'userIn', userIn);
            const localVarPath = `/api/admin/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(userIn, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        deleteOneApiAdminUsersItemIdDelete: async (itemId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('deleteOneApiAdminUsersItemIdDelete', 'itemId', itemId);
            const localVarPath = `/api/admin/users/{item_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'DELETE' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        getAllApiAdminUsersGet: async (page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options = {}) => {
            const localVarPath = `/api/admin/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
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
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        getOneApiAdminUsersItemIdGet: async (itemId, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('getOneApiAdminUsersItemIdGet', 'itemId', itemId);
            const localVarPath = `/api/admin/users/{item_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        unlockUsersApiAdminUsersUnlockPost: async (force, acceptLanguage, options = {}) => {
            const localVarPath = `/api/admin/users/unlock`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (force !== undefined) {
                localVarQueryParameter['force'] = force;
            }
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
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
        updateOneApiAdminUsersItemIdPut: async (itemId, userOut, acceptLanguage, options = {}) => {
            // verify required parameter 'itemId' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiAdminUsersItemIdPut', 'itemId', itemId);
            // verify required parameter 'userOut' is not null or undefined
            (0, common_1.assertParamExists)('updateOneApiAdminUsersItemIdPut', 'userOut', userOut);
            const localVarPath = `/api/admin/users/{item_id}`
                .replace(`{${"item_id"}}`, encodeURIComponent(String(itemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'PUT' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication OAuth2PasswordBearer required
            // oauth required
            await (0, common_1.setOAuthToObject)(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration);
            if (acceptLanguage != null) {
                localVarHeaderParameter['accept-language'] = String(acceptLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(userOut, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.AdminUsersApiAxiosParamCreator = AdminUsersApiAxiosParamCreator;
/**
 * AdminUsersApi - functional programming interface
 * @export
 */
const AdminUsersApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.AdminUsersApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Create One
         * @param {UserIn} userIn
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneApiAdminUsersPost(userIn, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneApiAdminUsersPost(userIn, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Delete One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteOneApiAdminUsersItemIdDelete(itemId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneApiAdminUsersItemIdDelete(itemId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
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
        async getAllApiAdminUsersGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllApiAdminUsersGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Get One
         * @param {string} itemId
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOneApiAdminUsersItemIdGet(itemId, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneApiAdminUsersItemIdGet(itemId, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Unlock Users
         * @param {boolean} [force]
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async unlockUsersApiAdminUsersUnlockPost(force, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unlockUsersApiAdminUsersUnlockPost(force, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
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
        async updateOneApiAdminUsersItemIdPut(itemId, userOut, acceptLanguage, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneApiAdminUsersItemIdPut(itemId, userOut, acceptLanguage, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.AdminUsersApiFp = AdminUsersApiFp;
/**
 * AdminUsersApi - factory interface
 * @export
 */
const AdminUsersApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.AdminUsersApiFp)(configuration);
    return {
        /**
         *
         * @summary Create One
         * @param {UserIn} userIn
         * @param {string} [acceptLanguage]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneApiAdminUsersPost(userIn, acceptLanguage, options) {
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
        deleteOneApiAdminUsersItemIdDelete(itemId, acceptLanguage, options) {
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
        getAllApiAdminUsersGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
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
        getOneApiAdminUsersItemIdGet(itemId, acceptLanguage, options) {
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
        unlockUsersApiAdminUsersUnlockPost(force, acceptLanguage, options) {
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
        updateOneApiAdminUsersItemIdPut(itemId, userOut, acceptLanguage, options) {
            return localVarFp.updateOneApiAdminUsersItemIdPut(itemId, userOut, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};
exports.AdminUsersApiFactory = AdminUsersApiFactory;
/**
 * AdminUsersApi - object-oriented interface
 * @export
 * @class AdminUsersApi
 * @extends {BaseAPI}
 */
class AdminUsersApi extends base_1.BaseAPI {
    /**
     *
     * @summary Create One
     * @param {UserIn} userIn
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminUsersApi
     */
    createOneApiAdminUsersPost(userIn, acceptLanguage, options) {
        return (0, exports.AdminUsersApiFp)(this.configuration).createOneApiAdminUsersPost(userIn, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    deleteOneApiAdminUsersItemIdDelete(itemId, acceptLanguage, options) {
        return (0, exports.AdminUsersApiFp)(this.configuration).deleteOneApiAdminUsersItemIdDelete(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    getAllApiAdminUsersGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options) {
        return (0, exports.AdminUsersApiFp)(this.configuration).getAllApiAdminUsersGet(page, perPage, orderBy, orderDirection, queryFilter, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    getOneApiAdminUsersItemIdGet(itemId, acceptLanguage, options) {
        return (0, exports.AdminUsersApiFp)(this.configuration).getOneApiAdminUsersItemIdGet(itemId, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    unlockUsersApiAdminUsersUnlockPost(force, acceptLanguage, options) {
        return (0, exports.AdminUsersApiFp)(this.configuration).unlockUsersApiAdminUsersUnlockPost(force, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
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
    updateOneApiAdminUsersItemIdPut(itemId, userOut, acceptLanguage, options) {
        return (0, exports.AdminUsersApiFp)(this.configuration).updateOneApiAdminUsersItemIdPut(itemId, userOut, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.AdminUsersApi = AdminUsersApi;
//# sourceMappingURL=admin-api.js.map