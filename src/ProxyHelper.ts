type ProxyHelperConfig = {
  _private?: string[],
  _protected?: string[],
  _mutable?: string[],
  [key: string]: any
};

export default function ProxyHelper(object: ProxyHelperConfig): ProxyHelperConfig {
  'use strict';

  const _private = new Set<string>(object._private ? ['_private', ...object._private] : ['_private']);
  const _protected = new Set<string>(object._protected ? [..._private, ...object._protected] : [..._private]);
  const _mutable = new Set<string>(object._mutable || []);

  return new Proxy(object, {
    get(target: ProxyHelperConfig, prop: string) {
      if (prop in target && !_private.has(String(prop))) {
        return target[prop];
      } else {
        console.error('Prop is private, not set or object is protected', prop);
      }
    },
    set(target: ProxyHelperConfig, prop: string, value: any) {
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
        } else {
          console.error('The prop is a function and cannot be modified', prop, value);
        }
      } else {
        console.error('Protected Object, cannot set props', prop, value);
      }
      return true;
    },
  }) as ProxyHelperConfig;
};
