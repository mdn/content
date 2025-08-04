---
title: Symbol.asyncDispose
short-title: asyncDispose
slug: Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Symbol.asyncDispose
sidebar: jsref
---

The **`Symbol.asyncDispose`** static data property represents the [well-known symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.asyncDispose`. The {{jsxref("Statements/await_using", "await using")}} declaration looks up this symbol on the variable initializer for the method to call when the variable goes out of scope.

## Value

The well-known symbol `Symbol.asyncDispose`.

{{js_property_attributes(0, 0, 0)}}

## Description

An object is async disposable if it has the `[Symbol.asyncDispose]()` method. The method is expected to have the following semantics:

- Invoking this method notifies the AsyncDisposable object that the caller does not intend to continue to use this object. This method should perform any necessary logic to explicit clean up the resource including, but not limited to, file system handles, streams, host objects, etc.
- This method can return a promise, which will be awaited before continuing.
- When an exception is thrown from this method, it typically means that the resource could not be explicitly freed. An AsyncDisposable object is not considered "disposed" until the resulting Promise has been fulfilled.
- If called more than once on the same object, the function should not throw an exception. However, this requirement is not enforced.

## Examples

### User defined async disposables

`[Symbol.asyncDispose]` allows the creation of custom async disposables. See the `await using` reference for more information.

```js
class Disposable {
  #fileHandle;
  #disposed;

  constructor(handle) {
    this.#disposed = false;
    this.#fileHandle = handle;
  }

  async [Symbol.asyncDispose]() {
    await this.#fileHandle.close();
    this.disposed = true;
  }

  get isDisposed() {
    return this.disposed;
  }
}

const resource = new Disposable(await fs.open("my-file.txt", "r"));
{
  await using resourceUsed = resource;
  console.log(resource.isDisposed); // false
}
console.log(resource.isDisposed); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Symbol.asyncDispose` in `core-js`](https://github.com/zloirock/core-js#explicit-resource-management)
- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Symbol.dispose")}}
- {{jsxref("Statements/await_using", "await using")}}
- [`AsyncDisposableStack.prototype[Symbol.asyncDispose]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose)
- [`AsyncIterator.prototype[Symbol.asyncDispose]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncDispose)
