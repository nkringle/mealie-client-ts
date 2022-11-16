"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerTaskStatus = exports.SupportedMigrations = exports.ServerTaskNames = exports.ExportTypes = void 0;
/**
 * An enumeration.
 * @export
 * @enum {string}
 */
exports.ExportTypes = {
    Json: 'json'
};
/**
 * An enumeration.
 * @export
 * @enum {string}
 */
exports.ServerTaskNames = {
    BackgroundTask: 'Background Task',
    DatabaseBackup: 'Database Backup',
    BulkRecipeImport: 'Bulk Recipe Import'
};
/**
 * An enumeration.
 * @export
 * @enum {string}
 */
exports.SupportedMigrations = {
    NextCloud: 'nextcloud',
    Chowdown: 'chowdown',
    Paprika: 'paprika',
    MealieAlpha: 'mealie_alpha'
};
/**
 * An enumeration.
 * @export
 * @enum {string}
 */
exports.ServerTaskStatus = {
    Running: 'running',
    Finished: 'finished',
    Failed: 'failed'
};
//# sourceMappingURL=app-backups-admin.js.map