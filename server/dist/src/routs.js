"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = routesBind;
function routesBind(controllersClasses) {
    const classMethods = [];
    function getMethods(obj) {
        return Object.getOwnPropertyNames(Object.getPrototypeOf(obj));
    }
    for (let i = 0; i < controllersClasses.length; i++) {
        const methods = getMethods(controllersClasses[i]);
        classMethods.push(methods);
        if (methods.includes("constructor"))
            methods.splice(methods.indexOf("constructor"), 1);
    }
    for (let i = 0; i < controllersClasses.length; i++) {
        for (let k = 0; k < classMethods[i].length; k++) {
            controllersClasses[i][classMethods[i][k]]();
        }
    }
}
