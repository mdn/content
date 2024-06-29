---
title: AsyncDisposableStack
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack
page-type: javascript-class
browser-compat: javascript.builtins.AsyncDisposableStack
---

{{JSRef}}

The **`AsyncDisposableStack`** object represents a stack of [async disposable](/en-US/docs/Web/JavaScript/Reference/Statements/await_using) objects. You can register objects to this stack and dispose of them in reverse order of registration, with strong error handling guarantees.

## Constructor

- {{jsxref("AsyncDisposableStack/AsyncDisposableStack", "AsyncDisposableStack()")}}
  - : Creates a new `AsyncDisposableStack` object.

## Instance properties

These properties are defined on `AsyncDisposableStack.prototype` and shared by all `AsyncDisposableStack` instances.

- {{jsxref("Object/constructor", "AsyncDisposableStack.prototype.constructor")}}
  - : The constructor function that created the instance object. For `AsyncDisposableStack` instances, the initial value is the {{jsxref("AsyncDisposableStack/AsyncDisposableStack", "AsyncDisposableStack")}} constructor.
- {{jsxref("AsyncDisposableStack.prototype.disposed")}}
  - : Read-only. Returns `true` if the `AsyncDisposableStack` has been disposed, or `false` if not.
- `AsyncDisposableStack.prototype[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"AsyncDisposableStack"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

- {{jsxref("AsyncDisposableStack.prototype.adopt()")}}
  - :
- {{jsxref("AsyncDisposableStack.prototype.defer()")}}
  - :
- {{jsxref("AsyncDisposableStack.prototype.disposeAsync()")}}
  - :
- {{jsxref("AsyncDisposableStack.prototype.move()")}}
  - :
- {{jsxref("AsyncDisposableStack.prototype.use()")}}
  - :
- [`AsyncDisposableStack.prototype[Symbol.asyncDispose]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose)
  - :

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Symbol.asyncDispose")}}
- {{jsxref("Statements/await_using", "await using")}}
- {{jsxref("DisposableStack")}}
