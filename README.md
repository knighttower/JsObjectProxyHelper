# JsObjectProxyHelper
Convert object to proxy to protect the objects

``npm install @knighttower/js-object-proxy-helper``  

``yarn add @knighttower/js-object-proxy-helper``  

```import { ProxyHelper } from '@knighttower/js-object-proxy-helper';```

```css
/**
* @module ProxyHelper
* Convert to proxy to protect objects
* Allows to declare _private, _protected and _mutable all arrays with prop names
* @example ProxyHelper({objectProps..., _protected: array(...)})
* @param {Object} object
* @return {Proxy}
* @usage const proxy = ProxyHelper({objectProps..., _protected: array(...), _private: array(...), _mutable: array(...)})
* @usage _protected: array(...) -> Cannot be modified
* @usage _private: array(...) -> Cannot be accessed
* @usage _mutable: array(...) -> Can be modified
*/
```  
[![release version](https://github.com/knighttower/JsObjectProxyHelper/actions/workflows/pre-release.yml/badge.svg)](https://github.com/knighttower/JsObjectProxyHelper/actions/workflows/pre-release.yml)
[![NPM published](https://github.com/knighttower/JsObjectProxyHelper/actions/workflows/to-npm.yml/badge.svg)](https://github.com/knighttower/JsObjectProxyHelper/actions/workflows/to-npm.yml)
