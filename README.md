# JsObjectProxyHelper

Convert object to proxy to protect the object's properties and the object itself.  
Allows to declare \_private, \_protected and \_mutable all arrays with prop names.

<br/>
# Note:  
**For better maintenance, this library has been placed along with JsUtilities (https://github.com/knighttower/JsUtility) to create an easier entry point for many resources that will collaborate together**
--> only the docs will remain here for now.

## Installation

```javascript
npm i @knighttower/js-utility-functions
```

```javascript
yarn add @knighttower/js-utility-functions
```

```javascript
import ProxyHelper from '@knighttower/js-utility-functions';
```

## In the browser

It loads as a 'window' object --> window.ProxyHelper

```html
<script src=" https://cdn.jsdelivr.net/npm/@knighttower/js-utility-functions@latest/dist/browser/ProxyHelper.min.js"></script>

// ---> Also available as ESM, UMD, CJS, JS // ESM
<script src="https://esm.run/@knighttower/js-utility-functions@latest/index.mjs"></script>
// UMD
<script src="https://cdn.jsdelivr.net/npm/@knighttower/js-utility-functions@latest/dist/umd/ProxyHelper.min.js"></script>
// CJS
<script src="https://cdn.jsdelivr.net/npm/@knighttower/js-utility-functions@latest/dist/cjs/ProxyHelper.min.js"></script>
```

<br/>

---

---

## Usage

### Basic Usage

Here is how you can use the `ProxyHelper` function:

```javascript
const proxy = ProxyHelper({
    objectProps: 'your object properties here',
    _protected: ['prop1', 'prop2'],
    _private: ['prop3'],
    _mutable: ['prop4'],
});
/**
 * @example ProxyHelper({objectProps..., _protected: array(...)})
 * @param {Object} object
 * @return {Proxy}
 * @usage const proxy = ProxyHelper({objectProps..., _protected: array(...), _private: array(...), _mutable: array(...)})
 * @usage _protected: array(...) -> Cannot be modified
 * @usage _private: array(...) -> Cannot be accessed
 * @usage _mutable: array(...) -> Can be modified
 */
```

### Property Modifiers

-   **\_protected**: Properties that cannot be modified.
-   **\_private**: Properties that cannot be accessed.
-   **\_mutable**: Properties that can be modified.

---

## Examples

### Creating a Proxy with Protected and Private Properties

```javascript
const myObject = {
    prop1: 'This is a public property',
    prop2: 'This is a protected property',
    prop3: 'This is a private property',
};

const proxy = ProxyHelper({
    ...myObject,
    _protected: ['prop2'],
    _private: ['prop3'],
});

console.log(proxy.prop1); // Output: "This is a public property"
console.log(proxy.prop2); // Output: Error
console.log(proxy.prop3); // Output: Error
```

### Just proxy the object

```javascript
const myObject = {
    prop1: 'This is a public property',
    prop2: 'This is a protected property',
    prop3: 'This is a private property',
};

const proxy = ProxyHelper(myObject);
```

---

## Parameters

#### `object: ProxyHelperConfig`

An object of type `ProxyHelperConfig`. This object can have the following optional fields:

-   `_private?: string[]`: An array of property names that should be made private.
-   `_protected?: string[]`: An array of property names that should be made protected.
-   `_mutable?: string[]`: An array of property names that can be modified.
-   `[key: string]: any`: Any additional properties.

---

## Return Value

Returns a Proxy object that wraps the original `object` and applies the privacy, protection, and mutability rules.

---

## License

This project is licensed under the MIT License.

[![release version](https://github.com/knighttower/JsObjectProxyHelper/actions/workflows/pre-release.yml/badge.svg)](https://github.com/knighttower/JsObjectProxyHelper/actions/workflows/pre-release.yml)
[![NPM published](https://github.com/knighttower/JsObjectProxyHelper/actions/workflows/to-npm.yml/badge.svg)](https://github.com/knighttower/JsObjectProxyHelper/actions/workflows/to-npm.yml)
