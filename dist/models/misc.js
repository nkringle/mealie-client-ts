"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportSummaryStatus = exports.ReportCategory = exports.RegisteredParser = exports.ImageType = void 0;
/**
 * An enumeration.
 * @export
 * @enum {string}
 */
exports.ImageType = {
    OriginalWebp: 'original.webp',
    MinOriginalWebp: 'min-original.webp',
    TinyOriginalWebp: 'tiny-original.webp'
};
/**
 * An enumeration.
 * @export
 * @enum {string}
 */
exports.RegisteredParser = {
    Nlp: 'nlp',
    Brute: 'brute'
};
/**
 * An enumeration.
 * @export
 * @enum {string}
 */
exports.ReportCategory = {
    Backup: 'backup',
    Restore: 'restore',
    Migration: 'migration',
    BulkImport: 'bulk_import'
};
/**
 * An enumeration.
 * @export
 * @enum {string}
 */
exports.ReportSummaryStatus = {
    InProgress: 'in-progress',
    Success: 'success',
    Failure: 'failure',
    Partial: 'partial'
};
//# sourceMappingURL=misc.js.map