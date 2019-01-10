export var normalizeErrors = function (errors) {
    // map key: value
    var errorMap = {};
    errors.forEach(function (err) {
        errorMap[err.path] = err.message;
    });
    return errorMap;
};
//# sourceMappingURL=normalizeErrors.js.map