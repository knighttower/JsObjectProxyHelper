import { test } from 'vitest';
import ProxyHelper from './ProxyHelper';

test('should protect _private properties', () => {
  const obj = ProxyHelper({ value: 1, _private: ['value'] });
  if (obj.value !== undefined) throw new Error('Failed to protect _private properties');
});

test('should allow access to unprotected properties', () => {
  const obj = ProxyHelper({ value: 1 });
  if (obj.value !== 1) throw new Error('Failed to allow access to unprotected properties');
});

test('should protect _protected properties but allow read access', () => {
  const obj = ProxyHelper({ value: 1, _protected: ['value'] });
  if (obj.value !== 1) throw new Error('Failed to allow read access to _protected properties');
  obj.value = 2;
  if (obj.value !== 1) throw new Error('Failed to protect _protected properties');
});

test('should allow modification of _mutable properties', () => {
  const obj = ProxyHelper({ value: 1, _mutable: ['value'] });
  if (obj.value !== 1) throw new Error('Failed to allow read access to _mutable properties');
  obj.value = 2;
  if (obj.value !== 2) throw new Error('Failed to allow modification of _mutable properties');
});

test('should not allow modification of functions', () => {
  const obj = ProxyHelper({ func: () => 1 });
  obj.func = () => 2;
  if (obj.func() !== 1) throw new Error('Failed to protect function modification');
});
