"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var Collection = /** @class */ (function () {
    function Collection(name, base) {
        this.name = name;
        this.base = base;
        var list = Collection.getJSONFromPath(base + "/" + name);
        this.all = list.reduce(function (all, item) {
            var baseItem = Collection.getJSONFromPath(base + "/" + item);
            Collection.IDExists(baseItem);
            if (baseItem.extensions) {
                return baseItem.extensions.map(function (extension) {
                    var extendedItem = Collection.getJSONFromPath(base + "/" + item + "." + extension);
                    Collection.IDExists(extendedItem);
                    return Collection.deepAssign(extendedItem, baseItem);
                }).concat(all);
            }
            return [
                baseItem
            ].concat(all);
        }, []);
    }
    Collection.getJSONFromPath = function (relpath) {
        return JSON.parse(String(fs.readFileSync(path.join(__dirname, relpath + ".json"))));
    };
    Collection.IDExists = function (item) {
        if (!item.id) {
            throw new Error('All collection items must have ID');
        }
    };
    Collection.deepAssign = function (target, from) {
        var clone = Object.assign({}, from);
        for (var item in target) {
            if (target.hasOwnProperty(item)) {
                if (target[item] instanceof Array) {
                    clone[item] = clone[item].concat(target[item]);
                }
                else if (target[item] instanceof Object) {
                    clone[item] = __assign({}, target[item], clone[item]);
                }
                else {
                    clone[item] = target[item];
                }
            }
        }
        return clone;
    };
    Collection.prototype.getList = function () {
        return this.all.map(function (item) {
            return item.id;
        });
    };
    return Collection;
}());
exports.Collection = Collection;
