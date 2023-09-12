(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function ProxyHelper(object) {
        'use strict';
        const _private = new Set(object._private ? ['_private', ...object._private] : ['_private']);
        const _protected = new Set(object._protected ? [..._private, ...object._protected] : [..._private]);
        const _mutable = new Set(object._mutable || []);
        return new Proxy(object, {
            get(target, prop) {
                if (prop in target && !_private.has(String(prop))) {
                    return target[prop];
                }
                else {
                    console.error('Prop is private, not set or object is protected', prop);
                }
            },
            set(target, prop, value) {
                if (prop in target) {
                    if (_mutable.has(String(prop))) {
                        return (target[prop] = value);
                    }
                    let type = typeof target[prop];
                    if (type === 'function') {
                        _protected.add(String(prop));
                    }
                    else if (!_protected.has(String(prop))) {
                        target[prop] = value;
                    }
                    else {
                        console.error('The prop is a function and cannot be modified', prop, value);
                    }
                }
                else {
                    console.error('Protected Object, cannot set props', prop, value);
                }
                return true;
            },
        });
    }
    exports.default = ProxyHelper;
    ;
});
