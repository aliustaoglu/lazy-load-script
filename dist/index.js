"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lazyLoad = function (src) {
    var scripts = Array.from(document.getElementsByTagName("script")).map(function (s) { return s.src; });
    if (scripts.includes(src)) {
        return new Promise(function (resolve) { return resolve(); });
    }
    return new Promise(function (resolve, reject) {
        var _a;
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        var body = document.getElementsByTagName("body")[0];
        (_a = body === null || body === void 0 ? void 0 : body.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(script, body);
        script.addEventListener("load", function (e) {
            resolve(e);
        });
    });
};
exports.default = lazyLoad;
//# sourceMappingURL=index.js.map